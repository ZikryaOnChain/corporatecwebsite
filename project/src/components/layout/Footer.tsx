import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Linkedin, Youtube } from 'lucide-react';
import { totalRevenue } from '../../data/revenueData';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-black pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <Link to="/" className="flex items-center space-x-2 mb-4">
              <img
                src="/logo.png"
                alt="Corporate Combat Logo"
                className="h-24 w-24"
              />
              <span className="text-cc-gold font-poppins font-bold text-xl">Corporate Combat</span>
            </Link>
            <p className="text-gray-400 mb-4">
              10 years of generating {totalRevenue} in revenue for our partners. Building sales champions and revenue machines.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-cc-gold transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-cc-gold transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-cc-gold transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-cc-gold transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-cc-gold transition-colors">
                <Youtube size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-cc-text font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-400 hover:text-cc-gold transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-400 hover:text-cc-gold transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/careers" className="text-gray-400 hover:text-cc-gold transition-colors">
                  Careers
                </Link>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-cc-gold transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-400 hover:text-cc-gold transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-cc-text font-bold mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-cc-gold transition-colors">
                  Sales Strategy
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-cc-gold transition-colors">
                  Team Building
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-cc-gold transition-colors">
                  Revenue Operations
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-cc-gold transition-colors">
                  Sales Training
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-cc-gold transition-colors">
                  View All Services
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-cc-text font-bold mb-4">Contact Us</h3>
            <address className="not-italic text-gray-400 mb-4">
              <p>12414 82 Ave</p>
              <p>Surrey, BC V3W 3E9</p>
              <p>Canada</p>
              <p className="mt-2">
                <a href="tel:+13853014900" className="hover:text-cc-gold transition-colors">
                  +1 (385) 301-4900
                </a>
              </p>
              <p>
                <a href="mailto:info@corporatecombat.com" className="hover:text-cc-gold transition-colors">
                  info@corporatecombat.com
                </a>
              </p>
            </address>
            <div className="text-gray-400">
              <h4 className="font-bold mb-2">Business Hours:</h4>
              <div className="grid grid-cols-2 gap-x-4 text-sm">
                <div>Monday - Friday:</div>
                <div>9:00 AM - 5:00 PM</div>
                <div>Saturday:</div>
                <div>Closed</div>
                <div>Sunday:</div>
                <div>Closed</div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 mb-4 md:mb-0">
              © {currentYear} Corporate Combat. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-500 hover:text-cc-gold transition-colors text-sm">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-500 hover:text-cc-gold transition-colors text-sm">
                Terms of Service
              </a>
              <a href="#" className="text-gray-500 hover:text-cc-gold transition-colors text-sm">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;