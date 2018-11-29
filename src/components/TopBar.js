import React, { Component } from 'react';
import {AppProvider, AppConsumer} from '../Context';
import ThemeToggle from './ThemeToggle';

export default class TopBar extends Component {
    render() {
        return(
            <div className="container-fluid topbar">
				<div className="row">
	                <div className="col-6 col-sm-6 col-md-8 col-lg-10">
						<h4>Animal List</h4>
					</div>
					<ThemeToggle/>
				</div>
            </div>
        );
    }
}
