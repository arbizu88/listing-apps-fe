import axios from "axios";
import React, { useState, useEffect } from "react";

const TodoList = () => {
  const [todo, setTodo] = useState<any>([]);

  const getAllTodos = () => {
    axios.get("/api/todo-list").then((response) => {
      setTodo(response.data);
    });
  };

  useEffect(() => {
    getAllTodos();
  }, []);

  const listItems = todo.map((item: any) => (
    <li key={item.index}>{item.name}</li>
  ));

  return (
    <div>
      <ul>{listItems}</ul>
    </div>
  );
};

export default TodoList;
