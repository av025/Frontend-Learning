import { useState } from "react";
import InputComponent from "./InputComponent";

function App() {
  const [isStudent, setIsStudent] = useState(false);
  const [count, setCount] = useState(0);

  function addCount() {
    // setCount(count + 1);

    setCount((prev) => prev + 1); 
    console.log(count)
  } 

  function minusCount() {
  setCount((prev) => prev - 1);  
  }

  return (
    <>
      <form>
        <InputComponent type="text" placeholder="Enter Your Name" />
        <div>
          <input
            type="checkbox"
            id="student"
            name="student"
            value={isStudent}
            onChange={() => {
              setIsStudent(!isStudent);
            }}
          />
          <label htmlFor="student">Are You a Student ?</label>
        </div>
        {isStudent ? (
          <InputComponent
            type="text"
            placeholder="Enter Your School Name"
            key="school"
          />
        ) : (
          <InputComponent
            type="text"
            placeholder="Enter Your Company Name"
            key="company"
          />
        )}
        {/* Here the case when the type property of React Element was change than only Component was mount and unmount than only otherwise re-rendering was happen in above conditional rendering here Component was same which was created in memory.  */}
        {/* Conclusion  
          1st. If Different, then react will check for the type property. 
          2nd. If type is difference, then unmount the old component and mount the new one. 
          3rd. If type is same, but key prop is difference than also mount ands unmount was happen.  */}
      </form>

      <div>
        Count : {count}
        <br />
        <button onClick={addCount}>Increment</button>
        <button onClick={minusCount}>Decrement</button>
      </div>
    </>
  );
}

export default App;
