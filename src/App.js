import "./App.css";
import React, { useState, useRef } from "react";

function App() {
  const [todos, setTodos] = useState([]);

  const inputRef = useRef();

  const handleAddTodo = () => {
    const text = inputRef.current.value;
    const newItem ={ completed: false, text }
    setTodos([...todos, newItem]);
    inputRef.current.value = "";
  };

  const handleItemDone = (index) => {
    const newTodos = [...todos];
    newTodos[index].completed = !newTodos[index].completed;
    setTodos(newTodos);
  }

  const handleDeleteItem = (index) => {
      const newTodos = [...todos];
      newTodos.splice(index, 1);
      setTodos(newTodos);
  }



  return (
    <div className="main-layout">




      
      <div className="to-do-container">
        <ul>
          {todos.map(({text , completed} , index ) => {
            return    <div className="item" key={index}> 
              <li className= {completed ? "done" : ""} 
              onClick={ () => handleItemDone(index)}>
                {text}
              </li>
              <span className="trash" onClick={  () => handleDeleteItem (index)} > ❌
                </span>
               </div> ;
          })}
        </ul>
        <input ref={inputRef} placeholder="Enter item..." />
        <button onClick={handleAddTodo}>Add</button>
      </div>
      <div className="app-name-section">
        <h1>اللي عليا النهاردة</h1>
        <p className="app-description">سهّل على نفسك وسجّل مهامك اليومي</p>
      </div>
    </div>
  );
}

export default App;
