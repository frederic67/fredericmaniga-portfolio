import React from "react";
import { cn } from "@/lib/utils";

export default function Card({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        // Base glass effect selon la maquette
        "group relative rounded-[18px] p-6",
        "bg-[rgba(255,255,255,0.04)] border border-[rgba(255,255,255,0.14)]",
        "backdrop-blur-[14px]",
        "shadow-[0_10px_30px_rgba(0,0,0,0.25),inset_0_1px_0_rgba(255,255,255,0.15)]",
        // Transitions
        "transition-all duration-300 ease-in-out",
        // Hover effect
        "hover:-translate-y-1 hover:border-[rgba(94,111,166,0.55)]",
        "hover:shadow-[0_20px_60px_rgba(94,111,166,0.25),inset_0_1px_0_rgba(255,255,255,0.25)]",
        className
      )}
    >
      {/* Halo lumineux subtil au hover */}
      <div
        className={cn(
          "absolute -inset-[1px] rounded-[18px] pointer-events-none z-0",
          "bg-[radial-gradient(circle_at_top_left,rgba(94,111,166,0.35),transparent_60%)]",
          "opacity-0 transition-opacity duration-300 ease-in-out",
          "group-hover:opacity-100"
        )}
      />
      <div className="relative z-10">{children}</div>
    </div>
  );
}
