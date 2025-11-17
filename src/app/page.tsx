export const metadata = {
  title: "Leading Web & App Development Company in Kerala",
  description:
    "Tekuvo Technologies is a leading software, web, and mobile app development company in Kerala. We deliver scalable digital solutions that empower business growth.",
};

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutPreview from './components/AboutPreview';
import ServicesOverview from './components/ServicesOverview';
import WhyChoose from './components/WhyChoose';
import TechBanner from './components/TechBanner';
import Footer from './components/Footer';

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <AboutPreview />
        <ServicesOverview />
        <WhyChoose />
        <TechBanner />
      </main>
      <Footer />
    </>
  );
}