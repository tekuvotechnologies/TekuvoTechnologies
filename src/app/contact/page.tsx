import Navbar from '../components/Navbar';
import ContactForm from '../components/ContactForm';
import Footer from '../components/Footer';

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <div className="min-h-[60vh] flex items-center justify-center bg-gradient-to-b from-blue-900/80 to-blue-900/80 text-white text-center bg-about-hero bg-cover bg-center">
        <div className="max-w-2xl mx-auto px-4 py-14">
          <h1 className="text-4xl font-bold mb-2">Contact Us</h1>
          <p className="text-lg opacity-90">Let&apos;s discuss your next project and bring your ideas to life</p>
        </div>
      </div>
      <ContactForm />
      <Footer />
    </>
  );
}