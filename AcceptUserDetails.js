import React, { useState } from "react";
import Graduate from "./Gadruate";


export default function AcceptUserDetails() {
    let [inittext, settext] = useState(" ")
    let [initemail, setemail] = useState(" ")
    let [res,setres] = useState(" ")
    let [hideflag,setflag] = useState(false)

    function changeresult(v)
    {
        setres(v)
    }
    return <div>
        Name:  <input type="text" onBlur={(e) => { settext(e.target.value) }}></input><br></br>
        Email: <input type="email" onBlur={(e) => { setemail(e.target.value) }}></input><br></br><br></br>
        {/* <button type="submit" onClick={(e)=>{settext(e.target.value)}}>Submit</button> */}
        {/* <button type="submit" onClick={(e)=>{setemail(e.target.value)}}>Submit</button> */}

        <p>{inittext}<br></br>{initemail}</p>


        {/* <select onChange={changeresult}>
            <option value="ungrad">Under Graduation</option>
            <option value="grad">Graduation</option>
            <option value="pograd">Post Graduation</option>
        </select> */}
        <Graduate f1={changeresult}></Graduate>
       Hide data <input type="checkbox" onChange={(e)=>{setflag(e.target.checked)}}></input>
        {/* <p>{res}</p> */}
        { !hideflag && <p>{res}</p>}

    </div>
}