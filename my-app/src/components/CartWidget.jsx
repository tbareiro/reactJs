import React from "react";
import carritoIcon from "../assets/carritoIcon.png"

const CartWidget = () => {
    return (
        <div>
            <img class="carritoIcon" src={carritoIcon} alt="carrito"/>
        </div>
    )
}

export default CartWidget;