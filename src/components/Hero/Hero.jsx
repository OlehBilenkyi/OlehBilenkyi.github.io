import React from "react";
import { motion } from "framer-motion";

export function Hero() {
  return (
    <section className="pt-32 pb-20 md:pt-40 md:pb-28 text-center bg-gradient-to-b from-white to-gray-100">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Привет, я Олег
          </h1>
          <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Frontend разработчик с фокусом на создание современных,
            интерактивных веб-приложений.
          </p>

          <motion.a
            href="#portfolio"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg shadow-md transition-colors"
          >
            Посмотреть работы
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
