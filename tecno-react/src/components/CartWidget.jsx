import React from "react";

const CartWidget = () => {
    return (
        <button type="button">
            <img width={50} className="carritoIcon" src="/assets/carritoIcon.png" alt="carrito"/>
            <span>1</span>
        </button>
    )
}

export default CartWidget;