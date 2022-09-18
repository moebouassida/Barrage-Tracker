import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import "./Enregistrement.css";
import React,{useEffect,useContext} from "react";
import data from './img/data.png';
import { UserContext } from "./UserContext";


export default function Enregistrement() {
  const navigate = useNavigate()
  const {value,setValue}=useContext(UserContext)
  useEffect(()=>{
      if (!value)
      {
          navigate('/login')
      }
  })
    return(<div><Navbar where={"Edit"} user={true} />
    <div className="line0">
        <div className="line3"></div>
        <div className="line4"></div>
      </div>
      <div className="wrap">
      <img className="data" src={data}></img>
      <p className="registred">L'ENREGISTREMENT A ÉTÉ EFFECTUÉ AVEC SUCCÈS .</p>
      </div>
</div>




);
}
    
