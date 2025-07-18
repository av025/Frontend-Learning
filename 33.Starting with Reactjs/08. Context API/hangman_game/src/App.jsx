import {  Routes , Route } from "react-router-dom";
import PlayGame from "./pages/PlayGame";
import StartGame from "./pages/StartGame";
import Home from "./pages/Home";
import { WordContext } from "./context/wordContext";
import { useState } from "react";


function App() {

  const [wordList, setWordList] = useState([]);
   const [word, setWord] =  useState("");

  return (
    <>
    <WordContext.Provider value={{ wordList, setWordList, word, setWord}}>

     <Routes> 
      <Route index="/" element={<Home />} />
      <Route path="/start" element = {<StartGame />} />
      <Route path="/play" element={<PlayGame/>} /> 
     </Routes>
    </WordContext.Provider>
    </>
  )
}

export default App
