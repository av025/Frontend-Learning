import { Link  } from "react-router-dom"
import Button from "../components/Button/Button"
import { useEffect, useState } from "react"

function Home() {
  const [word, setWord] =  useState("");
 
  async function fetchWords() {
    const response = await fetch("http://localhost:3000/words");
    const data = await response.json(); 
    console.log(data); 
    const randomIndex = Math.floor(Math.random() * data.length);
    console.log(data[randomIndex])

    setWord(data[randomIndex].wordValue)
  }

  useEffect(() => {
    fetchWords(); 
  }, []); 

  return (
    <> 
    <Link to="/play" 
    state={{ wordSelected: word }}
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