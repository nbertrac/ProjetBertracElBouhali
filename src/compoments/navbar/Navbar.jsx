import React from "react";
import "./navbar.css";
import styled from "styled-components";

const Input =styled.input`
          height:40px;
          width: 350px;
          border-radius:50px;
          border:1px solid grey;
         `
const Button =styled.button`
          background:#0080ff;
          height: 40px;
          border-radius:20%;

         `

export default function Navbar() {
  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">NAV</div>
        <div className="topCenter">
           
          <Input
            name="research"
            type="text"
            placeholder="Recherchez des destination..."
            
          />

          <Button></Button>

         
        </div>
        <div className="topRight">
          <span className="topicons">1</span>

          <img
            src="https://zupimages.net/up/22/14/s9dy.png"
            alt=""
            className="photoAccount"
          />
        </div>
      </div>
    </div>
  );
}
