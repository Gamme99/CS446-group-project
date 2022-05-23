import React from "react";
import "./Rent.css";

export default function Rent() {
  return (
    <div className="filters">
      <div className="buy-rent">
        <input type="button" value="Rent"></input>
        <input type="button" value="Buy"></input>
      </div>
      <div className="price-filter">
        <h4 className="price-header">Price</h4>
        <input type="number" name="minimum" placeholder="min"></input>
        <input type="number" name="maximum" placeholder="max"></input>
      </div>
      <div className="bed-bath">
        <div className="bedroom">
          <h4 className="bed-header">Bedroom</h4>
          <input type="number" name="bedroom" placeholder="bed"></input>
        </div>
        <div className="bathroom">
          <h4 className="bath-header">Bathroom</h4>
          <input type="number" name="bathroom" placeholder="bath"></input>
        </div>
      </div>
    </div>
  );
}
