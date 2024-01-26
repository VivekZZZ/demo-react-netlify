import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <h1>Navbar</h1>
      <Link to="/homepage"><button>Go to HomePage</button></Link>
    </div>
  );
};

export default Navbar;
