import React from "react";
import logo from "../assets/logo192.png";

const Lista = ({valor}) => {
    return (
        <li class="itemList"><a href="#">{valor}</a></li>
    )
}

const NavBar = ({children}) => {
    return (
        <div>
            <nav class="nav-bar">
                <img class="logo" src={logo} alt="logo" />
                <ul class="list">
                    <Lista valor="Inicio"/>
                    <Lista valor="Nosotros"/>
                    <Lista valor="Catalogo"/>
                    <Lista valor="Contacto"/>
                </ul>
                {children}
            </nav>
        </div>
    )
}

export default NavBar;