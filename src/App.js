import React, { useState, useEffect } from 'react';
import './CSS/style.css';
import Navbar from './Components/Navbar';
import Details from './Components/Details';
import Body from './Components/Body';
import Data from './DataStore/Data';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

export default function App() {
  const [cart, setCart] = useState([]);
  const [item, setItem] = useState({});
  useEffect(() => {
    let detail = sessionStorage.getItem('product');
    let cart = sessionStorage.getItem('cartList');

    if (detail) {
      let obj = JSON.parse(detail);
      setItem(obj);
    }
    if (cart) {
      let obj = JSON.parse(cart);
      setCart(obj);
    }
  }, []);

  const checkItem = (product) => {
    setItem(product);
    sessionStorage.setItem('product', JSON.stringify(product));
  };

  const addToCart = (product) => {
    setCart([...cart, { ...product }]);
    sessionStorage.setItem(
      'cartList',
      JSON.stringify([...cart, { ...product }])
    );
    alert('added to inventory');
  };

  const removeCart = (product) => {
    setCart((current) => current.filter((item) => item !== product));
  };

  return (
    <div>
      <Router>
        <Navbar cart={cart} remove={removeCart} />
        <Routes>
          <Route
            exact
            path="/"
            caseSensitive={false}
            element={<Body Data={Data} check={checkItem} />}
          />
          <Route
            exact
            path="/details"
            caseSensitive={false}
            element={<Details item={item} addToCart={addToCart} />}
          />
        </Routes>
      </Router>
    </div>
  );
}
