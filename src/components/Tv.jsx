import React, { useEffect, useRef } from "react";

function TradingViewWidget({ symbol }) {
  const widgetContainerRef = useRef(null);
  let widgetInstance = null;

  useEffect(() => {
    let tvScriptLoadingPromise;
    if (!tvScriptLoadingPromise) {
      tvScriptLoadingPromise = new Promise((resolve) => {
        const script = document.createElement("script");
        script.id = "tradingview-widget-loading-script";
        script.src = "https://s3.tradingview.com/tv.js";
        script.type = "text/javascript";
        script.onload = resolve;

        document.head.appendChild(script);
      });
    }

    tvScriptLoadingPromise.then(() => {
      if (widgetContainerRef.current && "TradingView" in window) {
        widgetInstance = new window.TradingView.widget({
          width: "580",
          height: "510",
          symbol: symbol,
          interval: "1",
          timezone: "Etc/UTC",
          theme: "light",
          style: "1",
          locale: "in",
          enable_publishing: false,
          withdateranges: true,
          hide_side_toolbar: false,
          allow_symbol_change: false,
          save_image: false,
          hide_volume: true,
          allow_symbol_change: true,
          container_id: widgetContainerRef.current.id,
        });
      }
    });

    return () => {
      // Clean up TradingView widget instance when component unmounts
      if (widgetInstance) {
        widgetInstance.remove();
        widgetInstance = null;
      }
    };
  }, [symbol]);

  useEffect(() => {
    if (widgetInstance) {
      // Subscribe to price updates
      widgetInstance.onChartReady(() => {
        const chart = widgetInstance.chart();
        chart.onIntervalChanged().subscribe(null, () => {
          // Handle price update
          const price = chart.price();
          console.log("Price updated:", price);
        });
      });
    }
  }, [widgetInstance]);

  return (
    <div
      ref={widgetContainerRef}
      id="tradingview-widget-container"
      style={{ height: "500px" }}
    />
  );
}

export default TradingViewWidget;
