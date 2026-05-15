import React, { useState, useEffect, useRef } from 'react'

export default function MyComponent() {

    // These will be attached to their own elements and then we
    // will use DOM manipulation such as 'backgroundColor'
    const inputRefA = useRef(null);
    const inputRefB = useRef(null);
    const inputRefC = useRef(null);

    useEffect( () => {
        console.log("COMPONENT RENDERED");
    });

    function handleClickA(){
        inputRefA.current.focus();
        inputRefA.current.style.backgroundColor = "yellow"
        inputRefB.current.style.backgroundColor = ""
        inputRefC.current.style.backgroundColor = ""
    }
    function handleClickB(){
        inputRefB.current.focus();
        inputRefA.current.style.backgroundColor = ""
        inputRefB.current.style.backgroundColor = "yellow"
        inputRefC.current.style.backgroundColor = ""
    }
    function handleClickC(){
        inputRefC.current.focus();
        inputRefA.current.style.backgroundColor = ""
        inputRefB.current.style.backgroundColor = ""
        inputRefC.current.style.backgroundColor = "yellow"
    }

    return(
        <div>
            <button onClick={handleClickA}>
                Click me A!
            </button>
            <input ref={inputRefA} />
            {/* Attach 'inputRefA' to this <input/> so we can manipulate it */}

            <button onClick={handleClickB}>
                Click me B!
            </button>
            <input ref={inputRefB} />

            <button onClick={handleClickC}>
                Click me C!
            </button>
            <input ref={inputRefC} />
        </div>
    );
}