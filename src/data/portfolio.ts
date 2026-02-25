import type { Portfolio } from "../types/portfolio/portfolio";

export const portfolio: Portfolio = {
  basics: {
    fullName: "Veyis Aliyev",
    preferredName: "MDReal",
    title: "Software Engineer (Fullstack, APIs, Developer Tooling)",
    location: "Baku, Azerbaijan",
    email: "mdrealiyev00@gmail.com",
    phone: "+994103311969",
    links: {
      linkedin: "https://www.linkedin.com/in/mdrealiyev/"
    }
  },
  summary: {
    lines: [
      "Fullstack software engineer focused on APIs, integration patterns, and developer tooling.",
      "Builds type-safe systems in TypeScript across client and server, with a focus on maintainability and clear contracts."
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
        "Worked with backend teams to align API contracts and reduce integration issues",
        "Used shared data access patterns to keep API usage consistent across modules"
      ]
    },
    {
      company: "Node.js Platform Work",
      role: "Fullstack Developer",
      location: "Istanbul, Türkiye",
      start: "2021-11",
      end: "2022-12",
      highlights: [
        "Built real-time features using Node.js and WebSockets",
        "Implemented SSR/SSG with Next.js to improve load time and SEO",
        "Worked with containerized services and automated deployment flows",
        "Focused on reliable API integration across client and server"
      ]
    },
    {
      company: "MVP Engine (jetbase.io)",
      role: "Fullstack Developer",
      location: "Krakiv, Ukraine",
      start: "2021-10",
      end: "2022-03",
      highlights: [
        "Designed modular services with NestJS and clear API boundaries",
        "Built React features that consumed APIs through shared client patterns",
        "Integrated AWS S3 and Google Maps in product flows",
        "Worked with relational databases using TypeORM"
      ]
    },
    {
      company: "Crinfotask LLC",
      role: "Fullstack Developer",
      location: "Baku, Azerbaijan",
      start: "2019-09",
      end: "2021-10",
      highlights: [
        "Developed service-oriented applications using Python and Django",
        "Defined clear API contracts and built SDK-style client patterns for data access",
        "Standardized request and response handling to keep integrations consistent",
        "Used Docker and CI/CD pipelines to support repeatable builds and deployments"
      ]
    },
    {
      company: "Kibrit MMC",
      role: "Frontend Developer",
      location: "Baku, Azerbaijan",
      start: "2018-08",
      end: "2019-09",
      highlights: [
        "Built internal web applications using React and shared UI components",
        "Consumed REST APIs through structured data flows",
        "Used Redux and Saga to keep state handling predictable",
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
