import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import ItemListContainer from "./components/itemList/ItemListContainer";
import ItemDetailContainer from "./components/itemList/ItemDetailContainer";
import NavBar from "./components/navbar/NavBar";
import Error404 from "./components/pages/Error404";
import 'bootstrap/dist/css/bootstrap.min.css'
import CartContextProvider from "./components/navbar/cart/CartContext";
import Checkout from "./components/pages/Checkout";
import Orden from "./components/pages/Orden";
import Cart from "./components/navbar/cart/Cart"

function App() {
  return (
    <CartContextProvider>
      <div>
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path={"/"} element={<ItemListContainer />} />
            <Route path={"/category/:id"} element={<ItemListContainer />} />
            <Route path={"/item/:id"} element={<ItemDetailContainer />} />
            <Route path={"/cart"} element={<Cart />} />
            <Route path={"/orden/:id"} element={<Orden />} />
            <Route path={"/checkout"} element={<Checkout />} />
            <Route path={"*"} element={<Error404 />} />
          </Routes>
        </BrowserRouter>
      </div>   
    </CartContextProvider>
  );
}

export default App;