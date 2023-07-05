import react, { FC, Key } from "react";
import { PlayCountsType } from "../types/types";
interface PlayCountsProp {
  playCounts: PlayCountsType;
}

const PlayCounts: FC<PlayCountsProp> = ({ playCounts }): JSX.Element => {
  return (
    <>
      {Object.entries(playCounts).map((entry) => {
        const entryString = entry.join(": ");
        return <h3 key={entry[0]}>{entryString}</h3>;
      })}
      <h3>
        Total:{" "}
        {Object.entries(playCounts).reduce(
          (acc, entry) => (acc += entry[1]),
          0
        )}
      </h3>
    </>
  );
};

export default PlayCounts;
