import clsx from "clsx";
import { gif } from "./gif.module.css";

type GifImageProps = {
  src: string;
  className?: string;
};

const GifImage = ({ src, className }: GifImageProps) => {
  return <img src={src} className={className} />;
};

type GifProps = Pick<GifImageProps, "src"> & {
  href?: string;
  classes?: Partial<Record<"root" | "gif", string>>;
};

const Gif = ({ src, href, classes }: GifProps) => {
  if (!href) {
    return (
      <div className={classes?.root}>
        <GifImage src={src} className={clsx(gif, classes?.gif)} />
      </div>
    );
  }

  return (
    <a href={href} target="_blank" rel="noreferrer" className={classes?.root}>
      <GifImage src={src} className={classes?.gif} />
    </a>
  );
};

export default Gif;
