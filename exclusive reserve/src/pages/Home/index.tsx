import { useEffect, useRef, useState } from 'react';

// ─── Scroll Reveal Hook ────────────────────────────────────────────────────
function useReveal() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('visible');
          observer.unobserve(el);
        }
      },
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);
  return ref;
}

// ─── Decorative Botanical SVG ─────────────────────────────────────────────
function BotanicalLeaf({ side, className = '', style }: { side: 'left' | 'right'; className?: string; style?: React.CSSProperties }) {
  return (
    <svg
      viewBox="0 0 200 400"
      className={`absolute pointer-events-none ${className}`}
      style={{ opacity: 0.1, ...style }}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      {side === 'left' ? (
        <>
          <path d="M180 20 C80 60, 20 120, 40 200 C60 280, 120 300, 100 380" stroke="#C9A84C" strokeWidth="1.5" fill="none"/>
          <path d="M40 200 C-10 150, -20 100, 30 60" stroke="#C9A84C" strokeWidth="1" fill="none"/>
          <path d="M60 240 C10 200, -5 160, 20 120" stroke="#C9A84C" strokeWidth="1" fill="none"/>
          <path d="M80 280 C30 260, 10 230, 25 195" stroke="#C9A84C" strokeWidth="1" fill="none"/>
          <ellipse cx="40" cy="200" rx="70" ry="40" transform="rotate(-30 40 200)" stroke="#C9A84C" strokeWidth="0.8" fill="none"/>
          <ellipse cx="65" cy="250" rx="55" ry="30" transform="rotate(-20 65 250)" stroke="#C9A84C" strokeWidth="0.8" fill="none"/>
        </>
      ) : (
        <>
          <path d="M20 20 C120 60, 180 120, 160 200 C140 280, 80 300, 100 380" stroke="#C9A84C" strokeWidth="1.5" fill="none"/>
          <path d="M160 200 C210 150, 220 100, 170 60" stroke="#C9A84C" strokeWidth="1" fill="none"/>
          <path d="M140 240 C190 200, 205 160, 180 120" stroke="#C9A84C" strokeWidth="1" fill="none"/>
          <path d="M120 280 C170 260, 190 230, 175 195" stroke="#C9A84C" strokeWidth="1" fill="none"/>
          <ellipse cx="160" cy="200" rx="70" ry="40" transform="rotate(30 160 200)" stroke="#C9A84C" strokeWidth="0.8" fill="none"/>
          <ellipse cx="135" cy="250" rx="55" ry="30" transform="rotate(20 135 250)" stroke="#C9A84C" strokeWidth="0.8" fill="none"/>
        </>
      )}
    </svg>
  );
}

// ─── Gold Ornament Divider ────────────────────────────────────────────────
function OrnamentDivider() {
  return (
    <div className="flex items-center gap-4 justify-center" aria-hidden="true">
      <div className="flex-1 h-px" style={{ backgroundColor: 'rgba(180,140,60,0.35)' }} />
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M12 2 L14 10 L22 12 L14 14 L12 22 L10 14 L2 12 L10 10 Z" stroke="#C9A84C" strokeWidth="0.8" fill="none" opacity="0.7"/>
      </svg>
      <div className="flex-1 h-px" style={{ backgroundColor: 'rgba(180,140,60,0.35)' }} />
    </div>
  );
}

// ─── Section Label ────────────────────────────────────────────────────────
function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <span className="section-label" style={{ color: 'var(--gold)' }}>
      {children}
    </span>
  );
}

