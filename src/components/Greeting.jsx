import React, { useState } from 'react';


//Greeting component, accepting username prop
const Greeting = ({ username }) => {
  //Declares a state variable 'greeting'
  const [greeting, setGreeting] = useState("Hello there");

  //Function to change between different greetings
  const changeGreeting = () => {
    setGreeting(greeting === "Hello there" ? "Hiya" : "Hello and Welcome");
  };

  //Get current date
  const currentDate = new Date().toLocaleDateString();

  //Render component's JSX
  return (
    <div className= "card">
      <h2>{greeting} {username}!</h2>
      <p>Today's date is: {currentDate}</p>
      <button onClick={changeGreeting}>Change Greeting</button>
    </div>
  );
};

export default Greeting;
