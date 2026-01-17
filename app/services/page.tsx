export default function ServicesPage() {
  const services = [
    {
      title: 'Digital Transformation',
      description: 'Transform your business with cutting-edge digital solutions and strategies.',
      features: [
        'Digital Strategy Development',
        'Process Automation',
        'Legacy System Modernization',
        'Change Management',
      ],
      icon: '🚀',
    },
    {
      title: 'IT Consulting',
      description: 'Expert guidance to optimize your technology infrastructure and processes.',
      features: [
        'Technology Assessment',
        'Architecture Design',
        'Vendor Selection',
        'Implementation Support',
      ],
      icon: '💡',
    },
    {
      title: 'Software Development',
      description: 'Custom software solutions tailored to your unique business requirements.',
      features: [
        'Web Applications',
        'Mobile Applications',
        'Enterprise Software',
        'API Development',
      ],
      icon: '💻',
    },
    {
      title: 'Cloud Solutions',
      description: 'Scalable cloud infrastructure and migration services for modern businesses.',
      features: [
        'Cloud Migration',
        'Infrastructure as a Service',
        'Cloud Security',
        'Cost Optimization',
      ],
      icon: '☁️',
    },
    {
      title: 'Data Analytics',
      description: 'Turn your data into actionable insights with advanced analytics solutions.',
      features: [
        'Business Intelligence',
        'Data Warehousing',
        'Predictive Analytics',
        'Data Visualization',
      ],
      icon: '📊',
    },
    {
      title: 'Cybersecurity',
      description: 'Protect your business with comprehensive security solutions and monitoring.',
      features: [
        'Security Assessment',
        'Threat Monitoring',
        'Compliance Management',
        'Incident Response',
      ],
      icon: '🔒',
    },
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-600 to-primary-800 text-white py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Services</h1>
          <p className="text-xl md:text-2xl text-primary-100 max-w-3xl">
            Comprehensive solutions designed to meet your business needs and drive growth.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow border border-gray-200"
              >
                <div className="flex items-start mb-4">
                  <div className="text-5xl mr-4">{service.icon}</div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{service.title}</h3>
                    <p className="text-gray-600">{service.description}</p>
                  </div>
                </div>
                <div className="mt-6">
                  <h4 className="font-semibold text-gray-900 mb-3">Key Features:</h4>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start">
                        <span className="text-primary-600 mr-2">✓</span>
                        <span className="text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Let's discuss how our services can help you achieve your business goals.
          </p>
          <a href="/contact" className="btn-primary inline-block">
            Contact Us Today
          </a>
        </div>
      </section>
    </div>
  );
}
