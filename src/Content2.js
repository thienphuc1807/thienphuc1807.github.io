import { useState, useRef, useEffect } from "react";

// useRef lưu các giá trị qua một tham chiếu bên ngoài function component
// Khi phải render lại một function component, giá trị đã lưu sẽ không bị thay đổi, mà vẫn giữ được giá trị đã lưu trước đó.
// useRef luôn trả về một object có property current

function Content2() {
  const [count, setCount] = useState(60);

  let timerID = useRef();
  let prevCount = useRef();
  let h1Ref = useRef();

  useEffect(() => {
    prevCount.current = count;
  }, [count]);

  useEffect(() => {
    const rect = h1Ref.current.getBoundingClientRect();
    console.log(rect);
  });

  const handleStart = () => {
    timerID.current = setInterval(() => {
      setCount((prevState) => prevState - 1);
    }, 1000);
    console.log("Start", timerID.current);
  };

  const handleStop = () => {
    clearInterval(timerID.current);
    console.log("Stop", timerID.current);
  };

  console.log(count, prevCount.current);

  return (
    <div>
      <h1 ref={h1Ref}>{count}</h1>
      <button onClick={handleStart}>Start</button>
      <button onClick={handleStop}>Stop</button>
    </div>
  );
}
export default Content2;
