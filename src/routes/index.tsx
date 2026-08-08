import { createFileRoute } from "@tanstack/react-router";
import { ExcellenceMark } from "@/components/ExcellenceMark";
import { useEffect, useState } from "react";
import { WireframeHero } from "@/components/WireframeHero";

function HeroBackdrop() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  if (!mounted) return null;
  return <WireframeHero className="absolute inset-0 z-0 opacity-80 pointer-events-none" />;
}

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Muhammed Ishaq — AI Engineer & Full-stack engineer" },
      {
        name: "description",
        content:
          "AI/ML Engineer, Full-Stack Engineer, and Second Class Upper Computer Science graduate (CGPA 4.39) from FUDMA. Builder of TechTrust AI. Available for opportunities.",
      },
      { property: "og:title", content: "Muhammed Ishaq — AI Engineer & Full-stack engineer" },
      {
        property: "og:description",
        content:
          "AI/ML Engineer & Full-stack engineer. Builder of TechTrust AI. National Finalist, Huawei ICT Academy Innovation Competition 2026.",
      },
      { property: "og:image", content: "/img/profile.jpg" },
      { name: "twitter:image", content: "/img/profile.jpg" },
    ],
  }),
  component: Index,
});

const skillGroups = [
  {
    title: "AI/ML Engineering",
    items: [
      { name: "Model Training (Python)", level: 84 },
      { name: "MindSpore / MLP Neural Nets", level: 80 },
    ],
    chips: [
      "Python",
      "Huawei MindSpore",
      "MLP Neural Nets",
      "NumPy / Pandas",
      "Feature Engineering",
      "Model Evaluation",
    ],
  },
  {
    title: "AI & Applied Development",
    items: [
      { name: "Prompt Engineering", level: 92 },
      { name: "Vibe Coding (AI-assisted dev)", level: 90 },
    ],
    chips: [
      "Prompt Engineering",
      "Vibe Coding",
      "Natural Language Dev Workflows",
      "AI Pair Programming",
      "Rapid Prototyping",
    ],
  },
  {
    title: "Full-Stack Engineering",
    items: [
      { name: "Front-End Development", level: 90 },
      { name: "Back-End Development", level: 80 },
    ],
    chips: [
      "Clean Architecture",
      "API Design",
      "Server & State Management",
      "Database Modelling",
      "System Integration",
      "HTML",
      "CSS",
      "JavaScript",
      "TypeScript",
      "React",
      "Tailwind",
      "Node.js",
      "Express",
      "PHP",
      "Java",
      "C++",
      "MySQL",
      "MongoDB",
    ],
  },
  {
    title: "Data, Security & Markets",
    items: [
      { name: "Data & Analysis", level: 75 },
      { name: "Security & Systems", level: 72 },
      { name: "Forex Trading", level: 85 },
    ],
    chips: ["Data Mining", "Cybersecurity", "Cloud Computing", "Systems Analysis", "Technical Analysis"],
  },
];

type ProjectLink = { label: string; url: string };
type Project = {
  category: "Personal" | "Client" | "Course" | "Lovable";
  year: string;
  title: string;
  blurb: string;
  stack: string[];
  links: ProjectLink[];
};

