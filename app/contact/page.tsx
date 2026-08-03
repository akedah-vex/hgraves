import Link from "next/link";
import Button from "../components/button";

export default function Contact() {
  return (
    <main className="text-center px-4 max-w-3xl">
      <h1 className="text-6xl md:text-8xl font-bold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 dark:from-blue-300 dark:via-purple-300 dark:to-pink-500">
        Contact
      </h1>
      <p className="text-xl md:text-2xl text-zinc-600 dark:text-zinc-400 mb-8 max-w-2xl mx-auto">Let's connect. I'm always open to collaborations.</p>
      <div className="flex justify-center">
        <Button variant="primary" href="https://www.linkedin.com/in/hjgraves/">
          Linkedin
        </Button>
      </div>
    </main>
  );
}
