import { Link  } from "react-router-dom"
import Button from "../components/Button/Button"
import { useContext, useEffect, useState } from "react"
import { WordContext } from "../context/wordContext";

function Home() {
 
  const {setWordList, word, setWord} = useContext(WordContext);
 
  async function fetchWords() {
    const response = await fetch("http://localhost:3000/words");
    const data = await response.json(); 
    const randomIndex = Math.floor(Math.random() * data.length);
    setWordList([...data]); 
   setWord(data[randomIndex].wordValue)
  }

  useEffect(() => {
    fetchWords(); 
  }, []); 

  return (
    <> 
    <Link to="/play" 
    > 

    <Button buttonText={"Single Player"} /> </Link> 
    <br />
    <Link to={"/start"}>
     <Button buttonText={"Multi Player"}  buttonStyle="secondary"/>
    </Link>
    </>
  )
}

export default Home