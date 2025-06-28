export function getMaskedString(originalWord,  guessedLetter ) {
    guessedLetter = guessedLetter.map(letter => letter.toUpperCase());

    const guessedLetterSet = new Set(guessedLetter); 

  const result = originalWord.toUpperCase().split("").map(char => {
        if(guessedLetterSet.has(char)) {
            return char; 
        }else {
            return "_"
        }
    }); 

    return result.join("");
}