const projects: Project[] = [
  // ── Personal apps & leadership-era builds ──
  {
    category: "Personal",
    year: "2025",
    title: "NACOS FUDMA Chapter Hub",
    blurb:
      "Official hub for the NACOS FUDMA Chapter — built during my tenure as Chapter President. Showcases the executives, events, congresses, and the chapter's identity.",
    stack: ["React", "TypeScript", "Tailwind"],
    links: [
      { label: "Live", url: "https://nacosfudmachpater.netlify.app" },
      { label: "GitHub", url: "https://github.com/Muaishaq/nacos-fudma-hub-main" },
    ],
  },
  {
    category: "Personal",
    year: "2025",
    title: "NACOS Ramadan Message App",
    blurb:
      "Daily Ramadan reminders and reflections for the Muslim community of FUDMA — built while serving as President of NACOS and the Faculty of Computing.",
    stack: ["React", "TypeScript", "Tailwind"],
    links: [
      { label: "Live", url: "https://ramadanapp-nacosfudma.netlify.app/" },
      { label: "GitHub", url: "https://github.com/Muaishaq/Ramadan-App-Nacos" },
    ],
  },
  {
    category: "Personal",
    year: "2025",
    title: "ChurnGuard AI",
    blurb:
      "ANN-powered customer churn prediction system with explainable AI — interpretable feature attributions, batch scoring, and an analyst dashboard.",
    stack: ["TensorFlow/Keras", "React", "Explainable AI"],
    links: [
      { label: "Live", url: "https://churn-mua.lovable.app" },
      { label: "GitHub", url: "https://github.com/Muaishaq/churn-mua" },
    ],
  },
  {
    category: "Personal",
    year: "2025",
    title: "FUDMA Tech Hackathon 2025",
    blurb:
      "Site for the inaugural FUDMA state-wide Tech Innovation Hackathon — 5 tracks, 4 stages. Built as part of the organising team during my NACOS presidency.",
    stack: ["React", "TypeScript", "Tailwind"],
    links: [
      { label: "Live", url: "https://nacosfdm-hackathon.lovable.app" },
      { label: "GitHub", url: "https://github.com/Muaishaq/fudma-forge" },
    ],
  },

  // ── Final-year projects built for course-mates ──
  {
    category: "Client",
    year: "2026",
    title: "FUDMA Conference",
    blurb:
      "Conference platform for the Faculty of Computing — programme, speakers, registration, and announcements.",
    stack: ["React", "TypeScript", "Tailwind"],
    links: [
      { label: "Live", url: "https://reliable-chimera-78ed85.netlify.app" },
      { label: "GitHub", url: "https://github.com/Muaishaq/FUDMA-CONFERENECE" },
    ],
  },
  {
    category: "Client",
    year: "2026",
    title: "Sentinel — AI Content Moderation",
    blurb:
      "Multimodal AI moderation console: transformer text classifiers and CNN image analysis to flag hate speech, harassment, and violence in real time.",
    stack: ["React", "Transformers", "CNN"],
    links: [
      { label: "Live", url: "https://sparkle-mind-render.lovable.app" },
      { label: "GitHub", url: "https://github.com/Muaishaq/sparkle-mind-render" },
    ],
  },
  {
    category: "Client",
    year: "2026",
    title: "Nova — AI Chatbot Builder",
    blurb:
      "AI-powered customer-support chatbot builder. Configure persona, tone, and knowledge in a single editor with a live streaming test chat.",
    stack: ["React", "LLM APIs", "TypeScript"],
    links: [
      { label: "Live", url: "https://blossom-engine-pro.lovable.app" },
      { label: "GitHub", url: "https://github.com/Muaishaq/blossom-engine-pro" },
    ],
  },
  {
    category: "Client",
    year: "2026",
    title: "The Database Dividend — Field Survey",
    blurb:
      "A 9-question instrument measuring how database infrastructure shapes organisational performance — clean interactive flow and public benchmark output.",
    stack: ["React", "TypeScript", "Forms"],
    links: [
      { label: "Live", url: "https://indy-shine.lovable.app" },
      { label: "GitHub", url: "https://github.com/Muaishaq/indy-shine" },
    ],
  },
  {
    category: "Client",
    year: "2026",
    title: "Aquality.ai — ML Water Quality",
    blurb:
      "Machine-learning web app that predicts water potability from physicochemical inputs, with curated dataset and explainable results.",
    stack: ["Python", "ML", "React"],
    links: [
      { label: "Live", url: "https://pure-spark-creation.lovable.app" },
      { label: "GitHub", url: "https://github.com/Muaishaq/pure-spark-creation" },
    ],
  },
  {
    category: "Client",
    year: "2026",
    title: "AI Impact — Interactive ML & NLP Demo",
    blurb:
      "Interactive demo exploring ML and NLP concepts for FUDMA 2026 — live visualisations and runnable examples.",
    stack: ["React", "NLP", "ML"],
    links: [
      { label: "Live", url: "https://pure-charm-engine.lovable.app" },
      { label: "GitHub", url: "https://github.com/Muaishaq/pure-charm-engine" },
    ],
  },
  {
    category: "Client",
    year: "2026",
    title: "Kusada Local Government Site",
    blurb:
      "Official-style web presence for Kusada Local Government Area — departments, news, and citizen information.",
    stack: ["React", "TypeScript", "Tailwind"],
    links: [{ label: "GitHub", url: "https://github.com/Muaishaq/kusadalocalgovernment" }],
  },

  // ── Early / course projects ──
  {
    category: "Course",
    year: "SIWES 2025",
    title: "FUDMA Student Portal Clone",
    blurb: "UX redesign and improved responsiveness for the FUDMA student portal.",
    stack: ["HTML", "CSS", "JavaScript"],
    links: [{ label: "Live", url: "https://muaishaq.github.io/Project--Fudma-portal-/" }],
  },
  {
    category: "Course",
    year: "2024",
    title: "Muaishaq Forex Academy",
    blurb: "Forex education web platform — lessons, structure, and trader resources.",
    stack: ["HTML", "CSS", "JavaScript"],
    links: [{ label: "Live", url: "https://muaishaq.github.io/MFA/" }],
  },
  {
    category: "Course",
    year: "SIWES 2025",
    title: "Football Quiz App",
    blurb: "Interactive quiz with timed rounds and a persistent leaderboard.",
    stack: ["JavaScript", "HTML", "CSS"],
    links: [{ label: "Live", url: "https://muaishaq.github.io/QuizApp/" }],
  },
  {
    category: "Course",
    year: "SIWES 2025",
    title: "To-Do List App",
    blurb: "Local-storage to-do with priority tags and motion-led interactions.",
    stack: ["JavaScript", "CSS3", "LocalStorage"],
    links: [{ label: "Live", url: "https://muaishaq.github.io/TodoApp/" }],
  },
  {
    category: "Course",
    year: "SIWES 2025",
    title: "Background Color Generator",
    blurb: "Dynamic DOM color tool for designers exploring palette territory.",
    stack: ["HTML", "CSS", "JavaScript"],
    links: [{ label: "Live", url: "https://muaishaq.github.io/Bg_Color-Changer/" }],
  },

  // ── Additional vibe-coded builds on Lovable ──
  {
    category: "Lovable",
    year: "2026",
    title: "NACOS Sports Portal",
    blurb: "Sports management portal for NACOS FUDMA — fixtures, teams, and results.",
    stack: ["React", "TypeScript", "Tailwind"],
    links: [{ label: "Live", url: "https://nacossportsportal.lovable.app" }],
  },
  {
    category: "Lovable",
    year: "2026",
    title: "Bloom Kit Center",
    blurb: "Rapid concept build — component kit and marketing surface prototype.",
    stack: ["React", "Tailwind"],
    links: [{ label: "Live", url: "https://bloom-kit-center.lovable.app" }],
  },
  {
    category: "Lovable",
    year: "2026",
    title: "Heart Full Project",
    blurb: "Vibe-coded concept build shipped on Lovable.",
    stack: ["React", "Tailwind"],
    links: [{ label: "Live", url: "https://heart-full-project.lovable.app" }],
  },
  {
    category: "Lovable",
    year: "2026",
    title: "PureJoy Blueprint",
    blurb: "Landing / blueprint prototype — rapid iteration on Lovable.",
    stack: ["React", "Tailwind"],
    links: [{ label: "Live", url: "https://purejoy-blueprint.lovable.app" }],
  },
  {
    category: "Lovable",
    year: "2026",
    title: "Seed Build Magic",
    blurb: "Starter-kit style build exploring generative UI flows.",
    stack: ["React", "Tailwind"],
    links: [{ label: "Live", url: "https://seed-build-magic.lovable.app" }],
  },
  {
    category: "Lovable",
    year: "2026",
    title: "Insight Embrace Kit",
    blurb: "Insight dashboard prototype — data cards and narrative layout.",
    stack: ["React", "Tailwind"],
    links: [{ label: "Live", url: "https://insight-embrace-kit.lovable.app" }],
  },
  {
    category: "Lovable",
    year: "2026",
    title: "Wonderbuild Core",
    blurb: "Product surface prototype built during a rapid Lovable session.",
    stack: ["React", "Tailwind"],
    links: [{ label: "Live", url: "https://wonderbuild-core.lovable.app" }],
  },
  {
    category: "Lovable",
    year: "2026",
    title: "Safe Buddy Check",
    blurb: "Safety / check-in concept flow — quick prototype.",
    stack: ["React", "Tailwind"],
    links: [{ label: "Live", url: "https://safe-buddy-check.lovable.app" }],
  },
  {
    category: "Lovable",
    year: "2026",
    title: "Stellar Bloom Experience",
    blurb: "Motion-forward landing experience prototype.",
    stack: ["React", "Tailwind"],
    links: [{ label: "Live", url: "https://stellar-bloom-experience.lovable.app" }],
  },
  {
    category: "Lovable",
    year: "2026",
    title: "Evolve My World",
    blurb: "Editorial-style narrative site prototype.",
    stack: ["React", "Tailwind"],
    links: [{ label: "Live", url: "https://evolve-my-world.lovable.app" }],
  },
  {
    category: "Lovable",
    year: "2026",
    title: "Razor Sharp Defense",
    blurb: "Security / defense-themed landing prototype.",
    stack: ["React", "Tailwind"],
    links: [{ label: "Live", url: "https://razor-sharp-defense.lovable.app" }],
  },
  {
    category: "Lovable",
    year: "2026",
    title: "Sweet Grace Engine",
    blurb: "Brand engine prototype — typography-led composition.",
    stack: ["React", "Tailwind"],
    links: [{ label: "Live", url: "https://sweet-grace-engine.lovable.app" }],
  },
  {
    category: "Lovable",
    year: "2026",
    title: "Cosmic Bloom Core",
    blurb: "Cosmic aesthetic exploration — background and motion study.",
    stack: ["React", "Tailwind"],
    links: [{ label: "Live", url: "https://cosmic-bloom-core.lovable.app" }],
  },
  {
    category: "Lovable",
    year: "2026",
    title: "Joy Juice Factory",
    blurb: "Playful product landing prototype.",
    stack: ["React", "Tailwind"],
    links: [{ label: "Live", url: "https://joy-juice-factory.lovable.app" }],
  },
  {
    category: "Lovable",
    year: "2026",
    title: "Sparkle Craft Studio",
    blurb: "Creative studio-style portfolio prototype.",
    stack: ["React", "Tailwind"],
    links: [{ label: "Live", url: "https://sparkle-craft-studio-93.lovable.app" }],
  },
];

