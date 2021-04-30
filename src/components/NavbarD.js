/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from "react";
import FeatherIcon from "feather-icons-react";
import { Navbar, Button, Nav } from "react-bootstrap";
import vector from "../images/Vector.svg";

export class NavbarD extends Component {
  render() {
    return (
      <div>
        <Navbar bg="none" expand="lg" className="pt-4">
          <Navbar.Brand href="#">
            <img src={vector} alt="hopper_logo" className="ml-5" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav">
            <FeatherIcon icon="menu" color="white" />
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto mr-5">
              <Nav.Link href="#" className="text-white small">
                COMPANY
              </Nav.Link>
              <Nav.Link href="#" className="text-white small">
                PEOPLE
              </Nav.Link>
              <Nav.Link href="#" className="text-white small">
                |
              </Nav.Link>
              <Nav.Link href="#" className="text-white small">
                SUPPORT
                <i class="fas fa-level-up-alt px-2" />
              </Nav.Link>
              <Button variant="outline-light">Send app to your phone</Button>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}

export default NavbarD;
