import { useEffect } from "react";

const waitForSomething = (ms) => {
  const start = Date.now();
  let now = start;

  while (now - start < ms) {
    now = Date.now();
  }
};

function SlowComponent({time, custom, x}) {
    waitForSomething(time[0]);
    custom(); 

    useEffect(() => {
        console.log("Slow Component was Rendered")
    }, []); 

  return (
    <>
      <h3>Slow Component was Rendered  {x}</h3>
    </>
  );
}

export default SlowComponent;