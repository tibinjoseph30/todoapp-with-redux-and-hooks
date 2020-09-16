import React from "react";
import { Container } from "reactstrap";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";

function Todos() {
  return (
    <main>
      <Container>
        <div className="todo-wrapper pt-5">
          <h2 className="text-white mb-3">Todos</h2>
          <TodoForm />
          <TodoList />
        </div>
      </Container>
    </main>
  );
}

export default Todos;
