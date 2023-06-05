import {
  SET_TODO_INPUT,
  ADD_TODO,
  DELETE_TODO,
  DELETE_ALL_TODO,
  EDIT_TODO,
} from "./constanst";

export const setTodoInput = (payload) => ({
  type: SET_TODO_INPUT,
  payload,
});
export const addTodo = (payload) => ({
  type: ADD_TODO,
  payload,
});
export const deleteTodo = (payload) => ({
  type: DELETE_TODO,
  payload,
});
export const deleteAllTodo = (payload) => ({
  type: DELETE_ALL_TODO,
  payload,
});
export const editTodo = (payload) => ({
  type: EDIT_TODO,
  payload,
});
