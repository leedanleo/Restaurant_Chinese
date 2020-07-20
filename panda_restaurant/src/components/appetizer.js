import React from "react";
import './style/fooditem.scss';
export default class Appetizer extends React.Component {
  render() {
    return (<div className="Appetizer">
          <div id="title">Appetizer</div>
          <div className="item">
          <div id="food-name">SPRING ROLL(3)</div>
          <div id="food-price">4.25</div>
          </div>
          <br></br>
          <div className="item">
          <div id="food-name">BBQ PORK</div>
          <div id="food-price">7.95</div>
          </div>
          <br></br>
          <div className="item">
          <div id="food-name">EGG ROLLS(2)</div>
          <div id="food-price">4.25</div>
          </div>
          <br></br>
          <div className="item">
          <div id="food-name">FRIED WONTONS(2)</div>
          <div id="food-price">6.95</div>
          </div>
          <br></br>
          <div className="item">
          <div id="food-name">APPETIZER PLATE</div>
          <div id="food-price">10.95</div><br></br>
          <div id="food-description">Egg Roll(1), Fried Shrimp(6), BBQ Pork </div>
          </div>
          </div>
    );
  }
}