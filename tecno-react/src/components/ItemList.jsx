import React from "react";
import { useState, useEffect } from "react";

const ItemList = () => {
    const [items, setItems] = useState([])

    useEffect(() => {
        fetch('https://api.mercadolibre.com/sites/MLA/search?q=peugeot%20208&limit=10')
        .then((resp) => resp.json())
        .then((data) => {
            setTimeout(() => {
                setItems(data.results)
            }, 2000)
        })
    }, [])

    return (
        <div className="row">
            <h1>Catalogo</h1>
            {
                items.map(item => 
                    <div className="col-md-2" key={item.id}>
                        <img src={item.thumbnail} alt={item.title} width={160} /><br />
                        <h3>{item.title}</h3><br />
                        <b>${item.price}</b><br />
                    </div>
                    )
            }
        </div>
    )
}

export default ItemList;