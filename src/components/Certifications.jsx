import {
  FaAws,
  FaGithub,
  FaHtml5,
  FaCode,
  FaDatabase,
} from "react-icons/fa";

function Certifications() {
  const certifications = [
    {
      icon: <FaAws className="text-4xl text-orange-400" />,
      title: "AWS Certified AI Practitioner",
      issuer: "Amazon Web Services • 2025",
      featured: true,
    },
    {
      icon: <FaDatabase className="text-4xl text-green-400" />,
      title: "MongoDB Certified Associate Developer – Node.js",
      issuer: "MongoDB • 2026",
      featured: true,
    },
    {
      icon: <FaGithub className="text-4xl text-white" />,
      title: "Microsoft GitHub Foundations Certified",
      issuer: "GitHub • 2026",
      featured: true,
    },
    {
      icon: <FaHtml5 className="text-4xl text-orange-500" />,
      title: "IT Specialist HTML & CSS",
      issuer: "Certiport Pearson • 2023",
      featured: false,
    },
    {
      icon: <FaCode className="text-4xl text-cyan-400" />,
      title: "C Programming Certificate",
      issuer: "Cisco NetAcad • 2023",
      featured: false,
    },
  ];

  return (
    <section
      id="certifications"
      className="py-28 bg-[#050816]"
    >
      <div className="section-container">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold gradient-text mb-4">
            Certifications
          </h2>

          <p className="text-gray-400 text-lg">
            Verified certifications in web development,
            cloud technologies, and software engineering.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className={`rounded-3xl p-8 bg-white/5 backdrop-blur-md transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_0_30px_rgba(139,92,246,0.25)]
              
              ${
                cert.featured
                  ? "border border-violet-500/40"
                  : "border border-white/10"
              }`}
            >
              {/* Icon */}
              <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center mb-6">
                {cert.icon}
              </div>

              {/* Badge */}
              {cert.featured && (
                <span className="inline-block mb-3 px-3 py-1 rounded-full text-xs bg-violet-500/20 text-violet-300">
                  Featured Certification
                </span>
              )}

              {/* Title */}
              <h3 className="text-xl font-bold text-white mb-2">
                {cert.title}
              </h3>

              {/* Issuer */}
              <p className="text-gray-400">
                {cert.issuer}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Certifications;