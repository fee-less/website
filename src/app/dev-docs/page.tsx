"use client";
import React from "react";

const navSections = [
  { id: "feeless-utils", label: "feeless-utils" },
  { id: "feeless-utils-types", label: "Types" },
  { id: "feeless-utils-functions", label: "Functions" },
  { id: "feeless-utils-class", label: "FeelessClient" },
  { id: "feeless-node", label: "feeless-node" },
  { id: "feeless-node-cli", label: "CLI" },
  { id: "feeless-node-api", label: "HTTP API" },
  { id: "feeless-node-arch", label: "Architecture" },
];

function SideNav() {
  return (
    <nav className="hidden lg:block fixed left-0 top-24 w-64 px-4">
      <div className="sticky top-24">
        <ul className="space-y-2 text-sm">
          {navSections.map((s) => (
            <li key={s.id}>
              <a
                href={`#${s.id}`}
                className="block py-1 px-2 rounded hover:bg-white/10 text-white/70 hover:text-fuchsia-400 transition"
              >
                {s.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

function SectionHeading({ id, children }: { id: string; children: React.ReactNode }) {
  return (
    <h2
      id={id}
      className="scroll-mt-32 text-2xl md:text-3xl font-bold mb-6 text-white border-b border-white/10 pt-12 pb-2"
    >
      {children}
    </h2>
  );
}

function SubHeading({ id, children }: { id: string; children: React.ReactNode }) {
  return (
    <h3 id={id} className="scroll-mt-32 text-xl font-semibold mt-10 mb-2 text-fuchsia-400">
      {children}
    </h3>
  );
}

function Signature({ children }: { children: React.ReactNode }) {
  return <div className="font-mono text-base bg-black/80 text-blue-300 px-3 py-2 rounded mb-2 border border-white/10 inline-block">{children}</div>;
}

function ParamTable({ params }: { params: { name: string; type: string; desc: string }[] }) {
  return (
    <table className="w-full text-sm mb-4 border-separate border-spacing-y-1">
      <thead>
        <tr className="text-white/70">
          <th className="text-left font-semibold">Name</th>
          <th className="text-left font-semibold">Type</th>
          <th className="text-left font-semibold">Description</th>
        </tr>
      </thead>
      <tbody>
        {params.map((p) => (
          <tr key={p.name} className="bg-white/5">
            <td className="font-mono px-2 py-1 text-blue-200">{p.name}</td>
            <td className="font-mono px-2 py-1 text-yellow-200">{p.type}</td>
            <td className="px-2 py-1 text-white/80">{p.desc}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

function ReturnType({ type }: { type: string }) {
  return <div className="text-sm text-white/60 mb-2">Returns: <span className="font-mono text-yellow-200">{type}</span></div>;
}

function Example({ children }: { children: React.ReactNode }) {
  return <pre className="bg-black/80 text-green-400 p-4 rounded-xl overflow-x-auto text-sm border border-white/10 my-2">{children}</pre>;
}

function EndpointTable({ endpoints }: { endpoints: { method: string; path: string; desc: string }[] }) {
  return (
    <table className="w-full text-sm mb-8 border-separate border-spacing-y-1">
      <thead>
        <tr className="text-white/70">
          <th className="text-left font-semibold">Method</th>
          <th className="text-left font-semibold">Path</th>
          <th className="text-left font-semibold">Description</th>
        </tr>
      </thead>
      <tbody>
        {endpoints.map((e) => (
          <tr key={e.path} className="bg-white/5">
            <td className="font-mono px-2 py-1 text-blue-200">{e.method}</td>
            <td className="font-mono px-2 py-1 text-yellow-200">{e.path}</td>
            <td className="px-2 py-1 text-white/80">{e.desc}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default function DevDocsPage() {
  return (
    <main className="relative min-h-screen flex bg-black text-white overflow-x-hidden">
      <SideNav />
      <div className="flex-1 max-w-6xl mx-auto px-4 md:px-12 py-24 lg:pl-72">
        <h1 className="text-4xl font-extrabold mb-10 text-center text-white">FeeLess Developer Reference</h1>

        {/* feeless-utils */}
        <SectionHeading id="feeless-utils">feeless-utils</SectionHeading>
        <p className="mb-8 text-white/80">Core utility and type library for FeeLess. Provides cryptography, types, reward/difficulty calculations, and the <span className="font-mono">FeelessClient</span> for node interaction.</p>

        {/* Types */}
        <SectionHeading id="feeless-utils-types">Types</SectionHeading>
        <SubHeading id="type-Transaction">Transaction</SubHeading>
        <Signature>{`type Transaction = { sender: string; receiver: string; amount: number; signature: string; nonce: number; timestamp: number; token?: string; mint?: TokenMint; }`}</Signature>
        <p className="mb-2 text-white/70">A transaction on the FeeLess network.</p>
        <ParamTable params={[
          { name: "sender", type: "string", desc: "Sender public key (hex)" },
          { name: "receiver", type: "string", desc: "Receiver public key (hex)" },
          { name: "amount", type: "number", desc: "Amount in fPoints" },
          { name: "signature", type: "string", desc: "ECDSA signature" },
          { name: "nonce", type: "number", desc: "Unique per sender" },
          { name: "timestamp", type: "number", desc: "Unix ms" },
          { name: "token", type: "string?", desc: "Token symbol (optional)" },
          { name: "mint", type: "TokenMint?", desc: "Minting info (optional)" },
        ]} />

        <SubHeading id="type-Block">Block</SubHeading>
        <Signature>{`type Block = { timestamp: number; transactions: Transaction[]; prev_hash: string; nonce: number; signature: string; proposer: string; hash: string; }`}</Signature>
        <p className="mb-2 text-white/70">A block in the FeeLess blockchain.</p>
        <ParamTable params={[
          { name: "timestamp", type: "number", desc: "Unix ms" },
          { name: "transactions", type: "Transaction[]", desc: "Block transactions" },
          { name: "prev_hash", type: "string", desc: "Previous block hash" },
          { name: "nonce", type: "number", desc: "Proof-of-work nonce" },
          { name: "signature", type: "string", desc: "Block signature" },
          { name: "proposer", type: "string", desc: "Block proposer public key" },
          { name: "hash", type: "string", desc: "Block hash" },
        ]} />

        <SubHeading id="type-TokenMint">TokenMint</SubHeading>
        <Signature>{`type TokenMint = { miningReward?: number; airdrop: number; token: string; }`}</Signature>
        <p className="mb-2 text-white/70">Token minting info for custom tokens.</p>
        <ParamTable params={[
          { name: "miningReward", type: "number?", desc: "Mining reward for this token" },
          { name: "airdrop", type: "number", desc: "Airdrop amount" },
          { name: "token", type: "string", desc: "Token symbol" },
        ]} />

        <SubHeading id="type-EventPayload">EventPayload</SubHeading>
        <Signature>{`type EventPayload = { event: "tx" | "block"; data: any; }`}</Signature>
        <p className="mb-2 text-white/70">WebSocket event payload for blocks and transactions.</p>
        <ParamTable params={[
          { name: "event", type: '"tx" | "block"', desc: "Event type" },
          { name: "data", type: "any", desc: "Event data" },
        ]} />

        {/* Functions */}
        <SectionHeading id="feeless-utils-functions">Functions</SectionHeading>
        <SubHeading id="fn-FLSStoFPoints">FLSStoFPoints</SubHeading>
        <Signature>{`FLSStoFPoints(flss: number): number`}</Signature>
        <p className="mb-2 text-white/70">Convert FLSS to fPoints (integer).</p>
        <ParamTable params={[{ name: "flss", type: "number", desc: "FLSS amount" }]} />
        <ReturnType type="number" />

        <SubHeading id="fn-fPointsToFLSS">fPointsToFLSS</SubHeading>
        <Signature>{`fPointsToFLSS(fPoints: number): number`}</Signature>
        <p className="mb-2 text-white/70">Convert fPoints to FLSS (float).</p>
        <ParamTable params={[{ name: "fPoints", type: "number", desc: "fPoints amount" }]} />
        <ReturnType type="number" />

        <SubHeading id="fn-calculateReward">calculateReward</SubHeading>
        <Signature>{`calculateReward(blockHeight: number): number`}</Signature>
        <p className="mb-2 text-white/70">Get block reward for a given height.</p>
        <ParamTable params={[{ name: "blockHeight", type: "number", desc: "Block height" }]} />
        <ReturnType type="number" />

        <SubHeading id="fn-getDiff">getDiff</SubHeading>
        <Signature>{`getDiff(blocks: Block[]): bigint`}</Signature>
        <p className="mb-2 text-white/70">Calculate mining difficulty from block timestamps.</p>
        <ParamTable params={[{ name: "blocks", type: "Block[]", desc: "Array of blocks" }]} />
        <ReturnType type="bigint" />

        <SubHeading id="fn-randomKeyPair">randomKeyPair</SubHeading>
        <Signature>{`randomKeyPair(): { pub: string; priv: string }`}</Signature>
        <p className="mb-2 text-white/70">Generate a new secp256k1 keypair.</p>
        <ReturnType type="{ pub: string; priv: string }" />

        <SubHeading id="fn-getPublicKey">getPublicKey</SubHeading>
        <Signature>{`getPublicKey(priv: string): string`}</Signature>
        <p className="mb-2 text-white/70">Get public key from private key.</p>
        <ParamTable params={[{ name: "priv", type: "string", desc: "Private key (hex)" }]} />
        <ReturnType type="string" />

        <SubHeading id="fn-calculateMintFee">calculateMintFee</SubHeading>
        <Signature>{`calculateMintFee(height: number, mints: number): number`}</Signature>
        <p className="mb-2 text-white/70">Calculate dynamic minting fee based on recent minting activity.</p>
        <ParamTable params={[
          { name: "height", type: "number", desc: "Current block height" },
          { name: "mints", type: "number", desc: "Number of minted tokens" },
        ]} />
        <ReturnType type="number" />

        <SubHeading id="fn-hashArgon">hashArgon</SubHeading>
        <Signature>{`hashArgon(msg: string): Promise<bigint>`}</Signature>
        <p className="mb-2 text-white/70">Argon2 hash (Node.js only).</p>
        <ParamTable params={[{ name: "msg", type: "string", desc: "Message to hash" }]} />
        <ReturnType type="Promise<bigint>" />

        {/* Class: FeelessClient */}
        <SectionHeading id="feeless-utils-class">Class: FeelessClient</SectionHeading>
        <Signature>{`new FeelessClient(wsUrl: string, httpUrl: string, privateKey: string)`}</Signature>
        <p className="mb-2 text-white/70">WebSocket+HTTP client for interacting with a FeeLess node.</p>
        <SubHeading id="method-init">init()</SubHeading>
        <Signature>{`init(): Promise<boolean>`}</Signature>
        <p className="mb-2 text-white/70">Connect and initialize client.</p>
        <ReturnType type="Promise<boolean>" />
        <SubHeading id="method-closeClient">closeClient()</SubHeading>
        <Signature>{`closeClient(): void`}</Signature>
        <p className="mb-2 text-white/70">Close the WebSocket connection.</p>
        <ReturnType type="void" />
        <SubHeading id="method-getPublic">getPublic()</SubHeading>
        <Signature>{`getPublic(): string`}</Signature>
        <p className="mb-2 text-white/70">Get public key.</p>
        <ReturnType type="string" />
        <SubHeading id="method-getPrivate">getPrivate()</SubHeading>
        <Signature>{`getPrivate(): string`}</Signature>
        <p className="mb-2 text-white/70">Get private key.</p>
        <ReturnType type="string" />
        <SubHeading id="method-signMessage">signMessage()</SubHeading>
        <Signature>{`signMessage(msg: string): string`}</Signature>
        <p className="mb-2 text-white/70">Sign a message with the private key.</p>
        <ParamTable params={[{ name: "msg", type: "string", desc: "Message to sign" }]} />
        <ReturnType type="string" />
        <SubHeading id="method-pollBalance">pollBalance()</SubHeading>
        <Signature>{`pollBalance(token?: string, includeMempool?: boolean): Promise<number>`}</Signature>
        <p className="mb-2 text-white/70">Get balance for the current wallet.</p>
        <ParamTable params={[
          { name: "token", type: "string?", desc: "Token symbol (optional)" },
          { name: "includeMempool", type: "boolean?", desc: "Include mempool (optional)" },
        ]} />
        <ReturnType type="Promise<number>" />
        <SubHeading id="method-getBlockHeight">getBlockHeight()</SubHeading>
        <Signature>{`getBlockHeight(): Promise<number>`}</Signature>
        <p className="mb-2 text-white/70">Get current block height.</p>
        <ReturnType type="Promise<number>" />
        <SubHeading id="method-getDiff">getDiff()</SubHeading>
        <Signature>{`getDiff(): Promise<bigint>`}</Signature>
        <p className="mb-2 text-white/70">Get current mining difficulty.</p>
        <ReturnType type="Promise<bigint>" />
        <SubHeading id="method-getBlock">getBlock()</SubHeading>
        <Signature>{`getBlock(height: number): Promise<Block>`}</Signature>
        <p className="mb-2 text-white/70">Get block by height.</p>
        <ParamTable params={[{ name: "height", type: "number", desc: "Block height" }]} />
        <ReturnType type="Promise<Block>" />
        <SubHeading id="method-getMempool">getMempool()</SubHeading>
        <Signature>{`getMempool(): Promise<Transaction[]>`}</Signature>
        <p className="mb-2 text-white/70">Get mempool transactions.</p>
        <ReturnType type="Promise<Transaction[]>" />
        <SubHeading id="method-getTokens">getTokens()</SubHeading>
        <Signature>{`getTokens(): Promise<string[]>`}</Signature>
        <p className="mb-2 text-white/70">Get tokens owned by this wallet.</p>
        <ReturnType type="Promise<string[]>" />
        <SubHeading id="method-getTokenInfo">getTokenInfo()</SubHeading>
        <Signature>{`getTokenInfo(token: string): Promise<MintedTokenEntry>`}</Signature>
        <p className="mb-2 text-white/70">Get info for a token.</p>
        <ParamTable params={[{ name: "token", type: "string", desc: "Token symbol" }]} />
        <ReturnType type="Promise<MintedTokenEntry>" />
        <SubHeading id="method-getTokenInfoByI">getTokenInfoByI()</SubHeading>
        <Signature>{`getTokenInfoByI(i: number): Promise<MintedTokenEntry>`}</Signature>
        <p className="mb-2 text-white/70">Get token info by index.</p>
        <ParamTable params={[{ name: "i", type: "number", desc: "Token index" }]} />
        <ReturnType type="Promise<MintedTokenEntry>" />
        <SubHeading id="method-getTokenCount">getTokenCount()</SubHeading>
        <Signature>{`getTokenCount(): Promise<number>`}</Signature>
        <p className="mb-2 text-white/70">Get total number of tokens.</p>
        <ReturnType type="Promise<number>" />
        <SubHeading id="method-getMintFee">getMintFee()</SubHeading>
        <Signature>{`getMintFee(): Promise<number>`}</Signature>
        <p className="mb-2 text-white/70">Get current minting fee.</p>
        <ReturnType type="Promise<number>" />
        <SubHeading id="method-placeTX">placeTX()</SubHeading>
        <Signature>{`placeTX(receiver: string, amountFPoints: number, token?: string): Promise<boolean>`}</Signature>
        <p className="mb-2 text-white/70">Send a transaction.</p>
        <ParamTable params={[
          { name: "receiver", type: "string", desc: "Receiver public key" },
          { name: "amountFPoints", type: "number", desc: "Amount in fPoints" },
          { name: "token", type: "string?", desc: "Token symbol (optional)" },
        ]} />
        <ReturnType type="Promise<boolean>" />
        <SubHeading id="method-submitBlock">submitBlock()</SubHeading>
        <Signature>{`submitBlock(block: Block): Promise<boolean>`}</Signature>
        <p className="mb-2 text-white/70">Submit a block.</p>
        <ParamTable params={[{ name: "block", type: "Block", desc: "Block to submit" }]} />
        <ReturnType type="Promise<boolean>" />
        <SubHeading id="method-mintToken">mintToken()</SubHeading>
        <Signature>{`mintToken(tokenMint: TokenMint): Promise<boolean>`}</Signature>
        <p className="mb-2 text-white/70">Mint a new token.</p>
        <ParamTable params={[{ name: "tokenMint", type: "TokenMint", desc: "Token minting info" }]} />
        <ReturnType type="Promise<boolean>" />
        <SubHeading id="method-getHistory">getHistory()</SubHeading>
        <Signature>{`getHistory(): Promise<TransactionHistory[]>`}</Signature>
        <p className="mb-2 text-white/70">Get wallet transaction history.</p>
        <ReturnType type="Promise<TransactionHistory[]>" />
        <SubHeading id="method-searchBlockByHash">searchBlockByHash()</SubHeading>
        <Signature>{`searchBlockByHash(hash: string): Promise<SearchBlockResult>`}</Signature>
        <p className="mb-2 text-white/70">Search for a block by hash.</p>
        <ParamTable params={[{ name: "hash", type: "string", desc: "Block hash" }]} />
        <ReturnType type="Promise<SearchBlockResult>" />
        <SubHeading id="method-searchTransaction">searchTransaction()</SubHeading>
        <Signature>{`searchTransaction(query: string): Promise<SearchResults>`}</Signature>
        <p className="mb-2 text-white/70">Search for a transaction.</p>
        <ParamTable params={[{ name: "query", type: "string", desc: "Signature, sender, or receiver" }]} />
        <ReturnType type="Promise<SearchResults>" />
        <SubHeading id="method-getAddressHistory">getAddressHistory()</SubHeading>
        <Signature>{`getAddressHistory(address: string): Promise<TransactionHistory[]>`}</Signature>
        <p className="mb-2 text-white/70">Get history for any address.</p>
        <ParamTable params={[{ name: "address", type: "string", desc: "Address to query" }]} />
        <ReturnType type="Promise<TransactionHistory[]>" />

        {/* feeless-node */}
        <SectionHeading id="feeless-node">feeless-node</SectionHeading>
        <p className="mb-8 text-white/80">Reference implementation of the FeeLess protocol. Provides a full node, mining, P2P, HTTP API, and consensus logic.</p>

        <SectionHeading id="feeless-node-cli">CLI</SectionHeading>
        <Signature>{`npm install -g feeless-node`}</Signature>
        <Signature>{`npx feeless-node`}</Signature>
        <Signature>{`npx feeless-miner`}</Signature>
        <p className="mb-8 text-white/70">Install globally, then run the node or miner from any directory. See <span className="font-mono">miner.json</span> for miner config.</p>

        <SectionHeading id="feeless-node-api">HTTP API</SectionHeading>
        <EndpointTable endpoints={[
          { method: "GET", path: "/block/:height", desc: "Get block by height" },
          { method: "GET", path: "/height", desc: "Get current block height" },
          { method: "GET", path: "/mempool", desc: "Get mempool transactions" },
          { method: "GET", path: "/diff", desc: "Get current mining difficulty" },
          { method: "GET", path: "/mint-fee", desc: "Get current minting fee" },
          { method: "GET", path: "/reward", desc: "Get current block reward" },
          { method: "GET", path: "/balance/:addr", desc: "Get balance for address" },
          { method: "GET", path: "/balance-mempool/:addr", desc: "Get balance (including mempool)" },
          { method: "GET", path: "/tokens/:addr", desc: "Get tokens owned by address" },
          { method: "GET", path: "/token-info/:token", desc: "Get info for a token" },
          { method: "GET", path: "/token-count", desc: "Get total number of tokens" },
          { method: "GET", path: "/token/:i", desc: "Get token info by index" },
          { method: "GET", path: "/history/:addr", desc: "Get transaction history for address" },
          { method: "GET", path: "/search-blocks/:hash", desc: "Search for a block by hash" },
          { method: "GET", path: "/search-tx/:query", desc: "Search for a transaction" },
        ]} />

        <SectionHeading id="feeless-node-arch">Architecture</SectionHeading>
        <ul className="list-disc ml-8 mb-8 text-white/80 space-y-2">
          <li><b>Blockchain</b>: Handles blocks, mempool, validation, balances, and consensus.</li>
          <li><b>P2PNetwork</b>: WebSocket-based peer-to-peer network for block/tx propagation.</li>
          <li><b>Webhooks</b>: Call external URLs on new blocks, txs, or mints (see <span className="font-mono">webhooks.json</span>).</li>
          <li><b>Miner</b>: CLI utility for mining blocks and tokens.</li>
        </ul>

        <SectionHeading id="feeless-node-webhooks">Webhooks</SectionHeading>
        <p className="mb-4 text-white/80">
          FeeLess node supports outbound webhooks for automation and integrations. Configure <span className="font-mono">webhooks.json</span> in your node directory to POST to external URLs on new blocks, transactions, or mints.
        </p>
        <SubHeading id="webhooks-config">Configuration</SubHeading>
        <p className="mb-2 text-white/70">Create a <span className="font-mono">webhooks.json</span> file in your node directory. Example:</p>
        <Example>{`
{
  "block": ["https://yourdomain.com/onblock"],
  "tx": ["https://yourdomain.com/ontx"],
  "mint": ["https://yourdomain.com/onmint"]
}
`}</Example>
        <SubHeading id="webhooks-events">Events</SubHeading>
        <EndpointTable endpoints={[
          { method: "POST", path: "block", desc: "Called with full Block object on new block" },
          { method: "POST", path: "tx", desc: "Called with Transaction object on new transaction" },
          { method: "POST", path: "mint", desc: "Called with { token, mint } on new token mint" },
        ]} />
        <SubHeading id="webhooks-payloads">Payloads</SubHeading>
        <p className="mb-2 text-white/70">Payloads are sent as JSON in the POST body:</p>
        <b className="text-white/90">Block event:</b>
        <Example>{`Block (see type Block)`}</Example>
        <b className="text-white/90">Transaction event:</b>
        <Example>{`Transaction (see type Transaction)`}</Example>
        <b className="text-white/90">Mint event:</b>
        <Example>{`{
  token: string,
  mint: TokenMint
}`}</Example>
        <p className="mb-8 text-white/60">Webhooks are retried on failure by your own logic. All events are sent as POST with <span className="font-mono">Content-Type: application/json</span>.</p>
      </div>
    </main>
  );
} 