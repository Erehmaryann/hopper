/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from "react";
import Button from "./Button";
import styles from "../styles/DestinationStyles";
import { withStyles } from "@material-ui/styles";
import countries from "../images/countries.png";
import C_3 from "../images/C_3.png";

export class Destination extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.Destination}>
        <div className={classes.DestinationBody}>
          <label className={classes.desktopView}>POPULAR DESTINATIONS</label>
          <h1 className={classes.desktopView}>
            Ready for an adventure? Get the Hopper app to start booking!
          </h1>
          <h1 className={classes.mobileView}>
            Ready for an adventure? Let us find you the lowest possible price
          </h1>
        </div>
        <img src={countries} alt="" className={classes.desktopView} />
        <img src={C_3} alt="" className={classes.mobileView} />
        <div className={classes.DestinationDownload}>
          <Button />
          <p>Download the Hopper App to find the best prices</p>
          <span>
            <i className="fas fa-robot" />
            <i className="fab fa-apple" />
          </span>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(Destination);
