/* eslint-disable import/no-anonymous-default-export */
import sizes from "./sizes";
export default {
  HopperApp: {
    width: "70%",
    margin: "6rem auto",
    [sizes.down("mdd")]: {
      width: "97%",
    },
  },
  HopperAppBody: {
    textAlign: "justify",
    width: "50%",
    margin: "auto",
    [sizes.down("mdd")]: {
      textAlign: "center",
      width: "100%",
    },
    "& h1": {
      color: "#333333",
      margin: "-1px 0",
      [sizes.down("mdd")]: {
        margin: "0",
        fontSize: "1.8rem",
      },
    },
    "& p": {
      color: "#878787",
      fontSize: "1.1rem",
      margin: "5px 0",
      [sizes.down("mdd")]: {
        padding: "0.4rem 0 1.5rem",
        fontSize: "0.9rem",
      },
    },
  },
  mobileView: {
    width: "100%",
    [sizes.up("lg")]: {
      display: "none !important",
      visibility: "hidden !important",
    },
  },
  desktopView: {
    width: "100%",
    [sizes.down("mdd")]: {
      display: "none !important",
      visibility: "hidden !important",
    },
    "& label": {
      color: "#878787",
      fontSize: "13px",
    },
  },
};
