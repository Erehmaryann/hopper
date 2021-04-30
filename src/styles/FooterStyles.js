import sizes from "./sizes";
/* eslint-disable import/no-anonymous-default-export */
export default {
  FooterBody: {
    display: "grid",
    gridTemplateColumns: "repeat(7, 10%)",
    width: "90%",
    margin: "auto",
    color: "#878787",
    justifyContent: "space-around",
    borderBottom: "2px solid #F6F6F6",
    marginBottom: "14px",
    fontSize: "14px",
    "& i": {
      paddingLeft: "10px",
    },
  },
  active: {
    borderBottom: "3px solid #505050",
    width: "55px",
    textDecoration: "none",
    color: "#878787",
    paddingBottom: "14px",
  },
  FooterImg: {
    gridColumnStart: "1",
    gridColumnEnd: "3",
  },
  FooterIcon: {
    display: "grid",
    gridTemplateColumns: "repeat(3, 30%)",
    width: "90%",
    margin: "auto",
    justifyContent: "space-around",
    padding: "0rem 0 5rem",
    "& div:first-child": {
      color: "#505050",
      gridColumnStart: 1,
      gridColumnEnd: 3,
    },
    "& i": {
      marginRight: "27px",
    },
    "& div:last-child": {
      backgroundColor: "#FA6866",
      width: "27px",
      height: "15px",
      fontSize: "10px",
      borderRadius: "8px",
      fontWeight: "bold",
      color: "#F6F6F6",
      textAlign: "center",
    },
  },
  desktopView: {
    [sizes.down("mdd")]: {
      display: "none !important",
      visibility: "hidden !important",
    },
  },
  mobileView: {
    [sizes.up("lg")]: {
      display: "none !important",
      visibility: "hidden !important",
    },
  },
};
