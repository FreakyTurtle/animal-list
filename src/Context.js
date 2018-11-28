import React, { Component } from 'react';

const AppContext = React.createContext();

class AppProvider extends Component {
    
    constructor(props){
        super(props);
        this.state = {
            theme: "light"
        }
        this.updateTheme =  this.updateTheme.bind(this);
    }
    
    updateTheme = () => {
        this.setState({
            theme: this.state.theme === "light" ? "dark" : "light"
        })
    }
    
    render() {
        return (
            <AppContext.Provider value={{
                state: this.state,
                updateTheme: this.updateTheme
            }}>
                {this.props.children}
            </AppContext.Provider>
        )
    }
}

const AppConsumer = AppContext.Consumer;

export {
    AppProvider,
    AppConsumer
}
