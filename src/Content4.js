// import { useState, useReducer, useRef } from "react";

// useState
// 1. Init state : 0
// 2. Actions : Up (state+1) / Down (state-1)

// useReducer
// 1. Init state : 0
// 2. Actions : Up (state+1) / Down (state-1)
// 3. Reducer
// 4. Dispatch

// Init state
// VD1:
// const initState = 0;

// VD2:
// const initState = {
//   job: "",
//   jobs: [],
// };

// Actions
// VD1:
// const UP_ACTION = "up";
// const DOWN_ACTION = "down";

// VD2:
// const SET_JOB = "set_job";
// const ADD_JOB = "add_job";
// const DELETE_JOB = "delete_job";

// const setJob = (payload) => {
//   return {
//     type: SET_JOB,
//     payload,
//   };
// };
// const addJob = (payload) => {
//   return {
//     type: ADD_JOB,
//     payload,
//   };
// };
// const deleteJob = (payload) => {
//   return {
//     type: DELETE_JOB,
//     payload,
//   };
// };

// Reducer
// VD1:
// const reducer = (state, action) => {
//   console.log("reducer running...");
//   switch (action) {
//     case "up":
//       return state + 1;
//     case "down":
//       return state - 1;
//     default:
//       throw new Error("Unexpected action");
//   }
// };

// VD2:
// const reducer = (state, action) => {
//   console.log("Action: ", action);
//   console.log("Prev state: ", state);
//   let newState;
//   switch (action.type) {
//     case SET_JOB:
//       newState = {
//         ...state,
//         job: action.payload,
//       };
//       break;
//     case ADD_JOB:
//       newState = {
//         ...state,
//         jobs: [...state.jobs, action.payload],
//       };
//       break;
//     case DELETE_JOB:
//       const newJobs = [...state.jobs];
//       newJobs.splice(action.payload, 1);
//       newState = {
//         ...state,
//         jobs: newJobs,
//       };
//       break;
//     default:
//       throw new Error("Unexpected action");
//   }
//   console.log("New state: ", newState);
//   return newState;
// };

// Dispatch
// function Content4() {
//   // VD1:
//   // const [number, dispatch] = useReducer(reducer, initState);

//   // VD2:
//   const [state, dispatch] = useReducer(reducer, initState);
//   const { job, jobs } = state;

//   const handleSubmit = () => {
//     dispatch(addJob(job));
//     dispatch(setJob(""));
//     inputRef.current.focus();
//   };

//   const inputRef = useRef();

//   return (
//     // VD1:
//     // <>
//     //   <h1>{number}</h1>
//     //   <button onClick={() => dispatch("up")}>UP</button>
//     //   <button onClick={() => dispatch("down")}>DOWN</button>
//     // </>

//     // VD2:
//     <div style={{ padding: "0 20px" }}>
//       <h3>Todo</h3>
//       <input
//         ref={inputRef}
//         value={job}
//         placeholder="Enter todo..."
//         onChange={(e) => {
//           dispatch(setJob(e.target.value));
//         }}
//       ></input>
//       <button onClick={handleSubmit}>ADD</button>
//       <ul>
//         {jobs.map((job, index) => (
//           <li key={index}>
//             {job}
//             <button onClick={() => dispatch(deleteJob(index))}>Xoá</button>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default Content4;
