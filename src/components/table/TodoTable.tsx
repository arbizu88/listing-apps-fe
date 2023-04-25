import axios from "axios";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleCheck,
  faTrashCan,
  faPencil,
  faCheck,
} from "@fortawesome/free-solid-svg-icons";

const TodoTable = () => {
  const [todo, setTodo] = useState<any>([]);

  const getAllTodos = () => {
    axios.get("/api/todo-list").then((response) => {
      setTodo(response.data);
    });
  };

  const deleteTask = (id: Number) => {
    axios.delete(`/api/todo-list/${id}`).then((response) => {
      console.log(response.status);
      getAllTodos();
    });
  };

  useEffect(() => {
    getAllTodos();
  }, []);

  const listItems = todo.map((item: any) => (
    <tr>
      <td>{item.teamMember}</td>
      <td>{item.task}</td>
      <td>
        <p
          className={item.priority != "HIGH" ? "bg-success" : "bg-danger"}
          style={{ borderRadius: "6px" }}
        >
          {item.priority}
        </p>
      </td>
      <td>
        <FontAwesomeIcon icon={faCheck} style={{ paddingRight: "10px" }} />
        <FontAwesomeIcon
          icon={faTrashCan}
          onClick={() => deleteTask(item.index)}
          style={{}}
        />
      </td>
    </tr>
  ));
  return (
    <CustomDiv>
      <FontAwesomeIcon icon={faCircleCheck} size="2xl" />
      <TitleDiv>Tasks</TitleDiv>
      <table className="table table-hover">
        <thead>
          <tr>
            <th scope="col">Team Member</th>
            <th scope="col">Task</th>
            <th scope="col">Priority</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>{listItems}</tbody>
      </table>
    </CustomDiv>
  );
};

const CustomDiv = styled.div`
  box-shadow: 1px 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  width: 90%;
  border-radius: 20px;
  padding: 40px 16px;
  margin: 10px auto;
  color: #ffffff;
  background-image: linear-gradient(
    to right,
    rgba(126, 64, 246, 1),
    rgba(80, 139, 252, 1)
  );
  background: rgba(24, 24, 16, 0.2);

  .table,
  .table-hover tbody tr:hover {
    color: #ffffff;
  }
`;

const TitleDiv = styled.div`
  font-size: 2em;
  margin: 20px auto;
`;

export default TodoTable;
