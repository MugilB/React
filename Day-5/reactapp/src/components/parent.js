import React from "react";
import Child from "./child";

function parent()
{
    return(

        <div>
            <Child message="Hello, this is parent component"/>
        </div>
    );
}

export default parent; 