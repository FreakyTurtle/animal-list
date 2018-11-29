import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {AppProvider, AppConsumer} from './Context';
import TopBar from './components/TopBar';


class App extends Component {
  render() {
    return (
        <AppProvider>
            <AppConsumer>{c => (
                <div className={"App " + c.state.theme}>
					<TopBar />
                 </div>
            )}
            </AppConsumer>
        </AppProvider>
    );
  }
}

export default App;
