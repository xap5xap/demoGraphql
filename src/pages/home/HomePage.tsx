import { useQuery } from "@apollo/client";
import React from "react";
import { getCharacters } from "../../apollo/queries";
import CharacterCard from "../../components/characterCard/CharacterCard";
import { GetCharactersResponse } from "../../types/rickAndMortiTypes";

const Home = () => {
  const { loading, error, data } = useQuery<GetCharactersResponse>(
    getCharacters
  );

  const renderCharacters = () => {
    return data?.characters.results.map((el, id) => (
      <CharacterCard character={el} key={id}></CharacterCard>
    ));
  };

  if (loading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>An error ocurred</div>;
  }

  return (
    <div className="max-w-md mx-auto flex p-6  mt-10 ">
      <div className="ml-6 pt-1">
        <h1 className="text-2xl text-blue-700 leading-tight">
          Tailwind and Create React App
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {renderCharacters()}
        </div>
      </div>
    </div>
  );
};

export default Home;
