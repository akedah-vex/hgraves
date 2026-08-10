import React from "react";

const CURRENT_YEAR = new Date().getFullYear();

export default function Footer() {
  return (
    <footer className="text-center text-sm text-zinc-400 py-6">
      Built with Next.js, Tailwind CSS, a custom-built local LLM toolchain, and a lot of caffeine. <br /><br />
      Henry J. Graves - {CURRENT_YEAR}
    </footer>
  );
}
