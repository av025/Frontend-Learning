import { useDeferredValue, useEffect, useState, useTransition } from "react";

function HugeList() {
  const [list, setList] = useState([]);
  const [input, setInput] = useState("");

const deferredValue =  useDeferredValue(input); 
//! useDeferredValue()  hook that works same as useTransition() it also do defer means delay non important UI updates  
 

//   const [isStateUpdating, startDelay] = useTransition();
//? With the help of useTransition we can depriorities our UI updates means do some delay on non-important UI Updates and also which are heavy on UI  

//* Syntax of useTransition 
// const [isPending, startTransition] = useTransition 
// Where variable isPending was have Boolean type and startTransition was function to delay or de-prioritize our non-imponentant UI updates.  

//* useTransition Better Defination 
// With the help of useTransition, we can tell React to treat some UI updates
// as "non-urgent" (low priority). This prevents blocking urgent updates 
// like typing or button clicks, while heavy rendering tasks run in background.

// Syntax: const [isPending, startTransition] = useTransition();
// - isPending -> Boolean (true if transition is ongoing)
// - startTransition -> function to wrap low-priority updates

  function handleChange(e) {
    const newValue = e.target.value;
    setInput(newValue);
    // const newList = [];
    // startDelay(() => {
    //   for (let i = 0; i < 10000; i++) {
    //     newList.push(newValue);
    //   }
   //   setList(newList);
    // });
    //  for (let i = 0; i < 10000; i++) {
    //     newList.push(newValue);
    //   }

    //   setList(newList);
  } 

//   useEffect(() => { 
//     const newList = [];
//     for (let i = 0; i < 10000; i++) {
//         newList.push(deferredValue);
//       }

//       setList(newList);



//   }, [deferredValue])

  return (
    <>
      <input type="text" value={input} onChange={handleChange} />
      {false? <div>Loading</div> : 
      <ul>
        {list.map((item, index) => {
            return <li key={index}>{item}</li>;
        })}
      </ul>
    }
    </>
  );
}

export default HugeList;
