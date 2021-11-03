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
          <h2 className="welcomeBackTitle">Welcome Back</h2>
          <br />
          <p className="welcomeBackParagraph">
            Let’s get you up and running again! Your education plans and goals
            are just a few steps away. We just need some updated information and
            a few questions answered.
            <br />
            <br />
            We are here to help.{" "}
            <a
              className="contactUs"
              href="https://mylmsft.institution.africa/login/index.php"
              target="_blank"
              style={{ color: "#318EF8" }}
            >
              Contact us
            </a>{" "}
            if you have any questions.
          </p>
          <br />
          <a
            className="buttonBegin"
            variant="danger"
            href="/ReturningStudentWelcome1"
            rel="noopener noreferre"
          >
            <button className="buttonBegin">Begin</button>
          </a>
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default WelcomeBack;
