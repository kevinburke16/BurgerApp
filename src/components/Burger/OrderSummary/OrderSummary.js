import React, { Component } from "react";

import Auxilary from "../../../hoc/Auxilary/Auxilary";
import Button from "../../UI/Button/Button";

class OrderSummary extends Component {
  // This could be a functional component did this for testing purposes
  // componentWillUpdate() {
  //   // console.log("{OrderSummary} Will update");
  // }
  render() {
    const ingredientSummary = Object.keys(this.props.ingredients).map(igkey => {
      return (
        <li key={igkey}>
          <span style={{ textTransform: "capitalize" }}>{igkey}</span>:{" "}
          {this.props.ingredients[igkey]}
        </li>
      );
    });
    return (
      <Auxilary>
        <h2>Your Order </h2>
        <p>A delicious burger with the following ingredients:</p>
        <ul>{ingredientSummary}</ul>
        <p>
          <strong> Total Price: ${this.props.price.toFixed(2)}</strong>:
        </p>
        <p>Continue to Checkout?</p>
        <Button btnType="Danger" clicked={this.props.purchaseCancel}>
          CANCEL
        </Button>
        <Button btnType="Success" clicked={this.props.purchaseContinue}>
          CONTINUE
        </Button>
      </Auxilary>
    );
  }
}

export default OrderSummary;
