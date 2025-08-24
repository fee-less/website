"use client"
import React, { useState, useEffect } from "react";

// Scroll observer hook
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

const techFeatures = [
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
          d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
        />
      </svg>
    ),
    title: "Lightweight Consensus",
    desc: "Efficient mining with flexible token rewards and dynamic difficulty adjustment.",
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
          d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
        />
      </svg>
    ),
    title: "ECDSA Security",
    desc: "Battle-tested cryptography with secp256k1 signatures and nonce protection.",
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
          d="M13 10V3L4 14h7v7l9-11h-7z"
        />
      </svg>
    ),
    title: "P2P Networking",
    desc: "WebSocket and HTTP-based peer discovery with efficient block propagation.",
  },
  {
    icon: (
      <svg
        className="w-8 h-8 text-green-400"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
    title: "Zero-Fee Validation",
    desc: "Advanced transaction validation without gas fees or friction.",
  },
];

const tokenomicsData = [
  { label: "Total Supply", value: "105,000,000 FLSS", color: "text-blue-400" },
  {
    label: "Genesis Airdrop",
    value: "5,000,000 FLSS",
    color: "text-fuchsia-400",
  },
  {
    label: "Minable Supply",
    value: "100,000,000 FLSS",
    color: "text-yellow-400",
  },
  { label: "Dev Fee", value: "7% per block", color: "text-green-400" },
];

const useCases = [
  {
    icon: "🔥",
    title: "Token Investment Mining",
    desc: "Mine tokens you believe in, creating investment opportunities while securing networks.",
    tech: "Revolutionary minable token system with intrinsic value",
  },
  {
    icon: "🚀",
    title: "Project Bootstrapping",
    desc: "New projects instantly gain value and security through miner adoption.",
    tech: "Miners choose which tokens to mine and accumulate",
  },
  {
    icon: "💎",
    title: "Value-Backed Tokens",
    desc: "Every token has real value backed by mining power and network security.",
    tech: "Mining creates intrinsic value for all tokens",
  },
  {
    icon: "⚡",
    title: "Zero-Fee Ecosystem",
    desc: "Users transact freely while miners earn rewards in their chosen tokens.",
    tech: "Sustainable through flexible mining rewards",
  },
];

const architectureComponents = [
  {
    title: "Node Structure",
    details: [
      "Blockchain ledger (block array)",
      "Mempool for pending transactions",
      "P2P networking layer",
      "WebSocket & HTTP connectivity",
    ],
  },
  {
    title: "Transaction Model",
    details: [
      "ECDSA signatures (secp256k1)",
      "Nonce-based replay protection",
      "Timestamp validation",
      "Custom token support",
    ],
  },
  {
    title: "Mining System",
    details: [
      "Proof-of-Work consensus",
      "Dynamic difficulty adjustment",
      "Flexible token mining",
      "Decreasing reward schedule",
    ],
  },
];

