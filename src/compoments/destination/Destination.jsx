import React from "react";
import "./Destination.css";
import datas from "../../data/destination.json"
export default function Destination({data}) {
  return (
    <div  className="CardDestination">
    <li>
      <img className="imagedest" src={data.image} alt="image destination" /> 
      <p>{data.location}</p>
      <p>{data.prix}€/Nuit</p>
    </li>
    </div>
   
  );
}
