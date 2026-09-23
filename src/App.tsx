import { useState, useEffect } from "react";
import {
  Phone,
  MapPin,
  Clock,
  Sparkles,
  Shield,
  Users,
  DollarSign,
  Instagram,
  Facebook,
  MessageCircle,
  ChevronUp,
} from "lucide-react";

// WhatsApp number placeholder
const WHATSAPP_NUMBER = "2349069399607";
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=Hello%20RichGold%20Beauty%20World!%20I'd%20like%20to%20book%20an%20appointment.`;
const PHONE_NUMBER = "+234 906 939 9607";

function App() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white text-black font-poppins">
      {/* Navigation */}
      <Navbar />

      {/* Hero Section */}
      <HeroSection />

      {/* About Section */}
      <AboutSection />

      {/* Services Section */}
      <ServicesSection />

      {/* Gallery Section */}
      <GallerySection />

      {/* Why Choose Us */}
      <WhyChooseUsSection />

      {/* Contact / Booking Section */}
      <ContactSection />

      {/* Footer */}
      <Footer />

      {/* Floating WhatsApp Button (Mobile) */}
      <FloatingWhatsApp />

      {/* Scroll to Top */}
      {showScrollTop && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed bottom-24 right-4 md:bottom-8 md:right-8 z-50 bg-black text-gold-400 p-3 rounded-full shadow-lg hover:bg-gold-600 hover:text-white transition-all duration-300"
          aria-label="Scroll to top"
        >
          <ChevronUp size={20} />
        </button>
      )}
    </div>
  );
}

/* ==================== NAVBAR ==================== */
function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { href: "#about", label: "About" },
    { href: "#services", label: "Services" },
    { href: "#gallery", label: "Gallery" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/95 backdrop-blur-sm border-b border-gold-600/20">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2">
          <span className="text-gold-400 text-xl font-bold tracking-tight">
            Rich<span className="text-white">Gold</span>
          </span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-white/80 hover:text-gold-400 text-sm font-medium transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gold-500 text-black px-4 py-2 rounded-full text-sm font-semibold hover:bg-gold-400 transition-colors duration-200"
          >
            Book Now
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-white p-2"
          aria-label="Toggle menu"
        >
          <div className="w-6 flex flex-col gap-1.5">
            <span
              className={`block h-0.5 bg-gold-400 transition-all duration-300 ${isOpen ? "rotate-45 translate-y-2" : ""}`}
            ></span>
            <span
              className={`block h-0.5 bg-gold-400 transition-all duration-300 ${isOpen ? "opacity-0" : ""}`}
            ></span>
            <span
              className={`block h-0.5 bg-gold-400 transition-all duration-300 ${isOpen ? "-rotate-45 -translate-y-2" : ""}`}
            ></span>
          </div>
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-black/98 border-t border-gold-600/20 px-4 py-4">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="block py-3 text-white/80 hover:text-gold-400 text-sm font-medium border-b border-white/5 transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 block text-center bg-gold-500 text-black px-4 py-3 rounded-full text-sm font-semibold hover:bg-gold-400 transition-colors duration-200"
          >
            Book Now on WhatsApp
          </a>
        </div>
      )}
    </nav>
  );
}

