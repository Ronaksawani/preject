import "../user_name.css";
import React, { useEffect } from "react";
import { useState } from "react";
import newTrader from "../assets/videos/welcomeTrader.gif";
import stockList from "./stockList";
import errorSound from "../assets/audios/errorSound.wav";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useGlobalContext } from "../store/Contex";
import { db } from "./config";
import { doc, setDoc } from "firebase/firestore";

const Username = () => {
  const { phoneNumber, watchlist, setWatchList } = useGlobalContext();
  const [userName, setUserName] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    const storedSessionData = sessionStorage.getItem("username");
    if (!storedSessionData) {
      navigate("/sign-up-login");
    }
  }, []);
  const handleInputChange = (event) => {
    const { value } = event.target;
    // Allow only alphabetic characters
    if (/^[a-zA-Z\s]*$/.test(value)) {
      setUserName(value);
    }
  };

  const handleStockClick = (stock) => {
    // Ensure watchList is initialized properly
    const updatedWatchList = watchlist ?? [];
    const index = updatedWatchList.findIndex(
      (item) => item.symbol === stock.symbol
    );
    if (index === -1) {
      // If not selected and less than 5 stocks are selected, add it to the list
      if (updatedWatchList.length < 5) {
        setWatchList([...updatedWatchList, stock]);
      } else {
        console.log("You can only select up to 5 preferred stocks.");
      }
    } else {
      // If already selected, remove it from the list
      const updatedStocks = [...updatedWatchList];
      updatedStocks.splice(index, 1);
      setWatchList(updatedStocks);
    }
  };

  const handleSaveAndNext = async () => {
    // Check if the user name is empty or contains invalid characters
    if (!userName) {
      new Audio(errorSound).play();
      toast.error("Please enter a valid user name ", {
        position: "bottom-right",
        autoClose: 3000,
        theme: "colored",
      });
      return;
    }
    // Check if exactly 5 stocks are selected
    if (watchlist.length !== 5) {
      new Audio(errorSound).play();
      toast.error("Please select exactly 5 preferred stocks ", {
        position: "bottom-right",
        autoClose: 3000,
        theme: "colored",
      });
      return;
    }

    // Proceed with saving user data and navigating to the next step
    console.log("User name:", userName);
    console.log("Selected stocks:", watchlist);
    // Add your logic to save user data and navigate to the next step

    const docData = {
      Timestamp: new Date(),
      phoneNumber: phoneNumber,
      name: userName,
      watchlist: watchlist,
      margin_available: 1000000,
      margin_used: 0,
      opening_bal: 1000000,
      p_l: 0,
      orderList: [],
      tradeHistory: [],
      marginChart: [{ value: 1000000, time: Math.floor(Date.now() / 1000) }],
    };
    await setDoc(doc(db, "users", phoneNumber), docData).then((res) => {
      navigate("/dashboard-trades");
    });
    sessionStorage.removeItem("username");
  };

  return (
    <div style={{ padding: "0px 90px 0px 110px" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "flex-end",
          margin: "20px 0px",
        }}
      >
        <button className="button-65" onClick={handleSaveAndNext}>
          Save & Next{" "}
          <i
            className="fa fa-long-arrow-right white-color arrow1"
            aria-hidden="true"
            style={{}}
          ></i>
        </button>
      </div>

      <div style={{ display: "flex" }}>
        <div
          className="welcome_container"
          style={{ display: "flex", flexDirection: "column" }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <span
              className="welcome"
              style={{
                fontSize: "70px",
                fontWeight: "300",
                fontFamily: "Slabo",
              }}
            >
              Welcome
            </span>
            <span
              className="welcome"
              style={{
                fontSize: "50px",
                fontWeight: "300",
                fontFamily: "Slabo",
                letterSpacing: "2px",
              }}
            >
              Trader
            </span>
          </div>
          <div style={{ marginTop: "100px" }}>
            <img src={newTrader} height={300} alt="new_user_animation"></img>
          </div>
        </div>
        <div style={{ margin: "0px 50px", border: "2px solid #9b9b9b" }}></div>
        <div
          className="user_preference_container"
          style={{ display: "flex", flexDirection: "column" }}
        >
          <span
            style={{
              color: "#0e2a5b",
              fontSize: "25px",
              fontWeight: "500",
              lineHeight: "50px",
            }}
          >
            Your name
          </span>
          <span>This will be shown in your profile</span>
          <div
            style={{
              paddingTop: "10px",
              borderBottom: "2px solid #0e2a5b4d",
              width: "100%",
            }}
          >
            <input
              id="user_name_input"
              type="text"
              placeholder="Your name"
              minLength={3}
              maxLength={30}
              size={50}
              required
              value={userName}
              onChange={handleInputChange}
              style={{ border: "none", fontSize: "20px" }}
            />
          </div>
          <div
            className="watchlist_title_container"
            style={{ display: "flex", flexDirection: "column" }}
          >
            <span
              style={{
                marginTop: "20px",
                color: "#0e2a5b",
                fontSize: "25px",
                fontWeight: "500",
                lineHeight: "50px",
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <span>Select your preferred stocks</span>
              <span
                style={{
                  color: "#0d9791",
                  fontSize: "17px",
                }}
              >
                ({watchlist.length}/5)
              </span>
            </span>
            <div
              className="stock_options_container"
              style={{
                padding: "10px",
                height: "450px",
                overflowY: "scroll",
                display: "flex",
                flexWrap: "wrap",
              }}
            >
              {stockList.map((stock) => {
                const isSelected = watchlist.some(
                  (item) => item.symbol === stock.symbol
                );

                return (
                  <div
                    key={stock.name}
                    className="stock"
                    onClick={() => handleStockClick(stock)}
                    style={{
                      margin: "10px",
                      padding: "10px",
                      border: `2px solid ${isSelected ? "#2f80ed" : "black"}`,
                      boxShadow:
                        "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
                      borderRadius: "10px",
                      cursor: "pointer",
                    }}
                  >
                    {" "}
                    <img
                      src={`https://images.5paisa.com/MarketIcons/${stock.symbol}.png`}
                      alt="instituti"
                      width={70}
                    ></img>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      <ToastContainer></ToastContainer>
    </div>
  );
};

export default Username;
