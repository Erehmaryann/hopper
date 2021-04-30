import React from "react";
import Accordion from "react-bootstrap/Accordion";
import { useAccordionToggle } from "react-bootstrap/AccordionToggle";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import CardColumns from "react-bootstrap/CardColumns";
import styles from "../styles/MobileFooterStyles";
import { withStyles } from "@material-ui/styles";
import vector_1 from "../images/Vector_1.png";

function CustomToggle({ children, eventKey }) {
  const decoratedOnClick = useAccordionToggle(eventKey, () =>
    console.log("totally custom!")
  );

  return (
    <a
      href
      style={{ backgroundColor: "white", fontSize: "10px" }}
      onClick={decoratedOnClick}
    >
      {children}
    </a>
  );
}

export function MobileFooter(props) {
  const { classes } = props;
  return (
    <div className={classes.mobileView}>
      <div>
        <img
          className={classes.MobileFooterImg}
          src={vector_1}
          alt="Hopper-Logomark_Coral"
        />
      </div>
      <Accordion defaultActiveKey="0" className={classes.Accordion}>
        <Card className={classes.MobileFooterCard}>
          <Card.Header className={classes.CardHeader}>
            <CardColumns className={classes.CardColumns}>
              <Card.Title className={classes.CardTitle}>
                Company <span>21</span>
              </Card.Title>
              <CustomToggle eventKey="1">
                <i className="fas fa-plus" />
              </CustomToggle>
            </CardColumns>
          </Card.Header>
          <Accordion.Collapse eventKey="1">
            <Card.Body>
              <Card.Text>About</Card.Text>
              <Card.Text>The data</Card.Text>
              <Card.Text>Investors</Card.Text>
              <Card.Text>Locations</Card.Text>
              <Card.Text>Departments</Card.Text>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card className={classes.Card}>
          <Card.Header className={classes.CardHeader}>
            <CardColumns className={classes.CardColumns}>
              <Card.Title className={classes.CardTitle}>People</Card.Title>
              <CustomToggle eventKey="2">
                <i className="fas fa-plus" />
              </CustomToggle>
            </CardColumns>
          </Card.Header>
          <Accordion.Collapse eventKey="2">
            <Card.Body>
              <Card.Text>Mission</Card.Text>
              <Card.Text>Lifestyle</Card.Text>
              <Card.Text>Values</Card.Text>
              <Card.Text>Humans</Card.Text>
              <Card.Text>Careers</Card.Text>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card className={classes.Card}>
          <Card.Header className={classes.CardHeader}>
            <CardColumns className={classes.CardColumns}>
              <Card.Title className={classes.CardTitle}>Support</Card.Title>
              <CustomToggle eventKey="3">
                <i className="fas fa-plus" />
              </CustomToggle>
            </CardColumns>
          </Card.Header>
          <Accordion.Collapse eventKey="3">
            <Card.Body>
              <Card.Text>Flights</Card.Text>
              <Card.Text>Hotels</Card.Text>
              <Card.Text>Predictions</Card.Text>
              <Card.Text>Accounts</Card.Text>
              <Card.Text>Contact us</Card.Text>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card className={classes.Card}>
          <Card.Header className={classes.CardHeader}>
            <CardColumns className={classes.CardColumns}>
              <Card.Title className={classes.CardTitle}>Insights</Card.Title>
              <CustomToggle eventKey="4">
                <i className="fas fa-plus" />
              </CustomToggle>
            </CardColumns>
          </Card.Header>
          <Accordion.Collapse eventKey="4">
            <Card.Body>
              <Card.Text>Home</Card.Text>
              <Card.Text>Press kit</Card.Text>
              <Card.Text>Research</Card.Text>
              <Card.Text>Contact</Card.Text>
              <Card.Text>Search</Card.Text>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
      </Accordion>
      <div className={classes.MobileFooterSelect}>
        <Form column="sm">
          <Form.Group controlId="exampleForm.SelectCustom">
            <Form.Control as="select" custom size="xs">
              <option>Language</option>
              <option>English</option>
              <option>French</option>
              <option>Others</option>
            </Form.Control>
          </Form.Group>
        </Form>
      </div>
      <div className={classes.MobileFooterIcon}>
        <i class="fab fa-facebook-f" />
        <i class="fab fa-twitter" />
        <i class="fab fa-instagram" />
        <i class="fab fa-linkedin-in" />
        <i class="fab fa-youtube" />
        <i class="fab fa-medium-m" />
      </div>
      <div className={classes.LastDiv}>
        <p>Terms of Service</p>
        <hr></hr>
        <span>© 2018 Hopper Inc.</span>
      </div>
    </div>
  );
}

export default withStyles(styles)(MobileFooter);
