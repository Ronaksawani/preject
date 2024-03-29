// TradingViewWidget.jsx

import React, { useEffect, useRef } from "react";

let tvScriptLoadingPromise;

export default function TradingViewWidget() {
  const onLoadScriptRef = useRef();

  useEffect(() => {
    onLoadScriptRef.current = createWidget;

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

    tvScriptLoadingPromise.then(
      () => onLoadScriptRef.current && onLoadScriptRef.current()
    );

    return () => (onLoadScriptRef.current = null);

    function createWidget() {
      if (
        document.getElementById("tradingview_81c45") &&
        "TradingView" in window
      ) {
        new window.TradingView.widget({
          autosize: true,
          symbol: "BSE:TCS",
          interval: "1",
          timezone: "Asia/Kolkata",
          theme: "light",
          style: "1",
          locale: "in",
          enable_publishing: false,
          withdateranges: true,
          hide_side_toolbar: false,
          allow_symbol_change: true,
          save_image: false,
          hide_volume: true,
          container_id: "tradingview_81c45",
        });
      }
    }
  }, []);

  return (
    <div
      className="tradingview-widget-container"
      style={{ height: "100%", width: "100%" }}
    >
      <div
        id="tradingview_81c45"
        style={{ height: "calc(100% - 32px)", width: "100%" }}
      />
    </div>
  );
}
