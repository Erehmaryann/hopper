import sizes from "./sizes";
/* eslint-disable import/no-anonymous-default-export */
export default {
  Destination: {
    marginBottom: "7rem",
    "& img": {
      width: "97%",
      display: "block",
      margin: "0 auto 3rem",
      [sizes.down("mdd")]: {
        width: "100%",
        margin: "0",
      },
    },
  },
  DestinationBody: {
    textAlign: "justify",
    width: "38%",
    margin: "6rem auto 4rem",
    [sizes.down("mdd")]: {
      width: "97%",
      textAlign: "center",
    },
    "& h1": {
      color: "#333333",
      margin: "-1px 0",
      fontSize: "32px",
      fontWeight: "bold",
      [sizes.down("mdd")]: {
        margin: "0",
        fontSize: "1.8rem",
      },
    },
  },
  desktopView: {
    // width: "100%",
    [sizes.down("mdd")]: {
      display: "none !important",
      visibility: "hidden !important",
    },
    "& label": {
      color: "#878787",
      fontSize: "13px",
    },
    "& h1": {
      color: "#333333",
      fontSize: "42px",
      margin: "-1px 0",
    },
  },
  mobileView: {
    [sizes.up("lg")]: {
      display: "none !important",
      visibility: "hidden !important",
    },
  },
  DestinationDownload: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    "& Button": {
      marginTop: "3.3rem",
      backgroundColor: "#01aae4 !important",
      width: "330px",
      [sizes.down("mdd")]: {
        width: "290px",
        marginTop: "1.8rem",
      },
    },
    "& i": {
      color: "#878787",
      marginTop: "0.8rem",
      [sizes.down("mdd")]: {
        marginTop: "0",
      },
      "&:first-child": {
        marginRight: "1.2rem",
      },
    },
    "& p": {
      color: "#878787",
      fontSize: "1.1rem",
      margin: "1.1rem 0",
      [sizes.down("mdd")]: {
        fontSize: "13px",
        textAlign: "center",
      },
    },
  },
};
