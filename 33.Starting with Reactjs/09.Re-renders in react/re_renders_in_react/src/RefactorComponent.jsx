import { useState } from "react";

export default function RefactorComponent({children}) {
    const [x, setX] = useState(0); 
    
    function increaseX() {
    setX(x + 1);
  }

    return <>
      <p style={{fontSize: "2rem"}}>{x}</p> 
    <button style={{cursor: "pointer"}} onClick={increaseX}>Increment</button> 
    {children} 

    </>
}