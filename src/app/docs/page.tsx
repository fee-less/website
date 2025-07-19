"use client";
import React, { useState, useEffect } from "react";

// Scroll observer for entrance animations
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

const wizardSteps = [
  {
    label: "Install Miner",
    desc: "Install the Feeless Node package globally (includes the miner utility).",
    code: "npm install -g feeless-node",
    color: "from-blue-400 via-fuchsia-400 to-yellow-300",
  },
  {
    label: "Create Mining Directory",
    desc: "Choose or create a directory for your miner.",
    code: "mkdir ~/feeless-mining\ncd ~/feeless-mining",
    color: "from-yellow-400 via-fuchsia-400 to-blue-400",
  },
  {
    label: "Run the Miner",
    desc: "Start the miner in your mining directory. This will generate a miner.json file.",
    code: "npx feeless-miner",
    color: "from-fuchsia-400 via-blue-400 to-yellow-300",
  },
  {
    label: "Configure miner.json",
    desc: "Edit miner.json to set your node connection and wallet details. Use the wizard below to generate your config.",
    color: "from-blue-400 via-yellow-400 to-fuchsia-400",
    isWizard: true,
  },
  {
    label: "Start Mining!",
    desc: "Once configured, run npx feeless-miner again in your mining directory to start mining.",
    code: "npx feeless-miner",
    color: "from-yellow-400 via-blue-400 to-fuchsia-400",
  },
];

const defaultConfig = {
  wsUrl: "ws://localhost:6061",
  httpUrl: "http://localhost:8000",
  private: "PRIVATE_WALLET_KEY",
  token: ""
};

