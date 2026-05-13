import { Link } from "react-router";
import { Mail, Phone, MapPin, Facebook, Linkedin, Instagram } from "lucide-react";
import logo from "../../assets/f3f3fb3f9f221831ccb7b6e090ff386be0f3a342.png";

export function Footer() {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-3 mb-2">
              <img src={logo} alt="Siba Enterprises logo" className="h-12 w-auto" />
              <div>
                <h3 className="text-xl font-bold text-white">Siba Enterprises</h3>
                <p className="text-xs text-[#D4A574]">Excellence in Exports</p>
              </div>
            </div>
            <p className="text-slate-400 text-sm">
              Custom exports rooted in Indian excellence — your trusted partner for quality products worldwide.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-slate-400 hover:text-[#D4A574] transition-colors text-sm">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-slate-400 hover:text-[#D4A574] transition-colors text-sm">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/products" className="text-slate-400 hover:text-[#D4A574] transition-colors text-sm">
                  Products
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-slate-400 hover:text-[#D4A574] transition-colors text-sm">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Our Products</h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>Pure Cotton Towels</li>
              <li>Pure Cotton Handkerchiefs</li>
              <li>Premium Incense Sticks</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3 text-sm">
                <Mail className="w-5 h-5 text-[#D4A574] flex-shrink-0 mt-0.5" />
                <span className="text-slate-400">info@sibaenterprises.com</span>
              </li>
              <li className="flex items-start space-x-3 text-sm">
                <Phone className="w-5 h-5 text-[#D4A574] flex-shrink-0 mt-0.5" />
                <span className="text-slate-400">+91 XXXXX XXXXX</span>
              </li>
              <li className="flex items-start space-x-3 text-sm">
                <MapPin className="w-5 h-5 text-[#D4A574] flex-shrink-0 mt-0.5" />
                <span className="text-slate-400">India</span>
              </li>
            </ul>

            {/* Social Media */}
            <div className="flex items-center gap-4 mt-6">
              <a href="https://wa.me/+917625031263" target="_blank" rel="noopener noreferrer" aria-label="Chat on WhatsApp" className="text-slate-400 hover:text-[#D4A574] transition-colors">
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6" aria-hidden="true">
                <path d="M20.52 3.48A11.9 11.9 0 0 0 12 0C5.37 0 0 5.37 0 12c0 2.12.55 4.18 1.6 6L0 24l6.4-1.67A11.85 11.85 0 0 0 12 24c6.63 0 12-5.37 12-12 0-3.21-1.25-6.22-3.48-8.52zM17.3 14.8c-.25-.12-1.44-.71-1.66-.79-.22-.08-.38-.12-.54.12-.15.25-.59.79-.72.95-.13.15-.26.17-.49.06-.25-.12-1.05-.39-2-1.23-.74-.67-1.24-1.5-1.38-1.75-.14-.25-.02-.38.11-.5.12-.12.26-.31.38-.47.12-.16.16-.25.25-.42.08-.17.04-.31-.02-.43-.06-.12-.54-1.31-.74-1.8-.2-.47-.4-.41-.54-.41h-.46c-.15 0-.39.05-.6.25-.22.2-.85.83-.85 2.03 0 1.19.87 2.35.99 2.51.12.17 1.71 2.61 4.15 3.66.58.25 1.03.4 1.38.51.58.18 1.1.15 1.51.09.46-.07 1.44-.59 1.64-1.16.2-.57.2-1.05.14-1.16-.06-.12-.22-.17-.47-.29z" />
              </svg>
            </a>
              <a href="#" aria-label="Facebook" className="text-slate-400 hover:text-[#D4A574] transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" aria-label="LinkedIn" className="text-slate-400 hover:text-[#D4A574] transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" aria-label="Instagram" className="text-slate-400 hover:text-[#D4A574] transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-800 mt-8 pt-8 text-center text-sm text-slate-400">
          <p>&copy; 2026 SIBA ENTERPRISES. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