const leadership = [
  {
    period: "2025–2026",
    role: "President, Faculty of Computing",
    org: "FUDMA",
    notes: [
      "Represented 2,000+ students in faculty governance",
      "Organized inter-departmental tech events and seminars",
      "Previously served as Sports Director before ascending to President",
    ],
  },
  {
    period: "2025–2026",
    role: "President, NACOS FUDMA Chapter",
    org: "NACOS",
    notes: [
      "Organized NACOS FUDMA General Congress 2026 — “Beyond Theory”",
      "Launched Tech Guild and Tech Lite clubs for student developers",
      "Organized the first-ever state-wide Hackathon in Katsina — ₦4.5M+ budget, 4-stage",
      "Partnered with 4 tech hubs and invited 6 universities",
      "Unveiled the first-ever NACOS FUDMA official jersey (produced by Si14)",
    ],
  },
  {
    period: "2025–2026",
    role: "Team Leader — Huawei ICT Innovation Competition",
    org: "Huawei ICT Academy",
    notes: [
      "Led FUDMA team to the National Finals on January 29, 2026",
      "TechTrust developed as the team's flagship innovation submission",
    ],
  },
  {
    period: "2026",
    role: "Brand Ambassador",
    org: "Si14",
    notes: [
      "Selected as Brand Ambassador for Si14",
      "Rilz Smith sponsored 40% of NACOS jersey production cost",
    ],
  },
  {
    period: "2021–2026",
    role: "Football Team Captain",
    org: "FUDMA Departmental Team",
    notes: ["5+ years of captaincy — strategy, morale, and representation"],
  },
];

