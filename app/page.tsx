import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import Features from "@/components/Features";
import AboutUs from "@/components/AboutUs";
import FAQ from "@/components/FAQ";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <main>
        <Hero />
        <HowItWorks />
        <Features />
        <AboutUs />
        <FAQ />
        <Testimonials />
      </main>
      <Footer />
    </>
  );
}
