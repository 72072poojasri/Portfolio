import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import portfolioData from "../data/portfolioData";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black/80 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-8 h-20 flex items-center justify-between">

        {/* Logo */}
        <a
          href="#home"
          className="text-3xl font-bold bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent"
        >
          Pooja.
        </a>

        <div className="flex items-center gap-4">

          {/* Resume Button */}
          <a
            href={portfolioData.personal.resume}
            target="_blank"
            rel="noreferrer"
            className="
              px-6 py-3
              rounded-full
              bg-violet-600
              hover:bg-violet-500
              transition
            "
          >
            Resume
          </a>

          {/* Menu Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-2xl text-white"
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>

        </div>
      </div>

      {/* Dropdown */}
      {menuOpen && (
        <div className="bg-[#0b1020] border-t border-white/10">
          <div className="flex flex-col p-6 gap-5 text-gray-300">

            <a href="#home" onClick={() => setMenuOpen(false)}>
              Home
            </a>

            <a href="#about" onClick={() => setMenuOpen(false)}>
              About
            </a>

            <a href="#skills" onClick={() => setMenuOpen(false)}>
              Skills
            </a>

            <a href="#projects" onClick={() => setMenuOpen(false)}>
              Projects
            </a>

            <a href="#achievements" onClick={() => setMenuOpen(false)}>
              Achievements
            </a>

            <a href="#certifications" onClick={() => setMenuOpen(false)}>
              Certifications
            </a>

            <a href="#contact" onClick={() => setMenuOpen(false)}>
              Contact
            </a>

          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;