import React, { Component } from "react";
import styles from "../styles/FeaturesStyles";
import { withStyles } from "@material-ui/styles";
import flight from "../images/Website-Features-V01.png";
import hotels from "../images/Website-Features-V02.png";
import save from "../images/Website-Features-V03.png";
import trips from "../images/Website-Features-V04.png";
import notified from "../images/Website-Features-V05.png";
import pay from "../images/Website-Features-V06.png";

export class Features extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.Features}>
        <div className={classes.FeaturesBody}>
          <label className={classes.desktopView}>FEATURES</label>
          <h1>Plan less, travel more</h1>
          <p>
            Hopper has helped 30M travelers track prices and book trips to over
            200 destinations. <span>The Hopper app </span> will monitor prices
            for you and you can book in just a few taps.
          </p>
        </div>
        <div className={classes.FeaturesCard}>
          <div className={classes.FeaturesCardBody}>
            <img src={flight} alt="" />
            <h4>Find flights</h4>
          </div>
          <div className={classes.FeaturesCardBody}>
            <img src={hotels} alt="" />
            <h4>Find hotels</h4>
          </div>
          <div className={classes.FeaturesCardBody}>
            <img src={save} alt="" />
            <h4>Save up to 40%</h4>
          </div>
          <div className={classes.FeaturesCardBody}>
            <img src={trips} alt="" />
            <h4>Watch trips</h4>
          </div>
          <div className={classes.FeaturesCardBody}>
            <img src={notified} alt="" />
            <h4>Get notified</h4>
          </div>
          <div className={classes.FeaturesCardBody}>
            <img src={pay} alt="" />
            <h4>Pay safely</h4>
          </div>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(Features);
