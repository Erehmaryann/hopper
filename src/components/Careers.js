/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import {withStyles} from '@material-ui/styles'
import styles from '../styles/CareersStyle';

export class Careers extends Component {
	render() {
		const {classes} = this.props
		return (
			<div className={classes.Careers}>
				<div className={classes.CareersBg}>
					<div className={classes.desktopView}>
						<h1>Careers at Hopper</h1>
						<p>
							Be a part of the squad that helps travelers explore the world for less. Developers, data
							scientists, creative thinkers, problem solvers, travel junkies — you’ll fit right in.
						</p>
						<Link to="/">See current openings at Hopper</Link>
					</div>
					<div className={classes.mobileView}>
						<h1>You have goals? We have the squad</h1>
						<p>
							Be a part of the squad that helps users explore the world for less. Developers, data scientists, creative thinkers, problem solvers, travel junkies — you’ll fit right in.
						</p>
						<Link to="/">See open careers</Link>
					</div>
				</div>
			</div>
		);
	}
}

export default withStyles(styles) (Careers);
