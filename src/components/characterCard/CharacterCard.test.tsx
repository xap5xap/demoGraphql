import React from "react";
import { render } from "@testing-library/react";
import CharacterCard from "./CharacterCard";
import { characterData } from "../../testUtils/testData";

describe("Character card", () => {
  it("Should show basic elements", () => {
    const { getByText } = render(<CharacterCard character={characterData} />);
    expect(getByText(characterData.name)).toBeInTheDocument();
    expect(getByText(characterData.status)).toBeInTheDocument();
    expect(getByText(characterData.species)).toBeInTheDocument();
    expect(getByText(characterData.gender)).toBeInTheDocument();
  });
});
