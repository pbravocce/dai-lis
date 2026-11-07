import React, { useState } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { CONTACT, isPlaceholderKey } from '../config/contact';

const RegistrationForm = () => {
  const [searchParams] = useSearchParams();
  const workshopId = searchParams.get('id');
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const workshops = {
    '1': 'Actuación para Cine',
    '2': 'Escritura Dramatúrgica',
    '3': 'Introducción al Teatro',
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const isLis = !workshopId;
    const accessKey = isLis ? CONTACT.castingKey : CONTACT.workshopKey;
    const tallerNombre = isLis ? 'Casting Lis Bravo' : workshops[workshopId];

    setSending(true);
    setErrorMsg('');
    try {
      if (isPlaceholderKey(accessKey)) {
        throw new Error('Access key de Web3Forms no configurada en src/config/contact.js');
      }
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          access_key: accessKey,
          subject: isLis ? 'Solicitud de casting - Lis Bravo' : `Inscripción - ${tallerNombre}`,
          from_name: 'Sitio Dairo & Lis',
          replyto: formData.email,
          nombre: formData.name,
          correo: formData.email,
          telefono: formData.phone,
          taller: tallerNombre,
          notas: formData.message || '(sin notas)',
        }),
      });
      const data = await res.json();
      if (!res.ok || !data.success) {
        throw new Error(data.message || `Respuesta ${res.status}`);
      }
      setSubmitted(true);
    } catch (err) {
      console.error('Error al enviar formulario:', err);
      setErrorMsg('No pudimos enviar tu solicitud. Intenta de nuevo en unos minutos.');
    } finally {
      setSending(false);
    }
  };

  if (submitted) {
    const isLisCasting = !workshopId;

    return (
      <div className="pt-48 px-6 max-w-2xl mx-auto text-center animate-fade-in relative overflow-visible">
        {/* Approved Stamp Animation */}
        <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 animate-stamp">
          <div className="border-8 border-red-600 text-red-600 text-6xl font-black uppercase px-8 py-3 rotate-[-15deg] opacity-80 mix-blend-multiply whitespace-nowrap">
            APPROVED
          </div>
        </div>

        <h2 className="text-5xl font-bold uppercase italic mb-8 tracking-tighter relative z-10">¡Inscripción Exitosa!</h2>
        <p className="text-sm opacity-50 mb-16 leading-relaxed tracking-wide relative z-10">
          {isLisCasting ? (
            <>
              Hemos recibido tu información. <span className="text-white font-bold">Lis</span> se pondrá en contacto contigo pronto para finalizar el proceso.
            </>
          ) : (
            <>
              Hemos recibido tu información para el taller de <span className="text-white font-bold">{workshops[workshopId]}</span>.
              Dairo se pondrá en contacto contigo pronto para finalizar el proceso.
            </>
          )}
        </p>
        <Link
          to="/workshops"
          className="relative z-10 inline-block px-12 py-5 border border-white/20 hover:border-white transition-all text-[10px] uppercase tracking-[0.2em]"
        >
          Volver a Talleres
        </Link>
      </div>
    );
  }

  return (
    <div className="pt-32 px-6 max-w-3xl mx-auto pb-32 animate-fade-in">
      <div className="mb-24 text-center">
        <h2 className="text-5xl font-bold uppercase italic tracking-tighter mb-4">Solicitud de Casting</h2>
        <p className="text-sm font-bold uppercase tracking-widest mb-2">
          Taller: {workshops[workshopId] || 'TALLER SELECCIONADO'}
        </p>
      </div>

      <div className="glass-panel p-8 md:p-16 border-paper/20 relative overflow-hidden">
        {/* Paper Texture overlay for the form area */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none mix-blend-multiply"
             style={{ backgroundImage: 'url("https://www.transparenttextures.com/patterns/paper.png")' }} />

        <form onSubmit={handleSubmit} className="relative z-10 space-y-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <div className="flex flex-col gap-2 group">
              <label className="text-[9px] font-mono uppercase tracking-widest font-bold opacity-60 group-focus-within:opacity-100 transition-opacity">
                Nombre Completo
              </label>
              <input
                type="text"
                required
                className="bg-transparent border-b border-white/10 py-3 focus:outline-none focus:border-white transition-all duration-500 font-mono text-sm font-bold"
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
              />
            </div>
            <div className="flex flex-col gap-2 group">
              <label className="text-[9px] font-mono uppercase tracking-widest font-bold opacity-60 group-focus-within:opacity-100 transition-opacity">
                Correo Electrónico
              </label>
              <input
                type="email"
                required
                className="bg-transparent border-b border-white/10 py-3 focus:outline-none focus:border-white transition-all duration-500 font-mono text-sm font-bold"
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
              />
            </div>
          </div>

          <div className="flex flex-col gap-2 group">
            <label className="text-[9px] font-mono uppercase tracking-widest font-bold opacity-60 group-focus-within:opacity-100 transition-opacity">
              Teléfono
            </label>
            <input
              type="tel"
              required
              className="bg-transparent border-b border-white/10 py-3 focus:outline-none focus:border-white transition-all duration-500 font-mono text-sm font-bold"
              value={formData.phone}
              onChange={(e) => setFormData({...formData, phone: e.target.value})}
            />
          </div>

          <div className="flex flex-col gap-2 group">
            <label className="text-[9px] font-mono uppercase tracking-widest font-bold opacity-60 group-focus-within:opacity-100 transition-opacity">
              Notas Adicionales (Opcional)
            </label>
            <textarea
              rows="4"
              className="bg-transparent border-b border-white/10 py-3 focus:outline-none focus:border-white transition-all duration-500 font-mono text-sm font-bold resize-none"
              value={formData.message}
              onChange={(e) => setFormData({...formData, message: e.target.value})}
            ></textarea>
          </div>

          {errorMsg && (
            <p className="text-sm font-bold text-red-500 text-center">{errorMsg}</p>
          )}

          <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-end gap-8">
            <div className="text-[8px] font-mono font-bold opacity-50 max-w-xs uppercase leading-relaxed">
              Al enviar este formulario, aceptas ser contactado por el estudio.
              Tu información será procesada como una solicitud profesional de casting.
            </div>
            <button
              type="submit"
              disabled={sending}
              className="w-full md:w-auto px-16 py-6 bg-white text-black text-[10px] uppercase tracking-[0.3em] font-bold hover:bg-silver transition-all duration-500 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {sending ? 'Enviando...' : 'Firmar y Enviar'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegistrationForm;
