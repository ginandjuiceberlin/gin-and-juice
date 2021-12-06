import Seo from "../components/seo";
import Background from "../components/Background/Background";
import FullscreenContainer from "../components/FullscreenContainer/FullscreenContainer";
import RotatableModel from "../components/RotatableModel/RotatableModel";
import { Suspense, useCallback, useRef, useState } from "react";
import LoadingScreen from "../components/LoadingScreen/LoadingScreen";
import { animated, useTransition } from "react-spring";
import BackgroundAudio from "../components/BackgroundAudio/BackgroundAudio";
import Gif from "../components/Gif/Gif";
import NewsletterForm from "../components/NewsletterForm/NewsletterForm";
import { StaticImage } from "gatsby-plugin-image";
import {
  stickersContainer,
  primaryStickersContainer,
  mainLogoContainer,
  logoAndInstagramContainer,
  secondaryStickersContainer,
  newsletterContainer,
  spotifyContainer,
} from "./index.module.css";

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

  // this fixes build errors, code below probably accesses window
  if (typeof window === "undefined") {
    return null;
  }

  return (
    <>
      <Background ref={videoRef} />
      <BackgroundAudio ref={audioRef} />
      <Seo title="Home" />
      <FullscreenContainer>
        <Suspense fallback={null}>
          <RotatableModel getLoadedPercentage={loadedPercentageHandler} />
        </Suspense>
        <div className={stickersContainer}>
          <div className={primaryStickersContainer}>
            <div className={mainLogoContainer}>
              <Gif src="/gifs/gif.gif" />
            </div>
            <div className={logoAndInstagramContainer}>
              <StaticImage
                imgStyle={{ objectFit: "contain" }}
                width={400}
                src="../images/bblogo.png"
                alt="spotify"
              />
              <StaticImage
                imgStyle={{ objectFit: "contain" }}
                width={400}
                src="../images/bandana.png"
                alt="spotify"
              />
            </div>
          </div>
          <div className={secondaryStickersContainer}>
            <div className={newsletterContainer}>
              <NewsletterForm />
            </div>
            <div className={spotifyContainer}>
              <StaticImage
                imgStyle={{ objectFit: "contain" }}
                width={300}
                src="../images/spotify.png"
                alt="spotify"
              />
            </div>
          </div>
        </div>
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
      </FullscreenContainer>
      {/* <p>
      <Link to="/page-2/">Go to page 2</Link> <br />
      <Link to="/using-typescript/">Go to &quot;Using TypeScript&quot;</Link>
    </p> */}
    </>
  );
};

export default IndexPage;
