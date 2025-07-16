const ALPHABETS = "QWERTYUIOPASDFGHJKLZXCVBNM".split("");

function LetterButton({ text, guessedLetters, onLetterClick }) {
  const originalLetter = new Set(text.toUpperCase().split(""));
  const guessedLetterSet = new Set(guessedLetters);

  function buttonStyle(letter) {
    if (guessedLetterSet.has(letter)) {
      return `${originalLetter.has(letter) ? `bg-green-500` : `bg-red-500`}`;
    } else {
      return `bg-blue-500`;
    }
  }

  function handleLetterClick(event) {
    const charOfTheLetter = event.target.value;
    onLetterClick?.(charOfTheLetter);
  }

  return (
    <>
      {ALPHABETS.map((letter) => {
        return (
          <button
            className={`h-10 w-10 m-3 text-white rounded-md  ${buttonStyle(
              letter
            )}`}
            value={letter}
            key={`button-${letter}`}
            onClick={handleLetterClick}
            disabled={guessedLetterSet.has(letter)}
          >
            {letter}
          </button>
        );
      })}
    </>
  );
}

export default LetterButton;

