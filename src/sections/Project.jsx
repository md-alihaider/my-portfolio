import { useState } from "react";
import { PROJECTS } from "../utils/data";
import { ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa";

const Project = () => {
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
      style={{
        backgroundImage:
          "linear-gradient(to right, var(--bg-light), var(--bg))",
      }}
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
                  {/* --- CHANGED BUTTON TO 'a' TAG --- */}
                  <a
                    href={p.demoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-full hover:scale-110 transition-transform flex items-center justify-center"
                    style={{
                      backgroundColor: "var(--bg)",
                      color: "var(--text)",
                    }}
                  >
                    <ExternalLink className="w-5 h-5" />
                  </a>

                  {/* --- CHANGED BUTTON TO 'a' TAG --- */}
                  <a
                    href={p.repoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-full hover:scale-110 transition-transform flex items-center justify-center"
                    style={{
                      backgroundColor: "var(--bg)",
                      color: "var(--text)",
                    }}
                  >
                    <FaGithub className="w-5 h-5" />
                  </a>
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

export default Project;
