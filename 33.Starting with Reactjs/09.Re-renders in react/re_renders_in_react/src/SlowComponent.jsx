import { useEffect } from "react";

const waitForSomething = (ms) => {
  const start = Date.now();
  let now = start;

  while (now - start < ms) {
    now = Date.now();
  }
};

function SlowComponent() {
    waitForSomething(1000);
    useEffect(() => {
        console.log("Slow Component was Rendered")
    }, []); 

  return (
    <>
      <h3>Slow Component was Rendered</h3>
    </>
  );
}

export default SlowComponent;
