export default function ServicesOverview() {
  return (
    <section className="section max-w-6xl mx-auto px-4 pb-20">
      <h2 className="section-title text-3xl font-bold text-blue-900 text-center mb-12">Our Services</h2>
      <div className="services-grid grid md:grid-cols-3 gap-8 mb-20">
        <div className="service-card bg-white rounded-xl p-8 text-center transition-all duration-300 shadow hover:-translate-y-2 hover:scale-[1.02] border border-gray-200 fade-in-on-scroll">
          <div
            className="rounded-lg h-52 mb-6 bg-cover bg-center"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=600&q=80')",
            }}
          />
          <h3 className="text-xl font-bold text-blue-900 mb-2">Web Development</h3>
          <p className="text-gray-600">
            Custom responsive websites and web applications built with modern frameworks and technologies to deliver exceptional user experiences.
          </p>
        </div>
        <div className="service-card bg-white rounded-xl p-8 text-center transition-all duration-300 shadow hover:-translate-y-2 hover:scale-[1.02] border border-gray-200 fade-in-on-scroll">
          <div
            className="rounded-lg h-52 mb-6 bg-cover bg-center"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=600&q=80')",
            }}
          />
          <h3 className="text-xl font-bold text-blue-900 mb-2">Software Development</h3>
          <p className="text-gray-600">
            Enterprise-grade software solutions and cloud-based systems designed to streamline operations and boost productivity.
          </p>
        </div>
        <div className="service-card bg-white rounded-xl p-8 text-center transition-all duration-300 shadow hover:-translate-y-2 hover:scale-[1.02] border border-gray-200 fade-in-on-scroll">
          <div
            className="rounded-lg h-52 mb-6 bg-cover bg-center"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=600&q=80')",
            }}
          />
          <h3 className="text-xl font-bold text-blue-900 mb-2">App Development</h3>
          <p className="text-gray-600">
            Native and cross-platform mobile applications that engage users and drive business growth across iOS and Android platforms.
          </p>
        </div>
      </div>
    </section>
  );
}