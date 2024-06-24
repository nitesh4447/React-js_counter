import React, { useState } from "react"

function Counter(){
 const [Counter,setCounter]=useState(0)
    return(
        <div>
        
            <h1>Counter : {Counter}</h1>

            <button disabled={Counter==0} onClick={() => setCounter(Counter - 1)}>-</button>
            <button onClick={() => setCounter(0)}>reset</button>
            <button onClick={() => setCounter(Counter + 1)}>+</button>
            
            <h1>{Counter %2==0?"odd":"even"}</h1> 
      
        </div>
    )
}

export default Counter