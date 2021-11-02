import React, { Component } from "react";
import "./ReturningStudent.css";

class EnrollingCheckBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isChecked: false,
    };
  }

  toggleChange = () => {
    this.setState({
      isChecked: !this.state.isChecked,
    });
  };

  render() {
    return (
      <input
        className="enrollingModulesCheckBox"
        type="checkbox"
        defaultChecked={this.state.isChecked}
        onChange={this.toggleChange}
      ></input>
    );
  }
}

export default EnrollingCheckBox;
