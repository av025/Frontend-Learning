import {
  Link,
  useLocation,
  useParams,
  useSearchParams,
} from "react-router-dom";
import MaskText from "../components/MaskText/MaskText";
import LetterButton from "../components/LetterButtons/LettorButton";
import { useContext, useState } from "react";
import HangMan from "../components/hangMan/HangMan";
import { WordContext } from "../context/wordContext";


function PlayGame() {
  const [guessedLetters, setGuessedLetters] = useState([]);
  const [step, setStep] = useState(0); 
 const {wordList, word} = useContext(WordContext)


  //? For Accessing the search-params we are using useSearchParams hooks
  //   const params = useSearchParams();
  //   const [searchParams] = params

  //? For accessing the params we are using useParams()
  // const params = useParams();
  // console.log(params);
  // const {text} = params

  //? Now we are sending our data as state property in a useNavigation hook for access that data we are using the useLoaction() hook here to access the state property
  // const location = useLocation();
  // const { state } = location;

  function handleLetterClick(letter) {
    if(state?.wordSelected?.toUpperCase().includes(letter)) {
      console.log("Correct")
    }else {
      console.log("Wrong"); 
      setStep(step + 1); 
    }
    setGuessedLetters([...guessedLetters, letter]);
  }

  // const arr = ["hello", "World"];
  //? Now how we can render this array so here the concept in React was Rendering the list

  return (
    <>
      <h1> Play Game </h1>
      {wordList.map(wordObject => <li key={wordObject.id}>{wordObject.wordValue}</li>)}
      { word && (<> 
      <MaskText text={word} guessedLetters={guessedLetters} />
      <div>
        <LetterButton
          text={word}
          guessedLetters={guessedLetters}
          onLetterClick={handleLetterClick}
        />
      </div>
      <div>
        <HangMan steps={step} />
      </div>
      </>) }
      <div>
        <Link to="/" className="text-blue-500 m-2">
          Navigate to Start Game
        </Link>
      </div>
    </>
  );
}

export default PlayGame;