/* ==========================================================
   VITAL FORCE — Home Page
   Nic van den Bergh | Motivator · Fitness · Business
   Sections: Hero · Stats · About · Story · Services · Speaking · Contact · Footer
   ========================================================== */

import { useEffect, useRef, useState } from "react";
import Navbar from "@/components/Navbar";
import {
  Heart,
  Dumbbell,
  TrendingUp,
  Mic2,
  Mail,
  MapPin,
  Linkedin,
  Instagram,
  ArrowRight,
  CheckCircle2,
  Quote,
  ChevronDown,
} from "lucide-react";

// Image CDN URLs
const HERO_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663049677144/F6hhhn4AdQ5atnoJJb572Q/nic-hero-bg-QZxVJzQP6NfcFLbjytPTiW.webp";
const FITNESS_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663049677144/F6hhhn4AdQ5atnoJJb572Q/nic-fitness-cgGquqNCgmisCnth34ZwpU.webp";
const SPEAKING_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663049677144/F6hhhn4AdQ5atnoJJb572Q/nic-speaking-JeCysBgwZfWKqqX8y3g4dU.webp";
const CEO_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663049677144/F6hhhn4AdQ5atnoJJb572Q/nic-real-photo_ee779ef2.png";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Story", href: "#story" },
  { label: "Services", href: "#services" },
  { label: "Speaking", href: "#speaking" },
  { label: "Contact", href: "#contact" },
];

// Fade-up observer hook
function useFadeUp() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.12 }
    );
    el.querySelectorAll(".fade-up").forEach((e) => observer.observe(e));
    return () => observer.disconnect();
  }, []);
  return ref;
}

// Animated counter
function Counter({ target, suffix = "" }: { target: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !started.current) {
          started.current = true;
          const duration = 1800;
          const steps = 60;
          const increment = target / steps;
          let current = 0;
          const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
              setCount(target);
              clearInterval(timer);
            } else {
              setCount(Math.floor(current));
            }
          }, duration / steps);
        }
      },
      { threshold: 0.5 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [target]);

  return (
    <span ref={ref}>
      {count}{suffix}
    </span>
  );
}

