import React from "react";
import ButtonHome from "../components/homeButtom";
import Flowers from "../components/logoFlower";
import House from "../components/logoHouse";

function Cocina(){
    return (
        <div>
            <header className="logoMenu">
            <House />
            <Flowers/>
            </header>
            <ButtonHome/>
            
      </div>
    )
}
export default Cocina;