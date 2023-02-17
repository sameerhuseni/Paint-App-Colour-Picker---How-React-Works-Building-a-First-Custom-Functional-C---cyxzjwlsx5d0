
import React from 'react';
import { useState } from "react";

const Selection = (props) => {
    
   const { applyColor }=props;
   const [state,setState]=useState({background:''})

    return(
        <div className='fix-box' style={state} onClick={() => setState({background:applyColor.background})}>       
            <h2 className='subheading'>Selection</h2>
        </div>
    )
}

export default Selection;