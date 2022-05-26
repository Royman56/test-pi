import React, { useEffect, useState } from "react";
import "./task.css"
import { useForm } from "react-hook-form";
import { Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
const axios = require("axios");

const AddTask = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [priority, setPriority] = useState([]);

  useEffect(() => {
    getPriorities();
  }, []);

  const getPriorities = () => {
    axios
      .get("http://localhost:8800/priorities")
      .then(function (response) {
        setPriority(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const onSubmit = (data) => {
    axios.post("http://localhost:8800/task/create-task", data).then(() => {
      window.location.href = "/";
    });
  };

  return (
    <>
      <div className="main">
        <div className="sub-main">
          <div>
            <div className="imgs"></div>
            <div>
              <h1 className="center">Agregar Tarea</h1>
              <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                  <Form.Control
                    className={
                      errors.name?.type === "required"
                        ? "onErrorField input-task"
                        : "onOKField input-task"
                    }
                    defaultValue=""
                    {...register("information", {
                      required: true,
                      minLength: 5,
                    })}
                    type="text"
                    placeholder="Información de la tarea"
                  />
                  {errors.name?.type === "required" && "Falta este campo"}
                </div>
                {errors.name?.type === "required" && "Falta este campo"}
                <div className="second-input">
                  <Form.Select
                    {...register("priority")}
                    aria-label="Prioridad de la tarea"
                    className="input-task"
                  >
                    {priority.map((el) => (
                      <option value={el.name} key={el._id}>
                        {el.name}
                      </option>
                    ))}
                  </Form.Select>
                </div>

                <div className="task-button">
                  <Button variant="primary" type="submit" className="mrg-button">
                    Agregar
                  </Button>
                  <Link to="/">
                    <Button variant="primary" className="mrg-button">Volver</Button>
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddTask;
