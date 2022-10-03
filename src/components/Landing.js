import React from "react";

import { Container, Row, Col, Button } from "react-bootstrap";
import { Link } from 'react-router-dom';
import "./styles/banner.scss";

import Icon1 from '../assets/lift-icon.png';
import Icon2 from '../assets/russian-icon.png'
import Icon3 from '../assets/weight-icon.png'

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
    <Container fluid>
      <Row>
        <Col>
          <div id="banner1" className="info-banner">
          <Button
            as={Link}
            to="/slips"
            className="btn"
        >
          Lets Go!
          </Button>
          </div>
        </Col>
        <Col>
          <div className="side-info">
          <img src={Icon1} alt="weight-svg" className="svg" />
          <p>Varios gym slips</p>
        </div>
        </Col>
      </Row>
      <Row>
        <Col>
          <div className="side-info">
          <img src={Icon2} alt="russian-svg" className="svg" />
          <p>Muscle group detail excersice </p>
        </div>
        </Col>
        <Col>
          <div id="banner2" className="info-banner">
          <Button
            as={Link}
            to="/exercises"
            className="btn"
        >
          Lets Go!
          </Button>
          </div>
        </Col>
      </Row>
      <Row>
        <Col>
          <div id="banner3" className="info-banner">
          <Button
            as={Link}
            to="/saved"
            className="btn"
        >
          Lets Go!
          </Button>
          </div>
        </Col>
        <Col>
          <div className="side-info">
          <img src={Icon3} alt="-svg" className="svg" />
          <p>Save and track your lifted weight progression </p>
        </div>
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
