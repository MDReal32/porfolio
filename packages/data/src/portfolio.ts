import type { Portfolio } from "./types/portfolio/portfolio";

export const portfolio: Portfolio = {
  basics: {
    fullName: "Veyis Aliyev",
    preferredName: "MDReal",
    avatar: "https://avatars.githubusercontent.com/u/40066034",
    title: "Software Engineer (Fullstack, APIs, Developer Tooling)",
    location: "Baku, Azerbaijan",
    email: "mdrealiyev00@gmail.com",
    phone: "+994103311969",
    dateOfBirth: "2000-08-03",
    placeOfBirth: "Baku, Azerbaijan",
    nationality: "Azerbaijani",
    gender: "Male",
    address: "Baku, AZ1000, Azerbaijan",
    links: {
      linkedin: "https://www.linkedin.com/in/mdrealiyev",
      github: "https://github.com/MDReal32",
      website: "https://mdreal.org",
      blog: "https://velnora.notion.site",
      orcid: "https://orcid.org/0000-0002-8545-1825"
    }
  },
  summary: {
    lines: [
      "Fullstack software engineer with experience in developer tooling and API integration. Focus on SDK-style client design, shared patterns, and modular systems that reduce setup time and keep projects consistent. Worked with authentication, pagination, error handling, and versioned services. Care about clear contracts, stable architecture, and simple onboarding."
    ]
  },
  experience: [
    {
      company: "Cybernet LLC",
      role: "Senior Frontend Developer",
      location: "Baku, Azerbaijan",
      start: "2022-07",
      end: "Present",
      highlights: [
        "Built large React applications for government e-services with a focus on stability and performance. Standardized UI patterns and shared modules to keep projects consistent. Worked with backend teams to align API contracts and fix integration issues. Used TypeScript to reduce runtime errors and improve maintainability."
      ]
    },
    {
      company: "MVP Engine (jetbase.io)",
      role: "Senior Fullstack developer",
      location: "Krakiv, Ukraine",
      start: "2021-10",
      end: "2022-03",
      highlights: [
        "Designed modular services with NestJS and clear API boundaries. Built React features that consumed APIs through shared client patterns. Integrated AWS S3 and Google Maps. Worked with relational data using TypeORM."
      ]
    },
    {
      company: "Crinfotask LLC",
      role: "Fullstack Developer (SDK-weighted)",
      location: "Baku, Azerbaijan",
      start: "2019-09",
      end: "2021-10",
      highlights: [
        "Developed service-oriented applications with Python and Django. Defined clear API contracts and built reusable SDK-style client patterns for data access. Standardized request and response handling to keep integrations consistent. Used containerized environments and CI/CD pipelines to support repeatable builds and deployments."
      ]
    },
    {
      company: "Kibrit MMC",
      role: "Frontend Developer",
      location: "Baku, Azerbaijan",
      start: "2018-08",
      end: "2019-09",
      highlights: [
        "Built internal web applications using React and shared UI components. Consumed REST APIs through structured data flows. Used Redux and Saga to keep state handling predictable. Created responsive layouts and followed a consistent project structure."
      ]
    }
  ],
  education: [
    {
      school: "Azerbaijan Technical University (AzTU)",
      program: "Computer Science",
      location: "Baku, Azerbaijan",
      start: "2017-09",
      end: "2021-05",
      website: "https://aztu.edu.az"
    },
    {
      school: "Azerbaijan Technical University (AzTU)",
      program: "Computer Security",
      location: "Baku, Azerbaijan",
      start: "2021-09",
      end: "2023-05",
      website: "https://aztu.edu.az"
    }
  ],
  skills: {
    primary: ["TypeScript", "Node.js", "React", "API integration"],
    secondary: ["NestJS", "REST APIs", "GraphQL", "WebSockets", "SSR / SSG", "Vue.js (2/3)"],
    tooling: ["CLI tooling", "Code generation", "Docker", "Kubernetes", "Git", "CI/CD", "Ansible"],
    categories: [
      { label: "Languages", items: ["TypeScript", "JavaScript", "Python"] },
      { label: "Frameworks", items: ["React", "Vue.js (2/3)", "NestJS", "Express.js", "Django"] },
      { label: "Developer Tools", items: ["Docker", "Kubernetes", "Git", "GitHub", "Jenkins", "CI/CD", "Ansible"] },
      { label: "Libraries & UI", items: ["Redux", "TailwindCSS", "Material UI", "React Router", "Storybook"] },
      { label: "Concepts", items: ["REST APIs", "GraphQL", "WebSockets", "SSR / SSG", "Code generation"] }
    ]
  },
  languages: [
    { name: "Azerbaijani", level: "Native" },
    { name: "Russian", level: "B2" },
    { name: "English", level: "B2" }
  ],
  projects: [
    {
      name: "Velnora",
      start: "2023-12",
      end: "Present",
      tagline: "Modular framework for SSR, routing, runtime plugins, and developer tooling.",
      highlights: [
        "Designed a plugin-based architecture for integrating different app types (CSR/SSR/RSC-ready direction).",
        "Built typed API client patterns and shared schemas for consistent service integration.",
        "Built generators and configuration layers that reduce manual setup and keep projects consistent."
      ],
      stack: ["TypeScript", "Node.js", "Vite", "SSR"],
      featured: true,
      links: [
        { type: "github", label: "GitHub", href: "https://github.com/Velnora/velnora" },
        { type: "blog", label: "Blog", href: "https://velnora.notion.site" }
        // { label: "Docs", href: "..." },
      ],
      status: "active"
    },
    {
      name: "NestJS Telegram Bot Framework",
      start: "2025-09",
      end: "Present",
      tagline: "A reusable NestJS module for grammY bots with clean DI and multi-bot support.",
      highlights: [
        "Built dynamic module registration patterns (forRoot/forRootAsync) for flexible configuration.",
        "Designed decorator-based handlers and routing/explorer patterns for clear bot commands.",
        "Supported multi-bot setups using tokens and a registry approach with strong typing."
      ],
      stack: ["TypeScript", "NestJS", "grammY"],
      featured: true,
      links: [
        { type: "github", label: "GitHub", href: "https://github.com/MDReal32/nestjs-tg-bot" },
        { type: "npm", label: "NPM", href: "https://npm.im/@mdreal/nestjs-tg-bot" }
      ],
      status: "completed"
    },
    {
      name: "Swiftserve",
      tagline: "An Express-like fast web server built on top of Bun",
      highlights: [
        "Implemented routing, middleware, and request/response handling similar to Express.js.",
        "Focused on fast startup and low overhead on Bun runtime.",
        "Designed a modular structure so features can be added without touching the core."
      ],
      stack: ["TypeScript", "Bun", "Web Servers"],
      links: [
        { type: "github", label: "GitHub", href: "https://github.com/MDReal32/swiftserve" },
        { type: "npm", label: "NPM", href: "https://npm.im/swiftserve" }
      ],
      status: "completed"
    }
  ],
  publications: [
    {
      title: "WiFi from Past to Today, Consequences That Can Cause and Measures of Prevention from Them, WiFi Security Protocols",
      authors:
        "Firdus, E., Aghababayev, R., Aliyev, V., Mustafayeva, G., Mayilov, R., Sardarova, I., & Bakhshaliyeva, S.",
      highlight: "Aliyev, V.",
      venue: "E3S Web of Conferences, Vol. 474, Art. 02004 (ICITE 2023)",
      year: 2024,
      doi: "10.1051/e3sconf/202447402004",
      note: "Scopus-indexed"
    },
    {
      title: "Holographic Discs — Volumetric Media and Quality Data Storage Media",
      authors: "Firdus, E., Rustamova, D., Aliyev, V., Sharifli, S., Mayilov, R., & Mehdiyeva, A.",
      highlight: "Aliyev, V.",
      venue: "Software Engineering Methods in Systems and Network Systems (CoMeSySo 2023), Lecture Notes in Networks and Systems, Vol. 909, Springer",
      year: 2024,
      doi: "10.1007/978-3-031-53549-9_8",
      note: "Scopus-indexed"
    },
    {
      title: "Virtual Reality in Training Impact on Students of Educational Programs in Augmented Reality",
      authors: "Firdus, E., Rustamova, D. F., Aliyev, V. K., & Talibov, Z. A.",
      highlight: "Aliyev, V. K.",
      venue: "Journal of Pharmaceutical Negative Results, Vol. 14, Special Issue 02",
      year: 2023,
      url: "https://www.pnrjournal.com/index.php/home/article/view/6536",
      note: "Scopus Q4"
    },
    {
      title: "Wi-Fi Networks: Cyber Security Monitoring System",
      authors: "Firdus, E., Rustamova, D. F., Aliyev, V. K., & Atakishi, T. T.",
      highlight: "Aliyev, V. K.",
      venue: "Journal of Pharmaceutical Negative Results, Vol. 14, Regular Issue 02",
      year: 2023,
      doi: "10.47750/pnr.2023.14.02.130",
      note: "Scopus Q4"
    },
    {
      title: "Virtual Reality — Today and Tomorrow: Can Augmented Reality Play a Leading Role in Education?",
      authors: "Firdus, E., Rustamova, D. F., Aliyev, V. K., & Talibov, Z. A.",
      highlight: "Aliyev, V. K.",
      venue: "Endless Light in Science (Int. Scientific-Practical Journal), Almaty, Kazakhstan, pp. 193–200",
      year: 2022,
      doi: "10.24412/2709-1201-2022-193-200"
    }
  ],
  presentations: [
    {
      title: "FLUXORA: Çətin İnkişaf Yollarının Sadə və Asan Həlli",
      event:
        'Republican Scientific-Practical Conference of Young Researchers "Global Challenges and Perspectives" (102nd anniversary of Heydar Aliyev)',
      location: "Western Caspian University, Baku",
      date: "14 May 2025"
    }
  ]
};
