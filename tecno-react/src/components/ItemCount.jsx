import React from "react";
import { useState } from "react";

const ItemCount = (props) => {
    const [amount, setAmount] = useState(0);

    function Add() {
        if (amount < props.stock) {
            setAmount(amount + 1)
            }
        }

    function Remove(){
        if (amount !== 0) {
            setAmount(amount - 1)
            }
        }

    return (
        <div className="addToCartContainer">
            <div className="itemCountContainer">
                <div className="itemCountText" onClick={Remove}><h2>-</h2></div>
                <div className="itemCountNumber"><h3>{amount}</h3></div>
                <div className="itemCountText" onClick={Add}><h2>+</h2></div>
            </div>
            <p>Stock: {props.stock}</p>
            <div className="addButton">
                <h2>Agregar al carrito</h2>
            </div>
        </div>
    )
}

export default ItemCount;