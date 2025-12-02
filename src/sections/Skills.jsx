import React, { useState } from 'react'
import { SKILLS } from '../utils/data';

const Skills = () => {
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
                  boxShadow: activeSkillFilter === cat ? "0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)" : "",
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
}

export default Skills
