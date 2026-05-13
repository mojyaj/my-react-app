import { useState, useEffect } from 'react'

export default function MyComponentB() {

    const [width, setWidth] = useState(window.innerWidth);
    const [height, setHeight] = useState(window.innerHeight);

    useEffect( () => {
            // Add event listener for a 'Resize Event' of this browser
            window.addEventListener("resize", handleResize);
            console.log("EVENT LISTENER ADDED");
            
            // Scenario: addEventListener() without 'useEffect'       
            // ISSUE: Everytime the window resizes, the event listener is
            //        added over a hundred times
            // FIX:   Use the 'useEffect()' hook
            //       *note: It is normal for the same event listener to be 
            //              added twice because 'useEffect' will be run twice.
            //              Once for 'Development' and once for 'Clean Up' cycle.
        
            // A 'return()' statement in 'useEffect' allows us to run 'Clean Up' code
            //  so that it does not lead to unexpected behavior
            return () => {
                window.removeEventListener("resize", handleResize); // remove event
                console.log("EVENT LISTENER REMOVED");
            }
        }, 
        []
    );

    useEffect( () => {
            document.title = `Size: ${width} x ${height}`;
        }, [width, height]
    );

    function handleResize() {
        setWidth(window.innerWidth);
        setHeight(window.innerHeight);
    }

    return(<>
        <p> Window Width: {width}px </p>
        <p> Window Height: {height}px </p>
    </>)
}