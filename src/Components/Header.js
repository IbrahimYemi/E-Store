import React from 'react';
import '../CSS/Header.css';
export default function Header() {
  return (
    <div className="header">
      <div className="first_div">
        <p>Everything</p>
        <h1>CLOTHING</h1>
        <img
          src="https://cdn2.vectorstock.com/i/1000x1000/76/36/bright-beautiful-set-of-different-shapes-vector-7517636.jpg"
          alt="stray_image"
          className="stray_image1"
        />
        <span className="highlight">shop your clothings</span>
      </div>
      <div className="pic_div">
        <img
          src="https://litb-cgis.rightinthebox.com/images/384x500/202110/bps/product/inc/lnbuyg1635225604061.jpg"
          alt="imagee_header"
        />
        <img
          src="https://cdn2.vectorstock.com/i/1000x1000/76/36/bright-beautiful-set-of-different-shapes-vector-7517636.jpg"
          alt="stray_image"
          className="stray_image1"
        />
      </div>
    </div>
  );
}
