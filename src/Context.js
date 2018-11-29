import React, { Component } from 'react';

const AppContext = React.createContext();

class AppProvider extends Component {

    constructor(props){
        super(props);
        this.state = {
            theme: "light"
			animalTypes: {
				cat: {
					type: "cat",
					canCry: true,
					cry: "meow",
					diet: "cat food"
				},
				dog: {
					type: "dog",
					canCry: true,
					cry: "woof",
					diet: "dog food"
				},
				mouse: {
					type: "mouse",
					canCry: true,
					cry: "squeak",
					diet: "cheese"
				},
				turtle: {
					type: "turtle",
					canCry: false,
					diet: "lettuce"
				}
			},
			animals: [
				{
					name: "Elmo",
					type: "cat",
					age: 3
				},
				{
					name: "Enzo",
					type: "cat",
					age: 4
				},
				{
					name: "Beethoven",
					type: "dog",
					age: 7
				},
				{
					name: "Toto",
					type: "dog",
					age: 5
				},
				{
					name: "Ben",
					type: "mouse",
					age: 2
				},
				{
					name: "Mickey",
					type: "mouse",
					age: 90
				},
				{
					name: "Rafael",
					type: "turtle",
					age: 13
				},
				{
					name: "Donatello",
					type: "turtle",
					age: 14
				},
				{
					name: "Leonardo",
					type: "turtle",
					age: 13
				},
				{
					name: "Michelangelo",
					type: "turtle",
					age: 14
				},

			]
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
