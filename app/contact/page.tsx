import Container from "@/components/Container";
import Card from "@/components/Card";
import Button from "@/components/Button";

export default function Page() {
  return (
    <Container>
      {/* HERO */}
      <section className="py-14 sm:py-20">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl font-semibold">
            Discutons de votre projet
          </h1>

          <p className="mt-5 text-sm sm:text-base text-muted">
            Je vous accompagne dans la conception et le développement de solutions web
            adaptées à vos enjeux, qu’il s’agisse d’un site, d’un e-commerce ou d’une
            application sur mesure.
          </p>
        </div>
      </section>

      {/* ACTIONS */}
      <section className="py-12 sm:py-16">
        <div className="grid gap-6 md:grid-cols-2 max-w-5xl mx-auto">
          {/* Calendly */}
          <Card className="p-8">
            <h2 className="text-xl font-semibold">
              Réserver un appel
            </h2>

            <p className="mt-3 text-sm text-muted">
              Échange de 30 minutes pour comprendre votre besoin et définir la meilleure
              approche. Appel en visio (Zoom – lien généré automatiquement).
            </p>

            <div className="mt-6">
              <Button
                href="https://calendly.com/maniga-frederic/echange-de-cadrage-site-web-conversion"
                target="_blank"
                className="w-full"
              >
                Réserver un appel
              </Button>
            </div>
          </Card>

          {/* Contact */}
          <Card className="p-8">
            <h2 className="text-xl font-semibold">
              Envoyer un message
            </h2>

            <p className="mt-3 text-sm text-muted">
              Décrivez brièvement votre projet. Je vous réponds sous 24–48h.
            </p>

            <form className="mt-6 space-y-4">
              <input
                type="text"
                placeholder="Nom"
                className="w-full rounded-xl border border-border bg-bg/40 px-4 py-2 text-sm"
              />
              <input
                type="email"
                placeholder="Email"
                className="w-full rounded-xl border border-border bg-bg/40 px-4 py-2 text-sm"
              />
              <input
                type="text"
                placeholder="Société (optionnel)"
                className="w-full rounded-xl border border-border bg-bg/40 px-4 py-2 text-sm"
              />
              <textarea
                placeholder="Message"
                rows={4}
                className="w-full rounded-xl border border-border bg-bg/40 px-4 py-2 text-sm"
              />

              <Button type="submit" variant="secondary" className="w-full">
                Envoyer le message
              </Button>
            </form>
          </Card>
        </div>
      </section>

      {/* REASSURANCE */}
      <section className="py-12 sm:py-16">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-sm text-muted">
            Développeur full-stack (Front / Back) · Web · E-commerce · SaaS ·
            Applications sur mesure
          </p>
          <p className="mt-2 text-sm text-muted">
            TJM indicatif : <span className="text-text">450 € / jour</span> ·
            contact@fredericmaniga.com
          </p>
        </div>
      </section>
    </Container>
  );
}


