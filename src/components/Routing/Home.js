import React from "react";
import { useHistory } from "react-router-dom";
function Home() {
    const history = useHistory();
    const redirect = () =>{
        history.push("/about?from='home'")
    }
    return (
        <>
            <h1>Welcome to home page</h1>
            <button onClick={redirect}>About</button>
        </>
    )
}
export default Home