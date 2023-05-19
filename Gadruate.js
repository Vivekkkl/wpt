import React from "react";

export default function Graduate({f1})
{
    function handler(e)
    {
        switch(e.target.value)
        {
            case "ungrad" : let s = ["SSC:87"," "," HSC:72"];
                            f1(s);
                           break;
        
            case "grad" : let t=[ "Degree:BE"," ", "YOP:2022"," ","Percentage :67"," "," University:SPPU"];
                           f1(t);
                           break;
              
            case "pograd":let u = ["NA"];
                           f1(u);
                           
                      
        }
    }
    return <div>
                <select onChange={handler}>
            <option value="ungrad">Under Graduation</option>
            <option value="grad">Graduation</option>
            <option value="pograd">Post Graduation</option>

           
        </select>
    </div>
}