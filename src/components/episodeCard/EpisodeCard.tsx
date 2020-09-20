import React, { FC } from "react";
import { Episode } from "../../types/rickAndMortiTypes";

type Props = { episode: Episode };

const EpisodeCard: FC<Props> = ({ episode }) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg p-3 bg-white">
      <div className="text-xl text-teal-700">{episode.name}</div>
      <div className="flex flex-row mt-4">
        <div className="mr-8 text-yellow-700">{episode.episode}</div>
        <div>{episode.air_date}</div>
      </div>
    </div>
  );
};

export default EpisodeCard;
