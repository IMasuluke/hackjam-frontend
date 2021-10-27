import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { Form } from "react-bootstrap";

class EnrollingModulesForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      enrollingModules: "",
      moduleCode: "",
      check: "",
      price: "",
    };
  }

  handleEnrollingModules(event) {
    this.setState({
      enrollingModules: event.target.value,
    });
  }

  handleModuleCode(event) {
    this.setState({
      moduleCode: event.target.value,
    });
  }

  handleCheck(event) {
    this.setState({
      check: event.target.value,
    });
  }

  handlePrice(event) {
    this.setState({
      price: event.target.value,
    });
  }

  render() {
    const { enrollingModules, moduleCode, check, price } = this.state;

    return (
      <form>
        <label>
          <h1>Enrolling Modules</h1>
        </label>
        <label>
          <h1>Module Code</h1>
        </label>
        <label>
          <h1>Check</h1>
        </label>
        <label>
          <h1>Price</h1>
        </label>
      </form>
    );
  }
}

export default EnrollingModulesForm;
