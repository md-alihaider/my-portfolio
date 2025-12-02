import React from "react";
// Using icons for Education, Projects, and Logic
import { ArrowRight, GraduationCap, FolderGit2, Brain } from "lucide-react";
import { PERSONAL_INFO } from "../utils/data";
import profileImg from "../assets/icons/Aboutme.jpg";
const About = () => {
  // New "Highlights" to fill space without repeating Skills
  const highlights = [
    {
      label: "Education",
      value: "BCA", // Change this to your degree
      icon: GraduationCap,
    },
    {
      label: "Projects",
      value: "5+ Built", // Highlights that you build things
      icon: FolderGit2,
    },
    {
      label: "Problem Solving",
      value: "DSA & Logic", // Shows you understand computer science fundamentals
      icon: Brain,
    },
  ];

  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center py-20 px-6 sm:px-12 md:px-16 lg:px-20 overflow-hidden"
      style={{ backgroundColor: "var(--bg-light)" }}
    >
      <div className="max-w-6xl mx-auto w-full">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* LEFT SIDE: Profile Image (Visual Weight) */}
          <div className="relative group order-2 md:order-1">
            <div
              className="absolute -inset-4 rounded-3xl opacity-20 blur-xl transition-all group-hover:opacity-30"
              style={{ backgroundColor: "var(--primary)" }}
            ></div>

            <div
              className="relative rounded-3xl overflow-hidden aspect-square shadow-2xl border-2"
              style={{
                borderColor: "var(--border-muted)",
                backgroundColor: "var(--bg)",
              }}
            >
              {/* Replace with your image */}
              <img
                src={profileImg}
                alt="Profile"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>

            {/* "Coder" Badge */}
            <div
              className="absolute -bottom-6 -right-6 p-4 rounded-xl shadow-xl flex items-center gap-3 animate-bounce-slow"
              style={{
                backgroundColor: "var(--bg)",
                border: "1px solid var(--border)",
              }}
            >
              <div className="w-3 h-3 rounded-full bg-(--primary) animate-pulse"></div>
              <span
                className="text-sm font-bold"
                style={{ color: "var(--text)" }}
              >
                Open to Work
              </span>
            </div>
          </div>

          {/* RIGHT SIDE: Text Content */}
          <div className="order-1 md:order-2">
            <h2
              className="text-4xl md:text-5xl font-bold mb-6"
              style={{ color: "var(--text)" }}
            >
              About <span style={{ color: "var(--primary)" }}>Me</span>
            </h2>

            <h3
              className="text-2xl font-semibold mb-6"
              style={{ color: "var(--text)" }}
            >
              {PERSONAL_INFO.title}
            </h3>

            <p
              className="leading-relaxed mb-8 text-base md:text-lg opacity-90"
              style={{ color: "var(--text-muted)" }}
            >
              {PERSONAL_INFO.about}
            </p>

            {/* HIGHLIGHTS GRID (Education & Activity) */}
            <div className="grid grid-cols-3 gap-4 mb-10">
              {highlights.map((item, index) => (
                <div
                  key={index}
                  className="p-4 rounded-xl text-center transition-all hover:-translate-y-1"
                  style={{
                    backgroundColor: "var(--bg)",
                    border: "1px solid var(--border-muted)",
                  }}
                >
                  <item.icon
                    className="w-6 h-6 mx-auto mb-2"
                    style={{ color: "var(--primary)" }}
                  />
                  <div
                    className="font-bold text-sm md:text-base"
                    style={{ color: "var(--text)" }}
                  >
                    {item.value}
                  </div>
                  <div
                    className="text-xs opacity-70"
                    style={{ color: "var(--text-muted)" }}
                  >
                    {item.label}
                  </div>
                </div>
              ))}
            </div>

            {/* Buttons */}
            <div className="flex flex-wrap gap-4">
              <a
                href="#contact"
                className="px-8 py-3 rounded-full font-bold text-base transition-all hover:scale-105 hover:shadow-lg flex items-center gap-2"
                style={{
                  backgroundColor: "var(--primary)",
                  color: "#fff",
                }}
              >
                Contact Me <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#projects"
                className="px-8 py-3 rounded-full font-bold text-base border transition-all hover:bg-(--primary)/10 flex items-center gap-2"
                style={{
                  borderColor: "var(--primary)",
                  color: "var(--text)",
                  backgroundColor: "transparent",
                }}
              >
                My Projects
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
