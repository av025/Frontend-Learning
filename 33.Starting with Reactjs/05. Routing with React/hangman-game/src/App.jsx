import { Route, Routes } from "react-router-dom"
import StartGame from "./pages/StartGame"
import PlayGame from "./pages/PlayGame"

function App() {


  return (
     <Routes> 
      {/* <Route index="/" element={<TextInputFormContainer />} /> */}
       <Route path="/start"  element={<StartGame />}  />
       <Route path="/play" element={<PlayGame />} />
     </Routes>
  )
}

export default App
