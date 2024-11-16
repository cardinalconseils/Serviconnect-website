import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, LogIn } from 'lucide-react';

export default function Navbar() {
  return (
    <header>
      <div className="bg-teal-800 text-white">
        <div className="container mx-auto px-4 py-2 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Phone className="w-4 h-4" />
            <span>Call us now: 1-888-901-8998</span>
          </div>
          <div className="flex items-center gap-6">
            <Link to="/about" className="hover:text-teal-200">About us</Link>
            <Link to="/contact" className="hover:text-teal-200">Contact us</Link>
            <Link to="/login" className="hover:text-teal-200 flex items-center gap-1">
              <LogIn className="w-4 h-4" />
              Login
            </Link>
            <button className="bg-red-500 px-4 py-1 rounded hover:bg-red-600">
              Sign Up
            </button>
          </div>
        </div>
      </div>
      <nav className="bg-white shadow">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="text-2xl font-bold text-teal-800">ServiConnect</Link>
            <div className="flex items-center gap-8">
              <Link to="/find-provider" className="hover:text-teal-800">Find a provider</Link>
              <Link to="/join" className="hover:text-teal-800">Join as Provider</Link>
              <Link to="/how-it-works" className="hover:text-teal-800">How it works</Link>
              <Link to="/resources" className="hover:text-teal-800">Emergency Resources</Link>
              <button className="bg-red-500 text-white px-6 py-2 rounded hover:bg-red-600">
                Get Help Now
              </button>
              <span>EN</span>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}