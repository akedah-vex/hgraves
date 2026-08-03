import Link from "next/link";
import Card from "../components/card";
import Button from "../components/button";

export default function Skills() {
  return (
    <main className="text-center pt-30 px-4 max-w-3xl mx-auto min-h-screen h-screen overflow-y-auto scroll-pt-4 pt-8 [&::-webkit-scrollbar]:hidden
  [-ms-overflow-style:none]
  [scrollbar-width:none]">
      <h1 className="text-6xl md:text-8xl font-bold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 dark:from-blue-300 dark:via-purple-300 dark:to-pink-500">
        Skills
      </h1>
      <p className="text-xl md:text-2xl text-zinc-600 dark:text-zinc-400 mb-8 max-w-2xl mx-auto">
        A breakdown of the core technologies I use to build.<br /> Anything is learnable.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        <Card 
          title="Frontend & UI/UX" 
          description="React, Vite, Tailwind CSS, TypeScript, Javascript, HTML, CSS, Learning Next.js" />
        <Card 
          title="Backend & Services" 
          description="Node.js, Python, langchain, REST APIs, " />
        <Card 
          title="DevOps & Infrastructure" 
          description="Agentic Coding Infrastructure, Git, Docker, Vercel, CI/CD, Cloud Architecture" />
        <Card 
          title="Database Solutions"
          description="PostgreSQL, MySQL, MongoDB, Firebase" />
        <Card 
          title="AI Tools" 
          description="Aider, LangChain, LM Studio" />
          <Card 
          title="Embedded Systems" 
          description="C/C++, Ada, Learning Zig!" />
      </div>

      <Button href="/contact" variant="primary">
        Let's Connect
      </Button>
    </main>
  );
}
