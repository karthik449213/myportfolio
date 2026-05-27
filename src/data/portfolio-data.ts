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
      "Delay-tolerant networking and offline-first distributed systems",
      "Android TEE / StrongBox cryptographic execution",
    ],
    interests: [
      "Zero-Knowledge Cryptography",
      "Decentralized Protocol Design",
      "Privacy-Preserving Systems",
      "Open Source Security Tooling",
      "Edge Computing & Mesh Networks",
      "Android Systems & Mobile Security",
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
      { name: "Kotlin", level: 70 },
    ],
    cryptography: [
      { name: "zkSNARKs / ZKP", level: 85 },
      { name: "Ed25519 Signatures", level: 80 },
      { name: "Shamir Secret Sharing", level: 80 },
      { name: "End-to-End Encryption", level: 85 },
      { name: "Anonymous Routing", level: 75 },
      { name: "Forward Secrecy", level: 75 },
      { name: "AES-GCM Authenticated Encryption", level: 80 },
      { name: "Hardware TEE / StrongBox", level: 70 },
      { name: "Cryptographic Key Invalidation", level: 75 },
    ],
    blockchain: [
      { name: "Ethereum / EVM", level: 80 },
      { name: "Hardhat", level: 75 },
      { name: "Ethers.js / Web3.js", level: 80 },
      { name: "IPFS", level: 70 },
      { name: "Smart Contracts", level: 80 },
      { name: "libp2p", level: 75 },
      { name: "LevelDB / RocksDB", level: 65 },
      { name: "Protocol Buffers", level: 65 },
    ],
    systems: [
      { name: "P2P Networking", level: 85 },
      { name: "WebSockets", level: 80 },
      { name: "POSIX Sockets", level: 80 },
      { name: "JNI / Android NDK", level: 75 },
      { name: "TCP/UDP Packet Parsing", level: 80 },
      { name: "VpnService API", level: 75 },
      { name: "Delay-Tolerant Networking (DTN)", level: 75 },
      { name: "Store-Carry-Forward Mesh", level: 70 },
      { name: "Linux File Descriptor Management", level: 75 },
      { name: "Sector-Level Disk Encryption (SQLCipher)", level: 70 },
      { name: "Micro-Virtualization / Mobile Sandboxing", level: 65 },
      { name: "Distributed Task Scheduling", level: 70 },
      { name: "Self-Healing Cluster Fabric", level: 65 },
      { name: "Dynamic Binary Instrumentation", level: 70 },
      { name: "Syscall Interception", level: 70 },
      { name: "Memory Forensics", level: 65 },
      { name: "Anti-Hooking / Anti-Tamper", level: 65 },
    ],
    ml: [
      { name: "OpenCV", level: 70 },
      { name: "TensorFlow / PyTorch", level: 65 },
      { name: "YOLO / CNN Object Detection", level: 65 },
      { name: "OCR / Character Recognition", level: 65 },
      { name: "Real-time Video Inference", level: 60 },
      { name: "Anomaly Detection", level: 65 },
    ],
    tools: [
      { name: "Android Studio / ADB", level: 75 },
      { name: "Gradle (Kotlin DSL)", level: 70 },
      { name: "GitHub Actions", level: 75 },
      { name: "ProGuard / R8", level: 70 },
      { name: "Node.js", level: 75 },
      { name: "React / Next.js", level: 70 },
      { name: "Jetpack Compose", level: 70 },
      { name: "SQLCipher", level: 65 },
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
      title: "CoreVault OS",
      description:
        "Hardware-grade encrypted filesystem for Android using TEE/StrongBox isolated execution, AES-GCM authenticated encryption, and sector-level database encryption — no third-party cloud dependency.",
      problem:
        "Android file storage is vulnerable at rest — standard app sandboxing does not protect against physical device access, key extraction, or biometric bypass attacks.",
      solution:
        "Ran cryptographic operations inside a dedicated StrongBox hardware security module isolated from the main processor. Applied AES-GCM symmetric encryption with built-in integrity checks across all stored data. Injected a custom sandboxed storage location directly into the native Android file picker via DocumentsProvider. Implemented auto-invalidation of Keystore encryption keys on new biometric enrollment. Encrypted raw storage sectors using SQLCipher before data hits the permanent filesystem.",
      impact:
        "Achieved hardware-enforced encryption at rest with automatic key invalidation on security events — vault contents are inaccessible even with physical device access or root.",
      image: "/corevault.png",
      tech: [
        "Kotlin",
        "Android Keystore",
        "StrongBox / TEE",
        "AES-GCM",
        "SQLCipher",
        "DocumentsProvider",
        "Jetpack Compose",
      ],
      concepts: [
        "Hardware TEE / StrongBox",
        "AES-GCM Encryption",
        "Sector-Level Disk Encryption",
        "Cryptographic Key Invalidation",
        "Content Provider Abstraction",
        "Unidirectional Data Flow (MVI)",
      ],
      liveUrl: "",
      githubUrl: "https://github.com/aryan/corevault",
      apkUrl: "",
    },

    {
      id: 3,
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
      id: 4,
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
      id: 5,
      title: "Delay-Tolerant Blockchain",
      description:
        "Offline-first blockchain network designed for unstable mesh environments — nodes store, carry, and forward transactions until connectivity is restored, achieving eventual consistency without a live network.",
      problem:
        "Conventional blockchains require continuous internet connectivity for transaction propagation and consensus. They fail completely in intermittent, high-latency, or offline mesh network environments such as disaster zones, rural infrastructure, or air-gapped networks.",
      solution:
        "Implemented a store-carry-forward model in Go where nodes cache unconfirmed transactions locally and opportunistically sync when peers are in range. Used libp2p for peer discovery and transport across unstable links. LevelDB/RocksDB handles durable local storage of the chain state. Protocol Buffers serialize block and transaction data for efficient binary exchange.",
      impact:
        "Achieved eventual consistency across fully disconnected mesh nodes — transactions survive arbitrarily long network partitions and propagate automatically when connectivity resumes.",
      image: "/dtblockchain.png",
      tech: ["Go", "libp2p", "LevelDB", "RocksDB", "Protocol Buffers"],
      concepts: [
        "Store-Carry-Forward",
        "Opportunistic Synchronization",
        "Eventual Consistency",
        "Offline-First Blockchain",
        "Mesh Networking",
        "Edge Computing",
      ],
      liveUrl: "",
      githubUrl: "https://github.com/aryan/Delay-Tolerant-Blockchain",
    },

    {
      id: 6,
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
      id: 7,
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
      id: 8,
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

    {
      id: 9,
      title: "distributed_log_monitoring",
      description:
        "Real-time distributed log aggregation and anomaly detection system — centralizes logs from multiple services, traces distributed events, and surfaces anomalies across a live system.",
      problem:
        "In distributed systems, logs are scattered across services and machines with no unified view — making debugging, tracing, and anomaly detection slow and unreliable.",
      solution:
        "Built a Python-based centralized log aggregation pipeline that collects structured logs from distributed nodes in real time. Implemented distributed tracing to correlate events across service boundaries. TypeScript dashboard surfaces metrics and anomalies with live updates. Anomaly detection layer flags irregular patterns automatically.",
      impact:
        "Achieved full observability across distributed services — single pane for log aggregation, distributed tracing, metrics, and anomaly alerts in real time.",
      image: "/logmonitoring.png",
      tech: ["Python", "TypeScript", "Logging Frameworks", "Real-time Processing"],
      concepts: [
        "Centralized Log Aggregation",
        "Distributed Tracing",
        "Metrics Collection",
        "Anomaly Detection",
        "Observability",
      ],
      liveUrl: "",
      githubUrl: "https://github.com/aryan/distributed_log_monitoring",
    },

    {
      id: 10,
      title: "numberplaterecognition",
      description:
        "Automated vehicle license plate detection and character recognition system using deep learning object detection and OCR on live or static image input.",
      problem:
        "Manual vehicle identification is slow and error-prone — there was no lightweight pipeline to extract and parse license plate data from images automatically.",
      solution:
        "Built a Python pipeline using YOLO/CNN for license plate region detection and OpenCV for image preprocessing and segmentation. Integrated OCR to extract and parse alphanumeric characters from detected plate regions. Deep learning backbone handles varied lighting, angles, and plate formats.",
      impact:
        "Achieved automated end-to-end license plate extraction and parsing from raw image input with high accuracy across varied real-world conditions.",
      image: "/numberplate.png",
      tech: ["Python", "OpenCV", "YOLO", "CNN", "Deep Learning", "OCR"],
      concepts: [
        "Object Detection",
        "Character Recognition",
        "License Plate Parsing",
        "Vehicle Identification",
        "Image Segmentation",
      ],
      liveUrl: "",
      githubUrl: "https://github.com/aryan/numberplaterecognition",
    },

    {
      id: 11,
      title: "videoanalytics",
      description:
        "Real-time video analytics platform for ML-powered frame analysis, pattern recognition, and computer vision inference with a live TypeScript dashboard.",
      problem:
        "Processing and extracting meaningful signals from video streams in real time requires both efficient frame-level ML inference and a responsive visualization layer — rarely combined in one system.",
      solution:
        "Built a Python backend using OpenCV for frame extraction and preprocessing with TensorFlow/PyTorch for real-time ML inference. TypeScript dashboard streams analysis results live. Pattern recognition layer identifies objects, behaviors, and anomalies across frames.",
      impact:
        "Achieved real-time video intelligence — frame-by-frame ML inference with live result streaming to a reactive dashboard for immediate pattern visibility.",
      image: "/videoanalytics.png",
      tech: [
        "Python",
        "OpenCV",
        "TensorFlow",
        "PyTorch",
        "TypeScript",
      ],
      concepts: [
        "Computer Vision",
        "Video Processing",
        "ML Inference",
        "Real-time Analysis",
        "Frame Extraction",
        "Pattern Recognition",
      ],
      liveUrl: "",
      githubUrl: "https://github.com/aryan/videoanalytics",
    },

    {
      id: 12,
      title: "HyperKernel Android",
      description:
        "Full Android-native micro-virtualization platform that runs apps and services inside lightweight sandboxed environments directly on mobile devices — no cloud, no hypervisor hardware dependency.",
      problem:
        "Android has no native micro-virtualization layer for isolating untrusted app execution at the kernel level. Running sandboxed services requires either full VMs (too heavy) or process isolation (insufficient security boundary).",
      solution:
        "Built a mobile-native virtualization runtime that creates lightweight isolated execution containers on Android. Each sandbox runs with its own restricted kernel interface, isolated memory space, and scoped system call access. The platform manages sandbox lifecycle, resource allocation, and inter-sandbox communication with minimal overhead on constrained mobile hardware.",
      impact:
        "Achieved kernel-level execution isolation for arbitrary app workloads directly on mobile — enabling untrusted code execution, AI runtime sandboxing, and secure multi-tenant service hosting without cloud dependency.",
      image: "/hyperkernel.png",
      tech: [
        "Kotlin",
        "C/C++ (NDK)",
        "Android Kernel Interface",
        "JNI",
        "Virtualization Runtime",
      ],
      concepts: [
        "Micro-Virtualization",
        "Isolated Execution Containers",
        "Kernel-Level Sandboxing",
        "Mobile Hypervisor",
        "Syscall Restriction",
        "Resource Isolation",
      ],
      liveUrl: "",
      githubUrl: "https://github.com/aryan/hyperkernel-android",
      apkUrl: "",
    },

    {
      id: 13,
      title: "NeuralMesh OS",
      description:
        "Decentralized AI mesh network where nearby Android devices cooperate to share compute, distribute inference workloads, exchange encrypted data, and form resilient peer-to-peer clusters — fully cloud-independent.",
      problem:
        "On-device AI inference is bottlenecked by single-device compute limits. Cloud offloading introduces latency, privacy risks, and hard dependency on connectivity — making edge AI impractical for real-time or offline use cases.",
      solution:
        "Built a device-to-device mesh fabric where Android nodes discover peers, negotiate compute capacity, and split AI inference tasks across the cluster. Encrypted data exchange ensures privacy across untrusted nodes. The mesh is self-healing — nodes join and leave without disrupting active inference pipelines. Distributed scheduling layer routes workloads to the most available device dynamically.",
      impact:
        "Achieved distributed real-time AI inference across a cluster of commodity Android devices with zero cloud dependency — compute scales with the number of nearby devices in the mesh.",
      image: "/neuralmesh.png",
      tech: [
        "Kotlin",
        "C/C++ (NDK)",
        "P2P Networking",
        "TensorFlow Lite",
        "Encrypted Transport",
        "Distributed Scheduling",
      ],
      concepts: [
        "Distributed Edge AI",
        "Device-to-Device Mesh",
        "Federated Inference",
        "Encrypted Data Exchange",
        "Self-Healing Clusters",
        "Offline AI Runtime",
      ],
      liveUrl: "",
      githubUrl: "https://github.com/aryan/neuralmesh-os",
      apkUrl: "",
    },

    {
      id: 14,
      title: "Synapse Fabric",
      description:
        "Fully autonomous distributed execution fabric where every machine — phones, laptops, servers, edge devices — becomes part of one self-healing compute organism that routes and executes workloads automatically.",
      problem:
        "Heterogeneous compute environments — mixing phones, laptops, and edge hardware — have no unified execution layer. Workloads are siloed per device with no cross-machine scheduling, fault tolerance, or autonomous recovery.",
      solution:
        "Built a self-organizing compute fabric where each node registers its capabilities and available resources. A distributed task scheduler routes execution units to the most suitable node dynamically. The fabric is self-healing — failed nodes are detected, workloads are rerouted, and the cluster rebalances automatically. Nodes communicate over an encrypted mesh transport layer with no central coordinator.",
      impact:
        "Achieved a fully autonomous multi-device compute organism — workloads execute across heterogeneous hardware with automatic failover, rebalancing, and zero central coordination.",
      image: "/synapsefabric.png",
      tech: [
        "Go",
        "Rust",
        "P2P Networking",
        "Distributed Scheduler",
        "Encrypted Mesh Transport",
        "Node Discovery",
      ],
      concepts: [
        "Autonomous Distributed Compute",
        "Self-Healing Fabric",
        "Heterogeneous Node Scheduling",
        "Decentralized Task Routing",
        "Fault Tolerance",
        "Edge Compute Orchestration",
      ],
      liveUrl: "",
      githubUrl: "https://github.com/aryan/synapse-fabric",
    },

    {
      id: 15,
      title: "PhantomCore",
      description:
        "Offensive-grade Android security research framework for dynamic binary instrumentation, syscall interception, runtime exploit detection, anti-hooking, anti-tamper, memory forensics, and behavior analysis.",
      problem:
        "Android security research lacks a unified native framework for deep runtime inspection — existing tools are fragmented, require root, or operate at too high an abstraction level to detect sophisticated exploits and evasion techniques.",
      solution:
        "Built a low-level Android security research platform combining dynamic binary instrumentation to rewrite running code at the instruction level, syscall interception to monitor and block OS-level calls in real time, and runtime exploit detection to catch memory corruption and privilege escalation attempts. Anti-hooking and anti-tamper layers detect and resist instrumentation by third-party tools. Memory forensics engine scans live process memory for IOCs and anomalous patterns. Behavior analysis correlates syscall sequences and memory events into high-level threat signatures.",
      impact:
        "Achieved deep runtime visibility into Android process internals — capable of detecting, intercepting, and analyzing exploits, hooks, and malicious behavior at the binary and syscall level without requiring a rooted device.",
      image: "/phantomcore.png",
      tech: [
        "C/C++ (NDK)",
        "Kotlin",
        "Frida / DBI",
        "POSIX Syscall Interface",
        "JNI",
        "Android Debug Bridge",
      ],
      concepts: [
        "Dynamic Binary Instrumentation",
        "Syscall Interception",
        "Runtime Exploit Detection",
        "Anti-Hooking",
        "Anti-Tamper",
        "Memory Forensics",
        "Behavior Analysis",
      ],
      liveUrl: "",
      githubUrl: "https://github.com/aryan/phantomcore",
      apkUrl: "",
    },
  ],

  education: [
    {
      degree: "Bachelor of Technology — Computer Science Engineering",
      institution: "Lakireddy Bali Reddy College of Engineering",
      year: "2024 – 2028",
      description:
        "Focused on systems programming, algorithms, network security, and distributed computing. Building production cryptographic systems alongside coursework.",
    },
    {
      degree: "Intermediate — MPC",
      institution: "Sri Chaitanya Junior College",
      year: "2022 – 2024",
      description: "Mathematics, Physics, Chemistry.",
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