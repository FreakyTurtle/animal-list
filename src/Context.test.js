import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {AppProvider, AppConsumer} from './Context';

class TestComponent extends Component {
	render(){
		return (
			<AppConsumer>
			{
				context => (
					<React.Fragment>
						<div className="output">
						{JSON.stringify(this.context.animalTypes)}
						</div>
						<button className="addspecies">Add Species</button>
					</React.Fragment>
				)
			}
			</AppConsumer>
		);
	}
}

describe('<TestComponent/>', () => {
	it('Testing the starting state', () => {
		const div = document.createElement('div');
	    ReactDOM.render(<TestComponent />, div);
	    ReactDOM.unmountComponentAtNode(div);
	});
});
