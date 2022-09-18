import { useNavigate,useSearchParams,createSearchParams } from "react-router-dom";
import Navbar from "./Navbar";
import "./Input.css";

import axios from "./api/axios";
import React, { useEffect, useState,useContext } from "react";
import back_brg from "./img/back_brg.png";
import { UserContext } from "./UserContext";

const getByDateAndName_url = "/api/element/getByDateAndName";
const updateInput_url = "/api/element/update";
const create_url = "/api/element/create";
const numbers = Array(10)
  .fill()
  .map((v, i) => `${i}`);
numbers.push(".");
console.log(numbers);
var testInput = [];
const barrageListAr =["مـــــلاق","سراط","بنيمطيــر","كســاب","بربرة","سيدي ســــالم","بو هرتمـــــه","جوميــــــن","غزالـــــــة","المالح","الطين","سجنــــــان","الزرقة","الكبير","المولى","سيدي البــــراق","الزياتين","القمقوم","الحركة","سليانـــــــة","لخمـــــــاس","الرميـــــــل","بئر المشارقـــة","الرمــــــل","نبهانــــــة","سيدي سعـــد","هـــــــوارب","سفيسيفة","سيدي يعيــــش","البــــــــرك","بزيـــــــغ","شيبـــــــة","مصــــــري","لبنــــــــة","الحمـــــى","العبيـــــــد"]
const barrageListFr = ['mellegue', 'sarrat', 'benmetir', 'kasseb', 'barbara', 'sidisalem', 'bouheurtma', 'joumine', 'ghezala', 'melah', 'tine', 'siliana', 'lakhmess', 'rmil', 'birmcherga', 'rmel', 'nebhana', 'sidisaad', 'elhaouareb', 'sficifa', 'sidiach', 'elbrek', 'bezirk', 'chiba', 'masri', 'lebna', 'hma', 'abid'];
export default function Input() {
  const navigate = useNavigate();
  const {value,setValue}=useContext(UserContext)
  useEffect(()=>{
    if (!value)
    {
        navigate('/login')
    }
},[])
  const [searchparams] = useSearchParams()
  let Date,Nom_Fr;
  if (value)
  {
    Date=searchparams.get('Date');
    Nom_Fr=searchparams.get('Nom_Fr').toLowerCase();
  }
  const index=barrageListFr.indexOf(Nom_Fr);
  const [allValues, setAllValues] = useState(null);
  const [testElement, setTestElement] = useState(null);

  const verif = (x) => {
    var test = false;
    for (var i = 0; i < x.length; i++) {
      if (numbers.indexOf(x[i]) !== -1) {
        test = true;
      } else {
        test = false;
      }
    }
    return test;
  };

  const handleChange = (e) => {
    console.log(e.target.value);

    console.log(verif(e.target.value));
    testInput.push(verif(e.target.value));
    console.log(testInput);
    if ((verif(e.target.value))||(e.target.value==='')) {
      setAllValues({ ...allValues, [e.target.name]: e.target.value });
    }
  };

  useEffect(() => {
    axios
      .get(getByDateAndName_url, {
        params: {
          Nom_Fr: Nom_Fr,
          Date: Date,
        },headers : {"x-access-token":localStorage.getItem('token')}
      })
      .then((response) => {
        const element = response.data;

        if (element !== null) {
          console.log("mizou");
          console.log(element.Nom_Fr);
          setTestElement(element);

          setAllValues({
            _id: element._id,
            Nom_Fr: element.Nom_Fr,
            Nom_Ar: element.Nom_Ar,
            apports: element.apports,
            id_barrage: element.id_barrage,
            lachers: element.lachers,
            stock: element.stock,
            cumul_mensuel_apports: element.cumul_mensuel_apports,
            cumul_annuel_apports: element.cumul_annuel_apports,
            cumul_mensuel_lachers: element.cumul_mensuel_lachers,
            cumul_annuel_lachers: element.cumul_annuel_lachers,
            moy_mois: element.moy_mois,
            cumul_annee_prec: element.cumul_annee_prec,
            moy_periode: element.moy_periode,
            stock_annee_prec: element.stock_annee_prec,
            Cap_tot_act: element.Cap_tot_act,
            Cote: element.Cote,
            Cap_tot_init: element.Cap_tot_init,
            fonctionnel: element.fonctionnel,
            Annee_prod: element.Annee_prod,
            Latitude: element.Latitude,
            Longitude: element.Longitude,
            Bassin_versant: element.Bassin_versant,
          });
        } else {
          setAllValues({
            Nom_Fr: barrageListFr[index],
            Nom_Ar: barrageListAr[index],
            apports: "",
            id_barrage: "",
            lachers: "",
            stock: "",
            cumul_mensuel_apports: "",
            cumul_annuel_apports: "",
            cumul_mensuel_lachers: "",
            cumul_annuel_lachers: "",
            moy_mois: "",
            cumul_annee_prec: "",
            moy_periode: "",
            stock_annee_prec: "",
            Cap_tot_act: "",
            Cote: "",
            Cap_tot_init: "",
            fonctionnel: "",
            Annee_prod: "",
            Latitude: "",
            Longitude: "",
            Bassin_versant: "",
          });
        }
      })
      .catch((error) => {
        if (error.request.status===401)
        {
          localStorage.removeItem('username');localStorage.removeItem('token');setValue(false);
          navigate({pathname:'/login',search:createSearchParams({ auth : true}).toString()})
        } 
        else
        {
          console.log(error)
        }
      });
  }, []);
  
  const createElement = (v) => {
    console.log(v);
    axios
      .post(create_url,{...v, },{headers : {"x-access-token":localStorage.getItem('token')}})
      .then((response) => {
        console.log(response); 
        console.log("element created");
      })
      .catch((error) => {
        if (error.request.status===401)
        {
          localStorage.removeItem('username');localStorage.removeItem('token');setValue(false);
          navigate({pathname:'/login',search:createSearchParams({ auth : true}).toString()})
        } 
        else
        {
          console.log(error)
        }
      });
  };

  const updateInputs = (id, values) => {
    console.log(values);
    axios
      .put(updateInput_url,{
        id: id,
        ...values,
      },{headers:{"x-access-token":localStorage.getItem('token')}})
      .then((response) => {
        console.log(response);
        console.log("samir");
      })
      .catch((error) => {
        if (error.request.status===401)
        {
          localStorage.removeItem('username');localStorage.removeItem('token');setValue(false);
          navigate({pathname:'/login',search:createSearchParams({ auth : true}).toString()})
        } 
        else
        {
          console.log(error)
        }
      });
  };

  if (allValues === null) {
    return null;
  }
  console.log("lelement");
  console.log(testElement);
  console.log("moez");
  console.log(allValues._id);
  return (
    <div>
      <Navbar where={"Edit"} user={true} />

      <div className="line">
        <div className="line1"></div>
        <div className="line2"></div>
      </div>
      <div className="inputWrapper">
      <form action="#" id="form" className="form_input">
        <div className="input">
          <input
            className="input_brg"
            name="Nom_Fr"
            value={allValues.Nom_Fr}
            readOnly
            type="text"
            placeholder="Nom Français"
            autoComplete="off"
          />
          <input
            className="input_brg"
            name="Nom_Ar"
            value={allValues.Nom_Ar}
            readOnly
            type="text"
            placeholder="Nom Arabe"
            autoComplete="off"
          />
          <input
            className="input_brg"
            name="apports"
            value={allValues.apports}
            onChange={handleChange}
            type="text"
            placeholder="Apports"
            autoComplete="off"
          />
        </div>
        <div className="input">
          <input
            className="input_brg"
            name="id_barrage"
            value={allValues.id_barrage}
            onChange={handleChange}
            type="text"
            placeholder="ID Barrage"
            autoComplete="off"
          />

          <input
            className="input_brg"
            name="lachers"
            value={allValues.lachers}
            onChange={handleChange}
            type="text"
            placeholder="Lachers"
            autoComplete="off"
          />
          <input
            className="input_brg"
            name="stock"
            value={allValues.stock}
            onChange={handleChange}
            type="text"
            placeholder="Stock"
            autoComplete="off"
          />
        </div>
        <div className="input">
          <input
            className="input_brg1"
            name="cumul_mensuel_apports"
            value={allValues.cumul_mensuel_apports}
            onChange={handleChange}
            type="text"
            placeholder="Cumul Mensuel Apports"
            autoComplete="off"
          />
          <input
            className="input_brg1"
            name="cumul_annuel_apports"
            value={allValues.cumul_annuel_apports}
            onChange={handleChange}
            type="text"
            placeholder="Cumul Annuel Apports"
            autoComplete="off"
          />
        </div>
        <div className="input">
          <input
            className="input_brg1"
            name="cumul_mensuel_lachers"
            value={allValues.cumul_mensuel_lachers}
            onChange={handleChange}
            type="text"
            placeholder="Cumul Mensuel Lachers"
            autoComplete="off"
          />
          <input
            className="input_brg1"
            name="cumul_annuel_lachers"
            value={allValues.cumul_annuel_lachers}
            onChange={handleChange}
            type="text"
            placeholder="Cumul Annuel Lachers"
            autoComplete="off"
          />
        </div>
        <div className="input">
          <input
            className="input_brg1"
            name="moy_mois"
            value={allValues.moy_mois}
            onChange={handleChange}
            type="text"
            placeholder="Moyenne Mois"
            autoComplete="off"
          />

          <input
            className="input_brg1"
            name="cumul_annee_prec"
            value={allValues.cumul_annee_prec}
            onChange={handleChange}
            type="text"
            placeholder="Cumul Année Precédente"
            autoComplete="off"
          />
        </div>
        <div className="input">
          <input
            className="input_brg1"
            name="moy_periode"
            value={allValues.moy_periode}
            onChange={handleChange}
            type="text"
            placeholder="Moyenne Période"
            autoComplete="off"
          />

          <input
            className="input_brg1"
            name="stock_annee_prec"
            value={allValues.stock_annee_prec}
            onChange={handleChange}
            type="text"
            placeholder="Stock Année Precédente"
            autoComplete="off"
          />
        </div>
        <div className="input">
          <input
            className="input_brg2"
            name="Cap_tot_act"
            value={allValues.Cap_tot_act}
            onChange={handleChange}
            type="text"
            placeholder="Cap Tot Act"
            autoComplete="off"
          />

          <input
            className="input_brg2"
            name="Cote"
            value={allValues.Cote}
            onChange={handleChange}
            type="text"
            placeholder="Cote"
            autoComplete="off"
          />

          <input
            className="input_brg2"
            name="Cap_tot_init"
            value={allValues.Cap_tot_init}
            onChange={handleChange}
            type="text"
            placeholder="Cap Tot Init"
            autoComplete="off"
          />
          <input
            className="input_brg2"
            name="fonctionnel"
            value={allValues.fonctionnel}
            onChange={handleChange}
            type="text"
            placeholder="Fonctionnel"
            autoComplete="off"
          />
        </div>
        <div className="input">
          <input
            className="input_brg3"
            name="Annee_prod"
            value={allValues.Annee_prod}
            onChange={handleChange}
            type="text"
            placeholder="Année Prod"
            autoComplete="off"
          />
          <input
            className="input_brg3"
            name="Latitude"
            value={allValues.Latitude}
            onChange={handleChange}
            type="text"
            placeholder="Latitude"
            autoComplete="off"
          />
        </div>
        <div className="input">
          <input
            className="input_brg3"
            name="Longitude"
            value={allValues.Longitude}
            onChange={handleChange}
            type="text"
            placeholder="Longitude"
            autoComplete="off"
          />

          <input
            className="input_brg3"
            name="Bassin_versant"
            value={allValues.Bassin_versant}
            onChange={handleChange}
            type="text"
            placeholder="Bassin Versant"
            autoComplete="off"
          />
        </div>
        <button
          className="btn"
          onClick={() => {
            if (testElement !== null) {
              updateInputs(allValues._id, allValues);
              console.log("nouss");
              console.log(allValues);
              navigate("/enregistrement");
            } else {
              createElement(allValues);
              console.log("nounou");
              navigate("/enregistrement");
            }
          }}
        >
          Enregistrer
        </button>
      </form>

      <img className="img_brg" src={back_brg}></img>
      </div>
    </div>
  );
}
