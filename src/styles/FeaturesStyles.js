import sizes from "./sizes";
/* eslint-disable import/no-anonymous-default-export */
export default {
  Features: {
    width: "80%",
    margin: "6rem auto 9rem",
    [sizes.down("mdd")]: {
      width: "97%",
    },
  },
  FeaturesBody: {
    textAlign: "justify",
    width: "45%",
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
        fontSize: "0.9rem",
        padding: "0.6rem 0 1rem",
      },
    },
    "& span ": {
      color: "#20b4e8",
      borderBottom: "2px solid #20b4e8",
    },
  },
  FeaturesCard: {
    display: "grid",
    gridTemplateColumns: "repeat(6, 15%)",
    gridColumnGap: "2%",
    justifyContent: "space-around",
    [sizes.down("mdd")]: {
      gridTemplateColumns: "repeat(3, 30%)",
      width: "100%",
      justifyContent: "space-around",
      gridColumnGap: "0%",
    },
    [sizes.down("xs")]: {
      gridTemplateColumns: "repeat(3, 20%)",
      width: "98%",
      justifyContent: "around",
      gridColumnGap: "0%",
    },
  },
  FeaturesCardBody: {
    background: "#ffffff",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    boxShadow: "0px 5px 25px rgba(0, 0, 0, 0.05)",
    borderRadius: "8px",
    marginTop: "3.3rem",
    padding: "2rem 4rem 0.5rem",
    [sizes.down("mdd")]: {
      padding: "1.9rem 3.5rem 0.35rem",
    },
    [sizes.down("xs")]: {
      padding: "1.5rem 2.5rem 0.25rem",
    },
    "& img": {
      width: "80px",
      [sizes.down("mdd")]: {
        width: "60px",
      },
      [sizes.down("xs")]: {
        width: "40px",
      },
    },
    "& h4": {
      textAlign: "center",
      padding: "1rem 0",
      width: "80px",
      fontSize: "0.7rem",
      color: "#000000",
      [sizes.down("mdd")]: {
        width: "70px",
        fontSize: "0.9rem",
      },
      [sizes.down("xs")]: {
        width: "40px",
      },
    },
  },
  desktopView: {
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
