import Link from 'next/link';

const services = [
  {
    title: 'Web Development',
    desc1:
      'We create stunning, responsive websites and powerful web applications using the latest technologies and frameworks. Our web solutions are designed to provide exceptional user experiences while meeting your business objectives.',
    desc2:
      'From e-commerce platforms to corporate websites, we deliver scalable solutions that grow with your business and adapt to changing market needs.',
    image:
      'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=600&q=80', // web development
  },
  {
    title: 'Software Development',
    desc1:
      'Our custom software development services help businesses streamline operations and boost productivity. We specialize in enterprise-grade applications, cloud solutions, and system integrations.',
    desc2:
      'Whether you need a complete software overhaul or specific module development, our team delivers robust, secure, and scalable solutions tailored to your requirements.',
    image:
      'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=600&q=80', // software dev
  },
  {
    title: 'App Development',
    desc1:
      'Transform your ideas into powerful mobile applications that engage users and drive business growth. We develop native iOS and Android apps, as well as cross-platform solutions.',
    desc2:
      "Our app development process focuses on user experience, performance, and scalability, ensuring your mobile presence stands out in today's competitive marketplace.",
    image:
      'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=600&q=80', // app dev
  },
];

export default function ServiceDetails() {
  return (
    <section className="section max-w-6xl mx-auto px-4 py-20">
      {services.map((s) => (
        <div
          key={s.title}
          className={`service-detail grid md:grid-cols-2 gap-12 items-center mb-16 fade-in-on-scroll`}
        >
          <div className="service-detail-content">
            <h3 className="text-2xl font-bold text-blue-900 mb-4">{s.title}</h3>
            <p className="mb-4 text-gray-700">{s.desc1}</p>
            <p className="mb-6 text-gray-700">{s.desc2}</p>
            <Link
              href="/contact"
              className="quote-btn bg-green-400 hover:bg-green-600 text-white px-8 py-3 rounded font-semibold transition-all duration-300 inline-block"
            >
              Get a Quote
            </Link>
          </div>
          <div className="service-detail-image rounded-lg h-72 bg-cover bg-center shadow-lg"
            style={{
              backgroundImage: `url('${s.image}')`,
            }}
          />
        </div>
      ))}
    </section>
  );
}