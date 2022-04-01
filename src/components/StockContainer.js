import React from "react";
import Stock from "./Stock";

function StockContainer({ stocks, handleClick }) {

  const stockArray = stocks.map(stock => (
    <Stock 
    key={stock.id} 
    stock={stock}
    handleClick={handleClick} 
    />
  ))

  return (
    <div>
      <h2>Stocks</h2>
      {stockArray}
    </div>
  );
}

export default StockContainer;
