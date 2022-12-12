import React from "react";
import logo from "../assets/logo192.png";

const Lista = ({valor}) => {
    return (
        <li className="itemList"><a href="https://www.google.com.ar" target={"_blank"}>{valor}</a></li>
    )
}

const NavBar = ({children}) => {
    return (
        <div className="container-fluid">
            <nav className="nav-bar">
                <img className="logo" src={logo} alt="logo" />
                <ul className="list">
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