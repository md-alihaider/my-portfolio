import React from "react";
import { PERSONAL_INFO } from "../utils/data";
import { Github, Instagram, Linkedin } from "lucide-react";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 pb-16 px-4 md:px-8"
    >
      <div
        className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[calc(100vw - 2rem)] h-[calc(100vw - 2rem)] rounded-full blur-[120px] pointer-events-none -z-10"
        style={{ backgroundColor: "var(--primary)", opacity: 0.08 }}
      ></div>

      <div className="max-w-4xl mx-auto w-full flex flex-col items-center text-center animate-in slide-in-from-bottom duration-700">
        <h3
          className="text-3xl md:text-4xl font-bold mb-4"
          style={{ color: "var(--text)" }}
        >
          Hello, 👋 It's Me
        </h3>
        <h1
          className="text-6xl md:text-8xl font-bold leading-tight tracking-tight mb-4 wrap-break-word"
          style={{ color: "var(--text)" }}
        >
          {PERSONAL_INFO.name}
        </h1>
        <div
          className="text-3xl md:text-4xl font-bold flex flex-wrap gap-2 justify-center mb-6"
          style={{ color: "var(--text)" }}
        >
          And I'm a{" "}
          <span style={{ color: "var(--primary)" }}>
            {PERSONAL_INFO.roles[0]}
          </span>
        </div>
        <p
          className="max-w-2xl leading-relaxed text-base md:text-xl mb-8 px-2"
          style={{ color: "var(--text-muted)" }}
        >
          {PERSONAL_INFO.bio}
        </p>

        <div className="flex gap-4 mb-8">
          {Object.entries(PERSONAL_INFO.socials).map(([key, url]) => (
            <a
              key={key}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full border flex items-center justify-center transition-all hover:scale-110 hover:border-opacity-100 opacity-80 hover:opacity-100"
              style={{
                borderColor: "var(--primary)",
                color: "var(--primary)",
                boxShadow: `0 0 10px var(--primary)`,
              }}
            >
              
              {key === "github" && <FaGithub className="w-6 h-6" />}
              {key === "linkedin" && <FaLinkedin className="w-6 h-6" />}
              {key === "instagram" && <FaInstagram className="w-6 h-6" />}
            </a>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto px-4 sm:px-0">
          <a
            href="#"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full font-bold text-base transition-transform hover:-translate-y-1 shadow-lg hover:shadow-xl w-full sm:w-auto"
            style={{
              backgroundColor: "var(--primary)",
              color: "var(--bg-dark)",
              boxShadow: `0 0 15px var(--primary)`,
            }}
          >
            Download CV
          </a>
          <a
            href="#projects"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full font-bold text-base transition-transform hover:-translate-y-1 border shadow-lg hover:shadow-xl w-full sm:w-auto"
            style={{ borderColor: "var(--primary)", color: "var(--text)" }}
          >
            View Projects
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;

