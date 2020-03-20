import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
//import Detail from "./pages/Detail";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";
import Huddle from "./pages/Huddle";
import Active from "./pages/Active";
import Report from "./pages/Report";
import Profile from "./pages/Profile";
//import { Avatar } from 'antd';
//import 'antd/dist/antd.css';

function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route exact path="/" component={Huddle} />
          <Route exact path="/active" component={Active} />
          <Route exact path="/report" component={Report} />
          <Route exact path="/profile" component={Profile} />
          <Route component={NoMatch} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
