import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary-600 via-primary-700 to-primary-900 text-white">
      {/* Gradient overlay for depth */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
      
      <div className="container relative mx-auto px-4 py-24 md:py-36">
        <div className="max-w-3xl">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white to-primary-50 bg-clip-text text-transparent">
            Your Trusted Partner for Wholesale, Retail & Business Solutions
          </h1>
          <p className="text-xl md:text-2xl mb-10 text-primary-50/90 leading-relaxed">
            Solutions Merchant Investments delivers reliable wholesale, retail, hardware supply, 
            logistics, and multi-sector business solutions across Zimbabwe and international markets.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button asChild size="lg" className="bg-white text-primary-700 hover:bg-primary-50 shadow-lg hover:shadow-xl">
              <Link href="#services">
                Our Services
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-2 border-white text-white hover:bg-white/10 backdrop-blur-sm">
              <Link href="#contact">
                Get in Touch
              </Link>
            </Button>
          </div>
        </div>
      </div>
      
      {/* Decorative gradient orbs */}
      <div className="absolute top-20 right-10 w-64 h-64 bg-accent-500/20 rounded-full blur-3xl" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-primary-400/10 rounded-full blur-3xl" />
    </section>
  );
}
