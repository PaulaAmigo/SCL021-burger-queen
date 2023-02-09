import React, { useState } from "react";
import Flowers from "../components/logoFlower";
import House from "../components/logoHouse";
import Menu from "../components/menu1.json";
import Tea from "../img/tea.png";
import Burger from "../img/burger.png";
import ButtonHome from "../components/homeButtom.jsx"
import Delete from "../img/close.png"
import Add from "../img/addFood.png"
import Minus from "../img/minus.png"
import { createOrder } from "../firebase/firebase";

import { Link } from "react-router-dom";



const desayunoAM = Menu.desayuno;
const restoDelDia = Menu.restoDelDia;


function Mesero() {
    const [menu, setMenu] = useState("desayuno")
    const [pedido, setPedido]= useState([ ])
    const [count, setCount] = useState(0)
//al darle click a un producto se tiene que actualizar el pedido.
//crear una funcion que agregue productos L22, estado inicial pedido vacio, agregar nombre y precio
const eliminarProducto= (indiceProducto) => {
  const menuFiltrado = pedido.filter((item, indice) => indice !== indiceProducto)
 setPedido(menuFiltrado)
}
const sentOrder= async() => {
    const result= await createOrder({pedido})
}

//setPedido([])
//con el onClick que ejecute esta funcion. Los datos estas en el value y name.
//e.target en el onCLick
    return (
        <div>
            <header className="logoMenu">

                <House />
                <Flowers  />
            </header>
            <div className="mesero">
                <div className="menuContainer">
                    <div className="buttons">
                        {/* agrego los botones con su setEstado para que al darle el evento click se muestre el menu de desayuno o resto del día */}
                        <button className="menuButton" onClick={() => { setMenu("desayuno") }}>Desayuno<img src={Tea} className="tea" alt="tea" /></button>
                        <button className="menuButton" onClick={() => { setMenu("resto del dia") }}>Resto del día<img src={Burger} className="burger" alt="burger" /></button>
                    </div>


                    <div className="desayuno">
                        {menu === "desayuno" ? (<>{desayunoAM.map((items, i) => (
                            <div key={i}>
                                <button id={items.id}  value={items.price} name={items.product} className="items" onClick={()=> {setPedido([...pedido,items])}} >{items.product} ${items.price}</button>
                            </div>
                            
                        ))}</>) : null}
                    </div>

                    <div className="restoDelDia">
                        {menu === "resto del dia" ? (<>{restoDelDia.map((items, i) => (
                        <div key={i}>
                                <button id={items.id}  value={items.price} name={items.product} className="items" onClick={()=> {setPedido([...pedido,items])}}>{items.product} ${items.price}</button>
                        </div>
                        ))}</>) : null}
                    </div>
                </div>

                <div className="order">
                    <h2>Resumen del pedido</h2>
                    <div className="resume">
                        <input className="clientName" id="clientName" placeholder="nombre del cliente" width="20px" height="15px"></input>
                       
                        <div className="orderTable">
                            {pedido.map((orden, index) => (
                                <div className="order" key={index}>
                                <h3>
                                {orden.product} {orden.price} 
                                <button className="imgButton" onClick={()=> {eliminarProducto(index)}}><img src={Delete} className="img" alt="delete"/></button>
                                <button className="imgButton"><img src={Minus} className="img" alt="minus"/></button> 
                                <button className="imgButton"><img src={Add} className="img" alt="add"/></button>
                                </h3>
                                </div>
                            ))}
                                    
                        </div>
                        <input className="comments" id="comments" placeholder="Comentarios"></input>
                        
                        <input className="table" id="table" type="number" min="1" max="10"></input>
                        <button className="kitchen" onClick={sentOrder}>Enviar a cocina</button>
                    </div>
                </div>


            </div>
            <footer>
                <ButtonHome />
            </footer>


        </div>
    )
}
export default Mesero;