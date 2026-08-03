import Link from "next/link";
import Button from './button'

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
          <Button href="/experience" variant="primary">
            Experience
          </Button>
          <Button href="/projects" variant="primary">
            Projects
          </Button>
          <Button href="/skills" variant="primary">
            Skills
          </Button>
          <Button variant="secondary" href="/contact">
            Let's Connect
          </Button>
        </div>
      </div>
    </nav>
  );
}
