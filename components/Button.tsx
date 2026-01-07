import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

type Props = {
  href?: string;
  onClick?: () => void;
  variant?: "primary" | "secondary";
  children: React.ReactNode;
  className?: string;
  type?: "button" | "submit";
  showArrow?: boolean;
  target?: string;
};

export default function Button({
  href,
  onClick,
  variant = "primary",
  children,
  className,
  type = "button",
  showArrow = false,
  target,
}: Props) {
  // Bouton principal : gradient selon la maquette exacte (135deg, point à 45%)
  const primary = cn(
    "relative inline-flex items-center justify-center",
    "px-7 py-3 rounded-full",
    "text-sm font-medium",
    "text-[#f2f4ff] no-underline",
    "shadow-[0_10px_30px_rgba(90,140,255,0.35),inset_0_1px_0_rgba(255,255,255,0.25)]",
    "transition-all duration-[250ms] ease-in-out",
    "hover:-translate-y-[1px] hover:brightness-105 hover:shadow-[0_18px_45px_rgba(90,140,255,0.45),inset_0_1px_0_rgba(255,255,255,0.35)]",
    "active:translate-y-0 active:shadow-[0_8px_20px_rgba(90,140,255,0.3)]",
    className
  );
  
  // Bouton secondaire : glass effect selon la maquette exacte
  const secondary = cn(
    "inline-flex items-center justify-center",
    "px-7 py-3 rounded-full",
    "text-sm font-medium",
    "text-[#f2f4ff] no-underline",
    "bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.18)]",
    "backdrop-blur-[12px]",
    "transition-all duration-[250ms] ease-in-out",
    "hover:bg-[rgba(255,255,255,0.08)] hover:border-[rgba(94,111,166,0.6)] hover:-translate-y-[1px]",
    className
  );

  const cls = variant === "primary" ? primary : secondary;
  
  // Style inline pour le gradient exact (135deg avec point à 45%)
  const gradientStyle = variant === "primary" ? {
    background: "linear-gradient(135deg, #6e6b8f 0%, #5e6fa6 45%, #4fa3d9 100%)",
  } : undefined;

  const content = (
    <>
      {children}
      {showArrow && <span className="ml-2">→</span>}
    </>
  );

  if (href) {
    // Pour les liens externes (http/https) ou avec target, utiliser <a>
    const isExternal = href.startsWith("http://") || href.startsWith("https://");
    if (isExternal || target) {
      return (
        <a
          href={href}
          target={target}
          rel={target === "_blank" ? "noopener noreferrer" : undefined}
          className={cls}
          style={gradientStyle}
        >
          {content}
        </a>
      );
    }
    // Pour les liens internes, utiliser Link de Next.js
    return <Link href={href} className={cls} style={gradientStyle}>{content}</Link>;
  }

  return (
    <button type={type} onClick={onClick} className={cls} style={gradientStyle}>
      {content}
    </button>
  );
}
