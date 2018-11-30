import React, { Component } from 'react';
import {AppProvider, AppConsumer} from '../Context';
import ReactTooltip from 'react-tooltip';

export default class AnimalList extends Component {

    constructor (props) {
        super(props);
        this.renderTypes = this.renderTypes.bind(this);
    }

    renderTypes (context) {
        const keys =  Object.keys(context.state.animalTypes);
        let ret = keys.map((key, index) => {
            const type =  context.state.animalTypes[key];
            if(type.canCry){
                var tooltip = <ReactTooltip place="top" type="dark" id={key} effect='solid'><span>{type.cry}</span></ReactTooltip>
            }else{
                var tooltip = false;
            }
            return (
                <tr key={key}>
                    <td className="clickable" onClick={() => {context.selectType(type.type.toLowerCase())}} data-tip data-for={type.canCry ? key : ""}>{type.type}{tooltip}</td>
                    <td>{type.diet}</td>
                    <td>{type.count}</td>
                    <td><span className="button" onClick={(e) => {context.selectTypeToAdd(type.type.toLowerCase())}}><i className="fas fa-plus"></i></span></td>
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
                            <table className={context.state.theme === "light" ? "table" : "table table-striped"}>
                            <thead>
                                <tr>
                                    <th>Animal Species</th>
                                    <th>Diet</th>
                                    <th>Quantity</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.renderTypes(context)}
                            </tbody>
                            </table>
                        );
                    }
                }
            </AppConsumer>
        )
    }
}
