import React from 'react';
import { Link } from 'react-router-dom';
import inicioImage from '../assets/inicio.jpeg';

const Home = () => {
  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-void flex flex-col justify-center px-8 animate-curtain-open">
      {/* Cinematic Background - Asymmetric spotlight effect */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute -right-20 -top-20 w-2/3 h-full opacity-40 grayscale animate-slow-pan">
          <img
            src={inicioImage}
            alt="Cinematic backdrop"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-void via-void/80 to-transparent"></div>
      </div>

      {/* Thesis Section */}
      <div className="relative z-10 max-w-5xl">
        <div className="flex flex-col gap-4 mb-12">
          <span className="utility-text text-silver opacity-60">Acto I. La Presentación</span>
          <h1 className="display-text text-6xl md:text-9xl leading-tight tracking-tighter spotlight-text">
            Dos artistas.<br />
            <span className="italic text-silver">Un escenario.</span>
          </h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-end">
          <div className="md:col-span-6 max-w-md">
            <p className="text-lg md:text-xl leading-relaxed text-paper/80 font-light">
              Una intersección curada entre cine, teatro y modelaje.
              Explorando la tensión entre la visibilidad del foco
              y la intimidad de la sombra.
            </p>
          </div>

          <div className="md:col-span-6 flex justify-end">
            <div className="flex flex-col gap-6">
              <Link
                to="/dairo"
                className="group flex items-center gap-4 utility-text hover:text-spot transition-colors"
              >
                <span className="w-8 h-[1px] bg-silver group-hover:bg-spot transition-colors"></span>
                Dairo Piñeres
              </Link>
              <Link
                to="/lis"
                className="group flex items-center gap-4 utility-text hover:text-spot transition-colors"
              >
                <span className="w-8 h-[1px] bg-silver group-hover:bg-spot transition-colors"></span>
                Lis Bravo
              </Link>
              <Link
                to="/workshops"
                className="group flex items-center gap-4 utility-text hover:text-spot transition-colors"
              >
                <span className="w-8 h-[1px] bg-silver group-hover:bg-spot transition-colors"></span>
                Los Talleres
              </Link>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Home;
