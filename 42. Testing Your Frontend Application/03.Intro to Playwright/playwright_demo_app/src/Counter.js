import { useState } from "react";

export default function Counter() {
  const [counterValue, setCounterValue] = useState(0);
  function incrementValue() {
    setCounterValue(counterValue + 1);
  }
  return (
    <div>
      <p>
        <span data-test-id="count">{counterValue}</span>
      </p>
      <button onClick={incrementValue}>Increment</button>
    </div>
  );
}
