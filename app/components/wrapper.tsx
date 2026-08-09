import React from 'react';

interface WrapperProps {
  children: React.ReactNode;
}

/**
 * A reusable wrapper component to enforce consistent layout styling across all major page sections.
 * It provides global padding, max-width constraints, and handles dark/light mode context.
 */
export default function Wrapper({ children }: WrapperProps) {
  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-black text-zinc-800 dark:text-zinc-200">
      {/* Main content container with consistent padding and max width */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        {children}
      </main>
    </div >
  );
}
