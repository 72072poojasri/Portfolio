import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { FaGithub, FaLinkedin, FaDownload } from "react-icons/fa";
import heroImage from "../assets/hero.png";
import portfolioData from "../data/portfolioData";

function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden bg-[#050816]"
    >
      {/* Background Glow */}
      <div className="absolute top-20 left-0 w-96 h-96 bg-violet-600/20 blur-[150px] rounded-full" />
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-cyan-500/20 blur-[150px] rounded-full" />

      <div className="section-container relative z-10 pt-24">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* LEFT SIDE */}
          <div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-violet-500/30 bg-violet-500/10 text-fuchsia-200 text-sm mb-8"
            >
              ● Available for Internships & Full-Time Roles
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-violet-200 text-xl mb-4"
            >
              Hey, I'm
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-5xl md:text-7xl font-bold leading-tight"
            >
              KURRU
              <br />

              <span
                className="
                  bg-gradient-to-r
                  from-violet-300
                  via-purple-400
                  to-pink-300
                  bg-clip-text
                  text-transparent
                "
              >
                POOJA SRI
              </span>
            </motion.h1>

            {/* Animated Role */}
            <div
              className="
                mt-8
                text-2xl
                md:text-3xl
                font-semibold
                bg-gradient-to-r
                from-violet-300
                via-fuchsia-300
                to-cyan-300
                bg-clip-text
                text-transparent
              "
            >
              <TypeAnimation
                sequence={[
                  "AI & Full Stack Developer",
                  2000,
                  "Software Developer",
                  2000,
                  "Frontend Developer",
                  2000,
                  "React Developer",
                  2000,
                ]}
                speed={50}
                repeat={Infinity}
              />
            </div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="text-gray-400 leading-8 mt-8 max-w-xl text-lg"
            >
              Passionate about developing scalable web applications,
              building intuitive user experiences, and leveraging
              AI-powered solutions to solve real-world problems.
            </motion.p>

            {/* Buttons */}
            <div className="flex flex-wrap gap-4 mt-10">

              <a
                href="#projects"
                className="
                  px-8 py-4 rounded-xl
                  bg-gradient-to-r
                  from-violet-600
                  hover:scale-105
                  transition-all
                  duration-300
                  shadow-lg
                  shadow-violet-400/30
                "
              >
                Explore Projects
              </a>

              <a
                href={portfolioData.personal.resume}
                target="_blank"
                rel="noreferrer"
                className="
                  px-8 py-4 rounded-xl
                  border border-white/20
                  hover:border-cyan-400
                  hover:bg-cyan-400/10
                  transition-all
                  duration-300
                "
              >
                View Resume
              </a>

            </div>

            {/* Social Icons */}
            <div className="flex gap-6 mt-10">

              <a
                href={portfolioData.personal.github}
                target="_blank"
                rel="noreferrer"
                className="
                  text-2xl
                  text-gray-400
                  hover:text-violet-400
                  hover:scale-125
                  transition-all
                  duration-300
                "
              >
                <FaGithub />
              </a>

              <a
                href={portfolioData.personal.linkedin}
                target="_blank"
                rel="noreferrer"
                className="
                  text-2xl
                  text-gray-400
                  hover:text-cyan-400
                  hover:scale-125
                  transition-all
                  duration-300
                "
              >
                <FaLinkedin />
              </a>

              <a
                href={portfolioData.personal.resume}
                target="_blank"
                rel="noreferrer"
                className="
                  text-2xl
                  text-gray-400
                  hover:text-pink-400
                  hover:scale-125
                  transition-all
                  duration-300
                "
              >
                <FaDownload />
              </a>

            </div>

          </div>

          {/* RIGHT SIDE */}
          <motion.div
            animate={{
              y: [0, -10, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
            }}
            className="hidden lg:flex justify-end pr-12"
          >
            <img
              src={heroImage}
              alt="Developer Illustration"
              className="
                w-[220px]
                md:w-[260px]
                xl:w-[300px]
                opacity-90
                drop-shadow-[0_0_30px_rgba(139,92,246,0.2)]
              "
            />
          </motion.div>

        </div>
      </div>
    </section>
  );
}

export default Hero;