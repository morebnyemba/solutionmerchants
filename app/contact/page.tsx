'use client';

import { useState } from 'react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    subject: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({
      name: '',
      email: '',
      phone: '',
      company: '',
      subject: '',
      message: '',
    });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-600 to-primary-800 text-white py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact Us</h1>
          <p className="text-xl md:text-2xl text-primary-100 max-w-3xl">
            Ready to discuss your wholesale, logistics, or business needs? Get in touch with our team today.
          </p>
        </div>
      </section>

      {/* Contact Form and Info */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Send Us a Message</h2>
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

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">
                      Phone
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-600"
                      placeholder="+1 (555) 123-4567"
                    />
                  </div>
                  <div>
                    <label htmlFor="company" className="block text-gray-700 font-medium mb-2">
                      Company
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-600"
                      placeholder="Your Company"
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
                    placeholder="Tell us about your project or inquiry..."
                  />
                </div>

                <button type="submit" className="btn-primary w-full md:w-auto">
                  Send Message
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Contact Information</h2>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="text-2xl mr-4">📍</div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Address</h3>
                    <p className="text-gray-600">
                      Subdivision R Homefield<br />
                      Mt Hampden, Zimbabwe
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="text-2xl mr-4">📧</div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Email</h3>
                    <p className="text-gray-600">
                      <a href="mailto:info@solutionsmerchants.co.zw" className="text-primary-600 hover:text-primary-700">
                        info@solutionsmerchants.co.zw
                      </a>
                    </p>
                    <p className="text-gray-600">
                      <a href="mailto:accounts@solutionsmerchants.co.zw" className="text-primary-600 hover:text-primary-700">
                        accounts@solutionsmerchants.co.zw
                      </a>
                    </p>
                    <p className="text-gray-600">
                      <a href="mailto:admin@solutionsmerchants.co.zw" className="text-primary-600 hover:text-primary-700">
                        admin@solutionsmerchants.co.zw
                      </a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="text-2xl mr-4">📞</div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Phone</h3>
                    <p className="text-gray-600 mb-2">
                      <strong>Zimbabwe:</strong><br />
                      <a href="tel:+263788699788" className="text-primary-600 hover:text-primary-700">
                        +263 7 88699788
                      </a>
                    </p>
                    <p className="text-gray-600">
                      <strong>International:</strong><br />
                      <a href="tel:+61466841679" className="text-primary-600 hover:text-primary-700">
                        +61 466 841 679
                      </a><br />
                      <a href="tel:+61480568555" className="text-primary-600 hover:text-primary-700">
                        +61 480 568 555
                      </a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="text-2xl mr-4">💬</div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">WhatsApp</h3>
                    <div className="space-y-2">
                      <a 
                        href="https://wa.me/61466841679" 
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg transition-colors text-sm"
                      >
                        <span className="mr-2">💬</span>
                        Chat (+61 466 841 679)
                      </a>
                      <br />
                      <a 
                        href="https://wa.me/61480568555" 
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg transition-colors text-sm"
                      >
                        <span className="mr-2">💬</span>
                        Chat (+61 480 568 555)
                      </a>
                    </div>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="text-2xl mr-4">🌐</div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Website</h3>
                    <p className="text-gray-600">
                      <a 
                        href="https://www.solutionsmerchants.co.zw" 
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary-600 hover:text-primary-700"
                      >
                        www.solutionsmerchants.co.zw
                      </a>
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8 p-6 bg-primary-50 rounded-lg">
                <h3 className="font-semibold text-gray-900 mb-3">Quick Response</h3>
                <p className="text-gray-600">
                  We are committed to responding to all inquiries promptly. For immediate assistance, 
                  please contact us via WhatsApp or call our direct lines.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
