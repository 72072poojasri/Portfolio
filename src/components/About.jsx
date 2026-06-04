import { motion } from "framer-motion";
import { FaGraduationCap, FaTrophy, FaCode } from "react-icons/fa";

function About() {
  return (
    <section
      id="about"
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
          <h2 className="text-5xl font-bold mb-5">
            <span className="bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">
              About Me
            </span>
          </h2>

          <p className="text-gray-400 text-lg">
            A quick introduction about who I am and what I do.
          </p>
        </motion.div>

        {/* Content */}
        <div className="grid lg:grid-cols-2 gap-14 items-center">
          {/* Left Side */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <p className="text-gray-300 text-xl leading-10">
              I am <span className="text-violet-400 font-semibold">Kurru Pooja Sri</span>,
              a Final Year B.Tech student specializing in Artificial Intelligence
              and Machine Learning.
            </p>

            <p className="text-gray-400 mt-8 text-lg leading-9">
              I am passionate about Full Stack Development and enjoy building
              responsive, user-friendly web applications that solve real-world
              problems. My interests include modern web technologies, cloud
              computing, and creating impactful digital experiences.
            </p>

            <p className="text-gray-400 mt-8 text-lg leading-9">
              Currently, I am focused on strengthening my skills in React,
              JavaScript, Node.js, and building industry-ready projects while
              preparing for software development opportunities.
            </p>
          </motion.div>

          {/* Right Side Cards */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {/* Card 1 */}
            <div className="group p-6 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-md hover:border-violet-500 transition-all duration-300 hover:-translate-y-2">
              <div className="flex items-center gap-5">
                <div className="w-14 h-14 rounded-2xl bg-violet-500/20 flex items-center justify-center text-violet-400 text-xl">
                  <FaGraduationCap />
                </div>

                <div>
                  <p className="text-gray-500 text-sm uppercase tracking-wider">
                    Education
                  </p>

                  <h3 className="text-xl font-semibold mt-1">
                    B.Tech AIML
                  </h3>

                  <p className="text-violet-400 mt-1">
                    CGPA: 8.86 / 10
                  </p>
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="group p-6 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-md hover:border-violet-500 transition-all duration-300 hover:-translate-y-2">
              <div className="flex items-center gap-5">
                <div className="w-14 h-14 rounded-2xl bg-violet-500/20 flex items-center justify-center text-violet-400 text-xl">
                  <FaTrophy />
                </div>

                <div>
                  <p className="text-gray-500 text-sm uppercase tracking-wider">
                    Achievement
                  </p>

                  <h3 className="text-xl font-semibold mt-1">
                    Flipkart Grid 7.0
                  </h3>

                  <p className="text-violet-400 mt-1">
                    National Semi-Finalist
                  </p>
                </div>
              </div>
            </div>

            {/* Card 3 */}
            <div className="group p-6 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-md hover:border-cyan-500 transition-all duration-300 hover:-translate-y-2">
              <div className="flex items-center gap-5">
                <div className="w-14 h-14 rounded-2xl bg-cyan-500/20 flex items-center justify-center text-cyan-400 text-xl">
                  <FaCode />
                </div>

                <div>
                  <p className="text-gray-500 text-sm uppercase tracking-wider">
                    Current Focus
                  </p>

                  <h3 className="text-xl font-semibold mt-1">
                    Full Stack Development
                  </h3>

                  <p className="text-cyan-400 mt-1">
                    React • JavaScript • Node.js
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default About;