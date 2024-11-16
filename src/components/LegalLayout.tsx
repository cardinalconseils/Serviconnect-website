import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

interface LegalLayoutProps {
  title: string;
  lastUpdated: string;
  children: React.ReactNode;
}

export default function LegalLayout({ title, lastUpdated, children }: LegalLayoutProps) {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center text-sm text-gray-600 mb-4">
            <Link to="/" className="hover:text-teal-600 transition-colors">Home</Link>
            <ChevronRight className="w-4 h-4 mx-2" />
            <span>Legal</span>
            <ChevronRight className="w-4 h-4 mx-2" />
            <span className="text-gray-900">{title}</span>
          </div>

          <div className="bg-white rounded-xl shadow-sm overflow-hidden">
            <div className="border-b border-gray-100 bg-gradient-to-r from-teal-500/5 to-teal-500/10 p-8">
              <h1 className="text-3xl font-bold text-gray-900 mb-2">{title}</h1>
              <p className="text-gray-600">Last Updated: {lastUpdated}</p>
            </div>
            
            <div className="p-8">
              <div className="prose prose-gray max-w-none">
                <div className="space-y-8">
                  {children}
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 text-center text-sm text-gray-500">
            <p>If you have any questions about these {title.toLowerCase()}, please contact us.</p>
            <div className="mt-2">
              <a href="mailto:legal@serviconnect.com" className="text-teal-600 hover:text-teal-700 transition-colors">
                legal@serviconnect.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}