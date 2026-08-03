import type { ReactNode } from "react";
import Link from "next/link";

export type ButtonVariant = "primary" | "secondary";

export default function Button({ variant, children, onClick, href }: {
  variant: ButtonVariant;
  children: ReactNode;
  onClick?: () => void;
  href?: string;
}) {
  const isPrimary = variant === "primary";
  const isSecondary = variant === "secondary";

  if (!href) return

  return (
    <div className="flex justify-center">
    <Link
      href={href}
      onClick={onClick}
      className={`flex items-center justify-center px-8 py-3 rounded-full font-medium transition-all duration-200 ease-in-out ${
        isPrimary
          ? "bg-black text-white hover:border border-indigo-500 dark:hover:shadow-[0_0_16px_rgba(99,102,241,0.3)] shadow-[0_4px_12px_rgba(99,102,241,0.08)] dark:shadow-[0_4px_12px_rgba(59,130,246,0.12)] hover:shadow-[0_8px_20px_rgba(99,102,241,0.2)] dark:hover:shadow-[0_8px_20px_rgba(59,130,246,0.25)] transition-shadow duration-300 box-shadow-[0_0_25px_rgba(99, 102, 241, 0.25)] dark:box-shadow-[0_0_25px_rgba(59, 130, 246, 0.2)]"
          : "border border-zinc-300 dark:border-zinc-700 text-zinc-900 dark:text-white hover:bg-zinc-50 dark:hover:bg-zinc-900/20"
      }`}
    >
      {children}
    </Link>
    </div>
  );
}
