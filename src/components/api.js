//                                                                                   ---------   last to gpt

import axios from "axios";
import "../search.css";
import React, { useState, useEffect, useRef } from "react";
import stockList from "./stockList";
import ChartComponent from "./Chart";
import logo from "../assets/images/dp_log_launcher.png";
import logoname from "../assets/images/dp_log_png.png";
import no_position from "../assets/images/no_open_position.png";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import alertsound from "../assets/audios/notification.wav";
import errorSound from "../assets/audios/errorSound.wav";
import exit from "../assets/images/exit.png";
import CheckConnection from "./CheckConnection";

function StockSearch({ onStockSelect }) {
  const [inputText, setInputText] = useState("");
  const [filteredStocks, setFilteredStocks] = useState([]);
  const [selectedSymbol, setSelectedSymbol] = useState(null);
  const [showSuggestions, setShowSuggestions] = useState(false);

  const inputRef = useRef(null);

  // Handle input change
  const handleInputChange = (event) => {
    const searchText = event.target.value;
    setInputText(searchText);
    setShowSuggestions(true); // Show suggestions when input changes

    const filteredStocks = stockList
      .filter(
        (stock) =>
          stock.name.toLowerCase().includes(searchText.toLowerCase()) ||
          stock.symbol.toLowerCase().includes(searchText.toLowerCase())
      )
      .slice(0, 5);
    setFilteredStocks(filteredStocks);
  };

  // Handle stock selection
  const handleStockClick = (symbol, name) => {
    setSelectedSymbol(symbol.toUpperCase());
    setInputText("");
    setFilteredStocks([]);
    setShowSuggestions(false); // Hide suggestions when a stock is selected
    onStockSelect(symbol, name);
  };

  // Handle clicks outside the search input and suggestion list
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (inputRef.current && !inputRef.current.contains(event.target)) {
        setShowSuggestions(false); // Hide suggestions when clicking outside the input
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <div className="stock-search-container">
      <div className="search-input-container" style={{ marginLeft: "30%" }}>
        <input
          type="text"
          spellCheck="false"
          value={inputText}
          onChange={handleInputChange}
          placeholder="🔍 Search for a stock..."
          className="stock-search-input"
          ref={inputRef}
          style={{
            width: "300px",
            height: "30px",
            fontSize: "18px",
            padding: "1px 8px",
          }}
        />
      </div>
      {showSuggestions && (
        <ul className="stock-suggestions">
          {filteredStocks.map((stock, index) => (
            <li
              key={index}
              onClick={() => handleStockClick(stock.symbol, stock.name)}
              className={selectedSymbol === stock.symbol ? "selected" : ""}
            >
              {stock.name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

// Dashboard component
function Dashboard() {
  const [selectedSymbol, setSelectedSymbol] = useState("RELIANCE");
  const [showBuyPopup, setShowBuyPopup] = useState(false);
  const [showSellPopup, setShowSellPopup] = useState(false);
  const [buyQuantity, setBuyQuantity] = useState("1");
  const [sellQuantity, setSellQuantity] = useState("1");
  const [serverPrice, setServerPrice] = useState([]);
  const [tranctStatus, setTranctStatus] = useState(false);
  const [orderList, setOrderList] = useState([]);
  const [currentPrice, setCurrentPrice] = useState(null);
  const [popUpIntervalId, setPopUpIntervalId] = useState(null);
  const [selectedName, setSelectedName] = useState(
    "Reliance Industrial Infrastructure"
  );
  const inputRefPopup = useRef(null);
  const [hoveredTransaction, setHoveredTransaction] = useState(null);
  const [totalPL, setTotalPL] = useState(0.0);

  useEffect(() => {
    if (serverPrice && serverPrice.length > 0) {
      let totalPL = 0; // Initialize total profit/loss
      serverPrice.forEach((transaction) => {
        const singleQuantity =
          transaction.type === "B"
            ? transaction.serverCurrentPrice - transaction.buyPrice
            : transaction.sellPrice - transaction.serverCurrentPrice;

        const profitLoss = (singleQuantity * transaction.quantity).toFixed(2);
        totalPL += parseFloat(profitLoss); // Add profit/loss to totalPL
      });
      setTotalPL(totalPL.toFixed(2)); // Update totalPL state
    }
    if (serverPrice.length < 1) {
      setTotalPL(0.0);
    }
  }, [serverPrice]); // Trigger effect when serverPrice changes

  const handleMouseEnter = (index) => {
    setHoveredTransaction(index);
    console.log(index);
  };

  const handleMouseLeave = () => {
    setHoveredTransaction(null);
  };

  const handleRemoveTransaction = (index) => {
    setOrderList(orderList.filter((_, i) => i !== index));
    if (orderList.length < 2) {
      setServerPrice(orderList.filter((_, i) => i !== index));
    }
  };

  useEffect(() => {
    if (showBuyPopup || showSellPopup) {
      inputRefPopup.current.focus();
      inputRefPopup.current.select();
    }
  }, [showBuyPopup, showSellPopup]);

  useEffect(() => {
    let intervalId;
    if (tranctStatus && orderList.length >= 1) {
      intervalId = setInterval(async () => {
        try {
          const serverData = await axios.get(
            "https://project-server-22fx.vercel.app/server2/current-prices",
            {
              params: {
                orderList: orderList,
              },
            }
          );
          setServerPrice(serverData.data);
        } catch (error) {
          console.error("Error fetching current prices:", error);
        }
      }, 1000);
    }
    return () => clearInterval(intervalId);
  }, [tranctStatus, orderList]);

  // Handle stock selection
  const handleStockSelect = (symbol, name) => {
    setSelectedSymbol(symbol);
    setSelectedName(name);
  };

  const handleBuyButtonClick = async () => {
    try {
      // console.log(selectedSymbol);
      const IntervalId = setInterval(async () => {
        await axios
          .get("https://project-server-22fx.vercel.app/api/stock-price", {
            params: {
              symbols: selectedSymbol,
            },
          })
          .then((price) => {
            setCurrentPrice(price.data.price);
            console.log(price.data.price);
          });
      }, 1000);
      setPopUpIntervalId(IntervalId);

      // const price = response.data.price;
      //console.log("Stock price:", currentPrice);
      // setBuyPrice(price);
      setShowBuyPopup(true);
      // Update state or perform other actions with the price
    } catch (error) {
      console.error("Error fetching stock price:", error);
    }
  };

  const handleSellButtonClick = async () => {
    try {
      // console.log(selectedSymbol);
      const IntervalId = setInterval(async () => {
        await axios
          .get("https://project-server-22fx.vercel.app/api/stock-price", {
            params: {
              symbols: selectedSymbol,
            },
          })
          .then((price) => {
            setCurrentPrice(price.data.price);
            console.log(price.data.price);
          });
      }, 1000);
      setPopUpIntervalId(IntervalId);

      // const price = response.data.price;
      //console.log("Stock price:", currentPrice);
      // setBuyPrice(price);
      setShowSellPopup(true);
      // Update state or perform other actions with the price
    } catch (error) {
      console.error("Error fetching stock price:", error);
    }
  };

  const handleBuyPopupClose = () => {
    clearInterval(popUpIntervalId);
    setShowBuyPopup(false);
    setBuyQuantity("1");
  };

  const handleSellPopupClose = () => {
    clearInterval(popUpIntervalId);

    setSellQuantity("1");
    setShowSellPopup(false);
  };

  const handleBuyConfirmOrder = () => {
    if (buyQuantity > 0) {
      new Audio(alertsound).play();
      const totalPrice = (
        parseFloat(currentPrice) * parseInt(buyQuantity)
      ).toFixed(2);
      const order = {
        symbol: selectedSymbol.toUpperCase(),
        buyPrice: currentPrice,
        quantity: buyQuantity,
        totalPrice: totalPrice,
        type: "B",
        serverCurrentPrice: 0,
      };
      setOrderList([...orderList, order]);
      setShowBuyPopup(false);
      setTranctStatus(true);
      clearInterval(popUpIntervalId);
      setBuyQuantity("1");
      toast.success(
        `Buy  ${selectedSymbol.toUpperCase()} is Complete. ${buyQuantity} qty @ ${
          order.buyPrice
        }`,
        {
          position: "bottom-right",
          autoClose: 3000,
          theme: "colored",
        }
      );
    } else {
      new Audio(errorSound).play();
      toast.error("Please enter valid Quantity !!", {
        position: "top-right",
        autoClose: 3000,
        theme: "colored",
      });
    }
  };

  const handleSellConfirmOrder = () => {
    // Implement sell order confirmation logic here
    if (sellQuantity > 0) {
      new Audio(alertsound).play();
      const totalPrice = (
        parseFloat(sellQuantity) * parseInt(currentPrice)
      ).toFixed(2);
      const order = {
        symbol: selectedSymbol.toUpperCase(),
        sellPrice: currentPrice,
        quantity: sellQuantity,
        totalPrice: totalPrice,
        type: "S",
        serverCurrentPrice: 0,
      };
      setOrderList([...orderList, order]);
      setShowSellPopup(false);
      setTranctStatus(true);
      clearInterval(popUpIntervalId);
      setSellQuantity("1");
      toast.success(
        `Sell  ${selectedSymbol.toUpperCase()} is Complete. ${sellQuantity} qty @ ${
          order.sellPrice
        }`,
        {
          position: "bottom-right",
          autoClose: 3000,
          theme: "colored",
        }
      );
    } else {
      new Audio(errorSound).play();
      toast.error("Please enter valid Quantity !!", {
        position: "top-right",
        autoClose: 3000,
        theme: "colored",
      });
    }
  };

  const handleBuyQuantityChange = (event) => {
    let { value } = event.target;

    // Ensure the input value is not empty and contains only numbers
    if (value === "" || /^[1-9]\d*$/.test(value)) {
      // Validate if the value is less than or equal to 100
      setBuyQuantity(value);
    }
  };

  const handleSellQuantityChange = (event) => {
    const { value } = event.target;
    // Validate if value is a number and less than or equal to 100
    if (value === "" || /^[1-9]\d*$/.test(value)) {
      // Validate if the value is less than or equal to 100
      setSellQuantity(value);
    }
  };
  const transactionItemHeight = 100;

  // Calculate the total height needed for all transactions
  const totalHeightNeeded = Math.max(
    500,
    serverPrice.length * transactionItemHeight
  );

  return (
    <div className="dashboard-container">
      <div
        className="d-nav"
        style={{ display: "flex", padding: "1px 40px", margin: "0px 7%" }}
      >
        <div className="d-logo">
          <img src={logo} alt="dashboard logo" height={60}></img>
        </div>
        <div className="d-logo-name">
          <img
            src={logoname}
            width={110}
            alt="logo name"
            style={{ paddingTop: "18px" }}
          ></img>
        </div>
        <div className="search-container">
          <StockSearch onStockSelect={handleStockSelect} />
        </div>
      </div>
      <div
        className="body-logged"
        style={{ display: "flex", margin: "0px 50px", height: "100%" }}
      >
        <div className="chart-container">
          <div
            style={{ marginLeft: "20px", display: "flex", marginTop: "30px" }}
          >
            <img
              src={`https://images.5paisa.com/MarketIcons/${selectedSymbol}.png`}
              alt="institution"
              width={41}
              style={{ marginLeft: "10px", borderRadius: "5px" }}
            ></img>
            <div
              className="institution_name"
              style={{
                marginLeft: "15px",
                display: "flex",
                alignItems: "center",
              }}
            >
              {selectedName}
            </div>
          </div>
          {selectedSymbol && (
            <CheckConnection>
              <ChartComponent symbol={selectedSymbol} />
            </CheckConnection>
          )}
          <div
            className="action-buttons"
            style={{
              width: "300px",
              marginLeft: "20px",
              marginTop: "30px",
              height: "50px",
            }}
          >
            <button onClick={handleBuyButtonClick} className="buy-button">
              Buy
            </button>
            <button onClick={handleSellButtonClick} className="sell-button">
              Sell
            </button>
          </div>
        </div>
        {/* <div style={{ border: "1px solid black", height: "700px" }} /> */}

        {showBuyPopup && (
          <div className="popup-container">
            <div className="popup">
              <img
                src={exit}
                className="close"
                onClick={handleBuyPopupClose}
                alt="exit button"
              ></img>
              <div
                className="popup-content"
                style={{ backgroundColor: "rgb(3 142 9)" }}
              >
                <p
                  style={{
                    fontSize: "20px",
                    fontWeight: "bold",
                    marginTop: "5px",
                    color: "white",
                    marginBottom: "0",
                  }}
                >
                  NSE: {selectedSymbol}
                </p>
                <p style={{ color: "white", marginTop: "0" }}>
                  PRICE: {currentPrice}
                </p>
                <label htmlFor="buyQuantity" style={{ color: "white" }}>
                  Quantity<span style={{ color: "#ff5151" }}>*</span>{" "}
                </label>
                <input
                  type="text"
                  id="buyQuantity"
                  ref={inputRefPopup}
                  value={buyQuantity}
                  onChange={handleBuyQuantityChange}
                  style={{
                    boxShadow: "1px 1px 5px 1px rgba(0,0,0,0.8)",
                  }}
                />
                <button
                  style={{ marginTop: "20px" }}
                  onClick={handleBuyConfirmOrder}
                >
                  Confirm Order
                </button>
              </div>
            </div>
          </div>
        )}
        {showSellPopup && (
          <div className="popup-container">
            <div className="popup">
              <img
                src={exit}
                className="close"
                onClick={handleSellPopupClose}
                alt="exit button"
              ></img>
              <div className="popup-content" style={{ backgroundColor: "red" }}>
                <p
                  style={{
                    fontSize: "20px",
                    fontWeight: "bold",
                    marginTop: "5px",
                    color: "white",
                    marginBottom: "0",
                  }}
                >
                  NSE: {selectedSymbol}
                </p>
                <p style={{ color: "white", marginTop: "0" }}>
                  PRICE: {currentPrice}
                </p>
                <label htmlFor="buyQuantity" style={{ color: "white" }}>
                  Quantity<span style={{ color: "#ff5151" }}>*</span>{" "}
                </label>
                <input
                  type="text"
                  id="buyQuantity"
                  ref={inputRefPopup}
                  value={sellQuantity}
                  onChange={handleSellQuantityChange}
                  style={{
                    boxShadow: "1px 1px 5px 1px rgba(0,0,0,0.8)",
                  }}
                />
                <button
                  style={{ marginTop: "20px" }}
                  onClick={handleSellConfirmOrder}
                >
                  Confirm Order
                </button>
              </div>
            </div>
          </div>
        )}

        <div
          className="d-tile"
          style={{
            width: "100%",
            height: "500px",
            // display: "flex",
            //justifyContent: "center",

            //padding: "0px 60px 0px 30px",
            //borderLeft: "1px solid black",
          }}
        >
          <div
            className="pnl_container"
            style={{
              // marginTop: "5px",
              height: "70px",

              //width: "300px",
              // marginLeft: "4%",
              position: "absolute",
              marginLeft: "110px",
            }}
          >
            <div
              style={{
                //padding: "0 20%",
                height: "100%",
                width: "100%",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <div
                style={{
                  backgroundColor: "#e3f8ff",
                  border: "1px solid #0d4d8d",
                  borderRadius: "10px",
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  width: "300px",
                }}
              >
                <span
                  style={{
                    color: "black",
                    marginTop: "5px",
                    fontWeight: "lighter",
                  }}
                >
                  Total P&L
                </span>
                <span
                  style={{
                    fontSize: "25px",
                    color: totalPL >= 0 ? "green" : "red",
                  }}
                >
                  {totalPL >= 0 ? `+${totalPL}` : totalPL}
                </span>
              </div>
            </div>
          </div>
          <div
            style={{
              paddingTop: "50px",
              padding: "35px 60px 20px 30px",
              border: "3px solid #0d4d8d",
              marginTop: "40px",
              height: serverPrice.length > 0 ? "auto" : "540px",
              borderRadius: "10px",

              //overflowY: "auto",
            }}
          >
            {serverPrice.length > 0 ? (
              serverPrice.map((transaction, index) => {
                const isHovered = hoveredTransaction === index ? true : false;
                console.log(isHovered);
                // Calculate profit/loss
                const singleQuantity =
                  transaction.type === "B"
                    ? transaction.serverCurrentPrice - transaction.buyPrice
                    : transaction.sellPrice - transaction.serverCurrentPrice;
                // console.log(transaction.symbol + " " + singleQuantity);
                const profitLoss = (
                  singleQuantity * transaction.quantity
                ).toFixed(2);

                const profitlossPercentage = (
                  (profitLoss / transaction.totalPrice) *
                  100
                ).toFixed(2);

                //console.log(transaction.symbol + "  " + profitLoss);
                // Determine CSS class based on profit/loss value
                const colorClass = profitLoss < 0 ? "red" : "green";
                //console.log("bp" + buyPrice + "ord.bp" + order.buyPrice);
                //setTotalPL((totalPL) => totalPL + profitLoss);

                return (
                  <>
                    <div
                      key={index}
                      className="d-tile-child"
                      onMouseEnter={() => handleMouseEnter(index)}
                      onMouseLeave={handleMouseLeave}
                      style={{
                        marginTop: "10px",
                        border: "1px solid #0000ff4f",
                        height: "90px",
                        padding: "20px 20px",
                        width: "100%",
                        boxShadow: "1px 1px 10px 2px rgba(0,0,0,.3)",
                        borderRadius: "10px",
                      }}
                    >
                      <div style={{ alignItems: "center" }}>
                        <div
                          style={{
                            display: "flex",
                            justifyContent: "space-between",

                            fontSize: "18px",
                            fontWeight: "bold",
                            lineHeight: "38px",
                          }}
                        >
                          <span>NSE: {transaction.symbol}</span>
                          <span
                            className={colorClass}
                            style={{ fontWeight: "bold" }}
                          >
                            {new Intl.NumberFormat("en-IN", {
                              style: "currency",
                              currency: "INR",
                              currencyDisplay: "symbol",
                            }).format(profitLoss)}
                          </span>
                        </div>
                        <div
                          style={{
                            display: "flex",
                            justifyContent: "space-between",
                            lineHeight: "30px",
                          }}
                        >
                          <span>
                            {transaction.quantity} Qty [
                            <span
                              style={{
                                color:
                                  transaction.type === "B" ? "green" : "red",
                                fontWeight: "bold",
                              }}
                            >
                              {transaction.type}
                            </span>
                            ]
                          </span>
                          {isHovered && (
                            <button
                              class="button-24"
                              role="button"
                              onClick={() => handleRemoveTransaction(index)}
                            >
                              Exit
                            </button>
                          )}
                          <span className={colorClass}>
                            ({profitlossPercentage}%)
                          </span>
                        </div>
                        <div
                          style={{
                            display: "flex",
                            justifyContent: "space-between",
                          }}
                        >
                          <span>
                            Invested:{" "}
                            {new Intl.NumberFormat("en-IN", {
                              style: "currency",
                              currency: "INR",
                              currencyDisplay: "symbol",
                            }).format(transaction.totalPrice)}
                          </span>
                          <div>
                            <span>LTP: </span>
                            <span style={{ fontWeight: "bold" }}>
                              {new Intl.NumberFormat("en-IN", {
                                style: "currency",
                                currency: "INR",
                                currencyDisplay: "symbol",
                              }).format(transaction.serverCurrentPrice)}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </>
                );
              })
            ) : (
              <div
                style={{
                  height: "100%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  marginLeft: "40px",
                }}
              >
                <img src={no_position} alt="no open position" height={140} />
              </div>
            )}
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}

export default Dashboard;
