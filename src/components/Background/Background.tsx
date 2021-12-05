import { forwardRef, Ref } from "react";
import { root, video } from "./background.module.css";

const Background = (_, ref?: Ref<HTMLVideoElement>) => {
  return (
    <div className={root}>
      <video ref={ref} className={video} preload="auto" loop muted>
        <source src={"/videos/video.mp4"} type="video/mp4" />
        Your browser does not support HTML5 video.
      </video>
    </div>
  );
};

export default forwardRef(Background);
