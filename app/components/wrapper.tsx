import React from 'react';
import Footer from './footer';

interface WrapperProps {
  children: React.ReactNode;
}

/**
 * A reusable wrapper component to enforce consistent layout styling across all major page sections.
 * It provides global padding, max-width constraints, and handles dark/light mode context.
 */
export default function Wrapper({ children }: WrapperProps) {
  return (
    <>
      <div className="bg-zinc-50 dark:bg-black text-zinc-800 dark:text-zinc-200 ">
        {/* Main content container with consistent padding and max width */}
        <main className="pb-20 text-center pt-30 px-4 w-full max-w-3xl mx-auto min-h-screen h-screen overflow-y-auto scroll-pt-4 pt-8 [&::-webkit-scrollbar]:hidden
          [-ms-overflow-style:none]
          [scrollbar-width:none]">
          {children}
        </main>
      </div>
     </>
  );
}
