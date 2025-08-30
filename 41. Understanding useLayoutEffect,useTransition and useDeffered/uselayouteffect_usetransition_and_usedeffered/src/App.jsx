import { useEffect, useLayoutEffect } from "react";
import "./App.css";
import HugeList from "./components/HugeList";

function App() {
  //? useLayoutEffect Hook
  // useLayoutEffect and useEffect both are do same thing but difference is that useLayoutEffect will be called before the user can see the visual changes where useEffect will be called after user is able to see the changes.

  // useEffect(() => {
  //   console.log("Component was Rendered !!!!");
  //   setTimeout(() => {
  //     document.title = "useEffect";
  //   }, 5000);
  // }, []);

  //? useLayoutEffect hook
  // useLayoutEffect(() => {
  //   console.log("This CONSOLE Statement from useLayoutEffect !!!!");
  //   document.title = "useLayoutEffect";
  // }, []);

  //! Here the main difference was useLayoutEffect hook will call before the browser paint when useEffect will call after the browser paint processes are completed and useLayoutEffect hook works synchronously that's means it blocks the process of repainting of our browser

  //* Mainly we used useLayoutEffect() for the calculation or measurement puropse  like height and width of the element, set animation lagging  etc.

  return (
    <>
      <p>App Component was render</p>
      <div>
        <HugeList/>
      </div>
    </>
  );
}

export default App;
