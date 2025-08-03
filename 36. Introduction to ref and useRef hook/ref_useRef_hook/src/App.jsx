import './App.css'
import ButtonComponent from './components/ButtonComponent'
import InputComponent from './components/InputComponent'

function App() {

  return (
    <>
     <h1>Signup Form</h1>
     <InputComponent inputType={"email"} inputPlaceholder={"Please Type Email here "} />
     <InputComponent inputType={"password"} inputPlaceholder={"Please Type Password here"}  />
     <ButtonComponent buttonText={"Submit Form"} />
    </>
  )
}

export default App
