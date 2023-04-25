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

interface Todo {
  teamMember: string;
  task: string;
  priority: string;
  index: number;
  status: string;
}

const initialState = {
  teamMember: "",
  task: "",
  priority: "",
  index: 0,
  status: "",
};

const TodoTable = () => {
  const [todo, setTodo] = useState<Todo[]>([]);
  const [form, setForm] = useState<Todo>(initialState);

  const getAllTodos = () => {
    axios.get("/api/todo-list").then((response) => {
      const data = response.data;
      const filtered = data.filter((item: Todo) => {
        return !item.status;
      });
      setTodo(filtered);
    });
  };

  const deleteTask = (id: number) => {
    axios.delete(`/api/todo-list/${id}`).then((response) => {
      console.log(response.status);
      getAllTodos();
    });
  };

  const saveTask = (rowData: any) => {
    axios.post("/api/todo-list", rowData).then((response) => {
      console.log(response.status);
      getAllTodos();
      setForm(initialState);
    });
  };

  const updateTaskStatus = (id: number) => {
    const data = {
      ...form,
      index: id,
      status: "Completed",
    };

    axios.put("/api/todo-list", data).then((response) => {
      console.log(response.status);
      getAllTodos();
    });
  };

  const handleFormSubmit = (event: any) => {
    event.preventDefault();
    saveTask(form);
    console.log("Row submitted:", form);
  };

  const handleOnChange = (event: any) => {
    const { name, value } = event.target;
    setForm({
      ...form,
      [name]: value,
    });
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
        <button type="button" onClick={() => updateTaskStatus(item.index)}>
          <FontAwesomeIcon icon={faCheck} style={{ paddingRight: "10px" }} />
        </button>
        <button type="button" onClick={() => deleteTask(item.index)}>
          <FontAwesomeIcon icon={faTrashCan} style={{}} />
        </button>
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
                <input
                  type="text"
                  name="teamMember"
                  value={form.teamMember}
                  onChange={handleOnChange}
                />
              </td>
              <td>
                <input
                  type="text"
                  name="task"
                  value={form.task}
                  onChange={handleOnChange}
                />
              </td>
              <td>
                <input
                  type="text"
                  name="priority"
                  value={form.priority}
                  onChange={handleOnChange}
                />
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
