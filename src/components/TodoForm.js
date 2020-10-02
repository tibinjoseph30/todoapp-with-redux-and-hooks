import React, { useState } from "react";
import { Form, Input, Button, Alert } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { v1 as uuid } from "uuid";
import { useDispatch } from "react-redux";
import { addTodo } from "../redux/action/todoActions";

function TodoForm() {
  const [value, setValue] = useState("");
  const [warning, setWarning] = useState("");
  const dispatch = useDispatch();
  const handleChange = (event) => {
    setValue(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    if (value === "") {
      setWarning("Please type a todo name first!");
      return;
    }
    else{
      setWarning("");
    }
    dispatch(
      addTodo({
        id: uuid(),
        title: value,
      })
    );
    setValue("");
  };
  return (
    <div>
      <Form onSubmit={handleSubmit} className="mb-5">
        <div className="search-panel d-flex align-items-stretch">
          <Input
            type="text"
            placeholder="type todo and hit enter"
            value={value}
            onChange={handleChange}
          />
          <Button
            type="submit"
            color="primary"
            className="ml-2 form_submit"
            aria-label="add todo"
            onClick={handleSubmit}
          >
            <FontAwesomeIcon icon={faPlus} className="d-sm-none d-block" />
            <span className="d-sm-block d-none">Add Todo</span>
          </Button>
        </div>
      </Form>
      {warning && (
        <Alert color="warning">
          {warning}
        </Alert>
      )}
    </div>
  );
}

export default TodoForm;