function ConfigWizardCard() {
  const [config, setConfig] = useState(defaultConfig);
  const [showJson, setShowJson] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setConfig((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="w-full max-w-md min-h-[320px] flex flex-col justify-center scroll-animate opacity-0 translate-y-10 bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl shadow-xl p-8 mx-auto animate-fade-in-up">
      <h3 className="text-xl font-bold mb-4 bg-gradient-to-r from-blue-400 via-fuchsia-400 to-yellow-300 bg-clip-text text-transparent animate-shimmer bg-[length:200%_auto] text-center">
        Miner Config Wizard
      </h3>
      <div className="space-y-4 flex-1 flex flex-col justify-center">
        <div>
          <label className="block text-sm font-medium text-white/80">WebSocket URL</label>
          <input
            className="w-full p-2 rounded bg-black/60 border border-white/10 text-white focus:ring-2 focus:ring-blue-400"
            name="wsUrl"
            value={config.wsUrl}
            onChange={handleChange}
            placeholder="ws://localhost:6061"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-white/80">HTTP URL</label>
          <input
            className="w-full p-2 rounded bg-black/60 border border-white/10 text-white focus:ring-2 focus:ring-fuchsia-400"
            name="httpUrl"
            value={config.httpUrl}
            onChange={handleChange}
            placeholder="http://localhost:8000"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-white/80">Private Wallet Key</label>
          <input
            className="w-full p-2 rounded bg-black/60 border border-white/10 text-white focus:ring-2 focus:ring-yellow-400"
            name="private"
            value={config.private}
            onChange={handleChange}
            placeholder="PRIVATE_WALLET_KEY"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-white/80">Token (optional)</label>
          <input
            className="w-full p-2 rounded bg-black/60 border border-white/10 text-white focus:ring-2 focus:ring-fuchsia-400"
            name="token"
            value={config.token}
            onChange={handleChange}
            placeholder=""
          />
        </div>
        <button
          className="mt-4 px-4 py-2 bg-gradient-to-r from-blue-500 via-fuchsia-500 to-yellow-400 hover:from-blue-600 hover:to-yellow-500 rounded-full text-black font-semibold shadow-lg transition-all"
          onClick={() => setShowJson(true)}
        >
          Generate miner.json
        </button>
        {showJson && (
          <div className="mt-4">
            <label className="block text-sm font-medium text-white/80 mb-1">Your miner.json:</label>
            <pre className="bg-black/80 text-green-400 p-4 rounded-xl overflow-x-auto text-sm border border-white/10">
              {JSON.stringify(config, null, 2)}
            </pre>
            <p className="text-xs text-white/60 mt-2">Copy this and save as <b>miner.json</b> in your mining directory.</p>
          </div>
        )}
      </div>
    </div>
  );
}

const faqs = [
  {
    q: "I see errors about missing config!",
    a: "Ensure miner.json exists and is valid JSON in your mining directory.",
  },
  {
    q: "How do I connect to a remote node?",
    a: "Set wsUrl and httpUrl to your node's addresses in miner.json.",
  },
  {
    q: "Is my private key safe?",
    a: "Never share your private key. Only use it locally in miner.json.",
  },
  {
    q: "How do I mine a specific token?",
    a: "Set the token field in miner.json to the token you want to mine.",
  },
];

export default function DocsPage() {
  useScrollObserver();
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

      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center px-4 py-24 animate-scale-in">
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight leading-tight mb-6 bg-gradient-to-r from-blue-400 via-fuchsia-400 to-yellow-300 bg-clip-text text-transparent animate-shimmer bg-[length:200%_auto]">
          Feeless Miner Setup
        </h1>
        <p className="text-lg md:text-2xl text-white/80 max-w-2xl mx-auto mb-8 animate-fade-in delay-200">
          Get mining in minutes. Follow the steps, use the wizard, and join the next-gen feeless network.
        </p>
      </section>

      {/* Stepper Section - now vertical, centered, equal size */}
      <section className="w-full py-12 px-4 flex flex-col items-center">
        <div className="flex flex-col gap-10 items-center w-full">
          {wizardSteps.map((step, i) => (
            <div
              key={step.label}
              className={`w-full max-w-md min-h-[320px] flex flex-col justify-center scroll-animate opacity-0 translate-y-10 bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl shadow-xl p-8 mx-auto animate-fade-in-up`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div className={`w-12 h-12 flex items-center justify-center rounded-full bg-gradient-to-br ${step.color} text-black font-bold text-2xl mb-2 shadow-lg animate-glow mx-auto`}>
                {i + 1}
              </div>
              <div className="text-lg font-semibold text-white/90 mb-1 text-center">
                {step.label}
              </div>
              <div className="text-white/70 text-base mb-2 text-center">{step.desc}</div>
              {step.code && (
                <pre className="bg-black/80 text-green-400 p-2 rounded text-xs border border-white/10 w-full select-all text-center">
                  {step.code}
                </pre>
              )}
              {step.isWizard && <ConfigWizardCard />}
            </div>
          ))}
        </div>
      </section>
      <div className="flex justify-center w-full">
        <a
          href="/host-how"
          className="inline-block px-8 py-3 rounded-full bg-gradient-to-r from-blue-500 via-fuchsia-500 to-yellow-400 text-black font-bold text-lg shadow-lg hover:scale-105 transition"
        >
          Set up a node
        </a>
      </div>
      {/* FAQ / Troubleshooting */}
      <section className="w-full py-20 px-4">
        <div className="max-w-2xl mx-auto">
          <h2 className="scroll-animate opacity-0 translate-y-10 text-2xl md:text-3xl font-bold text-center mb-8 text-white/90 tracking-tight animate-shimmer bg-gradient-to-r from-blue-400 via-fuchsia-400 to-yellow-300 bg-clip-text text-transparent bg-[length:200%_auto]">
            Troubleshooting & FAQ
          </h2>
          <div className="space-y-4">
            {faqs.map((f, i) => (
              <details
                key={f.q}
                className="scroll-animate opacity-0 translate-y-10 bg-white/10 backdrop-blur-xl border border-white/20 rounded-xl p-6 group animate-fade-in-up"
                style={{ transitionDelay: `${i * 80}ms` }}
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
    </main>
  );
} 