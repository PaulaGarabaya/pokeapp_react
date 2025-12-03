import React, { useEffect, useState } from "react";
import Search from "./Search";
import PokemonList from "./PokemonList";
import PokemonForm from "../PokemonForm";

const SearchContainer = () => {
  const [pokemonList, setPokemonList] = useState([]);

  // Cargar Pokémon iniciales
  useEffect(() => {
    const fetchInitial = async () => {
      try {
        const res = await fetch("https://pokeapi.co/api/v2/pokemon?limit=20");
        const data = await res.json();

        const detailed = await Promise.all(
          data.results.map(async (p) => {
            const resDetails = await fetch(p.url);
            const details = await resDetails.json();
            return {
              id: details.id,
              name: details.name,
              image: details.sprites.front_default,
              typeOne: details.types[0]?.type.name,
              typeTwo: details.types[1]?.type.name || "",
            };
          })
        );

        setPokemonList(detailed);
      } catch (error) {
        console.error(error);
      }
    };

    fetchInitial();
  }, []);

  return (
    <div>
      <h1>Pokemon</h1>
      <Search pokemonList={pokemonList} setPokemonList={setPokemonList} />
      <PokemonList pokemons={pokemonList} />
    </div>
  );
};

export default SearchContainer;
