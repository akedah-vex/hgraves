import Link from "next/link";
import Card from '../components/card';

export default function About() {
  return (
    <main className="text-center px-4 max-w-3xl">
      <h1 className="text-6xl md:text-8xl font-bold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 dark:from-blue-300 dark:via-purple-300 dark:to-pink-500">
        About Me
      </h1>
      <p className="text-xl md:text-2xl text-zinc-600 dark:text-zinc-400 mb-8 max-w-2xl mx-auto">
        I'm Henry Graves, a software engineer passionate about building scalable web applications and exploring the intersection of AI and frontend development.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        <Card title="Frontend" description="React, Next.js, Tailwind CSS" />
        <Card title="Backend & AI" description="Node.js, Python, Custom LLM Toolchain" />
        <Card title="DevOps & Infra" description="Git, Docker, Vercel, CI/CD Pipelines" />
      </div>

      <Link href="/contact" className="px-8 py-3 rounded-full bg-black text-white font-medium hover:bg-zinc-900 transition-colors shadow-lg dark:hover:shadow-blue-500/20">
        Let's Connect
      </Link>
    </main>
  );
}
