import React, { Component } from 'react';
import {AppProvider, AppConsumer} from '../Context';

export default class IndividualList extends Component {

    constructor (props) {
        super(props);
        this.renderIndividuals = this.renderIndividuals.bind(this);
    }

    renderIndividuals (context) {
        const animals = context.state.animalTypes[context.state.selectedType].animals;
        console.log(animals);
        let ret = animals.map((k, index) => {
            return (
                <tr key={index}>
                    <td>{k.name}</td>
                    <td>{k.age}</td>
                    <td><span className="button" onClick={(e) => {context.removeIndividual(index)}} ><i className="fas fa-trash-alt"></i></span></td>
                </tr>
            )
        });
        return ret;
    }

    render () {
        return (
            <AppConsumer>
                {
                    (context) => {
                        return(
                            <React.Fragment>
                                <table className={context.state.theme === "light" ? "table" : "table table-striped"}>
                                <thead>
                                    <tr>
                                        <th>Name</th>
                                        <th>Age</th>
                                        <th></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {this.renderIndividuals(context)}
                                </tbody>
                                </table>
                                <div className="buttonholder">
                                <div className="button" onClick={(e) => {context.selectType("")}}>Back to Top</div>
                                </div>
                            </React.Fragment>
                        );
                    }
                }
            </AppConsumer>
        )
    }
}
