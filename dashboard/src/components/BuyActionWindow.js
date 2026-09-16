import React, { useContext } from "react";
import { useState } from "react";
import GeneralContext from "./GeneralContext";
import axios from 'axios';
import "./BuyActionWindow.css";

const BuyActionWindow = ({ uid }) => {
  
  let [stockQuantity , setStockQuantity]=useState(1);
  let [stockPrice, setStockPrice]=useState(0.0);

  const hancleBuyClick=()=>{
    axios.post("http://localhost:3002/newOrder",{
        name:uid,
        qty:stockQuantity,
        price:stockPrice,
        mode:"BUY"
    })
    closeBuyWindow();
  }

  const { closeBuyWindow } = useContext(GeneralContext);

  const handleCancelClick = () => {
    GeneralContext.closeBuyWindow();
  };

  return (
    <div className="containerClass" id="buy-window" draggable="true" >
      <div className="regular-order" style={{background:"white",    }}>
        <div className="inputs" >

          <fieldset>
            <legend>Qty.</legend>
            <input
              type="number"
              name="qty"
              id="qty"
              onChange={(e)=>setStockQuantity(e.target.value)}
              value={stockQuantity}/>
          </fieldset>

          <fieldset>
          
            <legend>Price</legend>
            <input
              type="number"
              name="price"
              id="price"
              step="0.05"
               onChange={(e)=>setStockPrice(e.target.value)}
              value={stockPrice}
                />
          </fieldset>

        </div>
      </div>

      <div className="buttons">
        <span>Margin required ₹140.65</span>

        <div>
          <button className="btn btn-blue" onClick={hancleBuyClick}>
            Buy
          </button>

          <button
            className="btn btn-grey"
            onClick={closeBuyWindow}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default BuyActionWindow;