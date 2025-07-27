import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center space-y-6">
          {/* Brand */}
          <div className="text-center">
            <h3 className="text-2xl font-bold text-white mb-2">GeeksDesigns</h3>
            <p className="text-gray-400">Design. Build. Manage. Everything from Scratch.</p>
          </div>
          
          {/* Links */}
          <div className="flex space-x-8">
            <Link 
              to="/privacy" 
              className="text-gray-400 hover:text-white transition-colors duration-300 font-medium"
            >
              Privacy Policy
            </Link>
            <Link 
              to="/terms" 
              className="text-gray-400 hover:text-white transition-colors duration-300 font-medium"
            >
              Terms & Refund Policy
            </Link>
          </div>
          
          {/* Copyright */}
          <div className="pt-6 border-t border-gray-800 w-full text-center">
            <p className="text-gray-500">
              © {new Date().getFullYear()} GeeksDesigns |{' '}
              <a href="https://www.saiakashneela.com" target="_blank" rel="noopener noreferrer" className="hover:text-white">Sai Akash Neela</a>. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;