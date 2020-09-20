import { Character, Episode } from "../types/rickAndMortiTypes";

export const episode1: Episode = {
  id: "1",
  name: "Pilot",
  episode: "S01E01",
  air_date: "December 2, 2013",
};
export const episode2: Episode = {
  id: "2",
  name: "Lawnmower Dog",
  episode: "S01E02",
  air_date: "December 9, 2013",
};

export const characterData: Character = {
  id: "1",
  name: "Rick Sanchez",
  status: "Alive",
  species: "Human",
  image: "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
  type: "",
  gender: "Male",
  episode: [episode1, episode2],
};
