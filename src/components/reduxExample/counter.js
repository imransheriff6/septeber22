import React, { useState } from "react";
import { increment, decrement,selectCount } from './logic'
import { useDispatch,useSelector } from "react-redux";
function Counter(){
    const count = useSelector(selectCount);
    const dispatch = useDispatch();
    return(
        <>
            <p>{count}</p>
            <button onClick={()=>dispatch(increment())}>Increment</button> {'|'} <button onClick={()=>dispatch(decrement())}>Decrement</button>
        </>
    )
}
export default Counter