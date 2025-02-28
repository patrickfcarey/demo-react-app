import React from 'react';
import { Link } from 'react-router-dom';

function NavBar () {
    const navRoutes = [
        { path: "/", label: "Home" },
        { path: "/about", label: "About" },
        { path: "/contact", label: "Contact"}
    ];

  return (
    <nav>
      <ul>
        {navRoutes.map(route => (
          <li key={route.path}>
            <Link to={route.path}>{route.label}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default NavBar;