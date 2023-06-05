import { useEffect, useLayoutEffect, useState } from "react";

// Events : Add / remove event listener
// Observer pattern: Subscribe / unsubscribe
// Closure
// Timers : setInterval, setTimeout, clearInterval, clearTimeout
// useState
// Mounted / unmounted
// ===
// Call API

/**
 * 1.Update DOM
 * 2.Call API
 * 3.Listen DOM events
 * 4.Cleanup
 */

// Callback luôn được gọi sau khi component mounted
// Cleanup function luôn được gọi trước khi component unmounted
// Cleanup function luôn được gọi trước khi callback được gọi (trừ lần mounted)

// useEffect(callback)
// Gọi callback mỗi khi component re-render
// Gọi callback sau khi component thêm element vào DOM

// useEffect(callback,[])
// Chỉ gọi callback 1 lần sau khi component mounted

// useEffect(callback,[dependencies])
// callback sẽ được gọi lại mỗi khi dependencies thay đổi

function Content() {
  // const tabs = ["posts", "comments", "albums"];
  // const [title, setTitle] = useState("");
  // const [posts, setPosts] = useState([]);
  // const [type, setType] = useState("posts");
  // const [gototop, setGototop] = useState(false);
  // const [width, setWidth] = useState(window.innerWidth);
  // const [countdown, setCountdown] = useState(180);
  // const [avatar, setAvatar] = useState();
  // const lessons = [
  //   {
  //     id: 1,
  //     name: "HTML and CSS",
  //   },
  //   {
  //     id: 2,
  //     name: "Javascript",
  //   },
  //   {
  //     id: 3,
  //     name: "ReactJS",
  //   },
  // ];
  // const [lesson1, setLesson] = useState(1);

  // Update DOM
  //   useEffect(() => {
  //     document.title = title;
  //   });

  // Call API
  // useEffect(() => {
  //   fetch("https://jsonplaceholder.typicode.com/posts")
  //     .then((res) => res.json())
  //     .then((posts) => setPosts(posts));
  // }, []);

  // Call API with Dependencies
  // useEffect(() => {
  //   fetch(`https://jsonplaceholder.typicode.com/${type}`)
  //     .then((res) => res.json())
  //     .then((posts) => setPosts(posts));
  // }, [type]);

  // Listen DOM events and Cleanup function
  // useEffect(() => {
  //   const handleScroll = () => {
  //     setGototop(window.scrollY >= 200);
  //   };
  //   window.addEventListener("scroll", handleScroll);
  //   console.log("addEventListener");
  //   // Cleanup function (React 18.2 không cần cleanup function nhưng vẫn nên thêm để tránh rò rỉ ngầm)
  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //     console.log("removeEventListener");
  //   };
  // }, []);

  // useEffect(() => {
  //   const handleResize = () => {
  //     setWidth(window.innerWidth);
  //   };
  //   window.addEventListener("resize", handleResize);
  //   return () => {
  //     window.removeEventListener("resize", handleResize);
  //   };
  // }, []);

  // useEffect(() => {
  //   let time = setInterval(() => {
  //     setCountdown((prev) => prev - 1);
  //   }, 1000);
  //   return () => {
  //     clearInterval(time);
  //   };
  // }, []);

  // useEffect(() => {
  //   return () => {
  //     avatar && URL.revokeObjectURL(avatar.preview);
  //   };
  // }, [avatar]);
  // const handlePreviewAvatar = (e) => {
  //   const file = e.target.files[0];
  //   file.preview = URL.createObjectURL(file);
  //   setAvatar(file);
  // };

  // useEffect(() => {
  //   const handleComment = ({ detail }) => {
  //     console.log(detail);
  //   };
  //   window.addEventListener(`lesson-${lesson1}`, handleComment);
  //   return () => {
  //     window.removeEventListener(`lesson-${lesson1}`, handleComment);
  //   };
  // }, [lesson1]);

  /**
   * useEffect
   * 1.Cập nhật lại state
   * 2.Cập nhật lại DOM
   * 3.Render lại UI
   * 4.Gọi cleanup nếu dependencies thay đổi
   * 5.Gọi useEffect callback
   */

  /**
   * useLayoutEffect
   * 1.Cập nhật lại state
   * 2.Cập nhật DOM (mutated)
   * 3.Gọi cleanup nếu dependencies thay đổi (sync)
   * 4.Gọi useLayoutEffect callback (sync)
   * 5.Render lại UI
   */

  const [countNumber, setCountNumber] = useState(0);

  // useEffect(() => {
  //   if (countNumber > 3) {
  //     setCountNumber(0);
  //   }
  // }, [countNumber]);

  useLayoutEffect(() => {
    if (countNumber > 3) {
      setCountNumber(0);
    }
  }, [countNumber]);

  const handleCount = () => {
    setCountNumber(countNumber + 1);
  };

  return (
    <div>
      {/* <input
        onChange={(e) => {
          setTitle(e.target.value);
        }}
      /> */}

      {/* {tabs.map((tab) => (
        <button
          onClick={() => setType(tab)}
          key={tab}
          style={type === tab ? { color: "#fff", backgroundColor: "#333" } : {}}
        >
          {tab}
        </button>
      ))} */}

      {/* <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.title || post.name}</li>
        ))}
      </ul> */}

      {/* {gototop && (
        <button style={{ position: "fixed", right: 20, bottom: 20 }}>
          Go to top page
        </button>
      )} */}

      {/* <h1>{width}</h1> */}

      {/* <h1>{countdown}</h1> */}

      {/* <input type="file" onChange={handlePreviewAvatar}></input>
      {avatar && <img src={avatar.preview} alt="" width="80%" />} */}

      {/* <ul>
        {lessons.map((lesson) => {
          return (
            <li
              key={lesson.id}
              onClick={() => setLesson(lesson.id)}
              style={lesson1 === lesson.id ? { color: "red" } : {}}
            >
              {lesson.name}
            </li>
          );
        })}
      </ul> */}

      <h1>{countNumber}</h1>
      <button onClick={handleCount}>Count</button>
    </div>
  );
}

export default Content;
