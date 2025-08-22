import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="footer bg-gray-900 text-white pt-12 pb-4 px-4 mt-20">
      <div className="footer-content max-w-6xl mx-auto grid md:grid-cols-4 gap-10 mb-6">
        <div className="footer-section">
          <h3 className="mb-3 text-blue-400 text-lg font-bold">Tekuvo Technologies</h3>
          <p className="mb-4 text-gray-300">Building digital solutions for the future. We transform businesses through innovative technology and exceptional service.</p>
          <div className="social-icons flex gap-3 mt-4">
            <a href="#" className="social-icon w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-blue-400 transition-all">📘</a>
            <a href="#" className="social-icon w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-blue-400 transition-all">🐦</a>
            <a href="#" className="social-icon w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-blue-400 transition-all">💼</a>
            <a href="#" className="social-icon w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-blue-400 transition-all">📷</a>
          </div>
        </div>
        <div className="footer-section">
          <h3 className="mb-3 text-blue-400 text-lg font-bold">Quick Links</h3>
          <ul>
            <li><Link href="/" className="text-gray-300 hover:text-blue-400 block">Home</Link></li>
            <li><Link href="/about" className="text-gray-300 hover:text-blue-400 block">About Us</Link></li>
            <li><Link href="/services" className="text-gray-300 hover:text-blue-400 block">Services</Link></li>
            <li><Link href="/contact" className="text-gray-300 hover:text-blue-400 block">Contact Us</Link></li>
          </ul>
        </div>
        <div className="footer-section">
          <h3 className="mb-3 text-blue-400 text-lg font-bold">Services</h3>
          <ul>
            <li>Web Development</li>
            <li>Software Development</li>
            <li>App Development</li>
            <li>Digital Consulting</li>
          </ul>
        </div>
        <div className="footer-section">
          <h3 className="mb-3 text-blue-400 text-lg font-bold">Contact Info</h3>
          <p className="mb-2">📍 Wayanad, Kerala, India</p>
          <p className="mb-2">📞 +91 9544819365</p>
          <p className="mb-2">✉️ tekuvotechnologies@gmail.com</p>
        </div>
      </div>
      <div className="footer-bottom border-t border-gray-700 pt-4 text-center text-gray-400 text-sm">
        &copy; 2025 Tekuvo Technologies. All rights reserved.
      </div>
    </footer>
  );
}