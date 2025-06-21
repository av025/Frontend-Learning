import Button from "./Button"
import "./App.css"
function App() {

  return (
    <div>
      <h1>Hello World</h1>
     <Button />
     {/* 
     This Button Component was the  resuable and follow the DRY Principle  */} 
     <Button /> 
     <Button /> 
     <Button/> 
    </div>
  )
}

export default App

