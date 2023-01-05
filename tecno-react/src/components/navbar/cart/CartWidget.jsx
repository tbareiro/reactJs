import React, { useContext } from "react";
import { CartContext } from "./CartContext";
import { Link } from "react-router-dom";

const CartWidget = () => {
    const {cartTotal} = useContext(CartContext);

    return cartTotal() ? <Link to={"/cart"}>
            <img width={50} className="carritoIcon" src="./assets/carritoIcon.png" alt="carrito"/>
            <span>{cartTotal()}</span>
        </Link> : ""
}

export default CartWidget;