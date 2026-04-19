import { Link } from "react-router";
import { CheckCircle, ArrowRight } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

export function Products() {
  const products = [
    {
      title: "Pure Cotton Towels",
      image: "https://images.unsplash.com/photo-1667235195726-a7c440bca9bd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3aGl0ZSUyMGJhdGglMjB0b3dlbHMlMjBzdGFja2VkJTIwaG90ZWwlMjBzcGElMjBsdXh1cnl8ZW58MXx8fHwxNzc1NjI5NzA5fDA&ixlib=rb-4.1.0&q=80&w=1080",
      description: "Premium quality pure cotton towels perfect for hotels, spas, resorts, and retail markets. Our towels are known for their exceptional softness, durability, and superior absorbency. Made from 100% Indian cotton with strict quality controls.",
      features: [
        "100% Pure Indian Cotton",
        "High GSM (450-800)",
        "Multiple Sizes Available",
        "Customizable Colors",
        "Bulk Export Packaging",
        "International Quality Standards",
      ],
      applications: [
        "Hotels & Resorts",
        "Spas & Wellness Centers",
        "Healthcare Facilities",
        "Retail & Wholesale",
        "Gyms & Fitness Centers",
      ],
    },
    {
      title: "Pure Cotton Handkerchiefs",
      image: "https://images.unsplash.com/photo-1655151865449-7f4a154f84db?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmb2xkZWQlMjB3aGl0ZSUyMGhhbmRrZXJjaGllZiUyMGNvdHRvbiUyMGZhYnJpYyUyMHRleHRpbGV8ZW58MXx8fHwxNzc1NjI5NzExfDA&ixlib=rb-4.1.0&q=80&w=1080",
      description: "Soft, durable handkerchiefs made from 100% pure cotton. Available in various sizes and finishes to meet diverse market requirements with excellent absorbency and comfort. Perfect for retail, corporate gifting, and wholesale distribution.",
      features: [
        "100% Pure Cotton Fabric",
        "Soft & Gentle on Skin",
        "Excellent Absorbency",
        "Machine Washable",
        "Various Sizes & Designs",
        "Color-fast Dyes",
      ],
      applications: [
        "Retail Distribution",
        "Corporate Gifting",
        "Wholesale Markets",
        "Department Stores",
        "Online Marketplaces",
      ],
    },
    {
      title: "Premium Incense Sticks",
      image: "https://images.unsplash.com/photo-1682490319533-77f69e486c9b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjBpbmNlbnNlJTIwc3RpY2tzJTIwYWdhcmJhdHRpJTIwdHJhZGl0aW9uYWwlMjBzcGlyaXR1YWx8ZW58MXx8fHwxNzc1NjI5NzEyfDA&ixlib=rb-4.1.0&q=80&w=1080",
      description: "Aromatic incense sticks crafted with natural ingredients for a soothing, long-lasting fragrance experience. Perfect for meditation, spiritual practices, and home ambiance. Sourced from traditional Indian manufacturers with decades of expertise.",
      features: [
        "Natural Ingredients",
        "Long-Lasting Fragrance",
        "Multiple Scent Options",
        "Charcoal-Free Options",
        "Eco-Friendly Packaging",
        "Export Quality Standards",
      ],
      applications: [
        "Spiritual & Religious Centers",
        "Yoga & Meditation Studios",
        "Aromatherapy Shops",
        "Home Decor Retailers",
        "Wellness Centers",
      ],
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-slate-900 text-white py-20">
        <div className="absolute inset-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1709633699246-210dc50634ae?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZXh0aWxlJTIwZmFjdG9yeSUyMGNvdHRvbiUyMHByb2R1Y3Rpb24lMjBtYW51ZmFjdHVyaW5nJTIwaW5kaWF8ZW58MXx8fHwxNzc1NjI5NzEzfDA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Products"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-900/90 to-slate-900"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-6">Our Premium Products</h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Quality Indian products ready for international markets
          </p>
        </div>
      </section>

      {/* Products Details */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-24">
            {products.map((product, index) => (
              <div key={index} className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                  <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
                    {product.title}
                  </h2>
                  <p className="text-slate-600 mb-8 leading-relaxed">
                    {product.description}
                  </p>

                  {/* Features */}
                  <div className="mb-8">
                    <h3 className="text-lg font-semibold text-slate-900 mb-4">Key Features:</h3>
                    <div className="grid sm:grid-cols-2 gap-3">
                      {product.features.map((feature, fIndex) => (
                        <div key={fIndex} className="flex items-start gap-2">
                          <CheckCircle className="w-5 h-5 text-[#8B3A4A] flex-shrink-0 mt-0.5" />
                          <span className="text-slate-600 text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Applications */}
                  <div className="mb-8">
                    <h3 className="text-lg font-semibold text-slate-900 mb-4">Ideal For:</h3>
                    <div className="flex flex-wrap gap-2">
                      {product.applications.map((app, aIndex) => (
                        <span
                          key={aIndex}
                          className="px-3 py-1.5 bg-[#8B3A4A]/10 text-[#8B3A4A] rounded-full text-sm"
                        >
                          {app}
                        </span>
                      ))}
                    </div>
                  </div>

                  <Link
                    to="/contact"
                    className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-[#8B3A4A] to-[#7A3040] text-white rounded-lg hover:from-[#7A3040] hover:to-[#6A2836] transition-all shadow-md hover:shadow-lg gap-2"
                  >
                    Request Quote <ArrowRight className="w-5 h-5" />
                  </Link>
                </div>

                <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                  <div className="relative">
                    <ImageWithFallback
                      src={product.image}
                      alt={product.title}
                      className="rounded-lg shadow-xl"
                    />
                    <div className="absolute -bottom-4 -right-4 bg-[#8B3A4A] text-white px-6 py-3 rounded-lg shadow-xl">
                      <p className="text-sm font-semibold">Export Quality</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quality Assurance */}
      <section className="py-16 sm:py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
              Our Quality Commitment
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Every product undergoes rigorous quality checks to ensure it meets international standards
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 bg-[#8B3A4A]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8 text-[#8B3A4A]" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-3">
                Supplier Verification
              </h3>
              <p className="text-slate-600">
                All our manufacturing partners are carefully vetted and regularly audited for quality compliance.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 bg-[#8B3A4A]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8 text-[#8B3A4A]" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-3">
                Product Inspection
              </h3>
              <p className="text-slate-600">
                Each batch is thoroughly inspected before packaging to ensure consistency and quality.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 bg-[#8B3A4A]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8 text-[#8B3A4A]" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-3">
                Export Standards
              </h3>
              <p className="text-slate-600">
                All products meet international quality and safety standards required for global markets.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Custom Solutions */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6">
            Custom Bulk Solutions
          </h2>
          <p className="text-lg text-slate-600 mb-8 leading-relaxed">
            We understand that every business has unique requirements. Whether you need custom 
            sizes, specific colors, private labeling, or specialized packaging, we can coordinate 
            with our manufacturing network to deliver exactly what you need.
          </p>
          <div className="grid sm:grid-cols-3 gap-6 mb-8">
            <div className="bg-gradient-to-br from-[#8B3A4A]/5 to-[#D4A574]/5 p-6 rounded-lg border border-[#8B3A4A]/20">
              <p className="text-2xl font-bold text-[#8B3A4A] mb-2">Custom Sizing</p>
              <p className="text-sm text-slate-600">Tailored dimensions to your specifications</p>
            </div>
            <div className="bg-gradient-to-br from-[#8B3A4A]/5 to-[#D4A574]/5 p-6 rounded-lg border border-[#8B3A4A]/20">
              <p className="text-2xl font-bold text-[#8B3A4A] mb-2">Private Label</p>
              <p className="text-sm text-slate-600">Your brand, our quality products</p>
            </div>
            <div className="bg-gradient-to-br from-[#8B3A4A]/5 to-[#D4A574]/5 p-6 rounded-lg border border-[#8B3A4A]/20">
              <p className="text-2xl font-bold text-[#8B3A4A] mb-2">Bulk Orders</p>
              <p className="text-sm text-slate-600">Competitive pricing for large quantities</p>
            </div>
          </div>
          <Link
            to="/contact"
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-[#8B3A4A] to-[#7A3040] text-white rounded-lg hover:from-[#7A3040] hover:to-[#6A2836] transition-all shadow-lg hover:shadow-xl gap-2 font-semibold"
          >
            Discuss Your Requirements <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-20 bg-gradient-to-r from-slate-900 to-slate-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Ready to Import Quality Products?
          </h2>
          <p className="text-lg text-slate-300 mb-8">
            Get in touch with us today to discuss your requirements and receive a competitive quote
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center px-8 py-4 bg-[#8B3A4A] hover:bg-[#7A3040] text-white rounded-lg transition-all shadow-lg hover:shadow-xl gap-2 font-semibold"
          >
            Get Quote Now <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
