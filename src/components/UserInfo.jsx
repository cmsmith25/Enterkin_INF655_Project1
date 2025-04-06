import React from 'react';

//Displays the user name, profession, and lucky number
class UserInfo extends React.Component {
    //Constructor to initialize state
    constructor(props) {
        super(props);
        this.state = {
            name: 'Mickey Mouse',
            profession: 'Cartoon Character',
            luckyNumber: Math.floor(Math.random() * 100) + 1,
        };
    }

    //Method for generating random lucky number
    generateNewNumber = () => {
        this.setState({ luckyNumber: Math.floor(Math.random() * 100) + 1});
    };

    //Render method to display component
    render () {
        return (
            <div>
                <h2>User Info</h2>
                <p>Name: {this.state.name}</p>
                <p>Profession: {this.state.profession}</p>
                <p>Your lucky number today is: {this.state.luckyNumber}</p>
                <button onClick={this.generateNewNumber}>Generate New Lucky Number</button>
            </div>
        );
    }
}

export default UserInfo;



