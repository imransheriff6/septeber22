import React from "react";
import { useLocation } from "react-router-dom";
function About(){
    const location = useLocation();
    console.log(location);
    return <h1>Welcome to About page - {location.search}</h1>
}
export default About