import React, { useState } from 'react'

export default function MyComponent() {

    const [count, setCount] = useState(0);

    function increment() {
        // Problem: Below code will only increase count by 1
            // setCount(count + 1);
            // setCount(count + 1);
            // setCount(count + 1);
        // Fix: Use an Arrow Function OR Updater Function
        setCount(preCount => preCount + 1); // Common practice to give the prop an alias in this context
        setCount(c => c + 1);
        setCount(c => c + 1);
    }

    function decrement() {
        setCount(c => c - 1);
        setCount(c => c - 1);
        setCount(c => c - 1);
    }

    function reset() {
        setCount(0);

        // This works but, unessecary because we don't care about previous state
        setCount(c => c = 0);
    }

    return(
        <div className="counter_container">
            <p className="counter_display">Count: {count} </p>
            <button className="counter_button" onClick={decrement}> Decrement </button>
            <button className="counter_button" onClick={reset}> Reset </button>
            <button className="counter_button" onClick={increment}> Increment </button>
        </div>
    );
}