export default function TechPage() {
  const [activeSection, setActiveSection] = useState("overview");

  useScrollObserver();

  // Add smooth scroll
  React.useEffect(() => {
    document.body.classList.add("scroll-smooth");
    return () => document.body.classList.remove("scroll-smooth");
  }, []);

  const scrollToSection = (sectionId: any) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
      setActiveSection(sectionId);
    }
  };

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

      {/* Navbar */}
      <header className="w-full py-6 px-6 flex items-center justify-between animate-slide-down">
        <span className="text-2xl font-extrabold tracking-tight bg-gradient-to-r from-blue-400 via-fuchsia-400 to-yellow-300 bg-clip-text text-transparent animate-shimmer bg-[length:200%_auto]">
          FeeLess Node
        </span>
        <nav className="hidden md:flex gap-8 ml-8">
          <button
            onClick={() => scrollToSection("minable-tokens")}
            className={`hover:text-yellow-400 transition ${
              activeSection === "minable-tokens" ? "text-yellow-400" : ""
            }`}
          >
            Minable Tokens
          </button>
          <button
            onClick={() => scrollToSection("overview")}
            className={`hover:text-fuchsia-400 transition ${
              activeSection === "overview" ? "text-fuchsia-400" : ""
            }`}
          >
            Overview
          </button>
          <button
            onClick={() => scrollToSection("architecture")}
            className={`hover:text-fuchsia-400 transition ${
              activeSection === "architecture" ? "text-fuchsia-400" : ""
            }`}
          >
            Architecture
          </button>
          <button
            onClick={() => scrollToSection("tokenomics")}
            className={`hover:text-fuchsia-400 transition ${
              activeSection === "tokenomics" ? "text-fuchsia-400" : ""
            }`}
          >
            Tokenomics
          </button>
          <button
            onClick={() => scrollToSection("use-cases")}
            className={`hover:text-fuchsia-400 transition ${
              activeSection === "use-cases" ? "text-fuchsia-400" : ""
            }`}
          >
            Use Cases
          </button>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="flex-1 flex flex-col items-center justify-center text-center px-4 animate-scale-in py-20">
        <div className="mb-6 animate-fade-in">
          <span className="inline-block px-6 py-2 rounded-full bg-gradient-to-r from-blue-400/20 to-fuchsia-400/20 border border-blue-400/30 text-blue-300 font-semibold text-sm uppercase tracking-wider">
            🚀 Revolutionary Mining Model
          </span>
        </div>
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-tight mb-8 bg-gradient-to-r from-blue-400 via-fuchsia-400 to-yellow-300 bg-clip-text text-transparent animate-shimmer bg-[length:200%_auto]">
          First Blockchain with
          <br />
          <span className="text-5xl md:text-7xl bg-gradient-to-r from-blue-400 via-fuchsia-400 to-yellow-300 bg-clip-text text-transparent">
            Minable Tokens
          </span>
        </h1>
        <p className="text-lg md:text-xl text-white/80 max-w-3xl mx-auto mb-8 animate-fade-in delay-200">
          Revolutionary architecture where{" "}
          <strong className="text-yellow-300">
            miners choose which tokens to mine
          </strong>{" "}
          — creating intrinsic value, new investment opportunities, and a
          self-sustaining token economy.
        </p>
        <div className="flex items-center gap-8 mb-12 animate-fade-in delay-300">
          <div className="text-center">
            <div className="text-2xl font-bold text-yellow-400">∞</div>
            <div className="text-sm text-white/60">Custom Tokens</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-fuchsia-400">💎</div>
            <div className="text-sm text-white/60">Intrinsic Value</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-blue-400">⚡</div>
            <div className="text-sm text-white/60">Zero Fees</div>
          </div>
        </div>
        <div className="flex gap-4 animate-fade-in delay-400">
          <button
            onClick={() => scrollToSection("minable-tokens")}
            className="px-8 py-3 rounded-full bg-gradient-to-r from-blue-500 via-fuchsia-500 to-yellow-400 text-black font-bold text-lg shadow-xl hover:scale-105 transition-all duration-300"
          >
            Discover Minable Tokens
          </button>
          <button
            onClick={() => scrollToSection("overview")}
            className="px-8 py-3 rounded-full border border-white/20 bg-white/10 backdrop-blur text-white font-bold text-lg shadow-xl hover:scale-105 transition-all duration-300"
          >
            Explore Tech
          </button>
        </div>
      </section>

      {/* Minable Tokens - Revolutionary Feature */}
      <section
        id="minable-tokens"
        className="w-full py-32 px-4 bg-gradient-to-b from-black/80 to-black/40 relative overflow-hidden"
      >
        {/* Additional background effects for this section */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute left-1/4 top-1/4 w-96 h-96 bg-gradient-to-br from-blue-600/30 to-fuchsia-600/30 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute right-1/4 bottom-1/4 w-96 h-96 bg-gradient-to-br from-fuchsia-600/20 to-yellow-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <div className="scroll-animate opacity-0 translate-y-10 inline-block px-8 py-3 rounded-full bg-gradient-to-r from-blue-500/20 to-fuchsia-500/20 border border-blue-400/40 text-blue-300 font-bold text-lg uppercase tracking-wider mb-8">
              🔥 World's First Minable Token System
            </div>
            <h2 className="scroll-animate opacity-0 translate-y-10 text-4xl md:text-6xl font-extrabold text-center mb-8 bg-gradient-to-r from-blue-400 via-fuchsia-400 to-yellow-300 bg-clip-text text-transparent animate-shimmer bg-[length:200%_auto]">
              Choose Your Reward
            </h2>
            <p className="scroll-animate opacity-0 translate-y-10 text-xl md:text-2xl text-white/80 max-w-4xl mx-auto mb-12">
              For the first time in blockchain history,{" "}
              <strong className="text-yellow-300">
                miners decide which tokens to mine
              </strong>
              . This revolutionary approach creates intrinsic value, enables new
              investment strategies, and transforms how token economies work.
            </p>
          </div>

          {/* How It Works */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
            <div className="scroll-animate opacity-0 translate-y-10 bg-gradient-to-br from-blue-900/20 to-fuchsia-900/20 backdrop-blur-xl border border-blue-400/30 rounded-3xl p-8 text-center hover:scale-105 transition-all duration-300">
              <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-br from-blue-400 to-fuchsia-400 flex items-center justify-center text-black text-3xl font-bold shadow-2xl">
                1
              </div>
              <h3 className="text-2xl font-bold text-blue-300 mb-4">
                Mine Any Token
              </h3>
              <p className="text-white/80 text-lg">
                Miners choose between FLSS (native token) or any custom token
                created on the network. Your mining power, your choice.
              </p>
            </div>

            <div
              className="scroll-animate opacity-0 translate-y-10 bg-gradient-to-br from-fuchsia-900/20 to-yellow-900/20 backdrop-blur-xl border border-fuchsia-400/30 rounded-3xl p-8 text-center hover:scale-105 transition-all duration-300"
              style={{ transitionDelay: "100ms" }}
            >
              <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-br from-fuchsia-400 to-yellow-400 flex items-center justify-center text-black text-3xl font-bold shadow-2xl">
                2
              </div>
              <h3 className="text-2xl font-bold text-fuchsia-300 mb-4">
                Earn Rewards
              </h3>
              <p className="text-white/80 text-lg">
                Receive block rewards in your chosen token. Support projects you
                believe in while earning potential returns.
              </p>
            </div>

            <div
              className="scroll-animate opacity-0 translate-y-10 bg-gradient-to-br from-yellow-900/20 to-blue-900/20 backdrop-blur-xl border border-yellow-400/30 rounded-3xl p-8 text-center hover:scale-105 transition-all duration-300"
              style={{ transitionDelay: "200ms" }}
            >
              <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-br from-yellow-400 to-blue-400 flex items-center justify-center text-black text-3xl font-bold shadow-2xl">
                3
              </div>
              <h3 className="text-2xl font-bold text-yellow-300 mb-4">
                Create Value
              </h3>
              <p className="text-white/80 text-lg">
                Your mining gives tokens real, market-driven value. Projects get
                security, miners get investment opportunities.
              </p>
            </div>
          </div>

          {/* Key Benefits */}
          <div className="scroll-animate opacity-0 translate-y-10 bg-gradient-to-r from-blue-900/10 via-fuchsia-900/10 to-yellow-900/10 backdrop-blur-xl border border-gradient-to-r border-blue-400/20 rounded-3xl p-12 mb-20">
            <h3 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-blue-400 to-fuchsia-400 bg-clip-text text-transparent">
              Revolutionary Benefits
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-400 to-fuchsia-400 flex items-center justify-center text-black font-bold text-lg flex-shrink-0">
                    💰
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-blue-300 mb-2">
                      Intrinsic Token Value
                    </h4>
                    <p className="text-white/70">
                      Every token becomes mineable and valuable, backed by real
                      mining power and market demand.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-fuchsia-400 to-yellow-400 flex items-center justify-center text-black font-bold text-lg flex-shrink-0">
                    🎯
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-fuchsia-300 mb-2">
                      Strategic Investment
                    </h4>
                    <p className="text-white/70">
                      Miners can invest in projects they believe in, creating
                      aligned incentives across the ecosystem.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-yellow-400 to-blue-400 flex items-center justify-center text-black font-bold text-lg flex-shrink-0">
                    🚀
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-yellow-300 mb-2">
                      Project Bootstrapping
                    </h4>
                    <p className="text-white/70">
                      New projects can attract miners and build sustainable
                      token economies from day one.
                    </p>
                  </div>
                </div>
              </div>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-400 to-indigo-400 flex items-center justify-center text-black font-bold text-lg flex-shrink-0">
                    🌐
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-pink-300 mb-2">
                      Network Effects
                    </h4>
                    <p className="text-white/70">
                      More valuable tokens attract more miners, creating
                      stronger network security and adoption.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-400 to-indigo-400 flex items-center justify-center text-black font-bold text-lg flex-shrink-0">
                    ⚡
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-purple-300 mb-2">
                      Zero Friction
                    </h4>
                    <p className="text-white/70">
                      No transaction fees for users, while miners earn rewards
                      in their preferred tokens.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-indigo-400 to-blue-400 flex items-center justify-center text-black font-bold text-lg flex-shrink-0">
                    🔮
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-indigo-300 mb-2">
                      Future-Proof
                    </h4>
                    <p className="text-white/70">
                      Adaptable system that evolves with new tokens and use
                      cases as the ecosystem grows.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Example Scenario */}
          <div className="scroll-animate opacity-0 translate-y-10 bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-8">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-white/90 mb-4">
                Real-World Example
              </h3>
              <p className="text-white/70 text-lg">
                See how minable tokens transform project economics
              </p>
            </div>
            <div className="bg-black/40 rounded-2xl p-6 font-mono text-sm">
              <div className="text-green-400 mb-4">
                // A gaming project launches $GAME token
              </div>
              <div className="text-white/80 mb-2">
                1. Project creates $GAME token on FeeLess Node
              </div>
              <div className="text-white/80 mb-2">
                2. Miners choose to mine $GAME instead of FLSS
              </div>
              <div className="text-white/80 mb-2">
                3. $GAME gains intrinsic value from mining power
              </div>
              <div className="text-white/80 mb-2">
                4. Project gets network security + token distribution
              </div>
              <div className="text-white/80 mb-4">
                5. Miners earn $GAME rewards + potential upside
              </div>
              <div className="text-yellow-400">
                // Result: Win-win ecosystem with aligned incentives
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="overview" className="w-full py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="scroll-animate opacity-0 translate-y-10 text-3xl md:text-4xl font-bold text-center mb-16 text-white/90 tracking-tight">
            Technical Overview
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {techFeatures.map((feature, i) => (
              <div
                key={feature.title}
                className="scroll-animate opacity-0 translate-y-10 bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-8 hover:scale-105 transition-all duration-300"
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0 w-14 h-14 rounded-full flex items-center justify-center bg-white/10 backdrop-blur border border-white/20 shadow-lg animate-glow">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white/90 mb-3">
                      {feature.title}
                    </h3>
                    <p className="text-white/70 leading-relaxed">
                      {feature.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Architecture Deep Dive */}
      <section
        id="architecture"
        className="w-full py-24 px-4 bg-gradient-to-b from-black/0 to-black/40"
      >
        <div className="max-w-6xl mx-auto">
          <h2 className="scroll-animate opacity-0 translate-y-10 text-3xl md:text-4xl font-bold text-center mb-16 text-white/90 tracking-tight">
            Architecture Deep Dive
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {architectureComponents.map((component, i) => (
              <div
                key={component.title}
                className="scroll-animate opacity-0 translate-y-10 bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-8 hover:scale-105 transition-all duration-300"
                style={{ transitionDelay: `${i * 150}ms` }}
              >
                <h3 className="text-xl font-bold text-white/90 mb-6 bg-gradient-to-r from-blue-400 via-fuchsia-400 to-yellow-300 bg-clip-text text-transparent">
                  {component.title}
                </h3>
                <ul className="space-y-3">
                  {component.details.map((detail, j) => (
                    <li
                      key={j}
                      className="flex items-center gap-3 text-white/70"
                    >
                      <div className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-400 to-fuchsia-400 flex-shrink-0"></div>
                      <span className="text-sm">{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tokenomics */}
      <section id="tokenomics" className="w-full py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="scroll-animate opacity-0 translate-y-10 text-3xl md:text-4xl font-bold text-center mb-16 text-white/90 tracking-tight">
            Tokenomics & Economics
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {tokenomicsData.map((item, i) => (
              <div
                key={item.label}
                className="scroll-animate opacity-0 translate-y-10 bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-6 text-center hover:scale-105 transition-all duration-300"
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <div className={`text-2xl font-bold ${item.color} mb-2`}>
                  {item.value}
                </div>
                <div className="text-white/70 text-sm">{item.label}</div>
              </div>
            ))}
          </div>

          <div className="scroll-animate opacity-0 translate-y-10 bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-white/90 mb-6 text-center">
              Minable Token Economics
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-lg font-semibold text-yellow-400 mb-4">
                  🔥 Revolutionary Mining Model
                </h4>
                <ul className="space-y-2 text-white/70">
                  <li>
                    • <strong>Miners choose their reward token</strong> - FLSS
                    or custom tokens
                  </li>
                  <li>
                    • <strong>Intrinsic value creation</strong> - tokens backed
                    by real mining power
                  </li>
                  <li>
                    • <strong>Investment opportunities</strong> - mine tokens
                    you believe in
                  </li>
                  <li>
                    • <strong>Network effects</strong> - valuable tokens attract
                    more miners
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-orange-400 mb-4">
                  💰 Economic Benefits
                </h4>
                <ul className="space-y-2 text-white/70">
                  <li>
                    • <strong>Project bootstrapping</strong> - new tokens get
                    instant value
                  </li>
                  <li>
                    • <strong>Aligned incentives</strong> - miners support
                    projects they mine
                  </li>
                  <li>
                    • <strong>Market-driven security</strong> - valuable tokens
                    get more protection
                  </li>
                  <li>
                    • <strong>Zero user fees</strong> - sustainable through
                    mining rewards
                  </li>
                </ul>
              </div>
            </div>
            <div className="mt-8 p-6 bg-gradient-to-r from-blue-900/20 to-fuchsia-900/20 rounded-xl border border-blue-400/20">
              <div className="text-center">
                <h4 className="text-xl font-bold text-yellow-300 mb-2">
                  🎯 Game-Changing Innovation
                </h4>
                <p className="text-white/80 text-lg">
                  The first blockchain where{" "}
                  <strong className="text-yellow-300">
                    every token can be mined
                  </strong>
                  , creating a sustainable ecosystem where value flows to both
                  miners and token holders.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section
        id="use-cases"
        className="w-full py-24 px-4 bg-gradient-to-b from-black/40 to-black/0"
      >
        <div className="max-w-6xl mx-auto">
          <h2 className="scroll-animate opacity-0 translate-y-10 text-3xl md:text-4xl font-bold text-center mb-16 text-white/90 tracking-tight">
            Real-World Applications
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {useCases.map((useCase, i) => (
              <div
                key={useCase.title}
                className="scroll-animate opacity-0 translate-y-10 bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-8 hover:scale-105 transition-all duration-300"
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <div className="flex items-start gap-6">
                  <div className="text-4xl mb-4 animate-wave">
                    {useCase.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white/90 mb-3">
                      {useCase.title}
                    </h3>
                    <p className="text-white/70 mb-4">{useCase.desc}</p>
                    <div className="text-sm text-fuchsia-400 font-medium">
                      {useCase.tech}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Roadmap */}
      <section className="w-full py-24 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="scroll-animate opacity-0 translate-y-10 text-3xl md:text-4xl font-bold text-center mb-16 text-white/90 tracking-tight">
            Development Roadmap
          </h2>
          <div className="scroll-animate opacity-0 translate-y-10 bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold text-green-400 mb-4">
                  MVP (Current)
                </h3>
                <ul className="space-y-2 text-white/70">
                  <li>• Core protocol implementation</li>
                  <li>• Basic wallet functionality</li>
                  <li>• Block explorer</li>
                  <li>• P2P networking</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-bold text-yellow-400 mb-4">
                  Q4 2025
                </h3>
                <ul className="space-y-2 text-white/70">
                  <li>• Mobile wallet release</li>
                  <li>• Exchange integrations</li>
                  <li>• Enhanced mining tools</li>
                  <li>• Developer documentation</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="w-full py-24 px-4 flex flex-col items-center justify-center">
        <div className="max-w-xl mx-auto text-center bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl shadow-xl p-12 animate-fade-in-up hover:scale-105 transition-transform duration-300">
          <h2 className="text-3xl font-bold mb-4 animate-shimmer bg-gradient-to-r from-blue-400 via-fuchsia-400 to-yellow-300 bg-clip-text text-transparent bg-[length:200%_auto]">
            Ready to Build the Future?
          </h2>
          <p className="text-lg text-white/80 mb-8">
            Join our community of developers, miners, and visionaries building
            the next generation of FeeLess blockchain technology.
          </p>
          <div className="flex gap-4 justify-center">
            <button className="bg-gradient-to-r from-blue-500 via-fuchsia-500 to-yellow-400 text-black px-8 py-3 rounded-full font-bold text-lg shadow-lg hover:scale-105 transition">
              View on GitHub
            </button>
            <button className="border border-white/20 bg-white/10 backdrop-blur text-white px-8 py-3 rounded-full font-bold text-lg shadow-lg hover:scale-105 transition">
              Join Discord
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full py-8 flex flex-col items-center gap-2 text-white/40 text-sm">
        <div className="flex gap-6">
          <a href="#" className="hover:text-white/80 transition">
            GitHub
          </a>
          <a href="#" className="hover:text-white/80 transition">
            Discord
          </a>
          <a href="#" className="hover:text-white/80 transition">
            Whitepaper
          </a>
        </div>
        <span>&copy; {new Date().getFullYear()} FeeLess Node</span>
      </footer>

      <style jsx>{`
        @keyframes shimmer {
          0% {
            background-position: -200% 0;
          }
          100% {
            background-position: 200% 0;
          }
        }

        @keyframes breathe {
          0%,
          100% {
            transform: scale(1) rotate(0deg);
          }
          50% {
            transform: scale(1.05) rotate(1deg);
          }
        }

        @keyframes float {
          0%,
          100% {
            transform: translateY(0) rotate(0deg);
          }
          50% {
            transform: translateY(-10px) rotate(1deg);
          }
        }

        @keyframes glow {
          0%,
          100% {
            box-shadow: 0 0 20px rgba(255, 255, 255, 0.1);
          }
          50% {
            box-shadow: 0 0 30px rgba(255, 255, 255, 0.2);
          }
        }

        @keyframes wave {
          0%,
          100% {
            transform: rotate(0deg);
          }
          25% {
            transform: rotate(5deg);
          }
          75% {
            transform: rotate(-5deg);
          }
        }

        @keyframes parallax-fast {
          from {
            transform: translateY(20px);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }

        @keyframes slide-down {
          from {
            transform: translateY(-20px);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }

        @keyframes scale-in {
          from {
            transform: scale(0.9);
            opacity: 0;
          }
          to {
            transform: scale(1);
            opacity: 1;
          }
        }

        @keyframes fade-in {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes fade-in-up {
          from {
            transform: translateY(20px);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }

        .animate-shimmer {
          animation: shimmer 4s infinite linear;
        }
        .animate-breathe {
          animation: breathe 8s infinite ease-in-out;
        }
        .animate-float {
          animation: float 6s infinite ease-in-out;
        }
        .animate-glow {
          animation: glow 2s infinite ease-in-out;
        }
        .animate-wave {
          animation: wave 2s infinite ease-in-out;
        }
        .animate-parallax-fast {
          animation: parallax-fast 0.6s ease-out;
        }
        .animate-slide-down {
          animation: slide-down 0.6s ease-out;
        }
        .animate-scale-in {
          animation: scale-in 0.8s ease-out;
        }
        .animate-fade-in {
          animation: fade-in 0.6s ease-out;
        }
        .animate-fade-in-up {
          animation: fade-in-up 0.6s ease-out;
        }

        .delay-200 {
          animation-delay: 200ms;
        }
        .delay-300 {
          animation-delay: 300ms;
        }
      `}</style>
    </main>
  );
}
