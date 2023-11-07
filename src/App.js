// import React, { useState } from "react";
// import TodoTemplate from "./components/TodoTemplate";
// import TodoImage from "./components/TodoImage";

// const App = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const onClickEvent = () => {
//     setIsOpen(true);
//   };

//   return (
//     <div>
//       {isOpen ? (
//         <TodoImage></TodoImage>
//       ) : (
//         <TodoTemplate onClickPick={onClickEvent} />
//       )}
//     </div>
//   );
// };

// export default App;

import { useState, useRef } from "react";
import "./App.css";

function App() {
  const [render, setRender] = useState(false);
  const countRef = useRef(0);
  let countVar = 0;

  console.log("***** 렌더링 후 Ref:", countRef.current);
  console.log("***** 렌더링 후 Var:", countVar);

  const increaseRef = () => {
    countRef.current = countRef.current + 1;
    console.log("Ref Up! --->", countRef.current);
  };

  const increaseVar = () => {
    countVar = countVar + 1;
    console.log("Var Up! --->", countVar);
  };

  const doRender = () => {
    setRender(!render);
  };
  return (
    <div className="App">
      <header className="App-header">
        <p>Ref: {countRef.current}</p>
        <p>Var: {countVar}</p>

        <div>
          <button onClick={increaseRef}>Ref Up!</button>
          <button onClick={increaseVar}>Var Up!</button>
          <button onClick={doRender}>Render !</button>
        </div>
      </header>
    </div>
  );
}

export default App;
