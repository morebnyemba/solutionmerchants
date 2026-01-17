import Link from 'next/link';

export default function Services() {
  const services = [
    {
      title: 'General Wholesale & Retail',
      description: 'Bulk procurement and distribution of goods, retail and wholesale supply to businesses, institutions, and contractors. Import and export of general merchandise.',
      icon: '🏪',
      details: ['Bulk procurement', 'Retail & wholesale supply', 'Import/export services']
    },
    {
      title: 'Hardware Wholesale',
      description: 'Comprehensive supply of building materials, hand tools, power tools, plumbing, electrical supplies, cement, steel, timber, and roofing materials.',
      icon: '🔧',
      details: ['Building materials', 'Tools & equipment', 'Industrial supplies']
    },
    {
      title: 'Commodity Broking',
      description: 'Agricultural and industrial commodity brokerage with market linkage, price negotiation, and trade coordination support.',
      icon: '📈',
      details: ['Agricultural commodities', 'Industrial commodities', 'Trade coordination']
    },
    {
      title: 'Transport & Logistics',
      description: 'Freight coordination, warehousing, delivery management, and cross-border logistics solutions for efficient supply chain operations.',
      icon: '🚛',
      details: ['Freight coordination', 'Warehousing', 'Cross-border logistics']
    },
    {
      title: 'Supply Chain Management',
      description: 'End-to-end procurement, supplier coordination, inventory management, and logistics planning for cost optimization.',
      icon: '📦',
      details: ['Procurement services', 'Inventory management', 'Cost optimization']
    },
    {
      title: 'Tendering & Bulk Wholesaling',
      description: 'Participation in public and private tenders with contract-based procurement and fulfillment capabilities.',
      icon: '📋',
      details: ['Public tenders', 'Private contracts', 'Bulk fulfillment']
    },
    {
      title: 'Real Estate & Property',
      description: 'Property acquisition and disposal, land sourcing, investment facilitation, and real estate trading partnerships.',
      icon: '🏢',
      details: ['Property acquisition', 'Land sourcing', 'Real estate trading']
    },
    {
      title: 'Money & Capital Markets',
      description: 'Capital sourcing and deal facilitation, investment structuring, advisory support, and financial partnerships.',
      icon: '💰',
      details: ['Capital sourcing', 'Investment structuring', 'Financial partnerships']
    },
    {
      title: 'General Dealership',
      description: 'Product and brand representation through authorized and independent dealerships with market development support.',
      icon: '🤝',
      details: ['Brand representation', 'Market development', 'Distribution networks']
    },
  ];

  return (
    <section id="services" className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
            Our Services
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive wholesale, retail, brokerage, and logistics solutions designed to meet your 
            business needs across multiple commercial sectors.
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
              <ul className="space-y-1 mb-4">
                {service.details.map((detail) => (
                  <li key={detail} className="text-sm text-gray-500 flex items-center">
                    <span className="text-primary-600 mr-2">•</span>
                    {detail}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Competitive Advantage Section */}
        <div className="mt-16 bg-white rounded-lg shadow-md p-8 md:p-12 max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">Our Competitive Advantage</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex items-start">
              <span className="text-primary-600 text-xl mr-3">▸</span>
              <p className="text-gray-700">Diversified operations reducing market risk</p>
            </div>
            <div className="flex items-start">
              <span className="text-primary-600 text-xl mr-3">▸</span>
              <p className="text-gray-700">Strong negotiation and brokerage expertise</p>
            </div>
            <div className="flex items-start">
              <span className="text-primary-600 text-xl mr-3">▸</span>
              <p className="text-gray-700">Large-volume and tender-based supply capability</p>
            </div>
            <div className="flex items-start">
              <span className="text-primary-600 text-xl mr-3">▸</span>
              <p className="text-gray-700">Integrated logistics and supply chain coordination</p>
            </div>
            <div className="flex items-start">
              <span className="text-primary-600 text-xl mr-3">▸</span>
              <p className="text-gray-700">Reliable partnerships and repeat clientele</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
