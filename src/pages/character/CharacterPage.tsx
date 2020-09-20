import React, { FC } from "react";
import { Character } from "../../types/rickAndMortiTypes";

type Props = {
  character: Character;
};
const CharacterPage: FC<Props> = ({ character }) => {
  return (
    <div>
      <h1>{character.name}</h1>
    </div>
  );
};

export default CharacterPage;
