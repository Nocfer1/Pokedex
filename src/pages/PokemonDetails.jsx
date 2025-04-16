import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Header from '../components/Header';
import Nintendo from '../assets/nintendo3ds.png';
import Pokeball from '../assets/pokeball.png';


function PokemonDetails() {
  const { id } = useParams();
  const url = "https://pokeapi.co/api/v2/pokemon/" + id;
  const [pokemon, setPokemon] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPokemons = async () => {
      try {
        const response = await fetch(url);
        const data = await response.json();
        setPokemon(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching Pokémon:", error);
      }
    };
    fetchPokemons();
  }, [url]);

  if (loading) return <div>Loading...</div>;

  return (
    <>
      <Header />
      <div className="pokemon-container">
        <img src={Nintendo} alt="Nintendo3ds" style={{ width: '100%' }} />

        <img
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/${pokemon.id}.gif`}
          alt={pokemon.name}
          className="pokemon-sprite"
        />

        <div className="pokemon-box pokemon-name">
          <p>{pokemon.name.toUpperCase()}</p>
        </div>

        <div className="pokemon-box pokemon-types">
          <h2>Types:</h2>
          <p>{pokemon.types.map((type) => type.type.name).join(", ")}</p>
        </div>

        <div className="pokemon-box pokemon-exp">
          <h2>Base Exp:</h2>
          <p>{pokemon.base_experience}</p>
        </div>

        <div className="pokemon-box pokemon-size">
          <h2>Size:</h2>
          <p>Height: {pokemon.height}</p>
          <p>Weight: {pokemon.weight}</p>
        </div>

        <div className="pokemon-box pokemon-abilities">
          <h2>Abilities:</h2>
          <p>{pokemon.abilities.map((ability) => ability.ability.name).join(", ")}</p>
        </div>

        <div className="pokemon-box stats-box pokemon-stats">
          <h2>Stats:</h2>
          <ul>
            {pokemon.stats.map((stat) => (
              <li key={stat.stat.name}>{stat.stat.name}: {stat.base_stat}</li>
            ))}
          </ul>
        </div>

        <img className="pokeball shaky" src={Pokeball} alt="Pokeball" />
      </div>
    </>
  );
}

export default PokemonDetails;
