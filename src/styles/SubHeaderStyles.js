import sizes from "./sizes";
/* eslint-disable import/no-anonymous-default-export */
export default {
  SubHeader: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    width: "350px",
    lineHeight: "1.6",
    marginLeft: "6rem",
    marginTop: "6rem",
    justifyContent: "center",
    flexWrap: "wrap",
    [sizes.down("xs")]: {
      alignItems: "center",
      textAlign: "center",
      marginTop: "8rem",
      marginLeft: "auto",
      marginRight: "auto",
      width: "auto",
    },
    "& h1": {
      margin: "-1px 0",
      color: "#333333",
      [sizes.down("xs")]: {
        color: "#fff",
        margin: "0",
        fontSize: "1.8rem",
      },
    },
    "& p": {
      [sizes.down("xs")]: {
        color: "#fff",
        padding: "1.2rem 0",
        fontSize: "0.9rem",
      },
    },
    "& Button": {
      marginTop: "0.8rem",
      backgroundColor: "#01aae4",
      width: "330px",
      borderRadius: "8px",
      border: "1px solid #ffffff",
      padding: "10px",
      outline: "none",
      [sizes.down("xs")]: {
        backgroundColor: "white",
        width: "255px",
      },
      "& a": {
        color: "white",
        [sizes.down("xs")]: {
          color: "#01aae4",
        },
      },
    },
  },
  desktopView: {
    [sizes.down("smd")]: {
      display: "none !important",
      visibility: "hidden !important",
    },
  },
  mobileView: {
    [sizes.up("xs")]: {
      display: "none !important",
      visibility: "hidden !important",
    },
  },
};
