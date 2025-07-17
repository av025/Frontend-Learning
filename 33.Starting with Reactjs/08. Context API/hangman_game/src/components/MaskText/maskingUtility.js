export function getMaskedString(originalWord, guessedLetter) {
  // Convert all guessed letters to uppercase for case-insensitive comparison
  guessedLetter = guessedLetter.map((letter) => letter.toUpperCase());

  // Use a Set to store guessed letters for fast lookup
  const guessedLetterSet = new Set(guessedLetter);
  // Convert originalWord to uppercase
  // Then split it into characters and map:
  // If the character is guessed, keep it; otherwise, replace with "_"
  const result = originalWord
    .toUpperCase()
    .split("")
    .map((char) => {
      if (guessedLetterSet.has(char)) {
        return char;
      } else {
        return "__";
      }
    });

  // Return the final masked array
  return result;
}