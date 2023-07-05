import { SetStateAction, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./components/Header";
import SongsList from "./components/SongsList";
import CurrentlyPlaying from "./components/CurrentlyPlaying";

import { PlayCountsType, Song } from "./types/types";
import PlayCounts from "./components/PlayCounts";
function App() {
  const playListTitle = `Jela's cool playlist`;
  const currentlyPlaying = "I love your smile";

  const [money, setMoney] = useState<number>(0);

  const handleClick = () => {
    setMoney((currentAmount) => {
      return (currentAmount += 1);
    });
  };

  const songs: Song[] = [
    {
      id: 1,
      title: "Dreams",
      artist: "Fleetwood Mac",
      albumCover:
        "https://upload.wikimedia.org/wikipedia/en/f/fb/FMacRumours.PNG",
      previewURL:
        "https://open.spotify.com/embed/track/0ofHAoxe9vBkTCp2UQIavz?utm_source=generator",
    },
    {
      id: 1,
      title: "I love your smile",
      artist: "Shanice",
      albumCover:
        "https://images.squarespace-cdn.com/content/v1/58b1d51c4402430e146fa6a3/1495048378140-S7D65FW2LQSKSI6D3GHB/shanice-i-love-your-smile-radio-version-motown.jpg?format=1500w",
      previewURL:
        "https://open.spotify.com/embed/track/5BE3DOk0C26VCMxxT84bec?utm_source=generator",
    },
    {
      id: 2,
      title: "Don't stop me now",
      artist: "Queen",
      albumCover:
        "https://upload.wikimedia.org/wikipedia/en/9/97/Queen-dont-stop-me-now-1979-6-s.jpg",
      previewURL:
        "https://open.spotify.com/embed/track/5T8EDUDqKcs6OSOwEsfqG7?utm_source=generator",
    },
    {
      id: 3,
      title: "Enter Sandman",
      artist: "Metallica",
      albumCover:
        "https://upload.wikimedia.org/wikipedia/en/2/2c/Metallica_-_Metallica_cover.jpg",
      previewURL:
        "https://open.spotify.com/embed/track/5sICkBXVmaCQk5aISGR3x1?utm_source=generator",
    },
    {
      id: 4,
      title: "Sledgehammer",
      artist: "Peter Gabriel",
      albumCover:
        "https://upload.wikimedia.org/wikipedia/en/c/cf/Sledgehammer_Cover.jpg",
      previewURL:
        "https://open.spotify.com/embed/track/029NqmIySn1kOY305AAhxT?utm_source=generator",
    },
  ];
  const playCounts: PlayCountsType = {
    Dreams: 10,
    "Enter Sandman": 5,
    "Don't stop me now": 8,
    Sledgehammer: 11,
  };
  return (
    <>
      <button onClick={handleClick}>Add 1 pound</button>
      <label>
        <h2>Current amount: £{money}</h2>
      </label>
      <Header playListTitle={playListTitle} />
      <SongsList songs={songs} currentlyPlaying={currentlyPlaying} />
      <PlayCounts playCounts={playCounts} />
    </>
  );
}

export default App;
