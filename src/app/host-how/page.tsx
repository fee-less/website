"use client";
import React from "react";

function CodeBlock({ children }: { children: React.ReactNode }) {
  return (
    <pre className="bg-black/80 text-green-400 p-4 rounded-xl overflow-x-auto text-sm border border-white/10 my-4">
      {children}
    </pre>
  );
}

export default function HostNodeHowPage() {
  return (
    <main className="relative min-h-screen flex flex-col bg-black text-white overflow-hidden px-4 pb-16">
      <div className="max-w-2xl mx-auto mt-16">
        <h1 className="text-4xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-fuchsia-400 to-yellow-300 bg-clip-text text-transparent animate-shimmer bg-[length:200%_auto]">
          How to Host a Feeless Node
        </h1>
        <p className="text-lg mb-8 text-white/80">
          This guide walks you through installing and running a Feeless node on your own server or computer. You'll be up and running in minutes.
        </p>
        <ol className="list-decimal ml-6 space-y-8 text-white/90">
          <li>
            <h2 className="text-2xl font-semibold mb-2 text-fuchsia-400">Install Feeless Node Globally</h2>
            <p>Install the node package globally using npm:</p>
            <CodeBlock>npm install -g feeless-node</CodeBlock>
            <p className="text-xs text-white/60">(You may need to use <b>sudo</b> on Linux/Mac.)</p>
          </li>
          <li>
            <h2 className="text-2xl font-semibold mb-2 text-yellow-400">Create a Node Directory</h2>
            <p>Choose or create a directory for your node data (e.g. <code>~/feeless-node</code>):</p>
            <CodeBlock>{`mkdir ~/feeless-node
cd ~/feeless-node`}</CodeBlock>
          </li>
          <li>
            <h2 className="text-2xl font-semibold mb-2 text-blue-400">Run the Node</h2>
            <p>Start the node in your chosen directory:</p>
            <CodeBlock>npx feeless-node</CodeBlock>
            <p className="text-white/70 mt-2">The node will sync blocks and start serving the network. Leave this process running to keep your node online.</p>
          </li>
          <li>
            <h2 className="text-2xl font-semibold mb-2 text-yellow-400">Change Sync Peer (WS & HTTP)</h2>
            <p>To sync from a different node, edit the <code>.env</code> file in your node directory. Set <b>PEER</b> (WebSocket) and <b>PEER_HTTP</b> (HTTP) to the desired node addresses:</p>
            <CodeBlock>{`PEER=ws://othernode.example.com:6061
PEER_HTTP=http://othernode.example.com:8000`}</CodeBlock>
            <p className="text-white/70 mt-2">Restart your node after changing these values to sync from the new peer.</p>
          </li>
          <li>
            <h2 className="text-2xl font-semibold mb-2 text-green-400">Access the Node API</h2>
            <p>By default, the node exposes an HTTP API on <code>http://localhost:8000</code>. You can query block height, mempool, balances, and more.</p>
            <CodeBlock>curl http://localhost:8000/height</CodeBlock>
          </li>
          <li>
            <h2 className="text-2xl font-semibold mb-2 text-fuchsia-400">Troubleshooting</h2>
            <ul className="list-disc ml-6 text-white/80 space-y-1">
              <li>If you see errors about missing dependencies, ensure you have Node.js and npm installed.</li>
              <li>If you need to restart the node, simply run <code>npx feeless-node</code> again in your node directory.</li>
              <li>For advanced configuration, see the <code>.env</code> file generated in your node directory.</li>
            </ul>
          </li>
        </ol>
        <div className="mt-12 text-center">
          <a
            href="/dev-docs"
            className="inline-block px-8 py-3 rounded-full bg-gradient-to-r from-blue-500 via-fuchsia-500 to-yellow-400 text-black font-bold text-lg shadow-lg hover:scale-105 transition"
          >
            Developer Docs
          </a>
        </div>
      </div>
    </main>
  );
} 