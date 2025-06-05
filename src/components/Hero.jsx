import { motion } from "framer-motion";
import { FiArrowRight } from "react-icons/fi";

function Hero() {
  return (
    
    <section className="h-screen flex items-center justify-center relative overflow-hidden">
      <div className="container mx-auto px-6 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-5xl md:text-7xl font-bold text-dark mb-4"
        >
          Привет, я <span className="text-primary">ТвоёИмя</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto"
        >
          Frontend-разработчик / Дизайнер / [Твоя специализация]
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          <a
            href="#works"
            className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-lg hover:bg-opacity-90 transition"
          >
            Мои работы <FiArrowRight />
          </a>
        </motion.div>
      </div>

      {/* Декоративный элемент */}
      <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-primary/10 rounded-full blur-3xl"></div>
    </section>
  );
}
export default Hero;
