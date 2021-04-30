import React, { Component } from "react";
import styles from "../styles/HeaderStyles";
import { withStyles } from "@material-ui/styles";
import SubHeader from "./SubHeader";
import NavbarD from "./NavbarD";

export class Header extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.Header}>
        <NavbarD />
        <SubHeader />
      </div>
    );
  }
}
export default withStyles(styles)(Header);
