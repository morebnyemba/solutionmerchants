import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold text-primary-400 mb-4">
              Solutions Merchant Investments
            </h3>
            <p className="text-gray-300 mb-4">
              A diversified, solutions-oriented enterprise specializing in wholesale, retail, 
              hardware supply, logistics, and multi-sector business solutions across Zimbabwe 
              and international markets.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="text-gray-300 hover:text-primary-400 transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-300 hover:text-primary-400 transition-colors">
                  Our Services
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-300 hover:text-primary-400 transition-colors">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li>
                <strong>Address:</strong><br />
                Subdivision R Homefield<br />
                Mt Hampden, Zimbabwe
              </li>
              <li>
                <strong>Zimbabwe:</strong><br />
                <a href="tel:+263788699788" className="hover:text-primary-400">
                  +263 7 88699788
                </a>
              </li>
              <li>
                <strong>International:</strong><br />
                <a href="tel:+61466841679" className="hover:text-primary-400">
                  +61 466 841 679
                </a>
              </li>
              <li>
                <strong>Email:</strong><br />
                <a href="mailto:info@solutionsmerchants.co.zw" className="hover:text-primary-400">
                  info@solutionsmerchants.co.zw
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-center md:text-left mb-4 md:mb-0">
              &copy; {currentYear} Solutions Merchant Investments. All rights reserved.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://wa.me/61466841679" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-green-400 transition-colors"
                aria-label="WhatsApp"
              >
                💬 WhatsApp
              </a>
              <a 
                href="https://www.solutionsmerchants.co.zw" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-primary-400 transition-colors"
              >
                🌐 Website
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
