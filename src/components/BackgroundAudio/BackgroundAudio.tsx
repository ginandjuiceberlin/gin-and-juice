import { forwardRef, Ref } from "react";
import audio from "../../../static/music/main.mp3";

const BackgroundAudio = (_, ref?: Ref<HTMLAudioElement>) => {
  return (
    <audio ref={ref} loop>
      <source src={audio} type="audio/mpeg" />
    </audio>
  );
};

export default forwardRef(BackgroundAudio);
