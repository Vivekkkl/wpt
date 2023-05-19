import React from "react";

export default function Trail1(props){
    //   let num
      let cars = []
    return <div className="c2">
        <p>Passing number as prop {props.num}</p>
        <p>Passing array as prop {props.cars.join(", ")}</p>
    </div>
}