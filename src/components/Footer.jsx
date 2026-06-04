import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import portfolioData from "../data/portfolioData";

function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#050816]">
      <div className="section-container py-16">

        {/* Top Section */}
        <div className="grid md:grid-cols-3 gap-10">

          {/* Brand */}
          <div>
            <h2 className="text-3xl font-bold gradient-text mb-3">
              Pooja.
            </h2>

            <p className="text-white text-lg font-medium mb-3">
              AI & Full Stack Developer
            </p>

            <p className="text-gray-400 leading-7">
              Building intelligent web applications with modern technologies,
              cloud solutions, and AI-powered experiences.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-5">
              Quick Links
            </h3>

            <div className="flex flex-col gap-3 text-gray-400">
              <a href="#about" className="hover:text-violet-400 transition">
                About
              </a>

              <a href="#skills" className="hover:text-violet-400 transition">
                Skills
              </a>

              <a href="#projects" className="hover:text-violet-400 transition">
                Projects
              </a>

              <a href="#achievements" className="hover:text-violet-400 transition">
                Achievements
              </a>

              <a href="#certifications" className="hover:text-violet-400 transition">
                Certifications
              </a>

              <a href="#contact" className="hover:text-violet-400 transition">
                Contact
              </a>
            </div>
          </div>

          {/* Availability */}
          <div>
            <h3 className="text-xl font-semibold mb-5">
              Available For
            </h3>

            <div className="space-y-3">
              <div className="glass-card px-4 py-3 rounded-xl text-gray-300">
                Software Developer Roles
              </div>

              <div className="glass-card px-4 py-3 rounded-xl text-gray-300">
                Full Stack Internships
              </div>

              <div className="glass-card px-4 py-3 rounded-xl text-gray-300">
                AI / ML Opportunities
              </div>
            </div>
          </div>
        </div>

        {/* Social Icons */}
        <div className="flex justify-center gap-6 mt-12">

          <a
            href={portfolioData.personal.github}
            target="_blank"
            rel="noreferrer"
            className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:border-violet-500 hover:text-violet-400 transition"
          >
            <FaGithub size={20} />
          </a>

          <a
            href={portfolioData.personal.linkedin}
            target="_blank"
            rel="noreferrer"
            className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:border-cyan-500 hover:text-cyan-400 transition"
          >
            <FaLinkedin size={20} />
          </a>

          <a
            href={`mailto:${portfolioData.personal.email}`}
            className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:border-pink-500 hover:text-pink-400 transition"
          >
            <FaEnvelope size={20} />
          </a>

        </div>

        {/* Bottom Footer */}
        <div className="border-t border-white/10 mt-10 pt-6 text-center">

          <p className="text-gray-400 text-sm">
            © 2026 Kurru Pooja Sri
          </p>

          <p className="text-gray-500 text-sm mt-2">
            Built with React & Tailwind CSS
          </p>

        </div>

      </div>
    </footer>
  );
}

export default Footer;