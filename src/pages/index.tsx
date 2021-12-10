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
  logoRoot,
  logo,
  mobileTopLinks,
  mobileLogoContainer,
  mobileInstagramContainer,
  mobileSpotifyContainer,
} from "./index.module.css";

const AnimatedLoadingScreen = animated(LoadingScreen);

const IndexPage = () => {
  const videoRef = useRef<HTMLVideoElement>();
  const audioRef = useRef<HTMLAudioElement>();

  const [startedExperience, setStartedExperience] = useState(false);

  const [isLoaded, setIsLoaded] = useState(false);

  const isLoadedHandler = useCallback((loaded) => {
    setIsLoaded(loaded);
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
        <div className={mobileTopLinks}>
          <div className={mobileSpotifyContainer}>
            <a
              href="https://open.spotify.com/playlist/3Fycw2N8Ao1COwSeOKzWhb"
              target="_blank"
              rel="noreferrer"
            >
              <StaticImage
                imgStyle={{ objectFit: "contain" }}
                width={300}
                src="../images/spotify.png"
                alt="spotify"
              />
            </a>
          </div>
          <div className={mainLogoContainer}>
            <Gif
              src="/gifs/ginjuicelogo.gif"
              classes={{ root: logoRoot, gif: logo }}
            />
          </div>
          <div className={mobileInstagramContainer}>
            <a
              href="http://instagram.com/ginandjuice.berlin"
              target="_blank"
              rel="noreferrer"
            >
              <StaticImage
                imgStyle={{ objectFit: "contain" }}
                width={400}
                src="../images/bandana.png"
                alt="spotify"
              />
            </a>
          </div>
        </div>
        <Suspense fallback={null}>
          <RotatableModel getIsLoaded={isLoadedHandler} />
        </Suspense>
        <div className={stickersContainer}>
          <div className={primaryStickersContainer}>
            <div className={mainLogoContainer}>
              <Gif
                src="/gifs/ginjuicelogo.gif"
                classes={{ root: logoRoot, gif: logo }}
              />
            </div>
            <div className={logoAndInstagramContainer}>
              <a href="http://bodega.berlin" target="_blank" rel="noreferrer">
                <StaticImage
                  imgStyle={{ objectFit: "contain" }}
                  width={400}
                  src="../images/bblogo.png"
                  alt="spotify"
                />
              </a>
              <a
                href="http://instagram.com/ginandjuice.berlin"
                target="_blank"
                rel="noreferrer"
              >
                <StaticImage
                  imgStyle={{ objectFit: "contain" }}
                  width={400}
                  src="../images/bandana.png"
                  alt="spotify"
                />
              </a>
            </div>
          </div>
          <div className={secondaryStickersContainer}>
            <div className={newsletterContainer}>
              <NewsletterForm />
            </div>
            <div className={spotifyContainer}>
              <a
                href="https://open.spotify.com/playlist/3Fycw2N8Ao1COwSeOKzWhb"
                target="_blank"
                rel="noreferrer"
              >
                <StaticImage
                  imgStyle={{ objectFit: "contain" }}
                  width={300}
                  src="../images/spotify.png"
                  alt="spotify"
                />
              </a>
            </div>
            <div className={mobileLogoContainer}>
              <a href="http://bodega.berlin" target="_blank" rel="noreferrer">
                <StaticImage
                  imgStyle={{ objectFit: "contain" }}
                  width={400}
                  src="../images/bblogo.png"
                  alt="spotify"
                />
              </a>
            </div>
          </div>
        </div>
        {transitions(
          (props, item) =>
            item && (
              <AnimatedLoadingScreen
                loaded={isLoaded}
                onStart={handleStart}
                style={props}
              />
            )
        )}
      </FullscreenContainer>
    </>
  );
};

export default IndexPage;
