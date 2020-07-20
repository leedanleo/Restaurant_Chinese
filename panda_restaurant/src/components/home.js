import React from "react";
import './style/home.scss';

import menu from "./images/order.jpg";
import { Link } from "react-router-dom";


export default class Home extends React.Component {
    render() {
      return (
        <div className="home">
            <br></br>
                    <Link to="/menu"><div id="menu"><img src={menu} height="200" width ="250" alt="menu"/></div></Link>
        </div>
      );
    }
  }