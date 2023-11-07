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

import { useEffect, useRef } from "react";
import './App.css';

function App() {
  const inputRef = useRef();

  useEffect(() => {
    console.log(inputRef);
    inputRef.current.focus();
  },[])

  })

  
  const loginAlert = () => {
    alert(`환영합니다. ${inputRef.current.value}`);
    inputRef.current.focus();
  }
  return(
    <div className="App">
      <header className="App-header">
        <input ref={inputRef} type="text" placeholder="id"/>
        <button onClick={loginAlert}>Login</button>
      </header>
    </div>
  )
}
