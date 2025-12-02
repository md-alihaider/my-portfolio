import React, { useState } from "react";
import {
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  Instagram,
  Send,
  MapPin,
} from "lucide-react";
import { PERSONAL_INFO, SKILLS, PROJECTS } from "../data";

export const Hero = () => (
  <section
    id="home"
    className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 pb-16 px-4 md:px-8"
  >
    <div
      className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full blur-[120px] pointer-events-none -z-10"
      style={{ backgroundColor: "var(--primary)", opacity: 0.08 }}
    ></div>

    <div className="max-w-4xl mx-auto w-full flex flex-col items-center text-center animate-in slide-in-from-bottom duration-700">
      <h3
        className="text-xl md:text-2xl font-bold mb-3"
        style={{ color: "var(--text)" }}
      >
        Hello, It's Me
      </h3>
      <h1
        className="text-5xl md:text-7xl font-bold leading-tight tracking-tight mb-4 wrap-break-word"
        style={{ color: "var(--text)" }}
      >
        {PERSONAL_INFO.name}
      </h1>
      <div
        className="text-2xl md:text-3xl font-bold flex flex-wrap gap-2 justify-center mb-6"
        style={{ color: "var(--text)" }}
      >
        And I'm a{" "}
        <span style={{ color: "var(--primary)" }}>
          {PERSONAL_INFO.roles[0]}
        </span>
      </div>
      <p
        className="max-w-2xl leading-relaxed text-sm md:text-base mb-8 px-2"
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
            {key === "github" && <Github className="w-4 h-4" />}
            {key === "linkedin" && <Linkedin className="w-4 h-4" />}
            {key === "instagram" && <Instagram className="w-4 h-4" />}
          </a>
        ))}
      </div>

      <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto px-4 sm:px-0">
        <a
          href="#"
          className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full font-bold text-sm transition-transform hover:-translate-y-1 shadow-lg hover:shadow-xl w-full sm:w-auto"
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
          className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full font-bold text-sm transition-transform hover:-translate-y-1 border shadow-lg hover:shadow-xl w-full sm:w-auto"
          style={{ borderColor: "var(--primary)", color: "var(--text)" }}
        >
          View Projects
        </a>
      </div>
    </div>
  </section>
);

export const About = () => (
  <section
    id="about"
    className="min-h-[90vh] flex items-center justify-center py-16 md:py-20 px-4 md:px-8"
    style={{ backgroundColor: "var(--bg-light)" }}
  >
    <div className="max-w-3xl mx-auto text-center">
      <h2
        className="text-3xl md:text-4xl font-bold mb-6"
        style={{ color: "var(--text)" }}
      >
        About <span style={{ color: "var(--primary)" }}>Me</span>
      </h2>
      <h3
        className="text-xl font-semibold mb-6"
        style={{ color: "var(--text)" }}
      >
        {PERSONAL_INFO.title}
      </h3>
      <p
        className="leading-relaxed mb-8 text-base md:text-lg"
        style={{ color: "var(--text-muted)" }}
      >
        {PERSONAL_INFO.about}
      </p>
      <a
        href="#contact"
        className="inline-block px-6 py-2 rounded-full font-bold text-xs border transition-all hover:bg-opacity-10"
        style={{
          borderColor: "var(--primary)",
          color: "var(--text)",
          backgroundColor: "transparent",
        }}
      >
        Read More
      </a>
    </div>
  </section>
);

