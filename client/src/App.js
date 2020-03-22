import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
//import Detail from "./pages/Detail";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";
import Huddle from "./pages/Huddle";
import Active from "./pages/Active";
import Report from "./pages/Report";
import Profile from "./pages/Profile";
// import fire from "./config/Fire"; firbase auth
//import Home from "./pages/Home"; firbase auth
//import Login from "./pages/Login"; firebase auth
//import { Avatar } from 'antd';  profile pic widget
//import 'antd/dist/antd.css'; nprofile pic widget

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

  // Youtube API Call

  // getAPIdata() (
  //   let parsed = queryString.parse(window.location.search);
  //   let accessToken = parsed.access_token
  //   fetch('https://www.googleapis.com/youtube/v3/playlists?part=snippet', {
  //       method: 'POST',
  //       headers: {
  //           'Content-type': 'application/json',
  //           'Authorization': 'Bearer ' + accessToken,
  //       },
  //       body: JSON.stringify({
  //           'snippet':
  //           {
  //               'title':this.state.inputTitle
  //           }
  //       })
  //   }).then(response => response.json()).then(data => {
  //       console.log(data)
  //       window.alert('https://www.youtube.com/playlist?list=' + data.id)
  //   })
  
  // )
  

}

export default App;
