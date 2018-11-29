import React, { Component } from 'react';
import {AppProvider, AppConsumer} from '../Context';

export default class AddIndividual extends Component {
    constructor(props){
        super(props);
        this.state = {
            name: "",
            age: 0
        }
        this.onNameChange = this.onNameChange.bind(this);
        this.onAgeChange = this.onAgeChange.bind(this);
    }
    
    onNameChange(e) {
        this.setState({
            name: e.target.value
        });
    }
    onAgeChange(e) {
        this.setState({
            age: e.target.value
        });
    }
    
    render() {
        return(
            <div>
                <AppConsumer>
                    {(context) => (
                        <div className={context.state.addingType ? "add-individual-form form-card" : "add-individual-form form-card hide"}>
                            <h3>Add an animal</h3><br/>
                            <div className="form-container">
                                <p>Type: {context.state.addingType}</p>
                                <p>Name: <br/><input type="text" id="name" onChange={this.onNameChange}/></p>
                                <p>Age: <br/><input type="number" id="age" onChange={this.onAgeChange}/></p>
                            </div>
                            <div className="buttonholder">
                                <div className="button cancel" onClick={(e) => {context.selectTypeToAdd("")}}>Cancel</div>
                                <div className="button add" onClick={(e) => {context.addIndividual({type : context.state.addingType, name: this.state.name, age: parseInt(this.state.age)})}}>Add Animal</div>
                            </div>
                        </div>
                    )}
                </AppConsumer>
            </div>
        );
    }
}
