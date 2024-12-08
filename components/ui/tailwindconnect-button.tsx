import React from "react";
import { cn } from "@/lib/utils";
import Link from "next/link"; // Import Link dari Next.js

interface TailwindconnectButtonProps {
  children?: React.ReactNode;
  className?: string;
  onClick?: () => void;
  href?: string; // Jika ada, gunakan Link, jika tidak gunakan <button>
}

const TailwindconnectButton: React.FC<TailwindconnectButtonProps> = ({
  children,
  className,
  onClick,
  href,
}) => {
  if (href) {
    // Jika href diberikan, gunakan Next.js Link
    return (
      <Link
        href={href}
        className={cn(
          "bg-slate-800 no-underline group cursor-pointer relative" +
            " shadow-2xl shadow-zinc-900 rounded-full px" +
            "text-white inline-block",
          className
        )}
      >
        {/* Radial gradient effect */}
        <span className="absolute inset-0 overflow-hidden rounded-full">
          <span className="absolute inset-0 rounded-full bg-[radial-gradient(75%_100%_at_50%_0%,rgba(56,189,248,0.6)_0%,rgba(56,189,248,0)_75%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100"></span>
        </span>

        {/* Inner content */}
        <div className="relative flex space-x-2 items-center z-10 rounded-full bg-zinc-950 py-0.5 px-4 ring-1 ring-white/10">
          <span>{children}</span>
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
              d="M10.75 8.75L14.25 12L10.75 15.25"
            ></path>
          </svg>
        </div>

        {/* Bottom border effect */}
        <span className="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-emerald-400/0 via-emerald-400/90 to-emerald-400/0 transition-opacity duration-500 group-hover:opacity-40"></span>
      </Link>
    );
  }

  // Jika href tidak diberikan, gunakan <button>
  return (
    <button
      onClick={onClick}
      className={cn(
        "bg-slate-800 no-underline group cursor-pointer relative shadow-2xl shadow-zinc-900 rounded-full p-px text-xs font-semibold leading-6 text-white inline-block",
        className
      )}
    >
      {/* Radial gradient effect */}
      <span className="absolute inset-0 overflow-hidden rounded-full">
        <span className="absolute inset-0 rounded-full bg-[radial-gradient(75%_100%_at_50%_0%,rgba(56,189,248,0.6)_0%,rgba(56,189,248,0)_75%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100"></span>
      </span>

      {/* Inner content */}
      <div className="relative flex space-x-2 items-center z-10 rounded-full bg-zinc-950 py-0.5 px-4 ring-1 ring-white/10">
        <span>{children}</span>
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
            d="M10.75 8.75L14.25 12L10.75 15.25"
          ></path>
        </svg>
      </div>

      {/* Bottom border effect */}
      <span className="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-emerald-400/0 via-emerald-400/90 to-emerald-400/0 transition-opacity duration-500 group-hover:opacity-40"></span>
    </button>
  );
};

export default TailwindconnectButton;
