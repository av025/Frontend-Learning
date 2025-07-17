import {  Routes , Route } from "react-router-dom";
import PlayGame from "./pages/PlayGame";
import StartGame from "./pages/StartGame";
import Home from "./pages/Home";



function App() {

  return (
    <>
     <Routes> 
      <Route index="/" element={<Home />} />
      <Route path="/start" element = {<StartGame />} />
      <Route path="/play" element={<PlayGame/>} /> 
     </Routes>
    </>
  )
}

export default App
