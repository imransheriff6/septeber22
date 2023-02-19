import React from "react";
import { useHistory } from "react-router-dom";
function Contact() {
    const history = useHistory();
    const redirect = () =>{
        history.push("/about?from='contact'")
    }
    return (
        <>
            <h1>Welcome to Contact page</h1>
            <button onClick={redirect}>About</button>
        </>
    )
}
export default Contact