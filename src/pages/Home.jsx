import Header from "../components/Header";
import Hero from "../components/Hero";
import About from "../components/About";
import Works from "../components/Works";
import Contact from "../components/Contact";

export default function Home() {
  return (
    <div className="min-h-screen bg-light">
      <Header />
      <Hero />
      <About />
      <Works />
      <Contact />
    </div>
  );
}
