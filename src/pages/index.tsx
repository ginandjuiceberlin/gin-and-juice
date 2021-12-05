import Seo from "../components/seo";
import Background from "../components/Background/Background";
import FullscreenContainer from "../components/FullscreenContainer/FullscreenContainer";
import RotatableModel from "../components/RotatableModel/RotatableModel";
import { Suspense, useCallback, useRef, useState } from "react";
import LoadingScreen from "../components/LoadingScreen/LoadingScreen";
import { animated, useTransition } from "react-spring";
import BackgroundAudio from "../components/BackgroundAudio/BackgroundAudio";
import Gif from "../components/Gif/Gif";
import { topBadges, bottomBadges, gifRoot, gif } from "./index.module.css";
import NewsletterForm from "../components/NewsletterForm/NewsletterForm";

const AnimatedLoadingScreen = animated(LoadingScreen);

const IndexPage = () => {
  const videoRef = useRef<HTMLVideoElement>();
  const audioRef = useRef<HTMLAudioElement>();

  const [startedExperience, setStartedExperience] = useState(false);

  const [loadedPercentage, setLoadedPercentage] = useState(0);

  const loadedPercentageHandler = useCallback((percentage) => {
    setLoadedPercentage(percentage);
  }, []);

  const handleStart = useCallback(() => {
    setStartedExperience(true);
    videoRef.current.play();
    audioRef.current.play();
  }, []);

  const transitions = useTransition(!startedExperience, {
    from: { opacity: 1 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
  });

  return (
    <>
      <Background ref={videoRef} />
      <BackgroundAudio ref={audioRef} />
      <Seo title="Home" />
      <FullscreenContainer>
        <div className={topBadges}>
          <Gif src="/gifs/gif.gif" classes={{ gif, root: gifRoot }} />
          <Gif src="/gifs/gif.gif" classes={{ gif, root: gifRoot }} />
          <Gif src="/gifs/gif.gif" classes={{ gif, root: gifRoot }} />
        </div>
        {/* <Suspense fallback={null}> */}
        <RotatableModel getLoadedPercentage={loadedPercentageHandler} />
        {/* </Suspense> */}
        {transitions(
          (props, item) =>
            item && (
              <AnimatedLoadingScreen
                percentage={loadedPercentage}
                onStart={handleStart}
                style={props}
              />
            )
        )}
        <div className={bottomBadges}>
          <Gif src="/gifs/gif.gif" classes={{ gif, root: gifRoot }} />
          <NewsletterForm />
          <Gif src="/gifs/gif.gif" classes={{ gif, root: gifRoot }} />
        </div>
      </FullscreenContainer>
      {/* <p>
      <Link to="/page-2/">Go to page 2</Link> <br />
      <Link to="/using-typescript/">Go to &quot;Using TypeScript&quot;</Link>
    </p> */}
    </>
  );
};

export default IndexPage;
