/* ==========================================================
   VITAL FORCE — Navbar
   Sticky top nav with blur backdrop, smooth scroll links
   ========================================================== */

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Story", href: "#story" },
  { label: "Services", href: "#services" },
  { label: "Speaking", href: "#speaking" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "nav-blur border-b border-gray-100 shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="container">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a
            href="#"
            onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); }}
            className="flex flex-col leading-none"
          >
            <span
              className="font-display font-800 text-xl tracking-tight"
              style={{ color: "oklch(0.18 0.04 255)", fontWeight: 800 }}
            >
              NIC
            </span>
            <span
              className="font-display text-xs tracking-widest uppercase"
              style={{ color: "oklch(0.55 0.2 260)", fontWeight: 600, letterSpacing: "0.2em" }}
            >
              van den Bergh
            </span>
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="animated-underline font-body text-sm font-500 transition-colors"
                style={{ color: scrolled ? "oklch(0.18 0.04 255)" : "oklch(0.18 0.04 255)", fontWeight: 500 }}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, "#contact")}
              className="btn-fill px-5 py-2 border-2 font-display font-700 text-sm tracking-wide transition-all"
              style={{
                borderColor: "oklch(0.18 0.04 255)",
                color: "oklch(0.18 0.04 255)",
                fontWeight: 700,
              }}
            >
              Work With Me
            </a>
          </nav>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
            style={{ color: "oklch(0.18 0.04 255)" }}
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 shadow-lg">
          <div className="container py-4 flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="font-body text-base font-500 py-2 border-b border-gray-50"
                style={{ color: "oklch(0.18 0.04 255)", fontWeight: 500 }}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, "#contact")}
              className="btn-fill mt-2 px-5 py-3 border-2 font-display font-700 text-sm tracking-wide text-center"
              style={{
                borderColor: "oklch(0.18 0.04 255)",
                color: "oklch(0.18 0.04 255)",
                fontWeight: 700,
              }}
            >
              Work With Me
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
