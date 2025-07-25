import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Shield } from 'lucide-react';

const PrivacyPolicy: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <Link 
            to="/" 
            className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 transition-colors duration-300 font-medium"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>
        </div>
      </header>
      
      {/* Content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-2xl shadow-sm p-8 sm:p-12">
          {/* Title */}
          <div className="flex items-center gap-3 mb-8">
            <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
              <Shield className="w-6 h-6 text-blue-600" />
            </div>
            <div>
              <h1 className="text-3xl sm:text-4xl font-bold text-gray-900">Privacy Policy</h1>
              <p className="text-gray-600 mt-1">How we handle your information</p>
            </div>
          </div>
          
          {/* Content */}
          <div className="prose prose-lg max-w-none">
            <div className="space-y-8">
              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Data Collection</h2>
                <p className="text-gray-700 leading-relaxed">
                  GeeksDesigns does not collect any personal data from visitors to our website, except for anonymized usage information through Google Analytics via cookies. This helps us understand how our website is used and improve the user experience.
                </p>
              </section>
              
              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Direct Communication</h2>
                <p className="text-gray-700 leading-relaxed">
                  If you contact us via email through our contact form or directly at support@geeksdesigns.com, the information you provide (name, email address, and message content) becomes part of direct communication initiated by you. This information is used solely to respond to your inquiry and provide the services you request.
                </p>
              </section>
              
              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Cookie Usage</h2>
                <p className="text-gray-700 leading-relaxed">
                  We use Google Analytics cookies to collect anonymized data about website usage patterns. These cookies do not contain personally identifiable information and are used solely for website analytics and improvement purposes.
                </p>
              </section>
              
              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Data Security</h2>
                <p className="text-gray-700 leading-relaxed">
                  Any communication you initiate with us is handled with care and stored securely. We do not share, sell, or distribute your contact information to third parties.
                </p>
              </section>
              
              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact Us</h2>
                <p className="text-gray-700 leading-relaxed">
                  If you have any questions about this privacy policy or how we handle your information, please contact us at{' '}
                  <a href="mailto:support@geeksdesigns.com" className="text-blue-600 hover:text-blue-800 font-medium">
                    support@geeksdesigns.com
                  </a>
                </p>
              </section>
            </div>
          </div>
          
          <div className="mt-12 pt-8 border-t border-gray-200">
            <p className="text-sm text-gray-500">
              Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default PrivacyPolicy;