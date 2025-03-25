//Not being used in midterm
import React from 'react';


//Defines the TaskArray component
function TaskArray() {
    const name = "Mickey";
    //Defines an array of tasks with properties
    const tasks = [
        {
            id: 1,
            title: "Cleaning Kitchen",
            description: "washing dishes",
        },
        {
            id: 2,
            title: "Tidying Bedroom",
            description: "making the bed",
        },
        {
            id: 3,
            title: "Taking care of pets",
            description: "walking the dogs",
        },
        {
            id: 4,
            title: "Laundry",
            description: "folding clothes"
        },
    ];


//Function to get random task from array
const getRandomTask = () => {
//Generates the random task
const int = Math.floor(Math.random()*4);
return tasks[int].title;
};
//Renders the component's JSX
return (
    <div className="TaskArray">
        Hello {name} you have a task of: <h3>{getRandomTask()}</h3>
    </div>
);
}


export default TaskArray;