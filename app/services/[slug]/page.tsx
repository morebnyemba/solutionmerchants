import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
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
  FaHandshake,
  FaCheckCircle 
} from 'react-icons/fa';
import { IconType } from 'react-icons';

interface ServiceData {
  title: string;
  Icon: IconType;
  description: string;
  overview: string;
  keyServices: string[];
  benefits: string[];
  industries: string[];
  backgroundImage: string;
}

// Service data with detailed information
const servicesData: Record<string, ServiceData> = {
  'wholesale-retail': {
    title: 'General Wholesale & Retail',
    Icon: FaStore,
    backgroundImage: 'https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?w=1920&q=80',
    description: 'Comprehensive bulk procurement and distribution services for businesses, institutions, and contractors across Zimbabwe and international markets.',
    overview: 'Solutions Merchant Investments specializes in general wholesale and retail trading, providing end-to-end procurement and distribution solutions. We serve businesses, institutions, contractors, and individual buyers with reliable supply chain management.',
    keyServices: [
      'Bulk procurement and distribution of general merchandise',
      'Retail and wholesale supply to businesses and institutions',
      'Supply to contractors for large-scale projects',
      'Import and export of general merchandise',
      'Cross-border trade facilitation',
      'Product sourcing and vendor management',
    ],
    benefits: [
      'Competitive bulk pricing',
      'Reliable supply chain',
      'Quality assurance',
      'Flexible payment terms',
      'Timely delivery',
      'Wide product range',
    ],
    industries: ['Construction', 'Manufacturing', 'Retail', 'Hospitality', 'Government', 'NGOs'],
  },
  'hardware-wholesale': {
    title: 'Hardware Wholesale',
    Icon: FaTools,
    backgroundImage: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=1920&q=80',
    description: 'Complete supply of building and construction materials, tools, and industrial hardware for commercial and residential projects.',
    overview: 'We provide comprehensive hardware wholesale services, supplying everything from basic hand tools to major construction materials. Our extensive inventory and reliable supply chain ensure your projects never face delays due to material shortages.',
    keyServices: [
      'Building and construction materials supply',
      'Hand tools and power tools distribution',
      'Plumbing and electrical supplies',
      'Fasteners, fittings, and accessories',
      'Paints, coatings, and related products',
      'Safety equipment and protective gear',
      'Cement, steel, timber, and roofing materials',
      'Industrial and commercial hardware supplies',
    ],
    benefits: [
      'Extensive product inventory',
      'Bulk supply capabilities',
      'Technical support and guidance',
      'Quality certified materials',
      'Competitive wholesale pricing',
      'Direct manufacturer relationships',
    ],
    industries: ['Construction', 'Real Estate', 'Manufacturing', 'Mining', 'Infrastructure'],
  },
  'commodity-broking': {
    title: 'Commodity Broking',
    Icon: FaChartLine,
    backgroundImage: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=1920&q=80',
    description: 'Agricultural and industrial commodity brokerage services connecting buyers and sellers with market intelligence and trade facilitation.',
    overview: 'Our commodity broking services bridge the gap between producers and buyers in both agricultural and industrial sectors. We provide market linkage, price negotiation expertise, and comprehensive trade coordination support.',
    keyServices: [
      'Agricultural commodity brokerage',
      'Industrial commodity brokerage',
      'Market linkage and intelligence',
      'Price negotiation and arbitrage',
      'Trade coordination and settlement support',
      'Risk management advisory',
      'Quality assurance and inspection coordination',
    ],
    benefits: [
      'Access to wider markets',
      'Fair price discovery',
      'Reduced transaction costs',
      'Risk mitigation',
      'Trade expertise',
      'Settlement security',
    ],
    industries: ['Agriculture', 'Mining', 'Manufacturing', 'Energy', 'Metals & Minerals'],
  },
  'transport-logistics': {
    title: 'Transport & Logistics',
    Icon: FaTruck,
    backgroundImage: 'https://images.unsplash.com/photo-1566576721346-d4a3b4eaeb55?w=1920&q=80',
    description: 'End-to-end freight coordination, warehousing, and delivery management for domestic and cross-border logistics.',
    overview: 'We offer comprehensive transport and logistics solutions designed to optimize your supply chain operations. From local deliveries to international freight coordination, we ensure your goods move efficiently and securely.',
    keyServices: [
      'Freight coordination and management',
      'Warehousing and storage solutions',
      'Delivery management and tracking',
      'Cross-border logistics facilitation',
      'Local distribution services',
      'Inventory management support',
      'Last-mile delivery solutions',
    ],
    benefits: [
      'Reduced logistics costs',
      'Faster delivery times',
      'Real-time tracking',
      'Secure handling',
      'Customs expertise',
      'Flexible solutions',
    ],
    industries: ['Import/Export', 'Retail', 'Manufacturing', 'E-commerce', 'FMCG'],
  },
  'supply-chain-management': {
    title: 'Supply Chain Management',
    Icon: FaBoxes,
    backgroundImage: 'https://images.unsplash.com/photo-1553413077-190dd305871c?w=1920&q=80',
    description: 'Strategic procurement, supplier coordination, inventory management, and logistics planning for optimal cost efficiency.',
    overview: 'Our supply chain management services provide end-to-end visibility and control over your procurement and distribution processes. We help businesses optimize costs, improve efficiency, and maintain reliable supply chains.',
    keyServices: [
      'Strategic procurement and sourcing',
      'Supplier coordination and management',
      'Inventory optimization and management',
      'Distribution network planning',
      'Cost optimization strategies',
      'Logistics planning and execution',
      'Supply chain analytics and reporting',
    ],
    benefits: [
      'Cost reduction',
      'Improved efficiency',
      'Better inventory control',
      'Reduced stockouts',
      'Enhanced visibility',
      'Risk mitigation',
    ],
    industries: ['Manufacturing', 'Retail', 'Healthcare', 'Automotive', 'Technology'],
  },
  'tendering-bulk-wholesaling': {
    title: 'Tendering & Bulk Wholesaling',
    Icon: FaClipboardList,
    backgroundImage: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1920&q=80',
    description: 'Participation in public and private tenders with proven bulk supply and contract fulfillment capabilities.',
    overview: 'We specialize in tender participation and bulk wholesaling, serving government agencies, corporations, and large institutions. Our proven track record in contract fulfillment ensures reliable delivery on large-scale projects.',
    keyServices: [
      'Public tender participation',
      'Private sector tender response',
      'Bulk supply of goods and materials',
      'Contract-based procurement',
      'Project fulfillment services',
      'Compliance and documentation management',
      'Volume discount pricing',
    ],
    benefits: [
      'Tender expertise',
      'Bulk pricing advantages',
      'Reliable delivery',
      'Compliance assurance',
      'Project management',
      'Quality guarantees',
    ],
    industries: ['Government', 'Education', 'Healthcare', 'Infrastructure', 'Defense'],
  },
  'real-estate-property': {
    title: 'Real Estate & Property',
    Icon: FaBuilding,
    backgroundImage: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1920&q=80',
    description: 'Property acquisition and disposal, land sourcing, investment facilitation, and real estate trading services.',
    overview: 'Our real estate services cover the full spectrum of property transactions, from land sourcing to investment facilitation. We help clients navigate the property market with expert guidance and reliable partnerships.',
    keyServices: [
      'Property acquisition and disposal',
      'Land sourcing and identification',
      'Investment facilitation and advisory',
      'Real estate trading and brokerage',
      'Property partnerships and joint ventures',
      'Market analysis and valuation support',
      'Due diligence coordination',
    ],
    benefits: [
      'Market expertise',
      'Investment opportunities',
      'Risk assessment',
      'Legal support coordination',
      'Network access',
      'Transaction efficiency',
    ],
    industries: ['Real Estate', 'Construction', 'Investment', 'Hospitality', 'Commercial'],
  },
  'money-capital-markets': {
    title: 'Money & Capital Markets',
    Icon: FaDollarSign,
    backgroundImage: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=1920&q=80',
    description: 'Capital sourcing, investment structuring, financial partnerships, and funding linkages for business growth.',
    overview: 'We facilitate access to capital markets and financial partnerships, helping businesses secure funding for growth and expansion. Our advisory services cover investment structuring and deal facilitation.',
    keyServices: [
      'Capital sourcing and fundraising',
      'Deal facilitation and structuring',
      'Investment structuring and advisory',
      'Financial partnership coordination',
      'Funding linkages with investors',
      'Project finance advisory',
      'Strategic financial planning',
    ],
    benefits: [
      'Access to capital',
      'Expert advisory',
      'Network connections',
      'Deal structuring',
      'Risk management',
      'Growth facilitation',
    ],
    industries: ['Startups', 'SMEs', 'Real Estate', 'Manufacturing', 'Agriculture'],
  },
  'general-dealership': {
    title: 'General Dealership',
    Icon: FaHandshake,
    backgroundImage: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?w=1920&q=80',
    description: 'Product and brand representation through authorized and independent dealerships with comprehensive market development support.',
    overview: 'We provide dealership services for quality products and brands, representing manufacturers and suppliers in target markets. Our market development capabilities ensure successful product launches and sustained growth.',
    keyServices: [
      'Product and brand representation',
      'Authorized dealership arrangements',
      'Independent dealer networks',
      'Market development and penetration',
      'Distribution network management',
      'Sales and marketing support',
      'After-sales service coordination',
    ],
    benefits: [
      'Market presence',
      'Brand development',
      'Sales growth',
      'Distribution reach',
      'Local expertise',
      'Customer relationships',
    ],
    industries: ['FMCG', 'Automotive', 'Electronics', 'Industrial Equipment', 'Consumer Goods'],
  },
};

