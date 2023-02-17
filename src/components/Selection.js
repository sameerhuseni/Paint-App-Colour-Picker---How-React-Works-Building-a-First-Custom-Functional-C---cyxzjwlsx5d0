import React from 'react';
import { useState } from "react";

const Selection = (props) => {
    
   const { applyColor,color }=props;
  // applyColor()
  
   const [state,setState]=useState({background:'blue'})

    return(
        <div className='fix-box' style={state} onClick={()=>{
            applyColor(()=>{
                setState(color)
            })
        }}>       
            <h2 className='subheading'>Selection</h2>
        </div>
    )
}

export default Selection;