import Container from "@/components/Container";
import Card from "@/components/Card";
import Badge from "@/components/Badge";
import Button from "@/components/Button";

export default function WorkPage() {
  return (
    <Container>
      {/* Header */}
      <section className="py-14 sm:py-20">
        <div className="text-center max-w-3xl mx-auto">
          <p className="text-xs font-semibold uppercase tracking-wider text-accent2/90">
            Case studies
          </p>

          <h1 className="mt-3 text-4xl font-semibold sm:text-5xl">
            Projets & réalisations
          </h1>

          <p className="mt-5 text-sm sm:text-base text-muted">
            Une sélection de projets e-commerce & SaaS réalisés avec une approche
            orientée <span className="text-text">valeur</span>,{" "}
            <span className="text-text">performance</span> et{" "}
            <span className="text-text">scalabilité</span>.
          </p>

          <div className="mt-7 flex justify-center gap-3 flex-wrap">
            <Button href="/contact">Discuter de votre projet</Button>
            <Button href="/pricing" variant="secondary">
              Voir les tarifs
            </Button>
          </div>
        </div>
      </section>

      {/* Featured project */}
      <section className="pb-10 sm:pb-14">
        <Card className="relative overflow-hidden p-7 sm:p-8">
          {/* glow */}
          <div className="pointer-events-none absolute -top-32 left-10 h-72 w-72 rounded-full bg-accent/18 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-32 right-10 h-72 w-72 rounded-full bg-accent2/12 blur-3xl" />

          <div className="relative">
            <div className="flex flex-wrap items-center gap-2">
              <Badge className="border-white/[0.14] bg-white/[0.04] text-text/90">
                Projet phare
              </Badge>
              <Badge className="border-white/[0.14] bg-white/[0.04] text-text/90">
                SaaS logistique
              </Badge>
              <Badge className="border-white/[0.14] bg-white/[0.04] text-text/90">
                Node.js • Express • Vue.js • MySQL
              </Badge>
            </div>

            <div className="mt-4 grid gap-8 lg:grid-cols-2 lg:items-center">
              <div>
                <h2 className="text-2xl sm:text-3xl font-semibold">
                  Docksy · Application de gestion logistique & livraisons
                </h2>

                <p className="mt-3 text-sm sm:text-base text-muted max-w-2xl">
                  Un SaaS sur mesure pour piloter les livraisons :{" "}
                  <span className="text-text">gestion des tournées</span>,{" "}
                  <span className="text-text">planning / calendrier</span> et{" "}
                  <span className="text-text">dashboard KPI</span>.
                </p>

                <div className="mt-5 grid gap-3 sm:grid-cols-3">
                  <div className="rounded-xl border border-white/[0.10] bg-white/[0.03] p-4 backdrop-blur-md">
                    <p className="text-xs font-semibold text-text/90">PROBLÈME</p>
                    <p className="mt-1 text-sm text-muted">
                      Suivi dispersé et faible visibilité opérationnelle.
                    </p>
                  </div>
                  <div className="rounded-xl border border-white/[0.10] bg-white/[0.03] p-4 backdrop-blur-md">
                    <p className="text-xs font-semibold text-text/90">SOLUTION</p>
                    <p className="mt-1 text-sm text-muted">
                      Dashboard + planning, gestion tournées, API & rôles.
                    </p>
                  </div>
                  <div className="rounded-xl border border-white/[0.10] bg-white/[0.03] p-4 backdrop-blur-md">
                    <p className="text-xs font-semibold text-text/90">IMPACT</p>
                    <p className="mt-1 text-sm text-muted">
                      Pilotage simplifié + KPI pour décider plus vite.
                    </p>
                  </div>
                </div>

                <div className="mt-6 flex flex-wrap gap-2">
                  <Badge>Vue.js</Badge>
                  <Badge>Node.js</Badge>
                  <Badge>Express</Badge>
                  <Badge>MySQL</Badge>
                  <Badge>Planning / Calendrier</Badge>
                  <Badge>Tournées</Badge>
                  <Badge>KPI</Badge>
                </div>

                <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                  <Button href="/work/docksy">→ Voir le projet</Button>
                  <Button href="/contact" variant="secondary">
                    Demander une app similaire
                  </Button>
                  <Button href="/pricing" variant="secondary">
                    Estimer un budget
                  </Button>
                </div>
              </div>

              {/* Placeholder visuel (image plus tard) */}
              <div className="relative">
                <div className="absolute -inset-6 rounded-3xl bg-accent/10 blur-2xl" />
                <div className="relative overflow-hidden rounded-3xl border border-white/[0.10] bg-white/[0.03] p-6 backdrop-blur-md">
                  <div className="mb-4 flex items-center justify-between">
                    <p className="text-sm font-semibold">Aperçu</p>
                    <span className="text-xs text-muted">Dashboard</span>
                  </div>

                  <div className="space-y-3">
                    <div className="h-10 w-full rounded-2xl border border-white/[0.10] bg-white/[0.03]" />
                    <div className="h-28 w-full rounded-2xl border border-white/[0.10] bg-white/[0.03]" />
                    <div className="grid grid-cols-3 gap-3">
                      <div className="h-16 rounded-2xl border border-white/[0.10] bg-white/[0.03]" />
                      <div className="h-16 rounded-2xl border border-white/[0.10] bg-white/[0.03]" />
                      <div className="h-16 rounded-2xl border border-white/[0.10] bg-white/[0.03]" />
                    </div>
                  </div>

                  <p className="mt-4 text-xs text-muted">
                    (Image/vidéo du dashboard à intégrer plus tard.)
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Card>
      </section>

      {/* Other projects */}
      <section className="pb-14 sm:pb-20">
        <div className="mb-6 flex items-end justify-between gap-4 flex-wrap">
          <div>
            <h3 className="text-xl font-semibold">Autres projets</h3>
            <p className="mt-1 text-sm text-muted">
              E-commerce & conversion : fondations solides et tunnel optimisé.
            </p>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {/* Elanna */}
          <Card className="p-6">
            <div className="flex flex-wrap items-center gap-2">
              <Badge className="border-white/[0.14] bg-white/[0.04] text-text/90">
                E-commerce
              </Badge>
              <Badge className="border-white/[0.14] bg-white/[0.04] text-text/90">
                Funnel / conversion
              </Badge>
            </div>

            <h4 className="mt-4 text-lg font-semibold">
              Elanna Paris · Landing premium + tunnel de conversion
            </h4>

            <p className="mt-2 text-sm text-muted">
              Achat direct : landing + checkout optimisés avec FunnelKit.
            </p>

            <div className="mt-4 grid gap-3 sm:grid-cols-3">
              <div className="rounded-xl border border-white/[0.10] bg-white/[0.03] p-4 backdrop-blur-md">
                <p className="text-xs font-semibold text-text/90">PROBLÈME</p>
                <p className="mt-1 text-sm text-muted">Conversion à optimiser.</p>
              </div>
              <div className="rounded-xl border border-white/[0.10] bg-white/[0.03] p-4 backdrop-blur-md">
                <p className="text-xs font-semibold text-text/90">SOLUTION</p>
                <p className="mt-1 text-sm text-muted">Woo + FunnelKit.</p>
              </div>
              <div className="rounded-xl border border-white/[0.10] bg-white/[0.03] p-4 backdrop-blur-md">
                <p className="text-xs font-semibold text-text/90">IMPACT</p>
                <p className="mt-1 text-sm text-muted">Tunnel plus fluide.</p>
              </div>
            </div>

            <div className="mt-5 flex flex-wrap gap-2">
              <Badge>WordPress</Badge>
              <Badge>WooCommerce</Badge>
              <Badge>FunnelKit</Badge>
              <Badge>Landing</Badge>
              <Badge>Conversion</Badge>
            </div>

            <div className="mt-6 flex gap-3">
              <Button href="/work/elanna-paris" variant="secondary" className="w-full">
                → Voir le case study
              </Button>
            </div>
          </Card>

          {/* Ulubee */}
          <Card className="p-6">
            <div className="flex flex-wrap items-center gap-2">
              <Badge className="border-white/[0.14] bg-white/[0.04] text-text/90">
                E-commerce
              </Badge>
              <Badge className="border-white/[0.14] bg-white/[0.04] text-text/90">
                Paiement
              </Badge>
              <Badge className="border-white/[0.14] bg-white/[0.04] text-text/90">
                Elementor
              </Badge>
            </div>

            <h4 className="mt-4 text-lg font-semibold">
              Ulubee · WooCommerce (Elementor) + Stripe / PayPal
            </h4>

            <p className="mt-2 text-sm text-muted">
              Boutique WordPress : mise en place, optimisation et fiabilisation du parcours d'achat.
            </p>

            <div className="mt-4 grid gap-3 sm:grid-cols-3">
              <div className="rounded-xl border border-white/[0.10] bg-white/[0.03] p-4 backdrop-blur-md">
                <p className="text-xs font-semibold text-text/90">PROBLÈME</p>
                <p className="mt-1 text-sm text-muted">Stabilité & perf.</p>
              </div>
              <div className="rounded-xl border border-white/[0.10] bg-white/[0.03] p-4 backdrop-blur-md">
                <p className="text-xs font-semibold text-text/90">SOLUTION</p>
                <p className="mt-1 text-sm text-muted">Woo + Elementor.</p>
              </div>
              <div className="rounded-xl border border-white/[0.10] bg-white/[0.03] p-4 backdrop-blur-md">
                <p className="text-xs font-semibold text-text/90">IMPACT</p>
                <p className="mt-1 text-sm text-muted">Parcours fiable.</p>
              </div>
            </div>

            <div className="mt-5 flex flex-wrap gap-2">
              <Badge>WordPress</Badge>
              <Badge>WooCommerce</Badge>
              <Badge>Elementor</Badge>
              <Badge>Stripe</Badge>
              <Badge>PayPal</Badge>
            </div>

            <div className="mt-6 flex gap-3">
              <Button href="/work/ulubee" variant="secondary" className="w-full">
                → Voir le case study
              </Button>
            </div>
          </Card>
        </div>
      </section>

      {/* CTA bottom */}
      <section className="pb-14 sm:pb-20">
        <Card className="p-8 text-center">
          <h3 className="text-2xl font-semibold">
            Vous voulez le même niveau de qualité ?
          </h3>
          <p className="mt-3 text-sm text-muted max-w-2xl mx-auto">
            Je vous aide à cadrer, concevoir et livrer une solution solide — vite,
            proprement, et prête à évoluer.
          </p>
          <div className="mt-6 flex justify-center gap-3 flex-wrap">
            <Button href="/contact">Réserver un appel</Button>
            <Button href="/services" variant="secondary">
              Voir les services
            </Button>
          </div>
        </Card>
      </section>
    </Container>
  );
}
