import React from 'react';


const Greeting = ({username}) => {
    const currentDate = new Date().toLocaleDateString();
    
  
    const pStyle = {
      color: 'purple',
      fontSize: '16px',
    };
  
    return (
      <div>
        <h1>Hello, {username} . Welcome to React!</h1>
        <p style={pStyle}>Today's date is: {currentDate}</p>
        </div>

    );
}

export default Greeting;