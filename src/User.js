import React,{forwardRef} from "react";

function User(props,ref)
{
    return(
     <div>
        <h1>This is Functional Component for Ref</h1>
        <input type="text" ref={ref}/>
     </div>
    );
}

export default forwardRef(User)