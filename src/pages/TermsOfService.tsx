import React from 'react';
import LegalLayout from '../components/LegalLayout';

export default function TermsOfService() {
  return (
    <LegalLayout title="Terms of Service" lastUpdated="November 03, 2024">
      <div className="space-y-12">
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Acceptance of Terms</h2>
          <div className="bg-teal-50 border-l-4 border-teal-500 p-4 mb-6">
            <p className="text-teal-900">
              By accessing or using ServiConnect, you agree to be bound by these Terms of Service and all applicable laws and regulations. 
              If you disagree with any part of these terms, you may not access the platform.
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Service Description</h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">2.1 Platform Purpose</h3>
              <p className="text-gray-600 mb-3">
                ServiConnect provides an emergency home services platform connecting users with service providers. We:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Facilitate emergency service connections</li>
                <li>Process service payments</li>
                <li>Enable communication between parties</li>
                <li>Maintain service quality standards</li>
                <li>Do not directly provide services</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">2.2 Platform Limitations</h3>
              <div className="bg-gray-50 p-4 rounded-lg">
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>We are a connection platform, not a service provider</li>
                  <li>Cannot guarantee service availability</li>
                  <li>Response times may vary by location</li>
                  <li>Emergency services may be subject to local regulations</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact Information</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">For Legal Matters:</h3>
              <a href="mailto:legal@serviconnect.com" className="text-teal-600 hover:text-teal-700">
                legal@serviconnect.com
              </a>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">For Emergency Assistance:</h3>
              <div className="space-y-2">
                <a href="mailto:emergency@serviconnect.com" className="text-teal-600 hover:text-teal-700 block">
                  emergency@serviconnect.com
                </a>
                <p className="text-gray-700">1-800-EMERGENCY</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </LegalLayout>
  );
}