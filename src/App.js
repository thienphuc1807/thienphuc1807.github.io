// import { useState, useCallback } from "react";

// import Content from "./Content";

// import Content2 from "./Content2";

// import Content3 from "./Content3";

// import Content4 from "./Content4";

// import Content5 from "./Content5";

// import Memo from "./Memo";

// import ToDoApp from "./Todo";

// import ThemeApp from "./useContext";

// import { useContext } from "react";
// import { ThemeContext } from "./ThemeContext";
// import Content from "./useContext/content";
// import "./App.css";

// import { useRef } from "react";
// import Video from "./Video";

// import Heading from "./heading/Heading";
// import Paragraph from "./paragraph/Paragraph";
// import GlobalStyle from "./GlobalStyle/GlobalStyle";

// import Button from "./Button/Button";

import { Routes, Route, Link } from "react-router-dom";
import HomePage from "./pages/Home";
import NewsPage from "./pages/News";
import ContactPage from "./pages/Contact";

function App() {
  // VD1
  // const price = [100, 200, 300];
  // const [counter, setCounter] = useState(() => {
  //   const total = price.reduce((acc, cur) => acc + cur);
  //   return total;
  // });

  // const handleIncrease = () => {
  //   setCounter(counter + 1);
  // };

  // const handleDecrease = () => {
  //   setCounter(counter - 1);
  // };

  // const handleIncrease3times = () => {
  //   setCounter((prevState) => prevState + 1);
  //   setCounter((prevState) => prevState + 1);
  //   setCounter((prevState) => prevState + 1);
  // };

  // const handleDecrease3times = () => {
  //   setCounter((prevState) => prevState - 1);
  //   setCounter((prevState) => prevState - 1);
  //   setCounter((prevState) => prevState - 1);
  // };
  // ----------------------------------------------------------
  // VD2
  // const [info, setInfo] = useState({
  //   name: "CiKey",
  //   age: 21,
  //   address: "TpHCM",
  // });

  // const addInfo = () => {
  //   setInfo({ ...info, gender: "Male" });
  //   // setInfo((prevState) => ({ ...prevState, gender: "Male" }));
  // };
  // ----------------------------------------------------------
  // VD3
  // const gifts = ["Shoes", "EarPhone", "Clothes"];

  // const [gift, setGift] = useState();

  // const randomGift = () => {
  //   let index = Math.floor(Math.random() * gifts.length);
  //   setGift(gifts[index]);
  // };

  // ----------------------------------------------------------
  // VD4
  // const [name, setName] = useState("");
  // const [email, setEmail] = useState("");

  // const handleSubmit = () => {
  //   console.log({
  //     name,
  //     email,
  //   });
  // };
  // ----------------------------------------------------------
  // VD5
  // const courses = [
  //   {
  //     id: 1,
  //     name: "HTML CSS",
  //   },
  //   {
  //     id: 2,
  //     name: "JavaScript",
  //   },
  //   {
  //     id: 3,
  //     name: "React",
  //   },
  // ];

  // const [checked, setChecked] = useState([]);

  // const handleCheckBox = (id) => {
  //   setChecked((prev) => {
  //     const isChecked = checked.includes(id);
  //     if (isChecked) {
  //       return checked.filter((item) => item !== id);
  //     } else {
  //       return [...prev, id];
  //     }
  //   });
  // };

  // console.log(checked);
  // ----------------------------------------------------------
  // VD6
  // const [job, setJob] = useState("");
  // const [jobs, setJobs] = useState(() => {
  //   const storageJobs = JSON.parse(localStorage.getItem("jobs"));
  //   if (storageJobs) {
  //     return storageJobs;
  //   } else {
  //     return [];
  //   }
  // });

  // const handleSubmit = () => {
  //   setJobs((prev) => {
  //     const newJob = [...prev, job];
  //     const jsonJobs = JSON.stringify(newJob);
  //     localStorage.setItem("jobs", jsonJobs);
  //     return newJob;
  //   });
  //   setJob("");
  // };

  // const handleDelete = (id) => {
  //   setJobs((prev) => {
  //     const Jobs = [...prev];
  //     Jobs.splice(id, 1);
  //     const jsonJobs = JSON.stringify(Jobs);
  //     localStorage.setItem("jobs", jsonJobs);
  //     return Jobs;
  //   });
  // };

  // const [toggle, setToggle] = useState(false);

  // useCallback
  // const handleIncreases = useCallback(() => {
  //   setCounter((prevCount) => prevCount + 1);
  // }, []);

  // useContext
  // const context = useContext(ThemeContext);

  // const videoRef = useRef();
  // console.log(videoRef);
  // const handlePlay = () => {
  //   videoRef.current.play();
  // };
  // const handlePause = () => {
  //   videoRef.current.pause();
  // };

  return (
    <div className="App">
      {/* <h1>{counter}</h1>
      <button onClick={handleIncrease}>Tăng</button>
      <button onClick={handleDecrease}>Giảm</button>
      <button onClick={handleIncrease3times}>Tăng 3 lần</button>
      <button onClick={handleDecrease3times}>Giảm 3 lần</button> */}

      {/* <h1>{JSON.stringify(info)}</h1>
      <button onClick={addInfo}>Add</button> */}

      {/* 
      <h1>{gift || "Vui lòng nhấn nút để chọn phần thưởng"}</h1>
      <button onClick={randomGift}>Lấy phần thưởng</button> */}

      {/* <h1>{name}</h1>
      <h1>{email}</h1>
      <input onChange={(e) => setName(e.target.value)} />
      <input onChange={(e) => setEmail(e.target.value)} />
      <button onClick={handleSubmit}>Submit</button> */}

      {/* {courses.map((course, index) => {
        return (
          <div key={index}>
            <input
              id={course.name}
              type="checkbox"
              checked={checked.includes(course.id)}
              onChange={() => handleCheckBox(course.id)}

              // type="radio"
              // checked={checked === course.id}
              // onChange={() => setChecked(course.id)}
            />
            <label htmlFor={course.name}>{course.name}</label>
          </div>
        );
      })} */}

      {/* <input value={job} onChange={(e) => setJob(e.target.value)} />
      <button onClick={handleSubmit}>ADD</button>
      <ul>
        {jobs.map((jobitem, index) => (
          <li key={index}>
            {jobitem}
            <button onClick={() => handleDelete(index)}>Delete</button>
          </li>
        ))}
      </ul> */}

      {/* <button onClick={() => setToggle(!toggle)}>Mounted/Unmounted</button>
      {toggle && <Content />} */}

      {/* <Content2 /> */}

      {/* Memo and useCallback */}
      {/* <Memo onIncrease={handleIncreases} /> */}

      {/* <Content3 /> */}

      {/* <Content4 /> */}

      {/* <ToDoApp /> */}

      {/* <ThemeApp /> */}

      {/* <div>
        <button onClick={context.toggleTheme}>Toggle theme</button>
        <Content />
      </div> */}

      {/* <Content5 /> */}

      {/* <div>
        <Video ref={videoRef}></Video>
        <button onClick={handlePlay}>Play</button>
        <button onClick={handlePause}>Pause</button>
      </div> */}

      {/* <GlobalStyle>
        <Heading />
        <Paragraph />
        <div className="d-flex">
          <div>Item 1</div>
          <div>Item 2</div>
        </div>
        <Button />
        <Button danger />
        <Button success />
      </GlobalStyle> */}

      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/news">News</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/news" element={<NewsPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </div>
  );
}

export default App;
