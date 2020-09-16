import React, { useState } from "react";
import { Form, Input, Button } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

function TodoForm() {
  const [value, setValue] = useState("");
  const handleChange = (event) => {
    setValue(event.target.value);
    console.log(value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
  };
  return (
    <Form onSubmit={handleSubmit} className="mb-5">
      <div className="d-flex align-items-stretch">
        <Input
          type="text"
          className="form-control"
          placeholder="type todo and hit enter"
          value={value}
          onChange={handleChange}
        />
        <Button
          type="submit"
          color="primary"
          className="ml-2 form_submit"
          aria-label="add todo"
        >
          <FontAwesomeIcon icon={faPlus} className="d-sm-none d-block" />
          <span className="d-sm-block d-none">Add Todo</span>
        </Button>
      </div>
    </Form>
  );
}

export default TodoForm;
