import React, { useEffect, useState, useRef } from "react";
import { createChart, CrosshairMode } from "lightweight-charts";
import axios from "axios";
import chart_loading from "../assets/videos/chart_loading.gif";

const ChartComponent = ({ symbol }) => {
  const chartContainerRef = useRef(null);
  const [serverData, setServerData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [initialDataSet, setInitialDataSet] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://project-server-22fx.vercel.app/chart/ohlc",
          {
            params: {
              symbol: symbol,
            },
          }
        );
        const filteredData = response.data.filter((item) => {
          return !Object.values(item).some((val) => val === null);
        });
        setServerData(filteredData);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching chart data:", error);
      }
    };

    fetchData();

    const interval = setInterval(fetchData, 1000); // Call fetchData every 1000ms

    // Cleanup function to clear interval when component unmounts or when 'symbol' changes
    return () => clearInterval(interval);
  }, [symbol]); // Trigger useEffect when 'symbol' changes

  useEffect(() => {
    if (serverData && chartContainerRef.current) {
      const chart = createChart(chartContainerRef.current, {
        width: 850,
        height: 400,
        crosshair: {
          mode: CrosshairMode.Normal,
        },
        timeScale: {
          timeVisible: true,
          secondsVisible: false,
        },
      });

      const candlestickSeries = chart.addCandlestickSeries({});

      const dataToShow = serverData.slice(0, -1); // Get all data except the last one
      candlestickSeries.setData(dataToShow);

      const lastData = serverData[serverData.length - 1];
      //console.log(lastData);
      candlestickSeries.update(lastData);

      // if (!initialDataSet) {
      //   const dataToShow = serverData.slice(0, -1); // Get all data except the last one
      //   candlestickSeries.setData(dataToShow);
      //   setInitialDataSet(true);
      // } else {
      //   const lastData = serverData[serverData.length - 1];
      //   candlestickSeries.update(lastData);
      // }

      // Cleanup function
      return () => {
        chart.remove();
      };
    }
  }, [serverData]);

  return (
    <div style={{ textAlign: "center" }}>
      {loading ? (
        <div
          style={{
            margin: "20px",
            border: "1px solid black",
            width: "850px",
            height: "400px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img src={chart_loading} alt="chart loading" width={150} />
        </div>
      ) : serverData ? (
        <div
          ref={chartContainerRef}
          style={{
            margin: "20px",
            border: "1px solid black",
            width: "850px",
            zIndex: "0",
          }}
        />
      ) : (
        <p>No data available</p>
      )}
    </div>
  );
};

export default ChartComponent;
