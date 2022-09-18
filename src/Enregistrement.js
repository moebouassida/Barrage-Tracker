import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import "./Enregistrement.css";
import React from "react";
import data from './img/data.png';


export default function Enregistrement() {

    const navigate = useNavigate();
    return(<div><Navbar where={"Edit"} logout_icon={true} />
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
    
