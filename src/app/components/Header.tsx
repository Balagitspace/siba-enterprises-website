import { Link, useLocation } from "react-router";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import logo from "../../assets/f3f3fb3f9f221831ccb7b6e090ff386be0f3a342.png";

export function Header() {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About" },
    { path: "/products", label: "Products" },
    { path: "/contact", label: "Contact" },
  ];

  const isActive = (path: string) => {
    if (path === "/") {
      return location.pathname === "/";
    }
    return location.pathname.startsWith(path);
  };

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <div className="flex items-center space-x-3">
              <img src={logo} alt="SIBA ENTERPRISES" className="h-12 w-auto" />
              <div className="flex flex-col">
                <span className="text-xl font-bold text-[#8B3A4A] tracking-tight">SIBA ENTERPRISES</span>
                <span className="text-xs text-[#D4A574]">Excellence in Exports</span>
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`transition-colors ${
                  isActive(link.path)
                    ? "text-[#8B3A4A] font-semibold"
                    : "text-slate-700 hover:text-[#8B3A4A]"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              to="/contact"
              className="px-6 py-2.5 bg-gradient-to-r from-[#8B3A4A] to-[#7A3040] text-white rounded-lg hover:from-[#7A3040] hover:to-[#6A2836] transition-all shadow-md hover:shadow-lg"
            >
              Get Quote
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-slate-700 hover:bg-slate-100 rounded-lg"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="md:hidden py-4 border-t border-slate-200">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setMobileMenuOpen(false)}
                className={`block py-3 px-4 rounded-lg mb-1 transition-colors ${
                  isActive(link.path)
                    ? "bg-[#8B3A4A]/10 text-[#8B3A4A] font-semibold"
                    : "text-slate-700 hover:bg-slate-50"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              to="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="block mt-4 py-3 px-4 bg-gradient-to-r from-[#8B3A4A] to-[#7A3040] text-white text-center rounded-lg hover:from-[#7A3040] hover:to-[#6A2836] transition-all"
            >
              Get Quote
            </Link>
          </nav>
        )}
      </div>
    </header>
  );
}
