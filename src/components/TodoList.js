import React from "react";
import {
  Button,
  Input,
  Label,
  ListGroup,
  ListGroupItem,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencilAlt, faTrash } from "@fortawesome/free-solid-svg-icons";
import { useSelector, useDispatch } from "react-redux";
import { deleteTodo } from "../redux/action/todoActions";
import { useState } from "react";

function TodoList() {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();
  const [checked, setChecked] = useState(false);
  const handleClick = () => setChecked(!checked);
  const [modal, setModal] = useState(false);
  const [currentTodo, setCurrentTodo] = useState(null);

  const confirmDelete = () => {
    dispatch(deleteTodo(currentTodo));
    setModal(!modal);
  };

  const toggle = (id) => {
    setCurrentTodo(id);
    setModal(!modal);
  };

  return (
    <div>
      <ListGroup classNameName="list-unstyled">
        {todos.map((todo) => (
          <ListGroupItem key={todo.id}>
            <div className="custom-checkbox">
              <Input
                type="checkbox"
                id={todo.id}
                name=""
                checked={checked[todo.id]}
                onChange={handleClick}
              />
              <Label for={todo.id} className="">
                {todo.title}
              </Label>
            </div>
            <Button
              color="info"
              size="sm"
              className="ml-auto"
              aria-label="Edit"
            >
              <FontAwesomeIcon icon={faPencilAlt} />
            </Button>
            <Button
              color="danger"
              size="sm"
              className="ml-2"
              aria-label="Delete"
              onClick={() => toggle(todo.id)}
            >
              <FontAwesomeIcon icon={faTrash} />
            </Button>
          </ListGroupItem>
        ))}
      </ListGroup>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}></ModalHeader>
        <ModalBody>Delete this ?</ModalBody>
        <ModalFooter>
          <Button color="danger" onClick={confirmDelete}>
            Yes, delete
          </Button>{" "}
          <Button color="secondary" onClick={toggle}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default TodoList;
