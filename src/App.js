import React from "react";
import { BrowserRouter, Router, Switch, Route, Link } from "react-router-dom";
import WelcomeBack from "./UI/Login/ReturningStudentWelcome";
import LogInForm from "./UI/Login/Login";
import StudentAdvisorProfile from "./UI/Login/StudentAdvisorProfile";
import ReturningStudentBar from "./UI/Login/ReturningStudentBar";
import ReturningStudentWelcome1 from "./UI/Login/ReturningStudentWelcome1";
import ReturningStudentWelcome2 from "./UI/Login/ReturningStudentWelcome2";
import ReturningStudentWelcome3 from "./UI/Login/ReturningStudentWelcome3";
import ReturningStudentWelcome4 from "./UI/Login/ReturningStudentWelcome4";

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
