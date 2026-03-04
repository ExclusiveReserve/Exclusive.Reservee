import { useState, useEffect } from 'react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setMobileOpen(false);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const navLinks = [
    { label: 'Inicio', id: 'inicio' },
    { label: 'Productos', id: 'productos' },
    { label: 'Historia', id: 'historia' },
    { label: 'Origen', id: 'origen' },
    { label: 'Contacto', id: 'contacto' },
  ];

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
      style={{
        backgroundColor: scrolled ? 'rgba(8, 14, 24, 0.97)' : 'transparent',
        borderBottom: scrolled ? '1px solid rgba(180,140,60,0.2)' : 'none',
        backdropFilter: scrolled ? 'blur(12px)' : 'none',
      }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-5 flex items-center justify-between">
        {/* Logo */}
        <button
          onClick={() => scrollToSection('inicio')}
          className="flex items-center focus:outline-none"
          aria-label="Ir al inicio"
        >
          <img
            src="https://cdn.wegic.ai/assets/onepage/agent/images/1772575694559_edited.png?imageMogr2/format/webp"
            alt="Exclusive Reserve Logo"
            className="h-16 w-auto object-contain"
          />
        </button>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8" aria-label="Navegación principal">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollToSection(link.id)}
              className="nav-link section-label opacity-70 hover:opacity-100 transition-opacity focus:outline-none"
              style={{ color: 'var(--cream)' }}
            >
              {link.label}
            </button>
          ))}
        </nav>

        {/* CTA */}
        <div className="hidden md:block">
          <button
            onClick={() => scrollToSection('productos')}
            className="btn-gold text-xs"
            aria-label="Ordenar café ahora"
          >
            Ordenar Ahora
          </button>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden focus:outline-none"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
          aria-expanded={mobileOpen}
        >
          <div className="flex flex-col gap-[5px]">
            <span
              className="block w-6 h-[1px] transition-all duration-300"
              style={{
                backgroundColor: 'var(--gold)',
                transform: mobileOpen ? 'rotate(45deg) translateY(6px)' : 'none',
              }}
            />
            <span
              className="block w-4 h-[1px] transition-all duration-300"
              style={{
                backgroundColor: 'var(--gold)',
                opacity: mobileOpen ? 0 : 1,
              }}
            />
            <span
              className="block w-6 h-[1px] transition-all duration-300"
              style={{
                backgroundColor: 'var(--gold)',
                transform: mobileOpen ? 'rotate(-45deg) translateY(-6px)' : 'none',
              }}
            />
          </div>
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className="md:hidden overflow-hidden transition-all duration-400"
        style={{
          maxHeight: mobileOpen ? '400px' : '0',
          backgroundColor: 'rgba(8, 14, 24, 0.98)',
          borderTop: mobileOpen ? '1px solid rgba(180,140,60,0.15)' : 'none',
        }}
      >
        <nav className="px-6 py-6 flex flex-col gap-5">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollToSection(link.id)}
              className="section-label opacity-70 hover:opacity-100 text-left transition-opacity focus:outline-none"
              style={{ color: 'var(--cream)' }}
            >
              {link.label}
            </button>
          ))}
          <button
            onClick={() => scrollToSection('productos')}
            className="btn-gold text-xs mt-2 text-center"
          >
            Ordenar Ahora
          </button>
        </nav>
      </div>
    </header>
  );
}
