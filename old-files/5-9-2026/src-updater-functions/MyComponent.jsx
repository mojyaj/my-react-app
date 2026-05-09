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
    function increment2() {
        setCount(count + 1);
        setCount(count + 1);
        setCount(count + 1);
    }

    function decrement() {
        setCount(c => c - 1);
        setCount(c => c - 1);
        setCount(c => c - 1);
    }

    function decrement2() {
        setCount(count - 1);
        setCount(count - 1);
        setCount(count - 1);
    }

    function reset() {
        setCount(0);

        // This works but, unessecary because we don't care about previous state
        setCount(c => c = 0);
    }

    return(
    <>
        <div>
            <p>Count with Updater Function: {count} </p>
            <button onClick={decrement}> Decrement </button>
            <button onClick={reset}> Reset </button>
            <button onClick={increment}> Increment </button>
        </div>
        <hr></hr>
        <div>
            <p>Count with NO Updater Function: {count} </p>
            <button onClick={decrement2}> Decrement </button>
            <button onClick={reset}> Reset </button>
            <button onClick={increment2}> Increment </button>
        </div>
    </>    
    );
}