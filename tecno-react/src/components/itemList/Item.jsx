import React from "react";
import { Link } from "react-router-dom";

const Item = ({item}) => {
    return (
        <Link to={"/item/" + item.id} className="text-decoration-none text-dark">
            <div className="card text-center">
                <img src={item.imagen} className="card-img-top" alt={item.nombre}/>
                <div className="card-body m-3">
                    <h5 className="card-title mb-3">{item.nombre}</h5>
                    <b>${item.precio}</b>
                    <p className="card-text">Stock: {item.stock}</p>
                    <Link to={"/item/" + item.id} className="btn btn-primary mt-2">Ver más</Link>
                </div>
            </div>
        </Link>
    )
}
export default Item;