// ─── HERO Section ─────────────────────────────────────────────────────────
function HeroSection() {
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const scrollToProducts = () => {
    document.getElementById('productos')?.scrollIntoView({ behavior: 'smooth' });
  };
  const scrollToContact = () => {
    document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{ backgroundColor: 'var(--navy-deeper)' }}
    >
      {/* Background hero image - Premium jungle */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://cdn.wegic.ai/assets/onepage/agent/images/1772583618921.jpg?imageMogr2/format/webp"
          alt="Exclusive Reserve - Jungla Premium"
          className="w-full h-full object-cover"
          style={{ opacity: 0.85, transform: 'scale(1.04)' }}
          loading="eager"
        />
        <div
          className="absolute inset-0"
          style={{ background: 'linear-gradient(to bottom, rgba(8,14,24,0.45) 0%, rgba(8,14,24,0.15) 35%, rgba(8,14,24,0.6) 100%)' }}
        />
      </div>

      {/* Botanical leaves */}
      <BotanicalLeaf
        side="left"
        className="left-0 top-1/2 -translate-y-1/2 w-48 h-auto hidden lg:block"
        style={{ opacity: 0.18 } as React.CSSProperties}
      />
      <BotanicalLeaf
        side="right"
        className="right-0 top-1/2 -translate-y-1/2 w-48 h-auto hidden lg:block"
        style={{ opacity: 0.18 } as React.CSSProperties}
      />

      {/* Content */}
      <div className="relative z-10 w-full max-w-4xl mx-auto px-6 text-center">

        {/* Left: Text */}
        <div className="text-center flex-1">
        {/* Label */}
        <div
          className="mb-8"
          style={{
            opacity: loaded ? 1 : 0,
            transform: loaded ? 'translateY(0)' : 'translateY(20px)',
            transition: 'opacity 1s ease 0.2s, transform 1s ease 0.2s',
          }}
        >
          <SectionLabel>Single Estate · Boquete, Panamá · 1600 MASL</SectionLabel>
        </div>

        {/* Main title */}
        <div
          style={{
            opacity: loaded ? 1 : 0,
            transform: loaded ? 'translateY(0)' : 'translateY(30px)',
            transition: 'opacity 1.1s ease 0.4s, transform 1.1s ease 0.4s',
          }}
        >
          <h1 className="font-heading" style={{ color: 'var(--gold)', fontSize: 'clamp(3.8rem, 8vw, 7.5rem)', fontWeight: 300, lineHeight: 0.95, letterSpacing: '-0.02em', marginBottom: '0.05em' }}>
            Exclusive
          </h1>
          <h1 className="font-heading" style={{ color: 'var(--cream)', fontSize: 'clamp(3.8rem, 8vw, 7.5rem)', fontWeight: 300, lineHeight: 0.95, letterSpacing: '-0.02em' }}>
            Reserve
          </h1>
        </div>

        {/* Ornament line */}
        <div
          className="my-8"
          style={{
            opacity: loaded ? 1 : 0,
            transition: 'opacity 1s ease 0.8s',
          }}
        >
          <OrnamentDivider />
        </div>

        {/* Tagline */}
        {/* Subtext */}
        <p
          className="font-body mb-10"
          style={{
            color: 'rgba(235,220,190,0.45)',
            fontSize: '0.85rem',
            letterSpacing: '0.15em',
            textTransform: 'uppercase',
            opacity: loaded ? 1 : 0,
            transition: 'opacity 1s ease 1.1s',
          }}
        >
          Café Geisha · 100% Arabica · Proceso Washed · Lotes Limitados
        </p>

        {/* CTA Buttons */}
        <div
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
          style={{
            opacity: loaded ? 1 : 0,
            transform: loaded ? 'translateY(0)' : 'translateY(20px)',
            transition: 'opacity 1s ease 1.2s, transform 1s ease 1.2s',
          }}
        >
          <button onClick={scrollToProducts} className="btn-gold-solid w-full sm:w-auto">
            Ver Colección
          </button>
          <button onClick={scrollToContact} className="btn-gold w-full sm:w-auto">
            Ordenar Ahora
          </button>
        </div>
        </div>{/* end text col */}
      </div>

      {/* Scroll indicator */}
      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        style={{
          opacity: loaded ? 1 : 0,
          transition: 'opacity 1s ease 1.5s',
        }}
        aria-hidden="true"
      >
        <span className="section-label" style={{ color: 'rgba(180,140,60,0.5)', fontSize: '0.55rem' }}>Descubrir</span>
        <div className="w-px h-10 overflow-hidden" style={{ backgroundColor: 'rgba(180,140,60,0.2)' }}>
          <div
            className="w-full"
            style={{
              height: '40%',
              backgroundColor: 'var(--gold)',
              animation: 'scrollDown 2s ease-in-out infinite',
            }}
          />
        </div>
      </div>

      <style>{`
        @keyframes scrollDown {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(250%); }
        }
      `}</style>
    </section>
  );
}


