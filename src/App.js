import React, { Component } from "react";

import { connect } from "react-redux";

import LoginPage from "./pages/login/loginPage";
import Dashboard from "./pages/dashboard/Dashboard.page";
import ResultCard from "./components/ResultQuestion/ResultQuestion.component";
import NewQuestion from "./components/NewQuestion/NewQuestion.component";
import Page404 from "./pages/404/404Page";

import LoadingBar from "react-redux-loading";

import { handleInitData } from "./actions/shared";

import "./App.scss";
import Nav from "./components/Nav/Nav.component";
import { 
  BrowserRouter as Router, 
  Route,
  Link,
  Switch,
  Redirect
 } from "react-router-dom";

class App extends Component {
  componentDidMount() {
    if (this.props.loading === true) {
      this.props.dispatch(handleInitData());
    }
  }

  render() {
    return (
      <Router>
        <div className="App">
          <Nav />
          <LoadingBar
            style={{
              backgroundColor: "#cb218e",
              height: "6px",
              position: "absolute",
              marginTop: "-1px",
            }}
          />
          {this.props.loading === true ? (
            <LoginPage />
          ) : (
            <div>
              <Switch>
                <Route exact path="/" component={Dashboard} />
                <Route path='/questions/:id'  component={ResultCard} />
                <Route path='/add' component={NewQuestion} />
                <Route component={Page404} />
              </Switch>
            </div>
          )}
        </div>
      </Router>
    );
  }
}

const mapStateToProps = ({ authedUser }) => {
  return {
    loading: authedUser === null,
  };
};

export default connect(mapStateToProps)(App);
