import React, { useState } from 'react';
import { GoThreeBars } from 'react-icons/go';
import { TbScan } from 'react-icons/tb';
import { BsCart3 } from 'react-icons/bs';
import '../CSS/Product_body.css';
import { Link } from 'react-router-dom';
import '../CSS/Navbar.css';

export default function Header({ cart, remove }) {
  // link styling
  const linkStyle = {
    textDecoration: 'none',
  };
  const [bar, setBar] = useState(false);
  function handleClick() {
    setBar((prevBar) => !prevBar);
  }

  const [card, setCard] = useState(false);
  function handleCard() {
    setCard((prevBar) => !prevBar);
  }

  function offCard() {
    setCard(false);
  }

  const total = cart.reduce((accm, obj) => {
    return accm + parseInt(obj.price);
  }, 0);

  const cartComponent = cart.map((product) => {
    return (
      <div className="cart_component" key={product.id}>
        <h3>{product.name}</h3>
        <div className="cart_Card">
          <img src={product.image} alt={product.name} />
          <button className="remove" onClick={() => remove(product)}>
            X
          </button>
        </div>
      </div>
    );
  });

  return (
    <div className="navbar">
      <Link to="/" style={linkStyle}>
        <h1>OppEStarr</h1>
      </Link>
      <nav>
        <ul className={bar ? 'show' : ''}>
          <Link to="/" style={linkStyle}>
            <li onClick={offCard}>HOME</li>
          </Link>
          <li onClick={handleCard}>
            INVENTORY <BsCart3 />
            {cart.length}
          </li>
        </ul>
      </nav>
      <div className="tab">
        {!bar ? (
          <GoThreeBars className="bars" onClick={handleClick} />
        ) : (
          <TbScan className="bars" onClick={handleClick} />
        )}
      </div>
      {card &&
        (cart.length > 0 ? (
          <div className="cart">
            <div>{cartComponent}</div>
            <hr />
            <p>{total}</p>
          </div>
        ) : (
          <div className="cart">
            <h4 style={{ color: 'red' }}>Zero Inventory</h4>
          </div>
        ))}
    </div>
  );
}
