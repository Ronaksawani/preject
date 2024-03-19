import React, { useEffect, useRef } from "react";
import { ColorType, createChart } from "lightweight-charts";

const DashMarginChart = () => {
  const chartContainerRef = useRef();

  useEffect(() => {
    const initialData = [
      { value: 1000000, time: 1642425322 },
      { value: 999000, time: 1642511722 },
      { value: 997520, time: 1642598122 },
      { value: 995103, time: 1642684522 },
      { value: 990000, time: 1642770922 },
      { value: 998753, time: 1642857322 },
      { value: 995120, time: 1642943722 },
      { value: 1003256, time: 1643030122 },
      { value: 1010650, time: 1643116522 },
      { value: 1009000, time: Math.floor(Date.now() / 1000) },
    ];

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
  }, []);

  return <div ref={chartContainerRef}></div>;
};

export default DashMarginChart;
