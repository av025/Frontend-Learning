import { memo, useCallback, useMemo, useState } from "react";
import "./App.css";
import SlowComponent from "./SlowComponent";
import Modal from "./Modal";
import AnotherSlowComponent from "./AnotherSlowComponent";

// const MemoisedSlowComponent = memo(SlowComponent);

const MemoisedSlowComponent = memo(function ({ time, custom, x }) {
  return <SlowComponent time={time} custom={custom} x={x} />;
});

//* Here we used memo function of react which return optimized component which cache our component and re-render only when state or state variable using in props only.

const MemoisedComponentSecond = memo(AnotherSlowComponent);  

function Child() {
  return <div> Hello Iam Child Component</div>
}

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [ x, setX] = useState(0); 

  function incrementX() {
    setX(x + 2); 
  }  

  function decrementX() {
    setX(x - 2); 
  }

  function onClickHandler() {
    setIsOpen(!isOpen);
  }

  // Now we want our function was also be memoised than we use  hook which was useCallback which mainly use for callback function and it changes when the state our prop changes it was use 
  //? useCallback() function takes two argument first was callback function and second was empty array we used useCallback for function so it don't re-render and dependency array so it depend on any variable to change.  
 const someFunction = useCallback(() => {
  console.log("Something Changes !!!!!"); 
 }, []);; 
 
 //? Here callback function help to memoised and dependency array to depend on it....  


//? Similarly like useCalback hook we have useMemo also which use for our non-primitive data which was cause re-render of our component when there value changes. 

const timeArray = useMemo(() => {
  return [500]
}, []) 
// It takes two argument first was callback function and second was dependency array on which our useMemo() hook was depened

const memoChild = useMemo(() => {
 return  <Child />
},[])

  return (
    <>
      <MemoisedSlowComponent time={timeArray} custom={someFunction} x = {x} /> 
        {/* When we pass as an array as prop than it create new object in our component memory and our react reconciliation  do comparison and do re-render again so it hang our Modal Component also because state was changes  */}
      <button style={{ cursor: "pointer" }} onClick={onClickHandler}>
        Open Modal
      </button> 
      <button style={{ cursor: "pointer" }} onClick={incrementX}>
        Increase X 
      </button> 
      <button style={{cursor: "pointer"}} onClick={decrementX}>
        Decrement Y
      </button>
      {isOpen && <Modal onClickHandler={onClickHandler} />}
      <MemoisedComponentSecond > 
        {/*? This two also causing re-renders and start hanging our UI Again !!!!!  */}
        {/* <div>Hello World</div>  */}
        {/* <div>Hi Everyone </div>  */}
        {memoChild}
      </MemoisedComponentSecond>
    </>
  );
}

export default App;
