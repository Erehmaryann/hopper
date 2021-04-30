import React, { Component } from "react";
import C_1 from "../images/C_1.png";
import C_2 from "../images/C_2.png";
import { withStyles } from "@material-ui/styles";
import styles from "../styles/HopperAppStyles";

export class HopperApp extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.HopperApp}>
        <div className={classes.HopperAppBody}>
          <label className={classes.desktopView}>THE HOPPER APP</label>
          <h1>Know when to buy</h1>
          <p>
            Hopper predicts prices with 95% accuracy up to 1 year in advance. No
            ads, no spam, no stress — just accurate predictions and travel
            deals.
          </p>
        </div>
        <img className={classes.desktopView} src={C_1} alt="hopper-app" />
        <img className={classes.mobileView} src={C_2} alt="hopper-app" />
      </div>
    );
  }
}

export default withStyles(styles)(HopperApp);
