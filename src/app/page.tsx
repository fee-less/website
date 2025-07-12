"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";

const reasons = [
  {
    icon: (
      <svg
        className="w-8 h-8 text-blue-400"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 8c-1.657 0-3 1.343-3 3 0 1.657 1.343 3 3 3s3-1.343 3-3c0-1.657-1.343-3-3-3zm0 0V4m0 16v-4m8-4h-4m-8 0H4"
        />
      </svg>
    ),
    title: "Zero Fees",
    desc: "No transaction fees. Ever. Send value freely, without friction.",
  },
  {
    icon: (
      <svg
        className="w-8 h-8 text-fuchsia-400"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M17 20h5v-2a3 3 0 00-3-3h-4a3 3 0 00-3 3v2h5zm-6 0H7v-2a3 3 0 013-3h4a3 3 0 013 3v2h-5zm-6 0H2v-2a3 3 0 013-3h4a3 3 0 013 3v2H5z"
        />
      </svg>
    ),
    title: "Open to All",
    desc: "Anyone can use, mine, or build. No barriers, no gatekeepers.",
  },
  {
    icon: (
      <svg
        className="w-8 h-8 text-yellow-400"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
    title: "Instant & Scalable",
    desc: "Lightning-fast settlement, built for the next billion users.",
  },
  {
    icon: (
      <svg
        className="w-8 h-8 text-white/80"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
      </svg>
    ),
    title: "Future-Proof",
    desc: "Flexible, upgradable, and ready for what's next.",
  },
];

const steps = [
  {
    step: "1",
    title: "Create your wallet",
  },
  {
    step: "2",
    title: "Send or receive FLSS or native tokens instantly!",
  },
  {
    step: "3",
    title: "No fees, no friction, just value",
  },
];

const useCases = [
  {
    icon: "💸",
    title: "Send Money Instantly",
    desc: "Transfer value to anyone, anywhere, in seconds.",
  },
  {
    icon: "🌐",
    title: "Launch a Community Token",
    desc: "Empower your group or project with custom tokens.",
  },
  {
    icon: "🎁",
    title: "Tip Creators",
    desc: "Support your favorite creators with zero-fee tips.",
  },
];

const faqs = [
  {
    q: "Is it really feeless?",
    a: "Yes! There are no transaction fees for sending or receiving tokens.",
  },
  {
    q: "How do miners earn?",
    a: "Miners earn block rewards and can choose which tokens to mine, supporting the ecosystem.",
  },
  {
    q: "Can I create my own token?",
    a: "Absolutely! Anyone can launch a custom token on the protocol.",
  },
  {
    q: "Is it secure?",
    a: "Yes, the protocol uses modern cryptography and a robust consensus mechanism.",
  },
];

const community = [
  { name: "Alex", img: "https://randomuser.me/api/portraits/men/32.jpg" },
  { name: "Jamie", img: "https://randomuser.me/api/portraits/women/44.jpg" },
  { name: "Taylor", img: "https://randomuser.me/api/portraits/men/45.jpg" },
  { name: "Morgan", img: "https://randomuser.me/api/portraits/women/65.jpg" },
  { name: "Jordan", img: "https://randomuser.me/api/portraits/men/12.jpg" },
];

// Add scroll observer hook
function useScrollObserver() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-parallax-fast", "opacity-100");
            entry.target.classList.remove("opacity-0", "translate-y-10");
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: "0px",
      }
    );

    const elements = document.querySelectorAll(".scroll-animate");
    elements.forEach((el) => observer.observe(el));

    return () => elements.forEach((el) => observer.unobserve(el));
  }, []);
}

function scrollToId(id: string) {
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}

