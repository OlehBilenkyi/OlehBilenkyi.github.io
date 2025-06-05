import { motion } from "framer-motion";
import { FiSend } from "react-icons/fi";
function Contact() {
  return (
    <section id="contact" className="py-20 bg-dark text-white">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-3xl font-bold mb-6">Связаться со мной</h2>

          <div className="flex flex-col md:flex-row gap-12">
            <div className="md:w-1/2">
              <form className="space-y-4">
                <div>
                  <label htmlFor="name" className="block mb-1">
                    Имя
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full bg-dark border border-gray-600 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="Твоё имя"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full bg-dark border border-gray-600 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="example@mail.com"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block mb-1">
                    Сообщение
                  </label>
                  <textarea
                    id="message"
                    rows="5"
                    className="w-full bg-dark border border-gray-600 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="Расскажи о своём проекте..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-lg hover:bg-opacity-90 transition"
                >
                  Отправить <FiSend />
                </button>
              </form>
            </div>

            <div className="md:w-1/2">
              <h3 className="font-semibold text-lg mb-4">
                Другие способы связи:
              </h3>
              <ul className="space-y-3">
                <li>
                  Email:{" "}
                  <a
                    href="mailto:example@mail.com"
                    className="text-primary hover:underline"
                  >
                    example@mail.com
                  </a>
                </li>
                <li>
                  Telegram:{" "}
                  <a
                    href="https://t.me/твой_ник"
                    className="text-primary hover:underline"
                  >
                    @твой_ник
                  </a>
                </li>
                <li>
                  GitHub:{" "}
                  <a
                    href="https://github.com/твой_ник"
                    className="text-primary hover:underline"
                  >
                    твой_ник
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Contact;
