import React, { useContext } from "react";
import { CursorContext } from "./cursorContext";
import useMousePosition from "./useMousePosition";
const Cursor = () => {
  const { clientX, clientY } = useMousePosition();
  const [cursor, setCursor] = useContext(CursorContext);

  return (
    <div
      style={{
        position: "absolute",
        height: "50px",
        width: "50px",
        border: "2px solid #fff",
        borderRadius: "50%",
        left: clientX + 20,
        top: clientY,
        transform: "translate(-50%, -50%) ",
        zIndex: 101,
        transform: `scale(${cursor.active ? 1.5 : 1})`,
        backgroundColor: `${cursor.active ? "#63fbd7" : "transparent"}`,
        mixBlendMode: "difference",
      }}
    >
      {" "}
    </div>
  );
};
export default Cursor;
