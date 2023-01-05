import React, { useContext } from "react";
import ItemCount from "./ItemCount"
import { CartContext } from "../navbar/cart/CartContext";

const ItemDetail = ({item}) => {
    const {add} = useContext(CartContext);

    const onAdd = (qty) => {
        add(item, qty);
    }


    return (
        <div className="row my-5">
            <div className="col-md-6 offset-md-3 text-center">
                <img src={item.imagen} className="img-fluid" alt={item.nombre} />
                <h1>{item.nombre}</h1>
                <p>{item.descripcion}</p>
                <p><b>${item.precio}</b></p>
                <ItemCount stockItems={item.stock} onAdd={onAdd} /> 
            </div>
        </div>
    )
}

export default ItemDetail;