import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import "./search.css";

function StockSearch({ onStockSelect }) {
  const [inputText, setInputText] = useState("");
  const [filteredStocks, setFilteredStocks] = useState([]);
  const [selectedSymbol, setSelectedSymbol] = useState(null);

  const stockList = [
    // List of BSE stock names and symbols...
  ];

  const handleInputChange = (event) => {
    const searchText = event.target.value;
    setInputText(searchText);

    const filteredStocks = stockList
      .filter((stock) =>
        stock.name.toLowerCase().includes(searchText.toLowerCase())
      )
      .slice(0, 5);
    setFilteredStocks(filteredStocks);
  };

  const handleStockClick = (symbol) => {
    setSelectedSymbol(symbol);
    setInputText("");
    setFilteredStocks([]);
    onStockSelect(symbol);
  };

  return (
    <div className="stock-search-container">
      <div className="search-input-container">
        <FaSearch className="search-icon" />
        <input
          type="text"
          value={inputText}
          onChange={handleInputChange}
          placeholder="Search for a stock..."
          className="stock-search-input"
        />
      </div>
      <ul className="stock-suggestions">
        {filteredStocks.map((stock, index) => (
          <li
            key={index}
            onClick={() => handleStockClick(stock.symbol)}
            className={selectedSymbol === stock.symbol ? "selected" : ""}
          >
            {stock.name}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default StockSearch;
