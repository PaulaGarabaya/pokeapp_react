import React, { useState, useContext } from "react";
import { PokemonContext } from "../../../../context/PokemonContext";

const Search = ({ setPokemonList }) => {
  const [inputValue, setInputValue] = useState("");
  const { pokemonList: customPokemonList } = useContext(PokemonContext);

  const handleSearch = async () => {
    if (!inputValue) return;

    // Buscar en los pokémon creados
    const foundCustom = customPokemonList.find(
      (p) => p.name.toLowerCase() === inputValue.toLowerCase()
    );

    if (foundCustom) {
      setPokemonList([foundCustom]);
      setInputValue("");
      return; // NO llamar a la API
    }

    // Si no está, buscar en la API
    try {
      const response = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${inputValue.toLowerCase()}`
      );
      if (!response.ok) throw new Error("Pokémon no encontrado");

      const data = await response.json();

      const formatted = {
        id: data.id,
        name: data.name,
        image: data.sprites.front_default,
        typeOne: data.types[0]?.type.name || "",
        typeTwo: data.types[1]?.type.name || ""
      };

      setPokemonList([formatted]);
      setInputValue("");
    } catch (error) {
      alert("Pokémon no encontrado");
    }
  };

  return (
    <div>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Busca un Pokémon"
      />
      <button onClick={handleSearch}>Buscar</button>
    </div>
  );
};

export default Search;
