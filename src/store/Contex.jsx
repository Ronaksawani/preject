import React, { createContext, useContext, useState } from "react";

const GlobalContext = createContext();

export const useGlobalContext = () => {
  const context = useContext(GlobalContext);

  return context;
};

export const GlobalProvider = ({ children }) => {
  const [watchlist, setWatchList] = useState([]);

  const [selectedStock, setSelectedStock] = useState({
    symbol: "TCS",
    name: "Tata Consultancy Services Limited",
  });
  const [logout, setLogout] = useState(false);
  const [userDetails, setUserDetails] = useState([]);
  const [phoneNumber, setPhoneNumber] = useState();
  const [selectedButton, setSelectedButton] = useState("dashboard");
  const [serverWatchlistPrice, setServerWatchlistPrice] = useState([]);
  const [orderList, setOrderList] = useState([]);

  return (
    <GlobalContext.Provider
      value={{
        watchlist,
        setWatchList,
        selectedStock,
        setSelectedStock,
        userDetails,
        setUserDetails,
        phoneNumber,
        setPhoneNumber,
        selectedButton,
        setSelectedButton,
        serverWatchlistPrice,
        setServerWatchlistPrice,
        orderList,
        setOrderList,
        logout,
        setLogout,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
