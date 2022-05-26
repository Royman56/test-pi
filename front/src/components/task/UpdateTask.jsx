import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import { Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";

const axios = require("axios").default;

const UpdateTask = () => {
  const {
    setValue,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [priority, setPriority] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    getOneTask();
    getPriorities();
  }, [id]);

  const getOneTask = () =>{
    axios
    .get("http://localhost:8800/task/get-one-task/" + id)
    .then(function (response) {
      let body = response.data;
      onFillBody(body);
    })
    .catch(function (error) {});
  }

  const getPriorities = () =>{
    axios
    .get("http://localhost:8800/priorities")
    .then(function (response) {
      setPriority(response.data);
    })
    .catch(function (error) {
      console.log(error);
    });
  };

  const onFillBody = (body) => {
    setValue("_id", body._id);
    setValue("information", body.information);
    setValue("priority", body.priority);
  };

  const onSubmit = (data) => {
    axios.put("http://localhost:8800/task/update-task", data).then(() => {
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
              <h1 className="center">Editar Tarea</h1>
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
                    Editar
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
}

export default UpdateTask;