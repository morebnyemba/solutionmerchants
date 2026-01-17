import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-primary-400 to-accent-400 bg-clip-text text-transparent mb-4">
              Solutions Merchant Investments
            </h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              A diversified, solutions-oriented enterprise specializing in wholesale, retail, 
              hardware supply, logistics, and multi-sector business solutions across Zimbabwe 
              and international markets.
            </p>
            <div className="flex flex-wrap gap-3">
              <Button 
                asChild 
                size="sm"
                className="bg-green-600 hover:bg-green-700 text-white"
              >
                <a 
                  href="https://wa.me/61466841679" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  💬 WhatsApp
                </a>
              </Button>
              <Button 
                asChild 
                variant="outline" 
                size="sm"
                className="border-gray-600 text-gray-300 hover:bg-gray-800 hover:text-white"
              >
                <a 
                  href="https://www.solutionsmerchants.co.zw" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  🌐 Website
                </a>
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-primary-400">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-gray-300 hover:text-primary-400 transition-colors flex items-center gap-2">
                  <span className="text-accent-500">▸</span> Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-300 hover:text-primary-400 transition-colors flex items-center gap-2">
                  <span className="text-accent-500">▸</span> About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-300 hover:text-primary-400 transition-colors flex items-center gap-2">
                  <span className="text-accent-500">▸</span> Our Services
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-primary-400 transition-colors flex items-center gap-2">
                  <span className="text-accent-500">▸</span> Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-primary-400">Contact Us</h4>
            <ul className="space-y-3 text-gray-300 text-sm">
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-1 text-accent-500 flex-shrink-0" />
                <div>
                  <strong className="text-white">Address:</strong><br />
                  Subdivision R Homefield<br />
                  Mt Hampden, Zimbabwe
                </div>
              </li>
              <li className="flex items-start gap-2">
                <Phone className="w-4 h-4 mt-1 text-accent-500 flex-shrink-0" />
                <div>
                  <strong className="text-white">Zimbabwe:</strong><br />
                  <a href="tel:+263788699788" className="hover:text-primary-400 transition-colors">
                    +263 7 88699788
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <Phone className="w-4 h-4 mt-1 text-accent-500 flex-shrink-0" />
                <div>
                  <strong className="text-white">International:</strong><br />
                  <a href="tel:+61466841679" className="hover:text-primary-400 transition-colors">
                    +61 466 841 679
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <Mail className="w-4 h-4 mt-1 text-accent-500 flex-shrink-0" />
                <div>
                  <strong className="text-white">Email:</strong><br />
                  <a href="mailto:info@solutionsmerchants.co.zw" className="hover:text-primary-400 transition-colors">
                    info@solutionsmerchants.co.zw
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-center md:text-left text-sm">
              &copy; {currentYear} Solutions Merchant Investments. All rights reserved.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <Link href="/privacy-policy" className="text-gray-400 hover:text-primary-400 transition-colors">
                Privacy Policy
              </Link>
              <span className="text-gray-600">•</span>
              <Link href="/terms-and-conditions" className="text-gray-400 hover:text-primary-400 transition-colors">
                Terms & Conditions
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
