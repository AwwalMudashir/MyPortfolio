import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(!menuOpen);

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <nav className="w-full absolute top-0 z-50 px-6 py-4 flex items-center justify-between text-white">
      <h1 className="text-2xl font-bold font-heading text-white drop-shadow-glow">
        Awwal.Devs
      </h1>
     

      {/* Desktop links */}
      <ul className="hidden md:flex space-x-8 text-lg bb p-4 px-6 rounded-4xl border-1 border-white">
        {navLinks.map(({ label, href }) => (
          <li key={label}>
            <a
              href={href}
              className="hover:text-purple-300 transition-all duration-300 cursor-pointer"
            >
              {label}
            </a>
          </li>
        ))}
      </ul>

      {/* Mobile icon */}
      <div className="md:hidden text-2xl cursor-pointer" onClick={toggleMenu}>
        {menuOpen ? <FaTimes /> : <FaBars />}
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="absolute top-full left-0 w-full bg-transparent backdrop-blur-md md:hidden flex flex-col items-center py-6 space-y-4 text-lg">
          {navLinks.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              onClick={toggleMenu}
              className="hover:text-purple-300 drop-shadow-[0_0_8px_rgba(255,255,255,0.6)] transition-all duration-300 cursor-pointer"
            >
              {label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default NavBar;
