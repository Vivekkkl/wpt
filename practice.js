import React from "react";

export default class CurrencyConverter extends React.Component
{

    constructor()
    {
        super()
        this.amount = 0
        this.state={amt:0}

    }
    converter=(e)=>
    { 
        this.amount = e.target.value
        let s=this.amount/82
        this.setState({amt:s})
        
    }
    render()
    {
        return <div>
            input amount in RS :<input type="number"  onBlur={this.converter} ></input>
            <br></br>
            <p> {this.amount} in dollers : {this.state.amt} </p>
        </div>
    }
}