type ServiceSlug = keyof typeof servicesData;

interface PageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  return Object.keys(servicesData).map((slug) => ({
    slug: slug,
  }));
}

export default function ServiceDetailPage({ params }: PageProps) {
  const service = servicesData[params.slug as ServiceSlug];

  if (!service) {
    notFound();
  }

  return (
    <div className="bg-white">
      {/* Hero Section with Background Image */}
      <section className="relative bg-gradient-to-br from-primary-600 via-primary-700 to-primary-900 text-white py-24 overflow-hidden min-h-[500px]">
        {/* Background image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
          style={{
            backgroundImage: `url('${service.backgroundImage}')`,
          }}
        />
        {/* Gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary-800/90 via-primary-900/80 to-black/70" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
        {/* Decorative orbs */}
        <div className="absolute top-10 right-10 w-64 h-64 bg-accent-500/20 rounded-full blur-3xl" />
        <div className="absolute bottom-10 left-10 w-96 h-96 bg-primary-400/10 rounded-full blur-3xl" />
        
        <div className="container relative mx-auto px-4">
          <div className="max-w-4xl">
            <div className="text-accent-400 text-7xl mb-6">
              <service.Icon />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-primary-50 bg-clip-text text-transparent">
              {service.title}
            </h1>
            <p className="text-xl md:text-2xl text-primary-50/90 leading-relaxed">
              {service.description}
            </p>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Overview</h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              {service.overview}
            </p>
          </div>
        </div>
      </section>

      {/* Key Services Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Key Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {service.keyServices.map((item, index) => (
                <div key={index} className="flex items-start">
                  <FaCheckCircle className="text-accent-500 text-xl mr-3 mt-1 flex-shrink-0" />
                  <p className="text-gray-700">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-white via-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-8 text-center bg-gradient-to-r from-primary-700 to-accent-600 bg-clip-text text-transparent">
              Benefits
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {service.benefits.map((benefit, index) => (
                <Card key={index} className="bg-gradient-to-br from-white to-accent-50/30 border-accent-200 hover:shadow-lg transition-shadow">
                  <CardContent className="pt-6">
                    <div className="flex items-center mb-2">
                      <FaCheckCircle className="text-accent-600 text-2xl mr-2 flex-shrink-0" />
                      <h3 className="text-lg font-semibold text-gray-900">{benefit}</h3>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Industries Served */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Industries We Serve</h2>
            <div className="flex flex-wrap gap-3">
              {service.industries.map((industry, index) => (
                <span
                  key={index}
                  className="bg-white px-6 py-3 rounded-full border-2 border-accent-500 text-gray-800 font-medium"
                >
                  {industry}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 md:py-28 bg-gradient-to-br from-accent-500 via-accent-600 to-accent-700 overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary-600/20 rounded-full blur-3xl" />
        
        <div className="container relative mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">
            Contact us today to discuss how our {service.title.toLowerCase()} services can support your business growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <ContactModal 
              serviceName={service.title}
              trigger={
                <Button size="lg" className="bg-white text-accent-700 hover:bg-gray-100 shadow-xl hover:shadow-2xl">
                  Contact Us
                </Button>
              }
            />
            <Button asChild variant="outline" size="lg" className="border-2 border-white text-white hover:bg-white/10 backdrop-blur-sm">
              <Link href="/services">
                View All Services
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
