import React from "react";
import { Route, Switch } from "react-router-dom";
import Header from "./components/header/Header";
import CharacterPage from "./pages/character/CharacterPage";
import Home from "./pages/home/HomePage";

function App() {
  return (
    <div className="bg-gray-200">
      <Header></Header>
      <Switch>
        <Route path="/character/:id">
          <CharacterPage></CharacterPage>
        </Route>
        <Route path="/">
          <Home></Home>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
