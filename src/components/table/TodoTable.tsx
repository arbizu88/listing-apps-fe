import axios from "axios";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleCheck,
  faTrashCan,
  faPlusCircle,
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

  const saveTask = (rowData: any) => {
    axios.post("/api/todo-list", rowData).then((response) => {
      console.log(response.status);
      getAllTodos();
    });
  };

  const handleFormSubmit = (event: any) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const rowData = {
      teamMember: formData.get("teamMember"),
      task: formData.get("task"),
      priority: formData.get("priority"),
    };
    saveTask(rowData);
    console.log("Row submitted:", rowData);
  };

  useEffect(() => {
    getAllTodos();
  }, []);

  const listItems = todo.map((item: any) => (
    <tr key={item.index}>
      <td>{item.teamMember}</td>
      <td>{item.task}</td>
      <td>
        <p
          className={
            item.priority.toUpperCase() != "HIGH" ? "bg-success" : "bg-danger"
          }
          style={{ borderRadius: "6px" }}
        >
          {item.priority}
        </p>
      </td>
      <td>
        <button type="button">
          <FontAwesomeIcon icon={faCheck} style={{ paddingRight: "10px" }} />
        </button>
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
      <form onSubmit={handleFormSubmit}>
        <table className="table table-hover">
          <thead>
            <tr>
              <th scope="col">Team Member</th>
              <th scope="col">Task</th>
              <th scope="col">Priority</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>
            {listItems}

            <tr key={"new"}>
              <td>
                <input type="text" name="teamMember" />
              </td>
              <td>
                <input type="text" name="task" />
              </td>
              <td>
                <input type="text" name="priority" />
              </td>
              <td>
                <button type="submit">
                  <FontAwesomeIcon icon={faPlusCircle} size="xl" />
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </form>
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

  button {
    border: none;
    background-color: transparent;
    color: #ffffff;
    outline: none;
  }
`;

const TitleDiv = styled.div`
  font-size: 2em;
  margin: 20px auto;
`;

export default TodoTable;
