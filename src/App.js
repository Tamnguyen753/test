import React, { useState } from "react";
import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import Home from "./pages/Home/Home";

import Register from "./pages/Register/Register";
import Login from "./pages/Login/Login";
import Signup from "./pages/SignUp/Signup";
import Cart from "./pages/Cart/Cart";
import ListProducts from "./pages/ListProducts/ListProducts";
import ProductDetails from "./pages/ProductDetails/ProductDetails";

const App = () => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);
    console.log(cart);
  };

  return (
  
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/register" element={<Register></Register>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/signup" element={<Signup></Signup>}></Route>
        <Route
          path="/cart"
          element={
            <Cart cart={cart} setCart={setCart} />
          }
        ></Route>
        <Route
          path="/list-product"
          element={<ListProducts addToCart={addToCart} />}
        ></Route>
        <Route path="/product-details" element={<ProductDetails />}></Route>
      </Routes>
  );
};

export default App;
