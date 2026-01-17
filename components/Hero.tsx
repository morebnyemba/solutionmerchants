'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import TypedText from '@/components/TypedText';
import ContactModal from '@/components/ContactModal';

export default function Hero() {
  const typedStrings = [
    'Wholesale & Retail Solutions',
    'Hardware Supply Services',
    'Logistics & Supply Chain',
    'Commodity Broking',
    'Multi-Sector Business Solutions',
  ];

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary-600 via-primary-700 to-primary-900 text-white min-h-[600px] md:min-h-[700px]">
      {/* Background image with overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1920&q=80')",
        }}
      />
      {/* Gradient overlays for depth and readability */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-800/90 via-primary-900/80 to-black/70" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
      
      <div className="container relative mx-auto px-4 py-24 md:py-36">
        <div className="max-w-3xl">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="block bg-gradient-to-r from-white to-primary-50 bg-clip-text text-transparent">
              Your Trusted Partner for
            </span>
            <span className="block mt-2 min-h-[1.2em]">
              <TypedText 
                strings={typedStrings} 
                className="bg-gradient-to-r from-accent-400 to-accent-200 bg-clip-text text-transparent"
              />
            </span>
          </h1>
          <p className="text-xl md:text-2xl mb-10 text-primary-50/90 leading-relaxed">
            Solutions Merchant Investments delivers reliable wholesale, retail, hardware supply, 
            logistics, and multi-sector business solutions across Zimbabwe and international markets.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button asChild size="lg" className="bg-gradient-to-r from-accent-500 to-accent-600 text-white hover:from-accent-600 hover:to-accent-700 shadow-lg hover:shadow-xl">
              <Link href="/services">
                Our Services
              </Link>
            </Button>
            <ContactModal 
              trigger={
                <Button variant="outline" size="lg" className="border-2 border-white text-white hover:bg-white/10 backdrop-blur-sm">
                  Get in Touch
                </Button>
              }
            />
          </div>
        </div>
      </div>
      
      {/* Decorative gradient orbs */}
      <div className="absolute top-20 right-10 w-64 h-64 bg-accent-500/20 rounded-full blur-3xl" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-primary-400/10 rounded-full blur-3xl" />
    </section>
  );
}
