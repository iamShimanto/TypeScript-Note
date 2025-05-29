import React, { useState } from "react";

const Todos = () => {
  const [todo, setTodo] = useState("");
  const [todoList, setTodoList] = useState<string[]>([]);

  const handleSubmit = () => {
    setTodoList([...todoList, todo]);
    setTodo("");
  };

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTodo(e.target.value);
  };

  return (
    <>
      {/* <input
        type="text"
        placeholder="type todo"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
          /> */}

      <input
        type="text"
        placeholder="type todo"
        value={todo}
        onChange={handleInput}
      />

      <button onClick={handleSubmit}>Add Todo</button>

      <ul>
        {todoList.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </>
  );
};

export default Todos;
