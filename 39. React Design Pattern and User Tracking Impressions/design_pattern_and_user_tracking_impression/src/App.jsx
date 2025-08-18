import { useState } from "react";
import "./App.css";
import EnchancedSimpleTrackableComponent from "./components/SimpleComponent";
import ClickImpressionTrackable from "./components/ClickImpressionTrackable";
import MouseEnterImpressionTrackable from "./components/MouseEnterImpressionTrackable";
import SimpleComponent from "./components/SimpleComponent";

function App() {
  //* What are Higher Order Components ?
  // Higher Order components which receive the another components
  // It contains Logic that we want to apply on the components which are passed as parameters
  //* We used the Higher Order Components to create Resuable components for us means containing the same logic for multiple components.

  //! Higher Order Components are used to reuse component logic throughout the application.

  const [value, setValue] = useState(0); 

  const ClickImpressionSimpleComponent = ClickImpressionTrackable(SimpleComponent); 

  return (
    <>
      {/* <EnchancedSimpleTrackableComponent x={value} /> */}
      {/* <ClickImpressionTrackable> */}
        {/* <MouseEnterImpressionTrackable> */}
          {/* <SimpleComponent x={value} /> */}
        {/* </MouseEnterImpressionTrackable> */}
      {/* </ClickImpressionTrackable> */}
      <ClickImpressionSimpleComponent  x={value} />
      <button onClick={() => setValue(value + 1)}>Increase Value</button>
      <button
        onClick={() => {
          if (value > 0) {
            setValue(value - 1);
          }
        }}
      >
        Decrease value
      </button>
    </>
  );
}

export default App;
