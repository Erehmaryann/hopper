import sizes from "./sizes";
/* eslint-disable import/no-anonymous-default-export */
export default {
  mobileView: {
    width: "94%",
    margin: "auto",
    height: "auto",
    [sizes.up("lg")]: {
      display: "none !important",
      visibility: "hidden !important",
    },
  },
  MobileFooterImg: {
    display: "block",
    margin: "2rem auto",
    width: "38px",
  },
  MobileFooterCard: {
    borderTop: "none",
    borderLeft: "none",
    borderRight: "none",
  },
  Card: {
    borderLeft: "none",
    borderRight: "none",
    "&:last-child": {
      borderBottom: "none",
    },
  },
  CardHeader: {
    background: "#fff",
    color: "#505050",
  },
  CardColumns: {
    display: "flex",
    justifyContent: "space-between",
  },
  CardTitle: {
    fontSize: "14px",
    "& span": {
      backgroundColor: "#FA6866",
      padding: "0.1rem 0.5rem",
      fontSize: "10px",
      borderRadius: "8px",
      fontWeight: "bold",
      color: "#F6F6F6",
      marginLeft: "0.8rem",
      textAlign: "center",
    },
  },
  MobileFooterSelect: {
    "& Form": {
      margin: "2rem 0",
    },
  },
  MobileFooterIcon: {
    display: "flex",
    justifyContent: "space-between",
    marginBottom: "2rem",
  },
  LastDiv: {
    textAlign: "center",
    "& p": {
      textDecoration: "underline",
      color: "#505050",
      fontSize: "16px",
      paddingBottom: "0.9rem",
    },
    "& span": {
      color: "#AAAAAA",
      fontSize: "12px",
      padding: "1.3rem 0",
    },
  },
};
