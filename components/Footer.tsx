import Container from "@/components/Container";

export default function Footer() {
  return (
    <footer className="mt-16 border-t border-border">
      <Container>
        <div className="flex flex-col gap-3 py-10 text-sm text-muted sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Frédéric Maniga — Full-stack</p>
          <p className="flex gap-4">
            <a className="hover:text-text" href="#" target="_blank" rel="noreferrer">
              LinkedIn
            </a>
            <a className="hover:text-text" href="#" target="_blank" rel="noreferrer">
              GitHub
            </a>
          </p>
        </div>
      </Container>
    </footer>
  );
}