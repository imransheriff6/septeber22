import React, { Component } from "react";
class Child extends Component{
    render(){
        return <p>{this.props.name}</p>
    }
}
export default Child