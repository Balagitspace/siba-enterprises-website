import { useState } from "react";
import { Mail, Phone, MapPin, Clock, Send, MessageCircle } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    country: "",
    product: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Mock form submission
    console.log("Form submitted:", formData);
    setSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: "",
        email: "",
        country: "",
        product: "",
        message: "",
      });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleWhatsAppClick = () => {
    const phoneNumber = "91XXXXXXXXXX";
    const message = encodeURIComponent("Hello, I'm interested in your export products.");
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, "_blank");
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-slate-900 text-white py-20">
        <div className="absolute inset-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1606707323990-c2bc64723dba?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnbG9iYWwlMjBidXNpbmVzcyUyMGV4cG9ydCUyMGltcG9ydCUyMGludGVybmF0aW9uYWwlMjB0cmFkZXxlbnwxfHx8fDE3NzU2Mjg4NDJ8MA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Contact us"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-900/90 to-slate-900"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-6">Get In Touch</h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Let's discuss how we can help you with quality export solutions
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Contact Information */}
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-bold text-slate-900 mb-6">
                Contact Information
              </h2>
              <p className="text-slate-600 mb-8 leading-relaxed">
                Have questions about our products or services? We're here to help. 
                Reach out to us through any of the following channels.
              </p>

              {/* Contact Details */}
              <div className="space-y-6 mb-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#8B3A4A]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-[#8B3A4A]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-1">Email</h3>
                    <p className="text-slate-600">sibaexports07@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#8B3A4A]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-[#8B3A4A]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-1">Phone</h3>
                    <p className="text-slate-600">+91 76250 31263</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#8B3A4A]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-[#8B3A4A]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-1">Address</h3>
                    <p className="text-slate-600">
                      Sankarankovil, Tamil Nadu, India - 627756
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#8B3A4A]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-[#8B3A4A]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-1">Business Hours</h3>
                    <p className="text-slate-600">Monday - Saturday: 9:00 AM - 6:00 PM IST</p>
                    <p className="text-slate-600">Sunday: Closed</p>
                  </div>
                </div>
              </div>

              {/* WhatsApp Button */}
              <button
                onClick={handleWhatsAppClick}
                className="w-full flex items-center justify-center gap-3 px-6 py-4 bg-green-500 hover:bg-green-600 text-white rounded-lg transition-all shadow-md hover:shadow-lg"
              >
                <MessageCircle className="w-5 h-5" />
                <span className="font-semibold">Chat on WhatsApp</span>
              </button>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-3">
              <div className="bg-slate-50 p-8 rounded-lg shadow-md">
                <h2 className="text-2xl font-bold text-slate-900 mb-6">
                  Request a Quote
                </h2>

                {submitted ? (
                  <div className="bg-emerald-50 border border-emerald-200 text-emerald-800 px-6 py-4 rounded-lg">
                    <p className="font-semibold mb-1">Thank you for your message!</p>
                    <p className="text-sm">We'll get back to you within 24 hours.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid sm:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-semibold text-slate-700 mb-2">
                          Your Name *
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#8B3A4A] focus:border-transparent outline-none transition-all"
                          placeholder="John Doe"
                        />
                      </div>

                      <div>
                        <label htmlFor="email" className="block text-sm font-semibold text-slate-700 mb-2">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none transition-all"
                          placeholder="john@example.com"
                        />
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="country" className="block text-sm font-semibold text-slate-700 mb-2">
                          Country *
                        </label>
                        <input
                          type="text"
                          id="country"
                          name="country"
                          required
                          value={formData.country}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none transition-all"
                          placeholder="United States"
                        />
                      </div>

                      <div>
                        <label htmlFor="product" className="block text-sm font-semibold text-slate-700 mb-2">
                          Product Interest *
                        </label>
                        <select
                          id="product"
                          name="product"
                          required
                          value={formData.product}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none transition-all bg-white"
                        >
                          <option value="">Select a product</option>
                          <option value="cotton-towels">Cotton Towels</option>
                          <option value="handkerchiefs">Cotton Handkerchiefs</option>
                          <option value="incense-sticks">Premium Incense Sticks</option>
                          <option value="multiple">Multiple Products</option>
                          <option value="other">Other</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-semibold text-slate-700 mb-2">
                        Your Message *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        required
                        value={formData.message}
                        onChange={handleChange}
                        rows={6}
                        className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none transition-all resize-none"
                        placeholder="Please provide details about your requirements, including quantity, specifications, and timeline..."
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full flex items-center justify-center gap-2 px-6 py-4 bg-gradient-to-r from-[#8B3A4A] to-[#7A3040] text-white rounded-lg hover:from-[#7A3040] hover:to-[#6A2836] transition-all shadow-md hover:shadow-lg font-semibold"
                    >
                      <Send className="w-5 h-5" />
                      Send Message
                    </button>

                    <p className="text-sm text-slate-500 text-center">
                      We typically respond within 24 hours during business days
                    </p>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              Find Us
            </h2>
            <p className="text-slate-600">
              Located in India, serving clients worldwide
            </p>
          </div>
          
          {/* Google Maps Embed */}
          <div className="bg-white rounded-lg overflow-hidden shadow-md h-96">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3944.123456789012!2d77.5351242!3d9.1777966!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b0697eb07d96005%3A0x3d454d43a9559d3d!2sSankarankovil%2C%20Tamil%20Nadu%20627756%2C%20India!5e0!3m2!1sen!2sus!4v1234567890123!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Siba Enterprises Location - Sankarankovil, Tamil Nadu"
            ></iframe>
          </div>
        </div>
      </section>

      {/* FAQ Preview */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">
            Frequently Asked Questions
          </h2>

          <div className="space-y-6">
            <div className="bg-slate-50 p-6 rounded-lg">
              <h3 className="font-semibold text-slate-900 mb-2">
                What is your minimum order quantity (MOQ)?
              </h3>
              <p className="text-slate-600 text-sm">
                Our MOQ varies by product. Please contact us with your specific requirements 
                for detailed information on pricing and minimum quantities.
              </p>
            </div>

            <div className="bg-slate-50 p-6 rounded-lg">
              <h3 className="font-semibold text-slate-900 mb-2">
                What payment terms do you offer?
              </h3>
              <p className="text-slate-600 text-sm">
                We offer flexible payment terms including LC (Letter of Credit), TT (Telegraphic Transfer), 
                and other mutually agreed methods. Terms are finalized based on order value and buyer profile.
              </p>
            </div>

            <div className="bg-slate-50 p-6 rounded-lg">
              <h3 className="font-semibold text-slate-900 mb-2">
                What is the typical delivery timeline?
              </h3>
              <p className="text-slate-600 text-sm">
                Delivery timelines depend on order quantity and destination. Typically, we can ship 
                within 2-4 weeks after order confirmation. Express options are available for urgent requirements.
              </p>
            </div>

            <div className="bg-slate-50 p-6 rounded-lg">
              <h3 className="font-semibold text-slate-900 mb-2">
                Do you provide samples?
              </h3>
              <p className="text-slate-600 text-sm">
                Yes, we can provide product samples. Sample costs and shipping charges may apply 
                and can be discussed based on your requirements.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}