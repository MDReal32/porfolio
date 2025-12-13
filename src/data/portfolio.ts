import type { Portfolio } from "../types/portfolio";

export const portfolio: Portfolio = {
  basics: {
    fullName: "Veyis Aliyev",
    preferredName: "MDReal",
    title: "Senior Frontend Developer",
    location: "Baku, Azerbaijan",
    email: "mdrealiyev00@gmail.com",
    phone: "+994103311969",
    links: {
      linkedin: "https://www.linkedin.com/in/mdrealiyev/"
    }
  },
  summary: {
    lines: [
      "Senior Frontend Developer focused on scalable UI architecture, SSR/SSG, and performance-critical applications.",
      "Experienced across Node.js backend, infrastructure, and developer tooling with a strong systems mindset."
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
        "Developed high-performance React applications for large-scale government projects",
        "Improved UI responsiveness and user interaction performance",
        "Applied TypeScript patterns to improve maintainability and reduce bugs"
      ]
    },
    {
      company: "DevOps / Backend NodeJS",
      role: "Middle Backend & DevOps Developer",
      location: "Istanbul, Türkiye",
      start: "2021-11",
      end: "2022-12",
      highlights: [
        "Built real-time systems using Node.js and WebSockets",
        "Implemented SSR/SSG with Next.js to improve SEO and load times",
        "Managed Kubernetes-based microservices infrastructure",
        "Automated deployments and configuration using Ansible"
      ]
    },
    {
      company: "MVP Engine (jetbase.io)",
      role: "Middle Fullstack Developer",
      location: "Krakiv, Ukraine",
      start: "2021-10",
      end: "2022-03",
      highlights: [
        "Designed modular backend systems using NestJS",
        "Built React-based frontend applications",
        "Integrated AWS S3 and Google Maps APIs",
        "Worked with relational databases via TypeORM"
      ]
    },
    {
      company: "Crinfotask LLC",
      role: "Junior Software Developer",
      location: "Baku, Azerbaijan",
      start: "2019-09",
      end: "2021-10",
      highlights: [
        "Developed automated decision systems using Python and Django",
        "Containerized services with Docker",
        "Worked with Kubernetes and CI/CD pipelines"
      ]
    },
    {
      company: "Kibrit MMC",
      role: "Junior Frontend Developer",
      location: "Baku, Azerbaijan",
      start: "2018-08",
      end: "2019-09",
      highlights: [
        "Developed internal React applications",
        "Worked with Redux and Saga for state management",
        "Built responsive UIs using TailwindCSS and Bootstrap"
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
    secondary: ["Vue.js (2/3)", "NestJS", "REST APIs", "WebSockets"],
    tooling: ["Docker", "Kubernetes", "Ansible", "Git", "CI/CD"]
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
        { label: "GitHub", href: "https://github.com/Velnora/velnora" }
        // { label: "Docs", href: "..." },
      ]
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
        { label: "GitHub", href: "https://github.com/MDReal32/nestjs-tg-bot" },
        { label: "NPM", href: "https://npm.im/@mdreal/nestjs-tg-bot" }
      ]
    }
  ]
};
