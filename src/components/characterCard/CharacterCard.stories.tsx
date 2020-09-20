import React from "react";
import { characterData } from "../../testUtils/testData";
import CharacterCard from "./CharacterCard";
import "../../tailwind.output.css";

export default {
  title: "Character Card",
  component: CharacterCard,
};

export const Normal = () => (
  <CharacterCard character={characterData}></CharacterCard>
);
