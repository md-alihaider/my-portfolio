import React, { useState, useEffect } from "react";
import { PERSONAL_INFO } from "../utils/data";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

const Hero = () => {
  const roles = PERSONAL_INFO.roles;
  const [index, setIndex] = useState(0);

  // Rotate roles every 2 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % roles.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [roles.length]);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 pb-16 px-4 md:px-8"
    >
      {/* Subtle background glow */}
      <div
        className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[420px] h-[420px] rounded-full blur-[140px] opacity-10 animate-pulse-slow pointer-events-none -z-10"
        style={{ backgroundColor: "var(--primary)" }}
      ></div>

      <div className="max-w-4xl mx-auto w-full flex flex-col items-center text-center animate-fade-in">
        {/* Small intro text */}
        <p
          className="text-sm md:text-base mb-2 tracking-wide"
          style={{ color: "var(--text-muted)" }}
        >
          Hi, I&apos;m
        </p>

        {/* Name */}
        <h1
          className="text-4xl md:text-6xl font-bold leading-tight tracking-tight mb-2 wrap-break-wordbreak-words"
          style={{ color: "var(--text)" }}
        >
          {PERSONAL_INFO.name}
        </h1>

        {/* Animated Role */}
        <div
          className="mt-1 text-xl md:text-3xl font-semibold animate-fade-up-slow text-center leading-snug"
          style={{ color: "var(--text)" }}
        >
          I&apos;m a{" "}
          <span style={{ color: "var(--primary)" }}>{roles[index]}</span>
        </div>

        {/* Bio */}
        <p
          className="max-w-2xl leading-relaxed text-sm md:text-lg mb-8 mt-5 px-2 animate-fade-up-slower"
          style={{ color: "var(--text-muted)" }}
        >
          {PERSONAL_INFO.bio}
        </p>

        {/* Social icons */}
        <div className="flex gap-4 mb-8 animate-fade-up-slower">
          {Object.entries(PERSONAL_INFO.socials).map(([key, url]) => (
            <a
              key={key}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 flex items-center justify-center rounded-full border transition-all active:scale-95 sm:hover:scale-110 opacity-80 hover:opacity-100"
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

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto px-4 sm:px-0 animate-fade-up">
          {/* Download CV */}
          <a
            href="/Ali-Haider-CV.pdf"
            download
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full font-bold text-base 
                       transition-all shadow-lg active:scale-95 sm:hover:-translate-y-1 sm:hover:shadow-xl w-full sm:w-auto"
            style={{
              backgroundColor: "var(--primary)",
              color: "var(--bg-dark)",
              boxShadow: `0 0 12px var(--primary)`,
            }}
          >
            Download CV
          </a>

          {/* View Projects */}
          <a
            href="#projects"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full font-bold text-base 
                       transition-all border shadow-lg active:scale-95 sm:hover:-translate-y-1 sm:hover:shadow-xl w-full sm:w-auto"
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
