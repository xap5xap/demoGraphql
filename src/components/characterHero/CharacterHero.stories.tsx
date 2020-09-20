import React from "react";
import { characterData } from "../../testUtils/testData";
import CharacterHero from "./CharacterHero";

export default {
  title: "CharacterHero",
  component: CharacterHero,
};

export const Normal = () => (
  <CharacterHero character={characterData}></CharacterHero>
);
