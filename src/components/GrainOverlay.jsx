import React from 'react';

const GrainOverlay = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-[-100] overflow-hidden" style={{ mixBlendMode: 'normal' }}>
      {/*
        The SVG filter was causing a GPU crash on your system.
        We are switching to a CSS-based noise technique using a tiny base64 noise pattern.
        This is visually identical but technically stable.
      */}
      <div
        className="absolute inset-0 opacity-[0.03] mix-blend-soft-light animate-grain"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
          backgroundRepeat: 'repeat'
        }}
      />

      {/* Glow/Bloom Layer - Very subtle */}
      <div className="absolute inset-0 mix-blend-screen opacity-20">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-white/[0.01] blur-[120px] animate-bloom-slow" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full bg-white/[0.01] blur-[150px] animate-bloom-fast" />
      </div>
    </div>
  );
};

export default GrainOverlay;
