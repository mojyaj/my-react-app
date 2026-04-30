import React, { useState } from 'react';

export default function ColorPicker() {

    // HSL   useState( {hue: 0, saturation: 50, lightness: 50} )
    const [color, setColor] = useState("#FFFFFF"); 

    function handleColorChange(evnet) {
        setColor(event.target.value);
    }
    
    return(<>
        <div className="color_picker_container">
            <h1> Color Picker </h1>
            <div className="color_display" style={{backgroundColor: color}}>
                <p> Selected Color: {color} </p>
            </div>
            <label> Select a Color: </label>
            <input type="color" value={color} onChange={handleColorChange} />
        </div>
    </>);
}

