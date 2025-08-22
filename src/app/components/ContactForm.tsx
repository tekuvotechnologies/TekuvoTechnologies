'use client';

// import { useRef } from 'react';

export default function ContactForm() {
//   const formRef = useRef<HTMLFormElement>(null);

//   const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     const form = formRef.current;
//     if (!form) return;
//     const data = new FormData(form);
//     const name = data.get('name') as string;
//     const email = data.get('email') as string;
//     const message = data.get('message') as string;
//     if (name && email && message) {
//       const btn = form.querySelector('button[type="submit"]') as HTMLButtonElement;
//       const orig = btn.textContent;
//       btn.textContent = 'Sending...';
//       btn.disabled = true;
//       setTimeout(() => {
//         alert(`Thank you, ${name}! Your message has been sent successfully. We'll get back to you soon.`);
//         form.reset();
//         btn.textContent = orig!;
//         btn.disabled = false;
//       }, 2000);
//     }
//   };

  return (
    <section className="section max-w-6xl mx-auto px-4 py-20">
      <div className="contact-content grid md:grid-cols-2 gap-12 items-start">
        {/* <div className="contact-form bg-white p-8 rounded-xl shadow-lg fade-in-on-scroll">
          <h3 className="text-xl font-bold text-blue-900 mb-6">Send us a Message</h3>
          <form ref={formRef} onSubmit={onSubmit} autoComplete="off">
            <div className="form-group mb-6">
              <label htmlFor="name" className="block mb-2 text-gray-700 font-semibold">Full Name</label>
              <input type="text" id="name" name="name" required className="w-full p-3 border-2 border-gray-200 rounded focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-100 transition-all" />
            </div>
            <div className="form-group mb-6">
              <label htmlFor="email" className="block mb-2 text-gray-700 font-semibold">Email Address</label>
              <input type="email" id="email" name="email" required className="w-full p-3 border-2 border-gray-200 rounded focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-100 transition-all" />
            </div>
            <div className="form-group mb-6">
              <label htmlFor="message" className="block mb-2 text-gray-700 font-semibold">Message</label>
              <textarea id="message" name="message" required className="w-full p-3 border-2 border-gray-200 rounded focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-100 transition-all resize-vertical min-h-[120px]" />
            </div>
            <button type="submit" className="submit-btn w-full bg-blue-900 hover:bg-blue-800 text-white font-semibold py-4 rounded transition-all duration-300">
              Send Message
            </button>
          </form>
        </div> */}
        <div className="contact-info fade-in-on-scroll p-8">
          <h3 className="text-xl font-bold text-blue-900 mb-6">Get in Touch</h3>
          <div className="contact-detail flex items-center mb-6">
            <div className="contact-detail-icon w-10 h-10 bg-blue-900 text-white rounded-full flex items-center justify-center mr-4">📍</div>
            <div>
              <strong>Address</strong><br />
              <br />
              Sulthan Bathery,Wayanad, Kerala 673592, India
            </div>
          </div>
          <div className="contact-detail flex items-center mb-6">
            <div className="contact-detail-icon w-10 h-10 bg-blue-900 text-white rounded-full flex items-center justify-center mr-4">📞</div>
            <div>
              <strong>Phone</strong><br />
              +91 9544819365<br />
              {/* +91 8765432109 */}
            </div>
          </div>
          <div className="contact-detail flex items-center mb-6">
            <div className="contact-detail-icon w-10 h-10 bg-blue-900 text-white rounded-full flex items-center justify-center mr-4">✉️</div>
            <div>
              <strong>Email</strong><br />
             tekuvotechnologies@gmail.com<br />
              {/* support@tekuvotechnologies.com */}
            </div>
          </div>
          <div className="contact-detail flex items-center mb-6">
            <div className="contact-detail-icon w-10 h-10 bg-blue-900 text-white rounded-full flex items-center justify-center mr-4">🕒</div>
            <div>
              <strong>Business Hours</strong><br />
              Monday - Friday: 9:00 AM - 6:00 PM<br />
              Saturday: 10:00 AM - 4:00 PM
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}