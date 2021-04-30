import sizes from "./sizes";
/* eslint-disable import/no-anonymous-default-export */
export default {
  NavbarD: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    paddingTop: "1rem",
  },
  NavbarLogo: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginLeft: "4rem",
    "& img": {
      width: "123px",
    },
  },
  mobileView: {
    [sizes.up("xs")]: {
      display: "none !important",
      visibility: "hidden !important",
    },
  },
  desktopView: {
    "& ul": {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      marginRight: "6rem",
    },
    "& li": {
      marginRight: "20px",
      listStyleType: "none",
      "&:nth-child()": {
        border: "1px solid white",
      },
    },
    "& b": {
      color: "white",
    },
    "& a": {
      textDecoration: "none",
      fontSize: "12px",
      color: "white",
    },
    "& i": {
      padding: "0 7px",
    },

    [sizes.down("lg")]: {
      display: "none !important",
      visibility: "hidden !important",
    },
  },
  Button: {
    background: "transparent !important",
  },
};
// @media screen and (min-width: 813px) {
// 	.flex-view {
// 	  display: none !important;
// 	  visibility: hidden !important;
// 	}
//   }

//   @media screen and (max-width: 812px) {
// 	.top-view {
// 	  display: none !important;
// 	  visibility: hidden !important;
// 	}
//   }
