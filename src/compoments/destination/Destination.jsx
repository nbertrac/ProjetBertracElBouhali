import React from "react";
import "./Destination.css";
export default function Destination({ cover, city, country, status, price }) {
  return (
    <li>
      <img className="" src={cover} alt="image destination" />
      <p>{city + "," + country}</p>
      <p>{status}</p>
      <p>{price}€/Nuit</p>
    </li>
  );
}
