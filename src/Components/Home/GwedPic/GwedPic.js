import React, { Component } from "react";
import weddy from "./wed.jpg";
import "./GwedPc.css";
import { Row, Col } from "react-bootstrap";
const GwedPic = () => {
  return (
    <div>
      <Row>
        <Col style={{ margin: "20px" }}>
          <img src={weddy} className="imges" />
        </Col>
      </Row>
    </div>
  );
};

export default GwedPic;
