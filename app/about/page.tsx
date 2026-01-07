// app/about/page.tsx
import Container from "@/components/Container";
import Card from "@/components/Card";
import Badge from "@/components/Badge";
import Button from "@/components/Button";

const CALENDLY_URL =
  "https://calendly.com/maniga-frederic/echange-de-cadrage-site-web-conversion";

export default function AboutPage() {
  return (
    <Container>
      {/* HERO */}
      <section className="relative isolate overflow-hidden pt-6 pb-10 sm:pt-10 sm:pb-14">
        {/* background premium */}
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-[#0B1020]/55" />
          <div className="absolute left-1/2 top-0 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-accent/12 blur-3xl" />
          <div className="absolute right-0 top-24 h-[420px] w-[420px] rounded-full bg-accent2/10 blur-3xl" />
          <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-b from-transparent to-[#0B1020]" />
        </div>

        <div className="mx-auto max-w-4xl text-center">
          <p className="text-xs font-semibold uppercase tracking-wider text-accent2/90">
            À propos
          </p>

          <h1 className="mt-3 text-3xl font-semibold leading-tight sm:text-5xl">
            Développeur full-stack, orienté{" "}
            <span className="text-accent">produit</span> et{" "}
            <span className="text-accent2">performance</span>.
          </h1>

          <p className="mt-5 text-sm sm:text-base text-muted">
            Je suis développeur full-stack et chef de projet digital. J’accompagne
            les <span className="text-text">PME</span> et{" "}
            <span className="text-text">start-up</span> dans la conception et le
            développement de <span className="text-text">produits web</span>{" "}
            fiables, performants et pensés pour la conversion : sites, e-commerce,
            applications web et SaaS.
          </p>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-2">
            <Badge className="border-white/[0.14] bg-white/[0.04] text-text/90">
              Full-stack (Front + Back)
            </Badge>
            <Badge className="border-white/[0.14] bg-white/[0.04] text-text/90">
              10+ ans e-commerce
            </Badge>
            <Badge className="border-white/[0.14] bg-white/[0.04] text-text/90">
              Vue.js / React / Next.js
            </Badge>
            <Badge className="border-white/[0.14] bg-white/[0.04] text-text/90">
              Node.js / Express / PHP
            </Badge>
            <Badge className="border-white/[0.14] bg-white/[0.04] text-text/90">
              MySQL / Python
            </Badge>
          </div>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
            <Button href="/work">Voir les projets</Button>

            {/* CTA Calendly */}
            <a
              href={CALENDLY_URL}
              target="_blank"
              rel="noreferrer"
              className="inline-flex"
            >
              <Button variant="secondary">Réserver un appel</Button>
            </a>
          </div>
        </div>
      </section>

      {/* POSITIONNEMENT */}
      <section className="py-10 sm:py-14">
        <div className="grid gap-6 lg:grid-cols-2">
          <Card className="p-7 relative overflow-hidden">
            <div className="pointer-events-none absolute -top-28 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full bg-accent/14 blur-3xl" />
            <div className="relative">
              <p className="text-xs font-semibold uppercase tracking-wider text-accent2/90">
                Positionnement
              </p>
              <h2 className="mt-2 text-2xl font-semibold">
                Une approche orientée produit, pas uniquement technique.
              </h2>
              <p className="mt-3 text-sm text-muted">
                Après plus de <span className="text-text">10 ans</span> en
                e-commerce et développement web, je travaille sur des sujets
                concrets : conversion, performance, automatisation, gestion des
                flux, pilotage d’activité et mise en production.
              </p>
              <p className="mt-3 text-sm text-muted">
                Mon objectif : construire des solutions{" "}
                <span className="text-text">utiles</span>,{" "}
                <span className="text-text">maintenables</span> et{" "}
                <span className="text-text">scalables</span>, adaptées aux
                contraintes réelles des entreprises.
              </p>
            </div>
          </Card>

          <Card className="p-7 relative overflow-hidden">
            <div className="pointer-events-none absolute -bottom-28 right-10 h-64 w-64 rounded-full bg-accent2/12 blur-3xl" />
            <div className="relative">
              <p className="text-xs font-semibold uppercase tracking-wider text-accent2/90">
                Ce que vous gagnez
              </p>
              <h2 className="mt-2 text-2xl font-semibold">
                Clarté, vitesse d’exécution, base solide.
              </h2>

              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                <div className="rounded-xl border border-white/[0.10] bg-white/[0.03] p-4 backdrop-blur-md">
                  <p className="text-sm font-semibold">🧭 Cadrage clair</p>
                  <p className="mt-1 text-sm text-muted">
                    Objectifs, périmètre, priorités et roadmap.
                  </p>
                </div>
                <div className="rounded-xl border border-white/[0.10] bg-white/[0.03] p-4 backdrop-blur-md">
                  <p className="text-sm font-semibold">⚡ Delivery</p>
                  <p className="mt-1 text-sm text-muted">
                    Itérations rapides, validation, mise en prod.
                  </p>
                </div>
                <div className="rounded-xl border border-white/[0.10] bg-white/[0.03] p-4 backdrop-blur-md">
                  <p className="text-sm font-semibold">🔒 Qualité</p>
                  <p className="mt-1 text-sm text-muted">
                    Code propre, maintenable, scalable.
                  </p>
                </div>
                <div className="rounded-xl border border-white/[0.10] bg-white/[0.03] p-4 backdrop-blur-md">
                  <p className="text-sm font-semibold">📈 Impact</p>
                  <p className="mt-1 text-sm text-muted">
                    Performance, SEO, conversion, KPI.
                  </p>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* MÉTHODE */}
      <section className="relative isolate overflow-hidden py-10 sm:py-14">
        {/* gradient de section */}
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-[#0B1020]/45" />
          <div className="absolute left-12 top-16 h-[420px] w-[420px] rounded-full bg-accent/10 blur-3xl" />
          <div className="absolute right-0 top-32 h-[360px] w-[360px] rounded-full bg-accent2/10 blur-3xl" />
          <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-b from-transparent to-[#0B1020]" />
        </div>

        <div className="text-center mb-8">
          <p className="text-xs font-semibold uppercase tracking-wider text-accent2/90">
            Méthode
          </p>
          <h2 className="mt-2 text-2xl sm:text-3xl font-semibold">
            Une méthode claire, sans surprise.
          </h2>
          <p className="mt-3 text-sm sm:text-base text-muted max-w-3xl mx-auto">
            Pour livrer vite et proprement : cadrage → build → mise en production
            → itération.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {[
            {
              title: "Cadrage",
              icon: "🧩",
              text: "Analyse des besoins, objectifs business, contraintes techniques, priorisation.",
            },
            {
              title: "Build",
              icon: "🛠️",
              text: "Front & back, API, DB, auth, intégrations (paiement, CRM, outils métier).",
            },
            {
              title: "Mise en production",
              icon: "🚀",
              text: "Performance, SEO technique, sécurité, déploiement cloud.",
            },
            {
              title: "Itération",
              icon: "📈",
              text: "Suivi, KPI, améliorations continues, évolutions produit.",
            },
          ].map((s) => (
            <Card key={s.title} className="p-6">
              <p className="text-sm font-semibold">
                {s.icon} {s.title}
              </p>
              <p className="mt-2 text-sm text-muted">{s.text}</p>
            </Card>
          ))}
        </div>
      </section>

      {/* EXPERTISE TECH */}
      <section className="py-10 sm:py-14">
        <div className="text-center mb-8">
          <p className="text-xs font-semibold uppercase tracking-wider text-accent2/90">
            Expertise technique
          </p>
          <h2 className="mt-2 text-2xl sm:text-3xl font-semibold">
            Stack & domaines maîtrisés
          </h2>
          <p className="mt-3 text-sm sm:text-base text-muted max-w-3xl mx-auto">
            Une base solide pour des projets modernes, performants et évolutifs.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          <Card className="p-7">
            <p className="text-sm font-semibold">🧱 Développement</p>

            <div className="mt-4 space-y-3 text-sm text-muted">
              <p>
                <span className="text-text/90 font-semibold">Front-end :</span>{" "}
                Vue.js, React, Next.js, JavaScript
              </p>
              <p>
                <span className="text-text/90 font-semibold">Back-end :</span>{" "}
                Node.js, Express, PHP
              </p>
              <p>
                <span className="text-text/90 font-semibold">Base de données :</span>{" "}
                MySQL
              </p>
              <p>
                <span className="text-text/90 font-semibold">Automatisations :</span>{" "}
                Python (scripts, intégrations, tâches)
              </p>
              <p>
                <span className="text-text/90 font-semibold">Auth & sécurité :</span>{" "}
                JWT, rôles & permissions
              </p>
              <p>
                <span className="text-text/90 font-semibold">Déploiement :</span>{" "}
                hébergement cloud, mise en ligne & maintenance
              </p>
            </div>
          </Card>

          <Card className="p-7">
            <p className="text-sm font-semibold">🛒 E-commerce & conversion</p>

            <div className="mt-4 space-y-3 text-sm text-muted">
              <p>
                <span className="text-text/90 font-semibold">Plateformes :</span>{" "}
                WooCommerce, Shopify
              </p>
              <p>
                <span className="text-text/90 font-semibold">Paiements :</span>{" "}
                Stripe, PayPal
              </p>
              <p>
                <span className="text-text/90 font-semibold">Tunnels :</span>{" "}
                landing pages, checkout, optimisation du parcours
              </p>
              <p>
                <span className="text-text/90 font-semibold">Performance & SEO :</span>{" "}
                vitesse, SEO technique, tracking & analytics
              </p>
              <p>
                <span className="text-text/90 font-semibold">Métiers :</span>{" "}
                dashboards, KPI, planning, calendrier, outils internes
              </p>
            </div>

            <div className="mt-6 flex flex-wrap gap-2">
              <Badge>Vue.js</Badge>
              <Badge>React</Badge>
              <Badge>Next.js</Badge>
              <Badge>Node.js</Badge>
              <Badge>Express</Badge>
              <Badge>PHP</Badge>
              <Badge>MySQL</Badge>
              <Badge>Python</Badge>
            </div>
          </Card>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="py-10 sm:py-14">
        <Card className="p-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h3 className="text-xl font-semibold">
                Vous voulez valider rapidement votre projet ?
              </h3>
              <p className="mt-2 text-sm text-muted">
                Premier échange : objectifs, périmètre, recommandations et estimation.
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row">
              <a
                href={CALENDLY_URL}
                target="_blank"
                rel="noreferrer"
                className="inline-flex"
              >
                <Button>Réserver un appel</Button>
              </a>

              <Button href="/contact" variant="secondary">
                Me contacter
              </Button>
            </div>
          </div>
        </Card>
      </section>
    </Container>
  );
}



