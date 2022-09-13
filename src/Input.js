import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import "./Input.css";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "./api/axios";
import React, { useEffect, useRef, useState } from "react";
import back_brg from "./assets/back_brg.png";

const getByDateAndName_url = "/api/element/getByDateAndName";

export default function Input() {
//   const [element, setElement] = useState(null);
const [initialValues,setInitialValues]=useState(null)

  useEffect(() => {
    axios
      .get(getByDateAndName_url, {
        params: {
          Nom_Fr: "mellegue",
          Date: "2022-09-10 00:00:00",
        },
      })
      .then((response) => {
        console.log(response.data);
        const element=response.data;
        console.log(element);
        if(element !== null){
        setInitialValues({
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
          });}
          else {setInitialValues({
            Nom_Fr: '',
            Nom_Ar:'',
            apports:'',
            id_barrage: '',
            lachers: '',
            stock: '',
            cumul_mensuel_apports:'',
            cumul_annuel_apports:'',
            cumul_mensuel_lachers:'',
            cumul_annuel_lachers:'',
            moy_mois:'',
            cumul_annee_prec:'',
            moy_periode:'',
            stock_annee_prec:'',
            Cap_tot_act:'',
            Cote:'',
            Cap_tot_init:'',
            fonctionnel:'',
            Annee_prod:'',
            Latitude:'',
            Longitude:'',
            Bassin_versant:'',
          });}

 
        })
      .catch((error) => {
        console.log("lmochkel fel connection");
        console.log(error);
      });
  }, []);
 
 
 
 
 const formik=useFormik({initialValues,validationSchema: Yup.object({
    Nom_Fr: Yup.string()
      .max(10, "Must be 4 caracters or less.")
      .required("required *"),
    Nom_Ar: Yup.string()
      .max(10, "Must be 4 caracters or less.")
      .required("required *"),
    apports: Yup.string().required("required *"),
    id_barrage: Yup.string().required("required *"),
    lachers: Yup.string().required("required *"),
    stock: Yup.string().required("required *"),
    cumul_mensuel_apports: Yup.string().required("required *"),
    cumul_annuel_apports: Yup.string().required("required *"),
    cumul_mensuel_lachers: Yup.string().required("required *"),
    cumul_annuel_lachers: Yup.string().required("required *"),
    moy_mois: Yup.string().required("required *"),
    cumul_annee_prec: Yup.string().required("required *"),
    moy_periode: Yup.string().required("required *"),
    stock_annee_prec: Yup.string().required("required *"),
    Cap_tot_act: Yup.string().required("required *"),
    Cote: Yup.string().required("required *"),
    Cap_tot_init: Yup.string().required("required *"),
    fonctionnel: Yup.string().required("required *"),
    Annee_prod: Yup.string().required("required *"),
    Latitude: Yup.string().required("required *"),
    Longitude: Yup.string().required("required *"),
    Bassin_versant: Yup.string().required("required *"),
  }),
  onSubmit: (values) => {
    console.log(values);
  },
});
console.log(initialValues);
  const navigate = useNavigate();
  if (initialValues===null){
  return (null);}
 return(
    <div>
      <Navbar where={"Edit"} logout_icon={false} />
      
     
        <form action="#" id="form" onSubmit={formik.handleSubmit} className="form_input">
        <div className="input1">
          <input className='input_brg'
            id="Nom_Fr"
            value={(formik.values)?formik.values.Nom_Fr:null}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            type="text"
            placeholder="Nom Français"
            autoComplete="off"
          />
          <input className='input_brg'
            id="Nom_Ar"
            value={(formik.values)?formik.values.Nom_Ar:null}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            type="text"
            placeholder="Nom Arabe"
            autoComplete="off"
          />
          <input className='input_brg'
            id="apports"
            value={(formik.values)?formik.values.apports:null}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            type="text"
            placeholder="Apports"
            autoComplete="off"
          />
          </div>
          <div className="input1">
          <input className='input_brg'
            id="id_barrage"
            value={(formik.values)?formik.values.id_barrage:null}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            type="text"
            placeholder="id_barrage"
            autoComplete="off"
          />
          <input className='input_brg'
            id="lachers"
            value={(formik.values)?formik.values.lachers:null}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            type="text"
            placeholder="lachers"
            autoComplete="off"
          />
          <input className='input_brg'
            id="stock"
            value={(formik.values)?formik.values.stock:null}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            type="text"
            placeholder="stock"
            autoComplete="off"
          />
          </div>
          <div className="input1">
         
          <input className='input_brg'
            id="cumul_mensuel_apports"
            value={(formik.values)?formik.values.cumul_mensuel_apports:null}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            type="text"
            placeholder="cumul_mensuel_apports"
            autoComplete="off"
          />
          <input className='input_brg'
            id="cumul_annuel_apports"
            value={(formik.values)?formik.values.cumul_annuel_apports:null}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            type="text"
            placeholder="cumul_annuel_apports"
            autoComplete="off"
          />
         </div>
          <div className="input1">
          <input className='input_brg'
            id="cumul_mensuel_lachers"
            value={(formik.values)?formik.values.cumul_mensuel_lachers:null}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            type="text"
            placeholder="cumul_mensuel_lachers"
            autoComplete="off"
          />
          <input className='input_brg'
            id="cumul_annuel_lachers"
            value={(formik.values)?formik.values.cumul_annuel_lachers:null}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            type="text"
            placeholder="cumul_annuel_lachers"
            autoComplete="off"
          />
          </div>
          <div className="input1">
          <input className='input_brg'
            id="moy_mois"
            value={(formik.values)?formik.values.moy_mois:null}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            type="text"
            placeholder="moy_mois"
            autoComplete="off"
          />

          <input className='input_brg'
            id="cumul_annee_prec"
            value={(formik.values)?formik.values.cumul_annee_prec:null}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            type="text"
            placeholder="cumul_annee_prec"
            autoComplete="off"
          />
         </div>
          <div className="input1">

          <input className='input_brg'
            id="moy_periode"
            value={(formik.values)?formik.values.moy_periodes:null}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            type="text"
            placeholder="moy_periode"
            autoComplete="off"
          />
          </div>
          <div className="input1">

          <input className='input_brg'
            id="stock_annee_prec"
            value={(formik.values)?formik.values.stock_annee_prec:null}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            type="text"
            placeholder="stock_annee_prec"
            autoComplete="off"
          />

          <input className='input_brg'
            id="Cap_tot_act"
            value={(formik.values)?formik.values.Cap_tot_act:null}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            type="text"
            placeholder="Cap_tot_act"
            autoComplete="off"
          />

          <input className='input_brg'
            id="Cote"
            value={(formik.values)?formik.values.Cote:null}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            type="text"
            placeholder="Cote"
            autoComplete="off"
          />
</div>
<div className="input1">
          <input className='input_brg'
            id="Cap_tot_init"
            value={(formik.values)?formik.values.Cap_tot_init:null}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            type="text"
            placeholder="Cap_tot_init"
            autoComplete="off"
          />

          <input className='input_brg'
            id="fonctionnel"
            value={(formik.values)?formik.values.fonctionnel:null}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            type="text"
            placeholder="fonctionnel"
            autoComplete="off"
          />

          <input className='input_brg'
            id="Annee_prod"
            value={(formik.values)?formik.values.Annee_prod:null}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            type="text"
            placeholder="Annee_prod"
            autoComplete="off"
          />
         </div>
          <div className="input1">

          <input className='input_brg'
            id="Latitude"
            value={(formik.values)?formik.values.Latitude:null}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            type="text"
            placeholder="Latitude"
            autoComplete="off"
          />

          <input className='input_brg'
            id="Longitude"
            value={(formik.values)?formik.values.Longitude:null}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            type="text"
            placeholder="Longitude"
            autoComplete="off"
          />

          <input className='input_brg'
            id="Bassin_versant"
            value={(formik.values)?formik.values.Bassin_versant:null}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            type="text"
            placeholder="Bassin_versant"
            autoComplete="off"
          />
          </div>
         
        </form>
       
        <img className='img_brg' src={back_brg}></img>

      <button
       className="btn"
      >Enregistrer</button>
    </div>);
  ;
}