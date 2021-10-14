import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { Container, col, row, button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./ReturningStudent.css";

const WelcomeBack = () => {
  return (
    <div>
      <div>
        <Header />
      </div>
      <div className="welcomeBack">
        <div className="welcomeBackBox">
          <h2>Welcome Back</h2>
          <br />
          <p>
            Let’s get you up and running again! Your education plans and goals
            are just a few steps away. We just need some updated information and
            a few questions answered.
            <br />
            <br />
            We are here to help. Contact us if you have any questions.
          </p>
          <br />
          <button className="buttonBegin">
            <h2>Begin</h2>
          </button>
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default WelcomeBack;
