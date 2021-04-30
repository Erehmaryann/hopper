/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import {withStyles} from '@material-ui/styles';
import styles from '../styles/ButtonStyles';

class Button extends Component {
	render() {
		const {classes} = this.props
		return (
			<div className={classes.Button}>
				<button>
					<Link to="/">Send app to your phone</Link>
				</button>
			</div>
		);
	}
}

export default withStyles(styles) (Button)