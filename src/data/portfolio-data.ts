export const portfolioData = {
  hero: {
    name: "Muchintala Chandrasu Karthikeya",
    title: "Full Stack Developer",
    tagline: "Building digital experiences with passion and precision",
    cta: {
      primary: "Hire Me",
      secondary: "Download Resume",
    },
  },
  about: {
    bio: "I'm a passionate full-stack developer with expertise in modern web technologies. I love creating beautiful, functional, and user-centered digital experiences.",
    image: "/placeholder-avatar.jpg",
    currentlyLearning: ["Next.js 15", "AI/ML", "Cloud Architecture"],
    interests: ["Open Source", "UI/UX Design", "Tech Blogging"],
  },
  skills: {
    frontend: [
      { name: "React", level: 90 },
      { name: "Next.js", level: 85 },
      { name: "TypeScript", level: 80 },
      { name: "Tailwind CSS", level: 95 },
    ],
    backend: [
      { name: "Node.js", level: 85 },
      { name: "Python", level: 75 },
      { name: "PostgreSQL", level: 80 },
      { name: "MongoDB", level: 70 },
    ],
    design: [
      { name: "Figma", level: 85 },
      { name: "Adobe XD", level: 70 },
      { name: "Photoshop", level: 75 },
    ],
    tools: [
      { name: "Git", level: 90 },
      { name: "Docker", level: 70 },
      { name: "AWS", level: 65 },
      { name: "VS Code", level: 95 },
    ],
  },
  projects: [
    {
      id: 1,
     
  title: "AI Tools Directory Platform",
  description: "An SEO-optimized directory platform for discovering and exploring AI-powered tools.",
  problem: "Users struggled to find and compare AI tools across different categories from a single reliable source.",
  solution: "Developed a dynamic directory using Next.js and Supabase with advanced search, filtering, authentication, and AI-powered content generation.",
  impact: "Improved discoverability of AI tools and increased organic traffic through SEO-friendly pages and optimized performance.",
  image: "/aitools.png",
  tech: ["Next.js", "React", "Supabase", "PostgreSQL", "Tailwind CSS", "OpenAI API"],


      liveUrl: "https://toolsherd.in/",
      githubUrl: "https://github.com/karthik449213/toolsherd.git",
    },


    {
      id: 2,
      
  title: "Food Delivery Web Application",
  description: "A full-stack food delivery platform with restaurant listings, online ordering, and real-time order tracking.",
  problem: "Local restaurants needed a digital platform to manage online orders, payments, and delivery tracking efficiently.",
  solution: "Built a scalable web application using Next.js and Node.js with secure authentication, REST APIs, Stripe payments, and real-time order updates.",
  impact: "Enabled seamless online ordering and payments, improving order management efficiency and customer experience.",
  image: "/fooddelivery.png",
  tech: ["Next.js", "React", "Node.js", "Express.js", "MongoDB", "Tailwind CSS", "Stripe"],


      liveUrl: "https://peelojuice.netlify.app/",
      githubUrl: "https://github.com/karthik449213/kingdompeelo.git",
    },
    {
      id: 3,
      
  title: "Free Online Converter Tools Website",
  description: "A high-performance web platform offering multiple free online conversion tools.",
  problem: "Users needed fast, free, and reliable tools for common file, text, and format conversions without installing software.",
  solution: "Built a lightweight and scalable platform using Next.js with reusable components and efficient client-side and server-side processing.",
  impact: "Delivered fast conversions with a smooth user experience and improved SEO visibility for organic traffic growth.",
  image: "/freetools.png",
  tech: ["Next.js", "React", "JavaScript", "Tailwind CSS"],


      liveUrl: "https://freeconvertm.netlify.app/",
      githubUrl: "https://github.com/karthik449213/tools-hub.git",
    },
        {
  id:4 ,
 
  title: "EcoSnap – Gamified Environmental Action Platform",
  description: "A mobile-first platform that gamifies real-world environmental actions using geo-tagged photos, streaks, and eco-points to encourage consistent sustainable behavior.",
  problem: "Environmental initiatives often fail due to low public engagement, lack of habit-forming systems, and no simple way to verify or track individual eco-friendly actions.",
  solution: "Built a gamified mobile application where users capture geo-tagged photo proof of actions like waste disposal or tree planting, which are logged, validated, and rewarded through streaks and eco-points.",
  impact: "Encourages repeated eco-friendly behavior, increases participation in cleanliness and plantation efforts, and creates structured, actionable environmental data for future NGO and government collaboration.",
  image: "/ecosnap.png",
  tech: [
    "React Native",
    "Expo",
    "Supabase",
    "PostgreSQL",
    "Authentication (Magic Link / OTP)",
    "Cloud Storage",
    "Geolocation APIs",
    "Animated UI (Gamification)"
  ],


  liveUrl: "https://ecoood.netlify.app/home",
  githubUrl: "https://github.com/karthik449213/EcoSnap.git"
},
{
  id:5 ,
 
 title: "AI Lead Assistant System",
  description: "An AI-powered lead automation system with real-time chat, smart lead qualification, and workflow automation for businesses.",
  problem: "Businesses were losing leads due to delayed responses, manual follow-ups, and unstructured customer data.",
  solution: "Built an AI-driven assistant using a custom backend with automation workflows to capture, qualify, and route leads automatically in real time.",
  impact: "Improved lead response time and enabled faster follow-ups with fully automated lead handling and centralized data collection.",
  image: "/ailead.png",
  tech: ["HTML", "CSS", "JavaScript", "Node.js", "Express.js", "Groq AI", "n8n", "Webhooks"],

  liveUrl: "https://your-demo-link.com",
  githubUrl: "https://github.com/karthik449213/iron.git"
},
  ],
  education: [
    {
      degree: "Bachelor of Computer Science",
      institution: "Laki Reddy Bali Reddy College of Engineering",
      year: "2024 - 2028",
      description: "Focused on software engineering, algorithms, and web development.",
      logo: "/university-logo.png",
    },
    {
      degree: "Full Stack Web Development",
      institution: "Main Flow Services and Technologies",
      year: "2024",
      description: "Intensive 2-month program covering modern web technologies.",
      logo: "/bootcamp-logo.png",
    },
  ],
  certifications: [
    {
      name: "AWS Certified Developer",
      issuer: "Amazon Web Services",
      year: "2024",
      logo: "/aws-logo.png",
      url: "https://aws.amazon.com/certification/",
    },
    {
      name: "React Developer Certification",
      issuer: "Meta",
      year: "2023",
      logo: "/meta-logo.png",
      url: "https://www.coursera.org/professional-certificates/meta-react-developer",
    },
  ],
  contact: {
    email: "karthikpiinasi@gmail.com",
    linkedin: "https://linkedin.com/in/yourprofile",
    github: "https://github.com/karthik449213",
    twitter: "https://twitter.com/yourusername",
  },
};
