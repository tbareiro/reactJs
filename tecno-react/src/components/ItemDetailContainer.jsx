import React from "react";
import ItemDetail from "ItemDetail.jsx";

const ItemDetailContainer = () => {
    setTimeout(() => {
        return (
            <div className="container">
                <ItemDetail />
            </div>
        )
    }, 2000)
}

export default ItemDetailContainer;
