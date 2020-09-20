import React from "react";
import CharacterCard from "../../components/characterCard/CharacterCard";

const Home = () => {
  return (
    <div className="max-w-md mx-auto flex p-6  mt-10 ">
      <div className="ml-6 pt-1">
        <h1 className="text-2xl text-blue-700 leading-tight">
          Tailwind and Create React App
        </h1>
        <div>
          <CharacterCard></CharacterCard>
        </div>
      </div>
    </div>
  );
};

export default Home;
