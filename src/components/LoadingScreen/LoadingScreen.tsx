import { StaticImage } from "gatsby-plugin-image";
import { forwardRef, Ref } from "react";
import {
  root,
  startAction,
  loadingIndicator,
} from "./loading-screen.module.css";

type LoadingScreenProps = {
  percentage: number;
  onStart: () => void;
  style?: Record<string, string | number>;
};

const LoadingScreen = (
  { percentage, onStart, style }: LoadingScreenProps,
  ref?: Ref<HTMLDivElement>
) => {
  const loaded = percentage === 100;

  return (
    <div className={root} ref={ref} style={style}>
      <StaticImage
        src="../../images/gatsby-icon.png"
        width={300}
        quality={95}
        alt="Gin N Juice logo"
      />
      {loaded ? (
        <button onClick={onStart} className={startAction}>
          START
        </button>
      ) : (
        <p className={loadingIndicator}>{percentage}</p>
      )}
    </div>
  );
};

export default forwardRef(LoadingScreen);
