import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Linkedin, Phone, Mail, Clock, Shield } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-teal-800 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h2 className="text-2xl font-bold mb-4">ServiConnect</h2>
            <p className="text-teal-100 mb-4">
              Your trusted partner for emergency home services. Available 24/7 across Quebec.
            </p>
            <div className="flex gap-4">
              <a href="#" className="hover:text-teal-200"><Facebook className="w-5 h-5" /></a>
              <a href="#" className="hover:text-teal-200"><Twitter className="w-5 h-5" /></a>
              <a href="#" className="hover:text-teal-200"><Instagram className="w-5 h-5" /></a>
              <a href="#" className="hover:text-teal-200"><Linkedin className="w-5 h-5" /></a>
            </div>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/find-provider" className="text-teal-100 hover:text-white">Find a Provider</Link></li>
              <li><Link to="/join" className="text-teal-100 hover:text-white">Join as Provider</Link></li>
              <li><Link to="/how-it-works" className="text-teal-100 hover:text-white">How it Works</Link></li>
              <li><Link to="/resources" className="text-teal-100 hover:text-white">Emergency Resources</Link></li>
              <li><Link to="/about" className="text-teal-100 hover:text-white">About Us</Link></li>
              <li><Link to="/contact" className="text-teal-100 hover:text-white">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Our Services</h3>
            <ul className="space-y-2">
              <li><Link to="/services/plumbing" className="text-teal-100 hover:text-white">Plumbing</Link></li>
              <li><Link to="/services/electrical" className="text-teal-100 hover:text-white">Electrical</Link></li>
              <li><Link to="/services/hvac" className="text-teal-100 hover:text-white">HVAC</Link></li>
              <li><Link to="/services/locksmith" className="text-teal-100 hover:text-white">Locksmith</Link></li>
              <li><Link to="/services/water-damage" className="text-teal-100 hover:text-white">Water Damage</Link></li>
              <li><Link to="/services/fire-damage" className="text-teal-100 hover:text-white">Fire Damage</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-center gap-2">
                <Phone className="w-5 h-5 text-red-500" />
                <span>1-888-901-8998</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-5 h-5 text-red-500" />
                <span>support@serviconnect.com</span>
              </li>
              <li className="flex items-center gap-2">
                <Clock className="w-5 h-5 text-red-500" />
                <span>Available 24/7</span>
              </li>
              <li className="flex items-center gap-2">
                <Shield className="w-5 h-5 text-red-500" />
                <span>Licensed & Insured Providers</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-teal-700 pt-8">
          <div className="flex flex-wrap justify-between items-center gap-4">
            <div className="text-teal-100">
              © 2024 ServiConnect. All rights reserved.
            </div>
            <div className="flex gap-6 text-teal-100">
              <Link to="/privacy-policy" className="hover:text-white">Privacy Policy</Link>
              <Link to="/terms-of-service" className="hover:text-white">Terms of Service</Link>
              <Link to="/cookie-policy" className="hover:text-white">Cookie Policy</Link>
              <div className="flex items-center gap-2">
                Language: 
                <select className="bg-transparent border-none text-white focus:outline-none">
                  <option value="en">English</option>
                  <option value="fr">Français</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-red-500 py-2 text-center">
        <div className="container mx-auto px-4 flex items-center justify-center gap-2">
          <Phone className="w-5 h-5" />
          24/7 Emergency? Call 1-888-901-8998
        </div>
      </div>
    </footer>
  );
}