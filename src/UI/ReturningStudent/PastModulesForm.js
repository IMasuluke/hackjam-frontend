import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

class PastModulesForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      PastModules: "",
      ModuleCode: "",
      Grade: "",
    };
  }

  handlePastModulesChange(event) {
    this.setState({
      PastModules: event.target.value,
    });
  }

  handleModuleCode(event) {
    this.setState({
      ModuleCode: event.target.value,
    });
  }

  handleGradeChange(event) {
    this.setState({
      Grade: event.target.value,
    });
  }

  render() {
    const { PastModules, ModuleCode, Grade } = this.state;

    return (
      <form>
        <label>
          <h1>Past Modules</h1>
        </label>
        <label>
          <h1>Module Code</h1>
        </label>
        <label>
          <h1>Grade</h1>
        </label>
      </form>
    );
  }
}

export default PastModulesForm;
