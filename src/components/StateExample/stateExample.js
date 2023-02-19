import React, { useState } from "react";
import './stateExample.css'
export function StateExample(){
    let [data,setData] = useState(0);
    function handler(){
        setData(data + 1)
    } 
    return(
        <>
         <p id='para'>{data}</p>
         <button onClick={handler} >Increment</button>
        </>
    )
}
