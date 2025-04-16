import "./App.css";
import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import HomePage from "./pages/HomePage";
import PokemonDetails from "./pages/PokemonDetails";


function App() {
  return (
    <>
      <BrowserRouter basename="/Pokedex">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="pokemon/:id" element={<PokemonDetails />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;