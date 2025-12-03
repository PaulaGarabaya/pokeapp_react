import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { PokemonProvider } from "./context/PokemonContext/PokemonContext";
import Nav from "./components/Header/Nav";
import SearchContainer from "./components/Main/SearchContainer";
import PokemonForm from "./components/Main/PokemonForm";
import PokemonDetails from "./components/Main/PokemonDetails";

//import PokemonContext from "./context/PokemonContext";

const App = () => {
  return (
    <PokemonProvider> 
      <Router>
        <Nav /> {/* Navbar visible en todas las rutas */}
        <Routes>
          {/* Página principal */}
          <Route path="/" element={<SearchContainer />} />

          {/* Alta de un nuevo Pokémon */}
          <Route path="/new" element={<PokemonForm />} />

          {/* Detalle de un Pokémon */}
          <Route path="/pokemon/:id" element={<PokemonDetails />} />
        </Routes>
      </Router>
    </PokemonProvider>
  );
};

export default App;
