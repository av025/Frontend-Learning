import { create } from "zustand";

//* If we have to create a store in zustand than we have to import create function from zustand library.

const useWordStore = create((set) => ({
  wordList: [],
  word: "",
  setWordList: (list) => {
    //* Update the state we used set parms which was also take callback function only.
    set((state) => {
        console.log(state); 
        // Whatever we return was new state from this setter function.... 
      return {
        ...state,
        wordList: list,
      };
    });
  },
  setWord: (newWord) => {
    set((state) => {
        return {...state, word: newWord}
    })
  }
}));

//* This create function take the callback and this callback we have set paramter which was also callback function.

export default useWordStore; 