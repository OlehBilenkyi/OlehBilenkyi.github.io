import { motion } from "framer-motion";

const skills = [
  "JavaScript",
  "React",
  "HTML/CSS",
  "Figma",
  "Node.js",
  "Tailwind",
];

function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-3xl font-bold text-dark mb-6">Обо мне</h2>

          <div className="flex flex-col md:flex-row gap-12">
            <div className="md:w-1/3">
              <div className="w-48 h-48 bg-gray-200 rounded-full mx-auto md:mx-0 mb-6 overflow-hidden">
                {/* Замени на своё фото */}
                <img
                  src="/placeholder-avatar.jpg"
                  alt="Твоё фото"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div className="md:w-2/3">
              <p className="text-gray-700 mb-6 leading-relaxed">
                Я [специализация] с [количество] лет опыта. Создаю современные и
                функциональные веб-приложения с упором на удобство
                пользователей. Люблю чистый код и продуманный дизайн.
              </p>

              <div>
                <h3 className="font-semibold text-lg mb-3">Мои навыки:</h3>
                <div className="flex flex-wrap gap-2">
                  {skills.map((skill, index) => (
                    <motion.span
                      key={index}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="bg-primary/10 text-primary px-4 py-2 rounded-full text-sm"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
export default About;
