import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {AppProvider, AppConsumer} from './Context';
import ThemeToggle from './components/ThemeToggle';


class App extends Component {
  render() {
    return (
        <AppProvider>
            <AppConsumer>{c => (
                <div className={"App " + c.state.theme}>
                  <h2>Animal List</h2>
                  <p> Theme: {c.state.theme}</p>
                  <ThemeToggle/>
                  </div>
            )}
            </AppConsumer>
        </AppProvider>
    );
  }
}

export default App;
