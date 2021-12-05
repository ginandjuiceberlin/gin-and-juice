import { ReactNode } from "react";
import { root } from "./fullscreen-container.module.css";

type FullscreenContainerProps = {
  children: ReactNode;
};

const FullscreenContainer = ({ children }: FullscreenContainerProps) => {
  return <div className={root}>{children}</div>;
};

export default FullscreenContainer;
