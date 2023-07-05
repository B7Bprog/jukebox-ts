import { FC } from "react";
import { Song } from "../types/types";
import styles from "../styles/SongsList.module.css";
import CurrentlyPlaying from "./CurrentlyPlaying";
interface SongsProp {
  songs: Song[];
  currentlyPlaying: string;
}

const SongsList: FC<SongsProp> = ({ songs, currentlyPlaying }) => {
  return (
    <div>
      <CurrentlyPlaying currentlyPlaying={currentlyPlaying} />
      <ol id={styles.orderedList}>
        {songs.map((song) => {
          return (
            <li
              key={song.title}
              className={
                currentlyPlaying === song.title
                  ? styles.currentSong
                  : styles.songList
              }
            >
              <h3 key={song.title}>{song.title}</h3>
              <h2>{song.artist}</h2>
              <img
                className={styles.songImg}
                alt={song.title}
                src={song.albumCover}
              ></img>
              <iframe title={song.title} src={song.previewURL}></iframe>
            </li>
          );
        })}
      </ol>
    </div>
  );
};

export default SongsList;
