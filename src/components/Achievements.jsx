import { FaTrophy, FaRobot, FaGraduationCap, FaLaptopCode } from "react-icons/fa";

function Achievements() {
  const achievements = [
    {
      icon: <FaTrophy />,
      title: "Flipkart Grid 7.0",
      subtitle: "National Semi-Finalist",
      description:
        "Advanced through multiple competitive rounds and secured a National Semi-Finalist position in Flipkart Grid 7.0.",
      color: "text-yellow-400",
      bg: "bg-yellow-500/10",
    },
    {
      icon: <FaRobot />,
      title: "Best AI Integration",
      subtitle: "$20 Claude API Credits",
      description:
        "Recognized for outstanding AI integration in a project and received Claude API credits for the team.",
      color: "text-cyan-400",
      bg: "bg-cyan-500/10",
    },
    {
      icon: <FaGraduationCap />,
      title: "Academic Excellence",
      subtitle: "CGPA: 8.86 / 10",
      description:
        "Maintained strong academic performance throughout B.Tech in Artificial Intelligence and Machine Learning.",
      color: "text-violet-400",
      bg: "bg-violet-500/10",
    },
    {
      icon: <FaLaptopCode />,
      title: "Full Stack Development",
      subtitle: "Technical Hub Training",
      description:
        "Successfully completed Full Stack Development training with hands-on experience in modern web technologies.",
      color: "text-green-400",
      bg: "bg-green-500/10",
    },
  ];

  return (
    <section id="achievements" className="py-28 bg-[#050816]">
      <div className="section-container">
        {/* Heading */}
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-violet-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Achievements
            </span>
          </h2>

          <p className="text-gray-400 text-lg max-w-3xl mx-auto leading-8">
            Milestones that reflect my learning journey, technical growth,
            dedication, and passion for building impactful technology.
          </p>
        </div>

        {/* Achievement Cards */}
        <div className="grid md:grid-cols-2 gap-8">
          {achievements.map((achievement, index) => (
            <div
              key={index}
              className="
                group
                relative
                overflow-hidden
                rounded-3xl
                border
                border-white/10
                bg-white/5
                backdrop-blur-md
                p-8
                transition-all
                duration-500
                hover:-translate-y-3
                hover:border-violet-500/50
                hover:shadow-[0_0_40px_rgba(139,92,246,0.25)]
              "
            >
              {/* Glow Effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-r from-violet-500/5 to-cyan-500/5" />

              {/* Number */}
              <div className="absolute top-6 right-6 text-5xl font-bold text-white/5">
                0{index + 1}
              </div>

              {/* Icon */}
              <div
                className={`
                  w-16 h-16 rounded-2xl
                  flex items-center justify-center
                  text-3xl mb-6
                  ${achievement.bg}
                  ${achievement.color}
                  group-hover:scale-110
                  transition-all duration-500
                `}
              >
                {achievement.icon}
              </div>

              {/* Content */}
              <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                {achievement.title}
              </h3>

              <p className={`font-semibold mb-4 ${achievement.color}`}>
                {achievement.subtitle}
              </p>

              <p className="text-gray-400 leading-7">
                {achievement.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Achievements;