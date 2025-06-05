import { motion } from "framer-motion";

const projects = [
  {
    id: 1,
    title: "Название проекта 1",
    description: "Краткое описание проекта и технологий",
    tags: ["React", "Tailwind", "API"],
    image: "/project-placeholder.jpg",
    link: "#",
  },
  {
    id: 2,
    title: "Название проекта 2",
    description: "Краткое описание проекта и технологий",
    tags: ["Node.js", "MongoDB"],
    image: "/project-placeholder.jpg",
    link: "#",
  },
  // Добавь больше проектов
];

function Works() {
  return (
    <section id="works" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-dark mb-12 text-center">
          Мои работы
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition"
            >
              <div className="h-48 bg-gray-200 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="font-bold text-xl mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-xs"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <a
                  href={project.link}
                  className="inline-block text-primary font-medium hover:underline"
                >
                  Подробнее →
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
export default Works;
