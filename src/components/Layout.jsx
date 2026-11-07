import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Dairo', path: '/dairo' },
    { name: 'Lis', path: '/lis' },
    { name: 'Workshops', path: '/workshops' },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 px-8 py-6 flex justify-between items-start pointer-events-none bg-void/80 backdrop-blur-sm border-b border-haze/30">
      <div className="pointer-events-auto">
        <Link
          to="/"
          className="display-text text-2xl tracking-tight uppercase italic hover:opacity-70 transition-opacity block"
        >
          Dairo <span className="text-silver">&</span> Lis
        </Link>
        <div className="utility-text mt-2 opacity-50">
          Cinema / Theater / Art
        </div>
      </div>

      <div className="pointer-events-auto flex flex-col items-end gap-4">
        <div className="flex items-center justify-end utility-text" style={{ display: 'flex', gap: '20px' }}>
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`transition-all duration-500 hover:text-white ${
                location.pathname === link.path ? 'text-white font-bold' : 'text-white/40'
              }`}
              style={{ marginRight: '20px' }}
            >
              {link.name}
            </Link>
          ))}
        </div>
        <Link
          to="/workshops/register"
          className="glass-panel px-4 py-2 utility-text text-white hover:bg-white hover:text-void transition-all duration-300 text-center"
        >
          Solicitud de Casting
        </Link>
      </div>
    </nav>
  );
};

const Footer = () => {
  return (
    <footer className="py-6 px-8 flex justify-between items-end border-t border-haze opacity-40">
      <div className="utility-text max-w-xs leading-relaxed">
        Designed as a digital stage for the performing arts.
        All rights reserved.
      </div>
      <div className="utility-text">
        &copy; {new Date().getFullYear()} Dairo Piñeres & Lis Bravo
      </div>
    </footer>
  );
};

export { Navbar, Footer };
