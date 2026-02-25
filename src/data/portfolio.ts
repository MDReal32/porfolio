import type { Portfolio } from "../types/portfolio/portfolio";

export const portfolio: Portfolio = {
  basics: {
    fullName: "Veyis Aliyev",
    preferredName: "MDReal",
    title: "Senior Frontend Developer",
    location: "Baku, Azerbaijan",
    email: "mdrealiyev00@gmail.com",
    phone: "+994103311969",
    links: {
      linkedin: "https://www.linkedin.com/in/mdrealiyev",
      github: "https://github.com/MDReal32",
      website: "https://mdreal.org",
      blog: "https://velnora.notion.site"
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
    tooling: ["CLI tooling", "Code generation", "Docker", "Kubernetes", "Git", "CI/CD", "Ansible"]
  },
  languages: [
    { name: "Azerbaijani", level: "Native" },
    { name: "Russian", level: "B2" },
    { name: "English", level: "B2" }
  ],
  projects: [
    {
      name: "Velnora",
      tagline: "A modular web framework focused on SSR, plugins, and developer tooling.",
      highlights: [
        "Designed a plugin-based architecture for integrating different app types (CSR/SSR/RSC-ready direction).",
        "Built a custom SSR pipeline with emphasis on correctness, performance, and DX.",
        "Focused on scalable routing + runtime integration patterns (framework-level design)."
      ],
      stack: ["TypeScript", "Node.js", "Vite", "SSR"],
      featured: true,
      links: [
        { type: "github", label: "GitHub", href: "https://github.com/Velnora/velnora" }
        // { label: "Docs", href: "..." },
      ],
      status: "active"
    },
    {
      name: "NestJS Telegram Bot Framework",
      tagline: "A reusable NestJS module for grammY bots with clean DI and multi-bot support.",
      highlights: [
        "Built dynamic module registration patterns (forRoot/forRootAsync) for flexible configuration.",
        "Designed decorator-based handlers and routing/explorer patterns for clean bot commands.",
        "Structured for multi-bot scenarios using tokens/registry patterns and strong typing."
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
      tagline: "An Express-Like fast web server built on top of Bun",
      highlights: [
        "Implemented routing, middleware, and request/response handling similar to Express.js.",
        "Optimized for performance using Bun's high-speed JavaScript engine.",
        "Designed a modular architecture for easy extension and customization."
      ],
      stack: ["TypeScript", "Bun", "Web Servers"],
      links: [
        { type: "github", label: "GitHub", href: "https://github.com/MDReal32/swiftserve" },
        { type: "npm", label: "NPM", href: "https://npm.im/swiftserve" }
      ],
      status: "completed"
    }
  ]
};