export default function Home() {
  const aboutRef = useFadeUp();
  const storyRef = useFadeUp();
  const servicesRef = useFadeUp();
  const speakingRef = useFadeUp();
  const contactRef = useFadeUp();

  const [formData, setFormData] = useState({ name: "", email: "", message: "", service: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) target.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="min-h-screen bg-white" style={{ fontFamily: "'Manrope', sans-serif" }}>
      <Navbar />

      {/* ── HERO ──────────────────────────────────────────── */}
      <section
        id="hero"
        className="relative min-h-screen flex items-center overflow-hidden"
        style={{ background: "oklch(0.18 0.04 255)" }}
      >
        {/* Background image */}
        <div className="absolute inset-0">
          <img
            src={HERO_IMG}
            alt="Nic van den Bergh overlooking Dubai"
            className="w-full h-full object-cover object-center"
            style={{ opacity: 0.35 }}
          />
          <div
            className="absolute inset-0"
            style={{
              background: "linear-gradient(105deg, oklch(0.18 0.04 255) 45%, oklch(0.18 0.04 255 / 0.6) 100%)",
            }}
          />
        </div>

        {/* Content */}
        <div className="container relative z-10 pt-24 pb-16">
          <div className="max-w-3xl">
            <p
              className="section-label mb-6"
              style={{ color: "oklch(0.75 0.18 75)", animationDelay: "0s" }}
            >
              Motivator &middot; Fitness Advocate &middot; CEO
            </p>

              <h1
                className="font-display text-white mb-6"
                style={{
                  fontFamily: "'Bebas Neue', sans-serif",
                  fontSize: "clamp(3.5rem, 9vw, 7rem)",
                  lineHeight: 1.0,
                  letterSpacing: "0.03em",
                  fontWeight: 400,
                }}
              >
                Two Heart Attacks.
                <br />
                <span style={{ color: "oklch(0.75 0.18 75)" }}>One Unstoppable</span>
                <br />
                Life.
              </h1>

              <p
                className="font-body text-lg md:text-xl mb-10 max-w-xl"
                style={{ color: "oklch(0.85 0.01 255)", fontWeight: 300, lineHeight: 1.7 }}
              >
                South African CEO. Dubai-based. Surfer. Father of two. Fly fisher.
                Nic van den Bergh turned adversity into a blueprint for resilience
                — in business, in health, and in life.
              </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="#story"
                onClick={(e) => handleNavClick(e, "#story")}
                className="flex items-center gap-2 px-7 py-4 font-display font-700 text-sm tracking-wide transition-all"
                style={{
                  background: "oklch(0.75 0.18 75)",
                  color: "oklch(0.18 0.04 255)",
                  fontWeight: 700,
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.background = "oklch(0.82 0.16 75)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.background = "oklch(0.75 0.18 75)";
                }}
              >
                Read My Story <ArrowRight size={16} />
              </a>
              <a
                href="#services"
                onClick={(e) => handleNavClick(e, "#services")}
                className="flex items-center gap-2 px-7 py-4 border-2 font-display font-700 text-sm tracking-wide transition-all"
                style={{
                  borderColor: "oklch(1 0 0 / 0.4)",
                  color: "white",
                  fontWeight: 700,
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = "oklch(0.75 0.18 75)";
                  (e.currentTarget as HTMLElement).style.color = "oklch(0.75 0.18 75)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = "oklch(1 0 0 / 0.4)";
                  (e.currentTarget as HTMLElement).style.color = "white";
                }}
              >
                Work With Me
              </a>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-60">
          <span className="text-white text-xs tracking-widest uppercase font-body">Scroll</span>
          <ChevronDown size={20} className="text-white animate-bounce" />
        </div>
      </section>

      {/* ── STATS STRIP ──────────────────────────────────── */}
      <section
        className="py-16"
        style={{ background: "oklch(0.96 0.005 255)" }}
      >
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4">
            {[
              { value: 2, suffix: "", label: "Heart Attacks Survived", icon: Heart },
              { value: 20, suffix: "+", label: "Years in Business Leadership", icon: TrendingUp },
              { value: 500, suffix: "+", label: "Lives Impacted Through Coaching", icon: Dumbbell },
              { value: 3, suffix: "", label: "Countries Called Home", icon: MapPin },
            ].map(({ value, suffix, label, icon: Icon }) => (
              <div key={label} className="flex flex-col items-center text-center gap-2">
                <Icon size={24} style={{ color: "oklch(0.55 0.2 260)" }} />
                <div
                  className="stat-number"
                  style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)" }}
                >
                  <Counter target={value} suffix={suffix} />
                </div>
                <p
                  className="font-body text-sm"
                  style={{ color: "oklch(0.45 0.02 255)", fontWeight: 500, lineHeight: 1.4 }}
                >
                  {label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ABOUT ────────────────────────────────────────── */}
      <section id="about" className="py-24 bg-white" ref={aboutRef}>
        <div className="container">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            {/* Image */}
            <div className="fade-up relative">
              <div
                className="absolute -top-4 -left-4 w-full h-full"
                style={{ border: "2px solid oklch(0.75 0.18 75)", zIndex: 0 }}
              />
              <img
                src={CEO_IMG}
                alt="Nic van den Bergh — CEO"
                className="relative z-10 w-full object-cover"
                style={{ aspectRatio: "4/3" }}
              />
            </div>

            {/* Text */}
            <div className="fade-up" style={{ transitionDelay: "0.15s" }}>
              <p className="section-label mb-4">About Nic</p>
              <h2
                className="font-display mb-6"
                style={{
                  fontFamily: "'Bebas Neue', sans-serif",
                  fontSize: "clamp(2.8rem, 5vw, 4.2rem)",
                  lineHeight: 1.0,
                  letterSpacing: "0.03em",
                  color: "oklch(0.18 0.04 255)",
                  fontWeight: 400,
                }}
              >
                CEO by Day.
                <br />
                <span style={{ color: "oklch(0.55 0.2 260)" }}>Athlete by Choice.</span>
              </h2>
              <p
                className="font-body text-base mb-5"
                style={{ color: "oklch(0.35 0.02 255)", lineHeight: 1.8, fontWeight: 400 }}
              >
                Nic van den Bergh is a South African entrepreneur and business leader
                who has served as CMO for multiple companies before stepping into the
                CEO role. Now based in the UAE, he leads with two decades of marketing
                and growth strategy experience — and a life philosophy forged through
                extraordinary personal challenge.
              </p>
              <p
                className="font-body text-base mb-8"
                style={{ color: "oklch(0.35 0.02 255)", lineHeight: 1.8, fontWeight: 400 }}
              >
                After surviving two heart attacks, Nic chose not just to survive but
                to thrive. A surfer, fly fisher, and father of two, he brings the same
                discipline and presence he finds in nature into the boardroom and onto
                the coaching floor — proving that a full life and peak performance are
                not competing goals.
              </p>
              <div className="flex flex-wrap gap-3">
                {["Motivational Speaker", "Fitness Coach", "Business Strategist", "Former CMO", "Surfer", "Father of Two", "Fly Fisher", "UAE-Based"].map((tag) => (
                  <span
                    key={tag}
                    className="px-4 py-2 text-xs font-body font-600 tracking-wide"
                    style={{
                      background: "oklch(0.96 0.005 255)",
                      color: "oklch(0.18 0.04 255)",
                      fontWeight: 600,
                      letterSpacing: "0.05em",
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── STORY ────────────────────────────────────────── */}
      <section
        id="story"
        className="py-24"
        style={{ background: "oklch(0.18 0.04 255)" }}
        ref={storyRef}
      >
        <div className="container">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            {/* Text */}
            <div className="fade-up order-2 md:order-1">
              <p className="section-label mb-4" style={{ color: "oklch(0.75 0.18 75)" }}>
                The Journey
              </p>
              <h2
                className="font-display text-white mb-6"
                style={{
                  fontFamily: "'Bebas Neue', sans-serif",
                  fontSize: "clamp(2.8rem, 5vw, 4.2rem)",
                  lineHeight: 1.0,
                  letterSpacing: "0.03em",
                  fontWeight: 400,
                }}
              >
                From the Boardroom
                <br />
                <span style={{ color: "oklch(0.75 0.18 75)" }}>to the Finish Line</span>
              </h2>

              <div className="space-y-6">
                {[
                  {
                    title: "The Wake-Up Call",
                    text: "Two heart attacks in the prime of his career forced Nic to confront a hard truth: success without health is not success at all. Most would slow down. Nic decided to rebuild.",
                  },
                  {
                    title: "The Transformation",
                    text: "At 40+, Nic embarked on a rigorous fitness journey — training alongside athletes half his age, overhauling his nutrition, and rewiring his mindset. The boardroom discipline that built his companies became the foundation of his physical transformation.",
                  },
                  {
                    title: "The Mission",
                    text: "Today, Nic shares his story to help other high-performers realise that peak physical health and peak business performance are not competing goals — they are the same goal.",
                  },
                ].map(({ title, text }, i) => (
                  <div
                    key={title}
                    className="fade-up flex gap-4"
                    style={{ transitionDelay: `${i * 0.12}s` }}
                  >
                    <div
                      className="flex-shrink-0 w-8 h-8 flex items-center justify-center mt-1"
                      style={{ background: "oklch(0.75 0.18 75)" }}
                    >
                      <CheckCircle2 size={16} style={{ color: "oklch(0.18 0.04 255)" }} />
                    </div>
                    <div>
                      <h3
                        className="font-display font-700 text-white mb-1"
                        style={{ fontWeight: 700, fontSize: "1rem" }}
                      >
                        {title}
                      </h3>
                      <p
                        className="font-body text-sm"
                        style={{ color: "oklch(0.75 0.01 255)", lineHeight: 1.7, fontWeight: 300 }}
                      >
                        {text}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Pull quote */}
              <div
                className="mt-10 pl-5 fade-up"
                style={{
                  borderLeft: "3px solid oklch(0.75 0.18 75)",
                  transitionDelay: "0.4s",
                }}
              >
                <Quote size={20} style={{ color: "oklch(0.75 0.18 75)", marginBottom: "0.5rem" }} />
                <p
                  className="font-display text-white"
                  style={{ fontWeight: 600, fontSize: "1.1rem", lineHeight: 1.5, fontStyle: "italic" }}
                >
                  "The strongest muscle you can train is the one between your ears."
                </p>
                <p
                  className="font-body text-sm mt-2"
                  style={{ color: "oklch(0.65 0.01 255)", fontWeight: 400 }}
                >
                  — Nic van den Bergh
                </p>
              </div>
            </div>

            {/* Image */}
            <div className="fade-up order-1 md:order-2" style={{ transitionDelay: "0.1s" }}>
              <img
                src={FITNESS_IMG}
                alt="Nic van den Bergh — Fitness journey in Dubai"
                className="w-full object-cover"
                style={{ aspectRatio: "3/4", maxHeight: "600px" }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── SERVICES ─────────────────────────────────────── */}
      <section id="services" className="py-24 bg-white" ref={servicesRef}>
        <div className="container">
          <div className="max-w-2xl mb-16 fade-up">
            <p className="section-label mb-4">What I Offer</p>
              <h2
                className="font-display"
                style={{
                  fontFamily: "'Bebas Neue', sans-serif",
                  fontSize: "clamp(2.8rem, 5vw, 4.2rem)",
                  lineHeight: 1.0,
                  letterSpacing: "0.03em",
                  color: "oklch(0.18 0.04 255)",
                  fontWeight: 400,
                }}
              >
                Services Built for
                <br />
                <span style={{ color: "oklch(0.55 0.2 260)" }}>High-Performers</span>
              </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6" ref={servicesRef}>
            {[
              {
                icon: Heart,
                title: "1-on-1 Coaching",
                subtitle: "Fitness & Mindset",
                desc: "Personalised fitness and mindset coaching for executives and entrepreneurs who want to perform at their peak — in the gym and in the boardroom.",
                features: ["Custom training plans", "Nutrition guidance", "Mindset frameworks", "Weekly accountability"],
                color: "oklch(0.55 0.2 260)",
              },
              {
                icon: TrendingUp,
                title: "Business Consulting",
                subtitle: "Growth Strategy",
                desc: "Strategic business growth consulting drawing on 20+ years of building and scaling companies across South Africa, Europe, and the UAE.",
                features: ["Growth strategy", "Leadership development", "Market expansion", "Executive coaching"],
                color: "oklch(0.75 0.18 75)",
              },
              {
                icon: Mic2,
                title: "Speaking",
                subtitle: "Keynotes & Events",
                desc: "Inspiring keynotes on resilience, the intersection of physical and business performance, and building an unstoppable mindset after adversity.",
                features: ["Corporate keynotes", "Conference talks", "Workshops", "Panel discussions"],
                color: "oklch(0.55 0.2 260)",
              },
              {
                icon: Dumbbell,
                title: "Online Programs",
                subtitle: "Fitness & Mindset",
                desc: "Structured online programs designed for busy professionals who want to transform their health without sacrificing their career momentum.",
                features: ["Video program library", "Community access", "Monthly challenges", "Progress tracking"],
                color: "oklch(0.75 0.18 75)",
              },
            ].map(({ icon: Icon, title, subtitle, desc, features, color }, i) => (
              <div
                key={title}
                className="fade-up group flex flex-col p-8 border border-gray-100 hover:border-transparent transition-all duration-300"
                style={{
                  transitionDelay: `${i * 0.1}s`,
                  boxShadow: "0 1px 3px oklch(0 0 0 / 0.06)",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.boxShadow = "0 20px 40px oklch(0 0 0 / 0.1)";
                  (e.currentTarget as HTMLElement).style.transform = "translateY(-4px)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.boxShadow = "0 1px 3px oklch(0 0 0 / 0.06)";
                  (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
                }}
              >
                <div
                  className="w-12 h-12 flex items-center justify-center mb-6"
                  style={{ background: `${color}20` }}
                >
                  <Icon size={22} style={{ color }} />
                </div>
                <p
                  className="font-body text-xs font-600 tracking-widest uppercase mb-1"
                  style={{ color, fontWeight: 600 }}
                >
                  {subtitle}
                </p>
                <h3
                  className="font-display font-700 mb-3"
                  style={{
                    fontWeight: 700,
                    fontSize: "1.2rem",
                    color: "oklch(0.18 0.04 255)",
                  }}
                >
                  {title}
                </h3>
                <p
                  className="font-body text-sm mb-6 flex-1"
                  style={{ color: "oklch(0.45 0.02 255)", lineHeight: 1.7, fontWeight: 400 }}
                >
                  {desc}
                </p>
                <ul className="space-y-2 mb-6">
                  {features.map((f) => (
                    <li key={f} className="flex items-center gap-2">
                      <div
                        className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                        style={{ background: color }}
                      />
                      <span
                        className="font-body text-xs"
                        style={{ color: "oklch(0.45 0.02 255)", fontWeight: 500 }}
                      >
                        {f}
                      </span>
                    </li>
                  ))}
                </ul>
                <a
                  href="#contact"
                  onClick={(e) => {
                    e.preventDefault();
                    document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="flex items-center gap-2 font-display font-600 text-sm transition-colors"
                  style={{ color, fontWeight: 600 }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.gap = "12px";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.gap = "8px";
                  }}
                >
                  Enquire <ArrowRight size={14} />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SPEAKING ─────────────────────────────────────── */}
      <section
        id="speaking"
        className="py-24 relative overflow-hidden"
        style={{ background: "oklch(0.96 0.005 255)" }}
        ref={speakingRef}
      >
        <div className="container">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            {/* Image */}
            <div className="fade-up relative">
              <img
                src={SPEAKING_IMG}
                alt="Nic van den Bergh speaking on stage"
                className="w-full object-cover"
                style={{ aspectRatio: "3/2" }}
              />
              <div
                className="absolute bottom-0 left-0 right-0 p-6"
                style={{
                  background: "linear-gradient(to top, oklch(0.18 0.04 255 / 0.9), transparent)",
                }}
              >
                <p
                  className="font-display text-white font-700 text-lg"
                  style={{ fontWeight: 700 }}
                >
                  Book Nic for Your Next Event
                </p>
                <p
                  className="font-body text-sm"
                  style={{ color: "oklch(0.75 0.01 255)", fontWeight: 300 }}
                >
                  Corporate · Conference · Workshop
                </p>
              </div>
            </div>

            {/* Text */}
            <div className="fade-up" style={{ transitionDelay: "0.15s" }}>
              <p className="section-label mb-4">Speaking</p>
              <h2
                className="font-display mb-6"
                style={{
                  fontFamily: "'Bebas Neue', sans-serif",
                  fontSize: "clamp(2.8rem, 5vw, 4.2rem)",
                  lineHeight: 1.0,
                  letterSpacing: "0.03em",
                  color: "oklch(0.18 0.04 255)",
                  fontWeight: 400,
                }}
              >
                A Story That
                <br />
                <span style={{ color: "oklch(0.55 0.2 260)" }}>Moves Audiences</span>
              </h2>
              <p
                className="font-body text-base mb-8"
                style={{ color: "oklch(0.35 0.02 255)", lineHeight: 1.8, fontWeight: 400 }}
              >
                Nic's keynotes are not motivational fluff. They are hard-won lessons
                from the intersection of near-death experience, executive leadership,
                and athletic transformation. He speaks to what it truly means to
                perform under pressure — and how to build a life that doesn't require
                a crisis to change.
              </p>

              <div className="space-y-4 mb-8">
                {[
                  "Resilience & Reinvention — Turning adversity into advantage",
                  "The CEO Athlete — Peak performance in business and fitness",
                  "Heart of a Leader — Building teams that thrive under pressure",
                  "From Survive to Thrive — A framework for radical transformation",
                ].map((topic) => (
                  <div key={topic} className="flex items-start gap-3">
                    <div
                      className="w-5 h-5 flex-shrink-0 flex items-center justify-center mt-0.5"
                      style={{ background: "oklch(0.55 0.2 260)" }}
                    >
                      <CheckCircle2 size={12} className="text-white" />
                    </div>
                    <p
                      className="font-body text-sm"
                      style={{ color: "oklch(0.35 0.02 255)", fontWeight: 500 }}
                    >
                      {topic}
                    </p>
                  </div>
                ))}
              </div>

              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
                }}
                className="inline-flex items-center gap-2 px-7 py-4 font-display font-700 text-sm tracking-wide transition-all"
                style={{
                  background: "oklch(0.18 0.04 255)",
                  color: "white",
                  fontWeight: 700,
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.background = "oklch(0.55 0.2 260)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.background = "oklch(0.18 0.04 255)";
                }}
              >
                Book a Speaking Engagement <ArrowRight size={16} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ─────────────────────────────────── */}
      <section className="py-24 bg-white">
        <div className="container">
          <div className="text-center mb-16">
            <p className="section-label mb-4">Testimonials</p>
              <h2
                className="font-display"
                style={{
                  fontFamily: "'Bebas Neue', sans-serif",
                  fontSize: "clamp(2.8rem, 5vw, 4.2rem)",
                  lineHeight: 1.0,
                  letterSpacing: "0.03em",
                  color: "oklch(0.18 0.04 255)",
                  fontWeight: 400,
                }}
              >
                What People Are Saying
              </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                quote:
                  "Nic's story completely shifted my perspective on what's possible. After hearing him speak, I overhauled my fitness routine and my business strategy simultaneously. The results have been extraordinary.",
                name: "James Thornton",
                title: "Managing Director, Dubai",
              },
              {
                quote:
                  "Working with Nic as a coach changed my life. He doesn't just give you a workout plan — he gives you a mindset upgrade. The discipline I've built in the gym has directly translated to how I lead my team.",
                name: "Sarah Al-Rashid",
                title: "Entrepreneur & CEO, Abu Dhabi",
              },
              {
                quote:
                  "I've attended hundreds of keynotes. Nic's is the only one I've ever seen bring an audience to complete silence — and then to a standing ovation. His authenticity is unmatched.",
                name: "Michael van Zyl",
                title: "Conference Organiser, Johannesburg",
              },
            ].map(({ quote, name, title }) => (
              <div
                key={name}
                className="p-8 border border-gray-100"
                style={{ boxShadow: "0 2px 12px oklch(0 0 0 / 0.04)" }}
              >
                <Quote size={28} style={{ color: "oklch(0.75 0.18 75)", marginBottom: "1rem" }} />
                <p
                  className="font-body text-sm mb-6"
                  style={{ color: "oklch(0.35 0.02 255)", lineHeight: 1.8, fontWeight: 400, fontStyle: "italic" }}
                >
                  "{quote}"
                </p>
                <div className="flex items-center gap-3">
                  <div
                    className="w-10 h-10 flex items-center justify-center font-display font-700 text-white text-sm"
                    style={{ background: "oklch(0.55 0.2 260)", fontWeight: 700 }}
                  >
                    {name[0]}
                  </div>
                  <div>
                    <p
                      className="font-display font-700 text-sm"
                      style={{ color: "oklch(0.18 0.04 255)", fontWeight: 700 }}
                    >
                      {name}
                    </p>
                    <p
                      className="font-body text-xs"
                      style={{ color: "oklch(0.55 0.02 255)", fontWeight: 400 }}
                    >
                      {title}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CONTACT ──────────────────────────────────────── */}
      <section
        id="contact"
        className="py-24"
        style={{ background: "oklch(0.18 0.04 255)" }}
        ref={contactRef}
      >
        <div className="container">
          <div className="grid md:grid-cols-2 gap-16">
            {/* Left */}
            <div className="fade-up">
              <p className="section-label mb-4" style={{ color: "oklch(0.75 0.18 75)" }}>
                Get In Touch
              </p>
              <h2
                className="font-display text-white mb-6"
                style={{
                  fontFamily: "'Bebas Neue', sans-serif",
                  fontSize: "clamp(2.8rem, 5vw, 4.2rem)",
                  lineHeight: 1.0,
                  letterSpacing: "0.03em",
                  fontWeight: 400,
                }}
              >
                Ready to Build
                <br />
                <span style={{ color: "oklch(0.75 0.18 75)" }}>Something Great?</span>
              </h2>
              <p
                className="font-body text-base mb-10"
                style={{ color: "oklch(0.75 0.01 255)", lineHeight: 1.8, fontWeight: 300 }}
              >
                Whether you're looking for a speaking partner, a business growth
                strategist, or a fitness coach who truly understands the executive
                lifestyle — Nic is ready to connect.
              </p>

              <div className="space-y-5">
                <div className="flex items-center gap-4">
                  <div
                    className="w-10 h-10 flex items-center justify-center"
                    style={{ background: "oklch(0.75 0.18 75)" }}
                  >
                    <MapPin size={18} style={{ color: "oklch(0.18 0.04 255)" }} />
                  </div>
                  <div>
                    <p
                      className="font-body text-xs font-600 uppercase tracking-widest mb-0.5"
                      style={{ color: "oklch(0.55 0.01 255)", fontWeight: 600 }}
                    >
                      Location
                    </p>
                    <p
                      className="font-body text-sm text-white"
                      style={{ fontWeight: 400 }}
                    >
                      Dubai, United Arab Emirates
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div
                    className="w-10 h-10 flex items-center justify-center"
                    style={{ background: "oklch(0.75 0.18 75)" }}
                  >
                    <Mail size={18} style={{ color: "oklch(0.18 0.04 255)" }} />
                  </div>
                  <div>
                    <p
                      className="font-body text-xs font-600 uppercase tracking-widest mb-0.5"
                      style={{ color: "oklch(0.55 0.01 255)", fontWeight: 600 }}
                    >
                      Email
                    </p>
                    <a
                      href="mailto:nic@nicvandenbergh.com"
                      className="font-body text-sm text-white animated-underline"
                      style={{ fontWeight: 400 }}
                    >
                      nic@nicvandenbergh.com
                    </a>
                  </div>
                </div>
              </div>

              {/* Social */}
              <div className="flex gap-4 mt-10">
                <a
                  href="https://www.linkedin.com/in/nicvandenbergh/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 flex items-center justify-center border border-white/20 text-white transition-all"
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.background = "oklch(0.75 0.18 75)";
                    (e.currentTarget as HTMLElement).style.borderColor = "oklch(0.75 0.18 75)";
                    (e.currentTarget as HTMLElement).style.color = "oklch(0.18 0.04 255)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.background = "transparent";
                    (e.currentTarget as HTMLElement).style.borderColor = "oklch(1 0 0 / 0.2)";
                    (e.currentTarget as HTMLElement).style.color = "white";
                  }}
                >
                  <Linkedin size={16} />
                </a>
                <a
                  href="https://www.instagram.com/nicvandenbergh/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 flex items-center justify-center border border-white/20 text-white transition-all"
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.background = "oklch(0.75 0.18 75)";
                    (e.currentTarget as HTMLElement).style.borderColor = "oklch(0.75 0.18 75)";
                    (e.currentTarget as HTMLElement).style.color = "oklch(0.18 0.04 255)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.background = "transparent";
                    (e.currentTarget as HTMLElement).style.borderColor = "oklch(1 0 0 / 0.2)";
                    (e.currentTarget as HTMLElement).style.color = "white";
                  }}
                >
                  <Instagram size={16} />
                </a>
              </div>
            </div>

            {/* Form */}
            <div className="fade-up" style={{ transitionDelay: "0.15s" }}>
              {submitted ? (
                <div
                  className="h-full flex flex-col items-center justify-center text-center p-12"
                  style={{ background: "oklch(0.22 0.05 255)" }}
                >
                  <CheckCircle2 size={48} style={{ color: "oklch(0.75 0.18 75)", marginBottom: "1.5rem" }} />
                  <h3
                    className="font-display font-700 text-white text-2xl mb-3"
                    style={{ fontWeight: 700 }}
                  >
                    Message Sent!
                  </h3>
                  <p
                    className="font-body text-sm"
                    style={{ color: "oklch(0.75 0.01 255)", fontWeight: 300, lineHeight: 1.7 }}
                  >
                    Thank you for reaching out. Nic will get back to you within 24 hours.
                  </p>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="space-y-5 p-8"
                  style={{ background: "oklch(0.22 0.05 255)" }}
                >
                  <div className="grid grid-cols-2 gap-5">
                    <div>
                      <label
                        className="font-body text-xs font-600 uppercase tracking-widest mb-2 block"
                        style={{ color: "oklch(0.65 0.01 255)", fontWeight: 600 }}
                      >
                        Name
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3 font-body text-sm text-white bg-transparent border border-white/15 focus:border-amber-brand focus:outline-none transition-colors"
                        style={{ fontWeight: 400 }}
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label
                        className="font-body text-xs font-600 uppercase tracking-widest mb-2 block"
                        style={{ color: "oklch(0.65 0.01 255)", fontWeight: 600 }}
                      >
                        Email
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 font-body text-sm text-white bg-transparent border border-white/15 focus:border-amber-brand focus:outline-none transition-colors"
                        style={{ fontWeight: 400 }}
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      className="font-body text-xs font-600 uppercase tracking-widest mb-2 block"
                      style={{ color: "oklch(0.65 0.01 255)", fontWeight: 600 }}
                    >
                      I'm interested in
                    </label>
                    <select
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full px-4 py-3 font-body text-sm bg-transparent border border-white/15 focus:border-amber-brand focus:outline-none transition-colors"
                      style={{ color: formData.service ? "white" : "oklch(0.55 0.01 255)", fontWeight: 400 }}
                    >
                      <option value="" style={{ background: "oklch(0.22 0.05 255)" }}>Select a service</option>
                      <option value="coaching" style={{ background: "oklch(0.22 0.05 255)" }}>1-on-1 Coaching</option>
                      <option value="consulting" style={{ background: "oklch(0.22 0.05 255)" }}>Business Consulting</option>
                      <option value="speaking" style={{ background: "oklch(0.22 0.05 255)" }}>Speaking Engagement</option>
                      <option value="online" style={{ background: "oklch(0.22 0.05 255)" }}>Online Programs</option>
                      <option value="other" style={{ background: "oklch(0.22 0.05 255)" }}>Other</option>
                    </select>
                  </div>

                  <div>
                    <label
                      className="font-body text-xs font-600 uppercase tracking-widest mb-2 block"
                      style={{ color: "oklch(0.65 0.01 255)", fontWeight: 600 }}
                    >
                      Message
                    </label>
                    <textarea
                      rows={5}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 font-body text-sm text-white bg-transparent border border-white/15 focus:border-amber-brand focus:outline-none transition-colors resize-none"
                      style={{ fontWeight: 400 }}
                      placeholder="Tell Nic what you're looking to achieve..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 font-display font-700 text-sm tracking-wide transition-all"
                    style={{
                      background: "oklch(0.75 0.18 75)",
                      color: "oklch(0.18 0.04 255)",
                      fontWeight: 700,
                    }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLElement).style.background = "oklch(0.82 0.16 75)";
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLElement).style.background = "oklch(0.75 0.18 75)";
                    }}
                  >
                    Send Message
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ── FOOTER ───────────────────────────────────────── */}
      <footer
        className="py-10 border-t"
        style={{
          background: "oklch(0.14 0.035 255)",
          borderColor: "oklch(1 0 0 / 0.08)",
        }}
      >
        <div className="container">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex flex-col items-center md:items-start">
            <span
              className="font-display text-white"
              style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "1.4rem", letterSpacing: "0.05em", fontWeight: 400 }}
            >
              NIC VAN DEN BERGH
            </span>
              <span
                className="font-body text-xs tracking-widest uppercase"
                style={{ color: "oklch(0.55 0.01 255)", fontWeight: 400 }}
              >
                Motivator &middot; Fitness &middot; Business
              </span>
            </div>

            <nav className="flex flex-wrap justify-center gap-6">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    document.querySelector(link.href)?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="font-body text-xs transition-colors"
                  style={{ color: "oklch(0.55 0.01 255)", fontWeight: 500 }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.color = "oklch(0.75 0.18 75)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.color = "oklch(0.55 0.01 255)";
                  }}
                >
                  {link.label}
                </a>
              ))}
            </nav>

            <p
              className="font-body text-xs"
              style={{ color: "oklch(0.45 0.01 255)", fontWeight: 400 }}
            >
              &copy; {new Date().getFullYear()} Nic van den Bergh. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}


