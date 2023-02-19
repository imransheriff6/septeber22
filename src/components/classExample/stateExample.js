import React, { Component } from "react";
class StateExample extends Component{
    constructor(){
        super();
        this.state =  {
            text:'Hello'
        }
        this.change =  this.change.bind(this)
    }
    change(){
        console.log('clicked');
        this.setState({
            text:"Welcome"
        })
    }
    render(){
       return (
        <>
            <p>{this.state.text}</p>
            <button onClick={this.change}>Change</button>
        </>
       )
    }
}   
export default StateExample