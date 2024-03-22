import React, { useEffect, useRef } from "react";
import { ColorType, createChart } from "lightweight-charts";
import { useGlobalContext } from "../store/Contex";

const DashMarginChart = () => {
  const { userDetails } = useGlobalContext();
  const chartContainerRef = useRef();

  useEffect(() => {
    const initialData = userDetails.marginChart;
    console.log("change in chart");

    // Check if marginChart data is available
    if (initialData) {
      const chart = createChart(chartContainerRef.current, {
        layout: { background: { type: ColorType.Solid, color: "white" } },
        width: 500,
        height: 175,
      });

      const newSeries = chart.addBaselineSeries({
        baseValue: { type: "price", price: 1000000 },
        topLineColor: "rgba( 38, 166, 154, 1)",
        topFillColor1: "rgba( 38, 166, 154, 0.28)",
        topFillColor2: "rgba( 38, 166, 154, 0.05)",
        bottomLineColor: "rgba( 239, 83, 80, 1)",
        bottomFillColor1: "rgba( 239, 83, 80, 0.05)",
        bottomFillColor2: "rgba( 239, 83, 80, 0.28)",
      });

      newSeries.setData(initialData);
      chart.timeScale().fitContent();

      return () => chart.remove();
    }
  }, [userDetails.marginChart]); // Include userDetails.marginChart in dependency array

  return <div ref={chartContainerRef}></div>;
};

export default DashMarginChart;
