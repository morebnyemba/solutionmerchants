import { Metadata } from 'next';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export const metadata: Metadata = {
  title: 'Terms and Conditions - Solutions Merchant Investments',
  description: 'Terms and Conditions for Solutions Merchant Investments - Read our terms of service and conditions for using our website and services.',
  robots: "index, follow",
  openGraph: {
    title: 'Terms and Conditions - Solutions Merchant Investments',
    description: 'Our terms and conditions for using our services',
    type: 'website',
    url: 'https://www.solutionsmerchants.co.zw/terms-and-conditions',
  },
  twitter: {
    card: 'summary',
    title: 'Terms and Conditions',
    description: 'Terms of service for Solutions Merchant Investments',
  },
};

export default function TermsAndConditionsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-600 via-primary-700 to-primary-900 text-white py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
        <div className="absolute top-10 right-10 w-64 h-64 bg-accent-500/20 rounded-full blur-3xl" />
        
        <div className="container relative mx-auto px-4">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-primary-50 bg-clip-text text-transparent">
              Terms and Conditions
            </h1>
            <p className="text-xl text-primary-50/90">
              Last updated: January 2026
            </p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-8">
            <Card className="border-primary-200 shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl text-primary-900">Agreement to Terms</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 leading-relaxed">
                  These Terms and Conditions constitute a legally binding agreement made between you, whether personally 
                  or on behalf of an entity (&ldquo;you&rdquo;) and Solutions Merchant Investments (&ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;), concerning 
                  your access to and use of our website and services. You agree that by accessing the website, you have 
                  read, understood, and agreed to be bound by all of these Terms and Conditions.
                </p>
              </CardContent>
            </Card>

            <Card className="border-primary-200 shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl text-primary-900">Use of Services</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-700 leading-relaxed">
                  By using our website and services, you represent and warrant that:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                  <li>All information you provide is accurate, current, and complete</li>
                  <li>You have the legal capacity and agree to comply with these Terms and Conditions</li>
                  <li>You will not use the website for any illegal or unauthorized purpose</li>
                  <li>Your use of the website will not violate any applicable law or regulation</li>
                  <li>You will not impersonate another person or entity</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-primary-200 shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl text-primary-900">Services Provided</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Solutions Merchant Investments provides wholesale, retail, hardware supply, logistics, and business 
                  solutions services. Our services include but are not limited to:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                  <li>General Wholesale & Retail trading</li>
                  <li>Hardware Wholesale supply</li>
                  <li>Commodity Broking services</li>
                  <li>Transport & Logistics solutions</li>
                  <li>Supply Chain Management</li>
                  <li>Tendering & Bulk Wholesaling</li>
                  <li>Real Estate & Property services</li>
                  <li>Money & Capital Markets facilitation</li>
                  <li>General Dealership services</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-primary-200 shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl text-primary-900">Intellectual Property Rights</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 leading-relaxed">
                  Unless otherwise indicated, the website and all content, features, and functionality (including but 
                  not limited to all information, software, text, displays, images, video, and audio) are owned by 
                  Solutions Merchant Investments and are protected by copyright, trademark, patent, trade secret, and 
                  other intellectual property laws. You may not reproduce, distribute, modify, create derivative works 
                  of, publicly display, publicly perform, republish, download, store, or transmit any of the material 
                  on our website without our prior written consent.
                </p>
              </CardContent>
            </Card>

            <Card className="border-primary-200 shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl text-primary-900">Pricing and Payments</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-700 leading-relaxed">
                  All prices for our services and products are subject to change without notice. We reserve the right 
                  to modify or discontinue any service or product without notice at any time.
                </p>
                <div>
                  <h3 className="font-semibold text-lg text-gray-900 mb-2">Payment Terms</h3>
                  <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                    <li>Payment terms will be specified in individual contracts and quotations</li>
                    <li>Prices are quoted in US Dollars unless otherwise specified</li>
                    <li>Late payments may incur additional charges as specified in contracts</li>
                    <li>We reserve the right to refuse service or terminate agreements for non-payment</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card className="border-primary-200 shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl text-primary-900">Limitation of Liability</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 leading-relaxed mb-4">
                  To the fullest extent permitted by applicable law, in no event will Solutions Merchant Investments, 
                  its affiliates, officers, directors, employees, agents, suppliers, or licensors be liable to any 
                  person for:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                  <li>Any indirect, incidental, special, punitive, cover, or consequential damages</li>
                  <li>Any loss of profits, revenue, sales, data, or costs of procurement of substitute goods or services</li>
                  <li>Any damages arising from use of or inability to use our website or services</li>
                  <li>Any damages related to errors, mistakes, or inaccuracies of content</li>
                </ul>
                <p className="text-gray-700 leading-relaxed mt-4">
                  Our total liability to you for any damages shall not exceed the amount paid by you, if any, for 
                  accessing or using the website or services.
                </p>
              </CardContent>
            </Card>

            <Card className="border-primary-200 shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl text-primary-900">Indemnification</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 leading-relaxed">
                  You agree to defend, indemnify, and hold harmless Solutions Merchant Investments and its subsidiaries, 
                  affiliates, officers, directors, employees, agents, licensors, and suppliers from and against any 
                  claims, liabilities, damages, judgments, awards, losses, costs, expenses, or fees (including reasonable 
                  attorneys&apos; fees) arising out of or relating to your violation of these Terms and Conditions or your 
                  use of the website or services.
                </p>
              </CardContent>
            </Card>

            <Card className="border-primary-200 shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl text-primary-900">Governing Law</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 leading-relaxed">
                  These Terms and Conditions shall be governed by and construed in accordance with the laws of Zimbabwe, 
                  without regard to its conflict of law provisions. Any legal action or proceeding arising under these 
                  Terms and Conditions will be brought exclusively in the courts located in Zimbabwe, and the parties 
                  hereby irrevocably consent to the personal jurisdiction and venue therein.
                </p>
              </CardContent>
            </Card>

            <Card className="border-primary-200 shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl text-primary-900">Dispute Resolution</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 leading-relaxed mb-4">
                  In the event of any dispute, controversy, or claim arising out of or relating to these Terms and 
                  Conditions, the parties agree to first attempt to resolve the dispute through good faith negotiations. 
                  If the dispute cannot be resolved through negotiations within 30 days, either party may pursue legal 
                  remedies as provided by law.
                </p>
              </CardContent>
            </Card>

            <Card className="border-primary-200 shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl text-primary-900">Termination</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 leading-relaxed">
                  We may terminate or suspend your access to our website and services immediately, without prior notice 
                  or liability, for any reason whatsoever, including without limitation if you breach these Terms and 
                  Conditions. Upon termination, your right to use the website will immediately cease.
                </p>
              </CardContent>
            </Card>

            <Card className="border-primary-200 shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl text-primary-900">Severability and Waiver</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h3 className="font-semibold text-lg text-gray-900 mb-2">Severability</h3>
                  <p className="text-gray-700 leading-relaxed">
                    If any provision of these Terms and Conditions is held to be unenforceable or invalid, such 
                    provision will be changed and interpreted to accomplish the objectives of such provision to the 
                    greatest extent possible under applicable law, and the remaining provisions will continue in full 
                    force and effect.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-gray-900 mb-2">Waiver</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Except as provided herein, the failure to exercise a right or to require performance of an 
                    obligation under these Terms shall not affect a party&apos;s ability to exercise such right or require 
                    such performance at any time thereafter, nor shall the waiver of a breach constitute a waiver of 
                    any subsequent breach.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-primary-200 shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl text-primary-900">Changes to Terms and Conditions</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 leading-relaxed">
                  We reserve the right, at our sole discretion, to modify or replace these Terms and Conditions at any 
                  time. If a revision is material, we will try to provide at least 30 days&apos; notice prior to any new 
                  terms taking effect. What constitutes a material change will be determined at our sole discretion. 
                  By continuing to access or use our website after those revisions become effective, you agree to be 
                  bound by the revised terms.
                </p>
              </CardContent>
            </Card>

            <Card className="border-accent-200 shadow-lg bg-gradient-to-br from-accent-50/50 to-white">
              <CardHeader>
                <CardTitle className="text-2xl text-accent-900">Contact Us</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 leading-relaxed mb-4">
                  If you have any questions about these Terms and Conditions, please contact us:
                </p>
                <div className="space-y-2 text-gray-700">
                  <p><strong>Email:</strong> <a href="mailto:info@solutionsmerchants.co.zw" className="text-primary-600 hover:text-primary-700">info@solutionsmerchants.co.zw</a></p>
                  <p><strong>Phone (Zimbabwe):</strong> <a href="tel:+263788699788" className="text-primary-600 hover:text-primary-700">+263 7 88699788</a></p>
                  <p><strong>Phone (International):</strong> <a href="tel:+61466841679" className="text-primary-600 hover:text-primary-700">+61 466 841 679</a></p>
                  <p><strong>Address:</strong> Subdivision R Homefield, Mt Hampden, Zimbabwe</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
