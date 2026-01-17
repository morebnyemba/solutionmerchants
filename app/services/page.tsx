export default function ServicesPage() {
  const services = [
    {
      title: 'General Wholesale & Retail',
      description: 'Bulk procurement and distribution of goods, retail and wholesale supply to businesses, institutions, and contractors. Import and export of general merchandise.',
      features: [
        'Bulk procurement and distribution',
        'Retail and wholesale supply',
        'Import and export services',
        'Supply to contractors and institutions',
      ],
      icon: '🏪',
    },
    {
      title: 'Hardware Wholesale',
      description: 'Comprehensive supply of building materials, hand tools, power tools, plumbing, electrical supplies, cement, steel, timber, and roofing materials.',
      features: [
        'Building and construction materials',
        'Hand tools and power tools',
        'Plumbing and electrical supplies',
        'Cement, steel, timber, and roofing',
      ],
      icon: '🔧',
    },
    {
      title: 'Commodity Broking',
      description: 'Agricultural and industrial commodity brokerage with market linkage, price negotiation, and trade coordination support.',
      features: [
        'Agricultural commodity brokerage',
        'Industrial commodity brokerage',
        'Market linkage and price negotiation',
        'Trade coordination and settlement support',
      ],
      icon: '📈',
    },
    {
      title: 'Transport & Logistics',
      description: 'Freight coordination, warehousing, delivery management, and cross-border logistics solutions for efficient supply chain operations.',
      features: [
        'Freight coordination',
        'Warehousing and delivery management',
        'Cross-border logistics facilitation',
        'Local logistics solutions',
      ],
      icon: '🚛',
    },
    {
      title: 'Supply Chain Management',
      description: 'End-to-end procurement, supplier coordination, inventory management, and logistics planning for cost optimization.',
      features: [
        'Procurement and supplier coordination',
        'Inventory management',
        'Distribution management',
        'Cost optimization and logistics planning',
      ],
      icon: '📦',
    },
    {
      title: 'Tendering & Bulk Wholesaling',
      description: 'Participation in public and private tenders with contract-based procurement and fulfillment capabilities.',
      features: [
        'Public and private tenders',
        'Bulk supply of goods and materials',
        'Contract-based procurement',
        'Fulfillment services',
      ],
      icon: '📋',
    },
    {
      title: 'Real Estate & Property',
      description: 'Property acquisition and disposal, land sourcing, investment facilitation, and real estate trading partnerships.',
      features: [
        'Property acquisition and disposal',
        'Land sourcing and investment facilitation',
        'Real estate trading',
        'Property partnerships',
      ],
      icon: '🏢',
    },
    {
      title: 'Money & Capital Markets',
      description: 'Capital sourcing and deal facilitation, investment structuring, advisory support, and financial partnerships.',
      features: [
        'Capital sourcing and deal facilitation',
        'Investment structuring',
        'Advisory support',
        'Financial partnerships and funding linkages',
      ],
      icon: '💰',
    },
    {
      title: 'General Dealership',
      description: 'Product and brand representation through authorized and independent dealerships with market development support.',
      features: [
        'Product and brand representation',
        'Authorized and independent dealerships',
        'Market development',
        'Distribution networks',
      ],
      icon: '🤝',
    },
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-600 to-primary-800 text-white py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Services</h1>
          <p className="text-xl md:text-2xl text-primary-100 max-w-3xl">
            Comprehensive wholesale, retail, brokerage, and logistics solutions designed to meet your 
            business needs across multiple commercial sectors.
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
            Ready to Partner With Us?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Contact us to discuss how our wholesale, retail, and business solutions can support your growth.
          </p>
          <a href="/#contact" className="btn-primary inline-block">
            Contact Us Today
          </a>
        </div>
      </section>
    </div>
  );
}
