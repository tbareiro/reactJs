import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const ItemCount = ({stockItems, onAdd}) => {
    const [amount, setAmount] = useState(1);
    const [stock, setStock] = useState(stockItems);
    const [vendido, setVendido] = useState(false);

    function add() {
        if (amount < stockItems) {
            setAmount(amount + 1)
            }
        }

    function remove(){
        if (amount !== 0) {
            setAmount(amount - 1)
            }
        }

    const addCart = (qty) => {
        setStock(stock - qty)
        setAmount(1)
        setVendido(true)
        onAdd(qty)
    }

    useEffect(() => {
        setStock(stock)
    }, [stock])

    return (
        <div className="addToCartContainer">
            <div className="btn-group" role="group" aria-label="Basic outlined example">
                <button type="button" className="btn btn-outline-primary" onClick={remove}><h2>-</h2></button>
                <button type="button" className="btn btn-outline-primary"><h3>{amount}</h3></button>
                <button type="button" className="btn btn-outline-primary" onClick={add}><h2>+</h2></button>
            </div>
            <p>Stock: {stockItems}</p>
            <div className="row">
                <div className="col-md-12">
                    {vendido ? <Link to={"/cart"} className="btn btn-outline-primary">Ir a pagar</Link> : <button className="btn btn-outline-primary" onClick={() => {addCart(amount)}}>Agregar al Carrito</button>}
                </div>
            </div>
        </div>
    )
}

export default ItemCount;