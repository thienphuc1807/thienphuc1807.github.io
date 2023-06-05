import { forwardRef, useImperativeHandle, useRef } from "react";
// useImperativeHandle dùng để tuỳ chỉnh 'ref' của một function component
import video1 from "./videos/video1.mp4";

function Video(props, ref) {
  console.log(ref);
  const videoRef = useRef();
  useImperativeHandle(ref, () => ({
    play() {
      videoRef.current.play();
    },
    pause() {
      videoRef.current.pause();
    },
  }));
  return (
    <video
      //   ref={ref}
      ref={videoRef}
      src={video1}
      style={{ width: "300px" }}
    ></video>
  );
}

export default forwardRef(Video);
