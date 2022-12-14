import React from "react";
import { useState } from "react";

const ItemCount = ({stockItems}) => {
    const [amount, setAmount] = useState(0);

    function Add() {
        if (amount < stockItems) {
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
            <div className="btn-group" role="group" aria-label="Basic outlined example">
                <button type="button" className="btn btn-outline-primary" onClick={Remove}><h2>-</h2></button>
                <button type="button" className="btn btn-outline-primary"><h3>{amount}</h3></button>
                <button type="button" className="btn btn-outline-primary" onClick={Add}><h2>+</h2></button>
            </div>
            <p>Stock: {stockItems}</p>
            <div className="row">
                <div className="col-md-12">
                    <button className="btn btn-outline-primary">Agregar al Carrito</button>
                </div>
            </div>
        </div>
    )
}

export default ItemCount;