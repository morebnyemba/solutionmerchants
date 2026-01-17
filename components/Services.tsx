import Link from 'next/link';

export default function Services() {
  const services = [
    {
      title: 'Digital Transformation',
      description: 'Transform your business with cutting-edge digital solutions and strategies.',
      icon: '🚀',
    },
    {
      title: 'IT Consulting',
      description: 'Expert guidance to optimize your technology infrastructure and processes.',
      icon: '💡',
    },
    {
      title: 'Software Development',
      description: 'Custom software solutions tailored to your unique business requirements.',
      icon: '💻',
    },
    {
      title: 'Cloud Solutions',
      description: 'Scalable cloud infrastructure and migration services for modern businesses.',
      icon: '☁️',
    },
    {
      title: 'Data Analytics',
      description: 'Turn your data into actionable insights with advanced analytics solutions.',
      icon: '📊',
    },
    {
      title: 'Cybersecurity',
      description: 'Protect your business with comprehensive security solutions and monitoring.',
      icon: '🔒',
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
            Our Services
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
            Comprehensive solutions designed to meet your business needs and drive growth.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow"
            >
              <div className="text-5xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
              <p className="text-gray-600 mb-4">{service.description}</p>
              <Link
                href="/services"
                className="text-primary-600 font-semibold hover:text-primary-700 transition-colors"
              >
                Learn More →
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
