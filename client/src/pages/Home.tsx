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
const FITNESS_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663049677144/F6hhhn4AdQ5atnoJJb572Q/nic-gym-real_d7504cba.png";
const SPEAKING_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663049677144/F6hhhn4AdQ5atnoJJb572Q/nic-speaking-real_977aa39a.png";
const SURFING_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663049677144/F6hhhn4AdQ5atnoJJb572Q/nic-surfing-real_9df8ee4a.png";
const FLYFISHING_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663049677144/F6hhhn4AdQ5atnoJJb572Q/nic-flyfishing-real_a70d5d87.png";
const CEO_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663049677144/F6hhhn4AdQ5atnoJJb572Q/nic-real-photo_ee779ef2.png";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Story", href: "#story" },
  { label: "Services", href: "#services" },
  { label: "Speaking", href: "#speaking" },
  { label: "Journey", href: "#journey" },
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
              My name is Nic &middot; South African &middot; Dubai-based &middot; CEO &middot; Turning 50 &amp; Just Getting Started
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
                Diagnosed With
                <br />
                <span style={{ color: "oklch(0.75 0.18 75)" }}>Cardiomyopathy.</span>
                <br />
                Then I Started Living.
              </h1>

              <p
                className="font-body text-lg md:text-xl mb-10 max-w-xl"
                style={{ color: "oklch(0.85 0.01 255)", fontWeight: 300, lineHeight: 1.7 }}
              >
                I'm not a fitness guru. I'm not a life coach with all the answers.
                I'm a CEO, a dad, a surfer, and a guy who was diagnosed with
                cardiomyopathy and decided that was the best thing that ever happened to him.
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
                Hear My Story <ArrowRight size={16} />
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
                Let's Work Together
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
              { value: 25, suffix: "+", label: "Years in Business", icon: TrendingUp },
              { value: 2, suffix: ".3B", label: "Rands in Media Managed", icon: Dumbbell },
              { value: 152, suffix: "", label: "Countries — Gaming Community Reach", icon: MapPin },
              { value: 1, suffix: "", label: "Cardiomyopathy Diagnosis That Changed Everything", icon: Heart },
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

      {/* ── CORE VALUES STRIP ─────────────────────────── */}
      <section
        className="py-12"
        style={{ background: "oklch(0.18 0.04 255)" }}
      >
        <div className="container">
          <p
            className="text-center font-body text-xs uppercase tracking-widest mb-8"
            style={{ color: "oklch(0.55 0.2 260)", fontWeight: 600 }}
          >
            My Core Values
          </p>
          <div className="flex flex-wrap justify-center gap-4 md:gap-8">
            {["Independent", "Pioneering", "Ambitious", "Responsible", "Consistent"].map((value, i) => (
              <div key={value} className="flex items-center gap-3">
                {i > 0 && (
                  <div
                    className="hidden md:block w-1 h-1 rounded-full"
                    style={{ background: "oklch(0.75 0.18 75)" }}
                  />
                )}
                <span
                  style={{
                    fontFamily: "'Bebas Neue', sans-serif",
                    fontSize: "clamp(1.4rem, 3vw, 2rem)",
                    letterSpacing: "0.08em",
                    color: i === 2 ? "oklch(0.75 0.18 75)" : "white",
                    fontWeight: 400,
                  }}
                >
                  {value}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ABOUT ──────────────────────────────────── */}
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
              <p className="section-label mb-4">About Me</p>
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
                <span style={{ color: "oklch(0.55 0.2 260)" }}>Healthy by Choice.</span>
              </h2>
              <p
                className="font-body text-base mb-5"
                style={{ color: "oklch(0.35 0.02 255)", lineHeight: 1.8, fontWeight: 400 }}
              >
                I've spent 25+ years in business — starting as a founder (I built and sold Thunda.com back in 1999), then moving through roles at Media24, Dentsu, Virgin Money, and multiple CMO positions across gaming, fintech, and digital. I hold an MBA from Oxford Brookes in London. I've managed R2.3 billion in media spend, led teams across 152 countries, and helped build brands from zero to national prominence. What I didn't always know was how to take care of the person running it all.
              </p>
              <p
                className="font-body text-base mb-8"
                style={{ color: "oklch(0.35 0.02 255)", lineHeight: 1.8, fontWeight: 400 }}
              >
                A cardiomyopathy diagnosis changed everything. My heart muscle was struggling — not from a sudden event, but from years of stress, poor habits, and ignoring the signals. I stopped drinking. I started training. I rebuilt my body and my mindset from scratch — not because I wanted to be an athlete, but because I wanted to be alive and present for my two kids. Today I surf, fly fish, and show up every single day with more energy and clarity than I had in my thirties. Health by choice. Not by accident.
              </p>
              <div className="flex flex-wrap gap-3">
                {["Motivational Speaker", "Fitness Coach", "Business Strategist", "MBA — Oxford Brookes", "Serial Entrepreneur", "Former CMO", "Surfer", "Father of Two", "Fly Fisher", "Guitarist", "Photographer", "UAE-Based"].map((tag) => (
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
                My Story
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
                I Didn't Change
                <br />
                <span style={{ color: "oklch(0.75 0.18 75)" }}>My Life. I Saved It.</span>
              </h2>

              <div className="space-y-6">
                {[
                  {
                    title: "The Wake-Up Call",
                    text: "I was running a company, travelling constantly, drinking too much, and ignoring every signal my body was sending me. Then came the diagnosis: cardiomyopathy. My heart muscle was under serious strain. That's not a metaphor. That's what happened. And sitting in that doctor's office, I made a decision.",
                  },
                  {
                    title: "The Rebuild",
                    text: "I quit alcohol. I started going to the gym — badly at first, honestly. I changed what I ate, how I slept, how I thought. I wasn't trying to become an athlete. I was trying to become a better dad, a clearer thinker, and a man who actually shows up.",
                  },
                  {
                    title: "Why I Share It",
                    text: "Because I've sat in boardrooms with brilliant people who are slowly killing themselves the same way I was. If my story gives one person permission to change before they have to — that's worth everything.",
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
                  "I didn't need a cardiomyopathy diagnosis to change. But apparently I did."
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
                src={SURFING_IMG}
                alt="Nic van den Bergh surfing"
                className="w-full object-cover"
                style={{ aspectRatio: "3/4", maxHeight: "600px", objectPosition: "top" }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── SERVICES ─────────────────────────────────────── */}
      <section id="services" className="py-24 bg-white" ref={servicesRef}>
        <div className="container">
          <div className="max-w-2xl mb-16 fade-up">
            <p className="section-label mb-4">How I Can Help</p>
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
                I Work With
                <br />
                <span style={{ color: "oklch(0.55 0.2 260)" }}>People Ready to Change</span>
              </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6" ref={servicesRef}>
            {[
              {
                icon: Heart,
                title: "1-on-1 Coaching",
                subtitle: "Fitness & Mindset",
                desc: "I work with you one-on-one to build a fitness and mindset routine that fits your life as a busy professional. No fluff. No generic plans. Just honest, practical work.",
                features: ["Custom training plans", "Nutrition guidance", "Mindset frameworks", "Weekly accountability"],
                color: "oklch(0.55 0.2 260)",
              },
              {
                icon: TrendingUp,
                title: "Business Consulting",
                subtitle: "Growth Strategy",
                desc: "I've been in the room where the hard calls get made. From Media24 to Dentsu (R2.3B in media), Virgin Money to Web3 gaming across 152 countries — I bring 25+ years of real CMO and CEO experience to help you grow smarter, not just harder.",
                features: ["Growth & brand strategy", "Leadership development", "Digital & Web3 marketing", "Executive coaching"],
                color: "oklch(0.75 0.18 75)",
              },
              {
                icon: Mic2,
                title: "Speaking",
                subtitle: "Keynotes & Events",
                desc: "I don't do motivational fluff. I tell you exactly what happened to me and what I did about it. If that moves you to act, then we've both done our job.",
                features: ["Corporate keynotes", "Conference talks", "Workshops", "Panel discussions"],
                color: "oklch(0.55 0.2 260)",
              },
              {
                icon: Dumbbell,
                title: "Online Programs",
                subtitle: "Fitness & Mindset",
                desc: "Can't do 1-on-1 yet? My online programs give you the same frameworks I used to rebuild my health — structured, honest, and built for people with real lives.",
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
                  Get in Touch <ArrowRight size={14} />
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
                style={{ aspectRatio: "3/2", objectPosition: "top" }}
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
                  Book Me for Your Next Event
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
              <p className="section-label mb-4">On Stage</p>
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
                I Don't Do
                <br />
                <span style={{ color: "oklch(0.55 0.2 260)" }}>Motivational Fluff</span>
              </h2>
              <p
                className="font-body text-base mb-8"
                style={{ color: "oklch(0.35 0.02 255)", lineHeight: 1.8, fontWeight: 400 }}
              >
                When I stand on a stage, I'm not reading from a script. I'm telling
                you what it felt like to be told your heart is failing. What it took
                to rebuild. What I wish someone had told me before I needed a
                cardiomyopathy diagnosis to finally listen to my body.
                My talks are raw, honest, and built to move people to action — not
                just applause.
              </p>

              <div className="space-y-4 mb-8">
                {[
                  "Cardiomyopathy & A New Life — My personal story of reinvention",
                  "Health is a Business Strategy — Why your body is your best asset",
                  "The Sober CEO — What quitting alcohol did for my leadership",
                  "From Survive to Thrive — A framework for radical transformation",
                  "Building Brands at Scale — 25 years of lessons from R2.3B in media",
                  "The Web3 Frontier — Marketing in the age of blockchain and gaming",
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
                Book Me to Speak <ArrowRight size={16} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── CAREER TIMELINE ──────────────────────────────── */}
      <section id="journey" className="py-24" style={{ background: "oklch(0.96 0.005 255)" }}>
        <div className="container">
          <div className="text-center mb-16">
            <p className="section-label mb-4">The Journey</p>
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
              25 Years.
              <br />
              <span style={{ color: "oklch(0.55 0.2 260)" }}>One Relentless Drive.</span>
            </h2>
          </div>

          <div className="relative">
            {/* Vertical line */}
            <div
              className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px hidden md:block"
              style={{ background: "oklch(0.85 0.005 255)" }}
            />

            <div className="space-y-10">
              {[
                { year: "1997", role: "Marketing & Sales Manager", company: "Redline Products", desc: "Where it all started. Managing and developing the South African retail and wholesale market, building brands in local and international target markets." },
                { year: "1999", role: "Founder & Director", company: "Thunda.com", desc: "Built and sold one of South Africa's first digital photo platforms. 50,000 photographs a week at peak. Sold the business. First taste of what building something from nothing feels like." },
                { year: "2003", role: "Publisher", company: "Media24", desc: "Oversaw Fin24 and Wheels24 business units. Managed budgets, advertising sales, editorial strategy, and print relationships for combined marketing initiatives." },
                { year: "2008", role: "Trading & Media Director", company: "Dentsu / Isobar", desc: "Built Isobar SA to R700M in turnover. Managed R2.3 billion in group media spend across South Africa and Sub-Saharan Africa. Led global business pitches." },
                { year: "2015", role: "MD", company: "Clicks2Customers / NMPi", desc: "Led a team delivering data analytics, UX, web design, SEO, SEM, and social media solutions. Obsessed with quality and continuous evolution in digital." },
                { year: "2017", role: "Head of Digital", company: "Virgin Money South Africa", desc: "End-to-end digital strategy, branding, campaign management, and customer conversion. Integrated new technologies to enhance user experience and drive acquisition." },
                { year: "2020", role: "CMO", company: "Gameout Inc & DFY Studios", desc: "Chief Marketing Officer across two gaming companies in 152 countries, serving 2.5M+ gamers. Pioneered Web3 and blockchain gaming. Pushed every boundary." },
                { year: "Now", role: "CEO, Speaker & Coach", company: "Macula Pty Ltd — Dubai, UAE", desc: "Running my own company. Speaking on stages. Coaching executives. Turning 50 and just getting started. Living proof that a cardiomyopathy diagnosis can be the best thing that ever happens to you." },
              ].map(({ year, role, company, desc }, i) => (
                <div
                  key={year}
                  className={`flex flex-col md:flex-row gap-6 md:gap-0 items-start ${
                    i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  {/* Content block */}
                  <div className={`w-full md:w-5/12 ${
                    i % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12"
                  }`}>
                    <div
                      className="inline-block px-3 py-1 text-xs font-body font-700 mb-3"
                      style={{
                        background: i === 5 ? "oklch(0.75 0.18 75)" : "oklch(0.55 0.2 260)",
                        color: "white",
                        fontWeight: 700,
                        letterSpacing: "0.08em",
                      }}
                    >
                      {year}
                    </div>
                    <h3
                      className="font-display font-700 mb-1"
                      style={{ fontWeight: 700, fontSize: "1.1rem", color: "oklch(0.18 0.04 255)" }}
                    >
                      {role}
                    </h3>
                    <p
                      className="font-body text-xs font-600 uppercase tracking-widest mb-3"
                      style={{ color: "oklch(0.55 0.2 260)", fontWeight: 600 }}
                    >
                      {company}
                    </p>
                    <p
                      className="font-body text-sm"
                      style={{ color: "oklch(0.45 0.02 255)", lineHeight: 1.7, fontWeight: 400 }}
                    >
                      {desc}
                    </p>
                  </div>

                  {/* Centre dot */}
                  <div className="hidden md:flex w-2/12 justify-center items-start pt-2">
                    <div
                      className="w-4 h-4 rounded-full border-2 z-10"
                      style={{
                        background: "white",
                        borderColor: i === 5 ? "oklch(0.75 0.18 75)" : "oklch(0.55 0.2 260)",
                      }}
                    />
                  </div>

                  {/* Empty opposite side */}
                  <div className="hidden md:block w-5/12" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── LIFESTYLE STRIP ──────────────────────────────── */}
      <section className="relative overflow-hidden" style={{ height: "340px" }}>
        <img
          src={FLYFISHING_IMG}
          alt="Nic van den Bergh fly fishing"
          className="w-full h-full object-cover"
          style={{ objectPosition: "center 30%" }}
        />
        <div
          className="absolute inset-0 flex items-center justify-center"
          style={{ background: "oklch(0.18 0.04 255 / 0.55)" }}
        >
          <div className="text-center px-4">
            <p
              className="font-display text-white mb-2"
              style={{
                fontFamily: "'Bebas Neue', sans-serif",
                fontSize: "clamp(2rem, 5vw, 3.5rem)",
                letterSpacing: "0.04em",
                fontWeight: 400,
              }}
            >
              The river doesn't care about your title.
            </p>
            <p
              className="font-body text-sm"
              style={{ color: "oklch(0.85 0.01 255)", fontWeight: 300, letterSpacing: "0.05em" }}
            >
              Fly fishing taught me patience. The gym taught me discipline. My kids taught me everything else.
            </p>
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
                Let's Talk
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
                If Something
                <br />
                <span style={{ color: "oklch(0.75 0.18 75)" }}>Here Resonated</span>
              </h2>
              <p
                className="font-body text-base mb-10"
                style={{ color: "oklch(0.75 0.01 255)", lineHeight: 1.8, fontWeight: 300 }}
              >
                Then let's have a conversation. I'm not hard to reach and I don't
                have a gatekeeping team. If you want to work together, speak at your
                event, or just ask a question — drop me a message. I read every one.
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
                    Thank you for reaching out. I'll get back to you personally within 24 hours.
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


