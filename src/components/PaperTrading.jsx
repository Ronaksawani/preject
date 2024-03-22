import React from "react";

import { NavLink } from "react-router-dom";
import "../../src/App.css";
import dash_img from "../assets/images/paperTrading_dash_img.png";
import whyPaperTrading from "../assets/images/whypt.png";
import Accordian from "./Accordian";

const PaperTrading = () => {
  return (
    <div style={{ padding: "10px 10%" }}>
      <section
        className="sebi_report"
        style={{ display: "flex", paddingTop: "80px" }}
      >
        <div style={{ display: "flex", flexDirection: "column", width: "43%" }}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              fontSize: "56px",
              letterSpacing: "-.015em",
              lineHeight: "78px",
              textAlign: "left",
              fontWeight: "600",
              color: "#090b34",
            }}
          >
            <span>Learn Financial</span>
            <span>Markets via Paper</span>
            <span>Trading</span>
          </div>
          <div style={{ marginTop: "30px" }}>
            <span
              style={{
                lineHeight: "30px",
                fontSize: "22px",
              }}
            >
              SEBI reports that 90% of traders face losses and exit the market.
              Enhance your longevity by testing strategies with our
              user-friendly virtual trading app.
            </span>
          </div>
          <div className="signu" style={{}}>
            <NavLink to="/sign-up-login" style={{ textDecoration: "none" }}>
              <div
                className="signup-sec"
                style={{
                  marginTop: "47px",
                  fontWeight: "bold",
                  fontSize: "24px",
                  fontFamily: "OpenSans",
                  height: "56px",
                  width: "300px",
                  backgroundColor: "#1b3e7d",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <span style={{}}>Get started for FREE</span>
              </div>
            </NavLink>
          </div>
        </div>
        <div>
          <img
            src={dash_img}
            height={350}
            width={700}
            style={{ marginLeft: "50px", border: "1px solid black" }}
          ></img>
        </div>
      </section>
      <section
        className="whyPaperTrading"
        style={{
          marginTop: "65px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <img src={whyPaperTrading} width={1300} height={550}></img>
      </section>
      <section
        className="pt_vs_rl"
        style={{ marginTop: "65px", color: "#090b34" }}
      >
        <div>
          <span
            style={{ fontSize: "45px", fontWeight: "600", lineHeight: "56px" }}
          >
            Paper Trading vs Real Trading: How are they different?
          </span>
        </div>
        <div
          className="diff_container"
          style={{
            marginTop: "30px",
            color: "#042648",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              width: "50%",
              display: "flex",
              flexDirection: "column",
              backgroundColor: "#f8fbff",
              borderRadius: "24px",
              padding: "48px",
            }}
          >
            <span style={{ fontWeight: "600", fontSize: "25px" }}>
              Paper Trading
            </span>
            <span
              style={{ fontWeight: "400", fontSize: "16px", marginTop: "6px" }}
            >
              A Risk-Free Market Simulator
            </span>
            <span
              style={{ fontWeight: "600", fontSize: "24px", marginTop: "30px" }}
            >
              The Purpose of Paper Trading
            </span>
            <span
              style={{ fontWeight: "400", fontSize: "14px", marginTop: "6px" }}
            >
              Paper trading serves to mimic real-world trading scenarios without
              real financial implications. The primary goal of a paper trading
              account is to provide traders with a safe space to enhance their
              trading strategies, sharpen their decision-making abilities, and
              prepare for the real-world volatility of financial markets.
            </span>
            <span
              style={{ fontWeight: "600", fontSize: "24px", marginTop: "30px" }}
            >
              The Practical Process
            </span>
            <span
              style={{ fontWeight: "400", fontSize: "14px", marginTop: "6px" }}
            >
              A paper trading account operates with virtual funds. Traders
              analyze the representation of stocks on a website's chart, note
              down the ticker, and use this data to make calculated decisions on
              when to buy or sell the stock.
            </span>
            <span
              style={{ fontWeight: "600", fontSize: "24px", marginTop: "30px" }}
            >
              Transitioning to Live Trading
            </span>
            <span
              style={{ fontWeight: "400", fontSize: "14px", marginTop: "6px" }}
            >
              Upon mastering their trade strategies on a paper trading platform,
              traders typically transition to live trading, where actual money
              is at stake.
            </span>
            <span
              style={{ fontWeight: "600", fontSize: "24px", marginTop: "30px" }}
            >
              Advantages and Disadvantages:
            </span>
            <span
              style={{ fontWeight: "400", fontSize: "14px", marginTop: "6px" }}
            >
              <b>Pros:</b> Paper trading safeguards beginners from risking real
              money while learning, offers confidence-building through trial and
              error, and serves as a training ground for emotion management and
              understanding broader market conditions.
            </span>
            <span
              style={{ fontWeight: "400", fontSize: "14px", marginTop: "20px" }}
            >
              <b>Cons:</b> However, paper trading falls short in accounting for
              various hidden costs encountered in real-world trading and doesn't
              simulate the unpredictability of the live market. It also can't
              provide a complete understanding of how specific market conditions
              can impact individual securities.
            </span>
          </div>
          <div style={{ width: "2%" }}></div>
          <div
            style={{
              width: "50%",
              display: "flex",
              flexDirection: "column",
              backgroundColor: "#f8fbff",
              borderRadius: "24px",
              padding: "48px",
            }}
          >
            <span style={{ fontWeight: "600", fontSize: "25px" }}>
              Live Trading
            </span>
            <span
              style={{ fontWeight: "400", fontSize: "16px", marginTop: "6px" }}
            >
              Stepping into the Real Market
            </span>
            <span
              style={{ fontWeight: "600", fontSize: "24px", marginTop: "30px" }}
            >
              The Shift to Real Trading
            </span>
            <span
              style={{ fontWeight: "400", fontSize: "14px", marginTop: "6px" }}
            >
              The transition from paper trading to live trading is a significant
              one. It involves moving from a risk-free simulator to an
              environment where real money is at stake and subject to the daily
              fluctuations of the live market
            </span>
            <span
              style={{ fontWeight: "600", fontSize: "24px", marginTop: "30px" }}
            >
              Preparing for the Real World
            </span>
            <span
              style={{ fontWeight: "400", fontSize: "14px", marginTop: "6px" }}
            >
              An essential part of this transition is remembering the lessons
              learned during the paper trading phase. Equally vital is the
              ability to manage emotions. Discipline and emotional control are
              paramount when trading on platforms with real financial
              implications, such as Forex.
            </span>
            <span
              style={{ fontWeight: "600", fontSize: "24px", marginTop: "30px" }}
            >
              The Role of a Broker
            </span>
            <span
              style={{ fontWeight: "400", fontSize: "14px", marginTop: "6px" }}
            >
              A reliable online stock broker can play a crucial role in guiding
              traders during live trading. From offering investment advice to
              managing your investment account, a good broker can significantly
              enhance your live trading experience.
            </span>
            <span
              style={{ fontWeight: "600", fontSize: "24px", marginTop: "30px" }}
            >
              Advantages and Disadvantages:
            </span>
            <span
              style={{ fontWeight: "400", fontSize: "14px", marginTop: "6px" }}
            >
              <b>Pros:</b> Live trading offers independence in decision-making,
              the potential for real financial gains, and the opportuni
            </span>
            <span
              style={{ fontWeight: "400", fontSize: "14px", marginTop: "20px" }}
            >
              <b>Cons:</b> On the flip side, live trading brings the risk of
              potential addiction to trading, a high-stress environment due to
              the need for quick decision-making, and the very real possibility
              of substantial monetary losses.
            </span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PaperTrading;
