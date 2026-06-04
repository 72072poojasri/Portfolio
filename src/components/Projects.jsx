import { FaGithub } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";
import { motion } from "framer-motion";

function Projects() {
  const projects = [
    {
      category: "Online Bookstore Platform",
      title: "BookNest",
      description:
        "Modern online bookstore platform featuring categorized book listings, search functionality, bookmarking, and a fully responsive user experience.",
      tech: ["React", "JavaScript", "HTML", "CSS"],
      github: "https://github.com/72072poojasri/BookNest",
      live: "https://book-nest-sage.vercel.app/",
    },

    {
      category: "E-Commerce Web Application",
      title: "PetNesto",
      description:
        "Responsive e-commerce platform for pet products with category filtering, search functionality, modern UI design, and seamless navigation.",
      tech: ["React", "JavaScript", "HTML", "CSS"],
      github: "https://github.com/72072poojasri/PetNesto",
      live: "",
    },

    {
      category: "Educational Resource Platform",
      title: "My Study Vault",
      description:
        "Academic resource-sharing platform that enables students and faculty to upload, organize, and access educational resources efficiently.",
      tech: ["React", "JavaScript", "HTML", "CSS"],
      github: "https://github.com/72072poojasri/MyStudyVault",
      live: "",
    },
  ];

  return (
    <section
      id="projects"
      className="py-32 bg-[#050816] relative overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute top-20 left-20 w-72 h-72 bg-violet-600/10 blur-[120px] rounded-full"></div>
      <div className="absolute bottom-20 right-20 w-72 h-72 bg-cyan-500/10 blur-[120px] rounded-full"></div>

      <div className="section-container relative z-10">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">
              Project Showcase
            </span>
          </h2>

          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            Projects that reflect my passion for creating responsive,
            user-focused web applications and solving real-world problems
            through technology.
          </p>
        </motion.div>

        {/* Project Cards */}
        <div className="grid lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              viewport={{ once: true }}
              className="
                group
                relative
                overflow-hidden
                rounded-3xl
                p-8
                border
                border-white/10
                bg-white/5
                backdrop-blur-md
                hover:border-violet-500/60
                transition-all
                duration-500
                hover:-translate-y-3
                hover:shadow-[0_0_40px_rgba(139,92,246,0.35)]
              "
            >
              {/* Glow Effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500">
                <div className="absolute -top-20 -right-20 w-40 h-40 bg-violet-500/20 blur-3xl rounded-full"></div>
              </div>

              <div className="relative z-10">
                <span className="text-cyan-400 text-sm font-medium tracking-wider uppercase">
                  {project.category}
                </span>

                <h3 className="text-3xl font-bold mt-4 mb-5 text-white group-hover:text-violet-300 transition">
                  {project.title}
                </h3>

                <p className="text-gray-400 leading-8 mb-8">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-3 mb-8">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="
                        px-3 py-1
                        rounded-full
                        bg-violet-500/10
                        border
                        border-violet-500/20
                        text-violet-300
                        text-sm
                        hover:bg-violet-500/20
                        transition
                      "
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Buttons */}
                <div className="flex flex-wrap gap-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="
                      flex items-center gap-2
                      px-4 py-2
                      rounded-xl
                      border border-white/10
                      hover:border-violet-500
                      hover:bg-violet-500/10
                      transition
                    "
                  >
                    <FaGithub />
                    GitHub
                  </a>

                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noreferrer"
                      className="
                        flex items-center gap-2
                        px-4 py-2
                        rounded-xl
                        bg-gradient-to-r
                        from-violet-600
                        to-fuchsia-600
                        hover:scale-105
                        transition
                      "
                    >
                      <FiExternalLink />
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;