import { Link } from "react-router";
import { ArrowRight, CheckCircle, Shield, TrendingUp, Clock, Package, Users, Award, Truck, Factory, FileCheck } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

export function Home() {
  const products = [
    {
      title: "Pure Cotton Towels",
      description: "Premium quality cotton towels in various sizes, perfect for hotels, spas, and retail.",
      image: "https://images.unsplash.com/photo-1667235195726-a7c440bca9bd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3aGl0ZSUyMGJhdGglMjB0b3dlbHMlMjBzdGFja2VkJTIwaG90ZWwlMjBzcGElMjBsdXh1cnl8ZW58MXx8fHwxNzc1NjI5NzA5fDA&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
      title: "Pure Cotton Handkerchiefs",
      description: "Soft, durable handkerchiefs made from 100% pure cotton with excellent absorbency.",
      image: "https://images.unsplash.com/photo-1655151865449-7f4a154f84db?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmb2xkZWQlMjB3aGl0ZSUyMGhhbmRrZXJjaGllZiUyMGNvdHRvbiUyMGZhYnJpYyUyMHRleHRpbGV8ZW58MXx8fHwxNzc1NjI5NzExfDA&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
      title: "Premium Incense Sticks",
      description: "Aromatic incense sticks crafted with natural ingredients for a soothing experience.",
      image: "https://images.unsplash.com/photo-1682490319533-77f69e486c9b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjBpbmNlbnNlJTIwc3RpY2tzJTIwYWdhcmJhdHRpJTIwdHJhZGl0aW9uYWwlMjBzcGlyaXR1YWx8ZW58MXx8fHwxNzc1NjI5NzEyfDA&ixlib=rb-4.1.0&q=80&w=1080",
    },
  ];

  const features = [
    {
      icon: Shield,
      title: "Reliable Sourcing",
      description: "Strong network with trusted manufacturers ensuring consistent quality.",
    },
    {
      icon: CheckCircle,
      title: "Export Quality Assurance",
      description: "Rigorous quality control at every stage of the export process.",
    },
    {
      icon: TrendingUp,
      title: "Competitive Pricing",
      description: "Best market rates through our efficient sourcing network.",
    },
    {
      icon: Clock,
      title: "Timely Delivery",
      description: "Reliable logistics ensuring your orders arrive on schedule.",
    },
    {
      icon: Package,
      title: "Custom Bulk Solutions",
      description: "Tailored export solutions to meet your specific requirements.",
    },
    {
      icon: Users,
      title: "Dedicated Support",
      description: "Expert guidance throughout the entire export journey.",
    },
  ];

  const exportCapabilities = [
    {
      icon: Factory,
      title: "Manufacturing Network",
      description: "Strong partnerships with certified manufacturers across India",
    },
    {
      icon: FileCheck,
      title: "Documentation Support",
      description: "Complete export documentation and compliance assistance",
    },
    {
      icon: Truck,
      title: "Logistics Management",
      description: "End-to-end shipping coordination to any global destination",
    },
    {
      icon: Award,
      title: "Quality Certification",
      description: "Products meet international quality standards and certifications",
    },
  ];

  const industries = [
    { name: "Hotels & Hospitality", description: "Premium towels for luxury hotels and resorts" },
    { name: "Retail Chains", description: "Bulk cotton products for retail distribution" },
    { name: "Wholesalers & Distributors", description: "Large volume orders with consistent supply" },
    { name: "Spas & Wellness Centers", description: "Quality towels and aromatic products" },
    { name: "Healthcare Facilities", description: "Hygienic cotton products for medical use" },
    { name: "Corporate Gifting", description: "Customized handkerchiefs and premium items" },
  ];

  const quickHighlights = [
    "Minimum Order Quantity: Flexible based on product",
    "Customization: Size, color, packaging, and branding options",
    "Packaging: Export-grade packaging with custom labeling available",
    "Payment Terms: LC, TT, and negotiable terms",
    "Sample Availability: Product samples available on request",
    "Lead Time: 2-4 weeks from order confirmation",
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-slate-900 text-white overflow-hidden">
        <div className="absolute inset-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1760385280608-935bfeaab4ac?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXJnbyUyMHNoaXAlMjBleHBvcnQlMjBjb250YWluZXIlMjBpbnRlcm5hdGlvbmFsJTIwc2hpcHBpbmd8ZW58MXx8fHwxNzc1NjI4ODQwfDA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Global shipping"
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/95 to-slate-900/80"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Custom Exports,<br />
              <span className="text-[#D4A574]">Rooted in Indian Excellence</span>
            </h1>
            <p className="text-lg sm:text-xl text-slate-300 mb-8 leading-relaxed">
              Your trusted merchant exporter for premium quality pure cotton towels, handkerchiefs, 
              and incense sticks. Connecting Indian craftsmanship with global markets.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/contact"
                className="px-8 py-4 bg-gradient-to-r from-[#8B3A4A] to-[#7A3040] text-white rounded-lg hover:from-[#7A3040] hover:to-[#6A2836] transition-all shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
              >
                Get Quote <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/products"
                className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white rounded-lg hover:bg-white/20 transition-all border border-white/20 flex items-center justify-center"
              >
                View Products
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Export Capabilities */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
              Our Export Capabilities
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Comprehensive export solutions backed by years of experience and robust infrastructure
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {exportCapabilities.map((capability, index) => {
              const Icon = capability.icon;
              return (
                <div key={index} className="bg-gradient-to-br from-slate-50 to-white p-6 rounded-lg border border-slate-200 hover:shadow-lg transition-shadow">
                  <div className="w-12 h-12 bg-[#8B3A4A]/10 rounded-lg flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-[#8B3A4A]" />
                  </div>
                  <h3 className="text-lg font-semibold text-slate-900 mb-2">
                    {capability.title}
                  </h3>
                  <p className="text-slate-600 text-sm">
                    {capability.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-16 sm:py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
              Our Premium Products
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Carefully curated products from India's finest manufacturers, 
              ready for international markets.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow">
                <div className="h-64 overflow-hidden">
                  <ImageWithFallback
                    src={product.image}
                    alt={product.title}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-slate-900 mb-3">
                    {product.title}
                  </h3>
                  <p className="text-slate-600 mb-4">
                    {product.description}
                  </p>
                  <Link
                    to="/products"
                    className="text-[#8B3A4A] hover:text-[#7A3040] font-semibold inline-flex items-center gap-2"
                  >
                    Learn More <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quality Assurance Process */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6">
                Stringent Quality Assurance
              </h2>
              <p className="text-slate-600 mb-6 leading-relaxed">
                Quality is at the heart of everything we do. Our comprehensive quality assurance 
                process ensures that every product meets international standards before it reaches your market.
              </p>
              
              <div className="space-y-4">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-[#8B3A4A] text-white rounded-full flex items-center justify-center font-bold">
                    1
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-1">Supplier Verification</h3>
                    <p className="text-slate-600 text-sm">All manufacturing partners undergo rigorous audits and certifications.</p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-[#8B3A4A] text-white rounded-full flex items-center justify-center font-bold">
                    2
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-1">Raw Material Inspection</h3>
                    <p className="text-slate-600 text-sm">Quality checks begin at the raw material stage to ensure purity and grade.</p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-[#8B3A4A] text-white rounded-full flex items-center justify-center font-bold">
                    3
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-1">Production Monitoring</h3>
                    <p className="text-slate-600 text-sm">Continuous oversight during manufacturing to maintain consistency.</p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-[#8B3A4A] text-white rounded-full flex items-center justify-center font-bold">
                    4
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-1">Final Product Testing</h3>
                    <p className="text-slate-600 text-sm">Comprehensive testing for quality, durability, and compliance before shipment.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1768796372343-99ed316eb5ef?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYWN0b3J5JTIwbWFudWZhY3R1cmluZyUyMHF1YWxpdHklMjBjb250cm9sJTIwaW5zcGVjdGlvbnxlbnwxfHx8fDE3NzU2Mjk3MTN8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Quality control"
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Industries Served */}
      <section className="py-16 sm:py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
              Industries We Serve
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Catering to diverse buyer types across multiple sectors globally
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {industries.map((industry, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow border border-slate-200">
                <h3 className="text-lg font-semibold text-[#8B3A4A] mb-2">
                  {industry.name}
                </h3>
                <p className="text-slate-600 text-sm">
                  {industry.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Highlights */}
      <section className="py-16 sm:py-20 bg-gradient-to-br from-[#8B3A4A] to-[#7A3040] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Why Partner With Us
            </h2>
            <p className="text-white/90 max-w-2xl mx-auto">
              Everything you need for a seamless export experience
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {quickHighlights.map((highlight, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm p-6 rounded-lg border border-white/20">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-[#D4A574] flex-shrink-0" />
                  <p className="text-white/95">{highlight}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
              Why Choose SIBA ENTERPRISES
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Your reliable partner for quality exports with end-to-end support
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div key={index} className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-[#D4A574]/20 rounded-lg flex items-center justify-center">
                      <Icon className="w-6 h-6 text-[#8B3A4A]" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-slate-900 mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-slate-600">
                      {feature.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-20 bg-gradient-to-r from-[#D4A574] to-[#C49564] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Start Your Import Journey with Us
          </h2>
          <p className="text-lg text-white/90 mb-8">
            Partner with SIBA ENTERPRISES for reliable, quality-focused export solutions
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center px-8 py-4 bg-white text-[#8B3A4A] rounded-lg hover:bg-slate-50 transition-all shadow-lg hover:shadow-xl gap-2 font-semibold"
          >
            Get Quote Now <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
