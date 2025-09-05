import Contact from "./components/Contact";
import Features from "./components/Features";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";

import Products from "./components/Products";
import Stats from "./components/Stats";
import Testimonials from "./components/Testimonials";
import WhatsappButton from "./components/WhatsappButton";



export default function App() {
  return (
    <div className="bg-light text-dark">
      <Header />
      <WhatsappButton/>
      <main>
        <Hero/>
        <Features/>
        <Products/>
        <Stats/>
        
        <Testimonials/>
        <Contact/>
      </main>
        <Footer/>
    </div>
  );
}
