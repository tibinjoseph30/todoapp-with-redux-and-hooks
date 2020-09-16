import React, { useState } from "react";
import {
  Container,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from "reactstrap";
import TodoForm from "./Todo_form";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faPencilAlt } from "@fortawesome/free-solid-svg-icons";

function TodoList() {
  const [todos, setTodos] = useState([]);
  const [deleteModal, setDeleteModal] = useState(false);

  const toggleDeleteModal = () => setDeleteModal(!deleteModal);
  const addTodo = (newTodos) => {
    setTodos([...todos, newTodos]);
  };
  const removeTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
    setDeleteModal(!deleteModal);
  };

  return (
    <div>
      <main>
        <Container>
          <div className="todo-wrapper mt-5">
            <h2 className="mb-4 text-white">Todos</h2>
            <TodoForm addTodo={addTodo} />
            <ul className="list-unstyled mt-4">
              {todos.map((item, index) => (
                <li key={index}>
                  {item}
                  <Button
                    className="btn btn-link ml-auto"
                    onClick={toggleDeleteModal}
                  >
                    <FontAwesomeIcon icon={faTrash} color="white" />
                  </Button>
                  <Button className="btn btn-link ml-3">
                    <FontAwesomeIcon icon={faPencilAlt} color="white" />
                  </Button>
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </main>
      <Modal isOpen={deleteModal} toggle={toggleDeleteModal}>
        <ModalHeader
          toggle={toggleDeleteModal}
          className="border-0"
        ></ModalHeader>
        <ModalBody>
          <h5>
            Do you want to delete <span className="ml-1"></span>
          </h5>

          <p className="text-muted">
            Are you sure you want to permanently delete the item from your
            todolist. Once you delete an item, it can't be undone.
          </p>
        </ModalBody>
        <ModalFooter className="border-0">
          <Button color="danger" onClick={removeTodo}>
            Delete
          </Button>{" "}
          <Button color="secondary" onClick={toggleDeleteModal}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default TodoList;