export const Skills = () => {
  const [activeSkillFilter, setActiveSkillFilter] = useState("All");
  const filteredSkills =
    activeSkillFilter === "All"
      ? SKILLS
      : SKILLS.filter((s) => s.category === activeSkillFilter);
  const skillCategories = ["All", "Frontend", "Backend", "Tools"];

  return (
    <section
      id="skills"
      className="py-20 px-4 md:px-8"
      style={{ backgroundColor: "var(--bg)" }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2
            className="text-4xl font-bold mb-8"
            style={{ color: "var(--text)" }}
          >
            My <span style={{ color: "var(--primary)" }}>Skills</span>
          </h2>
          <div className="flex flex-wrap justify-center gap-3 md:gap-4 mb-12">
            {skillCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveSkillFilter(cat)}
                className={`px-5 py-2 rounded-full text-sm font-bold transition-all border`}
                style={{
                  backgroundColor:
                    activeSkillFilter === cat
                      ? "var(--primary)"
                      : "transparent",
                  color:
                    activeSkillFilter === cat
                      ? "var(--bg-dark)"
                      : "var(--text)",
                  borderColor: "var(--primary)",
                }}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {filteredSkills.map((skill, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl border transition-all hover:-translate-y-1 hover:shadow-lg"
              style={{
                backgroundColor: "var(--bg-light)",
                borderColor: "var(--border)",
              }}
            >
              <div className="flex items-center gap-4 mb-4">
                <div
                  className="p-2 rounded-lg"
                  style={{
                    backgroundColor: "var(--bg)",
                    color: "var(--primary)",
                  }}
                >
                  {skill.icon}
                </div>
                <span
                  className="font-bold text-lg"
                  style={{ color: "var(--text)" }}
                >
                  {skill.name}
                </span>
              </div>
              <div
                className="w-full h-2 rounded-full mb-2"
                style={{ backgroundColor: "var(--bg)" }}
              >
                <div
                  className="h-full rounded-full transition-all duration-1000 ease-out"
                  style={{
                    width: `${skill.percent}%`,
                    backgroundColor: "var(--primary)",
                  }}
                ></div>
              </div>
              <div
                className="text-right text-sm font-bold"
                style={{ color: "var(--text-muted)" }}
              >
                {skill.percent}%
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export const Projects = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const filteredProjects =
    activeFilter === "All"
      ? PROJECTS
      : PROJECTS.filter((p) => p.category === activeFilter);
  const categories = ["All", ...new Set(PROJECTS.map((p) => p.category))];

  return (
    <section
      id="projects"
      className="py-16 md:py-20 px-4 md:px-8"
      style={{ backgroundColor: "var(--bg-light)" }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2
            className="text-3xl md:text-4xl font-bold mb-4"
            style={{ color: "var(--text)" }}
          >
            Latest <span style={{ color: "var(--primary)" }}>Projects</span>
          </h2>
          <div className="flex flex-wrap justify-center gap-2 mt-8">
            {categories.map((c) => (
              <button
                key={c}
                onClick={() => setActiveFilter(c)}
                className={`px-4 py-2 rounded-full text-sm font-bold transition-all border`}
                style={{
                  backgroundColor:
                    activeFilter === c ? "var(--text)" : "var(--bg)",
                  color: activeFilter === c ? "var(--bg)" : "var(--text-muted)",
                  borderColor: "var(--border)",
                }}
              >
                {c}
              </button>
            ))}
          </div>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((p) => (
            <div
              key={p.id}
              className="group relative rounded-3xl overflow-hidden border shadow-sm hover:shadow-xl transition-all duration-300"
              style={{
                backgroundColor: "var(--bg)",
                borderColor: "var(--border)",
              }}
            >
              <div
                className="aspect-video overflow-hidden relative"
                style={{ backgroundColor: "var(--bg-dark)" }}
              >
                <img
                  src={p.image}
                  alt={p.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
                  <button
                    className="p-3 rounded-full hover:scale-110 transition-transform"
                    style={{
                      backgroundColor: "var(--bg)",
                      color: "var(--text)",
                    }}
                  >
                    <ExternalLink className="w-5 h-5" />
                  </button>
                  <button
                    className="p-3 rounded-full hover:scale-110 transition-transform"
                    style={{
                      backgroundColor: "var(--bg)",
                      color: "var(--text)",
                    }}
                  >
                    <Github className="w-5 h-5" />
                  </button>
                </div>
              </div>
              <div className="p-6">
                <div
                  className="text-xs font-bold mb-2 uppercase tracking-wide"
                  style={{ color: "var(--primary)" }}
                >
                  {p.category}
                </div>
                <h3
                  className="text-xl font-bold mb-3"
                  style={{ color: "var(--text)" }}
                >
                  {p.title}
                </h3>
                <p
                  className="text-sm mb-4 line-clamp-2"
                  style={{ color: "var(--text-muted)" }}
                >
                  {p.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <span
                      key={t}
                      className="px-2 py-1 text-xs rounded-md"
                      style={{
                        backgroundColor: "var(--bg-light)",
                        color: "var(--text-muted)",
                      }}
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export const Contact = () => (
  <section
    id="contact"
    className="py-20 lg:py-28 px-4 sm:px-6 md:px-8"
    style={{ backgroundColor: "var(--bg)" }}
  >
    <div className="max-w-6xl mx-auto">
      <div className="text-center mb-16 lg:mb-20">
        <h2
          className="text-4xl md:text-5xl font-bold mb-4"
          style={{ color: "var(--text)" }}
        >
          Get In <span style={{ color: "var(--primary)" }}>Touch</span>
        </h2>
        <p className="text-lg" style={{ color: "var(--text-muted)" }}>
          Have a project or idea? Let's connect and bring it to life together.
        </p>
      </div>
      <div className="grid md:grid-cols-2 gap-12 lg:gap-24 items-start">
        <div className="space-y-10">
          <h3
            className="text-2xl font-bold mb-8"
            style={{ color: "var(--text)" }}
          >
            Contact Information
          </h3>
          <div className="space-y-8">
            <div className="flex items-start gap-5 group">
              <div
                className="w-14 h-14 rounded-full shrink-0 flex items-center justify-center transition-all group-hover:scale-110 shadow-sm"
                style={{
                  backgroundColor: "var(--bg-light)",
                  color: "var(--primary)",
                }}
              >
                <Mail className="w-6 h-6" />
              </div>
              <div className="flex-1 min-w-0">
                <p
                  className="text-sm font-bold uppercase tracking-wider mb-1"
                  style={{ color: "var(--text-muted)" }}
                >
                  Email
                </p>
                <a
                  href={`mailto:${PERSONAL_INFO.email}`}
                  className="text-lg font-medium transition-colors hover:text-(--primary) wrap-break-word"
                  style={{ color: "var(--text)" }}
                >
                  {PERSONAL_INFO.email}
                </a>
              </div>
            </div>
            <div className="flex items-start gap-5 group">
              <div
                className="w-14 h-14 rounded-full shrink-0 flex items-center justify-center transition-all group-hover:scale-110 shadow-sm"
                style={{
                  backgroundColor: "var(--bg-light)",
                  color: "var(--primary)",
                }}
              >
                <Linkedin className="w-6 h-6" />
              </div>
              <div>
                <p
                  className="text-sm font-bold uppercase tracking-wider mb-1"
                  style={{ color: "var(--text-muted)" }}
                >
                  LinkedIn
                </p>
                <a
                  href={PERSONAL_INFO.socials.linkedin}
                  className="text-lg font-medium transition-colors hover:text-(--primary)"
                  style={{ color: "var(--text)" }}
                >
                  {PERSONAL_INFO.name}
                </a>
              </div>
            </div>
            <div className="flex items-start gap-5 group">
              <div
                className="w-14 h-14 rounded-full shrink-0 flex items-center justify-center transition-all group-hover:scale-110 shadow-sm"
                style={{
                  backgroundColor: "var(--bg-light)",
                  color: "var(--primary)",
                }}
              >
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <p
                  className="text-sm font-bold uppercase tracking-wider mb-1"
                  style={{ color: "var(--text-muted)" }}
                >
                  Location
                </p>
                <span
                  className="text-lg font-medium"
                  style={{ color: "var(--text)" }}
                >
                  {PERSONAL_INFO.location}
                </span>
              </div>
            </div>
          </div>
          <div className="pt-10">
            <h4
              className="text-lg font-bold mb-5"
              style={{ color: "var(--text)" }}
            >
              Connect With Me
            </h4>
            <div className="flex gap-4">
              {Object.entries(PERSONAL_INFO.socials).map(([key, url]) => (
                <a
                  key={key}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full flex items-center justify-center transition-all hover:scale-110 hover:-translate-y-1 shadow-md hover:shadow-lg"
                  style={{
                    backgroundColor: "var(--bg-light)",
                    color: "var(--text)",
                  }}
                >
                  {key === "github" && <Github className="w-5 h-5" />}
                  {key === "linkedin" && <Linkedin className="w-5 h-5" />}
                  {key === "instagram" && <Instagram className="w-5 h-5" />}
                </a>
              ))}
            </div>
          </div>
        </div>
        <div
          className="p-8 md:p-10 lg:p-12 rounded-3xl shadow-2xl transition-all hover:shadow-primary/5"
          style={{
            backgroundColor: "var(--bg-light)",
            border: `1px solid var(--border)`,
          }}
        >
          <h3
            className="text-2xl font-bold mb-8 text-center"
            style={{ color: "var(--text)" }}
          >
            Send a Message
          </h3>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              alert("Message sent!");
            }}
            className="space-y-6"
          >
            <div>
              <label
                className="block text-sm font-medium mb-2 pl-1"
                style={{ color: "var(--text-muted)" }}
              >
                Your Name
              </label>
              <input
                type="text"
                placeholder="John Doe"
                className="w-full px-5 py-4 rounded-xl outline-none transition-all focus:ring-2 focus:ring-opacity-50"
                style={{
                  backgroundColor: "var(--bg)",
                  border: `1px solid var(--border-muted)`,
                  color: "var(--text)",
                  borderColor: "var(--border)",
                }}
              />
            </div>
            <div>
              <label
                className="block text-sm font-medium mb-2 pl-1"
                style={{ color: "var(--text-muted)" }}
              >
                Your Email
              </label>
              <input
                type="email"
                placeholder="john@example.com"
                className="w-full px-5 py-4 rounded-xl outline-none transition-all focus:ring-2 focus:ring-opacity-50"
                style={{
                  backgroundColor: "var(--bg)",
                  border: `1px solid var(--border-muted)`,
                  color: "var(--text)",
                  borderColor: "var(--border)",
                }}
              />
            </div>
            <div>
              <label
                className="block text-sm font-medium mb-2 pl-1"
                style={{ color: "var(--text-muted)" }}
              >
                Your Message
              </label>
              <textarea
                rows="5"
                placeholder="Hello! I'd like to discuss..."
                className="w-full px-5 py-4 rounded-xl outline-none transition-all focus:ring-2 focus:ring-opacity-50"
                style={{
                  backgroundColor: "var(--bg)",
                  border: `1px solid var(--border-muted)`,
                  color: "var(--text)",
                  borderColor: "var(--border)",
                }}
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full py-4 rounded-xl font-bold text-sm transition-all hover:opacity-90 flex items-center justify-center gap-2 mt-4 shadow-lg hover:shadow-xl hover:-translate-y-1"
              style={{
                backgroundColor: "var(--primary)",
                color: "var(--bg-dark)",
              }}
            >
              Send Message <Send className="w-4 h-4" />
            </button>
          </form>
        </div>
      </div>
    </div>
  </section>
);
