import React, { useState } from "react"
function Counter(){
 const [Counter,setCounter]=useState(0)
    return(
        <div className="count">
        
            <h1>COUNTER : {Counter}</h1>

            <button disabled={Counter==0} onClick={() => setCounter(Counter - 1)}>-</button>
            <button onClick={() => setCounter(0)}>RESET</button>
            <button onClick={() => setCounter(Counter + 1)}>+</button>
            
            <h1> THIS NUMBER IS :{Counter %2==0?"EVEN":"ODD"}</h1> 
      
        </div>
    )
}

export default Counter
