import { useEffect } from "react";

export default function Modal({ close }) {
  useEffect(() => {
    console.log("Component Render on the screen");
  }, []);

  return (
    <div
      style={{
        padding: "20px",
        border: "2px solid black",
        borderRadius: "20px",
        margin: "5px",
        textAlign: "center",
        fontSize: "1.5rem",
        backgroundColor: "crimson",
        color: "#fff",
      }}
    >
      <h3>Modal Open</h3>
      <button style={{ cursor: "pointer" }} onClick={close}>
        Close
      </button>
    </div>
  );
}
