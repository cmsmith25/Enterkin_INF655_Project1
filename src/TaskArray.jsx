import React from 'react';


function TaskArray() {
    const name = "Mickey";
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



const getRandomTask = () => {
const int = Math.floor(Math.random()*4);
return tasks[int].title;
};
return (
    <div className="TaskArray">
        Hello {name} you have a task of: <h3>{getRandomTask()}</h3>
    </div>
);
}


export default TaskArray;