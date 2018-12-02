import React, { Component } from 'react';
import {AppProvider, AppConsumer} from '../Context';
var _ = require('lodash');

export default class AddType extends Component {
	constructor (props) {
		super(props);
		this.state = {
			searchTerm:  "",
			suggestions : [],
			type: "",
			diet: "",
			ability: "",
			cry: ""
		}
		this.onDietChanged = this.onDietChanged.bind(this);
		this.onAbilityChanged = this.onAbilityChanged.bind(this);
		this.onCryChanged = this.onCryChanged.bind(this);
		this.onSearchChanged = this.onSearchChanged.bind(this);
		this.delayedCallback = _.debounce(this.onSearchChanged, 750, {leading: true});
		this.returnSubmitButton = this.returnSubmitButton.bind(this);
		this.chooseType = this.chooseType.bind(this);
	}
	onDietChanged(e){
		this.setState({
			diet: e.target.value
		});
	}
	onAbilityChanged(e){
		this.setState({
			ability: e.target.value
		});
	}
	onCryChanged(e) {
		this.setState({
			cry: e.target.value
		});
	}
	chooseType(e, obj){
		console.log("choosing type "+ obj)
		this.setState({
			type: obj
		});
	}

	onSearchChanged(e) {
		if(e.target.value.length === 0 ){
			this.setState({
				suggestions: []
			});
			return;
		}
		this.setState({
			searchTerm: e.target.value
		}, () => {
			fetch('https://api.gbif.org/v1/species/search?limit=5&q='+this.state.searchTerm)
			.then(response => response.json())
			.then((response) => {
				let newArray = [];
				for (var i = 0; i < response.results.length; i++) {
					let result = response.results[i];
					if(result.canonicalName && result.species){
						newArray.push(`${result.canonicalName} (${result.species})`);
					}
				}
				this.setState({
					suggestions: newArray
				});
			})
			.catch((e) => {
				this.setState({
					suggestions: []
				})
			})
		});
	}

	returnSubmitButton(context){
		if(this.state.type && this.state.diet && this.state.ability){
			return (<div className="button" onClick={() => context.addSpecies({
				type: this.state.type,
				canCry: this.state.cry ? true : false,
				cry: this.state.cry ? this.state.cry : false,
				diet: this.state.diet,
				feature: this.state.ability,
				count: 0,
				animals: []
			})}>Add Species</div>)
		}
		return (<button className="button disabled" disabled>Add Species</button>);
	}

    render() {
        return(
            <div>
                <AppConsumer>
                    {(context) => (
                        <div className={context.state.addingType ? "add-type-form form-card hide" : "add-type-form form-card"}>
							<h3>Add Species</h3><br/>
	                        <p className="species-search">Search for species: <input type="text" onChange={(e) => {
								e.persist();
								this.delayedCallback(e);
							}}/></p>
							<div className="suggestions">
								{this.state.suggestions.length > 0 ? this.state.suggestions.map((obj, index) => <p className="species-suggestion clickable" key={index} onClick={(e) => this.chooseType(e, obj)}>{obj}</p>) : (<p className="species-suggestion">No Search Results</p>)}
							</div>
							<hr/>
							<p>Type: {this.state.type}</p>
							<p>Diet: <br/><input type="text" id="name" onChange={this.onDietChanged}/></p>
							<p>Special Ability: <br/><input type="text" id="name" onChange={this.onAbilityChanged}/></p>
							<p>Cry: <br/><input type="text" id="name" onChange={this.onCryChanged}/></p>
							<div className="buttonholder">
								{this.returnSubmitButton(context)}
							</div>
                        </div>
                    )}
                </AppConsumer>
            </div>
        );
    }
}
