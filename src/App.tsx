import { useState, useEffect } from "react";
import {
  Phone,
  MapPin,
  Clock,
  Shield,
  Award,
  BadgeDollarSign,
  DoorOpen,
  Star,
  Instagram,
  Facebook,
  MessageCircle,
  ChevronUp,
  Menu,
  X,
  Sparkles,
  Heart,
  Gem,
  Scissors,
  Palette,
  Wrench,
} from "lucide-react";

// ─── Constants ───────────────────────────────────────────────
const WHATSAPP_NUMBER = "2349069399607";
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=Hello%20RichGold%20Beauty%20World!%20I'd%20like%20to%20book%20an%20appointment.`;
const PHONE_NUMBER = "+234 906 939 9607";

// ─── Main App ────────────────────────────────────────────────
export default function App() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowScrollTop(window.scrollY > 500);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="min-h-screen bg-cream text-charcoal font-poppins">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <GallerySection />
      <WhyChooseUsSection />
      <TestimonialsSection />
      <ContactSection />
      <Footer />
      <FloatingWhatsApp />

      {/* Scroll-to-top */}
      {showScrollTop && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed bottom-24 right-5 z-50 bg-charcoal text-gold p-3 rounded-full shadow-lg hover:bg-gold hover:text-white transition-all duration-300"
          aria-label="Scroll to top"
        >
          <ChevronUp size={20} />
        </button>
      )}
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════
   NAVBAR
   ═══════════════════════════════════════════════════════════ */
