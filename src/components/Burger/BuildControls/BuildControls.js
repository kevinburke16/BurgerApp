import React from "react";
import classes from "./BuildControls.css";
import BuildControl from "./BuildContol/BuildControl";

const controls = [
  { label: "lettuce", type: "lettuce" },
  { label: "Bacon", type: "bacon" },
  { label: "Cheese", type: "cheese" },
  { label: "Meat", type: "meat" }
];
const buildContols = props => (
  <div className={classes.BuildControls}>
    <p>
      Current Price: <strong>{props.price.toFixed(2)}</strong>
    </p>
    {controls.map(ctrl => (
      <BuildControl
        key={ctrl.label}
        label={ctrl.label}
        removed={() => props.ingredientRemove(ctrl.type)}
        added={() => props.ingredientAdded(ctrl.type)}
        disabled={props.disabled[ctrl.type]}
      />
    ))}
    <button
      className={classes.OrderButton}
      disabled={!props.purchaseable}
      onClick={props.ordered}
    >
      {" "}
      ORDER NOW
    </button>
  </div>
);

export default buildContols;
