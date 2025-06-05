import React, { useState } from "react";
import { projects } from "../data/projects";
import { ProjectCard } from "../../data/projects";

const categories = ["Все", "Веб", "Мобильные", "Дизайн"];

export function Portfolio() {
  const [activeCategory, setActiveCategory] = useState("Все");

  const filteredProjects =
    activeCategory === "Все"
      ? projects
      : projects.filter((project) => project.category === activeCategory);

  return (
    <section id="portfolio" className="py-16 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-4">Мои проекты</h2>
        <p className="text-gray-600 text-center mb-8 max-w-2xl mx-auto">
          Здесь представлены мои последние работы. Каждый проект - это
          уникальный опыт и решение конкретных задач.
        </p>

        <div className="flex justify-center mb-8">
          <div className="inline-flex rounded-md shadow-sm">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 text-sm font-medium rounded-md transition-colors ${
                  activeCategory === category
                    ? "bg-blue-600 text-white"
                    : "bg-white text-gray-700 hover:bg-gray-100"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