// ─── PRODUCTS Section ─────────────────────────────────────────────────────
function ProductsSection() {
  const titleRef = useReveal();
  const openWhatsApp = (productName: string, size: string, grind: string) => {
    const msg = encodeURIComponent(
      `Hola, me interesa ordenar: ${productName} - ${size}${grind ? ` (${grind})` : ''}. ¿Podría darme más información?`
    );
    window.open(`https://wa.me/50769134818?text=${msg}`, '_blank');
  };

  const products = [
    {
      id: 'blend',
      name: 'Blend de Geisha',
      subtitle: 'Geisha + Pacamara · Etiqueta Verde',
      description: 'Un balance perfecto entre elegancia floral y profundidad aromática. La unión del Geisha con el Pacamara crea una taza de complejidad única: notas de jazmín, cítricos brillantes y un cuerpo sedoso que define lo que significa disfrutar un café de clase mundial.',
      notes: ['Jazmín · Cítrico', 'Miel · Caramelo', 'Final Limpio'],
      imageFront: 'https://cdn.wegic.ai/assets/onepage/uploads/2028951907228504066/image/2026/03/04/01KJTZF882HNPT25CRXV7QGKME.png',
      imageBack: 'https://cdn.wegic.ai/assets/onepage/uploads/2028951907228504066/image/2026/03/04/01KJTZF882XADANFTPJ2C1R0Y8.jpeg',
      process: 'Honey Process',
      altitude: '1600 MASL',
      options: [
        { size: '1 LB', price: '$20.00', grind: true },
        { size: '½ LB', price: '$15.00', grind: true },
      ],
      featured: false,
    },
    {
      id: 'fullgeisha',
      name: 'Full Geisha',
      subtitle: '100% Geisha Puro · Etiqueta Negra',
      description: 'Una expresión pura y exclusiva del Geisha. Con notas florales complejas, acidez brillante y un final limpio y sofisticado, este café representa la cúspide de lo que el café de especialidad panameño puede ofrecer. Cultivado y seleccionado a mano en las alturas de Boquete.',
      notes: ['Floral · Bergamota', 'Melocotón · Té', 'Acidez Brillante'],
      imageFront: 'https://cdn.wegic.ai/assets/onepage/uploads/2028951907228504066/image/2026/03/04/01KJTZF882NMWRAWG1FXN046YG.jpeg',
      imageBack: 'https://cdn.wegic.ai/assets/onepage/uploads/2028951907228504066/image/2026/03/04/01KJTZF8829FHA2H0V1R3410KH.jpeg',
      process: 'Washed Process',
      altitude: '1600 MASL',
      options: [
        { size: '½ LB', price: '$30.00', grind: false },
      ],
      featured: true,
    },
  ];

  return (
    <section id="productos" className="relative py-24 md:py-32 overflow-hidden" style={{ backgroundColor: 'var(--navy)' }}>
      {/* Background leaves */}
      <BotanicalLeaf side="right" className="right-0 top-0 w-56 h-auto hidden lg:block" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <div ref={titleRef} className="reveal text-center mb-16">
          <SectionLabel>Nuestra Colección</SectionLabel>
          <h2 className="font-heading mt-3 mb-5" style={{ color: 'var(--cream)', fontSize: 'clamp(2.2rem, 5vw, 3.8rem)', fontWeight: 300 }}>
            Cafés de <span style={{ color: 'var(--gold)', fontStyle: 'italic' }}>Reserva</span>
          </h2>
          <p className="font-body mx-auto" style={{ color: 'rgba(235,220,190,0.5)', maxWidth: '520px', lineHeight: 1.8, fontSize: '0.9rem' }}>
            Cada lote es seleccionado, tostado y entregado en cantidades limitadas para garantizar la frescura y calidad que mereces.
          </p>
          <div className="mt-6"><OrnamentDivider /></div>
        </div>

        {/* Products */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-6">
          {products.map((product, idx) => (
            <ProductCard
              key={product.id}
              product={product}
              delay={idx * 0.15}
              onOrder={openWhatsApp}
            />
          ))}
        </div>

        {/* Note */}
        <div className="mt-12 text-center">
          <p className="section-label" style={{ color: 'rgba(180,140,60,0.5)', fontSize: '0.6rem' }}>
            * Todos los cafés son tostados por encargo para garantizar máxima frescura · Envíos disponibles en Panamá
          </p>
        </div>
      </div>
    </section>
  );
}

function ProductCard({
  product,
  delay,
  onOrder,
}: {
  product: {
    id: string;
    name: string;
    subtitle: string;
    description: string;
    notes: string[];
    imageFront: string;
    imageBack: string;
    process: string;
    altitude: string;
    options: { size: string; price: string; grind: boolean }[];
    featured: boolean;
  };
  delay: number;
  onOrder: (name: string, size: string, grind: string) => void;
}) {
  const ref = useReveal();
  const [flipped, setFlipped] = useState(false);
  const [selectedSize, setSelectedSize] = useState(product.options[0]);
  const [selectedGrind, setSelectedGrind] = useState<'Grano' | 'Molido'>('Grano');

  return (
    <div ref={ref} className="reveal product-card" style={{ transitionDelay: `${delay}s` }}>
      <div
        className="relative h-full flex flex-col"
        style={{
          border: product.featured ? '1px solid rgba(180,140,60,0.45)' : '1px solid rgba(180,140,60,0.15)',
          backgroundColor: 'rgba(8,14,24,0.5)',
        }}
      >
        {/* Featured badge */}
        {product.featured && (
          <div
            className="absolute top-4 right-4 z-20 px-3 py-1"
            style={{ backgroundColor: 'var(--gold)', color: 'var(--navy)' }}
          >
            <span className="font-body" style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', fontWeight: 600 }}>
              Más Exclusivo
            </span>
          </div>
        )}

        {/* Flip image area */}
        <div
          className="relative"
          style={{ aspectRatio: '3/4', perspective: '1000px', cursor: 'pointer' }}
          onClick={() => setFlipped(f => !f)}
          role="button"
          aria-label={flipped ? 'Ver frente del empaque' : 'Ver reverso del empaque'}
          tabIndex={0}
          onKeyDown={e => e.key === 'Enter' && setFlipped(f => !f)}
        >
          {/* Inner flip container */}
          <div
            style={{
              width: '100%',
              height: '100%',
              position: 'relative',
              transformStyle: 'preserve-3d',
              transition: 'transform 0.7s cubic-bezier(0.4,0.2,0.2,1)',
              transform: flipped ? 'rotateY(180deg)' : 'rotateY(0deg)',
            }}
          >
            {/* Front */}
            <div style={{ position: 'absolute', inset: 0, backfaceVisibility: 'hidden', WebkitBackfaceVisibility: 'hidden' }}>
              <img
                src={product.imageFront}
                alt={`${product.name} - frente`}
                className="w-full h-full object-cover"
                loading="eager"
              />
              <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, transparent 60%, rgba(8,14,24,0.7) 100%)' }} />
              {/* Hint */}
              <div className="absolute bottom-4 right-4 flex items-center gap-1.5" style={{ opacity: 0.75 }}>
                <span className="font-body" style={{ fontSize: '0.55rem', letterSpacing: '0.15em', color: 'var(--gold)', textTransform: 'uppercase' }}>Ver reverso</span>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--gold)" strokeWidth="1.5">
                  <path d="M17 1l4 4-4 4"/><path d="M3 11V9a4 4 0 0 1 4-4h14"/><path d="M7 23l-4-4 4-4"/><path d="M21 13v2a4 4 0 0 1-4 4H3"/>
                </svg>
              </div>
            </div>
            {/* Back */}
            <div style={{ position: 'absolute', inset: 0, backfaceVisibility: 'hidden', WebkitBackfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}>
              <img
                src={product.imageBack}
                alt={`${product.name} - reverso`}
                className="w-full h-full object-cover"
                loading="eager"
              />
              <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, transparent 60%, rgba(8,14,24,0.7) 100%)' }} />
              {/* Hint */}
              <div className="absolute bottom-4 right-4 flex items-center gap-1.5" style={{ opacity: 0.75 }}>
                <span className="font-body" style={{ fontSize: '0.55rem', letterSpacing: '0.15em', color: 'var(--gold)', textTransform: 'uppercase' }}>Ver frente</span>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--gold)" strokeWidth="1.5">
                  <path d="M17 1l4 4-4 4"/><path d="M3 11V9a4 4 0 0 1 4-4h14"/><path d="M7 23l-4-4 4-4"/><path d="M21 13v2a4 4 0 0 1-4 4H3"/>
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* Content below image */}
        <div className="p-6 md:p-8 flex flex-col flex-1">
          {/* Header */}
          <div className="mb-4">
            <SectionLabel>{product.subtitle}</SectionLabel>
            <h3 className="font-heading mt-2" style={{ color: 'var(--cream)', fontSize: '1.75rem', fontWeight: 300 }}>
              {product.name}
            </h3>
          </div>

          {/* Description */}
          <p className="font-body leading-relaxed mb-5" style={{ color: 'rgba(235,220,190,0.6)', fontSize: '0.875rem', lineHeight: 1.85 }}>
            {product.description}
          </p>

          {/* Notes */}
          <div className="flex gap-2 flex-wrap mb-6">
            {product.notes.map((note) => (
              <span
                key={note}
                className="font-body px-3 py-1"
                style={{ border: '1px solid rgba(180,140,60,0.3)', color: 'rgba(235,220,190,0.6)', fontSize: '0.65rem', letterSpacing: '0.1em', textTransform: 'uppercase' }}
              >
                {note}
              </span>
            ))}
          </div>

          {/* Process & altitude */}
          <div className="flex gap-6 mb-6" style={{ borderTop: '1px solid rgba(180,140,60,0.1)', paddingTop: '1rem' }}>
            <div>
              <p style={{ color: 'rgba(235,220,190,0.3)', fontSize: '0.6rem', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '2px' }}>Proceso</p>
              <p className="font-body" style={{ color: 'var(--gold)', fontSize: '0.8rem' }}>{product.process}</p>
            </div>
            <div>
              <p style={{ color: 'rgba(235,220,190,0.3)', fontSize: '0.6rem', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '2px' }}>Altitud</p>
              <p className="font-body" style={{ color: 'var(--gold)', fontSize: '0.8rem' }}>{product.altitude}</p>
            </div>
          </div>

          {/* Size selector */}
          <div className="mb-4">
            <p className="section-label mb-3" style={{ fontSize: '0.58rem', color: 'rgba(180,140,60,0.6)' }}>Presentación</p>
            <div className="flex gap-3 flex-wrap">
              {product.options.map((opt) => (
                <button
                  key={opt.size}
                  onClick={() => setSelectedSize(opt)}
                  className="px-4 py-2 font-body text-xs transition-all duration-300 focus:outline-none"
                  style={{
                    border: selectedSize.size === opt.size ? '1px solid var(--gold)' : '1px solid rgba(180,140,60,0.2)',
                    color: selectedSize.size === opt.size ? 'var(--navy)' : 'rgba(235,220,190,0.6)',
                    backgroundColor: selectedSize.size === opt.size ? 'var(--gold)' : 'transparent',
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                  }}
                >
                  {opt.size} — {opt.price}
                </button>
              ))}
            </div>
          </div>

          {/* Grind selector */}
          {selectedSize.grind && (
            <div className="mb-6">
              <p className="section-label mb-3" style={{ fontSize: '0.58rem', color: 'rgba(180,140,60,0.6)' }}>Molienda</p>
              <div className="flex gap-3">
                {(['Grano', 'Molido'] as const).map((grind) => (
                  <button
                    key={grind}
                    onClick={() => setSelectedGrind(grind)}
                    className="flex-1 py-2.5 font-body text-xs transition-all duration-300 focus:outline-none"
                    style={{
                      border: selectedGrind === grind ? '1px solid var(--gold)' : '1px solid rgba(180,140,60,0.2)',
                      color: selectedGrind === grind ? 'var(--navy)' : 'rgba(235,220,190,0.6)',
                      backgroundColor: selectedGrind === grind ? 'var(--gold)' : 'transparent',
                      letterSpacing: '0.1em',
                      textTransform: 'uppercase',
                    }}
                  >
                    {grind}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Price & Order */}
          <div className="flex items-center justify-between mt-auto pt-4" style={{ borderTop: '1px solid rgba(180,140,60,0.1)' }}>
            <div>
              <p className="font-body" style={{ fontSize: '0.65rem', color: 'rgba(235,220,190,0.3)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '2px' }}>
                Precio
              </p>
              <p className="font-heading" style={{ color: 'var(--gold)', fontSize: '2rem', fontWeight: 400 }}>
                {selectedSize.price}
              </p>
            </div>
            <button
              onClick={() => onOrder(product.name, selectedSize.size, selectedSize.grind ? selectedGrind : '')}
              className="btn-gold-solid"
            >
              Ordenar vía WhatsApp
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
// ─── SENSORY Section ──────────────────────────────────────────────────────
function SensorySection() {
  const ref = useReveal();
  const imgRef = useReveal();

  const profiles = [
    {
      title: 'Aroma Floral',
      desc: 'Notas de jazmín y flores blancas que definen la elegancia del Geisha',
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
          <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2z"/>
          <path d="M12 6C9.8 6 8 7.8 8 10c0 2.5 2 5 4 6 2-1 4-3.5 4-6 0-2.2-1.8-4-4-4z"/>
          <path d="M12 10v8"/>
        </svg>
      ),
    },
    {
      title: 'Acidez Brillante',
      desc: 'Cítrico y bergamota que ilumina el paladar con claridad y vivacidad',
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
          <circle cx="12" cy="12" r="4"/>
          <path d="M12 2v3M12 19v3M2 12h3M19 12h3M4.22 4.22l2.12 2.12M17.66 17.66l2.12 2.12M4.22 19.78l2.12-2.12M17.66 6.34l2.12-2.12"/>
        </svg>
      ),
    },
    {
      title: 'Cuerpo Sedoso',
      desc: 'Textura suave y refinada con un final largo que permanece en el tiempo',
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
          <path d="M18 8h1a4 4 0 0 1 0 8h-1"/>
          <path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"/>
          <line x1="6" y1="1" x2="6" y2="4"/>
          <line x1="10" y1="1" x2="10" y2="4"/>
          <line x1="14" y1="1" x2="14" y2="4"/>
        </svg>
      ),
    },
    {
      title: 'Final Limpio',
      desc: 'Conclusión elegante y prolongada que define el café de clase mundial',
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
          <polyline points="20 6 9 17 4 12"/>
        </svg>
      ),
    },
  ];

  return (
    <section id="experiencia" className="relative py-24 md:py-32 overflow-hidden" style={{ backgroundColor: 'var(--navy-dark)' }}>
      <BotanicalLeaf side="left" className="left-0 top-0 w-48 h-auto hidden lg:block" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          {/* Image */}
          <div ref={imgRef} className="reveal-left relative">
            <div className="relative overflow-hidden" style={{ aspectRatio: '4/3', backgroundColor: 'var(--navy-dark)' }}>
              <img
                src="https://cdn.wegic.ai/assets/onepage/agent/images/1772584412447.jpg?imageMogr2/format/webp"
                alt="Experiencia sensorial del café Geisha"
                className="w-full h-full object-cover"
                loading="eager"
              />
            </div>
            {/* Accent frame */}
            <div
              className="absolute -bottom-4 -right-4 w-full h-full pointer-events-none hidden lg:block"
              style={{ border: '1px solid rgba(180,140,60,0.25)', zIndex: -1 }}
            />
            {/* Floating badge */}
            <div
              className="absolute -top-4 -left-4 px-5 py-4"
              style={{ backgroundColor: 'var(--navy-deeper)', border: '1px solid rgba(180,140,60,0.35)' }}
            >
              <p className="font-heading" style={{ color: 'var(--gold)', fontSize: '1.8rem', fontWeight: 300, lineHeight: 1 }}>100%</p>
              <p className="section-label" style={{ fontSize: '0.55rem', marginTop: '2px' }}>Arabica</p>
            </div>
          </div>

          {/* Content */}
          <div ref={ref} className="reveal">
            <SectionLabel>La Experiencia Sensorial</SectionLabel>
            <h2 className="font-heading mt-3 mb-5" style={{ color: 'var(--cream)', fontSize: 'clamp(2rem, 4vw, 3.2rem)', fontWeight: 300, lineHeight: 1.15 }}>
              Un Café Que<br /><span style={{ color: 'var(--gold)', fontStyle: 'italic' }}>Se Experimenta</span>
            </h2>
            <p className="font-body mb-10 leading-relaxed" style={{ color: 'rgba(235,220,190,0.55)', fontSize: '0.9rem', lineHeight: 1.85, maxWidth: '440px' }}>
              El Geisha de Boquete es considerado el café más sofisticado del mundo. Sus perfiles aromáticos son únicos, delicados y memorables. Cada taza es un ritual sensorial que transporta al origen.
            </p>

            {/* Profile grid */}
            <div className="grid grid-cols-2 gap-5">
              {profiles.map((p) => (
                <div key={p.title} className="flex flex-col gap-2">
                  <div style={{ color: 'var(--gold)', opacity: 0.8 }}>{p.icon}</div>
                  <p className="font-heading" style={{ color: 'var(--cream)', fontSize: '1rem', fontWeight: 500 }}>{p.title}</p>
                  <p className="font-body" style={{ color: 'rgba(235,220,190,0.4)', fontSize: '0.78rem', lineHeight: 1.6 }}>{p.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── HISTORY Section ──────────────────────────────────────────────────────
function HistorySection() {
  const titleRef = useReveal();
  const col1Ref = useReveal();
  const col2Ref = useReveal();
  const col3Ref = useReveal();

  return (
    <section id="historia" className="relative py-24 md:py-32 overflow-hidden" style={{ backgroundColor: 'var(--navy)' }}>
      <BotanicalLeaf side="right" className="right-0 bottom-0 w-56 h-auto hidden lg:block" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12">

        {/* Header */}
        <div ref={titleRef} className="reveal text-center mb-16">
          <SectionLabel>Nuestra Historia</SectionLabel>
          <h2 className="font-heading mt-3 mb-5" style={{ color: 'var(--cream)', fontSize: 'clamp(2.2rem, 5vw, 3.8rem)', fontWeight: 300 }}>
            El Origen de<br /><span style={{ color: 'var(--gold)', fontStyle: 'italic' }}>Exclusive Reserve</span>
          </h2>
          <div className="mt-6 max-w-lg mx-auto"><OrnamentDivider /></div>
        </div>

        {/* Opening statement */}
        <div ref={col1Ref} className="reveal text-center mb-16 max-w-3xl mx-auto">
          <p
            className="font-heading italic"
            style={{ color: 'rgba(235,220,190,0.8)', fontSize: 'clamp(1.2rem, 2.5vw, 1.7rem)', fontWeight: 300, lineHeight: 1.7 }}
          >
            "En las tierras altas de Boquete, donde la neblina abraza las montañas y el suelo volcánico nutre cada raíz, nació Exclusive Reserve. No comenzó como un negocio. Comenzó como una obsesión por la excelencia."
          </p>
        </div>

        {/* Logo image */}
        <div className="flex justify-center my-10">
          <img
            src="https://cdn.wegic.ai/assets/onepage/uploads/2028951907228504066/image/2026/03/04/01KJV13VPQWKC7NRDFRTG64ESX.jpg"
            alt="Exclusive Reserve"
            style={{ maxWidth: '320px', width: '100%', opacity: 0.92 }}
            loading="eager"
          />
        </div>

        {/* Three columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px" style={{ backgroundColor: 'rgba(180,140,60,0.1)' }}>
          {[
            {
              ref: col1Ref,
              num: '01',
              title: 'Lo Que Nos Hace Diferentes',
              text: 'En un mercado saturado de promesas, nosotros elegimos precisión. Trabajamos con variedades de reconocimiento mundial como el Geisha, cultivado bajo condiciones ideales de altura, microclima y procesos meticulosos para lograr perfiles florales, cítricos y elegantes de clase mundial.',
            },
            {
              ref: col2Ref,
              num: '02',
              title: 'Nuestra Filosofía',
              text: 'Exclusive Reserve no es para quien solo quiere cafeína. Es para quien aprecia los detalles. Creemos que el café es un ritual — un momento de pausa en medio del ruido. La excelencia no es una estrategia de marketing. Es una disciplina diaria.',
            },
            {
              ref: col3Ref,
              num: '03',
              title: 'El Estándar Más Alto',
              text: 'Cada lote es limitado. Cada tueste es calibrado. Cada bolsa representa un estándar que no negociamos. Seleccionamos únicamente granos que cumplan con nuestra exigencia más alta. Si no es excepcional, no lleva nuestro nombre.',
            },
          ].map((col) => (
            <div
              key={col.num}
              className="py-10 px-8 md:px-10"
              style={{ backgroundColor: 'var(--navy)' }}
            >
              <p className="font-heading mb-4" style={{ color: 'var(--gold)', fontSize: '3rem', fontWeight: 300, opacity: 0.3 }}>
                {col.num}
              </p>
              <div className="mb-4" style={{ height: '1px', width: '32px', backgroundColor: 'var(--gold)', opacity: 0.5 }} />
              <h3 className="font-heading mb-4" style={{ color: 'var(--cream)', fontSize: '1.35rem', fontWeight: 400 }}>
                {col.title}
              </h3>
              <p className="font-body leading-relaxed" style={{ color: 'rgba(235,220,190,0.5)', fontSize: '0.875rem', lineHeight: 1.85 }}>
                {col.text}
              </p>
            </div>
          ))}
        </div>

        {/* Philosophy block */}
        <div
          className="reveal mt-8 p-10 md:p-14 text-center"
          style={{
            border: '1px solid rgba(180,140,60,0.2)',
            backgroundColor: 'rgba(180,140,60,0.03)',
          }}
        >
          <SectionLabel>Más Que Café</SectionLabel>
          <p className="font-heading mt-4 mb-6" style={{ color: 'var(--cream)', fontSize: 'clamp(1.1rem, 2.5vw, 1.5rem)', fontWeight: 300, lineHeight: 1.7 }}>
            Exclusive Reserve representa una decisión:<br />
            <span style={{ color: 'var(--gold)', fontStyle: 'italic' }}>Elegir calidad sobre cantidad. Elegir carácter sobre lo común.<br />Elegir experiencia sobre rutina.</span>
          </p>
          <p className="font-body" style={{ color: 'rgba(235,220,190,0.4)', fontSize: '0.85rem', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
            No creamos café para todos · Creamos café para quienes entienden la diferencia
          </p>
        </div>
      </div>
    </section>
  );
}

// ─── ORIGIN Section ───────────────────────────────────────────────────────
function OriginSection() {
  const leftRef = useReveal();
  const rightRef = useReveal();

  const specs = [
    { label: 'Región', value: 'Boquete, Chiriquí' },
    { label: 'Altitud', value: '1,600 MASL' },
    { label: 'Variedad', value: 'Geisha · Pacamara' },
    { label: 'Proceso', value: 'Washed · Honey' },
    { label: 'Suelo', value: 'Volcánico' },
    { label: 'Cosecha', value: 'Manual · Selectiva' },
  ];

  return (
    <section id="origen" className="relative py-24 md:py-32 overflow-hidden" style={{ backgroundColor: 'var(--navy-dark)' }}>
      <BotanicalLeaf side="left" className="left-0 top-1/3 w-44 h-auto hidden lg:block" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div ref={leftRef} className="reveal-left">
            <SectionLabel>La Finca y el Origen</SectionLabel>
            <h2 className="font-heading mt-3 mb-6" style={{ color: 'var(--cream)', fontSize: 'clamp(2rem, 4vw, 3.2rem)', fontWeight: 300, lineHeight: 1.2 }}>
              Boquete,<br /><span style={{ color: 'var(--gold)', fontStyle: 'italic' }}>Panamá</span>
            </h2>
            <p className="font-body mb-8 leading-relaxed" style={{ color: 'rgba(235,220,190,0.55)', fontSize: '0.9rem', lineHeight: 1.85 }}>
              Nuestros cafés provienen de fincas ubicadas en las zonas más privilegiadas de Boquete, donde la altitud, el clima fresco y el suelo volcánico crean el entorno perfecto para desarrollar cafés de perfil complejo y refinado. Aquí, cada cosecha es tratada con respeto y cada proceso se ejecuta con precisión artesanal.
            </p>

            {/* Specs grid */}
            <div className="grid grid-cols-2 gap-0 mt-8" style={{ border: '1px solid rgba(180,140,60,0.15)' }}>
              {specs.map((spec, i) => (
                <div
                  key={spec.label}
                  className="px-5 py-4"
                  style={{
                    borderRight: i % 2 === 0 ? '1px solid rgba(180,140,60,0.15)' : 'none',
                    borderBottom: i < 4 ? '1px solid rgba(180,140,60,0.15)' : 'none',
                  }}
                >
                  <p className="section-label mb-1" style={{ color: 'rgba(180,140,60,0.6)', fontSize: '0.55rem' }}>{spec.label}</p>
                  <p className="font-heading" style={{ color: 'var(--cream)', fontSize: '1.05rem', fontWeight: 400 }}>{spec.value}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Image */}
          <div ref={rightRef} className="reveal-right relative">
            <div className="relative overflow-hidden" style={{ aspectRatio: '3/4', backgroundColor: 'var(--navy-dark)' }}>
              <img
                src="https://cdn.wegic.ai/assets/onepage/agent/images/1772584820800.jpg?imageMogr2/format/webp"
                alt="Cosecha artesanal de café en Boquete, Panamá"
                className="w-full h-full object-cover"
                loading="eager"
              />
            </div>
            <div
              className="absolute -bottom-4 -left-4 w-full h-full pointer-events-none hidden lg:block"
              style={{ border: '1px solid rgba(180,140,60,0.2)', zIndex: -1 }}
            />
            {/* Caption */}
            <div
              className="absolute bottom-0 left-0 right-0 p-5"
              style={{ background: 'linear-gradient(to top, rgba(8,14,24,0.9) 0%, transparent 100%)' }}
            >
              <p className="font-body" style={{ color: 'rgba(235,220,190,0.6)', fontSize: '0.7rem', letterSpacing: '0.12em', textTransform: 'uppercase' }}>
                Single Estate · Panama · Boquete
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── CONTACT Section ──────────────────────────────────────────────────────
function ContactSection() {
  const ref = useReveal();
  const formRef = useReveal();
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    product: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = encodeURIComponent(
      `*Nuevo pedido / consulta - Exclusive Reserve*\n\n` +
      `Nombre: ${form.name}\n` +
      `Email: ${form.email}\n` +
      `Teléfono: ${form.phone}\n` +
      `Producto de interés: ${form.product}\n` +
      `Mensaje: ${form.message}`
    );
    window.open(`https://wa.me/50769134818?text=${msg}`, '_blank');
    setSubmitted(true);
  };

  return (
    <section id="contacto" className="relative py-24 md:py-32 overflow-hidden" style={{ backgroundColor: 'var(--navy)' }}>
      <BotanicalLeaf side="right" className="right-0 top-0 w-48 h-auto hidden lg:block" />
      <BotanicalLeaf side="left" className="left-0 bottom-0 w-48 h-auto hidden lg:block" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <div ref={ref} className="reveal text-center mb-14">
          <SectionLabel>Contacto Directo</SectionLabel>
          <h2 className="font-heading mt-3 mb-4" style={{ color: 'var(--cream)', fontSize: 'clamp(2.2rem, 5vw, 3.8rem)', fontWeight: 300 }}>
            Haz Tu <span style={{ color: 'var(--gold)', fontStyle: 'italic' }}>Pedido</span>
          </h2>
          <p className="font-body mx-auto" style={{ color: 'rgba(235,220,190,0.5)', maxWidth: '500px', lineHeight: 1.8, fontSize: '0.9rem' }}>
            Para más información sobre nuestros cafés, pedidos especiales o consultas, contáctanos directamente.
          </p>
          <div className="mt-6 max-w-xs mx-auto"><OrnamentDivider /></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Contact info */}
          <div ref={ref} className="reveal">
            <div className="flex flex-col gap-8">
              {/* WhatsApp */}
              <a
                href="https://wa.me/50769134818?text=Hola,%20me%20interesa%20conocer%20más%20sobre%20Exclusive%20Reserve"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-5 group"
                style={{ textDecoration: 'none' }}
              >
                <div
                  className="flex-shrink-0 w-12 h-12 flex items-center justify-center"
                  style={{ border: '1px solid rgba(180,140,60,0.4)' }}
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" style={{ color: 'var(--gold)' }}>
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                </div>
                <div>
                  <p className="section-label mb-1">WhatsApp</p>
                  <p
                    className="font-heading transition-colors duration-300 group-hover:text-gold"
                    style={{ color: 'var(--cream)', fontSize: '1.5rem', fontWeight: 400 }}
                  >
                    +507 6913-4818
                  </p>
                  <p className="font-body mt-1" style={{ color: 'rgba(235,220,190,0.4)', fontSize: '0.78rem' }}>
                    Respuesta inmediata · Pedidos y consultas
                  </p>
                </div>
              </a>

              {/* Divider */}
              <div style={{ height: '1px', backgroundColor: 'rgba(180,140,60,0.15)' }} />

              {/* Email */}
              <a
                href="mailto:exclusivereservepa@gmail.com"
                className="flex items-start gap-5 group"
                style={{ textDecoration: 'none' }}
              >
                <div
                  className="flex-shrink-0 w-12 h-12 flex items-center justify-center"
                  style={{ border: '1px solid rgba(180,140,60,0.4)' }}
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" style={{ color: 'var(--gold)' }}>
                    <rect x="2" y="4" width="20" height="16" rx="2"/>
                    <path d="m22 7-10 7L2 7"/>
                  </svg>
                </div>
                <div>
                  <p className="section-label mb-1">Correo Electrónico</p>
                  <p
                    className="font-body transition-colors duration-300"
                    style={{ color: 'rgba(235,220,190,0.7)', fontSize: '0.9rem', wordBreak: 'break-all' }}
                    onMouseEnter={e => (e.currentTarget.style.color = 'var(--gold)')}
                    onMouseLeave={e => (e.currentTarget.style.color = 'rgba(235,220,190,0.7)')}
                  >
                    exclusivereservepa@gmail.com
                  </p>
                  <p className="font-body mt-1" style={{ color: 'rgba(235,220,190,0.4)', fontSize: '0.78rem' }}>
                    Para pedidos corporativos o consultas detalladas
                  </p>
                </div>
              </a>

              {/* Divider */}
              <div style={{ height: '1px', backgroundColor: 'rgba(180,140,60,0.15)' }} />

              {/* Direct WhatsApp CTA */}
              <a
                href="https://wa.me/50769134818?text=Hola,%20me%20interesa%20hacer%20un%20pedido%20de%20Exclusive%20Reserve"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-gold-solid text-center block"
              >
                Abrir Chat de WhatsApp
              </a>

              {/* Info boxes */}
              <div className="grid grid-cols-2 gap-4 mt-2">
                {[
                  { title: 'Lotes Limitados', desc: 'Disponibilidad exclusiva' },
                  { title: 'Envío Nacional', desc: 'Toda Panamá' },
                  { title: 'Tostado por Encargo', desc: 'Máxima frescura' },
                  { title: 'Asesoría Personalizada', desc: 'Te ayudamos a elegir' },
                ].map((item) => (
                  <div
                    key={item.title}
                    className="px-4 py-3"
                    style={{ border: '1px solid rgba(180,140,60,0.15)' }}
                  >
                    <p className="font-heading" style={{ color: 'var(--gold)', fontSize: '0.85rem', fontWeight: 500 }}>{item.title}</p>
                    <p className="font-body" style={{ color: 'rgba(235,220,190,0.4)', fontSize: '0.7rem', marginTop: '2px' }}>{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Form */}
          <div ref={formRef} className="reveal" style={{ transitionDelay: '0.15s' }}>
            {submitted ? (
              <div
                className="flex flex-col items-center justify-center h-full text-center py-16 gap-5"
                style={{ border: '1px solid rgba(180,140,60,0.3)' }}
              >
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" style={{ color: 'var(--gold)' }}>
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
                  <polyline points="22 4 12 14.01 9 11.01"/>
                </svg>
                <h3 className="font-heading" style={{ color: 'var(--cream)', fontSize: '1.8rem', fontWeight: 300 }}>
                  ¡Mensaje enviado!
                </h3>
                <p className="font-body" style={{ color: 'rgba(235,220,190,0.5)', fontSize: '0.875rem', maxWidth: '280px', lineHeight: 1.7 }}>
                  Te hemos redirigido a WhatsApp. Nos pondremos en contacto contigo muy pronto.
                </p>
                <button onClick={() => setSubmitted(false)} className="btn-gold mt-4">
                  Nuevo mensaje
                </button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="flex flex-col gap-5 p-8 md:p-10"
                style={{ border: '1px solid rgba(180,140,60,0.2)', backgroundColor: 'rgba(8,14,24,0.4)' }}
                noValidate
              >
                <div>
                  <SectionLabel>Formulario de Pedido</SectionLabel>
                  <h3 className="font-heading mt-2" style={{ color: 'var(--cream)', fontSize: '1.5rem', fontWeight: 300 }}>
                    Cuéntanos Tu Pedido
                  </h3>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-2">
                    <label className="section-label" style={{ fontSize: '0.58rem', color: 'rgba(180,140,60,0.6)' }}>
                      Nombre Completo *
                    </label>
                    <input
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      required
                      placeholder="Tu nombre"
                      className="input-luxury"
                      aria-label="Nombre completo"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="section-label" style={{ fontSize: '0.58rem', color: 'rgba(180,140,60,0.6)' }}>
                      Teléfono / WhatsApp
                    </label>
                    <input
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="6000-0000"
                      className="input-luxury"
                      aria-label="Teléfono"
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <label className="section-label" style={{ fontSize: '0.58rem', color: 'rgba(180,140,60,0.6)' }}>
                    Correo Electrónico
                  </label>
                  <input
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="tu@email.com"
                    className="input-luxury"
                    aria-label="Correo electrónico"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label className="section-label" style={{ fontSize: '0.58rem', color: 'rgba(180,140,60,0.6)' }}>
                    Producto de Interés *
                  </label>
                  <select
                    name="product"
                    value={form.product}
                    onChange={handleChange}
                    required
                    className="input-luxury"
                    style={{ cursor: 'pointer' }}
                    aria-label="Seleccionar producto"
                  >
                    <option value="" style={{ backgroundColor: 'hsl(215,45%,10%)' }}>Seleccionar producto...</option>
                    <option value="Blend de Geisha - Grano 1 LB ($20)" style={{ backgroundColor: 'hsl(215,45%,10%)' }}>Blend de Geisha · Grano 1 LB — $20</option>
                    <option value="Blend de Geisha - Grano ½ LB ($15)" style={{ backgroundColor: 'hsl(215,45%,10%)' }}>Blend de Geisha · Grano ½ LB — $15</option>
                    <option value="Blend de Geisha - Molido 1 LB ($20)" style={{ backgroundColor: 'hsl(215,45%,10%)' }}>Blend de Geisha · Molido 1 LB — $20</option>
                    <option value="Blend de Geisha - Molido ½ LB ($15)" style={{ backgroundColor: 'hsl(215,45%,10%)' }}>Blend de Geisha · Molido ½ LB — $15</option>
                    <option value="Full Geisha - ½ LB ($30)" style={{ backgroundColor: 'hsl(215,45%,10%)' }}>Full Geisha · ½ LB — $30</option>
                    <option value="Consulta general" style={{ backgroundColor: 'hsl(215,45%,10%)' }}>Consulta general</option>
                  </select>
                </div>

                <div className="flex flex-col gap-2">
                  <label className="section-label" style={{ fontSize: '0.58rem', color: 'rgba(180,140,60,0.6)' }}>
                    Mensaje o Consulta
                  </label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Cuéntanos sobre tu pedido, cantidades, método de pago preferido..."
                    rows={4}
                    className="input-luxury resize-none"
                    aria-label="Mensaje"
                  />
                </div>

                <button type="submit" className="btn-gold-solid w-full mt-2">
                  Enviar por WhatsApp
                </button>

                <p className="font-body text-center" style={{ color: 'rgba(235,220,190,0.25)', fontSize: '0.7rem' }}>
                  Al enviar, serás redirigido a WhatsApp con tu pedido pre-cargado
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── MAIN PAGE ────────────────────────────────────────────────────────────
export default function HomePage() {
  return (
    <div>
      <HeroSection />
      <ProductsSection />
      <SensorySection />
      <HistorySection />
      <OriginSection />
      <ContactSection />
    </div>
  );
}
