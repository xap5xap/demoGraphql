import { episode1 } from "../../testUtils/testData";
import EpisodeCard from "./EpisodeCard";
import React from "react";

export default {
  title: "Episode Card",
  component: EpisodeCard,
};

export const Normal = () => <EpisodeCard episode={episode1}></EpisodeCard>;
