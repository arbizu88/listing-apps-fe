import axios from "axios";
import React, { useState, useEffect } from "react";
import Card from "../cards/card";
import styled from "styled-components";

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
    <Card key={item.index} data={item} />
  ));

  return (
    <StyledDiv>
      <ul>{listItems}</ul>
    </StyledDiv>
  );
};

const StyledDiv = styled.div``;

export default TodoList;
