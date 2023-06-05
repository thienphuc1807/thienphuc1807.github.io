import { useStore, actions } from "./store";
import { useRef, useState } from "react";

function Content5() {
  const [state, dispatch] = useStore();
  const { todos, todoInput } = state;
  const inputRef = useRef();
  const [idEdit, setIdEdit] = useState(0);
  const [isEdit, setIsEdit] = useState(false);
  const handleAdd = () => {
    if (isEdit) {
      dispatch(actions.editTodo(idEdit));
      dispatch(actions.setTodoInput(""));
      inputRef.current.focus();
      setIdEdit(null);
      setIsEdit(false);
    } else {
      dispatch(actions.addTodo(todoInput));
      dispatch(actions.setTodoInput(""));
      inputRef.current.focus();
    }
  };
  const handleDeleteAll = () => {
    dispatch(actions.deleteAllTodo());
  };
  const handleEdit = (index) => {
    setIdEdit(index);
    inputRef.current.focus();
    dispatch(actions.setTodoInput(todos[index]));
    setIsEdit(true);
  };
  return (
    <div>
      <input
        ref={inputRef}
        value={todoInput}
        placeholder="Enter todo..."
        onChange={(e) => {
          dispatch(actions.setTodoInput(e.target.value));
        }}
      />
      <button onClick={handleAdd}>{isEdit ? "UPDATE" : "ADD"}</button>
      <button onClick={handleDeleteAll}>DeleteAll</button>
      {todos.map((todo, index) => (
        <div key={index} style={{ display: "flex" }}>
          <li>{todo}</li>
          <button onClick={() => dispatch(actions.deleteTodo(index))}>
            Delete
          </button>
          <button onClick={() => handleEdit(index)}>Edit</button>
        </div>
      ))}
    </div>
  );
}

export default Content5;
