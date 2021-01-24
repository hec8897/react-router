import React, { Component } from 'react';
import { Link } from "react-router-dom";

class Nav extends Component {
    render() {
        return (
            <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about/1">About</Link>
              </li> 
              <li>
                <Link to="/users/1">Users</Link>
              </li>
            </ul>
          </nav>
        )
    }
}

export default Nav;
