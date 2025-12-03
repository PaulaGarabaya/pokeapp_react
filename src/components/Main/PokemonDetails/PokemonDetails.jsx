import React, { useEffect, useState } from "react";
import { useParams, useLocation } from "react-router-dom";

const PokemonDetails = () => {
  const { id } = useParams();
  const location = useLocation();
  const [pokemon, setPokemon] = useState(null);

  // Recuperar datos pasados por query params como fallback
  const searchParams = new URLSearchParams(location.search);
  const name = searchParams.get("name");
  const image = searchParams.get("image");
  const typeOne = searchParams.get("typeOne");
  const typeTwo = searchParams.get("typeTwo");

  useEffect(() => {
    const fetchPokemon = async () => {
      try {
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
        if (!res.ok) throw new Error("Pokémon no encontrado");
        const data = await res.json();

        setPokemon({
          id: data.id,
          name: data.name,
          image: data.sprites.front_default,
          typeOne: data.types[0]?.type.name,
          typeTwo: data.types[1]?.type.name || "",
          height: data.height,
          weight: data.weight,
        });
      } catch (error) {
        console.error(error);
        // Usar datos del query params si fetch falla
        setPokemon({
          id,
          name,
          image,
          typeOne,
          typeTwo,
          height: "unknown",
          weight: "unknown",
        });
      }
    };

    fetchPokemon();
  }, [id]);

  if (!pokemon) return <p>Cargando...</p>;

  return (
    <div>
      <h2>{pokemon.name}</h2>
      <img src={pokemon.image} alt={pokemon.name} />
      <p>Tipo 1: {pokemon.typeOne}</p>
      {pokemon.typeTwo && <p>Tipo 2: {pokemon.typeTwo}</p>}
      <p>Altura: {pokemon.height}</p>
      <p>Peso: {pokemon.weight}</p>
    </div>
  );
};

export default PokemonDetails;
