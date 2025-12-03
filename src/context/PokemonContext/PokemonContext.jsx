import { createContext, useState, useEffect } from "react";

export const PokemonContext = createContext();

export const PokemonProvider = ({ children }) => {
  const [pokemonList, setPokemonList] = useState([]);

  // CARGAR desde LocalStorage al iniciar la app
  useEffect(() => {
    const stored = localStorage.getItem("customPokemonList");
    if (stored) {
      setPokemonList(JSON.parse(stored));
    }
  }, []);

  // FUNCIÓN para añadir un Pokémon nuevo
  const addCustomPokemon = (pokemon) => {
    const updatedList = [...pokemonList, pokemon];

    setPokemonList(updatedList);

    // GUARDAR en LocalStorage
    localStorage.setItem("customPokemonList", JSON.stringify(updatedList));
  };

  return (
    <PokemonContext.Provider value={{ pokemonList, addCustomPokemon }}>
      {children}
    </PokemonContext.Provider>
  );
};
