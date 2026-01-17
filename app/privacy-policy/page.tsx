import { Metadata } from 'next';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export const metadata: Metadata = {
  title: 'Privacy Policy - Solutions Merchant Investments',
  description: 'Privacy Policy for Solutions Merchant Investments - Learn how we collect, use, and protect your personal information.',
};

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-600 via-primary-700 to-primary-900 text-white py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
        <div className="absolute top-10 right-10 w-64 h-64 bg-accent-500/20 rounded-full blur-3xl" />
        
        <div className="container relative mx-auto px-4">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-primary-50 bg-clip-text text-transparent">
              Privacy Policy
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
                <CardTitle className="text-2xl text-primary-900">Introduction</CardTitle>
              </CardHeader>
              <CardContent className="prose prose-gray max-w-none">
                <p className="text-gray-700 leading-relaxed">
                  Solutions Merchant Investments (&ldquo;we,&rdquo; &ldquo;our,&rdquo; or &ldquo;us&rdquo;) is committed to protecting your privacy. 
                  This Privacy Policy explains how we collect, use, disclose, and safeguard your information when 
                  you visit our website or use our services.
                </p>
              </CardContent>
            </Card>

            <Card className="border-primary-200 shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl text-primary-900">Information We Collect</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h3 className="font-semibold text-lg text-gray-900 mb-2">Personal Information</h3>
                  <p className="text-gray-700 leading-relaxed">
                    We may collect personal information that you voluntarily provide to us when you:
                  </p>
                  <ul className="list-disc list-inside space-y-1 text-gray-700 mt-2 ml-4">
                    <li>Fill out contact forms on our website</li>
                    <li>Request quotes or information about our services</li>
                    <li>Subscribe to our newsletters or marketing communications</li>
                    <li>Engage with us through phone, email, or WhatsApp</li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-semibold text-lg text-gray-900 mb-2">Information Collected</h3>
                  <p className="text-gray-700 leading-relaxed">
                    The personal information we may collect includes:
                  </p>
                  <ul className="list-disc list-inside space-y-1 text-gray-700 mt-2 ml-4">
                    <li>Name and contact details (email address, phone number)</li>
                    <li>Company name and business information</li>
                    <li>Communication preferences</li>
                    <li>Any other information you choose to provide</li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-semibold text-lg text-gray-900 mb-2">Automatically Collected Information</h3>
                  <p className="text-gray-700 leading-relaxed">
                    When you visit our website, we may automatically collect certain information about your device, 
                    including information about your web browser, IP address, time zone, and some of the cookies 
                    installed on your device.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-primary-200 shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl text-primary-900">How We Use Your Information</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 leading-relaxed mb-4">
                  We use the information we collect to:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                  <li>Respond to your inquiries and provide customer support</li>
                  <li>Process your requests for quotes or services</li>
                  <li>Send you marketing communications (with your consent)</li>
                  <li>Improve our website and services</li>
                  <li>Analyze usage trends and optimize user experience</li>
                  <li>Comply with legal obligations and enforce our terms</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-primary-200 shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl text-primary-900">Information Sharing and Disclosure</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 leading-relaxed mb-4">
                  We do not sell, trade, or rent your personal information to third parties. We may share your 
                  information only in the following circumstances:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                  <li><strong>Service Providers:</strong> With trusted third-party service providers who assist us in operating our website and conducting our business</li>
                  <li><strong>Legal Requirements:</strong> When required by law or to protect our rights, property, or safety</li>
                  <li><strong>Business Transfers:</strong> In connection with any merger, sale, or transfer of our business assets</li>
                  <li><strong>With Your Consent:</strong> When you have given us explicit permission to share your information</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-primary-200 shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl text-primary-900">Data Security</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 leading-relaxed">
                  We implement appropriate technical and organizational security measures to protect your personal 
                  information against unauthorized access, alteration, disclosure, or destruction. However, no method 
                  of transmission over the internet or electronic storage is 100% secure, and we cannot guarantee 
                  absolute security.
                </p>
              </CardContent>
            </Card>

            <Card className="border-primary-200 shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl text-primary-900">Your Rights</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Depending on your location, you may have certain rights regarding your personal information, including:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                  <li>The right to access and receive a copy of your personal information</li>
                  <li>The right to request correction of inaccurate information</li>
                  <li>The right to request deletion of your personal information</li>
                  <li>The right to object to or restrict processing of your information</li>
                  <li>The right to withdraw consent at any time</li>
                </ul>
                <p className="text-gray-700 leading-relaxed mt-4">
                  To exercise these rights, please contact us using the information provided below.
                </p>
              </CardContent>
            </Card>

            <Card className="border-primary-200 shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl text-primary-900">Cookies and Tracking Technologies</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 leading-relaxed">
                  We use cookies and similar tracking technologies to track activity on our website and store certain 
                  information. You can instruct your browser to refuse all cookies or to indicate when a cookie is 
                  being sent. However, if you do not accept cookies, you may not be able to use some portions of our website.
                </p>
              </CardContent>
            </Card>

            <Card className="border-primary-200 shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl text-primary-900">Third-Party Links</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 leading-relaxed">
                  Our website may contain links to third-party websites. We are not responsible for the privacy 
                  practices or content of these external sites. We encourage you to review the privacy policies of 
                  any third-party sites you visit.
                </p>
              </CardContent>
            </Card>

            <Card className="border-primary-200 shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl text-primary-900">Changes to This Privacy Policy</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 leading-relaxed">
                  We may update this Privacy Policy from time to time. We will notify you of any changes by posting 
                  the new Privacy Policy on this page and updating the &ldquo;Last updated&rdquo; date. You are advised to review 
                  this Privacy Policy periodically for any changes.
                </p>
              </CardContent>
            </Card>

            <Card className="border-accent-200 shadow-lg bg-gradient-to-br from-accent-50/50 to-white">
              <CardHeader>
                <CardTitle className="text-2xl text-accent-900">Contact Us</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 leading-relaxed mb-4">
                  If you have any questions about this Privacy Policy or our data practices, please contact us:
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
