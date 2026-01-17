import Link from 'next/link';

export default function Hero() {
  return (
    <section className="bg-gradient-to-r from-primary-600 to-primary-800 text-white">
      <div className="container mx-auto px-4 py-20 md:py-32">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Your Trusted Partner for Wholesale, Retail & Business Solutions
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-primary-100">
            Solutions Merchant Investments delivers reliable wholesale, retail, hardware supply, 
            logistics, and multi-sector business solutions across Zimbabwe and international markets.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="#services" className="btn-primary bg-white text-primary-600 hover:bg-gray-100 text-center">
              Our Services
            </Link>
            <Link href="#contact" className="btn-secondary border-white text-white hover:bg-white hover:text-primary-600 text-center">
              Get in Touch
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
