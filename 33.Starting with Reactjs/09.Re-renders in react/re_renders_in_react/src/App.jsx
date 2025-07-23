import { useState } from "react";
import SlowComponent from "./SlowComponent";
import "./App.css";
import ButtonWithModal from "./buttonWithModal";
import useModalDialog from "./hooks/useModalDialog";
import Modal from "./Modal";
import RefactorComponent from "./RefactorComponent";

function App() {
  // const [isOpen , setIsOpen] =  useState(false);

  // const onClickHandler = () => {
  //   setIsOpen(true);
  // }

  // const { isOpen, open, close } = useModalDialog();

  

  

  return (
    <>
      <RefactorComponent>
        <>
        <h1>App Component !!!!</h1>
        <p>Something was render</p>
        <p>Something was render</p>
        <SlowComponent />
        {/* <button style={{cursor:"pointer"}} onClick={onClickHandler}>Open Modal</button> */}
        {/* {isOpen && <Modal setIsOpen={setIsOpen} />} */}
        <ButtonWithModal />
        {/* <button onClick={ open}>Open Modal</button> */}
        {/* {isOpen && <Modal close = {close} />}  */}
        </>
      </RefactorComponent>
    </>
  );
}

export default App;
