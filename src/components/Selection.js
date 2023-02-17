
import React from 'react';
import { useState } from "react";

const Selection = (props) => {
    
   const { applyColor ,nextBackground}=props;
   //console.log(applyColor,nextBackground);
    return(
        <div className='fix-box' data-d={nextBackground.background} onClick={applyColor}>       
            <h2 className='subheading'>Selection</h2>
        </div>
    )
}

export default Selection;