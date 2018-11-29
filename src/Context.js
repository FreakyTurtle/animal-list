import React, { Component } from 'react';

const AppContext = React.createContext();

class AppProvider extends Component {

    constructor(props){
        super(props);
        this.state = {
            theme: "light",
            addingType: "",
            selectedType: "",
			animalTypes: {
				cat: {
					type: "Cat",
					canCry: true,
					cry: "meow",
					diet: "cat food",
                    feature: "land on all fours",
                    count: 2,
                    animals: [
                        {
        					name: "Garfield",
        					type: "cat",
        					age: 5
        				},
        				{
        					name: "Tom",
        					type: "cat",
        					age: 4
        				}
                    ]
				},
				dog: {
					type: "Dog",
					canCry: true,
					cry: "woof",
					diet: "dog food",
                    feature: "Catch a ball",
                    count: 2,
                    animals: [
                        {
        					name: "Beethoven",
        					type: "dog",
        					age: 7
        				},
        				{
        					name: "Toto",
        					type: "dog",
        					age: 5
        				}
                    ]
				},
				mouse: {
					type: "Mouse",
					canCry: true,
					cry: "squeak",
					diet: "cheese",
                    feature: "Can do maze",
                    count: 2,
                    animals: [
                        {
        					name: "Ben",
        					type: "mouse",
        					age: 2
        				},
        				{
        					name: "Mickey",
        					type: "mouse",
        					age: 90
        				}
                    ]
				},
				turtle: {
					type: "Turtle",
					canCry: false,
					diet: "lettuce",
                    feature: "Swim",
                    count: 4, 
                    animals: [
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
        				}
                    ]
				}
			}
        };
        this.updateTheme =  this.updateTheme.bind(this);
        this.addIndividual =  this.addIndividual.bind(this);
        this.selectTypeToAdd = this.selectTypeToAdd.bind(this);
        this.selectType = this.selectType.bind(this);
        this.removeIndividual = this.removeIndividual.bind(this);
    }

    updateTheme = () => {
        //Toggle the theme state
        this.setState({
            theme: this.state.theme === "light" ? "dark" : "light"
        })
    }
    addIndividual = (newAnimal) => {
        //Add an individual animal to the array and update type's count
        const type = newAnimal.type.toLowerCase();
        const newTypes = Object.assign({}, this.state.animalTypes);
        let newCount = this.state.animalTypes[type].count +1;
        let newAnimals = JSON.parse(JSON.stringify( this.state.animalTypes[type].animals ));
        newAnimals.push(newAnimal);
        newTypes[type] = Object.assign(this.state.animalTypes[type], {count: newCount, animals: newAnimals});
        this.setState({
            addingType: "",
            animalTypes: newTypes
        });
    }
    removeIndividual = (index) => {
        // remove an animal 
        const type = this.state.selectedType;
        const newTypes = Object.assign({}, this.state.animalTypes);
        let newCount = this.state.animalTypes[type].count - 1;
        newTypes[type]["animals"].splice(index, 1);
        newTypes[type] = Object.assign(newTypes[type], {count: newCount});
        this.setState({
            animalTypes: newTypes
        });
    }
    selectTypeToAdd = (type) => {
        // When the + button is pressed to add an individual animal, this sets the type of that animal 
        // it is also used as an indicator for when to show that form
        this.setState({
            addingType: type
        });
    }
    selectType = (type) => {
        console.log("Selecting type " + type)
        this.setState({
            selectedType: type
        });
    }

    render() {
        return (
            <AppContext.Provider value={{
                state: this.state,
                updateTheme: this.updateTheme,
                addIndividual: this.addIndividual,
                removeIndividual: this.removeIndividual,
                selectTypeToAdd: this.selectTypeToAdd,
                selectType: this.selectType
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
