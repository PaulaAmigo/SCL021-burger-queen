import React from "react";
import Flowers from "../components/logoFlower";
import House from "../components/logoHouse";
import Menu from "../components/menu1.json";
import Tea from "../img/tea.png";
import Burger from "../img/burger.png";
import Home from "../img/home.png"
import { Link } from "react-router-dom";

console.log(Menu.restoDelDia);

const desayunoAM = Menu.desayuno;
const restoDelDia = Menu.restoDelDia;


function Mesero(){
    return (
        <div>
            <header className="logoMenu">
            <House />
            <Flowers/>
            </header>
                <button className="menu">Desayuno<img src={Tea} className="tea" alt="tea" /></button>
            <div>
                {desayunoAM.map(items => (
                    <>
                    <h4 className="items">{items.product}</h4>
                    <h4 className="price">{items.price}</h4>
                    </>
                ))}
            </div>
            <button className="menu">Resto del día<img src={Burger} className="burger" alt="burger" /></button>
            <div>
                {restoDelDia.map(items => (
                    <>
                    <h4 className="items">{items.product} {items.price}</h4>
                    </>
                ))}
            </div>
            <div>
                <h2>Resumen del pedido</h2>
            </div>
            <button className="button"><Link to="/" className="home"><img src={Home} className="homePic" alt="home" /></Link></button>
            
      </div>
    )
}
export default Mesero;