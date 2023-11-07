import React, { useState } from "react";
import TodoTemplate from "./components/TodoTemplate";
import TodoImage from "./components/TodoImage";

const App = () => {
  const [isOpen, setIsOpen] = useState(false);
  const onClickEvent = () => {
    setIsOpen(true);
  };

  return (
    <div>
      {!isOpen ? (
        <TodoImage></TodoImage>
      ) : (
        <TodoTemplate onClickPick={onClickEvent} />
      )}
    </div>
  );
};

export default App;
