"use client";

import Container from "@/components/Container";
import Link from "next/link";
import Button from "@/components/Button";
import { usePathname } from "next/navigation";

const nav = [
  { href: "/services", label: "Services" },
  { href: "/work", label: "Projets" },
  { href: "/pricing", label: "Tarifs" },
  { href: "/about", label: "À propos" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border bg-bg/55 backdrop-blur-md">
      {/* Fade bottom pour transition douce avec la section Hero */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-b from-transparent via-bg/30 to-bg/55 pointer-events-none" />
      <Container>
        <div className="flex h-16 items-center justify-between relative">
          <Link href="/" className="flex items-center gap-2">
            <span className="h-2.5 w-2.5 rounded-full bg-accent2" />
            <span className="text-sm font-semibold tracking-tight">
              Frédéric Maniga
            </span>
          </Link>

          <nav className="hidden items-center gap-6 sm:flex">
            {nav.map((i) => {
              const active = pathname === i.href;
              return (
                <Link
                  key={i.href}
                  href={i.href}
                  className={[
                    "text-sm transition",
                    active ? "text-text" : "text-muted hover:text-text",
                  ].join(" ")}
                >
                  {i.label}
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-3">
            <Button href="/contact" className="hidden sm:inline-flex">
              Réserver un appel
            </Button>
            <Button href="/contact" variant="secondary" className="sm:hidden">
              Contact
            </Button>
          </div>
        </div>
      </Container>
    </header>
  );
}
