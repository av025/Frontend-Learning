import "./App.css";
import Heading from "./components/Heading";
import InputComponent from "./components/InputComponent";
import useLocalStorage from "./hooks/useLocalStorage";

function App() {
  const [item, setItem] = useLocalStorage("count", 0);

  //? What are custom Hooks ?
  //  Custom hooks are normal re-usable functions which created by User than we called that custom hooks and this custom hooks was created with the help of inbuilt hooks only.
  //* Always create Custom Hooks with useMyCustomHooks

  return (
    <>
      <Heading title={"Writing Custom Hooks in React"} />
      {/* Create counter */}
      <div>{item}</div>
      <button onClick={() => setItem(item + 1)}>Increase</button>
      <button
        onClick={() => {
          if (item > 0) setItem(item - 1);
        }}
      >
        Decrease
      </button>
      <br />
      <InputComponent />
    </>
  );
}

export default App;
