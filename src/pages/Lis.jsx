import React from 'react';
import { Link } from 'react-router-dom';
import lisProfile from '../assets/lis/profile.jpg';
import lisPortfolio1 from '../assets/lis/portfolio1.jpg';
import lisPortfolio2 from '../assets/lis/portfolio2.jpg';
import lisPortfolio3 from '../assets/lis/portfolio3.jpg';
import lisPortfolio4 from '../assets/lis/portfolio4.jpg';
import lisPortfolio5 from '../assets/lis/portfolio5.jpg';
import lisPortfolio6 from '../assets/lis/portfolio6.jpg';

const ProjectCard = ({ item, index }) => {
  const variants = [
    "md:col-span-7 mt-0",
    "md:col-span-5 mt-20",
    "md:col-span-6 mt-10 mx-auto"
  ];
  const variant = variants[index % variants.length];

  return (
    <div className={`relative group aspect-[3/4] overflow-hidden bg-velvet cursor-pointer animate-curtain-open ${variant}`}>
      <img
        src={item.image}
        alt={item.title}
        className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000 ease-in-out opacity-60 group-hover:opacity-100"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-void via-transparent to-transparent opacity-80 group-hover:opacity-40 transition-opacity duration-500"></div>
      <div className="absolute bottom-0 left-0 p-8 w-full translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
        <span className="utility-text text-silver mb-2 block opacity-0 group-hover:opacity-100 transition-opacity delay-100">
          {item.category}
        </span>
        <h3 className="display-text text-2xl text-spot group-hover:text-paper transition-colors duration-500">
          {item.title}
        </h3>
      </div>
    </div>
  );
};

const Lis = () => {
  const portfolio = [
    { title: "Editorial Moda", category: "Modelaje", image: lisPortfolio1 },
    { title: "Escena Dramática", category: "Actuación", image: lisPortfolio2 },
    { title: "Alta Costura", category: "Modelaje", image: lisPortfolio3 },
    { title: "Monólogo", category: "Actuación", image: lisPortfolio4 },
    { title: "Retrato Studio", category: "Modelaje", image: lisPortfolio5 },
    { title: "Teatro Experimental", category: "Actuación", image: lisPortfolio6 },
  ];

  return (
    <div className="pt-32 px-8 pb-20 animate-curtain-open relative">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16 mb-32 items-start">
          <div className="md:col-span-5 relative">
            <div className="relative group overflow-hidden aspect-[3/4] mb-8 z-10">
              <img
                src={lisProfile}
                alt="Lis"
                className="w-full h-full object-cover grayscale group-hover:scale-105 transition-transform duration-1000"
              />
              <div className="absolute inset-0 border-[20px] border-void mix-blend-multiply pointer-events-none"></div>
            </div>
            <h1 className="display-text text-6xl tracking-tighter spotlight-text mb-4 relative z-20 -mt-12 ml-4">Lis Bravo</h1>
            <p className="utility-text text-silver opacity-60 relative z-20 ml-4">Actriz • Modelo • Artista</p>
          </div>

          <div className="md:col-span-7 space-y-8 md:mt-20">
            <div className="space-y-6 text-xl leading-relaxed font-light text-paper/80 border-l border-white/10 pl-8">
              <p>
                Con una presencia versátil y una capacidad innata para la transformación, Lis ha recorrido los escenarios y las pasarelas integrando la disciplina del modelaje con la profundidad de la actuación.
              </p>
              <p>
                Su enfoque profesional se basa en la búsqueda de la autenticidad y la expresión emocional, trabajando en proyectos que desafían los cánones tradicionales de la belleza y la representación escénica.
              </p>
            </div>
          </div>
        </div>

        <div className="space-y-12">
          <div className="flex justify-between items-end border-b border-haze pb-6">
            <h2 className="display-text text-4xl tracking-tighter">Portafolio Visual</h2>
            <span className="utility-text text-silver opacity-50">Modelaje & Actuación</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            {portfolio.map((project, index) => (
              <ProjectCard key={index} item={project} index={index} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Lis;
