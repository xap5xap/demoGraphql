import { useQuery } from "@apollo/client";
import React, { FC } from "react";
import { Link, useParams } from "react-router-dom";
import { getCharacterById } from "../../apollo/queries";
import CharacterHero from "../../components/characterHero/CharacterHero";
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
    </div>
  );
};

export default CharacterPage;
