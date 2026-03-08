import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import WhyChoose from "./components/WhyChoose";
import About from "./components/About";
import HowItWorks from "./components/HowItWorks";
import CtaBanner from "./components/CtaBanner";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Services />
      <WhyChoose />
      <About />
      <HowItWorks />
      <CtaBanner />
      <Footer />
    </>
  );
}
