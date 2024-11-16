import React from 'react';
import LegalLayout from './LegalLayout';

export default function PrivacyPolicy() {
  return (
    <LegalLayout title="Privacy Policy" lastUpdated="November 03, 2024">
      <div className="space-y-12">
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Introduction</h2>
          <div className="bg-teal-50 border-l-4 border-teal-500 p-4 mb-6">
            <p className="text-teal-900">
              Welcome to ServiConnect. We respect your privacy and are committed to protecting your personal data. 
              This privacy policy explains how we collect, use, disclose, and safeguard your information when you use our platform.
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Information We Collect</h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">2.1 Personal Information</h3>
              <p className="text-gray-600 mb-3">We collect the following types of information:</p>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Name, address, and contact information</li>
                <li>Payment information and transaction history</li>
                <li>Emergency contact details</li>
                <li>Property information and service history</li>
                <li>Location data when using our platform</li>
                <li>Device information and usage data</li>
                <li>Communications with service providers and support</li>
                <li>Photos and documentation related to service requests</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">2.2 Service Provider Information</h3>
              <p className="text-gray-600 mb-3">For service providers, we additionally collect:</p>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Professional credentials and certifications</li>
                <li>Insurance information and coverage details</li>
                <li>Banking and payment details</li>
                <li>Service history, performance metrics, and ratings</li>
                <li>Background check results</li>
                <li>Availability and service area information</li>
                <li>Vehicle and equipment information</li>
              </ul>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact Us</h2>
          <div className="bg-gray-50 p-6 rounded-lg">
            <p className="text-gray-600 mb-4">For privacy-related inquiries:</p>
            <div className="space-y-3">
              <div className="flex items-center text-gray-700">
                <span className="font-medium w-32">Privacy Officer:</span>
                <a href="mailto:privacy@serviconnect.com" className="text-teal-600 hover:text-teal-700">
                  privacy@serviconnect.com
                </a>
              </div>
              <div className="flex items-center text-gray-700">
                <span className="font-medium w-32">Phone:</span>
                <span>1-800-PRIVACY</span>
              </div>
              <div className="flex items-center text-gray-700">
                <span className="font-medium w-32">Response Time:</span>
                <span>Within 48 hours for urgent matters</span>
              </div>
            </div>
          </div>
        </section>
      </div>
    </LegalLayout>
  );
}