export type Character = {
  id: string;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  image: string;
  created?: string;
  episode?: Episode[];
};

export type Episode = {
  id: string;
  name: string;
  episode: string;
  air_date: string;
};

export type GetCharactersResponse = {
  characters: {
    results: Character[];
  };
};

export type GetCharacterByIdResponse = {
  character: Character;
};
