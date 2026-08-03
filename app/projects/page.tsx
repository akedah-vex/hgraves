import Link from "next/link";
import Card from "../components/card";

export default function Projects() {
  return (
    <main className="text-center px-4 max-w-3xl">
      <h1 className="text-6xl md:text-8xl font-bold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 dark:from-blue-300 dark:via-purple-300 dark:to-pink-500">
        Projects
      </h1>
      <p className="text-xl md:text-2xl text-zinc-600 dark:text-zinc-400 mb-8 max-w-2xl mx-auto">Work in progress. Coming soon.</p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
        <Card title="Project 1" description="Placeholder for scalable project card structure." />
        <Card title="Project 2" description="Placeholder for scalable project card structure." />
        <Card title="Project 3" description="Placeholder for scalable project card structure." />
      </div>

      <Link href="/" className="px-8 py-3 rounded-full bg-black text-white font-medium hover:bg-zinc-900 transition-colors shadow-lg dark:hover:shadow-blue-500/20">Back to Home</Link>
    </main>
  );
}
