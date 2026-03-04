export default function Footer() {
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer style={{ backgroundColor: 'var(--navy-deeper)', borderTop: '1px solid rgba(180,140,60,0.15)' }}>
      {/* Main footer content */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">

          {/* Brand column */}
          <div className="flex flex-col gap-5">
            <img
              src="https://cdn.wegic.ai/assets/onepage/agent/images/1772575694559_edited.png?imageMogr2/format/webp"
              alt="Exclusive Reserve"
              className="h-12 w-auto object-contain"
            />
            <p className="font-body text-sm leading-relaxed" style={{ color: 'rgba(235,220,190,0.5)', maxWidth: '240px' }}>
              Café de especialidad Geisha cultivado en las tierras altas de Boquete, Panamá.
            </p>
            <div className="flex items-center gap-3 mt-2">
              <div className="h-px flex-1" style={{ backgroundColor: 'rgba(180,140,60,0.3)' }} />
              <span className="section-label" style={{ color: 'var(--gold)', opacity: 0.6, fontSize: '0.55rem' }}>
                PANAMA · BOQUETE · 1600 MASL
              </span>
              <div className="h-px flex-1" style={{ backgroundColor: 'rgba(180,140,60,0.3)' }} />
            </div>

            {/* Instagram follow label */}
            <p className="section-label" style={{ color: 'var(--gold)', fontSize: '0.6rem', letterSpacing: '0.2em', marginBottom: '-8px' }}>SIGUENOS</p>

            {/* Instagram button */}
            <a
              href="https://www.instagram.com/exclusivereservepa/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 w-fit mt-1 group"
              style={{
                padding: '10px 18px',
                border: '1px solid rgba(180,140,60,0.35)',
                color: 'var(--gold)',
                transition: 'all 0.3s ease',
                textDecoration: 'none',
              }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLAnchorElement).style.backgroundColor = 'rgba(180,140,60,0.1)';
                (e.currentTarget as HTMLAnchorElement).style.borderColor = 'rgba(180,140,60,0.7)';
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLAnchorElement).style.backgroundColor = 'transparent';
                (e.currentTarget as HTMLAnchorElement).style.borderColor = 'rgba(180,140,60,0.35)';
              }}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
              </svg>
              <span className="section-label" style={{ fontSize: '0.6rem', letterSpacing: '0.15em' }}>@exclusivereservepa</span>
            </a>
          </div>

          {/* Navigation */}
          <div className="flex flex-col gap-4">
            <p className="section-label" style={{ color: 'var(--gold)', marginBottom: '8px' }}>Navegación</p>
            {[
              { label: 'Inicio', id: 'inicio' },
              { label: 'Nuestros Productos', id: 'productos' },
              { label: 'Nuestra Historia', id: 'historia' },
              { label: 'Origen y Terroir', id: 'origen' },
              { label: 'Contacto', id: 'contacto' },
            ].map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className="text-left font-body text-sm transition-colors duration-300 focus:outline-none w-fit"
                style={{ color: 'rgba(235,220,190,0.5)' }}
                onMouseEnter={e => (e.currentTarget.style.color = 'var(--gold)')}
                onMouseLeave={e => (e.currentTarget.style.color = 'rgba(235,220,190,0.5)')}
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* Contact */}
          <div className="flex flex-col gap-4">
            <p className="section-label" style={{ color: 'var(--gold)', marginBottom: '8px' }}>Contacto Directo</p>
            <a
              href="https://wa.me/50769134818?text=Hola,%20me%20interesa%20conocer%20más%20sobre%20Exclusive%20Reserve"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 group font-body text-sm transition-colors duration-300"
              style={{ color: 'rgba(235,220,190,0.5)' }}
              onMouseEnter={e => (e.currentTarget.style.color = 'var(--gold)')}
              onMouseLeave={e => (e.currentTarget.style.color = 'rgba(235,220,190,0.5)')}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" style={{ color: 'var(--gold)', opacity: 0.7, flexShrink: 0 }}>
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              6913-4818
            </a>
            <a
              href="mailto:exclusivereservepa@gmail.com"
              className="flex items-center gap-3 font-body text-sm transition-colors duration-300"
              style={{ color: 'rgba(235,220,190,0.5)' }}
              onMouseEnter={e => (e.currentTarget.style.color = 'var(--gold)')}
              onMouseLeave={e => (e.currentTarget.style.color = 'rgba(235,220,190,0.5)')}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" style={{ color: 'var(--gold)', opacity: 0.7, flexShrink: 0 }}>
                <rect x="2" y="4" width="20" height="16" rx="2"/>
                <path d="m22 7-10 7L2 7"/>
              </svg>
              exclusivereservepa@gmail.com
            </a>
            <button
              onClick={() => scrollToSection('contacto')}
              className="btn-gold text-xs mt-4 text-center"
            >
              Hacer un Pedido
            </button>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div style={{ borderTop: '1px solid rgba(180,140,60,0.1)' }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-5 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="font-body" style={{ color: 'rgba(235,220,190,0.3)', fontSize: '0.7rem', letterSpacing: '0.1em' }}>
            © 2025 EXCLUSIVE RESERVE · BY MOU'S COFFEE HOUSE · PANAMA
          </p>
          <p className="font-body" style={{ color: 'rgba(235,220,190,0.2)', fontSize: '0.65rem', letterSpacing: '0.15em' }}>
            SINGLE ESTATE · 100% ARABICA · ALTITUDE 1600 MASL
          </p>
        </div>
      </div>
    </footer>
  );
}