function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { href: "#home", label: "Home" },
    { href: "#services", label: "Services" },
    { href: "#gallery", label: "Gallery" },
    { href: "#about", label: "About" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-5 py-3 flex items-center justify-between">
        {/* Logo */}
        <a href="#home" className="flex items-center gap-1.5">
          <span className="font-playfair text-xl md:text-2xl font-bold tracking-tight">
            <span className="text-gold">Rich</span>
            <span className={scrolled ? "text-charcoal" : "text-white"}>Gold</span>
          </span>
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-7">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className={`text-sm font-medium transition-colors duration-200 ${
                scrolled
                  ? "text-charcoal/70 hover:text-gold"
                  : "text-white/80 hover:text-gold"
              }`}
            >
              {l.label}
            </a>
          ))}
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gold hover:bg-gold-dark text-white text-sm font-semibold px-5 py-2 rounded-full transition-colors duration-200"
          >
            Book Now
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden p-2"
          aria-label="Toggle menu"
        >
          {open ? (
            <X size={24} className={scrolled ? "text-charcoal" : "text-white"} />
          ) : (
            <Menu size={24} className={scrolled ? "text-charcoal" : "text-white"} />
          )}
        </button>
      </div>

      {/* Mobile dropdown */}
      {open && (
        <div className="md:hidden bg-white border-t border-gold/10 shadow-lg">
          <div className="px-5 py-4 flex flex-col gap-1">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="py-3 text-charcoal/80 hover:text-gold text-sm font-medium border-b border-cream-dark/50 transition-colors"
              >
                {l.label}
              </a>
            ))}
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              className="mt-3 text-center bg-gold text-white font-semibold py-3 rounded-full text-sm"
            >
              Book Now on WhatsApp
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}

/* ═══════════════════════════════════════════════════════════
   HERO
   ═══════════════════════════════════════════════════════════ */
function HeroSection() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Placeholder background image area */}
      <div className="absolute inset-0 bg-charcoal">
        {/* PLACEHOLDER: Add salon interior / hero photo here */}
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-white/10 text-sm font-medium tracking-wider uppercase">
            Add salon interior / hero photo here
          </span>
        </div>
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal/80 via-charcoal/60 to-charcoal/90" />
      </div>

      {/* Decorative elements */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-gold to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gold/20" />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-3xl mx-auto pt-20">
        {/* Small accent */}
        <div className="inline-flex items-center gap-2 mb-6">
          <span className="w-8 h-px bg-gold" />
          <span className="text-gold text-xs font-semibold tracking-[0.2em] uppercase">
            Premium Beauty Studio
          </span>
          <span className="w-8 h-px bg-gold" />
        </div>

        {/* Headline */}
        <h1 className="font-playfair text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.15] mb-5">
          Nails @{" "}
          <span className="text-gold italic">RichGold</span>
          <br />
          <span className="text-2xl sm:text-3xl md:text-4xl font-playfair font-normal text-white/90">
            Beauty World
          </span>
        </h1>

        {/* Subheadline */}
        <p className="text-white/70 text-base sm:text-lg md:text-xl max-w-lg mx-auto mb-10 leading-relaxed font-light">
          Premium Nail Care & Beauty Services in Umuahia, Abia State
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-gold hover:bg-gold-dark text-white font-semibold px-8 py-4 rounded-full text-base transition-all duration-300 shadow-lg shadow-gold/20 hover:shadow-gold/40 hover:scale-[1.02]"
          >
            <MessageCircle size={18} />
            Book Now on WhatsApp
          </a>
          <a
            href="#services"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 border-2 border-white/30 text-white hover:border-gold hover:text-gold font-medium px-8 py-4 rounded-full text-base transition-all duration-300"
          >
            View Services
          </a>
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════
   ABOUT
   ═══════════════════════════════════════════════════════════ */
function AboutSection() {
  const stats = [
    { value: "5+", label: "Years Experience" },
    { value: "100+", label: "Happy Clients" },
    { value: "5★", label: "Star Rated" },
  ];

  return (
    <section id="about" className="py-20 md:py-28 px-5 bg-cream">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
          {/* Photo placeholder */}
          <div className="flex justify-center md:justify-start">
            <div className="relative">
              <div className="w-56 h-56 sm:w-64 sm:h-64 rounded-full bg-gradient-to-br from-gold/20 to-gold/5 border-4 border-gold/30 flex items-center justify-center overflow-hidden">
                {/* PLACEHOLDER: Add nail tech / owner photo here */}
                <div className="text-center p-6">
                  <Sparkles size={32} className="text-gold/40 mx-auto mb-2" />
                  <span className="text-gold/50 text-xs font-medium">
                    Add nail tech / owner photo here
                  </span>
                </div>
              </div>
              {/* Decorative ring */}
              <div className="absolute -inset-3 rounded-full border border-gold/10" />
              <div className="absolute -inset-6 rounded-full border border-gold/5" />
            </div>
          </div>

          {/* Text content */}
          <div>
            <span className="text-gold text-xs font-semibold tracking-[0.2em] uppercase">
              About Us
            </span>
            <h2 className="font-playfair text-3xl md:text-4xl font-bold text-charcoal mt-3 mb-5">
              A Trusted Name in{" "}
              <span className="text-gold italic">Nail Care</span>
            </h2>

            {/* PLACEHOLDER: Replace with real about text */}
            <p className="text-warm-gray leading-relaxed mb-4">
              Nails @ RichGold Beauty World is Umuahia's go-to destination for
              premium nail and beauty services. We are a skilled, passionate team
              dedicated to delivering flawless acrylics, stunning gel nails,
              creative nail art, and exceptional customer care — all in a clean,
              welcoming environment.
            </p>
            <p className="text-warm-gray leading-relaxed mb-8">
              Every client who sits in our chair leaves feeling confident,
              beautiful, and valued. That's the RichGold promise.
            </p>

            {/* Trust stats */}
            <div className="flex gap-4 sm:gap-6">
              {stats.map((s) => (
                <div
                  key={s.label}
                  className="bg-white rounded-xl px-4 py-3 sm:px-5 sm:py-4 shadow-sm border border-gold/10 text-center flex-1"
                >
                  <div className="font-playfair text-2xl sm:text-3xl font-bold text-gold">
                    {s.value}
                  </div>
                  <div className="text-[11px] sm:text-xs text-warm-gray mt-1 font-medium">
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════
   SERVICES
   ═══════════════════════════════════════════════════════════ */
function ServicesSection() {
  const services = [
    {
      icon: <Gem size={24} />,
      name: "Acrylic Nails",
      desc: "Full sets, fills & custom shapes for a flawless look",
      price: "From ₦5,000",
    },
    {
      icon: <Sparkles size={24} />,
      name: "Gel Polish",
      desc: "Long-lasting, chip-free shine that stays vibrant for weeks",
      price: "From ₦3,000",
    },
    {
      icon: <Palette size={24} />,
      name: "Nail Art & Design",
      desc: "Hand-painted designs, gems, chrome & custom creations",
      price: "From ₦4,000",
    },
    {
      icon: <Heart size={24} />,
      name: "Manicure & Pedicure",
      desc: "Classic & spa treatments to pamper your hands and feet",
      price: "From ₦3,500",
    },
    {
      icon: <Scissors size={24} />,
      name: "Nail Extensions",
      desc: "Tips, forms & sculpted extensions for extra length",
      price: "From ₦8,000",
    },
    {
      icon: <Wrench size={24} />,
      name: "Nail Repair",
      desc: "Quick fixes for breaks, chips & reshaping",
      price: "From ₦1,500",
    },
  ];

  return (
    <section id="services" className="py-20 md:py-28 px-5 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="text-gold text-xs font-semibold tracking-[0.2em] uppercase">
            Our Services
          </span>
          <h2 className="font-playfair text-3xl md:text-4xl font-bold text-charcoal mt-3 mb-4">
            What We <span className="text-gold italic">Offer</span>
          </h2>
          <div className="w-12 h-0.5 bg-gold mx-auto mb-4" />
          <p className="text-warm-gray text-sm max-w-md mx-auto">
            {/* PLACEHOLDER: Prices are estimates — update with real pricing */}
            Quality services at affordable prices. Contact us for exact quotes.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {services.map((s) => (
            <div
              key={s.name}
              className="group bg-cream rounded-2xl p-5 md:p-6 border border-gold/5 hover:border-gold/20 hover:shadow-lg hover:shadow-gold/5 hover:-translate-y-1 transition-all duration-300 cursor-default"
            >
              <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center text-gold mb-4 group-hover:bg-gold group-hover:text-white transition-all duration-300">
                {s.icon}
              </div>
              <h3 className="font-playfair text-base sm:text-lg font-semibold text-charcoal mb-1.5">
                {s.name}
              </h3>
              <p className="text-warm-gray text-xs sm:text-sm leading-relaxed mb-3">
                {s.desc}
              </p>
              <div className="text-gold font-semibold text-sm">{s.price}</div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-10">
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-charcoal text-gold hover:bg-gold hover:text-white font-semibold px-7 py-3.5 rounded-full text-sm transition-all duration-300"
          >
            <MessageCircle size={16} />
            Ask About Pricing
          </a>
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════
   GALLERY
   ═══════════════════════════════════════════════════════════ */
function GallerySection() {
  const items = [
    { caption: "French Tip", gradient: "from-gold/30 to-gold/10" },
    { caption: "Chrome Nails", gradient: "from-charcoal/20 to-gold/15" },
    { caption: "Ombré Set", gradient: "from-gold/20 to-cream-dark" },
    { caption: "Bridal Nails", gradient: "from-gold/25 to-gold/5" },
    { caption: "Glitter Glam", gradient: "from-gold/15 to-charcoal/10" },
    { caption: "Minimalist Art", gradient: "from-cream-dark to-gold/20" },
    { caption: "Stiletto Nails", gradient: "from-gold/10 to-gold/30" },
    { caption: "Gel Extensions", gradient: "from-charcoal/10 to-gold/20" },
  ];

  return (
    <section id="gallery" className="py-20 md:py-28 px-5 bg-cream">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="text-gold text-xs font-semibold tracking-[0.2em] uppercase">
            Gallery
          </span>
          <h2 className="font-playfair text-3xl md:text-4xl font-bold text-charcoal mt-3 mb-4">
            Our <span className="text-gold italic">Portfolio</span>
          </h2>
          <div className="w-12 h-0.5 bg-gold mx-auto mb-4" />
          <p className="text-warm-gray text-sm">
            {/* PLACEHOLDER: Replace placeholder boxes with real salon photos */}
            A glimpse of our latest nail designs
          </p>
        </div>

        {/* Masonry-style grid */}
        <div className="columns-2 md:columns-3 lg:columns-4 gap-3 md:gap-4 space-y-3 md:space-y-4">
          {items.map((item, i) => (
            <div key={i} className="break-inside-avoid group">
              <div
                className={`relative rounded-2xl overflow-hidden bg-gradient-to-br ${item.gradient} border border-gold/10 ${
                  i % 3 === 0 ? "aspect-[3/4]" : i % 3 === 1 ? "aspect-square" : "aspect-[4/5]"
                }`}
              >
                {/* PLACEHOLDER: Add nail / salon photo here */}
                <div className="absolute inset-0 flex flex-col items-center justify-center p-4">
                  <div className="w-10 h-10 rounded-full bg-gold/20 flex items-center justify-center mb-2">
                    <span className="text-lg">📷</span>
                  </div>
                  <span className="text-charcoal/40 text-[10px] font-medium text-center">
                    Add nail/salon photo here
                  </span>
                </div>
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-charcoal/0 group-hover:bg-charcoal/30 transition-all duration-300 flex items-end">
                  <div className="w-full p-3 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <span className="text-white text-xs font-medium bg-gold/80 backdrop-blur-sm px-3 py-1 rounded-full">
                      {item.caption}
                    </span>
                  </div>
                </div>
              </div>
              {/* Caption below */}
              <p className="text-center text-warm-gray text-xs mt-2 font-medium">
                {item.caption}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════
   WHY CHOOSE US
   ═══════════════════════════════════════════════════════════ */
function WhyChooseUsSection() {
  const features = [
    {
      icon: <Shield size={26} />,
      title: "Hygienic & Sterilized Tools",
      desc: "Every tool is thoroughly cleaned and sterilized between clients for your safety.",
    },
    {
      icon: <Award size={26} />,
      title: "Skilled & Certified Nail Techs",
      desc: "Our trained professionals bring expertise and creativity to every appointment.",
    },
    {
      icon: <BadgeDollarSign size={26} />,
      title: "Affordable, Transparent Pricing",
      desc: "Premium quality services at fair prices — no hidden charges, ever.",
    },
    {
      icon: <DoorOpen size={26} />,
      title: "Walk-ins & Appointments Welcome",
      desc: "Book ahead via WhatsApp or simply walk in — we're always ready for you.",
    },
  ];

  return (
    <section className="py-20 md:py-28 px-5 bg-charcoal">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="text-gold text-xs font-semibold tracking-[0.2em] uppercase">
            Why Choose Us
          </span>
          <h2 className="font-playfair text-3xl md:text-4xl font-bold text-white mt-3 mb-4">
            The RichGold <span className="text-gold italic">Difference</span>
          </h2>
          <div className="w-12 h-0.5 bg-gold mx-auto" />
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {features.map((f) => (
            <div
              key={f.title}
              className="bg-white/5 backdrop-blur-sm border border-gold/15 rounded-2xl p-6 text-center hover:border-gold/40 hover:bg-white/10 transition-all duration-300"
            >
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-gold/10 text-gold mb-4">
                {f.icon}
              </div>
              <h3 className="font-playfair text-white font-semibold text-base mb-2">
                {f.title}
              </h3>
              <p className="text-white/50 text-sm leading-relaxed">
                {f.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════
   TESTIMONIALS
   ═══════════════════════════════════════════════════════════ */
function TestimonialsSection() {
  const testimonials = [
    {
      quote:
        "The best nail salon in Umuahia! My acrylics lasted over 3 weeks without chipping. I'm a client for life.",
      name: "Chioma A.",
      // PLACEHOLDER: Add real client review here
    },
    {
      quote:
        "I love the attention to detail. The nail art they did for my wedding was absolutely stunning. Highly recommend!",
      name: "Amaka O.",
      // PLACEHOLDER: Add real client review here
    },
    {
      quote:
        "Clean, professional, and affordable. RichGold is my go-to for gel polish every single time. The team is so friendly!",
      name: "Blessing E.",
      // PLACEHOLDER: Add real client review here
    },
  ];

  return (
    <section className="py-20 md:py-28 px-5 bg-white">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="text-gold text-xs font-semibold tracking-[0.2em] uppercase">
            Testimonials
          </span>
          <h2 className="font-playfair text-3xl md:text-4xl font-bold text-charcoal mt-3 mb-4">
            What Our Clients <span className="text-gold italic">Say</span>
          </h2>
          <div className="w-12 h-0.5 bg-gold mx-auto" />
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="bg-cream rounded-2xl p-6 border border-gold/10 hover:shadow-md hover:shadow-gold/5 transition-all duration-300"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, j) => (
                  <Star
                    key={j}
                    size={16}
                    className="text-gold fill-gold"
                  />
                ))}
              </div>

              {/* Quote */}
              <p className="text-warm-gray text-sm leading-relaxed mb-5 italic">
                "{t.quote}"
              </p>

              {/* Client name */}
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-gold/15 flex items-center justify-center">
                  <span className="text-gold font-semibold text-sm">
                    {t.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <div className="text-charcoal font-medium text-sm">
                    {t.name}
                  </div>
                  <div className="text-warm-gray/60 text-[10px]">
                    {/* PLACEHOLDER: Add real client review here */}
                    Verified Client
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════
   CONTACT / BOOKING
   ═══════════════════════════════════════════════════════════ */
function ContactSection() {
  return (
    <section id="contact" className="py-20 md:py-28 px-5 bg-cream">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="text-gold text-xs font-semibold tracking-[0.2em] uppercase">
            Contact & Booking
          </span>
          <h2 className="font-playfair text-3xl md:text-4xl font-bold text-charcoal mt-3 mb-4">
            Get In <span className="text-gold italic">Touch</span>
          </h2>
          <div className="w-12 h-0.5 bg-gold mx-auto" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Left: Business Info */}
          <div className="bg-white rounded-2xl p-6 md:p-8 border border-gold/10 shadow-sm">
            <h3 className="font-playfair text-xl font-semibold text-charcoal mb-6">
              Visit Us / Call Us
            </h3>

            {/* Location */}
            <div className="flex items-start gap-4 mb-6">
              <div className="w-11 h-11 rounded-full bg-gold/10 flex items-center justify-center shrink-0">
                <MapPin size={18} className="text-gold" />
              </div>
              <div>
                <div className="text-sm font-semibold text-charcoal">Location</div>
                {/* PLACEHOLDER: Replace with actual address */}
                <div className="text-sm text-warm-gray mt-0.5">
                  Government College area, Umuahia, Abia State, Nigeria
                </div>
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-start gap-4 mb-6">
              <div className="w-11 h-11 rounded-full bg-gold/10 flex items-center justify-center shrink-0">
                <Phone size={18} className="text-gold" />
              </div>
              <div>
                <div className="text-sm font-semibold text-charcoal">Phone / WhatsApp</div>
                <a
                  href={`tel:${PHONE_NUMBER.replace(/\s/g, "")}`}
                  className="text-sm text-gold hover:text-gold-dark font-medium mt-0.5 block"
                >
                  {PHONE_NUMBER}
                </a>
              </div>
            </div>

            {/* Hours */}
            <div className="flex items-start gap-4">
              <div className="w-11 h-11 rounded-full bg-gold/10 flex items-center justify-center shrink-0">
                <Clock size={18} className="text-gold" />
              </div>
              <div>
                <div className="text-sm font-semibold text-charcoal">Opening Hours</div>
                {/* PLACEHOLDER: Replace with actual hours */}
                <div className="text-sm text-warm-gray mt-0.5">
                  Mon – Sat: 8:00 AM – 7:00 PM
                </div>
                <div className="text-sm text-warm-gray">Sunday: Closed</div>
              </div>
            </div>
          </div>

          {/* Right: Booking CTA + Map placeholder */}
          <div className="flex flex-col gap-6">
            {/* Booking card */}
            <div className="bg-charcoal rounded-2xl p-6 md:p-8 text-center flex-1 flex flex-col justify-center">
              <h3 className="font-playfair text-xl font-semibold text-white mb-3">
                Ready to Book?
              </h3>
              <p className="text-white/60 text-sm mb-6 leading-relaxed">
                Send us a message on WhatsApp and we'll get you scheduled right
                away. Walk-ins are also welcome!
              </p>
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 bg-green-500 hover:bg-green-600 text-white font-semibold px-6 py-4 rounded-full text-base transition-all duration-300 w-full"
              >
                <MessageCircle size={20} />
                Chat on WhatsApp to Book
              </a>
              <p className="text-white/30 text-xs mt-3">
                We typically respond within minutes
              </p>
            </div>

            {/* Map placeholder */}
            <div className="bg-white rounded-2xl border border-gold/10 overflow-hidden h-44 flex items-center justify-center">
              {/* PLACEHOLDER: Add Google Maps embed here */}
              <div className="text-center p-4">
                <MapPin size={24} className="text-gold/30 mx-auto mb-2" />
                <span className="text-warm-gray/50 text-xs font-medium">
                  Add Google Maps embed here
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════
   FOOTER
   ═══════════════════════════════════════════════════════════ */
function Footer() {
  const quickLinks = [
    { href: "#home", label: "Home" },
    { href: "#services", label: "Services" },
    { href: "#gallery", label: "Gallery" },
    { href: "#about", label: "About" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <footer className="bg-charcoal border-t border-gold/15 pt-14 pb-8 px-5">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
          {/* Brand */}
          <div>
            <div className="font-playfair text-2xl font-bold mb-2">
              <span className="text-gold">Rich</span>
              <span className="text-white">Gold</span>
              <span className="text-white/50 text-sm font-poppins font-normal ml-2">
                Beauty World
              </span>
            </div>
            <p className="text-white/40 text-sm leading-relaxed">
              Premium nail care & beauty services in the heart of Umuahia, Abia
              State.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-4">Quick Links</h4>
            <div className="flex flex-col gap-2.5">
              {quickLinks.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  className="text-white/40 hover:text-gold text-sm transition-colors duration-200"
                >
                  {l.label}
                </a>
              ))}
            </div>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-4">Follow Us</h4>
            <div className="flex items-center gap-3">
              {/* PLACEHOLDER: Replace # with actual social media links */}
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/50 hover:text-gold hover:border-gold/50 transition-all duration-200"
                aria-label="Instagram"
              >
                <Instagram size={18} />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/50 hover:text-gold hover:border-gold/50 transition-all duration-200"
                aria-label="Facebook"
              >
                <Facebook size={18} />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/50 hover:text-gold hover:border-gold/50 transition-all duration-200"
                aria-label="TikTok"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1v-3.5a6.37 6.37 0 0 0-.79-.05A6.34 6.34 0 0 0 3.15 15.2a6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.34-6.34V8.73a8.19 8.19 0 0 0 4.76 1.52v-3.4a4.85 4.85 0 0 1-1-.16z" />
                </svg>
              </a>
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/50 hover:text-green-400 hover:border-green-400/50 transition-all duration-200"
                aria-label="WhatsApp"
              >
                <MessageCircle size={18} />
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-white/10" />

        {/* Bottom */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-3 pt-6 text-xs text-white/30">
          <p>© {new Date().getFullYear()} Nails @ RichGold Beauty World. All rights reserved.</p>
          <p>
            Website designed by{" "}
            <span className="text-gold font-medium">Vector Codes</span>
          </p>
        </div>
      </div>
    </footer>
  );
}

/* ═══════════════════════════════════════════════════════════
   FLOATING WHATSAPP BUTTON
   ═══════════════════════════════════════════════════════════ */
function FloatingWhatsApp() {
  return (
    <a
      href={WHATSAPP_LINK}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-5 right-5 z-50 w-14 h-14 bg-green-500 hover:bg-green-600 rounded-full flex items-center justify-center shadow-lg shadow-green-500/30 hover:scale-110 transition-all duration-300"
      aria-label="Chat on WhatsApp"
    >
      <svg width="26" height="26" viewBox="0 0 24 24" fill="white">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
      </svg>
    </a>
  );
}
