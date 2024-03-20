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
import equity from "../assets/images/equity.png";
import DashMarginChart from "./dash_margin_chart";
import ReactHTMLTableToExcel from "react-html-table-to-excel";
import add from "../assets/images/icons8-add-new-50.png";
import done from "../assets/images/icons8-done-64.png";
import no_watchlist_img from "../assets/images/no_watchlist.png";
import bull_btn_img from "../assets/images/bull-market-img.png";
import bear_btn_img from "../assets/images/bear-market-img.png";
import logout_img from "../assets/images/logout_img.png";
import { useGlobalContext } from "../store/Contex";
import { db } from "./config";
import {
  doc,
  setDoc,
  getDoc,
  updateDoc,
  arrayUnion,
  arrayRemove,
  onSnapshot,
  collection,
} from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import { firestore } from "firebase/app";
import { Tooltip as ReactTooltip } from "react-tooltip";
import { type } from "@testing-library/user-event/dist/type";

function StockSearch() {
  const [inputText, setInputText] = useState("");
  const [filteredStocks, setFilteredStocks] = useState([]);

  const [showSuggestions, setShowSuggestions] = useState(false);
  const {
    phoneNumber,
    setPhoneNumber,
    watchlist,
    setWatchList,
    selectedStock,
    setSelectedStock,
    userDetails,
    setUserDetails,
    selectedButton,
    setSelectedButton,
    serverWatchlistPrice,
    setServerWatchlistPrice,
    orderList,
    setOrderList,
  } = useGlobalContext();
  const navigate = useNavigate();
  const inputRef = useRef(null);

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
    setSelectedStock({ symbol: symbol.toUpperCase(), name: name });
    setInputText("");
    setFilteredStocks([]);
    setShowSuggestions(false); // Hide suggestions when a stock is selected
    setSelectedButton("Trades");
  };

  const handleWatchlistToggle = async (stock) => {
    setInputText("");
    const isSymbolInWatchlist = watchlist.some(
      (item) => item.symbol === stock.symbol.toUpperCase()
    );
    const userRef = doc(db, "users", phoneNumber);

    if (isSymbolInWatchlist) {
      try {
        await updateDoc(userRef, {
          watchlist: arrayRemove(stock),
        });

        if (serverWatchlistPrice.length < 2) {
          setServerWatchlistPrice([]);
        }
      } catch (error) {
        console.error("Error removing from watchlist:", error);
      }
    } else {
      try {
        await updateDoc(userRef, {
          watchlist: arrayUnion(stock),
        });
      } catch (error) {
        console.error("Error adding to watchlist:", error);
      }
    }
  };

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
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <div
                className={
                  selectedStock.symbol === stock.symbol ? "selected" : ""
                }
                onClick={() => handleStockClick(stock.symbol, stock.name)}
              >
                {stock.name}
              </div>

              <img
                src={
                  watchlist.some(
                    (item) => item.symbol === stock.symbol.toUpperCase()
                  )
                    ? done
                    : add
                }
                alt="add-btn"
                width={23}
                onClick={() => handleWatchlistToggle(stock)}
              ></img>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

