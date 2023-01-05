import React, { useState, useContext } from "react";
import { CartContext } from "../navbar/cart/CartContext";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import { Navigate } from "react-router-dom";

const Checkout = () => {
    const {cart, clear, sumTotal, cartTotal} = useContext(CartContext);
    const [nombre, setNombre] = useState("");
    const [email, setEmail] = useState("");
    const [ciudad, setCiudad] = useState("");
    const [orderId, setOrderId] = useState("");

    const generarOrden = () => {
        const fecha = new Date();
        const orden = {
            comprador: {nombre: nombre, email: email, ciudad: ciudad},
            items: cart.map(item => ({id:item.id, producto:item.nombre, precio:item.precio, cantidad:item.qty, total:item.qty * item.precio})),
            date: `${fecha.getDate()}-${fecha.getMonth()+1}-${fecha.getFullYear()} ${fecha.getHours()}:${fecha.getMinutes()}:${fecha.getSeconds()}`,
            total: sumTotal(),
            cantidad: cartTotal()
        }

        const db = getFirestore();
        const ordenesCollection = collection(db, "ordenes");
        addDoc(ordenesCollection, orden).then((snapshot) => {
            setOrderId(snapshot.id)
            clear()
        })
    }


    return (
        <div className="container">
            <div className="row my-5">
                <div className="col">
                    <form>
                        <div className="mb-3">
                            <label htmlFor="nombre" className="form-label">Nombre</label>
                            <input type="text" className="form-control" id="nombre" placeholder="Ingrese su Nombre" onInput={(e) => {setNombre(e.target.value)}} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">Email</label>
                            <input type="text" className="form-control" id="email" placeholder="Ingrese su Email" onInput={(e) => {setEmail(e.target.value)}} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="telefono" className="form-label">Ciudad</label>
                            <input type="text" className="form-control" id="telefono" placeholder="Ingrese su Teléfono" onInput={(e) => {setCiudad(e.target.value)}} />
                        </div>
                        <button type="button" onClick={generarOrden} className="btn fondoNaranja">Generar Orden</button>
                    </form>
                </div>
                <div className="col">
                    <table className="table">
                        <tbody>
                            {cart.map(item => (
                                <tr key={item.id}>
                                    <td><img src={item.imagen} alt={item.nombre} width={64} /></td>
                                    <td className="align-middle">{item.nombre}</td>
                                    <td className="text-center align-middle">{item.qty}</td>
                                    <td className="text-center align-middle">${item.qty * item.precio}</td>
                                </tr>
                            ))}
                            <tr>
                                <td colSpan={3} className="text-end"><b>Total a Pagar</b></td>
                                <td className="text-center"><b>${sumTotal()}</b></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <div className="row my-5">
                <div className="col text-center">
                    {orderId ? <Navigate to={"/orden/" + orderId} /> : ""}
                </div>
            </div>
        </div>
    )
}

export default Checkout;