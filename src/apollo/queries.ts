import { gql } from "@apollo/client";

export const getCharacters = gql`
  query {
    characters {
      results {
        id
        name
        status
        species
        image
        type
        gender
      }
    }
  }
`;

export const getCharacterById = gql`
  query getCharacterById($id: ID!) {
    character(id: $id) {
      name
      image
      status
      species
      gender
      location {
        name
        type
        dimension
      }
      episode {
        id
        name
        episode
        air_date
      }
    }
  }
`;
