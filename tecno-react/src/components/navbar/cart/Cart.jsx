import React, { useContext } from "react";
import { CartContext } from "./CartContext";
import { Link } from "react-router-dom"

const Cart = () => {
    const {cart, remove, clear, cartTotal, sumTotal} = useContext(CartContext)

    if (cartTotal() === 0){
        return (
            <div className="container py-5">
                <div className="row">
                    <div className="col text-center">
                        <div>El carrito esta vacio!</div>
                        <Link to={"/"} className="btn">Regresar a la pagina principal</Link>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <div className="container py-5">
            <div className="row">
                <div className="col-md-12">
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col" className="text-end" colSpan={5}><Link onClick={clear} className="btn fondoNaranja" title="Vaciar Carrito">Vaciar carrito</Link></th>
                            </tr>
                            <tr>
                                <th scope="col">&nbsp;</th>
                                <th scope="col">Producto</th>
                                <th scope="col" className="text-center">Cantidad</th>
                                <th scope="col" className="text-center">Precio</th>
                                <th scope="col">&nbsp;</th>
                            </tr>
                        </thead>
                        <tbody>
                            {cart.map(item => (
                                <tr key={item.id}>
                                    <td><img src={item.imagen} alt={item.nombre} width={64} /></td>
                                    <td className="align-middle">{item.nombre}</td>
                                    <td className="text-center align-middle">{item.qty}</td>
                                    <td className="text-center align-middle">${item.qty * item.precio}</td>
                                    <td className="text-end align-middle"><Link onClick={() => {remove(item.id)}} title="Eliminar Producto"><img src={"assets/cestoIcon.png"} alt={"Eliminar producto"} width={20} /></Link></td>
                                </tr>
                            ))}
                            <tr>
                                <td colSpan={2}>&nbsp;</td>
                                <td className="text-center">Total a pagar</td>
                                <td className="text-center"><b>${sumTotal()}</b></td>
                                <td className="text-end"><Link to={"/checkout"} className="btn fondoNaranja" title="Finalizar Compra">Finalizar Compra</Link></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default Cart;