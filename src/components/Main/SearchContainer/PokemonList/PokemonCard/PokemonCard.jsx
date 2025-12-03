import React from "react";
import { Link } from "react-router-dom";

const PokemonCard = ({ pokemon }) => {
  return (
    <div style={{
      border: "1px solid #ccc",
      borderRadius: "8px",
      padding: "12px",
      width: "150px",
      textAlign: "center"
    }}>
      <h4>{pokemon.name}</h4>
      <img src={pokemon.image} alt={pokemon.name} style={{ width: "96px", height: "96px" }} />
      <p>Tipo 1: {pokemon.typeOne}</p>
      {pokemon.typeTwo && <p>Tipo 2: {pokemon.typeTwo}</p>}
      <Link to={`/pokemon/${pokemon.id}`}>Ver detalles</Link>
    </div>
  );
};

export default PokemonCard;
