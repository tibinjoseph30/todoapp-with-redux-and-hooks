import { constants } from "../constants";
import { todos } from "../state/todoStates";

export const todoReducer = (state = todos, action) => {
  let newTodos;
  switch (action.type) {
    case constants.ADD_TODO:
      newTodos = [...state];
      newTodos.push(action.payload);
      return newTodos;
    case constants.DELETE_TODO:
      newTodos = [...state];
      newTodos = newTodos.filter((todo) => todo.id != action.payload);
      return newTodos;
    case constants.UPDATE_TODO:
      newTodos = [...state];
      let index = -1;
      for(let i=0; i<newTodos.length; i++) {
        index++;
        if(newTodos[i].id==action.payload.id) {
          break;
        }
      }
      if (index != -1) {
        newTodos[index] = action.payload;
        return newTodos;
      }
  }
  return state;
};
