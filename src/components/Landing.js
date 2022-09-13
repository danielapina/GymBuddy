import React from "react";

import { Container, Row, Col } from "react-bootstrap";
import "./styles/banner.scss";

const Banner = () => {
  return (
    <div
      className="p-5 text-left shadow-1-strong text-white"
      style={{ backgroundColor: "#6DA395" }}
    >
      <h1 className="mt-5 ms-3 h1">
        Your very own gym guides <span style={{ color: "#C67410" }}>+</span>{" "}
        Buddy.
      </h1>
    </div>
  );
};

const InformationBanner = () => {
  return (
    <Container
      className="p-4  text-white"
      style={{ backgroundColor: "#354B45", height: "fit-content" }}
      fluid
    >
      <Row>
        <Col className="p-4 rounded" style={{ backgroundColor: "#4F6786" }}>
          <p>Compleate work out slips.</p>
        </Col>
        <Col className="p-4 rounded" style={{ backgroundColor: "#C67410" }}>
          <p>Muscle group detail excersice </p>
        </Col>
      </Row>
      <Row>
        <Col
          className="rounded p-0"
          style={{ backgroundColor: "#D5CABD", color: "black" }}
        >
          <div className="banner rounded bg-image p-3 text-white">
            Save and track your lifted weight progression
          </div>
        </Col>
      </Row>

      <Row>
        <Col
          className="p-4 mb-5 rounded"
          style={{ backgroundColor: "#D5CABD", color: "black" }}
        >
          <p>No more excuses go work out!</p>
        </Col>
      </Row>
    </Container>
  );
};

const Landing = () => {
  return (
    <>
      <Banner />
      <InformationBanner />
    </>
  );
};

export default Landing;
