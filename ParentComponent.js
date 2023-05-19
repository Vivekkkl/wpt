import React, { useState } from "react";
import ChildComponent from "./ChildComponent";

export default function ParentComponent()
{
        let[add1,setadd1] = useState(0)
        let[add2,setadd2] = useState(0)
        let[res,setRes] = useState(0)
    //     let n1=0
    //     let n2=0
    //     let r = 0

    //    function handler1(e)
    //     {
    //        n1 = parseInt(e.target.value)
          
    //     }
    //    function handler2(e)
    //     {
    //        n2 = parseInt(e.target.value)
          
    //     }
    //     function handler3(e)
    //     {
    //         let s = n1+n2
    //         setRes(s)
    //     }
        function sendres(v)
        {
            setRes(v)
        }
    return <div>
        input num1: <input type="number" onBlur={(e)=>{setadd1(e.target.value)}}></input> <br></br>
        input num2: <input type="number" onBlur={(e)=>{setadd2(e.target.value)}}></input> <br></br>
        {/* <button onClick={handler3}> add</button> */}
        <ChildComponent num1={parseInt(add1)} num2={parseInt(add2)} f1={sendres}></ChildComponent>
        <p>result is {res}</p>
       

    </div>
}