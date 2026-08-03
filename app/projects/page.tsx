import Link from "next/link";
import Card from "../components/card";
import Button from "../components/button";
import Footer from "../components/footer";
import { JSX } from "react/jsx-runtime";

export default function Projects() {
  const link = "https://dehank.com";

  const ref = <Link href={link} target="_blank" rel="noopener noreferrer">
    dehank.com
  </Link>;
  return (
    <main className="text-center px-4 max-w-3xl mx-auto min-h-screen h-screen overflow-y-auto scroll-pt-4 pt-8 [&::-webkit-scrollbar]:hidden
  [-ms-overflow-style:none]
  [scrollbar-width:none]">
      <h1 className="pt-20 text-6xl md:text-8xl font-bold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 dark:from-blue-300 dark:via-purple-300 dark:to-pink-500">
        Projects
      </h1>
      <p className="text-xl md:text-2xl text-zinc-600 dark:text-zinc-400 mb-8 max-w-2xl mx-auto">
        Technical projects I work on for fun and use to learn new skills
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-1 gap-7 mt-8 scroll-py-4 scroll-px-4 scrollbars">
        <Card 
          link="https://github.com/akedah-vex/dehank.com.git"
          title="Full Stack Web Application" 
          subTitle={"dehank.com"} 
          description="Developing a continuously evolving full-stack web application with a React/Vite frontend and RESTful API backend" 
          bullets={[
            "Built with modern web technologies; React/Vite frontend and RESTful API backend",
            "Authentication using JWT.",
            "Automated deliveries via local CI/CD pipeline that connects to GitHub Actions for live deployments."
          ]}
        />
        <Card 
          title="Local Agentic Coding Toolchain"
          subTitle="Aider / LangChain / LM Studio"
          description="Built a local agentic coding toolchain on my homelab using aider, langchain and lmstudio to increase productivity." 
          bullets={[
            "Uses FastAPI to recieve requests from aider (or any other service I set up in the future).",
            "Developed custom tooling in the orchestration layer to allow for web search capabilities using SearXNG.",
            "Used it to build this website.",
            "No rate limits for me."
          ]}  
        />
        
        <Card 
          title="DevSecOps CI/CD Pipeline // Homelab"
          subTitle="Proxmox / Kali Linux / Forgejo / GCP / DAST & SAST"
          description="Architected and implemented a DevSecOps CI/CD pipeline for my homelab to ensure robust application deployments." 
          bullets={[
            "Designed and implemented a comprehensive CI/CD pipeline that included OWASP ZAP security scans, SAST / DAST analysis, as well as live deployment to a local VPS for internal testing.",
            "Interested in adding local LLM integration to generate automated code suggestions / reports / documentation / critiques.",
            "This pipeline deploys dehank.com to production."
          ]}
        />
      </div>

      <div className="flex justify-center pt-10">
        <Button variant="primary" href="/experience">
          Professional Experience
        </Button>
      </div>
      <Footer />
    </main>
  );
}