const certifications = [
  { name: "Career Essentials in Generative AI", issuer: "Microsoft & LinkedIn", date: "Jun 2025", url: "/certificates/career-essentials-genai.pdf" },
  { name: "Generative AI: Evolution of Thoughtful Online Search", issuer: "LinkedIn", date: "Jun 2025", url: "/certificates/genai-thoughtful-search.pdf" },
  { name: "Introduction to Artificial Intelligence", issuer: "LinkedIn", date: "Jun 2025", url: "/certificates/intro-to-ai.pdf" },
  { name: "Ethics in the Age of Generative AI", issuer: "LinkedIn", date: "Jun 2025", url: "/certificates/ethics-genai.pdf" },
  { name: "Learning Microsoft 365 Copilot for Work", issuer: "LinkedIn", date: "Jun 2025", url: "/certificates/learning-m365-copilot.pdf" },
  { name: "Streamlining Your Work with Microsoft Copilot", issuer: "LinkedIn", date: "Jun 2025", url: "/certificates/streamlining-copilot.pdf" },
  { name: "What Is Generative AI?", issuer: "LinkedIn", date: "Jun 2025", url: "/certificates/what-is-genai.pdf" },
  { name: "HTML Certification", issuer: "Online Assessment Platform", date: "2024–2025", url: "" },
];

const interests = [
  { label: "AI/ML Engineering", note: "intelligent systems, real-world problems" },
  { label: "Full-Stack Engneering", note: "end-to-end platforms, DB to front-end" },
  { label: "Robotics", note: "hardware + sensors + intelligent software" },
  { label: "Forex Trading", note: "technical analysis(SMC+ CRT), global markets" },
  { label: "Content Creation", note: "sharing thePersonal Journey and educating people on both tech and forex.\u00a0" },
  { label: "Football", note: "5-year team captain" },
];

