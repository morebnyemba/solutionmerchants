import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { FaCheckCircle } from 'react-icons/fa';

export default function About() {
  const values = [
    { title: 'Quality', description: 'We prioritize excellence in every project, ensuring durability and precision.' },
    { title: 'Integrity', description: 'Upholding honesty, transparency, and ethical conduct in all dealings.' },
    { title: 'Innovation', description: 'Adapting to evolving markets and client needs with creative solutions.' },
    { title: 'Reliability', description: 'Delivering consistent, dependable, and timely solutions to our partners.' },
    { title: 'Excellence', description: 'Maintaining high standards in service, quality, and performance.' },
  ];

  return (
    <section id="about" className="relative py-16 md:py-24 bg-gradient-to-b from-white via-gray-50 to-white overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-primary-100/30 to-transparent rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-accent-100/20 to-transparent rounded-full blur-3xl" />
      
      <div className="container relative mx-auto px-4">
        {/* Company Introduction */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary-700 via-primary-600 to-accent-600 bg-clip-text text-transparent">
            About Solutions Merchant Investments
          </h2>
          <p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed">
            Welcome to Solutions Merchant Investments - a diversified, solutions-oriented enterprise specializing 
            in general wholesale and retail trading, with a strong focus on brokerage business, supply chain 
            management, and logistics solutions. We operate across multiple commercial sectors, offering integrated 
            trading, brokerage, logistics, and supply chain solutions to businesses, institutions, and partners.
          </p>
        </div>

        {/* Vision and Mission */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto mb-16">
          <Card className="bg-gradient-to-br from-primary-50 via-primary-100/50 to-white border-primary-200 shadow-lg hover:shadow-xl transition-shadow">
            <CardHeader>
              <CardTitle className="text-primary-900">Our Vision</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 leading-relaxed">
                To be a trusted and leading broking company delivering reliable wholesale, retail, and 
                multi-sector business solutions that drive sustainable growth and value creation.
              </p>
            </CardContent>
          </Card>
          <Card className="bg-gradient-to-br from-primary-50 via-primary-100/50 to-white border-primary-200 shadow-lg hover:shadow-xl transition-shadow">
            <CardHeader>
              <CardTitle className="text-primary-900">Our Mission</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 leading-relaxed">
                To provide efficient, ethical, and market-driven wholesale, retail, and brokerage services by 
                connecting producers, suppliers, buyers, and investors through strong partnerships, optimized 
                supply chains, and innovative commercial solutions.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Values */}
        <div className="max-w-6xl mx-auto mb-16">
          <h3 className="text-3xl md:text-4xl font-bold text-center mb-10 bg-gradient-to-r from-gray-900 via-primary-700 to-gray-900 bg-clip-text text-transparent">
            Our Core Values
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {values.map((value) => (
              <Card key={value.title} className="text-center hover:shadow-lg transition-shadow bg-gradient-to-br from-white to-accent-50/30">
                <CardContent className="pt-6">
                  <div className="bg-gradient-to-br from-accent-100 to-accent-200 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 border-2 border-accent-500 shadow-md">
                    <span className="text-2xl font-bold text-accent-700">{value.title[0]}</span>
                  </div>
                  <h4 className="text-lg font-bold text-gray-900 mb-2">{value.title}</h4>
                  <p className="text-sm text-gray-600">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Why Choose Us */}
        <Card className="rounded-2xl p-8 md:p-12 max-w-6xl mx-auto bg-gradient-to-br from-gray-50 via-primary-50/30 to-accent-50/20 border-2 border-primary-100 shadow-xl">
          <CardHeader className="pb-6">
            <CardTitle className="text-3xl md:text-4xl text-center bg-gradient-to-r from-primary-700 to-accent-600 bg-clip-text text-transparent">
              Why Choose Solutions Merchant
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="flex items-start group">
                <FaCheckCircle className="text-accent-500 text-2xl mr-3 group-hover:scale-110 transition-transform flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Comprehensive Wholesale Capability</h4>
                  <p className="text-gray-600 text-sm">Including hardware and bulk supplies</p>
                </div>
              </div>
              <div className="flex items-start group">
                <FaCheckCircle className="text-accent-500 text-2xl mr-3 group-hover:scale-110 transition-transform flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Multi-Sector Coverage</h4>
                  <p className="text-gray-600 text-sm">One trusted merchant entity</p>
                </div>
              </div>
              <div className="flex items-start group">
                <FaCheckCircle className="text-accent-500 text-2xl mr-3 group-hover:scale-110 transition-transform flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Strong Networks</h4>
                  <p className="text-gray-600 text-sm">Established supplier and buyer relationships</p>
                </div>
              </div>
              <div className="flex items-start group">
                <FaCheckCircle className="text-accent-500 text-2xl mr-3 group-hover:scale-110 transition-transform flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Tender & Bulk Supply Expertise</h4>
                  <p className="text-gray-600 text-sm">Public and private sector experience</p>
                </div>
              </div>
              <div className="flex items-start group">
                <FaCheckCircle className="text-accent-500 text-2xl mr-3 group-hover:scale-110 transition-transform flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Efficient Supply Chain</h4>
                  <p className="text-gray-600 text-sm">Optimized logistics management</p>
                </div>
              </div>
              <div className="flex items-start group">
                <FaCheckCircle className="text-accent-500 text-2xl mr-3 group-hover:scale-110 transition-transform flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Professional & Ethical</h4>
                  <p className="text-gray-600 text-sm">Client-focused business practices</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
