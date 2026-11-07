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

  const linksRow = (className) => (
    <div className={className}>
      {navLinks.map((link) => (
        <Link
          key={link.path}
          to={link.path}
          className={`whitespace-nowrap transition-all duration-500 hover:text-white ${
            location.pathname === link.path ? 'text-white font-bold' : 'text-white/40'
          }`}
        >
          {link.name}
        </Link>
      ))}
    </div>
  );

  const castingButton = (
    <Link
      to="/workshops/register"
      className="glass-panel whitespace-nowrap px-3 py-2 md:px-4 font-mono text-[9px] md:text-[10px] uppercase tracking-widest text-white hover:bg-white hover:text-void transition-all duration-300 text-center"
    >
      Solicitud de Casting
    </Link>
  );

  return (
    <nav className="fixed top-0 w-full z-50 px-4 py-4 md:px-8 md:py-6 pointer-events-none bg-void/80 backdrop-blur-sm border-b border-haze/30">
      <div className="flex items-start justify-between gap-3">
        <div className="pointer-events-auto min-w-0">
          <Link
            to="/"
            className="display-text text-xl md:text-2xl tracking-tight uppercase italic hover:opacity-70 transition-opacity block whitespace-nowrap"
          >
            Dairo <span className="text-silver">&</span> Lis
          </Link>
          <div className="hidden md:block utility-text mt-2 opacity-50">
            Cinema / Theater / Art
          </div>
        </div>

        {/* Escritorio: enlaces y botón apilados a la derecha */}
        <div className="hidden md:flex pointer-events-auto flex-col items-end gap-4">
          {linksRow('utility-text flex items-center gap-5')}
          {castingButton}
        </div>

        {/* Móvil: solo el botón en la fila superior */}
        <div className="md:hidden pointer-events-auto">{castingButton}</div>
      </div>

      {/* Móvil: enlaces en una fila debajo */}
      {linksRow('md:hidden pointer-events-auto utility-text flex justify-between mt-3')}
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
