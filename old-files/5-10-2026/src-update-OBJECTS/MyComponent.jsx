import React, { useState } from 'react'

export default function MyComponent() {

    const [car, setCar] = useState({year: 2024, 
                                    make: "Ford", 
                                    model: "Mustang"});

    function handleYearChange(event){
        // Create new JavaScript object and spread the other properties 
        // while updating the 'year' property
        setCar( c => ({...c, year: event.target.value}) );
        
        // WRONG
        //setCar({year: 2025}); // this will create a new JavaScript Object which
                              // the 'make' & 'model' will be EMPTY                
    }
    function handleMakeChange(event){
        
        setCar( c => ({...c, make: event.target.value}) );
    }
    function handleModelChange(event){
        
        setCar( c => ({...c, model: event.target.value}) );
    }

    return(
    <>
        <div>
            <p> Your favorite car is: {car.year} {car.make} {car.model} </p>

            <input type="number" value={car.year} onChange={handleYearChange} /><br/>
            <input type="text" value={car.make} onChange={handleMakeChange} /><br/>
            <input type="text" value={car.model} onChange={handleModelChange} /><br/>
        </div>
    </>    
    );
}