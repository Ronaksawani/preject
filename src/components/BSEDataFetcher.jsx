import React, { useEffect, useState } from "react";
import axios from "axios";

const StockDataFetcher = () => {
  const [price, setPrice] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://query1.finance.yahoo.com/v7/finance/spark?symbols=asianpaint.BO&interval=1m"
        );

        const responseData = response.data;
        console.log(responseData);
        // Here you can process the response data and set the price state
      } catch (error) {
        console.error("Error:", error);
      }
    };

    // fetchData();
    const intervalId = setInterval(fetchData, 1000);

    // Cleanup function to clear interval when component unmounts
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div>
      {price ? (
        <div>Price: {price}</div>
      ) : (
        <div>Fetching data from 5paisa...</div>
      )}
    </div>
  );
};

export default StockDataFetcher;
