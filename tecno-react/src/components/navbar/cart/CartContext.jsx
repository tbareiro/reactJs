import React, { useState, createContext } from "react";

export const CartContext = createContext();

const CartContextProvider = ({children}) => {
    const [cart, setCart] = useState([])

    const add = (item, qty) => {
        if (isInCart(item.id)) {
            let pos = cart.findIndex(x => x.id === item.id)
            cart[pos].qty += qty
            setCart([...cart])
        } else {
            setCart([...cart, {...item, qty:qty}])
        }
    }

    const remove = (id) => {
        const products = cart.filter(x => x.id !== id)
        setCart(products)
    }

    const clear = () => {
        setCart([])
    }

    const cartTotal = () => {
        return cart.reduce((total, item) => total += item.qty * item.precio, 0)
    }

    const isInCart = (id) => {
        return cart.some(x => x.id === id)
    }

    const sumTotal = () => {
        return cart.reduce ((total, item) => total += item.qty * item.precio, 0)
    }

    return (
        <CartContext.Provider value={{cart, add, remove, clear, cartTotal, sumTotal}}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContextProvider;