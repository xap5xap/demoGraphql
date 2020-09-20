export type Character = {
  id: string;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  image: string;
  created?: string;
};

export type CharacterData = {
  characters: {
    results: Character[];
  };
};
