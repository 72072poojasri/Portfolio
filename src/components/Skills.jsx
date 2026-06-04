import { Icon } from "@iconify/react";

const skillCategories = [
  {
    title: "Frontend",
    skills: [
      { name: "HTML5", icon: "vscode-icons:file-type-html" },
      { name: "CSS3", icon: "vscode-icons:file-type-css" },
      { name: "JavaScript", icon: "logos:javascript" },
      { name: "React", icon: "logos:react" },
    ],
  },

  {
    title: "Backend",
    skills: [
      { name: "Node.js", icon: "logos:nodejs-icon" },
      { name: "Express.js", icon: "simple-icons:express" },
      { name: "MongoDB", icon: "logos:mongodb-icon" },
    ],
  },

  {
    title: "Languages",
    skills: [
      { name: "Python", icon: "logos:python" },
      { name: "JavaScript", icon: "logos:javascript" },
      { name: "Artificial Intelligence", icon: "mdi:robot-outline" },
      { name: "Machine Learning", icon: "carbon:machine-learning-model" },
    ],
  },

  {
    title: "Tools",
    skills: [
      { name: "Git", icon: "logos:git-icon" },
      { name: "GitHub", icon: "mdi:github" },
      { name: "VS Code", icon: "logos:visual-studio-code" },
      { name: "Docker", icon: "logos:docker-icon" },
    ],
  },
];

function Skills() {
  return (
    <section id="skills" className="py-28 bg-[#050816]">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold gradient-text mb-5">
            Skills & Tools
          </h2>

          <p className="text-gray-400 text-lg">
            Technologies I use to build modern software.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {skillCategories.map((category) => (
            <div
              key={category.title}
              className="glass-card rounded-3xl p-8 min-h-[280px]"
            >
              <h3 className="text-2xl font-semibold mb-8">
                {category.title}
              </h3>

              <div className="grid grid-cols-4 gap-6">
                {category.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="flex flex-col items-center"
                  >
                    <div className="w-18 h-18 rounded-2xl border border-white/10 bg-[#0B1120] flex items-center justify-center hover:border-violet-500 hover:scale-105 transition-all duration-300">
                      <Icon
                        icon={skill.icon}
                        width="38"
                        height="38"
                      />
                    </div>

                    <p className="text-gray-400 text-sm mt-3 text-center">
                      {skill.name}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;