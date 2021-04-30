/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react';
import {Link} from "react-router-dom";
import styles from '../styles/SubFooterStyles';
import {withStyles} from '@material-ui/styles'

export class SubFooter extends Component {
	render() {
		const {classes} = this.props
		return (
			<div className={classes.SubFooter}>
					<div className={classes.SubFooterImg}>
						<i class="fas fa-globe" />
						<label>ENGLISH</label>
						<i class="fas fa-sort-down" />
					</div>
					<div className={classes.SubFooterList}>
						<p>
							<Link to="/">The app</Link>
						</p>
						<p>
							<Link to="/">About</Link>
						</p>
						<p>
							<Link to="/">Mission </Link>
						</p>
						<p>
							<Link to="/">Flights</Link>
						</p>
						<p>
							<Link to="/">Home</Link>
						</p>
					</div>
					<div className={classes.SubFooterList}>
						<p>
							<Link to="/">About</Link>
						</p>
						<p>
							<Link to="/">The data</Link>
						</p>
						<p>
							<Link to="/">Investors</Link>
						</p>
						<p>
							<Link to="/">Locations</Link>
						</p>
						<p>
							<Link to="/">Departments</Link>
						</p>
					</div>
					<div className={classes.SubFooterList}>
						<p>
							<Link to="/">Mission</Link>
						</p>
						<p>
							<Link to="/">Lifestyle</Link>
						</p>
						<p>
							<Link to="/">Values</Link>
						</p>
						<p>
							<Link to="/">Humans</Link>
						</p>
						<p>
							<Link to="/">Careers</Link>
						</p>
					</div>
					<div className={classes.SubFooterList}>
						<p>
							<Link to="/">Flights</Link>
						</p>
						<p>
							<Link to="/">Hotels</Link>
						</p>
						<p>
							<Link to="/">Predictions</Link>
						</p>
						<p>
							<Link to="/">Accounts</Link>
						</p>
						<p>
							<Link to="/">Contact us</Link>
						</p>
					</div>
					<div className={classes.SubFooterList}>
						<p>
							<Link to="/">Home</Link>
						</p>
						<p>
							<Link to="/">Press kit</Link>
						</p>
						<p>
							<Link to="/">Research</Link>
						</p>
						<p>
							<Link to="/">Contact</Link>
						</p>
						<p>
							<Link to="/">Search</Link>
						</p>
					</div>
			</div>
		);
	}
}

export default withStyles(styles) (SubFooter);