/* ==================== HERO ==================== */
function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-black overflow-hidden pt-16">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 25% 25%, #c9a96e 1px, transparent 1px),
                           radial-gradient(circle at 75% 75%, #c9a96e 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }}></div>
      </div>

      {/* Gold gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-black/90 to-black/80"></div>
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent"></div>

      {/* Decorative gold line */}
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-px h-20 bg-gradient-to-b from-transparent via-gold-400 to-transparent"></div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-3xl mx-auto">
        {/* Small badge */}
        <div className="inline-flex items-center gap-2 bg-gold-500/10 border border-gold-500/30 rounded-full px-4 py-1.5 mb-6">
          <Sparkles size={14} className="text-gold-400" />
          <span className="text-gold-300 text-xs font-medium tracking-wide uppercase">
            Premium Beauty Studio
          </span>
        </div>

        {/* Main headline */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-4">
          Nails @{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-300 via-gold-400 to-gold-600">
            RichGold
          </span>
          <br />
          <span className="text-2xl sm:text-3xl md:text-4xl font-light text-white/90">
            Beauty World
          </span>
        </h1>

        {/* Tagline */}
        <p className="text-white/70 text-base sm:text-lg md:text-xl max-w-lg mx-auto mb-8 leading-relaxed">
          Premium Nail Care & Beauty Services in Umuahia
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-gold-500 hover:bg-gold-400 text-black font-semibold px-8 py-4 rounded-full text-base transition-all duration-300 shadow-lg shadow-gold-500/20 hover:shadow-gold-400/30 hover:scale-105"
          >
            <MessageCircle size={18} />
            Book Now on WhatsApp
          </a>
          <a
            href="#services"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 border border-white/20 text-white hover:border-gold-400 hover:text-gold-400 font-medium px-8 py-4 rounded-full text-base transition-all duration-300"
          >
            View Services
          </a>
        </div>

        {/* Location hint */}
        <div className="mt-10 flex items-center justify-center gap-2 text-white/50 text-sm">
          <MapPin size={14} />
          <span>Umuahia, Abia State, Nigeria</span>
        </div>
      </div>

      {/* Bottom gold accent */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-gold-500 to-transparent"></div>
    </section>
  );
}

/* ==================== ABOUT ==================== */
function AboutSection() {
  return (
    <section id="about" className="py-16 md:py-24 px-4 bg-white">
      <div className="max-w-4xl mx-auto text-center">
        {/* Section label */}
        <span className="text-gold-600 text-xs font-semibold tracking-widest uppercase">
          About Us
        </span>
        <h2 className="text-3xl md:text-4xl font-bold text-black mt-3 mb-6">
          Where Beauty Meets{" "}
          <span className="text-gold-600">Excellence</span>
        </h2>
        <div className="w-16 h-0.5 bg-gold-400 mx-auto mb-8"></div>

        <p className="text-gray-600 text-base md:text-lg leading-relaxed max-w-2xl mx-auto mb-4">
          {/* PLACEHOLDER: Replace with real about text */}
          Nails @ RichGold Beauty World is a trusted nail and beauty studio in the heart of Umuahia, 
          known for delivering quality acrylics, gel nails, and stunning nail art. We take pride in 
          creating beautiful, long-lasting designs that make our clients feel confident and glamorous.
        </p>
        <p className="text-gray-600 text-base md:text-lg leading-relaxed max-w-2xl mx-auto">
          {/* PLACEHOLDER: Replace with real about text */}
          Serving clients across Umuahia and beyond, our skilled nail technicians combine creativity 
          with precision to bring your dream nails to life — every single time.
        </p>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-4 mt-12 max-w-md mx-auto">
          <div className="text-center">
            <div className="text-2xl md:text-3xl font-bold text-gold-600">500+</div>
            <div className="text-xs text-gray-500 mt-1">Happy Clients</div>
          </div>
          <div className="text-center">
            <div className="text-2xl md:text-3xl font-bold text-gold-600">5+</div>
            <div className="text-xs text-gray-500 mt-1">Years Experience</div>
          </div>
          <div className="text-center">
            <div className="text-2xl md:text-3xl font-bold text-gold-600">100%</div>
            <div className="text-xs text-gray-500 mt-1">Quality Focus</div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ==================== SERVICES ==================== */
function ServicesSection() {
  const services = [
    {
      name: "Acrylic Nails",
      price: "₦5,000 – ₦15,000",
      description: "Full set, fills, and custom shapes",
      icon: "💅",
    },
    {
      name: "Gel Polish",
      price: "₦3,000 – ₦8,000",
      description: "Long-lasting shine, chip-free finish",
      icon: "✨",
    },
    {
      name: "Nail Art",
      price: "₦2,000 – ₦10,000",
      description: "Custom designs, gems, hand-painted art",
      icon: "🎨",
    },
    {
      name: "Manicure & Pedicure",
      price: "₦3,000 – ₦7,000",
      description: "Classic and spa treatments for hands & feet",
      icon: "🧖‍♀️",
    },
    {
      name: "Nail Extensions",
      price: "₦8,000 – ₦20,000",
      description: "Tips, forms, and sculpted extensions",
      icon: "💎",
    },
    {
      name: "Nail Repair",
      price: "₦1,000 – ₦3,000",
      description: "Fix breaks, fills, and reshape",
      icon: "🔧",
    },
  ];

  return (
    <section id="services" className="py-16 md:py-24 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-12">
          <span className="text-gold-600 text-xs font-semibold tracking-widest uppercase">
            Our Services
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-black mt-3 mb-4">
            What We <span className="text-gold-600">Offer</span>
          </h2>
          <div className="w-16 h-0.5 bg-gold-400 mx-auto mb-4"></div>
          <p className="text-gray-500 text-sm">
            {/* PLACEHOLDER: Prices are estimates — update with real pricing */}
            All prices are estimates. Contact us for exact quotes.
          </p>
        </div>

        {/* Services grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {services.map((service) => (
            <div
              key={service.name}
              className="bg-white rounded-2xl p-6 border border-gray-100 hover:border-gold-300 hover:shadow-lg hover:shadow-gold-100/50 transition-all duration-300 group"
            >
              <div className="text-3xl mb-4">{service.icon}</div>
              <h3 className="text-lg font-semibold text-black group-hover:text-gold-700 transition-colors duration-200">
                {service.name}
              </h3>
              <p className="text-gray-500 text-sm mt-1 mb-3">
                {service.description}
              </p>
              <div className="text-gold-600 font-bold text-sm">
                {service.price}
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-10">
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-black text-gold-400 hover:bg-gold-600 hover:text-white font-semibold px-6 py-3 rounded-full text-sm transition-all duration-300"
          >
            <MessageCircle size={16} />
            Ask About Pricing
          </a>
        </div>
      </div>
    </section>
  );
}

/* ==================== GALLERY ==================== */
function GallerySection() {
  const placeholders = [
    { label: "Acrylic Set", color: "from-gold-200 to-gold-400" },
    { label: "Nail Art Design", color: "from-gold-300 to-gold-500" },
    { label: "Gel Polish", color: "from-gold-100 to-gold-300" },
    { label: "French Tips", color: "from-gold-200 to-gold-500" },
    { label: "Bridal Nails", color: "from-gold-300 to-gold-600" },
    { label: "Ombré Nails", color: "from-gold-100 to-gold-400" },
  ];

  return (
    <section id="gallery" className="py-16 md:py-24 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-12">
          <span className="text-gold-600 text-xs font-semibold tracking-widest uppercase">
            Gallery
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-black mt-3 mb-4">
            Our <span className="text-gold-600">Work</span>
          </h2>
          <div className="w-16 h-0.5 bg-gold-400 mx-auto mb-4"></div>
          <p className="text-gray-500 text-sm">
            {/* PLACEHOLDER: Replace placeholder boxes with real salon photos */}
            Swipe through our latest nail designs
          </p>
        </div>

        {/* Gallery grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
          {placeholders.map((item, index) => (
            <div
              key={index}
              className={`relative aspect-square rounded-xl bg-gradient-to-br ${item.color} overflow-hidden group cursor-pointer`}
            >
              {/* Placeholder content */}
              <div className="absolute inset-0 flex flex-col items-center justify-center p-4">
                <div className="w-12 h-12 rounded-full bg-white/30 flex items-center justify-center mb-3">
                  <span className="text-2xl">📷</span>
                </div>
                <span className="text-white/90 text-xs font-medium text-center">
                  {item.label}
                </span>
                <span className="text-white/60 text-[10px] mt-1">
                  Add photo here
                </span>
              </div>

              {/* Hover overlay */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ==================== WHY CHOOSE US ==================== */
function WhyChooseUsSection() {
  const features = [
    {
      icon: <Shield size={28} />,
      title: "Hygienic Tools",
      description:
        "All tools are sterilized and sanitized between every client for your safety.",
    },
    {
      icon: <Users size={28} />,
      title: "Skilled Nail Techs",
      description:
        "Our trained professionals deliver precision and creativity with every set.",
    },
    {
      icon: <DollarSign size={28} />,
      title: "Affordable Pricing",
      description:
        "Premium quality nail services at prices that work for your budget.",
    },
  ];

  return (
    <section className="py-16 md:py-24 px-4 bg-black">
      <div className="max-w-5xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-12">
          <span className="text-gold-400 text-xs font-semibold tracking-widest uppercase">
            Why Choose Us
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mt-3 mb-4">
            The RichGold <span className="text-gold-400">Difference</span>
          </h2>
          <div className="w-16 h-0.5 bg-gold-400 mx-auto"></div>
        </div>

        {/* Feature cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="bg-white/5 backdrop-blur-sm border border-gold-500/20 rounded-2xl p-6 text-center hover:border-gold-400/50 hover:bg-white/10 transition-all duration-300"
            >
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-gold-500/10 text-gold-400 mb-4">
                {feature.icon}
              </div>
              <h3 className="text-white font-semibold text-lg mb-2">
                {feature.title}
              </h3>
              <p className="text-white/60 text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ==================== CONTACT ==================== */
function ContactSection() {
  return (
    <section id="contact" className="py-16 md:py-24 px-4 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-12">
          <span className="text-gold-600 text-xs font-semibold tracking-widest uppercase">
            Contact & Booking
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-black mt-3 mb-4">
            Get In <span className="text-gold-600">Touch</span>
          </h2>
          <div className="w-16 h-0.5 bg-gold-400 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Contact Info Card */}
          <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
            <h3 className="font-semibold text-black text-lg mb-6">
              Visit Us / Call Us
            </h3>

            {/* Location */}
            <div className="flex items-start gap-3 mb-5">
              <div className="w-10 h-10 rounded-full bg-gold-50 flex items-center justify-center shrink-0">
                <MapPin size={18} className="text-gold-600" />
              </div>
              <div>
                <div className="text-sm font-medium text-black">Location</div>
                {/* PLACEHOLDER: Replace with actual address */}
                <div className="text-sm text-gray-500">
                  Umuahia, Abia State, Nigeria
                </div>
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-start gap-3 mb-5">
              <div className="w-10 h-10 rounded-full bg-gold-50 flex items-center justify-center shrink-0">
                <Phone size={18} className="text-gold-600" />
              </div>
              <div>
                <div className="text-sm font-medium text-black">Phone</div>
                <a
                  href={`tel:${PHONE_NUMBER.replace(/\s/g, "")}`}
                  className="text-sm text-gold-600 hover:text-gold-700 font-medium"
                >
                  {PHONE_NUMBER}
                </a>
              </div>
            </div>

            {/* Hours */}
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-full bg-gold-50 flex items-center justify-center shrink-0">
                <Clock size={18} className="text-gold-600" />
              </div>
              <div>
                <div className="text-sm font-medium text-black">
                  Business Hours
                </div>
                {/* PLACEHOLDER: Replace with actual hours */}
                <div className="text-sm text-gray-500">
                  Mon – Sat: 9:00 AM – 7:00 PM
                </div>
                <div className="text-sm text-gray-500">
                  Sunday: 12:00 PM – 5:00 PM
                </div>
              </div>
            </div>
          </div>

          {/* Booking Card */}
          <div className="bg-black rounded-2xl p-6 text-center flex flex-col justify-center">
            <h3 className="font-semibold text-white text-lg mb-3">
              Ready to Book?
            </h3>
            <p className="text-white/60 text-sm mb-6">
              Send us a message on WhatsApp and we'll get you scheduled right
              away.
            </p>
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white font-semibold px-6 py-4 rounded-full text-base transition-all duration-300 w-full"
            >
              <MessageCircle size={20} />
              Chat on WhatsApp
            </a>
            <p className="text-white/40 text-xs mt-4">
              We typically respond within minutes
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ==================== FOOTER ==================== */
function Footer() {
  return (
    <footer className="bg-black border-t border-gold-500/20 py-10 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo & Name */}
          <div className="text-center md:text-left">
            <div className="text-xl font-bold">
              <span className="text-gold-400">Rich</span>
              <span className="text-white">Gold</span>
              <span className="text-white/60 text-sm font-normal ml-2">
                Beauty World
              </span>
            </div>
            <p className="text-white/40 text-xs mt-1">
              Premium Nail Care in Umuahia
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            {/* PLACEHOLDER: Replace # with actual social media links */}
            <a
              href="#"
              className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/60 hover:text-gold-400 hover:border-gold-400/50 transition-all duration-200"
              aria-label="Instagram"
            >
              <Instagram size={18} />
            </a>
            <a
              href="#"
              className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/60 hover:text-gold-400 hover:border-gold-400/50 transition-all duration-200"
              aria-label="Facebook"
            >
              <Facebook size={18} />
            </a>
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/60 hover:text-green-400 hover:border-green-400/50 transition-all duration-200"
              aria-label="WhatsApp"
            >
              <MessageCircle size={18} />
            </a>
          </div>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-white/10 my-6"></div>

        {/* Bottom */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-white/40">
          <p>© {new Date().getFullYear()} Nails @ RichGold Beauty World. All rights reserved.</p>
          <p>
            Website by{" "}
            <span className="text-gold-400 font-medium">Vector Codes</span>
          </p>
        </div>
      </div>
    </footer>
  );
}

/* ==================== FLOATING WHATSAPP ==================== */
function FloatingWhatsApp() {
  return (
    <a
      href={WHATSAPP_LINK}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 left-1/2 -translate-x-1/2 md:bottom-8 md:left-auto md:right-8 md:translate-x-0 z-50 inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white font-semibold px-5 py-3 rounded-full shadow-lg shadow-green-500/30 transition-all duration-300 hover:scale-105 text-sm"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle size={18} />
      <span className="hidden sm:inline">Book on WhatsApp</span>
    </a>
  );
}

export default App;
