import React, { useEffect, useState } from "react";
import { createChart, LightweightCharts } from "lightweight-charts";
import axios from "axios";
import chart_loading from "../assets/videos/chart_loading.gif";

const ChartComponent = ({ symbol }) => {
  const [serverData, setServerData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:3002/chart/ohlc", {
          params: {
            symbol: symbol,
          },
        });
        const filteredData = response.data.filter((item) => {
          return !Object.values(item).some((val) => val === null);
        });
        setServerData(filteredData);
        setLoading(false);
        // console.log(filteredData);
      } catch (error) {
        console.error("Error fetching chart data:", error);
      }
    };

    const interval = setInterval(fetchData, 300); // Call fetchData every 1000ms

    // Cleanup function to clear interval when component unmounts or when 'symbol' changes
    return () => clearInterval(interval);
  }, [symbol]); // Trigger useEffect when 'symbol' changes

  useEffect(() => {
    if (serverData) {
      const chart = createChart(document.getElementById("chart-container"), {
        width: 800,
        height: 400,
        // crosshair: {
        //   mode: LightweightCharts.CrosshairMode.normal, // Set crosshair mode to 'Normal' for free movement
        // },
        timeScale: {
          timeVisible: true,
          secondsVisible: false,
        },
      });

      const lineSeries = chart.addCandlestickSeries({});
      lineSeries.setData(serverData);

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
            width: "800px",
            height: "400px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img src={chart_loading} alt="chart loading" width={150}></img>
        </div>
      ) : serverData ? (
        <div
          id="chart-container"
          style={{
            margin: "20px",
            border: "1px solid black",
            width: "800px",
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
