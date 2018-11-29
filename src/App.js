import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {AppProvider, AppConsumer} from './Context';
import TopBar from './components/TopBar';
import AnimalList from './components/AnimalList';
import IndividualList from './components/IndividualList';
import AddIndividual from './components/AddIndividual';
import AddType from './components/AddType';


class App extends Component {
    constructor (props){
        super(props);
    }
    renderTypeList() {
        return (<AnimalList /> );
    }
    renderIndividualList() {
        return (<IndividualList />)
    }
    render() {
        return (
            <AppProvider>
                <AppConsumer>{c => (
                    <div className={"App " + c.state.theme}>
    					<TopBar />
                        <div className="container mainbody">
                            <div className="row">
                                <div className="col-12 col-sm-12 col-md-12 col-lg-8 list-container">
                                { c.state.selectedType ? this.renderIndividualList() : this.renderTypeList()}
                                </div>
                                <div className="col-12 col-sm-12 col-md-12 col-lg-4">
                                    <AddIndividual />
                                    <AddType />
                                </div>
                            </div>
                        </div>
                    </div>
                )}
                </AppConsumer>
            </AppProvider>
        );
      }
    }

export default App;
