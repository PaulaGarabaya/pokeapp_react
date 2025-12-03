import React from "react";
import PokemonCard from "./PokemonCard";

const PokemonList = ({ pokemons }) => {
  return (
    <div style={{ display: "flex", flexWrap: "wrap", gap: "16px" }}>
      {pokemons.map((pokemon) => (
        <PokemonCard key={pokemon.id} pokemon={pokemon} />
      ))}
    </div>
  );
};

export default PokemonList;
