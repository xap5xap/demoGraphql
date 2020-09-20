import React from "react";
import { render } from "@testing-library/react";
import CharacterHero from "./CharacterHero";
import { characterData } from "../../testUtils/testData";

describe("Character hero", () => {
  it("Should show basic elements", () => {
    const utils = render(<CharacterHero character={characterData} />);
    expect(utils.getByText(characterData.name)).toBeInTheDocument();
    expect(utils.getByTestId("image")).toBeInTheDocument();
    expect(utils.getByTestId("image")).toHaveAttribute(
      "src",
      characterData.image
    );
  });
});
