import React from "react"

const Titulo = ({valor}) => {
    return (
        <h2>{valor}</h2>
    )
}

const Item = ({valor}) => {
    return (
        <li>{valor}</li>
    )
}

const Input = ({valor}) => {
    return (
        <input type="text" placeholder={valor} />
    )
}


const Menu = (props) => {
    return (
        <div>
            <h1>Componente de clase</h1>
            <Titulo valor="Titulo cualquiera"/>
            <Input valor="Ingrese su nombre"/>
            <ul>
                <Item valor="Te"/>
                <Item valor="Cafe"/>
                <Item valor="Mate"/>
            </ul>
        </div>
    )
}

export default Menu;