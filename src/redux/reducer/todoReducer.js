import { constants } from "../constants";
import { todos } from "../state/todoStates";

export const todoReducer = (state = todos, action) => {
  switch (action.type) {
    case constants.ADD_TODO:
      break;
    case constants.DELETE_TODO:
      let newTodos = [...state];
      newTodos = newTodos.filter((todo) => todo.id != action.payload);
      return newTodos;
    case constants.UPDATE_TODO:
      break;
  }
  return state;
};
