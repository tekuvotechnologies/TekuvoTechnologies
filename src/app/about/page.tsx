import Navbar from '../components/Navbar';
import MissionVisionValues from '../components/MissionVisionValues';
import Footer from '../components/Footer';
const image ='/hero.jpg'

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <div className="min-h-[60vh] flex items-center justify-center bg-gradient-to-b from-blue-900/80 to-blue-900/80 text-white text-center bg-about-hero bg-cover bg-center">
        <div className="max-w-2xl mx-auto px-4 py-14 animate-fade-in-left">
          <h1 className="text-4xl font-bold mb-2">About Tekuvo Technologies</h1>
          <p className="text-lg opacity-90">Pioneering digital innovation since our inception</p>
        </div>
      </div>
      <main>
        <MissionVisionValues />
        <section className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 mt-16 px-4 items-center">
          <div>
            <h3 className="text-2xl font-bold text-blue-900 mb-4">Our Story</h3>
            <p className="mb-4 text-gray-700 leading-relaxed">
              Founded with a passion for technology and innovation, Tekuvo Technologies has grown from a small startup to a trusted partner for businesses across various industries. Our journey began with a simple belief: technology should enhance and simplify business operations.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Today, we continue to push boundaries and explore new frontiers in software development, web technologies, and digital solutions. Our team of dedicated professionals brings together diverse expertise and shared commitment to excellence.
            </p>
          </div>
          <div
            className="rounded-lg h-72 bg-cover bg-center shadow-lg animate-slide-in-right"
            style={{
              backgroundImage:
                `url(${image})`
            }}
          />
        </section>
      </main>
      <Footer />
    </>
  );
}