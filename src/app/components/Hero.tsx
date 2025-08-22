import Link from 'next/link';

export default function Hero() {
  return (
    <section className="hero min-h-screen flex items-center justify-center text-center text-white relative bg-hero"
    >
      <div className="hero-content max-w-3xl mx-auto px-6 py-16 animate-fade-in-left">
        <h1 className="text-5xl md:text-6xl font-extrabold mb-4">Building Digital Solutions for the Future</h1>
        <p className="text-lg mb-8 opacity-90">Transforming businesses through innovative technology solutions and cutting-edge software development.</p>
        <Link href="/contact" className="cta-button inline-block bg-blue-900 hover:bg-blue-800 py-4 px-10 text-lg font-semibold rounded transition-all duration-300 shadow animate-bounce-in">
          Get Started
        </Link>
      </div>
    </section>
  );
}