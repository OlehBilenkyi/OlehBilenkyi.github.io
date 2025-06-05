import { motion } from "framer-motion";
import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";

export default function Header() {
  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="fixed w-full bg-white/10 backdrop-blur-md z-50 py-4"
    >
      <div className="container mx-auto flex justify-between items-center px-6">
        <a href="#" className="text-xl font-bold text-dark">
          ТвоёИмя
        </a>

        <nav className="hidden md:flex gap-8">
          <a href="#about" className="hover:text-primary transition">
            Обо мне
          </a>
          <a href="#works" className="hover:text-primary transition">
            Работы
          </a>
          <a href="#contact" className="hover:text-primary transition">
            Контакты
          </a>
        </nav>

        <div className="flex gap-4">
          <a href="https://github.com/твой-ник" aria-label="GitHub">
            <FiGithub className="text-xl hover:text-primary transition" />
          </a>
          <a href="#" aria-label="Email">
            <FiMail className="text-xl hover:text-primary transition" />
          </a>
        </div>
      </div>
    </motion.header>
  );
}
