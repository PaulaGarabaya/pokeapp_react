import React, { useContext } from "react";
import { useNavigate } from 'react-router-dom';
import Nav from "./Nav";
import { UserContext } from "../../context/UserContext";

const Header = () => {
  const { username, updateUsername } = useContext(UserContext);
  const navigate = useNavigate();

  const handleClick = () => navigate("/");

  return (
    <header className='header-day'>
      <Nav />
      {username ? (
        <>
          <span>Hola, {username}</span>
          <button onClick={() => updateUsername("")}>Logout</button>
        </>
      ) : (
        <button onClick={handleClick}>Login</button>
      )}
    </header>
  );
};

export default Header;
