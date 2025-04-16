import React from "react";
import PokemonCard from "./PokemonCard";

function PokemonTable({ pokemon }) {
  return (
    <div className="pokemon-grid">
      {pokemon.map(p => (
        <PokemonCard key={p.name} name={p.name} url={p.url} />
      ))}
    </div>
  )
}

export default PokemonTable;
