import React, { useState } from "react";
function FormValidation() {
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [nameErr,setNameErr] = useState(false);
    const [passwordErr,setpasswordErr] = useState(false);
    function validate() {
        if(name.trim().length === 0){
            setNameErr(true)
        }else{
            setNameErr(false)
        }
        if(password.trim().length === 0){
            setpasswordErr(true)
        }else{
            setpasswordErr(false)
        }
    }
    return (
        <>
            <p>UserName</p>
            <input
                type='text'
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            {nameErr && <small>Please enter username</small>}
            <p>Password</p>
            <input
                type='password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            {passwordErr && <small>Please enter password</small>}
            <br></br>
            <button onClick={validate}>Login</button>
        </>
    )
}
export default FormValidation