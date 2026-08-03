import Link from "next/link";
import Card from "../components/card";
import Button from "../components/button";

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

      <div className="flex justify-center pt-10">
        <Button variant="primary" href="https://www.linkedin.com/in/hjgraves/">
          Linkedin
        </Button>
      </div>
    </main>
  );
}
