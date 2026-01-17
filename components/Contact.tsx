'use client';

import { useState } from 'react';
import { MdLocationOn, MdEmail, MdPhone, MdLanguage } from 'react-icons/md';
import { FaWhatsapp } from 'react-icons/fa';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="py-16 md:py-24 bg-gradient-to-br from-blue-50 via-white to-orange-50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-100/20 to-accent-100/20 pointer-events-none"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
              Get in Touch
            </h2>
            <p className="text-lg md:text-xl text-gray-600">
              Ready to discuss your wholesale, logistics, or business needs? Contact us today.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="glass-card glass-card-hover rounded-2xl p-8 shadow-xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h3>
              
              {/* Address */}
              <div className="mb-6">
                <h4 className="font-semibold text-gray-900 mb-2 flex items-center">
                  <MdLocationOn className="text-primary-600 mr-2" />
                  Company Address
                </h4>
                <p className="text-gray-600 ml-7">
                  Subdivision R Homefield<br />
                  Mt Hampden, Zimbabwe
                </p>
              </div>

              {/* Phone Numbers */}
              <div className="mb-6">
                <h4 className="font-semibold text-gray-900 mb-2 flex items-center">
                  <MdPhone className="text-primary-600 mr-2" />
                  Phone Numbers
                </h4>
                <div className="ml-7 space-y-2">
                  <div>
                    <p className="text-sm text-gray-500">Zimbabwe Calls:</p>
                    <a 
                      href="tel:+263788699788" 
                      className="text-primary-600 hover:text-primary-700 font-medium"
                    >
                      +263 7 88699788
                    </a>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">International Calls:</p>
                    <a 
                      href="tel:+61466841679" 
                      className="text-primary-600 hover:text-primary-700 font-medium"
                    >
                      +61 466 841 679
                    </a>
                    <br />
                    <a 
                      href="tel:+61480568555" 
                      className="text-primary-600 hover:text-primary-700 font-medium"
                    >
                      +61 480 568 555
                    </a>
                  </div>
                </div>
              </div>

              {/* WhatsApp */}
              <div className="mb-6">
                <h4 className="font-semibold text-gray-900 mb-2 flex items-center">
                  <FaWhatsapp className="text-green-600 mr-2" />
                  WhatsApp
                </h4>
                <div className="ml-7 space-y-2">
                  <a 
                    href="https://wa.me/61466841679" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg transition-colors"
                  >
                    <FaWhatsapp className="mr-2" />
                    Chat on WhatsApp (+61 466 841 679)
                  </a>
                  <br />
                  <a 
                    href="https://wa.me/61480568555" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg transition-colors"
                  >
                    <FaWhatsapp className="mr-2" />
                    Chat on WhatsApp (+61 480 568 555)
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className="mb-6">
                <h4 className="font-semibold text-gray-900 mb-2 flex items-center">
                  <MdEmail className="text-primary-600 mr-2" />
                  Email Addresses
                </h4>
                <div className="ml-7 space-y-1">
                  <a 
                    href="mailto:info@solutionsmerchants.co.zw" 
                    className="block text-primary-600 hover:text-primary-700"
                  >
                    info@solutionsmerchants.co.zw
                  </a>
                  <a 
                    href="mailto:accounts@solutionsmerchants.co.zw" 
                    className="block text-primary-600 hover:text-primary-700"
                  >
                    accounts@solutionsmerchants.co.zw
                  </a>
                  <a 
                    href="mailto:admin@solutionsmerchants.co.zw" 
                    className="block text-primary-600 hover:text-primary-700"
                  >
                    admin@solutionsmerchants.co.zw
                  </a>
                </div>
              </div>

              {/* Website */}
              <div className="mb-6">
                <h4 className="font-semibold text-gray-900 mb-2 flex items-center">
                  <MdLanguage className="text-primary-600 mr-2" />
                  Website
                </h4>
                <a 
                  href="https://www.solutionsmerchants.co.zw" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ml-7 text-primary-600 hover:text-primary-700"
                >
                  www.solutionsmerchants.co.zw
                </a>
              </div>
            </div>

            {/* Contact Form */}
            <div className="glass-card glass-card-hover rounded-2xl p-8 shadow-xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Send Us a Message</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
                      Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-600"
                      placeholder="Your Name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-600"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-gray-700 font-medium mb-2">
                    Subject *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-600"
                    placeholder="How can we help you?"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-gray-700 font-medium mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-600"
                    placeholder="Tell us about your needs..."
                  />
                </div>

                <div>
                  <button type="submit" className="btn-primary w-full md:w-auto">
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
