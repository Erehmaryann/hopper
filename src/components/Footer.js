/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from "react";
import styles from "../styles/FooterStyles";
import { withStyles } from "@material-ui/styles";
import { NavLink } from "react-router-dom";
import vector from "../images/Vector.png";
import MobileFooter from "./MobileFooter";
import SubFooter from "./SubFooter";

export class Footer extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.Footer}>
        <div className={classes.desktopView}>
          <div className={classes.FooterBody}>
            <div className={classes.FooterImg}>
              <img src={vector} alt="red-hopper-logo" />
            </div>
            <NavLink activeClassName={classes.active} to="/">
              Hopper
            </NavLink>
            <div>Company</div>
            <div>People</div>
            <div>
              SUPPORT
              <i className="fas fa-level-up-alt" />
            </div>
            <div>
              Media
              <i className="fas fa-level-up-alt" />
            </div>
          </div>
          <SubFooter />
          <div className={classes.FooterIcon}>
            <div>
              <i class="fab fa-facebook-f" />
              <i class="fab fa-twitter" />
              <i class="fab fa-instagram" />
              <i class="fab fa-linkedin-in" />
              <i class="fab fa-youtube" />
              <i class="fab fa-medium-m" />
            </div>
            <div>21</div>
          </div>
        </div>

        <MobileFooter />
      </div>
    );
  }
}

export default withStyles(styles)(Footer);
