import Link from 'next/link';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import ContactModal from '@/components/ContactModal';
import { 
  FaStore, 
  FaTools, 
  FaChartLine, 
  FaTruck, 
  FaBoxes, 
  FaClipboardList, 
  FaBuilding, 
  FaDollarSign, 
  FaHandshake 
} from 'react-icons/fa';
import { IconType } from 'react-icons';

interface Service {
  title: string;
  slug: string;
  description: string;
  Icon: IconType;
  details: string[];
}

export default function ServicesPage() {
  const services: Service[] = [
    {
      title: 'General Wholesale & Retail',
      slug: 'wholesale-retail',
      description: 'Bulk procurement and distribution of goods, retail and wholesale supply to businesses, institutions, and contractors. Import and export of general merchandise.',
      Icon: FaStore,
      details: ['Bulk procurement', 'Retail & wholesale supply', 'Import/export services']
    },
    {
      title: 'Hardware Wholesale',
      slug: 'hardware-wholesale',
      description: 'Comprehensive supply of building materials, hand tools, power tools, plumbing, electrical supplies, cement, steel, timber, and roofing materials.',
      Icon: FaTools,
      details: ['Building materials', 'Tools & equipment', 'Industrial supplies']
    },
    {
      title: 'Commodity Broking',
      slug: 'commodity-broking',
      description: 'Agricultural and industrial commodity brokerage with market linkage, price negotiation, and trade coordination support.',
      Icon: FaChartLine,
      details: ['Agricultural commodities', 'Industrial commodities', 'Trade coordination']
    },
    {
      title: 'Transport & Logistics',
      slug: 'transport-logistics',
      description: 'Freight coordination, warehousing, delivery management, and cross-border logistics solutions for efficient supply chain operations.',
      Icon: FaTruck,
      details: ['Freight coordination', 'Warehousing', 'Cross-border logistics']
    },
    {
      title: 'Supply Chain Management',
      slug: 'supply-chain-management',
      description: 'End-to-end procurement, supplier coordination, inventory management, and logistics planning for cost optimization.',
      Icon: FaBoxes,
      details: ['Procurement services', 'Inventory management', 'Cost optimization']
    },
    {
      title: 'Tendering & Bulk Wholesaling',
      slug: 'tendering-bulk-wholesaling',
      description: 'Participation in public and private tenders with contract-based procurement and fulfillment capabilities.',
      Icon: FaClipboardList,
      details: ['Public tenders', 'Private contracts', 'Bulk fulfillment']
    },
    {
      title: 'Real Estate & Property',
      slug: 'real-estate-property',
      description: 'Property acquisition and disposal, land sourcing, investment facilitation, and real estate trading partnerships.',
      Icon: FaBuilding,
      details: ['Property acquisition', 'Land sourcing', 'Real estate trading']
    },
    {
      title: 'Money & Capital Markets',
      slug: 'money-capital-markets',
      description: 'Capital sourcing and deal facilitation, investment structuring, advisory support, and financial partnerships.',
      Icon: FaDollarSign,
      details: ['Capital sourcing', 'Investment structuring', 'Financial partnerships']
    },
    {
      title: 'General Dealership',
      slug: 'general-dealership',
      description: 'Product and brand representation through authorized and independent dealerships with market development support.',
      Icon: FaHandshake,
      details: ['Brand representation', 'Market development', 'Distribution networks']
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
      <section className="relative py-16 md:py-24 bg-gradient-to-b from-gray-50 via-white to-gray-50">
        {/* Background decorative elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-primary-100/30 to-accent-100/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-accent-100/20 to-primary-100/30 rounded-full blur-3xl" />
        
        <div className="container relative mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Link
                key={index}
                href={`/services/${service.slug}`}
                className="group"
              >
                <Card className="h-full border-2 border-transparent hover:border-accent-500 transition-all hover:shadow-2xl hover:scale-105 bg-gradient-to-br from-white to-gray-50/50 backdrop-blur-sm">
                  <CardHeader className="pb-4">
                    <div className="text-accent-600 text-5xl mb-4 group-hover:scale-110 transition-transform">
                      <service.Icon />
                    </div>
                    <CardTitle className="group-hover:text-accent-600 transition-colors">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-gray-600 mb-4 text-base">
                      {service.description}
                    </CardDescription>
                    <ul className="space-y-1 mb-6">
                      {service.details.map((detail) => (
                        <li key={detail} className="text-sm text-gray-500 flex items-center">
                          <span className="text-accent-500 mr-2">•</span>
                          {detail}
                        </li>
                      ))}
                    </ul>
                    <div className="text-accent-600 font-semibold group-hover:text-accent-700 flex items-center pt-2 border-t border-gray-100">
                      Learn More 
                      <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Competitive Advantage Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="rounded-2xl shadow-xl p-8 md:p-12 max-w-4xl mx-auto bg-gradient-to-br from-white via-primary-50/30 to-accent-50/20 border border-gray-100">
            <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">Our Competitive Advantage</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
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
            
            {/* CTA Button */}
            <div className="text-center pt-6 border-t border-gray-200">
              <p className="text-gray-700 mb-4 text-lg">Need a custom solution? Let&apos;s discuss your requirements.</p>
              <ContactModal 
                trigger={
                  <Button size="lg" className="bg-gradient-to-r from-primary-600 to-accent-600 hover:from-primary-700 hover:to-accent-700 text-white shadow-lg">
                    Request a Consultation
                  </Button>
                }
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
