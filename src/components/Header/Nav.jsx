import React from "react";
import {Link} from 'react-router-dom';
import './Nav.css';

export default function Nav() {
  return (
    <div className="bg-nav">
      <nav className="nav-primario contenedor">
        <Link to="/" >Inicio</Link>
        <Link to="/curriculum">Curriculum</Link>
        <Link to="/portafolio">Portafolio</Link>
        <a href="#" disabled>Blog</a>
      </nav>
    </div>
  );
}
