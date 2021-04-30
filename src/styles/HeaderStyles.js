/* eslint-disable import/no-anonymous-default-export */
import C1 from "../images/C1.jpg";
import bg2 from "../images/Landscape-Mobile-min.png";
import sizes from "./sizes";
export default {
  Header: {
    backgroundImage: `url(${C1})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundAttachment: "fixed",
    height: "500px",
    [sizes.down("xs")]: {
      backgroundImage: `url(${bg2})`,
      backgroundSize: "cover",
      height: "100vh",
    },
  },
};
