export default function MissionVisionValues() {
  return (
    <section className="section max-w-6xl mx-auto px-4 py-20">
      <div className="mission-vision-values grid md:grid-cols-3 gap-8 my-8">
        <div className="mvv-card fade-in-on-scroll bg-white p-8 rounded-xl shadow border border-gray-200 text-center">
          <div className="mvv-icon w-20 h-20 bg-blue-900 text-white text-3xl rounded-full mx-auto flex items-center justify-center mb-6">🎯</div>
          <h3 className="text-xl font-bold text-blue-900 mb-2">Our Mission</h3>
          <p className="text-gray-700">To empower businesses through innovative technology solutions that drive growth, efficiency, and digital transformation in an ever-evolving technological landscape.</p>
        </div>
        <div className="mvv-card fade-in-on-scroll bg-white p-8 rounded-xl shadow border border-gray-200 text-center">
          <div className="mvv-icon w-20 h-20 bg-blue-900 text-white text-3xl rounded-full mx-auto flex items-center justify-center mb-6">👁️</div>
          <h3 className="text-xl font-bold text-blue-900 mb-2">Our Vision</h3>
          <p className="text-gray-700">To be the leading technology partner for businesses worldwide, recognized for our innovation, reliability, and commitment to excellence in digital solutions.</p>
        </div>
        <div className="mvv-card fade-in-on-scroll bg-white p-8 rounded-xl shadow border border-gray-200 text-center">
          <div className="mvv-icon w-20 h-20 bg-blue-900 text-white text-3xl rounded-full mx-auto flex items-center justify-center mb-6">⭐</div>
          <h3 className="text-xl font-bold text-blue-900 mb-2">Our Values</h3>
          <p className="text-gray-700">Innovation, integrity, collaboration, and customer-centricity form the foundation of everything we do, ensuring exceptional results and lasting partnerships.</p>
        </div>
      </div>
    </section>
  );
}