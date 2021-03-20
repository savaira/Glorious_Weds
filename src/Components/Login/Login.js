import React, { Component } from "react";
import { Container } from "react-bootstrap";
import { Col, Row } from "react-bootstrap";
import LoginForm from "./LoginForm/LoginForm";
import LoginText from "./LoginText/LoginText";
import Sidebar from "./SideBar/Sidebar";
import './Login.css'
const Login = () => {
  return (
    <div>
        <LoginText/>
        <Row>
        <Col className="logi ">
          <LoginForm/>
        </Col>
        <Col>
          <Sidebar/>
        </Col>
        </Row>
        </div>
  );
};
//col-4
export default Login;
