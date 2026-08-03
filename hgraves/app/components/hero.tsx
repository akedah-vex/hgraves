import Link from "next/link";

export default function Hero({ title, description, primaryLink, primaryText, secondaryLink, secondaryText }) {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-zinc-50 font-sans dark:bg-black relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-100 via-transparent to-purple-100 dark:from-blue-900/20 dark:via-transparent dark:to-blue-900/20"></div>
      <main className="relative z-10 text-center px-4">
        <h1 className="text-6xl md:text-8xl font-bold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 dark:from-blue-300 dark:via-purple-300 dark:to-pink-300">
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
