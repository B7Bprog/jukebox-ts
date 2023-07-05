import { FC } from "react";

interface CurrentlyPlayingProp {
  currentlyPlaying: string;
}

const CurrentlyPlaying: FC<CurrentlyPlayingProp> = ({
  currentlyPlaying,
}): JSX.Element => {
  return (
    <h2 className="currently-playing">
      {" "}
      Currently Playing: {currentlyPlaying}
    </h2>
  );
};

export default CurrentlyPlaying;
