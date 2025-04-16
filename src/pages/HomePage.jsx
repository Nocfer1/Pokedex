import { useEffect, useState } from "react";
import PokemonTable from "../components/PokemonTable";
import Pagination from "../components/Pagination";
import Header from "../components/Header";

function HomePage() {
  const [pokemon, setPokemon] = useState([]);
  const [currentPageUrl, setCurrentPageUrl] = useState("https://pokeapi.co/api/v2/pokemon?limit=16&offset=0");
  const [nextPageUrl, setNextPageUrl] = useState();
  const [prevPageUrl, setPrevPageUrl] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPokemons = async () => {
      try {
        const response = await fetch(currentPageUrl);
        const data = await response.json();
        setPokemon(data.results);
        setNextPageUrl(data.next);
        setPrevPageUrl(data.previous);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching Pokémon:", error);
      }
    };

    fetchPokemons();
  }, [currentPageUrl]);

  function goToPrevPage() {
    setCurrentPageUrl(prevPageUrl)
  }

  function goToNextPage() {
    setCurrentPageUrl(nextPageUrl)
  }


  if (loading) return <div>Loading...</div>;

  return (
    <>
      <Header/>
      <PokemonTable pokemon={pokemon} />
      <Pagination
        goToNextPage={nextPageUrl ? goToNextPage : null}
        goToPrevPage={prevPageUrl ? goToPrevPage : null}
      />
    </> 
  );
}

export default HomePage;
