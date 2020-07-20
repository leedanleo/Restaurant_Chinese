import React from "react";
import './style/menu.scss';


import { Link } from "react-router-dom";


export default class Menu extends React.Component {
    render() {
      return (
        <div className="menu">
                    <Link to="/appetizer"><div id="selection">Appetizer</div></Link>
                    <Link to="/soup"><div id="selection">Soup</div></Link>
                    <Link to="/seafood"><div id="selection">Sea Food</div></Link>
                    <Link to="/beef"><div id="selection">Beef</div></Link>
                    <Link to="/chicken"><div id="selection">Chicken</div></Link>
                    <Link to="/pork"><div id="selection">Pork</div></Link>
                    <Link to="/vegetables"><div id="selection">Vegetables</div></Link>
                    <Link to="/sizzling"><div id="selection">House Sizzling</div></Link>
                    <Link to="/rice"><div id="selection">Rice</div></Link>
                    <Link to="/noodles"><div id="selection">Noodles</div></Link>
                    <Link to="/lomein"><div id="selection">Lo Mein</div></Link>
                    <Link to="/chowfun"><div id="selection">Chow Fun</div></Link>
                    <Link to="/eggfooyoung"><div id="selection">Egg Foo Young</div></Link>
                    <Link to="/sandwich"><div id="selection">American Menu Sandwiches</div></Link>
                    <Link to="/salads"><div id="selection">Salads</div></Link>
        </div>
      );
    }
  }