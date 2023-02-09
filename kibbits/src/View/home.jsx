import React from "react";
import Flowers from "../components/logoFlower";
import House from "../components/logoHouse";
import MenuPics from "../img/menu.png"
import CookPics from "../img/ding.png"
import { Link } from "react-router-dom";

function Home(){
    return (
        <div className="home">
            <header className="logos">
            <Flowers/>
            <House />
            <Flowers/>
            </header>
      <section className="Who">
        <h1>¿Quien soy?</h1>
        <button className="meseroButton"><Link to="mesero" className="button">Mesero<img src={MenuPics} className="menuPics" alt="menuPics" /></Link></button>
        <button className="cocinaButton"><Link to="cocina" className="button">Cocina<img src={CookPics} className="cookPics" alt="cookPics" /></Link></button>
      </section>
      </div> 
    )
}
export default Home;