// import { useState } from "react";
import useModalDialog from "./hooks/useModalDialog";
import Modal from "./Modal";


export default function ButtonWithModal() {
//   const [isOpen, setIsOpen] = useState(false); 
//   const onClickHandler = () => {
//   setIsOpen(true); 
// }

const { isOpen, open, close } = useModalDialog();

  return (
    <>
      <button style={{ cursor: "pointer" }} onClick={open}>
        Open Modal
      </button>
      {isOpen && <Modal close={close} />}
    </>
  );
}
