import React from "react";
import { render } from "@testing-library/react";
import EpisodeCard from "./EpisodeCard";
import { episode1 } from "../../testUtils/testData";

describe("Episode card", () => {
  it("Should show basic elements", () => {
    const utils = render(<EpisodeCard episode={episode1} />);
    expect(utils.getByText(episode1.name)).toBeInTheDocument();
    expect(utils.getByText(episode1.air_date)).toBeInTheDocument();
    expect(utils.getByText(episode1.episode)).toBeInTheDocument();
  });
});
