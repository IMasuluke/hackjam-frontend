import React from "react";
import { BrowserRouter, Router, Switch, Route, Link } from "react-router-dom";
import WelcomeBack from "./UI/ReturningStudent/ReturningStudentWelcome";
import LogInForm from "./UI/Login/Login";
import StudentAdvisorProfile from "./UI/StudentAdvisorProfile/StudentAdvisorProfile";
import ReturningStudentBar from "./UI/ReturningStudentBar/ReturningStudentBar";
import ReturningStudentWelcome1 from "./UI/ReturningStudent/ReturningStudentWelcome1";
import ReturningStudentWelcome2 from "./UI/ReturningStudent/ReturningStudentWelcome2";
import ReturningStudentWelcome3 from "./UI/ReturningStudent/ReturningStudentWelcome3";
import ReturningStudentWelcome4 from "./UI/ReturningStudent/ReturningStudentWelcome4";

export default function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={LogInForm} />
        <Route exact path="/ReturningStudentWelcome" component={WelcomeBack} />
        <Route
          exact
          path="/ReturningStudentWelcome1"
          component={ReturningStudentWelcome1}
        />
        <Route
          exact
          path="/ReturningStudentWelcome2"
          component={ReturningStudentWelcome2}
        />
        <Route
          exact
          path="/ReturningStudentWelcome3"
          component={ReturningStudentWelcome3}
        />
        <Route
          exact
          path="/ReturningStudentWelcome4"
          component={ReturningStudentWelcome4}
        />
        <Route
          exact
          path="/ReturningStudentBar"
          component={ReturningStudentBar}
        />
        <Route
          exact
          path="/StudentAdvisorProfile"
          component={StudentAdvisorProfile}
        />
      </Switch>
    </BrowserRouter>
  );
}
