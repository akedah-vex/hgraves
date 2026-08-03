import Link from "next/link";

export default function Hero({ title, description, primaryLink, primaryText, secondaryLink, secondaryText }) {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen relative overflow-hidden">
      <div className="absolute opacity-10 bg-gradient-to-br from-slate-800/20 via-transparent to-indigo-900/30 dark:from-slate-950/40 dark:via-transparent dark:to-indigo-950/40 pointer-events-none"></div>
      <main className="relative  z-10 text-center px-4">
        <h1 className="text-6xl md:text-8xl font-bold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 dark:from-blue-300 dark:via-purple-300 dark:to-pink-500">
          {title}
        </h1>
        <p className="text-xl md:text-2xl text-zinc-600 dark:text-zinc-400 mb-8 max-w-2xl mx-auto">
          {description}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a href={primaryLink} className="px-8 py-3 rounded-full bg-black text-white font-medium hover:bg-zinc-900 transition-colors shadow-lg dark:hover:shadow-blue-500/20">
            {primaryText}
          </a>
          <a href={secondaryLink} className="px-8 py-3 rounded-full border border-zinc-300 dark:border-zinc-700 text-zinc-900 dark:text-white font-medium hover:bg-zinc-50 dark:hover:bg-zinc-900/20 transition-colors">
            {secondaryText}
          </a>
        </div>
      </main>
    </div>
  );
}
