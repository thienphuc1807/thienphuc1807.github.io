import {
  SET_TODO_INPUT,
  ADD_TODO,
  DELETE_TODO,
  DELETE_ALL_TODO,
  EDIT_TODO,
} from "./constanst";

const initState = {
  todoInput: "",
  todos: [],
};

function reducer(state, action) {
  switch (action.type) {
    case SET_TODO_INPUT:
      return {
        ...state,
        todoInput: action.payload,
      };
    case ADD_TODO:
      return {
        ...state,
        todos: [...state.todos, action.payload],
      };
    case DELETE_TODO:
      const newJobs = [...state.todos];
      newJobs.splice(action.payload, 1);
      return {
        ...state,
        todos: newJobs,
      };
    case DELETE_ALL_TODO:
      const newTodos = [];
      return {
        ...state,
        todos: newTodos,
      };
    case EDIT_TODO:
      const editTodos = [...state.todos];
      editTodos[action.payload] = state.todoInput;
      return {
        ...state,
        todos: editTodos,
      };
    default:
      throw new Error("Invalid action");
  }
}

export { initState };
export default reducer;
