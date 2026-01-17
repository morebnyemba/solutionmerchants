'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X, Phone } from 'lucide-react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur-lg bg-white/80 border-b border-gray-200/50 shadow-sm">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="text-2xl font-bold bg-gradient-to-r from-primary-600 to-primary-800 bg-clip-text text-transparent hover:from-primary-700 hover:to-primary-900 transition-all">
            Solutions Merchant Investments
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <Link 
              href="/" 
              className="text-gray-700 hover:text-primary-600 transition-colors font-medium"
            >
              Home
            </Link>
            <Link 
              href="/about" 
              className="text-gray-700 hover:text-primary-600 transition-colors font-medium"
            >
              About
            </Link>
            <Link 
              href="/services" 
              className="text-gray-700 hover:text-primary-600 transition-colors font-medium"
            >
              Services
            </Link>
            <Link 
              href="/contact" 
              className="text-gray-700 hover:text-primary-600 transition-colors font-medium"
            >
              Contact
            </Link>
            
            {/* CTA Button */}
            <Button 
              asChild 
              className="bg-gradient-to-r from-accent-500 to-accent-600 hover:from-accent-600 hover:to-accent-700 text-white shadow-lg hover:shadow-xl transition-all"
            >
              <Link href="/contact" className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                Get a Quote
              </Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-gray-700 hover:text-primary-600 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 space-y-3 backdrop-blur-md bg-white/95 rounded-lg p-4 shadow-lg border border-gray-200/50">
            <Link
              href="/"
              className="block py-2 text-gray-700 hover:text-primary-600 transition-colors font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/about"
              className="block py-2 text-gray-700 hover:text-primary-600 transition-colors font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Link
              href="/services"
              className="block py-2 text-gray-700 hover:text-primary-600 transition-colors font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Services
            </Link>
            <Link
              href="/contact"
              className="block py-2 text-gray-700 hover:text-primary-600 transition-colors font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
            <Button 
              asChild 
              className="w-full bg-gradient-to-r from-accent-500 to-accent-600 hover:from-accent-600 hover:to-accent-700 text-white shadow-lg"
            >
              <Link href="/contact" className="flex items-center justify-center gap-2" onClick={() => setIsMenuOpen(false)}>
                <Phone className="w-4 h-4" />
                Get a Quote
              </Link>
            </Button>
          </div>
        )}
      </nav>
    </header>
  );
}
