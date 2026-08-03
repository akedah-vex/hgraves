import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-black/80 backdrop-blur-sm border-b border-zinc-200 dark:border-zinc-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Brand / Home Link */}
        <Link href="/" className="text-xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 dark:from-blue-300 dark:via-purple-300 dark:to-pink-500">
          Henry Graves
        </Link>

        {/* Navigation Links */}
        <div className="flex flex-col sm:flex-row gap-4 items-center justify-end">
          <Link href="/experience" className="text-lg font-medium text-zinc-600 dark:text-zinc-300 hover:bg-zinc-50 dark:hover:bg-zinc-900/20 px-4 py-2 rounded-full transition-colors duration-200">
            Experience
          </Link>
          <Link href="/projects" className="text-lg font-medium text-zinc-600 dark:text-zinc-300 hover:bg-zinc-50 dark:hover:bg-zinc-900/20 px-4 py-2 rounded-full transition-colors duration-200">
            Projects
          </Link>
          <Link href="/skills" className="text-lg font-medium text-zinc-600 dark:text-zinc-300 hover:bg-zinc-50 dark:hover:bg-zinc-900/20 px-4 py-2 rounded-full transition-colors duration-200">
            Skills
          </Link>

          <Link href="/contact" className="text-lg px-8 py-3 rounded-full bg-black text-white font-medium hover:bg-zinc-900 transition-colors shadow-lg dark:hover:shadow-blue-500/20">
            Let's Connect
          </Link>
        </div>
      </div>
    </nav>
  );
}
