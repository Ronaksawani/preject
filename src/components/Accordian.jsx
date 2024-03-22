import React from "react";
import Accordion from "react-bootstrap/Accordion";

import "../../src/App.css";
const Accordian = () => {
  return (
    <section className="faqs" style={{ marginTop: "50px" }}>
      <Accordion defaultActiveKey="0">
        <Accordion.Item eventKey="0">
          <Accordion.Header style={{ zIndex: "0" }}>
            <p style={{ fontSize: "22px", fontWeight: "bold" }}>
              What is Paper Trading?
            </p>
          </Accordion.Header>
          <Accordion.Body>
            Paper trading is a simulated form of trading that allows beginners
            to practice on a virtual trading platform without using real money.
            It's essentially a stock market simulator where you can hone your
            skills before stepping into the real trading world.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>
            <p style={{ fontSize: "22px", fontWeight: "bold" }}>
              How do I get started with paper trading?
            </p>
          </Accordion.Header>
          <Accordion.Body>
            To start paper trading, sign up on DailyPunch, a top-rated paper
            trading platform in India. You'll receive virtual money of 10 Lac to
            begin your trading journey.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
          <Accordion.Header>
            <p style={{ fontSize: "22px", fontWeight: "bold" }}>
              Can I skip paper trading and start with real trading?
            </p>
          </Accordion.Header>
          <Accordion.Body>
            While it's technically possible to skip paper trading and dive
            directly into real trading, we recommend against it. Real trading
            can be volatile and complex. Paper trading allows you to familiarize
            yourself with trading mechanisms and develop strategies without the
            risk of real financial losses.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="3">
          <Accordion.Header>
            <p style={{ fontSize: "22px", fontWeight: "bold" }}>
              Why is paper trading useful for beginners?
            </p>
          </Accordion.Header>
          <Accordion.Body>
            Think of paper trading as a playground for beginners. It's like a
            sandbox where you can experiment with trading strategies, understand
            market dynamics, and monitor the impact of news on stocks. And the
            best part? You get to do all of this with virtual money. This way,
            you get to practice, make mistakes, learn, and gain confidence
            before you dive into real trading.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="4">
          <Accordion.Header>
            <p style={{ fontSize: "22px", fontWeight: "bold" }}>
              Experiment and Perfect Your Trading Strategies
            </p>
          </Accordion.Header>
          <Accordion.Body>
            Utilize our paper trading platform to experiment with different
            trading strategies. The stock market is a dynamic beast - your
            strategies need to adapt too. Continuously analyze, tweak, and
            optimize your strategies for the best results.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="5">
          <Accordion.Header>
            <p style={{ fontSize: "22px", fontWeight: "bold" }}>
              Keep Learning and Evolving
            </p>
          </Accordion.Header>
          <Accordion.Body>
            Whether you're a novice trader or a seasoned pro, paper trading
            serves as an excellent learning tool. With our platform, you can
            continually test new strategies, explore different markets, and
            enhance your trading skills. The world of trading never stands
            still, and neither should you!
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </section>
  );
};

export default Accordian;
