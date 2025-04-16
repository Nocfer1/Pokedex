import React, { useEffect, useState} from 'react'
import { useNavigate } from 'react-router-dom'


const typeColors = {
    fire: "#EE8130",
    water: "#6390F0",
    electric: "#F7D02C",
    grass: "#7AC74C",
    ice: "#96D9D6",
    fighting: "#C22E28",
    poison: "#A33EA1",
    ground: "#E2BF65",
    flying: "#A98FF3",
    psychic: "#F95587",
    bug: "#A6B91A",
    rock: "#B6A136",
    ghost: "#735797",
    dragon: "#6F35FC",
    dark: "#705746",
    steel: "#B7B7CE",
    fairy: "#D685AD",
    default: "#A8A77A",
  };

  const PokemonCard = ({ name, url }) => {
    const [pokemon, setPokemon] = useState(null);
    const navigate = useNavigate();
  
    useEffect(() => {
      const fetchPokemonDetails = async () => {
        try {
          const response = await fetch(url);
          const data = await response.json();
          setPokemon(data);
        } catch (error) {
          console.error("Error fetching Pokémon details:", error);
        }
      };
  
      fetchPokemonDetails();
    }, [url]);
  
    if (!pokemon) {
        return <div className="pokemon-card">Loading...</div>;
      }
    
      const typeColors = {
        fire: "#FD7D24",
        water: "#4592C4",
        grass: "#9BCC50",
        electric: "#EED535",
        default: "#A8A878",
      };
    
      const pokemonType = pokemon.types?.[0]?.type?.name || "default";
      const backgroundColor = typeColors[pokemonType] || typeColors.default;
    
      function handleClick() {
        navigate("/pokemon/" + pokemon.id);
      }
    
      return (
        <div
          className="pokemon-card"
          style={{ backgroundColor }}
          onClick={handleClick}
        >
          <div className="pokemon-card-header">
            <p>#{pokemon.id}</p>
            <h5>{pokemon.name}</h5>
          </div>
          <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/${pokemon.id}.gif`}
           alt={pokemon.name}
         />
        </div>
      );
    };
  
  export default PokemonCard;