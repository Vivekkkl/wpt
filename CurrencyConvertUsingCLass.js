import React from "react";

export default class CurrencyConvertUsingClass extends React.Component
{
   
    constructor()
    {
        
        super()
        this.amount = 0
        // this.converter= this.converter.bind(this)
        this.state={amt:0}
    }

    converter =(e)=>
    { 
        this.amount= e.target.value
        let s = this.amount/82
        this.setState({amt:s})
    }

    render()
    {
        return <div>
            Input amount(in RS):<input type="number " onBlur={this.converter}></input>
            {/* Input amount(in RS):<input type="number " ></input> */}
            <br></br>
            <p> {this.amount} in dollors : {this.state.amt}</p>
        </div>
    }
}