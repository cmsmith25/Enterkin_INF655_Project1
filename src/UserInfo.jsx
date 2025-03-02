import React from 'react';

class UserInfo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: 'Mickey Mouse',
            profession: 'Cartoon Character'
        };
    }

    render () {
        const { handleClick} = this.props;
        const { name, profession } = this.state;
        const randomNumber = Math.floor(Math.random() * 100);

        return (
            <div>
                <h2>User Info</h2>
                <p>Name: {this.state.name}</p>
                <p>Profession: {this.state.profession}</p>
                <p>Your lucky number today is: {randomNumber}</p>
                <button onClick={handleClick}>Click me</button>
            </div>
        );
    }
}

export default UserInfo;



