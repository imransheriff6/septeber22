import React, { useEffect } from "react";
function InputBox(){
    useEffect(()=>{
        document.getElementById('input').focus()
    })
    return <input id="input"/>
}
export default InputBox