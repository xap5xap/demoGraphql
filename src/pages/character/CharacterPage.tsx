import { useQuery } from "@apollo/client";
import React, { FC } from "react";
import { Link, useParams } from "react-router-dom";
import { getCharacterById } from "../../apollo/queries";
import CharacterHero from "../../components/characterHero/CharacterHero";
import EpisodeCard from "../../components/episodeCard/EpisodeCard";
import { GetCharacterByIdResponse } from "../../types/rickAndMortiTypes";

type PageParams = {
  id?: string;
};
const CharacterPage: FC = () => {
  const { id } = useParams<PageParams>();
  const { loading, error, data } = useQuery<GetCharacterByIdResponse>(
    getCharacterById,
    {
      skip: id !== undefined && Number.isNaN(parseInt(id)),
      variables: {
        id,
      },
    }
  );

  const renderEpisodes = () => {
    return data?.character.episode?.map((el) => (
      <EpisodeCard key={el.id} episode={el}></EpisodeCard>
    ));
  };

  if (loading) {
    return <div className="flex flex-col items-center ">Loading...</div>;
  }
  if (error) {
    return <div className="flex flex-col items-center ">Error...</div>;
  }
  if (!data) {
    return (
      <div className="flex flex-col items-center ">
        Choose a character to see details{" "}
        <Link className="text-blue-500" to="/">
          Return
        </Link>
      </div>
    );
  }
  return (
    <div>
      <CharacterHero character={data.character}></CharacterHero>
      <div className="flex flex-col p-4">
        <div className="text-4xl mb-4">Episodes:</div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {renderEpisodes()}
        </div>
      </div>
    </div>
  );
};

export default CharacterPage;
