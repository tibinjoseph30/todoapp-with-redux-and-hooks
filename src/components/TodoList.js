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
  const [deleteModal, setDeleteModal] = useState(false);
  const [editModal, setEditModal] = useState(false);
  const [currentTodo, setCurrentTodo] = useState([]);

  const confirmDelete = () => {
    dispatch(deleteTodo(currentTodo.id));
    setDeleteModal(!deleteModal);
  };

  const toggleDeleteModal = (todo) => {
    setCurrentTodo(todo);
    setDeleteModal(!deleteModal);
  };
  const toggleEditModal = (todo) => {
    setCurrentTodo(todo);
    setEditModal(!editModal);
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
              color="primary"
              size="sm"
              className="ml-auto"
              aria-label="Edit"
              onClick={() => toggleEditModal(todo)}
            >
              <FontAwesomeIcon icon={faPencilAlt} />
            </Button>
            <Button
              color="danger"
              size="sm"
              className="ml-2"
              aria-label="Delete"
              onClick={() => toggleDeleteModal(todo)}
            >
              <FontAwesomeIcon icon={faTrash} />
            </Button>
          </ListGroupItem>
        ))}
      </ListGroup>
      <Modal
        isOpen={deleteModal}
        fade={false}
        toggle={toggleDeleteModal}
        centered
      >
        <ModalHeader className="border-0">
          <h5>
            Delete <span className="text-danger">{currentTodo.title}</span> ?
          </h5>
        </ModalHeader>
        <ModalBody>
          <p className="text-muted">
            Are you sure you want to delete this todo?. this can't be restore.
          </p>
        </ModalBody>
        <ModalFooter className="border-0">
          <Button type="button" color="danger" onClick={confirmDelete}>
            Yes, delete it
          </Button>{" "}
          <Button
            type="button"
            color="outline-secondary"
            onClick={toggleDeleteModal}
          >
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
      <Modal isOpen={editModal} toggle={toggleEditModal} centered>
        <ModalHeader className="border-0">
          <h5>Edit Todo</h5>
        </ModalHeader>
        <ModalBody>
          <Input type="text" value={currentTodo.title}></Input>
        </ModalBody>
        <ModalFooter className="border-0">
          <Button type="button" color="primary">
            Update
          </Button>{" "}
          <Button
            type="button"
            color="outline-secondary"
            onClick={toggleEditModal}
          >
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default TodoList;
