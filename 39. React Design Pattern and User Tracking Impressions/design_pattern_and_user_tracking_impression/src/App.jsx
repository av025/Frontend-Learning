import "./App.css";
import EnchancedSimpleTrackableComponent from "./components/SimpleComponent";

function App() {
  //* What are Higher Order Components ?
  // Higher Order components which receive the another components
  // It contains Logic that we want to apply on the components which are passed as parameters
  //* We used the Higher Order Components to create Resuable components for us means containing the same logic for multiple components.

  //! Higher Order Components are used to reuse component logic throughout the application.

  

  return <>
   <EnchancedSimpleTrackableComponent />
  </>;
}

export default App;
