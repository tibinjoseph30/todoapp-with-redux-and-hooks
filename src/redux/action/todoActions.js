import { constants } from "../constants";

export function addTodo(todo) {
  return {
    type: constants.ADD_TODO,
    payload: todo,
  };
}
export function deleteTodo(todoId) {
  return {
    type: constants.DELETE_TODO,
    payload: todoId,
  };
}
export function updateTodo(todo) {
  return {
    type: constants.UPDATE_TODO,
    payload: todo,
  };
}
