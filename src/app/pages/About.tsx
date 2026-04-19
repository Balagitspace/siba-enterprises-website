import { Target, Eye, Award, Users, TrendingUp, Globe } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

export function About() {
  const values = [
    {
      icon: Award,
      title: "Quality First",
      description: "We never compromise on quality. Every product undergoes rigorous inspection before export.",
    },
    {
      icon: Users,
      title: "Customer Focus",
      description: "Building long-term partnerships through dedicated service and reliable support.",
    },
    {
      icon: TrendingUp,
      title: "Continuous Growth",
      description: "Constantly expanding our network and capabilities to serve you better.",
    },
    {
      icon: Globe,
      title: "Global Mindset",
      description: "Understanding international markets and delivering solutions that meet global standards.",
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-slate-900 text-white py-20">
        <div className="absolute inset-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1606707323990-c2bc64723dba?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnbG9iYWwlMjBidXNpbmVzcyUyMGV4cG9ydCUyMGltcG9ydCUyMGludGVybmF0aW9uYWwlMjB0cmFkZXxlbnwxfHx8fDE3NzU2Mjg4NDJ8MA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Global business"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-900/90 to-slate-900"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-6">About SIBA ENTERPRISES</h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Your trusted merchant exporter connecting Indian excellence with global markets
          </p>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6">
                Our Story
              </h2>
              <div className="space-y-4 text-slate-600 leading-relaxed">
                <p>
                  SIBA ENTERPRISES was founded with a clear vision: to bridge the gap between 
                  India's exceptional manufacturing capabilities and the global demand for quality products. 
                  As a specialized merchant exporter, we've built our reputation on trust, quality, and reliability.
                </p>
                <p>
                  Unlike traditional manufacturers, our strength lies in our extensive network of trusted 
                  suppliers and manufacturers across India. This unique position allows us to offer our 
                  international clients access to the best products while maintaining competitive pricing 
                  and consistent quality.
                </p>
                <p>
                  We specialize in three core product categories: pure cotton towels, pure cotton handkerchiefs, 
                  and premium incense sticks. Each product is carefully sourced from manufacturers who share our 
                  commitment to excellence and adhere to international quality standards.
                </p>
                <p>
                  Our experience in coordinating with manufacturers, managing logistics, and ensuring 
                  quality compliance has made us a preferred partner for importers, wholesalers, and 
                  distributors worldwide.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1768796372343-99ed316eb5ef?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYWN0b3J5JTIwbWFudWZhY3R1cmluZyUyMHF1YWxpdHklMjBjb250cm9sJTIwaW5zcGVjdGlvbnxlbnwxfHx8fDE3NzU2Mjk3MTN8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Quality control"
                className="rounded-lg shadow-lg col-span-2"
              />
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1709633699246-210dc50634ae?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZXh0aWxlJTIwZmFjdG9yeSUyMGNvdHRvbiUyMHByb2R1Y3Rpb24lMjBtYW51ZmFjdHVyaW5nJTIwaW5kaWF8ZW58MXx8fHwxNzc1NjI5NzEzfDA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Textile factory"
                className="rounded-lg shadow-lg"
              />
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1769355104335-acef3aa4c9b6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxleHBvcnQlMjBwYWNrYWdpbmclMjBib3hlcyUyMHNoaXBwaW5nJTIwd2FyZWhvdXNlfGVufDF8fHx8MTc3NTYyOTcxM3ww&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Export packaging"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-16 sm:py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="w-14 h-14 bg-[#8B3A4A]/10 rounded-lg flex items-center justify-center mb-6">
                <Eye className="w-7 h-7 text-[#8B3A4A]" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Our Vision</h3>
              <p className="text-slate-600 leading-relaxed">
                To become the most trusted merchant exporter for Indian products globally, 
                known for our unwavering commitment to quality, reliability, and customer satisfaction. 
                We envision a future where SIBA ENTERPRISES is synonymous with excellence in export services.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="w-14 h-14 bg-[#D4A574]/20 rounded-lg flex items-center justify-center mb-6">
                <Target className="w-7 h-7 text-[#8B3A4A]" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Our Mission</h3>
              <p className="text-slate-600 leading-relaxed">
                To provide international buyers with seamless access to high-quality Indian products 
                through our robust sourcing network, rigorous quality control, and dedicated customer 
                support. We strive to create lasting partnerships built on trust and mutual success.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
              Our Core Values
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#8B3A4A] to-[#7A3040] rounded-lg flex items-center justify-center mx-auto mb-4 shadow-lg">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-slate-900 mb-2">
                    {value.title}
                  </h3>
                  <p className="text-slate-600 text-sm">
                    {value.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Merchant Exporter Model */}
      <section className="py-16 sm:py-20 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold mb-8 text-center">
              Our Merchant Exporter Advantage
            </h2>
            
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg border border-white/20">
                <div className="text-3xl font-bold text-[#D4A574] mb-2">01</div>
                <h3 className="text-lg font-semibold mb-3">Extensive Network</h3>
                <p className="text-slate-300 text-sm">
                  Access to multiple trusted manufacturers ensures we can meet diverse 
                  requirements and scale efficiently.
                </p>
              </div>

              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg border border-white/20">
                <div className="text-3xl font-bold text-[#D4A574] mb-2">02</div>
                <h3 className="text-lg font-semibold mb-3">Quality Focus</h3>
                <p className="text-slate-300 text-sm">
                  We carefully select and monitor our manufacturing partners to ensure 
                  consistent quality across all orders.
                </p>
              </div>

              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg border border-white/20">
                <div className="text-3xl font-bold text-[#D4A574] mb-2">03</div>
                <h3 className="text-lg font-semibold mb-3">Competitive Edge</h3>
                <p className="text-slate-300 text-sm">
                  Our sourcing expertise and established relationships enable us to offer 
                  the best prices without compromising quality.
                </p>
              </div>
            </div>

            <div className="mt-12 text-center">
              <p className="text-lg text-slate-300 leading-relaxed">
                As a merchant exporter, we don't own manufacturing facilities. Instead, we leverage our 
                deep industry knowledge and strong supplier relationships to deliver exceptional value. 
                This model allows us to be agile, cost-effective, and focused entirely on meeting your needs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Trust & Partnership */}
      <section className="py-16 sm:py-20 bg-gradient-to-r from-[#8B3A4A] to-[#7A3040] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Building Long-Term Partnerships
          </h2>
          <p className="text-lg text-white/90 mb-8 leading-relaxed">
            At SIBA ENTERPRISES, we don't just complete transactions—we build relationships. 
            Our success is measured by the success of our partners. We're committed to understanding 
            your unique requirements and delivering solutions that help your business thrive.
          </p>
          <div className="flex flex-wrap justify-center gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-1">100+</div>
              <div className="text-white/80">Happy Clients</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-1">25+</div>
              <div className="text-white/80">Countries Served</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-1">1000+</div>
              <div className="text-white/80">Orders Completed</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}