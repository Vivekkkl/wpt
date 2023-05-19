import React from "react";

export default function ChildComponent({ num1, num2, f1 }) {
   function compute(e)
    {
        switch (e.target.value) {
            case "add": let addition = num1 + num2;
                f1(addition);
                break;
            case "sub": let subtraction = num1 - num2;
                f1(subtraction);
                break;
            case "mul": let multiplication = num1 * num2;
                f1(multiplication);
                break;
            case "div": let division = num1 / num2;
                f1(division);
                break;
            case "poww": let power = Math.pow(num1,num2);
                f1(power);
                break;
        }
    }
    return <div>
        <select onChange={compute}>
            <option value="add">Add</option>
            <option value="sub">Subtract</option>
            <option value="mul">Multiply</option>
            <option value="div">Divide</option>
            <option value="poww">Power</option>
        </select>

    </div>
}