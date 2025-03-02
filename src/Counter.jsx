import React, { useState } from 'react';

const Counter = () => {
    const [count, setCount] = useState(0);

    const incrementCount = () => {
        setCount(count + 1);

    };


return (
    <div>
    <h2>Count: {count}</h2>
    <button onClick={incrementCount}>Click</button>
    </div>
);
};

export default Counter;