import { useState, useEffect } from 'react'


export default function MyComponentA() {

    const [count, setCount] = useState(0);
    const [color, setColor] = useState("green");
    
    // Every time 'MyComponentA' re-renders, run this hook function
    useEffect( () => {
            document.title = `Count: ${count} ${color}`;
            // title = *Look at the top browser TAB
            return () => {
                // clean up code
            }
        }, 
        [count, color] // if the value of 'count' changes then invoke the arrow function
    );

    function addCount() {
        setCount(c => c + 1);
    }
    function subtractCount() {
        setCount(c => c - 1);
    }

    function changeColor() {
        setColor(c => c === "green" ? "red" : "green");
    }

    return(<>
        <p style={{color: color}}> Count: {count} </p>
        <button onClick={addCount}> Add </button>
        <button onClick={subtractCount}> Subtract </button><br/>
        <button onClick={changeColor}> Change Color </button>

        
    </>)
}