import Link from "next/link";

export default function Projects() {
  return (
    <main className="text-center px-4 max-w-3xl">
      <h1 className="text-6xl md:text-8xl font-bold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 dark:from-blue-300 dark:via-purple-300 dark:to-pink-500">
        Projects
      </h1>
      <p className="text-xl md:text-2xl text-zinc-600 dark:text-zinc-400 mb-8 max-w-2xl mx-auto">Work in progress. Coming soon.</p>

      {/* Placeholder structure for future scalability */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
        <div className="bg-white dark:bg-zinc-900/50 border border-zinc-200 dark:border-zinc-800 rounded-2xl p-6 shadow-[0_4px_12px_rgba(99,102,241,0.08)] dark:shadow-[0_4px_12px_rgba(59,130,246,0.12)]">
          <h3 className="text-lg font-semibold mb-2 text-zinc-900 dark:text-white">Project 1</h3>
          <p className="text-sm text-zinc-500 dark:text-zinc-400">Placeholder for scalable project card structure.</p>
        </div>
        <div className="bg-white dark:bg-zinc-900/50 border border-zinc-200 dark:border-zinc-800 rounded-2xl p-6 shadow-[0_4px_12px_rgba(99,102,241,0.08)] dark:shadow-[0_4px_12px_rgba(59,130,246,0.12)]">
          <h3 className="text-lg font-semibold mb-2 text-zinc-900 dark:text-white">Project 2</h3>
          <p className="text-sm text-zinc-500 dark:text-zinc-400">Placeholder for scalable project card structure.</p>
        </div>
        <div className="bg-white dark:bg-zinc-900/50 border border-zinc-200 dark:border-zinc-800 rounded-2xl p-6 shadow-[0_4px_12px_rgba(99,102,241,0.08)] dark:shadow-[0_4px_12px_rgba(59,130,246,0.12)]">
          <h3 className="text-lg font-semibold mb-2 text-zinc-900 dark:text-white">Project 3</h3>
          <p className="text-sm text-zinc-500 dark:text-zinc-400">Placeholder for scalable project card structure.</p>
        </div>
      </div>

      <Link href="/" className="px-8 py-3 rounded-full bg-black text-white font-medium hover:bg-zinc-900 transition-colors shadow-lg dark:hover:shadow-blue-500/20">Back to Home</Link>
    </main>
  );
}
