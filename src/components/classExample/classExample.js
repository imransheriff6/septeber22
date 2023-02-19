import React, { Component } from "react";
import Child from "./classChild";
class ClassExample extends Component {
    render() {
        return (
            <>
                <p>Hello</p>
                <Child name='Sam'/>
                <Child name='Ram'/>
            </>
        )
    }
}
export default ClassExample