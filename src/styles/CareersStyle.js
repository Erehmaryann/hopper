import sizes from "./sizes";
/* eslint-disable import/no-anonymous-default-export */
import rect from "../images/Rectangle.jpg";
import cm from "../images/careers-mobile.png";
export default {
  CareersBg: {
    width: "97%",
    margin: "6rem auto",
  },
  Careers: {
    backgroundImage: `url(${rect})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center center",
    height: "950px",
    [sizes.down("lg")]: {
      backgroundImage: `url(${cm})`,
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      backgroundPosition: "center center",
      height: "550px",
    },
  },
  mobileView: {
    // textAlign: "justify",
    // width: "52%",
    textAlign: "center",
    width: "100%",
    margin: "auto",
    paddingTop: "7rem",
    "& h1": {
      color: "#333333",
      margin: "-1px 0",
      fontSize: "1.8rem",
    },
    "& p": {
      color: "#878787",
      fontSize: "0.9rem",
      padding: "2rem 0",
    },
    "& a": {
      color: "#20b4e8",
      fontWeight: "bold",
      //   borderBottom: "1px solid #20b4e8",
      textDecoration: "none",
    },
    [sizes.up("xs")]: {
      display: "none !important",
      visibility: "hidden !important",
    },
  },
  desktopView: {
    textAlign: "justify",
    width: "36%",
    margin: "auto",
    paddingTop: "7rem",
    "& h1": {
      color: "#333333",
      margin: "-1px 0",
    },
    "& p": {
      color: "#878787",
      fontSize: "1.1rem",
      margin: "5px 0",
    },
    "& a": {
      color: "#20b4e8",
      borderBottom: "1px solid #20b4e8",
      textDecoration: "none",
    },
    [sizes.down("smd")]: {
      display: "none !important",
      visibility: "hidden !important",
    },
  },
};
