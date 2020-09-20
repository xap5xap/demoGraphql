import { useQuery } from "@apollo/client";
import React from "react";
import { Link } from "react-router-dom";
import { getCharacters } from "../../apollo/queries";
import CharacterCard from "../../components/characterCard/CharacterCard";
import { GetCharactersResponse } from "../../types/rickAndMortiTypes";

const Home = () => {
  const { loading, error, data } = useQuery<GetCharactersResponse>(
    getCharacters
  );

  const renderCharacters = () => {
    return data?.characters.results.map((el, id) => (
      <Link to={`/character/${el.id}`} key={id}>
        <CharacterCard character={el}></CharacterCard>
      </Link>
    ));
  };

  if (loading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>An error ocurred</div>;
  }

  return (
    <div className=" mx-auto flex flex-col p-6  mt-10 ">
      <div className="text-4xl mb-4">Characters:</div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {renderCharacters()}
      </div>
    </div>
  );
};

export default Home;
