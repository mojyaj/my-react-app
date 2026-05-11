import React, { useState } from 'react'

export default function MyComponent() {

    const [foods, setFoods] = useState(["Apple", "Orange", "Banana"]);

    function handleAddFood(){

        const newFood = document.getElementById("foodInput").value;
        
        if (!newFood) return; // if there is no string value in the textbox then return

        document.getElementById("foodInput").value = "";

        setFoods( f => ([...f, newFood]) );
    }
    function handleRemoveFood(index){
        
        setFoods(foods.filter( (_, i) => i !== index )); // '_' -> ignore this parameter
    }

    return(
    <>
        <div>
            <h2>List of Food</h2>
            <ul>{ 
                    foods.map( (food, index) => 
                                <li key={index} onClick={ () => handleRemoveFood(index) }> 
                                    {food} 
                                </li>
                            )}
            </ul>
                <input type="string" id="foodInput" placeholder="Enter food name" />
                <button onClick={handleAddFood}> Add Food </button>
        </div>
    </>
    );
}