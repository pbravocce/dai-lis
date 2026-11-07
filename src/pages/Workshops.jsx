import React from 'react';
import { Link } from 'react-router-dom';

const WorkshopCard = ({ workshop }) => {
  return (
    <div className="group relative p-12 border-b border-haze hover:border-silver transition-all duration-1000 bg-transparent grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
      <div className="md:col-span-7">
        <div className="overflow-hidden">
          <h3 className="display-text text-4xl tracking-tighter transition-transform duration-700 group-hover:translate-x-4 cursor-default">
            {workshop.title}
          </h3>
        </div>
        <p className="text-paper/60 mt-6 leading-relaxed font-light max-w-xl transition-opacity duration-500 group-hover:opacity-100 opacity-70">
          {workshop.description}
        </p>
      </div>

      <div className="md:col-span-5 flex flex-col md:items-end gap-6">
        <div className="flex flex-col items-end gap-2">
          <span className="utility-text text-silver">{workshop.date}</span>
          <span className="utility-text text-spot">{workshop.price}</span>
        </div>
        <Link
          to={`/workshops/register?id=${workshop.id}`}
          className="group/link flex items-center gap-4 utility-text hover:text-spot transition-colors"
        >
          Inscribirse ahora
          <span className="w-6 h-[1px] bg-silver group-hover/link:w-10 transition-all duration-500"></span>
        </Link>
      </div>
    </div>
  );
};

const Workshops = () => {
  const workshops = [
    {
      id: 1,
      title: "Actuación para Cine",
      date: "Inicia Octubre 2026",
      price: "$120 / mes",
      description: "Un taller intensivo enfocado en la sutileza del lenguaje cinematográfico, el manejo de la cámara y la construcción de personajes internos."
    },
    {
      id: 2,
      title: "Escritura Dramatúrgica",
      date: "Sábados - 10:00 AM",
      price: "$90 / mes",
      description: "Desde la estructura básica hasta la experimentación vanguardista. Aprende a construir mundos y conflictos que cautiven al espectador."
    },
    {
      id: 3,
      title: "Introducción al Teatro",
      date: "Cupos Limitados",
      price: "$80 / mes",
      description: "Para quienes desean descubrir el escenario. Exploramos la expresión corporal, la voz y la improvisación desde cero."
    }
  ];

  return (
    <div className="pt-32 px-8 max-w-6xl mx-auto pb-32 animate-curtain-open">
      <div className="mb-32 flex flex-col md:flex-row md:justify-between md:items-end gap-8">
        <div className="max-w-2xl">
          <h1 className="display-text text-7xl md:text-9xl tracking-tighter spotlight-text mb-8">Talleres</h1>
          <p className="text-xl leading-relaxed text-paper/60 font-light">
            Formación artística dirigida por Dairo Piñeres. <br />
            Espacios de aprendizaje, experimentación y crecimiento creativo.
          </p>
        </div>
        <div className="utility-text text-silver opacity-40 hidden md:block">
          Catalog.2026/27
        </div>
      </div>

      <div className="flex flex-col border-t border-haze">
        {workshops.map(w => (
          <WorkshopCard key={w.id} workshop={w} />
        ))}
      </div>

      <div className="mt-40 p-20 glass-panel text-center relative overflow-hidden group">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-spot/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000"></div>
        <h2 className="display-text text-4xl mb-6 relative z-10">¿No encuentras lo que buscas?</h2>
        <p className="text-paper/60 mb-12 max-w-md mx-auto relative z-10 font-light leading-relaxed">
          Si necesitas una clase personalizada o tienes una propuesta de proyecto, contáctanos directamente.
        </p>
        <a
          href="mailto:contacto@dairoylis.com"
          className="relative z-10 inline-block px-12 py-5 bg-spot text-void utility-text font-bold hover:bg-silver transition-all duration-500"
        >
          Enviar Correo
        </a>
      </div>
    </div>
  );
};

export default Workshops;
