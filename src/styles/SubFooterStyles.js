/* eslint-disable import/no-anonymous-default-export */
export default {
	SubFooter : {
		display: "grid",
		gridTemplateColumns: "repeat(7, 10%)",
		gridColumnGap: "0%",
		width: "90%",
		margin: "auto",
		justifyContent: "space-around"
	},
	SubFooterImg : {
		color: "#505050",
		fontWeight: "bold",
		gridColumnStart: "1",
		gridColumnEnd: "3",
		paddingTop: "1rem",
		"& label" : {
			padding: "0 7px"
		}
	},
	SubFooterList : { 
		"& a" : {
			textDecoration: "none",
			color: "#878787",
			fontSize: "12px"
		}
	}
};