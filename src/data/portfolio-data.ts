export const portfolioData = {
  hero: {
    name: "Aryan",
    title: "Systems & Cryptography Engineer",
    tagline: "Building trustless systems, encrypted networks, and zero-knowledge infrastructure.",
    cta: {
      primary: "View My Work",
      secondary: "Download Resume",
    },
  },

  about: {
    bio: "I'm a systems engineer focused on low-level cryptographic protocols, zero-knowledge proof systems, and decentralized network architecture. I build production-grade tools in Rust and Go — from encrypted dark-channel messengers to zk-SNARK exchange networks — with a core focus on privacy, trustlessness, and security. Currently pursuing B.Tech in Computer Science (2024–2028) while shipping real systems.",
    image: "/profile.png",
    currentlyLearning: [
      "Advanced zkSNARK circuit design (Circom/Groth16)",
      "Libp2p for production P2P networking",
      "Formal verification of cryptographic protocols",
    ],
    interests: [
      "Zero-Knowledge Cryptography",
      "Decentralized Protocol Design",
      "Privacy-Preserving Systems",
      "Open Source Security Tooling",
    ],
  },

  skills: {
    languages: [
      { name: "Rust", level: 90 },
      { name: "Go", level: 85 },
      { name: "TypeScript", level: 80 },
      { name: "JavaScript", level: 80 },
      { name: "Python", level: 70 },
      { name: "Solidity", level: 75 },
      { name: "Circom", level: 70 },
      { name: "C/C++ (NDK)", level: 65 },
    ],
    cryptography: [
      { name: "zkSNARKs / ZKP", level: 85 },
      { name: "Ed25519 Signatures", level: 80 },
      { name: "Shamir Secret Sharing", level: 80 },
      { name: "End-to-End Encryption", level: 85 },
      { name: "Anonymous Routing", level: 75 },
      { name: "Forward Secrecy", level: 75 },
    ],
    blockchain: [
      { name: "Ethereum / EVM", level: 80 },
      { name: "Hardhat", level: 75 },
      { name: "Ethers.js / Web3.js", level: 80 },
      { name: "IPFS", level: 70 },
      { name: "Smart Contracts", level: 80 },
    ],
    systems: [
      { name: "P2P Networking", level: 85 },
      { name: "WebSockets", level: 80 },
      { name: "POSIX Sockets", level: 80 },
      { name: "JNI / Android NDK", level: 75 },
      { name: "TCP/UDP Packet Parsing", level: 80 },
      { name: "VpnService API", level: 75 },
    ],
    tools: [
      { name: "Android Studio / ADB", level: 75 },
      { name: "Gradle (Kotlin DSL)", level: 70 },
      { name: "GitHub Actions", level: 75 },
      { name: "ProGuard / R8", level: 70 },
      { name: "Node.js", level: 75 },
      { name: "React / Next.js", level: 70 },
    ],
  },

  projects: [
    {
      id: 1,
      title: "NetSniff Android",
      description:
        "High-performance local network packet analyzer using raw OS-level access for real-time traffic diagnostics on Android — no root required.",
      problem:
        "Android developers and network engineers had no reliable tool to inspect raw IP/TCP/UDP traffic at the packet level without rooting the device.",
      solution:
        "Built a native Kotlin + C++ (NDK) app using the Android VpnService API to intercept device-wide traffic. Implemented JNI memory pinning via GetByteArrayElements to pass raw binary packet buffers from C++ to a reactive Jetpack Compose UI without GC pauses.",
      impact:
        "Achieved low-latency real-time packet visualization with zero GC interruption using POSIX socket programming and multi-threaded JNI layers for OS-level binary data handling.",
      image: "/netsniff.png",
      tech: [
        "Kotlin",
        "C/C++ (NDK)",
        "JNI",
        "VpnService API",
        "POSIX Sockets",
        "Kotlin Flow",
        "Jetpack Compose",
      ],
      concepts: [
        "Linux FD Management",
        "IP/TCP/UDP Parsing",
        "JNI Memory Pinning",
        "Async Streaming",
        "OS Service Binding",
      ],
      liveUrl: "",
      githubUrl: "https://github.com/aryan/netsniff-android",
      apkUrl: "",
    },

    {
      id: 2,
      title: "p2psharing",
      description:
        "Fully decentralized peer-to-peer file sharing system enabling direct node-to-node data exchange without any central server or relay.",
      problem:
        "Centralized file sharing systems are single points of failure, prone to censorship, and inefficient for large binary transfers across distributed nodes.",
      solution:
        "Designed a Go-based distributed mesh network for high-throughput binary transfers. Built a Node.js WebSocket signaling layer for peer discovery, handshake negotiation, and session management without a central broker.",
      impact:
        "Achieved fully decentralized file synchronization with eventual consistency across all mesh nodes and no relay dependency.",
      image: "/p2psharing.png",
      tech: ["Go", "Node.js", "WebSockets", "P2P Networking"],
      concepts: [
        "Distributed Mesh",
        "Peer Discovery",
        "Decentralized Sync",
        "NAT Traversal",
        "Binary Transfer",
      ],
      liveUrl: "",
      githubUrl: "https://github.com/aryan/p2psharing",
    },

    {
      id: 3,
      title: "darkmessenger",
      description:
        "Privacy-first encrypted messaging platform built for dark-channel communication with zero metadata leakage and anonymous routing.",
      problem:
        "Existing messaging platforms leak metadata — sender identity, timing, and routing — even when message content is encrypted.",
      solution:
        "Engineered an end-to-end encrypted message pipeline in Rust with forward secrecy and no plaintext storage. Implemented an anonymous routing layer that obscures both sender and receiver identity and resists traffic correlation attacks. Python tooling handles key management and protocol fuzzing.",
      impact:
        "Achieved full anonymity at the transport layer with provably zero metadata exposure and resistance to passive traffic analysis.",
      image: "/darkmessenger.png",
      tech: ["Rust", "Python", "E2E Encryption", "Anonymous Routing"],
      concepts: [
        "Forward Secrecy",
        "Anonymous Routing",
        "Traffic Correlation Resistance",
        "Privacy Protocols",
        "Key Management",
      ],
      liveUrl: "",
      githubUrl: "https://github.com/aryan/darkmessenger",
    },

    {
      id: 4,
      title: "zkp-exchange-network",
      description:
        "Privacy-preserving decentralized exchange using zero-knowledge proofs to enable confidential transactions without revealing trade details on-chain.",
      problem:
        "On-chain DEXs expose transaction amounts, counterparties, and timing — making front-running, surveillance, and MEV attacks trivial.",
      solution:
        "Designed Circom circuits for zkSNARK proof generation enabling on-chain verification without exposing transaction values or identities. Built a Rust proof-verification engine integrating the zk-SNARK backend with the DEX settlement layer.",
      impact:
        "Enabled confidential transaction finality with full on-chain auditability — amounts and identities hidden, proofs publicly verifiable.",
      image: "/zkp-exchange.png",
      tech: ["Rust", "Circom", "zkSNARKs", "Zero-Knowledge Proofs"],
      concepts: [
        "zkSNARKs",
        "Circom Circuits",
        "Confidential Transactions",
        "ZKP Verification",
        "Trustless DEX",
      ],
      liveUrl: "",
      githubUrl: "https://github.com/aryan/zkp-exchange-network",
    },

    {
      id: 5,
      title: "blockchainbasedvotingsystem",
      description:
        "Decentralized on-chain voting platform with tamper-proof smart contract governance, token-based access control, and IPFS ballot storage.",
      problem:
        "Traditional e-voting systems rely on centralized servers — vulnerable to manipulation, censorship, and lack of transparent auditability.",
      solution:
        "Wrote Solidity smart contracts enforcing vote uniqueness, immutable records, and transparent election lifecycle. Integrated Web3.js + MetaMask for wallet-based voter authentication. Stored ballot metadata on IPFS for censorship-resistant governance records.",
      impact:
        "Delivered fully trustless voting with on-chain immutability and decentralized ballot storage — no central authority can alter or suppress votes.",
      image: "/voting.png",
      tech: [
        "Solidity",
        "Ethereum",
        "React / Next.js",
        "Web3.js",
        "MetaMask",
        "IPFS",
      ],
      concepts: [
        "Smart Contracts",
        "Decentralized Governance",
        "IPFS Storage",
        "Token Auth",
        "Immutable Records",
      ],
      liveUrl: "",
      githubUrl: "https://github.com/aryan/blockchainbasedvotingsystem",
    },

    {
      id: 6,
      title: "deadmanswitch",
      description:
        "Cryptographic inactivity-triggered asset distribution system — if an owner fails to check in, encrypted vaults unlock and assets distribute to guardians via threshold cryptography.",
      problem:
        "Crypto asset holders have no reliable, trustless mechanism to ensure their assets reach designated beneficiaries in case of prolonged inactivity or death — without trusting any third party.",
      solution:
        "Implemented Shamir Secret Sharing to split vault decryption keys across multiple guardian keyholders with configurable thresholds. Built an Ed25519 heartbeat signing mechanism for owners to prove liveness without exposing private keys. Smart contract layer (Hardhat/Ethers.js) triggers automatic asset release after a configurable inactivity window.",
      impact:
        "Achieved fully trustless dead-man's-switch mechanics — no single guardian or contract owner can unilaterally access vaults; release requires threshold consensus.",
      image: "/deadmanswitch.png",
      tech: [
        "TypeScript",
        "JavaScript",
        "Solidity",
        "Hardhat",
        "Ethers.js",
        "Ed25519",
        "Shamir Secret Sharing",
      ],
      concepts: [
        "Shamir Secret Sharing",
        "Ed25519 Signatures",
        "Threshold Cryptography",
        "Inactivity Triggers",
        "Encrypted Vaults",
        "Guardian Key Shares",
      ],
      liveUrl: "",
      githubUrl: "https://github.com/aryan/deadmanswitch",
    },
  ],

  education: [
    {
      degree: "Bachelor of Technology — Computer Science Engineering",
      institution: "Lakireddy Bali Reddy College of Engineering",
      year: "2024 – 2028",
      description:
        "Focused on systems programming, algorithms, network security, and distributed computing. Building production cryptographic systems alongside coursework.",
      logo: "/university-logo.png",
    },
    {
      degree: "Intermediate — MPC",
      institution: "Sri Chaitanya Junior College",
      year: "2022 – 2024",
      description: "Mathematics, Physics, Chemistry.",
      logo: "/college-logo.png",
    },
  ],

  contact: {
    email: "aryan@email.com",
    github: "https://github.com/aryan",
    linkedin: "",
    twitter: "",
    note: "Best reached via GitHub or email. Open to remote internships and contract roles globally.",
  },
};