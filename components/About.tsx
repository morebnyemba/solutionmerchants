export default function About() {
  const values = [
    { title: 'Quality', description: 'We prioritize excellence in every project, ensuring durability and precision.' },
    { title: 'Integrity', description: 'Upholding honesty, transparency, and ethical conduct in all dealings.' },
    { title: 'Innovation', description: 'Adapting to evolving markets and client needs with creative solutions.' },
    { title: 'Reliability', description: 'Delivering consistent, dependable, and timely solutions to our partners.' },
    { title: 'Excellence', description: 'Maintaining high standards in service, quality, and performance.' },
  ];

  return (
    <section id="about" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        {/* Company Introduction */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
            About Solutions Merchant Investments
          </h2>
          <p className="text-lg md:text-xl text-gray-600 mb-8">
            Welcome to Solutions Merchant Investments - a diversified, solutions-oriented enterprise specializing 
            in general wholesale and retail trading, with a strong focus on brokerage business, supply chain 
            management, and logistics solutions. We operate across multiple commercial sectors, offering integrated 
            trading, brokerage, logistics, and supply chain solutions to businesses, institutions, and partners.
          </p>
        </div>

        {/* Vision and Mission */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto mb-16">
          <div className="bg-primary-50 p-8 rounded-lg">
            <h3 className="text-2xl font-bold text-primary-900 mb-4">Our Vision</h3>
            <p className="text-gray-700">
              To be a trusted and leading broking company delivering reliable wholesale, retail, and 
              multi-sector business solutions that drive sustainable growth and value creation.
            </p>
          </div>
          <div className="bg-primary-50 p-8 rounded-lg">
            <h3 className="text-2xl font-bold text-primary-900 mb-4">Our Mission</h3>
            <p className="text-gray-700">
              To provide efficient, ethical, and market-driven wholesale, retail, and brokerage services by 
              connecting producers, suppliers, buyers, and investors through strong partnerships, optimized 
              supply chains, and innovative commercial solutions.
            </p>
          </div>
        </div>

        {/* Values */}
        <div className="max-w-6xl mx-auto mb-16">
          <h3 className="text-3xl font-bold text-gray-900 text-center mb-10">Our Core Values</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {values.map((value) => (
              <div key={value.title} className="text-center p-4">
                <div className="bg-accent-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 border-2 border-accent-500">
                  <span className="text-2xl font-bold text-accent-700">{value.title[0]}</span>
                </div>
                <h4 className="text-lg font-bold text-gray-900 mb-2">{value.title}</h4>
                <p className="text-sm text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="bg-gray-50 rounded-lg p-8 md:p-12 max-w-6xl mx-auto">
          <h3 className="text-3xl font-bold text-gray-900 text-center mb-8">Why Choose Solutions Merchant</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="flex items-start">
              <span className="text-primary-600 text-2xl mr-3">✓</span>
              <div>
                <h4 className="font-semibold text-gray-900 mb-1">Comprehensive Wholesale Capability</h4>
                <p className="text-gray-600 text-sm">Including hardware and bulk supplies</p>
              </div>
            </div>
            <div className="flex items-start">
              <span className="text-primary-600 text-2xl mr-3">✓</span>
              <div>
                <h4 className="font-semibold text-gray-900 mb-1">Multi-Sector Coverage</h4>
                <p className="text-gray-600 text-sm">One trusted merchant entity</p>
              </div>
            </div>
            <div className="flex items-start">
              <span className="text-primary-600 text-2xl mr-3">✓</span>
              <div>
                <h4 className="font-semibold text-gray-900 mb-1">Strong Networks</h4>
                <p className="text-gray-600 text-sm">Established supplier and buyer relationships</p>
              </div>
            </div>
            <div className="flex items-start">
              <span className="text-primary-600 text-2xl mr-3">✓</span>
              <div>
                <h4 className="font-semibold text-gray-900 mb-1">Tender & Bulk Supply Expertise</h4>
                <p className="text-gray-600 text-sm">Public and private sector experience</p>
              </div>
            </div>
            <div className="flex items-start">
              <span className="text-primary-600 text-2xl mr-3">✓</span>
              <div>
                <h4 className="font-semibold text-gray-900 mb-1">Efficient Supply Chain</h4>
                <p className="text-gray-600 text-sm">Optimized logistics management</p>
              </div>
            </div>
            <div className="flex items-start">
              <span className="text-primary-600 text-2xl mr-3">✓</span>
              <div>
                <h4 className="font-semibold text-gray-900 mb-1">Professional & Ethical</h4>
                <p className="text-gray-600 text-sm">Client-focused business practices</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
