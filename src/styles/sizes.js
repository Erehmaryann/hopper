/* eslint-disable import/no-anonymous-default-export */
export default {
  up(size) {
    const sizes = {
      lg: "1000px",
      xs: "575.98px",
      smd: "575.99px",
      sm: "767.98px",
      md: "991.98px",
      mdd: "999px",
      xl: "1400px",
    };
    return `@media (min-width: ${sizes[size]})`;
  },
  down(size) {
    const sizes = {
      xs: "575.98px",
      sm: "767.98px",
      smd: "575.99px",
      md: "991.98px",
      mdd: "999px",
      lg: "1199.98px",
      xl: "1400px",
    };
    return `@media (max-width: ${sizes[size]})`;
  },
};
