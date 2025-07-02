import { useLocation } from "react-router-dom";

function PlayGame() {
  const formData = useLocation(); 
    const {state:{word}} = formData; 
    console.log(word); 

  return (
    <>
      <h1>Play Game</h1>
    </>
  );
}

export default PlayGame;
