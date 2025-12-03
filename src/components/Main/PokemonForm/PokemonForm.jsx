import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { PokemonContext } from "../../../context/PokemonContext";

const PokemonForm = () => {
  const { addCustomPokemon } = useContext(PokemonContext);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm();

  const onSubmit = (data) => {
    const formatted = {
      id: Number(data.id),
      name: data.name.toLowerCase(),
      image: data.image,
      typeOne: data.typeOne,
      typeTwo: data.typeTwo
    };

    addCustomPokemon(formatted);   // <-- AQUÍ SE AÑADE
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h2>Crear Pokémon</h2>

      <label>ID</label>
      <input type="number" {...register("id", { required: true })} />
      {errors.id && <p>ID obligatorio</p>}

      <label>Nombre</label>
      <input type="text" {...register("name", { required: true, minLength: 3 })} />
      {errors.name && <p>Nombre mínimo 3 caracteres</p>}

      <label>Imagen (URL)</label>
      <input type="text" {...register("image", { required: true })} />

      <label>Tipo 1</label>
      <select {...register("typeOne", { required: true })}>
        <option value="">Selecciona...</option>
        <option value="fire">Fire</option>
        <option value="water">Water</option>
        <option value="grass">Grass</option>
        <option value="electric">Electric</option>
      </select>

      <label>Tipo 2</label>
      <select {...register("typeTwo")}>
        <option value="">Ninguno</option>
        <option value="fire">Fire</option>
        <option value="water">Water</option>
        <option value="grass">Grass</option>
        <option value="electric">Electric</option>
      </select>

      <button type="submit">Crear</button>
    </form>
  );
};

export default PokemonForm;
