import React, { useState } from "react";
import { SKILLS } from "../utils/data";

const Skills = () => {
  const [activeSkillFilter, setActiveSkillFilter] = useState("All");
  const [animatedSkillIndexes, setAnimatedSkillIndexes] = useState([]); //  which skills are animated

  const skillCategories = ["All", "Frontend", "Backend", "Tools"];

  const filteredSkills =
    activeSkillFilter === "All"
      ? SKILLS
      : SKILLS.filter((s) => s.category === activeSkillFilter);

  const handleSkillClick = (idx) => {
    setAnimatedSkillIndexes(
      (prev) =>
        prev.includes(idx)
          ? prev.filter((i) => i !== idx) // tap again = reset
          : [...prev, idx] // tap = animate
    );
  };

  return (
    <section
      id="skills"
      className="py-20 px-4 md:px-8"
      style={{ backgroundColor: "var(--bg)" }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2
            className="text-4xl font-bold mb-4"
            style={{ color: "var(--text)" }}
          >
            My <span style={{ color: "var(--primary)" }}>Skills</span>
          </h2>

          <p
            className="max-w-2xl mx-auto text-base md:text-lg mb-8 leading-relaxed"
            style={{ color: "var(--text-muted)" }}
          >
            These are the technologies and tools I’ve worked with while building
            real-world projects. I continue learning and improving as I take on
            more challenging problems.
          </p>

          {/* Filter buttons */}
          <div className="flex flex-wrap justify-center gap-3 md:gap-4 mb-4 md:mb-6">
            {skillCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveSkillFilter(cat)}
                className="px-5 py-2 rounded-full text-sm font-bold transition-all border"
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
                  boxShadow:
                    activeSkillFilter === cat
                      ? "0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)"
                      : "",
                }}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Skills grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {filteredSkills.map((skill, idx) => {
            const isAnimated = animatedSkillIndexes.includes(idx);

            return (
              <div
                key={idx}
                role="button"
                tabIndex={0}
                onClick={() => handleSkillClick(idx)}
                onKeyDown={(e) => e.key === "Enter" && handleSkillClick(idx)}
                className="p-6 rounded-2xl border transition-all hover:-translate-y-1 hover:shadow-xl animate-in slide-in-from-bottom cursor-pointer"
                style={{
                  backgroundColor: "var(--bg-light)",
                  borderColor: "var(--border)",
                  animationDelay: `${idx * 80}ms`,
                }}
              >
                <div className="flex items-center justify-between mb-4">
                  {/* Icon + name */}
                  <div className="flex items-center gap-4">
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

                  {/* Category badge */}
                  <span
                    className="text-xs px-3 py-1 rounded-full font-semibold"
                    style={{
                      backgroundColor: "var(--bg)",
                      color: "var(--text-muted)",
                      border: "1px solid var(--border)",
                    }}
                  >
                    {skill.category}
                  </span>
                </div>

                {/* Progress bar */}
                <div
                  className="w-full h-2 rounded-full mb-2 overflow-hidden"
                  style={{ backgroundColor: "var(--bg)" }}
                >
                  <div
                    className="h-full rounded-full transition-all duration-1000 ease-out"
                    style={{
                      width: isAnimated ? `${skill.percent}%` : "0%",
                      backgroundColor: "var(--primary)",
                    }}
                  ></div>
                </div>

                {/* Percent text */}
                <div
                  className="text-right text-sm font-bold"
                  style={{ color: "var(--text-muted)" }}
                >
                  {isAnimated ? `${skill.percent}%` : "Tap to reveal"}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