export default function Home() {
  const [showHowModal, setShowHowModal] = useState(false);
  const [showCommunityModal, setShowCommunityModal] = useState(false);

  useScrollObserver();

  // Add smooth scroll
  React.useEffect(() => {
    document.body.classList.add("scroll-smooth");
    return () => document.body.classList.remove("scroll-smooth");
  }, []);

  return (
    <main className="relative min-h-screen flex flex-col bg-black text-white overflow-hidden">
      {/* Animated Abstract Background */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute left-1/2 top-0 -translate-x-1/2 w-[120vw] h-[60vh] bg-gradient-to-tr from-blue-600 via-fuchsia-500 to-yellow-400 opacity-30 blur-3xl animate-breathe transition-all duration-1000 ease-in-out" />
        <svg
          className="absolute right-0 bottom-0 w-1/2 h-1/2 opacity-20 animate-float transition-all duration-1000"
          viewBox="0 0 400 400"
          fill="none"
        >
          <circle cx="200" cy="200" r="200" fill="url(#paint0_radial)" />
          <defs>
            <radialGradient
              id="paint0_radial"
              cx="0"
              cy="0"
              r="1"
              gradientTransform="translate(200 200) scale(200)"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#fff" stopOpacity="0.2" />
              <stop offset="1" stopColor="#fff" stopOpacity="0" />
            </radialGradient>
          </defs>
        </svg>
      </div>

      {/* Navbar with slide-down animation */}
      <header className="w-full py-6 px-6 flex items-center justify-between animate-slide-down">
        <span className="text-2xl font-extrabold tracking-tight bg-gradient-to-r from-blue-400 via-fuchsia-400 to-yellow-300 bg-clip-text text-transparent animate-shimmer bg-[length:200%_auto]">
          Feeless
        </span>
        <nav className="hidden md:flex gap-8 ml-8">
          <a
            href="#why"
            onClick={(e) => {
              e.preventDefault();
              scrollToId("why");
            }}
            className="hover:text-fuchsia-400 transition"
          >
            Why Feeless?
          </a>
          <a
            href="#how"
            onClick={(e) => {
              e.preventDefault();
              scrollToId("how");
            }}
            className="hover:text-fuchsia-400 transition"
          >
            How It Works
          </a>
          <a href="/tech" className="hover:text-fuchsia-400 transition">
            Tech
          </a>
          <a
            href="#community"
            onClick={(e) => {
              e.preventDefault();
              scrollToId("community");
            }}
            className="hover:text-fuchsia-400 transition"
          >
            Community
          </a>
        </nav>
      </header>

      {/* Hero Section with scale-in animation */}
      <section className="flex-1 flex flex-col items-center justify-center text-center px-4 animate-scale-in">
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight leading-tight mb-8 bg-gradient-to-r from-blue-400 via-fuchsia-400 to-yellow-300 bg-clip-text text-transparent animate-shimmer bg-[length:200%_auto]">
          Effortless. Feeless. For Everyone.
        </h1>
        <p className="text-lg md:text-2xl text-white/80 max-w-2xl mx-auto mb-12 animate-fade-in delay-200">
          A new blockchain experience. No fees. No friction. Just pure, instant
          value—open to all. The future is feeless.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <button
            onClick={() => setShowCommunityModal(true)}
            className="inline-block px-10 py-4 rounded-full bg-gradient-to-r from-blue-500 via-fuchsia-500 to-yellow-400 text-black font-bold text-lg shadow-xl hover:scale-105 transition-all duration-300 animate-fade-in delay-300"
          >
            Join the community
          </button>
          <button
            onClick={() => (window.location.href = "/tech")}
            className="inline-block px-10 py-4 rounded-full bg-white/10 border border-white/20 text-white font-bold text-lg shadow-xl hover:scale-105 hover:bg-white/20 transition-all duration-300 animate-fade-in delay-400"
          >
            Explore the Tech
          </button>
        </div>
      </section>

      {/* Details Section with scroll animations */}
      <section
        id="why"
        className="w-full py-24 px-4 bg-gradient-to-b from-black/0 to-black/40"
      >
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-16">
          <div className="flex-1 flex justify-center items-center scroll-animate opacity-0 translate-y-10">
            <svg
              width="320"
              height="260"
              viewBox="0 0 320 260"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                x="40"
                y="40"
                width="100"
                height="100"
                rx="28"
                fill="#60a5fa"
                fillOpacity="0.18"
                className="animate-breathe"
              />
              <rect
                x="180"
                y="70"
                width="100"
                height="100"
                rx="28"
                fill="#fde047"
                fillOpacity="0.18"
                className="animate-breathe"
              />
              <circle
                cx="160"
                cy="130"
                r="60"
                fill="#a21caf"
                fillOpacity="0.18"
                className="animate-pulse-slow"
              />
              <polygon
                points="160,60 220,200 100,200"
                fill="#fff"
                fillOpacity="0.10"
              />
              <ellipse
                cx="160"
                cy="210"
                rx="80"
                ry="18"
                fill="#fff"
                fillOpacity="0.08"
              />
              <circle cx="90" cy="90" r="16" fill="#60a5fa" />
              <circle cx="260" cy="120" r="16" fill="#fde047" />
              <circle cx="160" cy="130" r="20" fill="#fff" fillOpacity="0.8" />
              <rect
                x="120"
                y="40"
                width="80"
                height="20"
                rx="10"
                fill="#a21caf"
                fillOpacity="0.18"
              />
              <rect
                x="60"
                y="180"
                width="60"
                height="20"
                rx="10"
                fill="#60a5fa"
                fillOpacity="0.18"
              />
              <rect
                x="200"
                y="180"
                width="60"
                height="20"
                rx="10"
                fill="#fde047"
                fillOpacity="0.18"
              />
            </svg>
          </div>
          <div className="flex-1 flex flex-col gap-10">
            {reasons.map((r, i) => (
              <div
                key={r.title}
                className="scroll-animate opacity-0 translate-y-10 flex items-start gap-6 hover:scale-105 transition-all duration-300"
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <div className="flex-shrink-0 w-14 h-14 rounded-full flex items-center justify-center bg-white/10 backdrop-blur border border-white/20 shadow-lg text-2xl animate-glow">
                  {r.icon}
                </div>
                <div>
                  <div className="text-2xl font-bold text-white/90 mb-1">
                    {r.title}
                  </div>
                  <div className="text-white/70 text-lg leading-relaxed">
                    {r.desc}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works Section (summary + modal) */}
      <section id="how" className="w-full py-24 px-4">
        <div className="max-w-4xl mx-auto flex flex-col items-center">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-white/90 tracking-tight">
            How It Works
          </h2>
          <div className="text-lg text-white/80 mb-8 text-center max-w-xl">
            Effortless, instant, and open to all. See how you can use Feeless in
            just a few steps.
          </div>
          <button
            onClick={() => setShowHowModal(true)}
            className="px-8 py-3 rounded-full bg-gradient-to-r from-blue-500 via-fuchsia-500 to-yellow-400 text-black font-bold text-lg shadow-lg hover:scale-105 transition"
          >
            See How It Works
          </button>
        </div>
        {/* Modal for How It Works */}
        {showHowModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm animate-fade-in">
            <div className="bg-black border border-white/20 rounded-2xl shadow-2xl p-8 max-w-lg w-full relative animate-scale-in">
              <button
                onClick={() => setShowHowModal(false)}
                className="absolute top-4 right-4 text-white/60 hover:text-fuchsia-400 text-2xl font-bold"
                aria-label="Close"
              >
                ×
              </button>
              <h3 className="text-2xl font-bold text-white/90 mb-8 text-center">
                How It Works
              </h3>
              <div className="flex flex-col gap-8">
                {steps.map((s, i) => (
                  <div
                    key={s.step}
                    className="flex flex-col items-center text-center animate-fade-in-up"
                    style={{ animationDelay: `${i * 100}ms` }}
                  >
                    <div
                      className={`w-12 h-12 flex items-center justify-center rounded-full bg-gradient-to-br from-blue-500 via-fuchsia-500 to-yellow-400 text-black font-bold text-2xl mb-4 shadow-lg animate-bounce-slow`}
                    >
                      {s.step}
                    </div>
                    <div className="text-lg text-white/90 font-medium">
                      {s.title}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </section>

      {/* What You Can Do Section with parallax */}
      <section className="w-full py-24 px-4 bg-gradient-to-b from-black/40 to-black/0">
        <div className="max-w-6xl mx-auto">
          <h2 className="scroll-animate opacity-0 translate-y-10 text-3xl md:text-4xl font-bold text-center mb-16 text-white/90 tracking-tight animate-shimmer bg-gradient-to-r from-blue-400 via-fuchsia-400 to-yellow-300 bg-clip-text text-transparent bg-[length:200%_auto]">
            What You Can Do
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
            {useCases.map((u, i) => (
              <div
                key={u.title}
                className="scroll-animate opacity-0 translate-y-10 flex flex-col items-center text-center gap-3 bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl shadow-xl p-8 hover:scale-105 transition-all duration-300"
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <div className="text-4xl mb-2 animate-wave">{u.icon}</div>
                <div className="text-xl font-semibold text-white/90">
                  {u.title}
                </div>
                <div className="text-white/60 text-base">{u.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Backed by Community Section */}
      <section className="w-full py-20 px-4">
        <div className="max-w-4xl mx-auto flex flex-col items-center">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 text-white/90 tracking-tight">
            Backed by a Welcoming Community
          </h2>
          <div className="flex gap-4 mb-4">
            {community.map((c, i) => (
              <Image
                key={c.name}
                src={c.img}
                alt={c.name}
                width={70}
                height={70}
                className="w-14 h-14 rounded-full border-4 border-white/20 shadow-lg animate-fade-in-up"
                style={{ animationDelay: `${i * 60}ms` }}
              />
            ))}
          </div>
          <div className="text-white/70 text-lg text-center max-w-xl">
            Join a global network of builders, dreamers, and doers. Everyone's
            welcome—bring your ideas and energy!
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="w-full py-20 px-4">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 text-white/90 tracking-tight">
            FAQ
          </h2>
          <div className="space-y-4">
            {faqs.map((f, i) => (
              <details
                key={f.q}
                className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-xl p-6 group animate-fade-in-up"
                style={{ animationDelay: `${i * 80}ms` }}
              >
                <summary className="cursor-pointer text-lg font-semibold text-white/90 group-open:text-fuchsia-400 transition-colors">
                  {f.q}
                </summary>
                <div className="mt-2 text-white/70 text-base">{f.a}</div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Get Started Section */}
      <section className="w-full py-24 px-4 flex flex-col items-center justify-center">
        <div className="max-w-xl mx-auto text-center bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl shadow-xl p-12 animate-fade-in-up hover:scale-105 transition-transform duration-300">
          <h2 className="text-3xl font-bold text-fuchsia-400 mb-4 animate-shimmer bg-gradient-to-r from-blue-400 via-fuchsia-400 to-yellow-300 bg-clip-text text-transparent bg-[length:200%_auto]">
            Ready to experience feeless?
          </h2>
          <p className="text-lg text-white/80 mb-8">
            Jump in, explore, and help shape the future of decentralized value.
            We can't wait to see what you'll build.
          </p>
          <button
            onClick={() => setShowCommunityModal(true)}
            className="inline-block bg-gradient-to-r from-blue-500 via-fuchsia-500 to-yellow-400 text-black px-10 py-4 rounded-full font-bold text-lg shadow-lg hover:scale-105 transition"
          >
            Join the community
          </button>
        </div>
      </section>

      {/* Community Modal */}
      {showCommunityModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm animate-fade-in">
          <div className="bg-black border border-white/20 rounded-2xl shadow-2xl p-8 max-w-md w-full relative animate-scale-in">
            <button
              onClick={() => setShowCommunityModal(false)}
              className="absolute top-4 right-4 text-white/60 hover:text-fuchsia-400 text-2xl font-bold"
              aria-label="Close"
            >
              ×
            </button>
            <h3 className="text-2xl font-bold text-white/90 mb-8 text-center">
              Join the Community
            </h3>
            <div className="flex flex-col gap-6">
              <a
                href="https://discord.gg/tWGnHuVxNE"
                className="flex items-center gap-4 px-6 py-4 rounded-xl bg-white/10 hover:bg-fuchsia-900/20 border border-white/20 transition"
              >
                <span className="text-2xl">💬</span>
                <span className="font-semibold text-white/90">
                  Join the Discord
                </span>
              </a>
              <a
                href="https://x.com/feelessoffical"
                className="flex items-center gap-4 px-6 py-4 rounded-xl bg-white/10 hover:bg-fuchsia-900/20 border border-white/20 transition"
              >
                <span className="text-2xl">🐦</span>
                <span className="font-semibold text-white/90">
                  Join the Twitter
                </span>
              </a>
              {/* <a
                href="#"
                className="flex items-center gap-4 px-6 py-4 rounded-xl bg-white/10 hover:bg-blue-900/20 border border-white/20 transition"
              >
                <span className="text-2xl">🧵</span>
                <span className="font-semibold text-white/90">
                  Bitcointalk Thread
                </span>
              </a> */}
              <a
                href="https://github.com/fee-less"
                className="flex items-center gap-4 px-6 py-4 rounded-xl bg-white/10 hover:bg-yellow-900/20 border border-white/20 transition"
              >
                <span className="text-2xl">💻</span>
                <span className="font-semibold text-white/90">
                  GitHub: Contribute Here
                </span>
              </a>
            </div>
          </div>
        </div>
      )}

      {/* Waitlist / CTA Section */}
      <section
        id="community"
        className="py-24 flex flex-col items-center justify-center"
      >
        <form className="w-full max-w-md mx-auto flex flex-col md:flex-row gap-4 items-center justify-center animate-fade-in-up delay-300">
          <input
            type="email"
            required
            placeholder="Your email address"
            className="flex-1 px-6 py-3 rounded-full bg-white/10 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-fuchsia-400 transition"
          />
          <button
            type="submit"
            className="px-8 py-3 rounded-full bg-gradient-to-r from-blue-500 via-fuchsia-500 to-yellow-400 text-black font-bold shadow-lg hover:scale-105 transition"
          >
            Notify Me
          </button>
        </form>
        <div className="text-white/50 text-sm mt-4">
          No spam. Only the future.
        </div>
      </section>

      {/* Footer (minimal) */}
      <footer className="w-full py-8 flex flex-col items-center gap-2 text-white/40 text-sm">
        <div className="flex gap-6">
          <a
            href="https://github.com/fee-less"
            target="_blank"
            rel="noopener"
            className="hover:text-white/80 transition"
          >
            GitHub
          </a>
          <a
            href="https://x.com/feelessoffical"
            target="_blank"
            rel="noopener"
            className="hover:text-white/80 transition"
          >
            Twitter
          </a>
        </div>
        <span>&copy; {new Date().getFullYear()} Feeless</span>
      </footer>
    </main>
  );
}
