import { useRef } from "react";
import emailjs from "@emailjs/browser";
import {
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaPaperPlane,
} from "react-icons/fa";

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_ivwlj0s",
        "template_bxtuxim",
        form.current,
        "FfjpFdgxLrAi4QVIx"
      )
      .then(
        () => {
          alert("Message sent successfully!");
          form.current.reset();
        },
        (error) => {
          console.log("EMAILJS ERROR:", error);
          alert("Failed to send message.");
        }
      );
  };

  return (
    <section
      id="contact"
      className="py-28 bg-[#050816]"
    >
      <div className="section-container">

        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold gradient-text mb-4">
            Get In Touch
          </h2>

          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Interested in internships, collaborations, or opportunities?
            Feel free to reach out.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10">

          {/* Left Side */}
          <div className="space-y-6">

            <div className="glass-card p-6 rounded-3xl border border-white/10">
              <div className="flex items-center gap-5">
                <div className="w-14 h-14 rounded-2xl bg-violet-500/10 flex items-center justify-center">
                  <FaEnvelope className="text-violet-400 text-2xl" />
                </div>

                <div>
                  <p className="text-sm text-gray-500 uppercase">
                    Email
                  </p>

                  <p className="text-lg font-medium">
                    poojasrikurru@gmail.com
                  </p>
                </div>
              </div>
            </div>

            <div className="glass-card p-6 rounded-3xl border border-white/10">
              <div className="flex items-center gap-5">
                <div className="w-14 h-14 rounded-2xl bg-cyan-500/10 flex items-center justify-center">
                  <FaLinkedin className="text-cyan-400 text-2xl" />
                </div>

                <div>
                  <p className="text-sm text-gray-500 uppercase">
                    LinkedIn
                  </p>

                  <a
                    href="https://www.linkedin.com/in/poojasri-k-7067142a5/"
                    target="_blank"
                    rel="noreferrer"
                    className="text-lg font-medium hover:text-cyan-400 transition"
                  >
                    poojasri-k-7067142a5
                  </a>
                </div>
              </div>
            </div>

            <div className="glass-card p-6 rounded-3xl border border-white/10">
              <div className="flex items-center gap-5">
                <div className="w-14 h-14 rounded-2xl bg-green-500/10 flex items-center justify-center">
                  <FaGithub className="text-green-400 text-2xl" />
                </div>

                <div>
                  <p className="text-sm text-gray-500 uppercase">
                    GitHub
                  </p>

                  <a
                    href="https://github.com/72072poojasri"
                    target="_blank"
                    rel="noreferrer"
                    className="text-lg font-medium hover:text-green-400 transition"
                  >
                    72072poojasri
                  </a>
                </div>
              </div>
            </div>

          </div>

          {/* Right Side Form */}
          <div className="glass-card p-8 rounded-3xl border border-white/10">

            <form
              ref={form}
              onSubmit={sendEmail}
              className="space-y-6"
            >

              <div className="grid md:grid-cols-2 gap-4">

                <div>
                  <label className="block mb-2 text-gray-300">
                    Name
                  </label>

                  <input
                    type="text"
                    name="user_name"
                    required
                    placeholder="Your Name"
                    className="w-full p-4 rounded-xl bg-white/5 border border-white/10 focus:border-violet-500 outline-none"
                  />
                </div>

                <div>
                  <label className="block mb-2 text-gray-300">
                    Email
                  </label>

                  <input
                    type="email"
                    name="user_email"
                    required
                    placeholder="your@email.com"
                    className="w-full p-4 rounded-xl bg-white/5 border border-white/10 focus:border-violet-500 outline-none"
                  />
                </div>

              </div>

              <div>
                <label className="block mb-2 text-gray-300">
                  Message
                </label>

                <textarea
                  name="message"
                  rows="6"
                  required
                  placeholder="Write your message..."
                  className="w-full p-4 rounded-xl bg-white/5 border border-white/10 focus:border-violet-500 outline-none resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                className="flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-violet-600 to-fuchsia-600 hover:scale-105 transition"
              >
                Let's Connect
                <FaPaperPlane />
              </button>

            </form>

          </div>

        </div>
      </div>
    </section>
  );
}

export default Contact;