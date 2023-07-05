import { FC } from "react";
import { Song } from "../types/types";
interface SongsProp {
  songs: Song[];
}

const SongsList: FC<SongsProp> = ({ songs }) => {
  return (
    <>
      {songs.map((song) => {
        return <h3 key={song.title}>{song.title}</h3>;
      })}
    </>
  );
};

export default SongsList;
