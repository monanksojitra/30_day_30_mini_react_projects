import React, { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./Day3.css";
const Day3 = () => {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");

  useEffect(() => {
    // Fetch Todo items from local storage on component mount
    const storedTodos = localStorage.getItem("todos");
    if (storedTodos) {
      setTodos(JSON.parse(storedTodos));
    }
  }, []);

  useEffect(() => {
    // Update local storage when the todos state changes
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const handleChange = (e) => {
    setNewTodo(e.target.value);
  };

  const addTodo = () => {
    if (newTodo.trim() !== "") {
      setTodos((prevTodos) => [
        ...prevTodos,
        { id: Date.now(), text: newTodo.trim() },
      ]);
      setNewTodo("");
      // Show toast notification for successful addition
      toast.success("Todo added successfully!");
    }
  };

  const deleteTodo = (id) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };

  return (
    <>
     
      <div className="card text-center w-75 m-auto">
        <div className="input-group w-50 m-auto">
          <div className="form-floating m-3 oneline">
            <input
              type="email"
              id="email-id"
              name="email-id"
              className="input__email m-2"
              placeholder="Add Your Think.."
              required=""
              value={newTodo}
              onChange={handleChange}
            />

            <button className="m-2" onClick={addTodo}>
              Add
            </button>
          </div>
        </div>
        <div className="card-body m-auto">
          {todos.length === 0 ? (
            <p className="empty-list-message">Empty Todo list</p>
          ) : (
            <ul className="list-group">
              {todos.map((todo) => (
                <li
                  className="list-group-item  list-data border mb-1"
                  key={todo.id}
                >
                  <p className="my-2">{todo.text}</p>
                  <a
                    type="butten"
                    className="btnt mt-1"
                    onClick={() => deleteTodo(todo.id)}
                  >
                    <svg
                      viewBox="0 0 15 17.5"
                      height="17.5"
                      width="15"
                      xmlns="http://www.w3.org/2000/svg"
                      className="icon"
                    >
                      <path
                        transform="translate(-2.5 -1.25)"
                        d="M15,18.75H5A1.251,1.251,0,0,1,3.75,17.5V5H2.5V3.75h15V5H16.25V17.5A1.251,1.251,0,0,1,15,18.75ZM5,5V17.5H15V5Zm7.5,10H11.25V7.5H12.5V15ZM8.75,15H7.5V7.5H8.75V15ZM12.5,2.5h-5V1.25h5V2.5Z"
                        id="Fill"
                      ></path>
                    </svg>
                  </a>
                </li>
              ))}
            </ul>
          )}
        </div>
        <div className="card-footer text-muted">Thank You :)</div>
      </div>
    </>
  );
};

export default Day3;
