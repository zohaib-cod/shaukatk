import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Support from "./components/Support";
import Footer from "./components/Footer";
import DiagnosticsAndStories from "./components/DiagnosticsAndStories";
import Awards from "./components/Awards";


export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Services />
      <Support />
      <DiagnosticsAndStories/>
       <Awards />
      <Footer />
    </div>
  );
}