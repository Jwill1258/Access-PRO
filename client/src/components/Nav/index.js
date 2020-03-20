import React from "react";
import {Link} from "react-router-dom";

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <Link to='/'> Huddle </Link>
      <Link to='/active'> Active </Link>
      <Link to='/report'> Report </Link>
      <Link to='/profile'> Profile </Link>

    </nav>
  );
}

export default Nav;
