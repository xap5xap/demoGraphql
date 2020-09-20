import React, { FC } from "react";
import { Character } from "../../types/rickAndMortiTypes";
import styles from "./CharacterHero.module.css";

type Props = {
  character: Character;
};

const CharacterHero: FC<Props> = ({ character }) => {
  return (
    <div className={styles.container}>
      <div className="flex flex-col items-center">
        <h2 className="text-6xl">{character.name}</h2>
        <img
          data-testid="image"
          src={character.image}
          alt={character.name}
          className={styles.image}
        />
      </div>
    </div>
  );
};

export default CharacterHero;
