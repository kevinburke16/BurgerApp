import React from "react";

import classes from "./Order.css";

const order = props => {
  const ingredients = [];

  for (let ingredientName in props.ingredients) {
    ingredients.push({
      name: props.ingredientName,
      amount: props.ingredients[ingredientName]
    });
  }

  const ingredientOutput = ingredients.map(ig => {
    return (
      <span style={{ textTransform: "capitalize" }} key={ig.name}>
        {" "}
        {ig.name} {ig.amount}
      </span>
    );
  });

  return (
    <div className={classes.Order}>
      <p>Ingredients: {ingredientOutput}</p>
      <p>
        Price: <strong> CDN {Number.parseFloat(props.price).toFixed(2)}</strong>
      </p>
    </div>
  );
};

export default order;
//Use can use a + where you render in this example on the Orders.js instead of Number.parseFloat
