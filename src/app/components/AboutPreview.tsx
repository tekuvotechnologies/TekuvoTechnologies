import Link from 'next/link';

export default function AboutPreview() {
  return (
    <section className="section max-w-6xl mx-auto px-4 py-20">
      <div className="about-preview grid md:grid-cols-2 gap-12 items-center mb-20">
        <div
          className="about-image rounded-lg h-72 bg-cover bg-center animate-slide-in-right"
          style={{
            backgroundImage:
              "url('/banner.jpg')",
          }}
        />
        <div className="about-content animate-fade-in delay-300">
          <h3 className="text-2xl font-bold text-blue-900 mb-3">Innovative Technology Partners</h3>
          <p className="mb-4 text-gray-700 leading-relaxed">
            At Tekuvo Technologies, we specialize in creating digital solutions that drive business growth and innovation. Our team of expert developers and designers work collaboratively to deliver exceptional results.
          </p>
          <p className="mb-6 text-gray-700 leading-relaxed">
            With years of experience in the tech industry, we understand the evolving needs of modern businesses and provide tailored solutions that exceed expectations.
          </p>
          <Link
            href="/about"
            className="learn-more-btn border-2 border-blue-900 text-blue-900 hover:bg-blue-900 hover:text-white px-8 py-3 rounded font-semibold transition-all duration-300 inline-block"
          >
            Learn More
          </Link>
        </div>
      </div>
    </section>
  );
}