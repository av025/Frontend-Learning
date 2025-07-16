import { getMaskedString } from "./maskingUtility"

function MaskText({text, guessedLetters}) { 
    const maskedString = getMaskedString(text, guessedLetters); 

    return <> 
      {maskedString.map((letter, index) => {
        return( <span key={index} className="m-2 text-3xl px-2 ">
            {letter}
        </span>)
      } )}
     </>
}


export default MaskText; 