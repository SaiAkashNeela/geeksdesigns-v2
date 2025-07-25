import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, FileText } from 'lucide-react';

const Terms: React.FC = () => {
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
            <div className="w-12 h-12 bg-teal-100 rounded-xl flex items-center justify-center">
              <FileText className="w-6 h-6 text-teal-600" />
            </div>
            <div>
              <h1 className="text-3xl sm:text-4xl font-bold text-gray-900">Terms & Refund Policy</h1>
              <p className="text-gray-600 mt-1">Our service terms and refund policies</p>
            </div>
          </div>
          
          {/* Content */}
          <div className="prose prose-lg max-w-none">
            <div className="space-y-8">
              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Dynamic Refund Policy</h2>
                <p className="text-gray-700 leading-relaxed">
                  At GeeksDesigns, we understand that every project is unique. Our refund policies are dynamic and depend on the custom quote that is discussed and agreed upon with each client before project commencement.
                </p>
              </section>
              
              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Flexible Terms Per Project</h2>
                <p className="text-gray-700 leading-relaxed">
                  All terms and conditions are flexible and tailored to each individual client and project. These terms are clearly clarified and agreed upon upfront during our initial consultation and project scoping phase.
                </p>
              </section>
              
              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Custom Agreements</h2>
                <p className="text-gray-700 leading-relaxed">
                  Each project comes with its own custom agreement that outlines:
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                  <li>Project scope and deliverables</li>
                  <li>Timeline and milestones</li>
                  <li>Payment terms and schedule</li>
                  <li>Refund conditions specific to the project</li>
                  <li>Revision and change request policies</li>
                </ul>
              </section>
              
              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Transparent Communication</h2>
                <p className="text-gray-700 leading-relaxed">
                  We believe in complete transparency. Before any work begins, we ensure that all terms, including refund policies, are clearly communicated and mutually agreed upon. This approach allows us to provide the most appropriate and fair terms for each unique situation.
                </p>
              </section>
              
              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Questions About Terms</h2>
                <p className="text-gray-700 leading-relaxed">
                  If you have any questions about our terms, refund policies, or would like to discuss your specific project requirements, please don't hesitate to contact us at{' '}
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

export default Terms;