// Dashboard component
function Dashboard() {
  //const [marketSatus, setMarketStatus] = useState("");
  // const [selectedSymbol, setSelectedSymbol] = useState("RELIANCE");
  const [showBuyPopup, setShowBuyPopup] = useState(false);
  const [showSellPopup, setShowSellPopup] = useState(false);
  const [buyQuantity, setBuyQuantity] = useState("1");
  const [sellQuantity, setSellQuantity] = useState("1");

  const [tranctStatus, setTranctStatus] = useState(false);
  const [serverPrice, setServerPrice] = useState([]);

  const [currentPrice, setCurrentPrice] = useState(null);
  const [popUpIntervalId, setPopUpIntervalId] = useState(null);
  const inputRefPopup = useRef(null);
  const [hoveredTransaction, setHoveredTransaction] = useState(null);
  const [totalPL, setTotalPL] = useState("00.00");

  const [selectedTransactions, setSelectedTransactions] = useState([]);
  const [tradeHistory, setTradeHistory] = useState([]);
  const {
    phoneNumber,
    setPhoneNumber,
    watchlist,
    setWatchList,
    selectedStock,
    setSelectedStock,
    selectedButton,
    setSelectedButton,
    serverWatchlistPrice,
    setServerWatchlistPrice,
    userDetails,
    setUserDetails,
    orderList,
    setOrderList,
    logout,
    setLogout,
  } = useGlobalContext();
  const navigate = useNavigate();

  const [isserverWatchlistPriceLoading, setisServerWatchlistPriceLoading] =
    useState(true);
  const [totalPNL, setTotalPNL] = useState(0);
  const [marketStatus, setMarketStatus] = useState(null);

  useEffect(() => {
    const fetchMarketStatus = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/market-status");
        const data = await response.json();
        setMarketStatus(data.status);
      } catch (error) {
        console.error("Error fetching market status:", error);
      }
    };

    const intervalId = setInterval(fetchMarketStatus, 1000); // Call every second

    return () => clearInterval(intervalId); // Cleanup the interval on unmount
  }, []);

  useEffect(() => {
    const storedSessionData = sessionStorage.getItem("logged-in-session-ID");
    if (storedSessionData) {
      const unsubscribe = onSnapshot(
        doc(db, "users", storedSessionData),
        (doc) => {
          try {
            if (doc.exists()) {
              setWatchList(doc.data().watchlist);
              setOrderList(doc.data().orderList);
              setPhoneNumber(doc.data().phoneNumber);
              setTradeHistory(doc.data().tradeHistory);
              setUserDetails(doc.data());
            } else {
              console.log("No such document exists!");
            }
          } catch (error) {
            console.error("Error fetching user data:", error);
          }
        }
      );
      return () => {
        unsubscribe();
      };
    } else {
      navigate("/sign-up-login");
    }
  }, []);

  useEffect(() => {
    const fetchTradeHistory = async () => {
      try {
        const docRef = doc(db, "users", phoneNumber);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          const userData = docSnap.data();
          const tradeHistoryData = userData.tradeHistory || [];
          setTradeHistory(tradeHistoryData);
        } else {
          console.log("No such trade history!");
        }
      } catch (error) {
        console.error("Error fetching trade history: ", error);
      }
    };

    fetchTradeHistory();
  }, []);

  useEffect(() => {
    let intervalId;
    if (watchlist) {
      //console.log(watchlist);
      intervalId = setInterval(async () => {
        try {
          const serverWatchlistData = await axios.get(
            "https://project-server-22fx.vercel.app/watchlist/current-prices",
            {
              params: {
                watchlist: watchlist,
              },
            }
          );
          setServerWatchlistPrice(serverWatchlistData.data);
          //console.table(serverWatchlistData.data);
          setisServerWatchlistPriceLoading(false);
        } catch (error) {
          console.error("Error fetching current watchlist prices:", error);
        }
      }, 1000);
    }
    return () => clearInterval(intervalId);
  }, [watchlist]);

  useEffect(() => {
    if (serverPrice && serverPrice.length > 0) {
      let totalPL = 0; // Initialize total profit/loss
      serverPrice.forEach((transaction) => {
        const singleQuantity =
          transaction.type === "BUY"
            ? transaction.serverCurrentPrice - transaction.buyPrice
            : transaction.sellPrice - transaction.serverCurrentPrice;

        const profitLoss = (singleQuantity * transaction.quantity).toFixed(2);
        totalPL += parseFloat(profitLoss); // Add profit/loss to totalPL
      });
      setTotalPL(totalPL.toFixed(2)); // Update totalPL state
    }
    if (serverPrice.length < 1) {
      setTotalPL("00.00");
    }
  }, [serverPrice]); // Trigger effect when serverPrice changes

  useEffect(() => {
    if (showBuyPopup || showSellPopup) {
      inputRefPopup.current.focus();
      inputRefPopup.current.select();
    }
  }, [showBuyPopup, showSellPopup]);

  useEffect(() => {
    let intervalId;
    // console.log(orderList.length);
    if (orderList.length > 0) {
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
  }, [orderList, tranctStatus]);

  const handleButtonClick = (buttonName) => {
    setSelectedButton(buttonName);
  };

  const handleMouseEnter = (index) => {
    setHoveredTransaction(index);
    // console.log(index);
  };

  const handleMouseLeave = () => {
    setHoveredTransaction(null);
  };

  const handleRemoveTransaction = async (index) => {
    if (marketStatus === "Open") {
      setOrderList(orderList.filter((_, i) => i !== index));
      if (orderList.length < 2) {
        setServerPrice(orderList.filter((_, i) => i !== index));
      }
      const removedOrder = orderList[index];
      removeOrderFromFirestore(removedOrder);

      const tradeHistoryOrder = serverPrice[index];
      const exitTime = Math.floor(Date.now() / 1000);
      const orderWithExitTime = { ...tradeHistoryOrder, exitTime };
      console.log("remove", orderWithExitTime);
      // Update tradeHistory with the constructed object
      const docRef = doc(db, "users", phoneNumber);
      await updateDoc(docRef, {
        tradeHistory: arrayUnion(orderWithExitTime),
        margin_available:
          userDetails.margin_available + orderWithExitTime.serverCurrentPrice,
        margin_used: userDetails.margin_used - orderWithExitTime.buyPrice,
      });
    } else {
      // Market is closed, show error toast
      new Audio(errorSound).play();
      toast.warning("Markets are closed. Trades can't be exited.", {
        position: "top-right",
        autoClose: 3000,
        theme: "colored",
      });
    }
  };

  const removeOrderFromFirestore = async (orderToRemove) => {
    try {
      // Get a reference to the document
      const docRef = doc(db, "users", phoneNumber);

      // Remove the order from orderList in Firestore
      await updateDoc(docRef, {
        orderList: arrayRemove(orderToRemove),
      }).then(() => {
        if (orderList.length < 1) {
          setServerPrice([]);
        }
      });

      console.log("Order removed from Firestore successfully");
    } catch (error) {
      console.error("Error removing order from Firestore: ", error);
    }
  };

  const addOrderToFirestore = async (orderToAdd) => {
    try {
      // Get a reference to the document
      //console.log(phoneNumber);
      const docRef = doc(db, "users", phoneNumber);

      // Add the order to orderList in Firestore
      await updateDoc(docRef, {
        orderList: arrayUnion(orderToAdd),
      });

      console.log("Order added to Firestore successfully");
    } catch (error) {
      console.error("Error adding order to Firestore: ", error);
    }
  };

  const handleRemoveDashboardTransaction = async () => {
    if (marketStatus === "Open") {
      // Filter orderList to remove the selected transactions
      const updatedOrderList = orderList.filter(
        (_, index) => !selectedTransactions.includes(index)
      );
      setOrderList(updatedOrderList);

      const docRef = doc(db, "users", phoneNumber); // Construct Firestore document reference
      await updateDoc(docRef, {
        orderList: updatedOrderList,
      });

      const tradeHistoryOrders = selectedTransactions.map(
        (index) => serverPrice[index]
      );
      //console.log("trade hist", tradeHistoryOrders);

      // Calculate the sum of all serverCurrentPrice values
      const totalServerCurrentPrice = tradeHistoryOrders.reduce(
        (total, order) => order.serverCurrentPrice * order.quantity + total,
        0
      );
      //console.log(totalServerCurrentPrice);
      const totalMarginUsed = tradeHistoryOrders.reduce(
        (total, order) => total + order.totalPrice,
        0
      );

      // const totalPNL = tradeHistoryOrders.reduce(
      //   (total, order) => total + order.,
      //   0
      // );

      const exitTime = Math.floor(Date.now() / 1000);
      const ordersWithExitTime = tradeHistoryOrders.map((order) => ({
        ...order,
        exitTime,
      }));

      const tscp = parseFloat(totalServerCurrentPrice);
      const tmu = parseFloat(totalMarginUsed);
      // console.log(typeof userDetails.margin_used, typeof totalMarginUsed);
      // Update tradeHistory with the constructed objects
      await updateDoc(docRef, {
        tradeHistory: arrayUnion(...ordersWithExitTime),
        margin_available: userDetails.margin_available + tscp,
        margin_used: userDetails.margin_used - tmu,
      });
      setServerPrice(updatedOrderList);
      // Clear the selectedTransactions array
      setSelectedTransactions([]);
    } else {
      // Market is closed, show error toast
      new Audio(errorSound).play();
      toast.warning("Markets are closed. Trades can't be exited.", {
        position: "top-right",
        autoClose: 3000,
        theme: "colored",
      });
    }
  };

  const btnClickDataFetch = async () => {
    try {
      const response = await axios.get(
        "https://project-server-22fx.vercel.app/api/stock-price",
        {
          params: {
            symbols: selectedStock.symbol,
          },
        }
      );

      setCurrentPrice(response.data.price);
      console.log(response.data.price);
    } catch (error) {
      if (error.response && error.response.status === 500) {
        // Handle error code 500
        console.error("Internal server error (500) occurred.");
        // Show a toast or handle the error in an appropriate way
      } else {
        // Handle other errors
        console.error("An error occurred:", error.message);
        // Show a toast or handle the error in an appropriate way
      }
    }
  };

  const handleBuyButtonClick = async () => {
    if (marketStatus === "Open") {
      try {
        //btnClickDataFetch();
        // console.log(selectedSymbol);
        const IntervalId = setInterval(btnClickDataFetch, 500);
        setPopUpIntervalId(IntervalId);

        // const price = response.data.price;
        //console.log("Stock price:", currentPrice);
        // setBuyPrice(price);
        setShowBuyPopup(true);
        // Update state or perform other actions with the price
      } catch (error) {
        console.error("Error fetching stock price:", error);
      }
    } else {
      // Market is closed, show error toast
      new Audio(errorSound).play();
      toast.warning("Markets are closed. Trades can't be placed.", {
        position: "top-right",
        autoClose: 3000,
        theme: "colored",
      });
    }
  };

  const handleSellButtonClick = async () => {
    if (marketStatus === "Open") {
      try {
        //btnClickDataFetch();
        // console.log(selectedSymbol);
        const IntervalId = setInterval(btnClickDataFetch, 500);
        setPopUpIntervalId(IntervalId);

        // const price = response.data.price;
        //console.log("Stock price:", currentPrice);
        // setBuyPrice(price);
        setShowSellPopup(true);
        // Update state or perform other actions with the price
      } catch (error) {
        console.error("Error fetching stock price:", error);
      }
    } else {
      // Market is closed, show error toast
      new Audio(errorSound).play();
      toast.warning("Markets are closed. Trades can't be placed.", {
        position: "top-right",
        autoClose: 3000,
        theme: "colored",
      });
    }
  };

  const handleBuyPopupClose = () => {
    clearInterval(popUpIntervalId);
    setShowBuyPopup(false);
    setBuyQuantity("1");
  };

  const handleSellPopupClose = () => {
    clearInterval(popUpIntervalId);
    setShowSellPopup(false);
    setSellQuantity("1");
  };

  const handleBuyConfirmOrder = async () => {
    if (buyQuantity > 0) {
      const totalPrice = (
        parseFloat(currentPrice) * parseInt(buyQuantity)
      ).toFixed(2);

      // Check if margin available is sufficient
      if (parseFloat(userDetails.margin_available) >= parseFloat(totalPrice)) {
        new Audio(alertsound).play();
        const order = {
          symbol: selectedStock.symbol.toUpperCase(),
          name: selectedStock.name,
          buyPrice: currentPrice,
          quantity: buyQuantity,
          totalPrice: totalPrice,
          type: "BUY",
          serverCurrentPrice: 0,
          timestamp: Math.floor(Date.now() / 1000),
          exitTime: 0,
        };

        // setOrderList([...orderList, order]);
        addOrderToFirestore(order);
        setShowBuyPopup(false);
        setTranctStatus(true);
        clearInterval(popUpIntervalId);
        setBuyQuantity("1");
        toast.success(
          `Buy  ${selectedStock.symbol.toUpperCase()} is Complete. ${buyQuantity} qty @ ${
            order.buyPrice
          }`,
          {
            position: "bottom-right",
            autoClose: 3000,
            theme: "colored",
          }
        );

        const docRef = doc(db, "users", phoneNumber); // Construct Firestore document reference
        await updateDoc(docRef, {
          margin_available: userDetails.margin_available - totalPrice,
          margin_used: userDetails.margin_used + parseFloat(totalPrice),
        });
      } else {
        const marginShortfall = new Intl.NumberFormat("en-IN", {
          style: "currency",
          currency: "INR",
          currencyDisplay: "symbol",
        }).format(
          (
            parseFloat(totalPrice) - parseFloat(userDetails.margin_available)
          ).toFixed(2)
        );
        // Show error toast if margin available is insufficient
        new Audio(errorSound).play();
        toast.warning(
          `Insufficient margin of ${marginShortfall} to complete the transaction!`,
          {
            position: "top-right",
            autoClose: 3000,
            theme: "colored",
          }
        );
      }
    } else {
      new Audio(errorSound).play();
      toast.error("Please enter valid Quantity !!", {
        position: "top-right",
        autoClose: 3000,
        theme: "colored",
      });
    }
  };

  const handleSellConfirmOrder = async () => {
    // Implement sell order confirmation logic here
    if (sellQuantity > 0) {
      new Audio(alertsound).play();
      const totalPrice = (
        parseFloat(sellQuantity) * parseFloat(currentPrice)
      ).toFixed(2);

      // Check if margin available is sufficient
      if (parseFloat(userDetails.margin_available) >= parseFloat(totalPrice)) {
        new Audio(alertsound).play();
        const order = {
          symbol: selectedStock.symbol.toUpperCase(),
          name: selectedStock.name,
          sellPrice: currentPrice,
          quantity: sellQuantity,
          totalPrice: totalPrice,
          type: "SELL",
          serverCurrentPrice: 0,
          timestamp: Math.floor(Date.now() / 1000),
          exitTime: 0,
        };
        // setOrderList([...orderList, order]);
        addOrderToFirestore(order);
        setShowSellPopup(false);
        setTranctStatus(true);
        clearInterval(popUpIntervalId);
        setSellQuantity("1");
        toast.success(
          `Sell  ${selectedStock.symbol.toUpperCase()} is Complete. ${sellQuantity} qty @ ${
            order.sellPrice
          }`,
          {
            position: "bottom-right",
            autoClose: 3000,
            theme: "colored",
          }
        );

        const docRef = doc(db, "users", phoneNumber); // Construct Firestore document reference
        await updateDoc(docRef, {
          margin_available: userDetails.margin_available - totalPrice,
          margin_used: userDetails.margin_used + parseFloat(totalPrice),
        });
      } else {
        const marginShortfall = new Intl.NumberFormat("en-IN", {
          style: "currency",
          currency: "INR",
          currencyDisplay: "symbol",
        }).format(
          (
            parseFloat(totalPrice) - parseFloat(userDetails.margin_available)
          ).toFixed(2)
        );
        // Show error toast if margin available is insufficient
        new Audio(errorSound).play();
        toast.warning(
          `Insufficient margin of ${marginShortfall} to complete the transaction!`,
          {
            position: "top-right",
            autoClose: 3000,
            theme: "colored",
          }
        );
      }
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

  const handleCheckboxChange = (index) => {
    const selectedIndex = selectedTransactions.indexOf(index);

    if (selectedIndex === -1) {
      setSelectedTransactions([...selectedTransactions, index]);
    } else {
      const updatedTransactions = [...selectedTransactions];
      updatedTransactions.splice(selectedIndex, 1);
      setSelectedTransactions(updatedTransactions);
    }
  };

  function formatAmount(amount) {
    // If amount is less than 1 lakh
    if (amount < 100000) {
      // Convert amount to thousands
      const thousands = amount / 1000;
      // Format thousands to have 2 decimal places
      const formattedThousands = thousands.toFixed(2);
      // Check if the decimal part is zero
      if (formattedThousands.endsWith(".00")) {
        // If so, remove the decimal part
        return Math.floor(thousands) + "K";
      } else {
        // Otherwise, return the formatted string with "K"
        return formattedThousands + "K";
      }
    } else if (amount < 10000000) {
      // Convert amount to lakhs
      const lakhs = amount / 100000;
      // Check if the decimal part is zero
      if ((lakhs * 100) % 100 === 0) {
        // If so, remove the decimal part
        return Math.floor(lakhs) + "L";
      } else {
        // Otherwise, return the formatted string with 2 decimal places and "L"
        return lakhs.toFixed(2) + "L";
      }
    } else {
      // Convert amount to crores
      const crores = amount / 10000000;
      // Format crores to have 2 decimal places
      const formattedCrores = crores.toFixed(2);
      // Check if the decimal part is zero
      if (formattedCrores.endsWith(".00")) {
        // If so, remove the decimal part
        return Math.floor(crores) + "CR";
      } else {
        // Otherwise, return the formatted string with "CR"
        return formattedCrores + "CR";
      }
    }
  }

  const handleLogout = () => {
    sessionStorage.removeItem("logged-in-session-ID");
    navigate("/sign-up-login");
    new Audio(alertsound).play();
    setLogout(true);
  };

  return (
    <>
      <div
        className="d-nav"
        style={{
          display: "flex",
          padding: "1px 40px",
          position: "fixed",
          borderBottom: "0px solid gray",
          width: "100%",
          marginTop: "-65px",
          boxShadow: "1px 1px 10px 2px rgba(0,0,0,.4)",
          zIndex: "20",
          backgroundColor: "white",
        }}
      >
        <div
          className="d-logo"
          style={{
            marginLeft: "150px",
            marginTop: "3px",
          }}
        >
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
          <StockSearch />
        </div>
        <div
          className="btn-container"
          style={{ marginLeft: "300px", display: "flex" }}
        >
          <button
            className="nav-btn"
            style={{
              color: selectedButton === "dashboard" ? "#0e2a5b" : "#6a6a6a",
              fontWeight: selectedButton === "dashboard" ? "bold" : "",
            }}
            onClick={() => handleButtonClick("dashboard")}
          >
            Dashboard
          </button>
          <button
            className="nav-btn"
            style={{
              color: selectedButton === "Trades" ? "#0e2a5b" : "#6a6a6a",
              fontWeight: selectedButton === "Trades" ? "bold" : "",
            }}
            onClick={() => handleButtonClick("Trades")}
          >
            Trades
          </button>
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            marginLeft: "70px",
          }}
        >
          <button
            style={{
              border: "none",
              backgroundColor: "transparent",
              border: "2px solid #0D2958",
              borderRadius: "5px",
              width: "120px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              height: "40px",
              padding: "0px 30px 0px 30px",
              cursor: "pointer",
            }}
            onClick={handleLogout}
          >
            <img src={logout_img} height={20}></img>{" "}
            <span
              style={{
                marginLeft: "5px",
                color: "#0D2958",
                fontSize: "18px",
                fontWeight: "bold",
              }}
            >
              Logout
            </span>
          </button>
        </div>
      </div>
      <div className="dashboard-container" style={{ marginTop: "65px" }}>
        <div
          className="body-logged"
          style={{
            display: "flex",
            margin: "0px 0px 0px 50px",
            height: "100%",
          }}
        >
          {selectedButton === "dashboard" ? (
            <>
              <section className="dashboard-1" style={{ overflow: "auto" }}>
                <div className="trades_container" style={{ display: "flex" }}>
                  <div className="watchlist_container">
                    <div
                      className="watchlist_title"
                      style={{
                        width: "300px",
                        border: "2px solid #cecece",
                        padding: "5px",
                        fontSize: "18px",
                        boxSizing: "border-box",
                      }}
                    >
                      WatchList
                    </div>
                    <div
                      className="watchlist_body"
                      style={{
                        border: "2px solid #cecece",
                        borderTop: "0px",
                        boxSizing: "border-box",
                        height: "600px",
                        overflowY: "scroll",
                      }}
                    >
                      {serverWatchlistPrice.length == 0 ? (
                        <div
                          style={{
                            display: "flex",
                            justifyContent: "center",
                            paddingTop: "100%",
                          }}
                        >
                          <img
                            src={no_watchlist_img}
                            alt="no_watchlist"
                            width={120}
                          ></img>
                        </div>
                      ) : (
                        serverWatchlistPrice.map((transaction, index) => {
                          const colorClass =
                            transaction.serverMarketChange >= 0
                              ? "green"
                              : "red";

                          return (
                            <div
                              id={index}
                              className="single_watchlist_conatiner"
                              style={{
                                display: "flex",
                                justifyContent: "space-between",
                                alignItems: "center",
                                marginTop: "5px",
                                borderBottom: "2px solid #cecece",
                                padding: "7px",
                                cursor: "pointer",
                              }}
                              onClick={() => {
                                setSelectedStock({
                                  symbol: transaction.symbol,
                                  name: transaction.name,
                                });

                                setSelectedButton("Trades");
                              }}
                            >
                              <div
                                className="logo_title"
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                }}
                              >
                                <img
                                  src={`https://images.5paisa.com/MarketIcons/${transaction.symbol}.png`}
                                  alt="institution"
                                  width={40}
                                ></img>
                                <span
                                  style={{
                                    marginLeft: "7px",
                                    fontSize: "18px",
                                  }}
                                >
                                  {transaction.symbol}
                                </span>
                              </div>
                              <div
                                className="prices"
                                style={{
                                  color:
                                    transaction.serverMarketChange >= 0
                                      ? "green"
                                      : "red",
                                }}
                              >
                                <span
                                  style={{
                                    fontSize: "18px",
                                    fontWeight: "bold",
                                  }}
                                >
                                  {new Intl.NumberFormat("en-IN", {
                                    style: "currency",
                                    currency: "INR",
                                    currencyDisplay: "symbol",
                                  }).format(transaction.serverCurrentPrice)}
                                </span>
                                <div style={{ fontSize: "13px" }}>
                                  <span>{transaction.serverMarketChange}</span>
                                  <span>
                                    {" "}
                                    ({transaction.serverMarketChangePercent}%)
                                  </span>
                                </div>
                              </div>
                            </div>
                          );
                        })
                      )}
                    </div>
                  </div>
                  <div
                    className="dash_container"
                    style={{
                      padding: "0px 20px",
                      overflowY: "scroll",
                      height: "644px",
                    }}
                  >
                    <div
                      className="user_greeting"
                      style={{
                        color: "black",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                      }}
                    >
                      <h1 style={{ fontSize: "30px", fontWeight: "normal" }}>
                        Hi, {userDetails.name}
                      </h1>
                      <span
                        style={{
                          marginRight: "20px",
                          display: "flex",
                          alignItems: "center",
                          fontWeight: "bold",
                          color:
                            marketStatus === "Closed" ? "#ff7c7c" : "#73b573",
                        }}
                      >
                        <span
                          style={{
                            fontSize: "25px",
                            marginRight: "5px",
                            paddingBottom: "5px",
                          }}
                        >
                          •
                        </span>
                        <span>
                          {marketStatus === "Closed"
                            ? "Market is Closed"
                            : "Market is Open"}
                        </span>
                      </span>
                    </div>

                    <div
                      className="margin_details_title"
                      style={{
                        borderBottom: "2px solid #e9e9e9 ",
                        borderTop: "2px solid #e9e9e9 ",
                        width: "1072px",
                        display: "flex",
                        justifyContent: "flex-start",
                      }}
                    >
                      <div
                        style={{
                          paddingTop: "30px",
                          display: "flex",
                          flexDirection: "column",
                          width: "100%",
                          marginRight: "70px",
                        }}
                      >
                        <div
                          style={{
                            display: "flex",
                          }}
                        >
                          <img
                            src={equity}
                            alt="equity"
                            height={23}
                            style={{ marginRight: "15px" }}
                          ></img>
                          <span style={{ fontSize: "17px" }}>Equity</span>
                        </div>
                        <div
                          className="margin_details_container"
                          style={{
                            display: "flex",
                            marginTop: "20px",
                            justifyContent: "space-between",
                            paddingBottom: "30px",
                          }}
                        >
                          <div
                            className="margin_details_1"
                            style={{ display: "flex", flexDirection: "column" }}
                          >
                            <span
                              data-tooltip-id="my-tooltip-1"
                              style={{ fontSize: "42px", color: "#5c5c5c" }}
                            >
                              {formatAmount(userDetails.margin_available)}
                            </span>
                            <ReactTooltip id="my-tooltip-1" place="top">
                              {new Intl.NumberFormat("en-IN", {
                                style: "currency",
                                currency: "INR",
                                currencyDisplay: "symbol",
                              }).format(userDetails.margin_available)}
                            </ReactTooltip>
                            <span
                              style={{ fontSize: "12px", color: "#9b9b9b" }}
                            >
                              Margin available
                            </span>
                          </div>
                          <div
                            className="margin_details_2"
                            style={{
                              display: "flex",
                              flexDirection: "column",
                              justifyContent: "center",
                            }}
                          >
                            <span
                              style={{ fontSize: "15px", color: "#9b9b9b" }}
                            >
                              Margin used{" "}
                              <span
                                data-tooltip-id="my-tooltip-2"
                                style={{ marginLeft: "10px", color: "black" }}
                              >
                                {formatAmount(userDetails.margin_used)}
                              </span>
                              <ReactTooltip id="my-tooltip-2" place="top">
                                {new Intl.NumberFormat("en-IN", {
                                  style: "currency",
                                  currency: "INR",
                                  currencyDisplay: "symbol",
                                }).format(userDetails.margin_used)}
                              </ReactTooltip>
                            </span>
                            <span
                              style={{ fontSize: "15px", color: "#9b9b9b" }}
                            >
                              Opening balance{""}
                              <span
                                data-tooltip-id="my-tooltip-3"
                                style={{ marginLeft: "10px", color: "black" }}
                              >
                                {formatAmount(userDetails.opening_bal)}
                              </span>
                              <ReactTooltip id="my-tooltip-3" place="top">
                                {new Intl.NumberFormat("en-IN", {
                                  style: "currency",
                                  currency: "INR",
                                  currencyDisplay: "symbol",
                                }).format(userDetails.opening_bal)}
                              </ReactTooltip>
                            </span>
                          </div>
                          <div
                            className="margin_details_3"
                            style={{
                              display: "flex",
                              flexDirection: "column",
                              alignItems: "center",
                            }}
                          >
                            <span
                              style={{
                                fontSize: "42px",
                                color: totalPL >= 0 ? "green" : "red",
                              }}
                            >
                              {totalPL >= 0 ? `+${totalPL}` : totalPL}
                            </span>
                            <span
                              style={{ fontSize: "12px", color: "#9b9b9b" }}
                            >
                              P&L
                            </span>
                          </div>
                        </div>
                      </div>
                      <DashMarginChart></DashMarginChart>
                    </div>

                    <div className="open_orders_container">
                      <div
                        className="open_order_title"
                        style={{ marginTop: "20px", fontSize: "20px" }}
                      >
                        Open orders ({orderList.length})
                      </div>
                      <div
                        className="open_order_table"
                        style={{ marginTop: "30px" }}
                      >
                        <table
                          className="data-table"
                          style={{
                            width: "100%",
                            borderTop: "1px solid black",
                            marginLeft: "10px",
                          }}
                        >
                          <thead>
                            <tr>
                              <th
                                className="select-header"
                                style={{ width: "2px" }}
                              >
                                {/* <input
                                  type="checkbox"
                                  checked={false}
                                  onChange={() => {}}
                                  style={{
                                    cursor: "pointer",
                                    height: "15px",
                                    width: "15px",
                                    marginLeft: "10px",
                                  }}
                                /> */}
                              </th>
                              <th className="header">DateTime</th>
                              <th className="header">Type</th>
                              <th className="header">Stocks</th>
                              <th className="header">Qty</th>
                              <th className="header">LTP</th>
                              <th className="header">Invested Amount</th>
                              <th className="header">P&L</th>
                              <th className="header">(%)P&L</th>
                            </tr>
                          </thead>
                          <tbody>
                            {serverPrice.length > 0 ? (
                              serverPrice.map((transaction, index) => {
                                const singleQuantity =
                                  transaction.type === "BUY"
                                    ? transaction.serverCurrentPrice -
                                      transaction.buyPrice
                                    : transaction.sellPrice -
                                      transaction.serverCurrentPrice;
                                // console.log(transaction.symbol + " " + singleQuantity);
                                const profitLoss = (
                                  singleQuantity * transaction.quantity
                                ).toFixed(2);

                                const colorClass =
                                  profitLoss < 0 ? "red" : "green";

                                const profitlossPercentage = (
                                  (profitLoss / transaction.totalPrice) *
                                  100
                                ).toFixed(2);
                                return (
                                  <tr
                                    key={index}
                                    className="data-row"
                                    style={{
                                      width: "100%",
                                      textAlign: "center",
                                      fontSize: "14px",
                                      marginTop: "50px",
                                    }}
                                  >
                                    <td>
                                      <input
                                        type="checkbox"
                                        checked={selectedTransactions.includes(
                                          index
                                        )}
                                        onChange={() => {
                                          handleCheckboxChange(index);
                                        }}
                                        style={{
                                          cursor: "pointer",
                                          height: "15px",
                                          width: "15px",
                                          marginLeft: "10px",
                                        }}
                                      />
                                    </td>
                                    <td className="id-cell">
                                      {new Date(
                                        transaction.timestamp * 1000
                                      ).toLocaleString()}
                                    </td>
                                    <td
                                      className="name-cell"
                                      style={{
                                        color:
                                          transaction.type === "BUY"
                                            ? "green"
                                            : "red",
                                        fontWeight: "bold",
                                      }}
                                    >
                                      {transaction.type}
                                    </td>
                                    <td className="email-cell">
                                      {transaction.symbol}
                                    </td>
                                    <td className="email-cell">
                                      {transaction.quantity}
                                    </td>
                                    <td className="email-cell">
                                      {transaction.serverCurrentPrice}
                                    </td>
                                    <td className="email-cell">
                                      {transaction.totalPrice}
                                    </td>
                                    <td
                                      className="email-cell"
                                      style={{ color: colorClass }}
                                    >
                                      {new Intl.NumberFormat("en-IN", {
                                        style: "currency",
                                        currency: "INR",
                                        currencyDisplay: "symbol",
                                      }).format(profitLoss)}
                                    </td>
                                    <td
                                      className="email-cell"
                                      style={{ color: colorClass }}
                                    >
                                      ({profitlossPercentage}%)
                                    </td>
                                  </tr>
                                );
                              })
                            ) : (
                              <tr
                                className="data-row"
                                style={{
                                  width: "100%",
                                  textAlign: "center",
                                  fontSize: "14px",
                                  marginTop: "50px",
                                }}
                              >
                                <td>
                                  <input
                                    type="checkbox"
                                    checked={false}
                                    onChange={() => {}}
                                    style={{
                                      height: "15px",
                                      width: "15px",
                                      marginLeft: "10px",
                                    }}
                                  />
                                </td>
                                <td className="id-cell">---</td>
                                <td className="name-cell">---</td>
                                <td className="email-cell">---</td>
                                <td className="email-cell">---</td>
                                <td className="email-cell">---</td>
                                <td className="email-cell">---</td>
                                <td className="email-cell">---</td>
                              </tr>
                            )}
                          </tbody>
                        </table>
                        {selectedTransactions.length > 0 && (
                          <button
                            style={{
                              margin: "15px 10px",
                              padding: "8px 16px",
                              backgroundColor: "#007bff",
                              color: "#fff",
                              border: "none",
                              borderRadius: "4px",
                              cursor: "pointer",
                            }}
                            onClick={() => {
                              handleRemoveDashboardTransaction();
                            }}
                          >
                            Exit {selectedTransactions.length}{" "}
                            {selectedTransactions.length > 1
                              ? "orders"
                              : "order"}
                          </button>
                        )}
                      </div>
                    </div>
                    <div
                      className="open_order_container"
                      style={{
                        marginTop: "20px",
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                      }}
                    >
                      <div
                        className="open_order_title"
                        style={{ fontSize: "20px" }}
                      >
                        Trade history
                      </div>

                      <ReactHTMLTableToExcel
                        id="downloadBtn"
                        table="table-to-xls"
                        filename="Trade-History"
                        sheet="Trade-history"
                        className="fa fa-download"
                        buttonText=" Download"
                      />

                      {/* <button
                        id="downloadBtn"
                        table="table-to-xls"
                        filename="Trade-History"
                        sheet="Trade-history"
                        className="fa fa-download"
                        buttonText=" Download"
                      >
                        Download
                      </button> */}
                    </div>

                    <div
                      className="trade_history_table"
                      style={{ marginTop: "30px" }}
                    >
                      <table
                        id="table-to-xls"
                        className="data-table"
                        style={{
                          width: "100%",
                          borderTop: "1px solid black",
                          marginLeft: "10px",
                        }}
                      >
                        <thead>
                          <tr>
                            <th className="header">DateTime</th>
                            <th className="header">Exit DateTime</th>
                            <th className="header">Type</th>
                            <th className="header">Stocks</th>
                            <th className="header">Qty</th>
                            <th className="header">Price</th>
                            <th className="header">Exit price</th>
                            <th className="header">Invested Amount</th>
                            <th className="header">P&L</th>
                            <th className="header">(%)P&L</th>
                          </tr>
                        </thead>
                        <tbody>
                          {tradeHistory.length > 0 ? (
                            // const reversedTradeHistory = [...tradeHistory].reverse();
                            tradeHistory
                              .slice()
                              .reverse()
                              .map((transaction, index) => {
                                const singleQuantity =
                                  transaction.type === "BUY"
                                    ? transaction.serverCurrentPrice -
                                      transaction.buyPrice
                                    : transaction.sellPrice -
                                      transaction.serverCurrentPrice;
                                // console.log(transaction.symbol + " " + singleQuantity);
                                const profitLoss = (
                                  singleQuantity * transaction.quantity
                                ).toFixed(2);
                                const colorClass =
                                  profitLoss < 0 ? "red" : "green";

                                const profitlossPercentage = (
                                  (profitLoss / transaction.totalPrice) *
                                  100
                                ).toFixed(2);
                                return (
                                  <tr
                                    key={index}
                                    className="data-row"
                                    style={{
                                      width: "100%",
                                      textAlign: "center",
                                      fontSize: "14px",
                                      marginTop: "50px",
                                    }}
                                  >
                                    <td className="id-cell">
                                      {new Date(
                                        transaction.timestamp * 1000
                                      ).toLocaleString()}
                                    </td>
                                    <td className="id-cell">
                                      {new Date(
                                        transaction.exitTime * 1000
                                      ).toLocaleString()}
                                    </td>
                                    <td
                                      className="name-cell"
                                      style={{
                                        color:
                                          transaction.type === "BUY"
                                            ? "green"
                                            : "red",
                                        fontWeight: "bold",
                                      }}
                                    >
                                      {transaction.type}
                                    </td>
                                    <td className="email-cell">
                                      {transaction.symbol}
                                    </td>
                                    <td className="email-cell">
                                      {transaction.quantity}
                                    </td>
                                    <td className="email-cell">
                                      {transaction.type === "BUY"
                                        ? transaction.buyPrice
                                        : transaction.sellPrice}
                                    </td>
                                    <td className="email-cell">
                                      {transaction.serverCurrentPrice}
                                    </td>
                                    <td className="email-cell">
                                      {transaction.totalPrice}
                                    </td>
                                    <td
                                      className="email-cell"
                                      style={{ color: colorClass }}
                                    >
                                      {new Intl.NumberFormat("en-IN", {
                                        style: "currency",
                                        currency: "INR",
                                        currencyDisplay: "symbol",
                                      }).format(profitLoss)}
                                    </td>
                                    <td
                                      className="email-cell"
                                      style={{ color: colorClass }}
                                    >
                                      ({profitlossPercentage}%)
                                    </td>
                                  </tr>
                                );
                              })
                          ) : (
                            <tr
                              className="data-row"
                              style={{
                                width: "100%",
                                textAlign: "center",
                                fontSize: "14px",
                                marginTop: "50px",
                              }}
                            >
                              {" "}
                              <td className="id-cell">---</td>
                              <td className="id-cell">---</td>
                              <td className="id-cell">---</td>
                              <td className="id-cell">---</td>
                              <td className="name-cell">---</td>
                              <td className="email-cell">---</td>
                              <td className="email-cell">---</td>
                              <td className="email-cell">---</td>
                              <td className="email-cell">---</td>
                              <td className="email-cell">---</td>
                            </tr>
                          )}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </section>
            </>
          ) : (
            <>
              <div className="chart-container">
                <div
                  style={{
                    marginLeft: "20px",
                    display: "flex",
                    marginTop: "30px",
                  }}
                >
                  <img
                    src={`https://images.5paisa.com/MarketIcons/${selectedStock.symbol}.png`}
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
                    {selectedStock.name}
                  </div>
                </div>
                {selectedStock.symbol && (
                  <ChartComponent symbol={selectedStock.symbol} />
                )}
                <div
                  className="action-buttons"
                  style={{
                    width: "400px",
                    marginLeft: "20px",
                    marginTop: "30px",
                    height: "50px",
                    display: "flex",
                  }}
                >
                  <button
                    className="button-65 buy-button"
                    style={{
                      backgroundColor: "#20ac20",
                      height: "50px",
                      fontSize: "20px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      width: "150px",
                    }}
                    onClick={handleBuyButtonClick}
                  >
                    BUY
                    <img
                      src={bull_btn_img}
                      height={35}
                      style={{ marginLeft: "10px" }}
                    ></img>
                  </button>

                  <button
                    className="button-65 buy-button"
                    style={{
                      backgroundColor: "#ff4742",
                      height: "50px",
                      fontSize: "20px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      width: "150px",
                      marginLeft: "30px",
                    }}
                    onClick={handleSellButtonClick}
                  >
                    SELL
                    <img
                      src={bear_btn_img}
                      height={35}
                      style={{ marginLeft: "10px" }}
                    ></img>
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
                        NSE: {selectedStock.symbol}
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
                    <div
                      className="popup-content"
                      style={{ backgroundColor: "red" }}
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
                        NSE: {selectedStock.symbol}
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
                  marginTop: "20px",
                  marginRight: "1%",
                  // display: "flex",
                  //justifyContent: "center",

                  //padding: "0px 60px 0px 30px",
                  //borderLeft: "1px solid black",
                }}
              >
                <div
                  className="pnl_container"
                  style={{
                    marginBottom: "-30px",
                    height: "70px",

                    //width: "300px",
                    // marginLeft: "4%",
                    // position: "absolute",
                    // marginLeft: "123px",
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
                        zIndex: "1",
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
                    padding: "30px 20px 0px 20px",
                    border: "3px solid #0d4d8d",
                    //marginTop: "40px",
                    borderRadius: "10px",
                    overflowY: "scroll",
                    height: "510px",
                    overflowX: "hidden",

                    //overflowY: "auto",
                  }}
                >
                  {serverPrice.length > 0 ? (
                    serverPrice.map((transaction, index) => {
                      const isHovered =
                        hoveredTransaction === index ? true : false;
                      console.log(isHovered);
                      // Calculate profit/loss
                      const singleQuantity =
                        transaction.type === "BUY"
                          ? transaction.serverCurrentPrice -
                            transaction.buyPrice
                          : transaction.sellPrice -
                            transaction.serverCurrentPrice;
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
                            onClick={() => {
                              setSelectedStock({
                                symbol: transaction.symbol,
                                name: transaction.name,
                              });
                            }}
                            key={index}
                            className="d-tile-child"
                            onMouseEnter={() => handleMouseEnter(index)}
                            onMouseLeave={handleMouseLeave}
                            style={{
                              marginTop: "10px",
                              border: "1px solid #0000ff4f",
                              height: "90px",
                              padding: "20px 20px",
                              //  width: "100%",
                              boxShadow: "1px 1px 10px 2px rgba(0,0,0,.3)",
                              borderRadius: "10px",
                              cursor: "pointer",
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
                                        transaction.type === "BUY"
                                          ? "green"
                                          : "red",
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
                                    //role="button"
                                    onClick={() =>
                                      handleRemoveTransaction(index)
                                    }
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
                      <img
                        src={no_position}
                        alt="no open position"
                        height={140}
                      />
                    </div>
                  )}
                </div>
              </div>
            </>
          )}
        </div>
        <ToastContainer />
      </div>
    </>
  );
}

export default Dashboard;
