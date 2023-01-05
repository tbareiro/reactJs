import React from "react";
import { useParams, Link } from "react-router-dom";

const Orden = () => {
    const {id} = useParams()

    return (
        <div className="container py-5">
            <div className="row">
                <div className="col-md-12 text-center">
                    <h1>Gracias por tu compra!</h1>
                    <p>Orden de compra: <b>{id}</b></p>
                    <Link to={"/"} className="btn">Ir a la pagina principal</Link>
                </div>
            </div>
        </div>
    )
}

export default Orden;