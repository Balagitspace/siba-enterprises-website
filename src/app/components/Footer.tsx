import { Link } from "react-router";
import { Mail, Phone, MapPin } from "lucide-react";
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
                <span className="text-slate-400">sibaexports07@gmail.com</span>
              </li>
              <li className="flex items-start space-x-3 text-sm">
                <Phone className="w-5 h-5 text-[#D4A574] flex-shrink-0 mt-0.5" />
                <span className="text-slate-400">+91 76250 31263</span>
              </li>
              <li className="flex items-start space-x-3 text-sm">
                <MapPin className="w-5 h-5 text-[#D4A574] flex-shrink-0 mt-0.5" />
                <span className="text-slate-400">Sankarankovil, Tenkasi, India - 627756</span>
              </li>
            </ul>

            {/* Social Media */}
            <div className="flex items-center gap-4 mt-6">
              <a href="https://wa.me/+917625031263" target="_blank" rel="noopener noreferrer" aria-label="Chat on WhatsApp" className="transition-colors hover:opacity-80">
                <img
                  src="https://img.icons8.com/color/48/000000/whatsapp.png"
                  alt="WhatsApp"
                  className="w-6 h-6"
                />
              </a>
              <a href="https://www.facebook.com/SibaEnterprise/" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="transition-colors hover:opacity-80">
                <img
                  src="https://img.icons8.com/color/48/000000/facebook-new.png"
                  alt="Facebook"
                  className="w-6 h-6"
                />
              </a>
              <a href="https://linkedin.com/company/sibaenterprises" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="transition-colors hover:opacity-80">
                <img
                  src="https://img.icons8.com/color/48/000000/linkedin-circled--v1.png"
                  alt="LinkedIn"
                  className="w-6 h-6"
                />
              </a>
              <a href="https://www.instagram.com/siba_enterprises/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="transition-colors hover:opacity-80">
                <img
                  src="https://img.icons8.com/color/48/000000/instagram-new--v1.png"
                  alt="Instagram"
                  className="w-6 h-6"
                />
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
