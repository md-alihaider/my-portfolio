import { useState } from "react";
import { PROJECTS } from "../utils/data";
import { ExternalLink, X } from "lucide-react";
import { FaGithub } from "react-icons/fa";

const Project = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const [selectedProject, setSelectedProject] = useState(null); // for modal
  const [expandedIds, setExpandedIds] = useState([]); // for mobile expand

  const categories = ["All", ...new Set(PROJECTS.map((p) => p.category))];

  const filteredProjects =
    activeFilter === "All"
      ? PROJECTS
      : PROJECTS.filter((p) => p.category === activeFilter);

  const toggleExpand = (id) => {
    setExpandedIds((prev) =>
      prev.includes(id) ? prev.filter((v) => v !== id) : [...prev, id]
    );
  };

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
        {/* Header */}
        <div className="text-center mb-12">
          <h2
            className="text-3xl md:text-4xl font-bold mb-4"
            style={{ color: "var(--text)" }}
          >
            Featured <span style={{ color: "var(--primary)" }}>Projects</span>
          </h2>

          {/* Intro text */}
          <p
            className="max-w-2xl mx-auto text-base md:text-lg leading-relaxed mb-8"
            style={{ color: "var(--text-muted)" }}
          >
            Here are some of the projects I’ve built, ranging from full-stack
            applications to frontend experiments. Each project reflects my focus
            on clean architecture, practical functionality, and real-world
            usability.
          </p>

          {/* Filter buttons */}
          <div className="flex flex-wrap justify-center gap-2 mt-2">
            {categories.map((c) => (
              <button
                key={c}
                onClick={() => setActiveFilter(c)}
                className="px-4 py-2 rounded-full text-sm font-bold transition-all border"
                style={{
                  backgroundColor:
                    activeFilter === c ? "var(--primary)" : "transparent",
                  color:
                    activeFilter === c ? "var(--bg-dark)" : "var(--text-muted)",
                  borderColor: "var(--primary)",
                }}
              >
                {c}
              </button>
            ))}
          </div>
        </div>

        {/* Projects grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((p) => {
            const isExpanded = expandedIds.includes(p.id);

            return (
              <div
                key={p.id}
                className="group relative rounded-3xl overflow-hidden border shadow-sm hover:shadow-md transition-all duration-200 hover:-translate-y-0.5"
                style={{
                  backgroundColor: "var(--bg)",
                  borderColor: "var(--border)",
                }}
              >
                {/* Image + overlay */}
                <div
                  className="aspect-video overflow-hidden relative"
                  style={{ backgroundColor: "var(--bg-dark)" }}
                >
                  <img
                    src={p.image}
                    alt={p.title}
                    className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-300"
                  />

                  {/* Always visible on mobile, hover-only on desktop */}
                  <div className="absolute inset-0 bg-black/60 opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
                    <a
                      href={p.demoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 rounded-full transition-transform hover:-translate-y-px flex items-center justify-center"
                      style={{
                        backgroundColor: "var(--bg)",
                        color: "var(--text)",
                      }}
                    >
                      <ExternalLink className="w-5 h-5" />
                    </a>

                    <a
                      href={p.repoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 rounded-full transition-transform hover:-translate-y-px flex items-center justify-center"
                      style={{
                        backgroundColor: "var(--bg)",
                        color: "var(--text)",
                      }}
                    >
                      <FaGithub className="w-5 h-5" />
                    </a>
                  </div>
                </div>

                {/* Content */}
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

                  {/* Description + tap to expand on mobile */}
                  <p
                    className={`text-sm mb-2 ${
                      isExpanded ? "" : "line-clamp-2"
                    }`}
                    style={{ color: "var(--text-muted)" }}
                  >
                    {p.description}
                  </p>

                  {/* Tap to expand (mobile), View details (desktop) */}
                  <div className="flex items-center justify-between mb-3">
                    <button
                      onClick={() => toggleExpand(p.id)}
                      className="text-xs underline md:hidden"
                      style={{ color: "var(--text-muted)" }}
                    >
                      {isExpanded ? "Show less" : "Tap to expand"}
                    </button>

                    <button
                      onClick={() => setSelectedProject(p)}
                      className="hidden md:inline-flex text-xs underline"
                      style={{ color: "var(--text-muted)" }}
                    >
                      View details
                    </button>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {p.tags.map((t) => (
                      <span
                        key={t}
                        className="px-2 py-1 text-xs rounded-md transition-transform duration-150"
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
            );
          })}
        </div>
      </div>

      {/* Modal for full project details */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 px-4">
          <div
            className="max-w-lg w-full rounded-2xl border shadow-lg p-6 relative"
            style={{
              backgroundColor: "var(--bg)",
              borderColor: "var(--border)",
            }}
          >
            {/* Close button */}
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-3 right-3 p-1 rounded-full"
              style={{ color: "var(--text-muted)" }}
            >
              <X className="w-5 h-5" />
            </button>

            <div
              className="text-xs font-bold mb-2 uppercase tracking-wide"
              style={{ color: "var(--primary)" }}
            >
              {selectedProject.category}
            </div>

            <h3
              className="text-2xl font-bold mb-3"
              style={{ color: "var(--text)" }}
            >
              {selectedProject.title}
            </h3>

            <p
              className="text-sm mb-4 leading-relaxed"
              style={{ color: "var(--text-muted)" }}
            >
              {selectedProject.description}
            </p>

            <div className="flex flex-wrap gap-2 mb-4">
              {selectedProject.tags.map((t) => (
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

            <div className="flex gap-3">
              <a
                href={selectedProject.demoLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold border"
                style={{
                  borderColor: "var(--primary)",
                  color: "var(--text)",
                }}
              >
                <ExternalLink className="w-4 h-4" />
                Live Demo
              </a>

              <a
                href={selectedProject.repoLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold border"
                style={{
                  borderColor: "var(--primary)",
                  color: "var(--text)",
                }}
              >
                <FaGithub className="w-4 h-4" />
                View Code
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Project;
