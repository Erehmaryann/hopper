import React, { Component } from "react";
import apple from "../images/apple-ios.png";
// import Button from "./Button";
import { Link } from "react-router-dom";
import { withStyles } from "@material-ui/styles";
import styles from "../styles/SubHeaderStyles";

export class SubHeader extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.SubHeader}>
        <img className={classes.desktopView} src={apple} alt="" />
        <h1>Relax — booking travel just got easy</h1>
        <p>
          Hopper shows you when to wait, and when to book, for both flights and
          hotels. Get notified the instant prices drop. Oh, and it’s free
        </p>
        {/* <Button className={classes.desktopView} /> */}
        <div className={classes.desktopView}>
          <button>
            <Link to="/">Send app to your phone</Link>
          </button>
        </div>

        <button className={classes.mobileView}>
          <Link to="/">Download for iPhone</Link>
        </button>
      </div>
    );
  }
}
export default withStyles(styles)(SubHeader);