function Index() {
  return (
    <main className="bg-carbon text-white font-sans selection:bg-electric/30 min-h-screen">
      <nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-carbon/80 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex justify-between items-center gap-4">
          <a href="#top" className="flex items-center gap-3 group">
            <ExcellenceMark className="size-9 text-electric transition-transform duration-500 group-hover:rotate-[20deg]" />
            <span className="font-mono text-xs tracking-tighter uppercase text-zinc-400 group-hover:text-white transition-colors">
              M.Ishaq <span className="text-zinc-600">/ CS-26</span>
            </span>
          </a>
          <div className="hidden md:flex gap-8 text-[11px] font-medium uppercase tracking-widest text-zinc-400">
            <a href="#work" className="hover:text-electric transition-colors">Work</a>
            <a href="#skills" className="hover:text-electric transition-colors">Stack</a>
            <a href="#leadership" className="hover:text-electric transition-colors">Leadership</a>
            <a href="#certifications" className="hover:text-electric transition-colors">Credentials</a>
            <a href="#contact" className="hover:text-electric transition-colors">Contact</a>
          </div>
        </div>
      </nav>

      <section id="top" className="relative pt-28 sm:pt-32 pb-16 sm:pb-20 px-4 sm:px-6 max-w-7xl mx-auto overflow-hidden">
        <HeroBackdrop />
        <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-carbon to-transparent pointer-events-none -z-0" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-carbon to-transparent pointer-events-none -z-0" />
        <div className="relative z-10 grid lg:grid-cols-12 gap-10 lg:gap-12 items-end fade-up">
          <div className="lg:col-span-8">
            <div className="inline-flex items-center gap-2 mb-8 text-[10px] font-mono uppercase tracking-widest text-electric">
              <span className="size-1.5 rounded-full bg-electric animate-pulse" />
              Available for Opportunities
            </div>
            <h1 className="text-[clamp(2.5rem,11vw,4rem)] md:text-7xl lg:text-8xl font-bold tracking-tight leading-[0.95] md:leading-[0.9]">
              Building Intelligence
              <br />
              <span className="text-zinc-600">for the Next Era.</span>
            </h1>
            <p className="mt-8 text-lg md:text-xl text-zinc-400 max-w-xl leading-relaxed">
              I'm Muhammed Ishaq — AI/ML Engineer and Full-stack engineer based in Nigeria.
              Computer Science graduate from FUDMA — Second Class Upper, CGPA 4.39, Alhamdulillah.
              Builder of TechTrust AI.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="#work"
                className="px-8 py-4 bg-electric text-white text-sm font-bold uppercase tracking-widest rounded-sm hover:bg-blue-600 transition-all"
              >
                View Work
              </a>
              <a
                href="public/cv/Muhammed_Ishaq_CV.pdf"
                download
                className="px-8 py-4 border border-white/10 text-white text-sm font-bold uppercase tracking-widest rounded-sm hover:bg-white/5 transition-all"
              >
                Download CV
              </a>
            </div>
          </div>
          <div className="lg:col-span-4">
            <div className="relative">
              <img
                src="/img/profile.jpg"
                alt="Muhammed Ishaq — AI Engineer and Full-Stack Developer"
                className="w-full aspect-[4/5] object-cover bg-zinc-custom outline outline-1 -outline-offset-1 outline-white/5 transition-all duration-700"
                loading="eager"
              />
              <div className="absolute -bottom-3 -left-3 bg-carbon border border-white/10 px-3 py-2">
                <div className="text-[9px] font-mono uppercase tracking-widest text-electric">Location</div>
                <div className="text-xs">Keffi, Nigeria</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-white/5 bg-zinc-custom/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
          {[
            ["Years Building", "3+"],
            ["Projects Shipped", "30+"],
            ["Student President", "2×"],
            ["CGPA · CS Graduate", "4.39"],
          ].map(([label, value]) => (
            <div key={label} className="flex flex-col gap-1">
              <span className="text-2xl md:text-3xl font-bold tracking-tight">{value}</span>
              <span className="text-[10px] font-mono text-electric uppercase tracking-widest">
                {label}
              </span>
            </div>
          ))}
        </div>
      </section>

      <section id="about" className="py-16 md:py-24 px-4 sm:px-6 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-4">
            <span className="font-mono text-xs text-zinc-500 uppercase tracking-widest">// who I am</span>
            <h2 className="mt-4 text-4xl md:text-5xl font-bold tracking-tight">
              Building the future, one system at a time.
            </h2>
          </div>
          <div className="lg:col-span-8 space-y-6 text-zinc-400 leading-relaxed">
            <p>
              Computer Science graduate from the Federal University Dutsin-Ma (FUDMA), Nigeria — Second Class Upper with a final CGPA of <span className="text-white">4.39</span>, Alhamdulillah — with a deep focus on AI/ML engineering and Full-stack engineering. I designed and built <span className="text-white">TechTrust</span> — an AI-powered developer credential verification platform integrating a MindSpore MLP neural network with GitHub API data. Built as a Team Leader during the Huawei ICT Academy Innovation Competition, reaching the National Finals on January 29, 2026.
            </p>
            <p>
              Beyond code, I served as President of both my Faculty of Computing and the NACOS
              FUDMA Chapter — leading 2,000+ students, organizing national-level hackathons,
              launching clubs, and driving a culture of practical tech excellence.
            </p>
            <p>
              Currently exploring the intersection of AI, robotics, and full-stack systems —
              actively seeking internship and online freelance opportunities to contribute and grow fast.
            </p>
            <dl className="grid sm:grid-cols-2 gap-6 pt-6 border-t border-white/5">
              <div>
                <dt className="text-[10px] font-mono text-electric uppercase tracking-widest">Degree</dt>
                <dd className="mt-1 text-sm">B.Sc. Computer Science, FUDMA — 2:1, CGPA 4.39</dd>
              </div>
              <div>
                <dt className="text-[10px] font-mono text-electric uppercase tracking-widest">Status</dt>
                <dd className="mt-1 text-sm">✦ Open to Work</dd>
              </div>
              <div>
                <dt className="text-[10px] font-mono text-electric uppercase tracking-widest">Email</dt>
                <dd className="mt-1 text-sm font-mono break-all leading-relaxed">
                  techiemuaishaq@gmail.com
                  <br />
                  muhammedishaqjamb20@gmail.com
                </dd>
              </div>
              <div>
                <dt className="text-[10px] font-mono text-electric uppercase tracking-widest">Phone</dt>
                <dd className="mt-1 text-sm font-mono">+234 806 863 8021</dd>
              </div>
            </dl>
          </div>
        </div>
      </section>

      <section id="skills" className="py-16 md:py-24 px-4 sm:px-6 max-w-7xl mx-auto border-t border-white/5">
        <div className="flex flex-wrap justify-between items-baseline gap-3 mb-10 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Technical Stack</h2>
          <span className="font-mono text-xs text-zinc-500 uppercase tracking-widest">
            Pro-Level Proficiency
          </span>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
          {skillGroups.map((group) => (
            <div key={group.title} className="space-y-6">
              <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-zinc-500">
                {group.title}
              </h3>
              <div className="space-y-4">
                {group.items.map((item) => (
                  <div key={item.name}>
                    <div className="flex justify-between text-sm mb-2">
                      <span>{item.name}</span>
                      <span className="text-zinc-500 font-mono">{item.level}%</span>
                    </div>
                    <div className="h-px w-full bg-white/10">
                      <div
                        className="h-px bg-electric transition-all duration-1000"
                        style={{ width: `${item.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
              <div className="flex flex-wrap gap-2 pt-2">
                {group.chips.map((chip) => (
                  <span
                    key={chip}
                    className="text-[10px] font-mono text-zinc-500 border border-white/5 px-2 py-1"
                  >
                    {chip}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="work" className="py-16 md:py-24 px-4 sm:px-6 max-w-7xl mx-auto border-t border-white/5">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center bg-zinc-custom/50 p-6 sm:p-8 md:p-16 border border-white/5">
          <div className="space-y-8">
            <div className="inline-block px-3 py-1 border border-electric/30 text-[10px] font-mono text-electric uppercase tracking-widest">
              ★ Flagship Project
            </div>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
              TechTrust — AI Developer Credential Verification
            </h2>
            <p className="text-zinc-400 leading-relaxed">
              An AI-powered platform that verifies developer credentials and matches them with
              recruiters. Built as Team Leader during the Huawei ICT Academy Innovation
              Competition (National Finals, Jan 29, 2026) and submitted as final year project at
              FUDMA under Dr. Umar Ilaysu. Integrates a MindSpore MLP neural network with the
              GitHub API to assess developer skill authenticity.
            </p>
            <ul className="space-y-3 font-mono text-xs text-zinc-500">
              <li>/ MindSpore MLP neural network</li>
              <li>/ GitHub API integration</li>
              <li>/ Node.js + Express backend, MongoDB</li>
              <li>/ Credential verification engine</li>
            </ul>
            <div className="flex flex-wrap gap-6">
              <a
                href="https://github.com/muaishaq"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block text-sm font-bold uppercase tracking-widest border-b border-electric pb-1 hover:text-electric transition-colors"
              >
                View on GitHub →
              </a>
              <a
                href="https://github.com/fudmatechteam1/techtrust-frontend"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block text-sm font-bold uppercase tracking-widest border-b border-electric pb-1 hover:text-electric transition-colors"
              >
                Team Frontend Repo →
              </a>
            </div>
          </div>
          <pre className="w-full aspect-square bg-carbon border border-white/10 p-6 overflow-x-auto text-[9px] sm:text-[10px] md:text-xs font-mono text-zinc-500 leading-relaxed whitespace-pre">
{`┌───────────────────────────────────┐
│     TechTrust Architecture        │
├───────────────────────────────────┤
│                                  │
│  [GitHub API]   →   [MindSpore]  │
│                       MLP        │
│           ↓           ↓          │
│  [Credential Verification Engine] │
│         (Node.js + Express)      │
│                ↓                  │
│        [MongoDB Database]         │
│                                  │
└───────────────────────────────────┘

>  Final Year Project · 2026
>  Status: National Finalist`}
          </pre>
        </div>

        <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/5 border border-white/5">
          {projects.map((p) => (
            <article
              key={p.title}
              className="bg-carbon p-8 group hover:bg-zinc-custom/40 transition-colors"
            >
              <div className="flex flex-wrap justify-between items-baseline gap-2 mb-4">
                <span className="text-[10px] font-mono text-electric uppercase tracking-widest">
                  {p.year}
                </span>
                <span className="text-[10px] font-mono text-zinc-600 uppercase tracking-widest">
                  {p.category}
                </span>
              </div>
              <h3 className="text-xl font-bold tracking-tight mb-3">{p.title}</h3>
              <p className="text-sm text-zinc-400 leading-relaxed mb-6">{p.blurb}</p>
              <div className="flex flex-wrap gap-2 mb-5">
                {p.stack.map((s) => (
                  <span
                    key={s}
                    className="text-[10px] font-mono text-zinc-500 border border-white/10 px-2 py-1"
                  >
                    {s}
                  </span>
                ))}
              </div>
              <div className="flex flex-wrap gap-x-4 gap-y-2 pt-4 border-t border-white/5">
                {p.links.map((l) => (
                  <a
                    key={l.url}
                    href={l.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[10px] font-mono uppercase tracking-widest text-zinc-400 hover:text-electric transition-colors"
                  >
                    {l.label} →
                  </a>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="leadership" className="py-16 md:py-24 px-4 sm:px-6 max-w-7xl mx-auto border-t border-white/5">
        <div className="flex flex-wrap justify-between items-baseline gap-3 mb-10 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Leadership & Impact</h2>
          <span className="font-mono text-xs text-zinc-500 uppercase tracking-widest">// earned</span>
        </div>
        <div className="space-y-12">
          {leadership.map((l, i) => (
            <div
              key={l.role}
              className="grid md:grid-cols-12 gap-6 pb-12 border-b border-white/5 last:border-0"
            >
              <div className="md:col-span-3 space-y-2">
                <div className="text-[10px] font-mono text-electric uppercase tracking-widest">
                  /{String(i + 1).padStart(2, "0")} · {l.period}
                </div>
                <div className="text-xs font-mono text-zinc-500">{l.org}</div>
              </div>
              <div className="md:col-span-9 space-y-4">
                <h3 className="text-2xl font-bold tracking-tight">{l.role}</h3>
                <ul className="space-y-2">
                  {l.notes.map((n) => (
                    <li key={n} className="flex gap-3 text-sm text-zinc-400">
                      <span className="text-electric font-mono mt-1">→</span>
                      <span>{n}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="journey" className="py-16 md:py-24 px-4 sm:px-6 max-w-7xl mx-auto border-t border-white/5">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-16">Education & Experience</h2>
        <div className="grid md:grid-cols-2 gap-10 md:gap-16">
          <div>
            <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-zinc-500 mb-8">
              // education
            </h3>
            <div className="space-y-8">
              <TimelineItem
                period="2022 – 2026"
                title="B.Sc. Computer Science"
                place="Federal University Dutsin-Ma (FUDMA), Katsina State"
                detail="Full-Stack Engr · DSA · AI/ML · Cloud Computing · Cybersecurity · Systems Analysis · Data Mining · Simulation."
              />
              <TimelineItem
                period="2024 – 2025"
                title="HTML Certification"
                place="Online Assessment Platform"
                detail="Completed online assessment and earned certification in HTML."
              />
              <TimelineItem
                period="2015 – 2020"
                title="Secondary School Certificate (WAEC/NECO)"
                place="Command Secondary School"
                detail="Focus: Science & Mathematics."
              />
            </div>
          </div>
          <div>
            <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-zinc-500 mb-8">
              // experience
            </h3>
            <div className="space-y-8">
              <TimelineItem
                period="2023 – Present"
                title="Freelance Web Developer"
                place="Self-Employed"
                detail="Building responsive custom websites using HTML, CSS, JS, React, Tailwind and Node.js."
              />
              <TimelineItem
                period="2025"
                title="SIWES Industrial Attachment"
                place="Student Industrial Work Experience Scheme"
                detail="Built 3 mini-projects. Major perspective shift in dev approach."
              />
              <TimelineItem
                period="2022 – 2025"
                title="University Web Development Project Lead"
                place="FUDMA"
                detail="Group Leader — coordinated team deliverables and architecture for the CMP 331 Web Design project (Group 5A): a 4-page static site (Home, About, Registration, Contact)."
                links={[
                  { label: "Live", url: "https://muaishaq.github.io/Group-5A-CMP331-Project/" },
                  { label: "GitHub", url: "https://github.com/Muaishaq/Group-5A-CMP331-Project" },
                ]}
              />
            </div>
          </div>
        </div>
      </section>

      <section id="certifications" className="py-16 md:py-24 px-4 sm:px-6 max-w-7xl mx-auto border-t border-white/5">
        <div className="flex flex-wrap justify-between items-baseline gap-3 mb-10 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Verified Learning</h2>
          <span className="font-mono text-xs text-zinc-500 uppercase tracking-widest">08 Credentials</span>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-white/5 border border-white/5">
          {certifications.map((c) => {
            const card = (
              <div className="bg-carbon p-6 space-y-3 hover:bg-zinc-custom/40 transition-colors h-full">
                <div className="flex flex-wrap justify-between items-center gap-2">
                  <span className="size-6 border border-electric/40 text-electric flex items-center justify-center text-xs">
                    ✓
                  </span>
                  <span className="text-[10px] font-mono text-zinc-500">{c.date}</span>
                </div>
                <h3 className="text-sm font-bold leading-snug">{c.name}</h3>
                <p className="text-[11px] font-mono text-zinc-500 uppercase tracking-wider">{c.issuer}</p>
              </div>
            );
            return c.url ? (
              <a
                key={c.name}
                href={c.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block focus:outline-none focus:ring-1 focus:ring-electric"
              >
                {card}
              </a>
            ) : (
              <div key={c.name}>{card}</div>
            );
          })}
        </div>
      </section>

      <section className="py-16 md:py-24 px-4 sm:px-6 max-w-7xl mx-auto border-t border-white/5">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-16">Beyond Code</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-white/5 border border-white/5">
          {interests.map((it) => (
            <div key={it.label} className="bg-carbon p-8 hover:bg-zinc-custom/40 transition-colors">
              <h3 className="text-lg font-bold mb-2">{it.label}</h3>
              <p className="text-sm text-zinc-500">{it.note}</p>
            </div>
          ))}
        </div>
      </section>

      <footer id="contact" className="py-32 px-6 border-t border-white/5 text-center">
        <ExcellenceMark className="size-12 text-electric mx-auto mb-8" />
        <h2 className="text-[clamp(2.25rem,10vw,3.5rem)] md:text-7xl font-bold tracking-tighter mb-12">
          Let's build the
          <br />
          <span className="italic text-electric">future together.</span>
        </h2>
        <p className="text-zinc-400 max-w-xl mx-auto mb-12 leading-relaxed">
          Actively looking for internships, freelance projects, and AI training work. If you have
          a role, a project, or just want to connect — I respond fast.
        </p>
        <div className="flex flex-wrap justify-center gap-x-12 gap-y-6 mb-16 text-sm">
          <a href="mailto:techiemuaishaq@gmail.com" className="text-zinc-400 hover:text-white transition-colors font-mono">
            techiemuaishaq@gmail.com
          </a>
          <a href="mailto:muhammedishaqjamb20@gmail.com" className="text-zinc-400 hover:text-white transition-colors font-mono">
            muhammedishaqjamb20@gmail.com
          </a>
          <a href="tel:+2348068638021" className="text-zinc-400 hover:text-white transition-colors font-mono">
            +234 806 863 8021
          </a>
        </div>
        <div className="flex flex-wrap justify-center gap-8 text-xs font-mono uppercase tracking-widest text-zinc-500">
          <a href="https://linkedin.com/in/muaishaq" target="_blank" rel="noopener noreferrer" className="hover:text-electric transition-colors">LinkedIn</a>
          <a href="https://github.com/muaishaq" target="_blank" rel="noopener noreferrer" className="hover:text-electric transition-colors">GitHub</a>
          <a href="https://twitter.com/muaishaq" target="_blank" rel="noopener noreferrer" className="hover:text-electric transition-colors">Twitter / X</a>
          <a href="https://instagram.com/muaishaq" target="_blank" rel="noopener noreferrer" className="hover:text-electric transition-colors">Instagram · @muaishaq</a>
          <a href="https://instagram.com/techiemuaishaq" target="_blank" rel="noopener noreferrer" className="hover:text-electric transition-colors">Instagram · @techiemuaishaq</a>
          <a href="https://www.youtube.com/channel/UCNFd2UENwxUTvWjsc9FoPPA" target="_blank" rel="noopener noreferrer" className="hover:text-electric transition-colors">YouTube · Channel</a>
        </div>
        <p className="mt-24 text-[10px] font-mono text-zinc-700 uppercase tracking-widest">
          © 2026 Muhammed Ishaq — Keffi, Nigeria
        </p>
      </footer>
    </main>
  );
}

function TimelineItem({
  period,
  title,
  place,
  detail,
  links,
}: {
  period: string;
  title: string;
  place: string;
  detail: string;
  links?: { label: string; url: string }[];
}) {
  return (
    <div className="border-l border-white/10 pl-6 relative">
      <div className="absolute -left-1 top-1 size-2 bg-electric" />
      <div className="text-[10px] font-mono text-electric uppercase tracking-widest mb-2">
        {period}
      </div>
      <h4 className="text-lg font-bold mb-1">{title}</h4>
      <div className="text-xs font-mono text-zinc-500 mb-2">{place}</div>
      <p className="text-sm text-zinc-400 leading-relaxed">{detail}</p>
      {links && links.length > 0 && (
        <div className="mt-3 flex flex-wrap gap-x-4 gap-y-1">
          {links.map((l) => (
            <a
              key={l.url}
              href={l.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[10px] font-mono uppercase tracking-widest text-zinc-400 hover:text-electric transition-colors"
            >
              {l.label} →
            </a>
          ))}
        </div>
      )}
    </div>
  );
}
