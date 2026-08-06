import type { ReactNode } from "react";
import Link from "next/link";

export type ButtonVariant = "primary" | "secondary" | string;

export default function Button({ variant, children, onClick, href }: {
  variant: ButtonVariant;
  children: ReactNode;
  onClick?: () => void;
  href?: string;
}) {
  const isPrimary = variant === "primary";
  const isSecondary = variant === "secondary";

  const primary = "bg-black text-white hover:border border-indigo-500 dark:hover:shadow-[0_0_16px_rgba(99,102,241,0.3)]";
  const secondary = "border border-zinc-300 dark:border-zinc-700 text-zinc-900 dark:text-white hover:bg-zinc-50 dark:hover:bg-zinc-900/20";

  const style = isPrimary ? primary : isSecondary ? secondary : primary;
  const baseStyle = "flex items-center  justify-center px-6 md:px-8 py-2 md:py-3 font-medium transition-all duration-200 ease-in-out rounded-full min-h-[44px] min-w-[44px]";

  if (href) {
    return (
      <Link href={href} onClick={onClick} className={`${baseStyle} ${style}`}>
        {children}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={`${baseStyle} ${style}`}>
      {children}
    </button>
  );
}
