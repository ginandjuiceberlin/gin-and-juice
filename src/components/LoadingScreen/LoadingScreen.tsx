import { StaticImage } from "gatsby-plugin-image";
import { forwardRef, Ref } from "react";
import {
  root,
  startAction,
  loadingIndicator,
} from "./loading-screen.module.css";

type LoadingScreenProps = {
  loaded: boolean;
  onStart: () => void;
  style?: Record<string, string | number>;
};

const LoadingScreen = (
  { loaded, onStart, style }: LoadingScreenProps,
  ref?: Ref<HTMLDivElement>
) => {
  return (
    <div className={root} ref={ref} style={style}>
      <StaticImage
        placeholder="none"
        src="../../images/bblogo.png"
        width={300}
        quality={95}
        alt="Gin N Juice logo"
      />
      {loaded ? (
        <button onClick={onStart} className={startAction}>
          Start
        </button>
      ) : (
        <p className={loadingIndicator}>Loading Gin</p>
      )}
    </div>
  );
};

export default forwardRef(LoadingScreen);
