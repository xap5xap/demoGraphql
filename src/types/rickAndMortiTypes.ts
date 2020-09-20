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

export type GetCharactersResponse = {
  characters: {
    results: Character[];
  };
};

export type GetCharacterByIdResponse = {
  character: Character;
};
