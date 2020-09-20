import React, { FC } from "react";
import { Character } from "../../types/rickAndMortiTypes";

type Props = {
  character: Character;
};

const CharacterCard: FC<Props> = ({ character }) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white">
      <img className="w-full" src={character.image} alt={character.name} />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2 text-teal-700">
          {character.name}
        </div>
        <p className="text-gray-700 text-base">{character.type}</p>
      </div>
      <div className="px-6 pt-4 pb-2">
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          {character.status}
        </span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          {character.species}
        </span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          {character.gender}
        </span>
      </div>
    </div>
  );
};

export default CharacterCard;
