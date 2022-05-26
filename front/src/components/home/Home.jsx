import React, { useEffect, useState } from "react";
import { Paper} from "@material-ui/core";
import { Checkbox, Button } from "@material-ui/core";
import { Link } from "react-router-dom";
import "./home.css";
import axios from "axios";
import { Badge } from "react-bootstrap";

const Home = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    findTasks();
  }, []);

  const findTasks = () => {
    axios
      .get("http://localhost:8800/task/get-tasks")
      .then(function (response) {
        setTasks(response.data);
      })
      .catch(function (error) {
        //console.log(error);
      });
  };

  const deleteTask = (id) => {
    return axios
      .delete("http://localhost:8800/task/delete-task/" + id)
      .then(function (response) {
        findTasks();
      })
      .catch(function (error) {
        //console.log(error);
      });
  };

  const onEditStatus = (data) => {
    data.isDone = !data.isDone;
    axios
      .put("http://localhost:8800/task/update-task-status", data)
      .then(() => {
        findTasks();
      });
  };
  return (
    <div className="App flex">
      <Paper elevation={3} className="container">
        <h1>Tareas</h1>
        <Link to="/add">
          <Button
            style={{ height: "40px" }}
            color="primary"
            variant="outlined"
            type="submit"
          >
            Agregar Tarea
          </Button>
        </Link>
        <div>
          {tasks.map((task) => (
            <Paper key={task._id} className="flex task_container">
              <Checkbox
                onChange={() => onEditStatus(task)}
                color="primary"
                checked={task.isDone}
              />
              <div>
                <span className={task.isDone ? "task line_through" : "task"}>
                  {task.information}
                </span>
                <span>
                  {" "}
                  {" "}
                  {task.priority == "Alta" ? (
                    <Badge pill bg="danger" text="light">
                      {task.priority}
                    </Badge>
                  ) : task.priority == "Media" ? (
                    <Badge pill bg="warning" text="dark">
                      {task.priority}
                    </Badge>
                  ) : (
                    <Badge pill bg="primary" text="light">
                      {task.priority}
                    </Badge>
                  )}
                </span>
              </div>
              <Button color="secondary" onClick={() => deleteTask(task._id)}>
                Eliminar
              </Button>
              <Link to={"/update/" + task._id}>
                <Button color="primary">Editar</Button>
              </Link>
            </Paper>
          ))}
        </div>
      </Paper>
    </div>
  );
};

export default Home;
