import React from "react";
import { Route, Switch } from "react-router-dom";
import Header from "./components/header/Header";
import Home from "./pages/home/HomePage";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Switch>
        <Route path="/">
          <Home></Home>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
