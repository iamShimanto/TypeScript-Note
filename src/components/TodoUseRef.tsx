import { useRef, useState } from "react";

const TodoUseRef = () => {
    const inputRef = useRef<HTMLInputElement | null>(null);
    const [todolist, setTodolist] = useState<string[]>([])
    
    const handleSubmit = () => {
        // const todo = inputRef.current?.value         // one method
        // if (todo) {
        //     setTodolist([...todolist, todo]);
        // }

        if (inputRef.current) {
            const todo = inputRef.current.value;            // two method
            setTodolist([...todolist, todo])
        }
    }

  return (
    <>
          <input type="text" placeholder="enter todo" ref={inputRef} />
          <button onClick={handleSubmit}>Add</button>

          <ul>
              {
                  todolist.map((item) => (
                      <li key={item}>{item}</li>
                  ))
              }
          </ul>
    </>
  );
};

export default TodoUseRef;
