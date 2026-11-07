import React from 'react';
import { Link } from 'react-router-dom';
import dairoProfile from '../assets/dairo/profile.jpg';
import dairoPortfolio1 from '../assets/dairo/portfolio1.jpg';
import dairoPortfolio2 from '../assets/dairo/portfolio2.jpg';
import dairoPortfolio3 from '../assets/dairo/portfolio3.jpg';
import dairoPortfolio4 from '../assets/dairo/portfolio4.jpg';
import dairoPortfolio5 from '../assets/dairo/portfolio5.jpg';
import dairoPortfolio6 from '../assets/dairo/portfolio6.jpg';

const ProjectCard = ({ item, index }) => {
  const variants = [
    "md:col-span-7 mt-0",
    "md:col-span-5 mt-20",
    "md:col-span-6 mt-10 mx-auto"
  ];
  const variant = variants[index % variants.length];

  return (
    <div className={`relative group aspect-[4/5] overflow-hidden bg-velvet cursor-pointer animate-curtain-open ${variant}`}>
      <img
        src={item.image}
        alt={item.title}
        className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000 ease-in-out opacity-60 group-hover:opacity-100"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-void via-transparent to-transparent opacity-80 group-hover:opacity-40 transition-opacity duration-500"></div>
      <div className="absolute bottom-0 left-0 p-8 w-full translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
        <span className="utility-text text-silver mb-2 block opacity-0 group-hover:opacity-100 transition-opacity delay-100">
          {item.role}
        </span>
        <h3 className="display-text text-2xl text-spot group-hover:text-paper transition-colors duration-500">
          {item.title}
        </h3>
      </div>
    </div>
  );
};

const Dairo = () => {
  const projects = [
    { title: "El Silencio del Alma", role: "Director & Dramaturgo", image: dairoPortfolio1 },
    { title: "Sombras Urbanas", role: "Director de Cine", image: dairoPortfolio2 },
    { title: "Eco del Tiempo", role: "Dramaturgo", image: dairoPortfolio3 },
    { title: "Fragmentos", role: "Director de Cine", image: dairoPortfolio4 },
    { title: "Voz Interior", role: "Director de Teatro", image: dairoPortfolio5 },
    { title: "La Última Escena", role: "Dramaturgo", image: dairoPortfolio6 },
  ];

  return (
    <div className="pt-32 px-8 pb-20 animate-curtain-open relative">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16 mb-32 items-start">
          <div className="md:col-span-5 relative">
            <div className="relative group overflow-hidden aspect-[3/4] mb-8 z-10">
              <img
                src={dairoProfile}
                alt="Dairo"
                className="w-full h-full object-cover grayscale group-hover:scale-105 transition-transform duration-1000"
              />
              <div className="absolute inset-0 border-[20px] border-void mix-blend-multiply pointer-events-none"></div>
            </div>
            <h1 className="display-text text-6xl tracking-tighter spotlight-text mb-4 relative z-20 -mt-12 ml-4">Dairo Piñeres</h1>
            <p className="utility-text text-silver opacity-60 relative z-20 ml-4">Director de Cine • Dramaturgo • Docente</p>
          </div>

          <div className="md:col-span-7 space-y-8 md:mt-10">
            <div className="space-y-6 text-xl leading-relaxed font-light text-paper/80 border-l border-white/10 pl-8">
              <p>
                Explorador visual y narrador de historias, Dairo se ha dedicado a la creación de espacios escénicos y cinematográficos que desafían la percepción del espectador. Su trabajo se centra en la intersección entre el drama humano y la experimentación formal.
              </p>
              <p>
                Como docente, busca democratizar las herramientas del teatro, impulsando a nuevos talentos a encontrar su propia voz a través de la acción dramática y la escritura creativa.
              </p>
            </div>
            <Link
              to="/workshops"
              className="inline-block px-8 py-4 glass-panel utility-text text-spot hover:bg-spot hover:text-void transition-all duration-300"
            >
              Consultar Talleres
            </Link>
          </div>
        </div>

        <div className="space-y-12">
          <div className="flex justify-between items-end border-b border-haze pb-6">
            <h2 className="display-text text-4xl tracking-tighter">Obra Seleccionada</h2>
            <span className="utility-text text-silver opacity-50">Cine & Teatro</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            {projects.map((project, index) => (
              <ProjectCard key={index} item={project} index={index} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dairo;
