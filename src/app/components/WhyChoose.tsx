export default function WhyChoose() {
  return (
    <section className="why-choose bg-gray-50 py-20 my-12 px-4">
      <div className="why-choose-content max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div
          className="why-choose-image rounded-lg h-80 bg-cover bg-center shadow-lg"
          style={{
            backgroundImage:
              "url('/handshaking.jpg')",
          }}
        />
        <div>
          <h2 className="text-2xl font-bold text-blue-900 mb-6">Why Choose Tekuvo Technologies?</h2>
          <ul className="features-list list-none">
            {[
              'Proven track record of successful project deliveries',
              'Expert team with cutting-edge technology expertise',
              'Agile development methodology for faster delivery',
              '24/7 support and maintenance services',
              'Cost-effective solutions tailored to your budget',
              'Scalable architectures that grow with your business',
            ].map((feature, i) => (
              <li key={i} className="flex items-center mb-4 text-base text-gray-700">
                <span className="inline-flex items-center justify-center w-6 h-6 bg-green-400 text-white rounded-full mr-4 font-bold">
                  ✓
                </span>
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}