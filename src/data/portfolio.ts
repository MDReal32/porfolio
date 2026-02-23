import type { Portfolio } from "../types/portfolio/portfolio";

export const portfolio: Portfolio = {
  basics: {
    fullName: "Veyis Aliyev",
    preferredName: "MDReal",
    title: "Software Engineer (Frontend, APIs, Developer Tooling)",
    location: "Baku, Azerbaijan",
    email: "mdrealiyev00@gmail.com",
    phone: "+994103311969",
    links: {
      linkedin: "https://www.linkedin.com/in/mdrealiyev/"
    }
  },
  summary: {
    lines: [
      "Software engineer focused on scalable UI architecture, API integration, and developer tooling.",
      "Builds type-safe systems in TypeScript across frontend and Node.js, with a strong focus on DX and maintainability."
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
        "Built large React applications for government e-services with a focus on stability and performance",
        "Standardized UI patterns and shared modules to keep projects consistent across teams",
        "Improved API integration reliability by aligning frontend contracts with backend teams",
        "Used TypeScript patterns to reduce bugs and keep code easy to change"
      ]
    },
    {
      company: "DevOps / Backend NodeJS",
      role: "Middle Backend & DevOps Developer",
      location: "Istanbul, Türkiye",
      start: "2021-11",
      end: "2022-12",
      highlights: [
        "Built real-time features using Node.js and WebSockets",
        "Implemented SSR/SSG with Next.js to improve load time and SEO",
        "Operated microservices infrastructure on Kubernetes and Docker",
        "Automated deployments and configuration using Ansible and CI/CD pipelines"
      ]
    },
    {
      company: "MVP Engine (jetbase.io)",
      role: "Middle Fullstack Developer",
      location: "Krakiv, Ukraine",
      start: "2021-10",
      end: "2022-03",
      highlights: [
        "Designed modular backend services with NestJS and clear API boundaries",
        "Built React features that consumed APIs through shared client patterns",
        "Integrated AWS S3 and Google Maps in product flows",
        "Worked with relational databases using TypeORM"
      ]
    },
    {
      company: "Crinfotask LLC",
      role: "Junior Software Developer",
      location: "Baku, Azerbaijan",
      start: "2019-09",
      end: "2021-10",
      highlights: [
        "Built decision and scoring services using Python and Django",
        "Containerized services with Docker for consistent environments",
        "Worked with Kubernetes and CI/CD to improve delivery flow"
      ]
    },
    {
      company: "Kibrit MMC",
      role: "Junior Frontend Developer",
      location: "Baku, Azerbaijan",
      start: "2018-08",
      end: "2019-09",
      highlights: [
        "Built internal React apps for day-to-day business workflows",
        "Used Redux and Saga for state management in complex screens",
        "Created responsive UI with TailwindCSS and Bootstrap"
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
    primary: ["React", "TypeScript", "Node.js", "SSR / SSG"],
    secondary: ["Vue.js (2/3)", "NestJS", "REST APIs", "WebSockets", "GraphQL"],
    tooling: ["Docker", "Kubernetes", "Ansible", "Git", "CI/CD", "Code generation", "CLI tooling"]
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
        "Built an SSR pipeline with clear boundaries, strong typing, and focus on DX.",
        "Worked on routing and runtime integration patterns with a focus on long-term maintainability."
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
  ]
};
