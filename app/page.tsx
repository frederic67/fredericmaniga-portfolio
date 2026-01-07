import Container from "@/components/Container";
import Button from "@/components/Button";
import Card from "@/components/Card";
import Badge from "@/components/Badge";
import { cn } from "@/lib/utils";

const filters = ["Tous", "E-commerce", "Web App", "Sur mesure"] as const;

export default function HomePage() {
  return (
    <Container>
      {/* HERO */}
      <section className="relative pt-[58px] pb-[166px] sm:pt-[74px] sm:pb-[182px] lg:pt-[90px] lg:pb-[198px]">
        {/* Fond complet sur toute la largeur */}
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-screen bg-[#0B1020]">
            <div className="absolute inset-0"
              style={{
                background: `
                  radial-gradient(1200px 700px at 18% 8%, rgba(91,140,255,0.12), transparent 55%),
                  radial-gradient(900px 650px at 82% 16%, rgba(34,211,238,0.08), transparent 55%),
                  radial-gradient(900px 650px at 40% 85%, rgba(91,140,255,0.06), transparent 60%),
                  linear-gradient(180deg, rgba(0,0,0,0.10), rgba(0,0,0,0.35))
                `
              }}
            />
          </div>
          {/* Fade top pour transition douce avec la navbar */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-screen h-16 bg-gradient-to-b from-[#0B1020]/55 via-[#0B1020]/30 to-transparent" />
          {/* Fade bottom pour transition douce */}
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-screen h-32 bg-gradient-to-b from-transparent to-[#0B1020]" />
        </div>
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-12">
          <div className="-mt-[28px] sm:-mt-[44px] lg:-mt-[60px]">
            <h1 className="text-4xl font-semibold leading-tight sm:text-5xl mb-5">
              Je construis des produits web{" "}
              <span className="text-accent">performants</span> pour{" "}
              <span className="text-accent2">PME</span> et{" "}
              <span className="text-accent2">start-up</span>.
          </h1>

            <p className="mb-4 max-w-xl text-base text-muted sm:text-lg">
              Développeur <span className="text-text">full-stack (Front + Back)</span>, diplômé, avec plus de 10 ans d'expérience en e-commerce, développement web et pilotage de projets digitaux. Sites vitrines, e-commerce, applications web et solutions sur mesure.
            </p>

            {/* Technologies sur une seule ligne avec séparateurs • */}
            <div className="mb-5 inline-block rounded-[10px] border border-white/20 bg-white/10 px-4 py-2.5 backdrop-blur-md">
              <p className="text-sm text-muted">
                React / Next.js • Node.js • MySQL • Python • MVP • E-commerce
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              <Button href="/work">Voir les projets</Button>
              <Button href="/contact" variant="secondary" showArrow>
                Parler de votre projet
              </Button>
            </div>
          </div>

          {/* Image de remplacement */}
          <div className="relative overflow-hidden">
            <div className="absolute -inset-4 rounded-3xl bg-accent/10 blur-2xl" />
            <div className="relative">
              <img 
                src="/image ordinateur.png" 
                alt="Développement web et technologies" 
                className="w-full h-auto rounded-3xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES — PREMIUM */}
      <section className="relative py-14 sm:py-20 -mt-[160px] sm:-mt-[168px]">
        {/* Fond complet sur toute la largeur */}
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-screen bg-[#0B1020]">
            <div className="absolute inset-0"
              style={{
                background: `
                  radial-gradient(1200px 700px at 18% 8%, rgba(91,140,255,0.12), transparent 55%),
                  radial-gradient(900px 650px at 82% 16%, rgba(34,211,238,0.08), transparent 55%),
                  radial-gradient(900px 650px at 40% 85%, rgba(91,140,255,0.06), transparent 60%),
                  linear-gradient(180deg, rgba(0,0,0,0.10), rgba(0,0,0,0.35))
                `
              }}
            />
          </div>
          {/* Fade top pour transition douce avec la section précédente */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-screen h-32 bg-gradient-to-b from-[#0B1020] to-transparent" />
          {/* Fade bottom pour transition douce */}
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-screen h-32 bg-gradient-to-b from-transparent to-[#0B1020]" />
          {/* Halos / gradients premium */}
          <div className="absolute left-1/2 top-0 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-accent/12 blur-3xl" />
          <div className="absolute right-0 top-24 h-[420px] w-[420px] rounded-full bg-accent2/10 blur-3xl" />
        </div>

        <Container className="relative">
          <div className="relative">
          <div className="text-center mb-10">
            <p className="text-xs font-semibold uppercase tracking-wider text-accent2/90">
              Services premium
            </p>

            <h2 className="mt-2 text-3xl font-semibold sm:text-4xl">
              Des services conçus pour livrer vite, proprement, et scaler.
            </h2>

            <p className="mt-3 text-muted max-w-3xl mx-auto text-sm sm:text-base">
              Je combine <span className="text-text">expertise technique</span> et{" "}
              <span className="text-text">vision produit</span> pour construire des expériences web modernes
              (front + back), avec une base solide (architecture, performance, SEO, sécurité, déploiement).
            </p>

            {/* Ligne stack (lisible + premium) */}
            <div className="mx-auto mt-6 inline-flex max-w-full flex-wrap items-center justify-center gap-2 rounded-full border border-white/[0.10] bg-white/[0.03] px-4 py-2 text-xs text-muted backdrop-blur-md">
              <span>Vue.js</span><span className="opacity-50">•</span>
              <span>React</span><span className="opacity-50">•</span>
              <span>Next.js</span><span className="opacity-50">•</span>
              <span>JavaScript</span><span className="opacity-50">•</span>
              <span>Node.js</span><span className="opacity-50">•</span>
              <span>PHP</span><span className="opacity-50">•</span>
              <span>MySQL</span><span className="opacity-50">•</span>
              <span>Python</span>
            </div>
          </div>

          {/* Grid : 1 card "featured" + 3 cards */}
          <div className="grid gap-5 lg:grid-cols-3">
            {/* FEATURED: MVP / Web App (dominante) */}
            <Card className="p-7 lg:col-span-2 relative overflow-hidden">
              <div className="absolute -top-28 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full bg-accent/18 blur-3xl" />
              <div className="absolute -bottom-28 right-10 h-64 w-64 rounded-full bg-accent2/12 blur-3xl" />

              <div className="relative">
                <div className="flex flex-wrap items-center gap-2">
                  <Badge className="border-white/[0.14] bg-white/[0.04] text-text/90">
                    Offre phare
                  </Badge>
                  <Badge className="border-white/[0.14] bg-white/[0.04] text-text/90">
                    MVP • SaaS • Dashboard
                  </Badge>
                </div>

                <h3 className="mt-4 text-2xl font-semibold">
                  Application web / MVP (full-stack)
                </h3>

                <p className="mt-2 text-sm text-muted max-w-2xl">
                  Idéal pour start-up & PME : cadrage MVP, développement rapide, base scalable,
                  et mise en production. Une approche "produit" : priorisation, itérations, livraison.
                </p>

                <div className="mt-5 grid gap-3 sm:grid-cols-2">
                  <div className="rounded-xl border border-white/[0.10] bg-white/[0.03] p-4 backdrop-blur-md">
                    <p className="text-sm font-semibold">⚙️ Architecture & API</p>
                    <p className="mt-1 text-sm text-muted">
                      Node.js / PHP, API, auth, rôles, base MySQL.
                    </p>
                  </div>

                  <div className="rounded-xl border border-white/[0.10] bg-white/[0.03] p-4 backdrop-blur-md">
                    <p className="text-sm font-semibold">🚀 Delivery en sprints</p>
                    <p className="mt-1 text-sm text-muted">
                      Roadmap, jalons, démo, mise en prod.
                    </p>
                  </div>

                  <div className="rounded-xl border border-white/[0.10] bg-white/[0.03] p-4 backdrop-blur-md">
                    <p className="text-sm font-semibold">⚡ Performance</p>
                    <p className="mt-1 text-sm text-muted">
                      Optimisation front, SEO technique, accessibilité.
                    </p>
                  </div>

                  <div className="rounded-xl border border-white/[0.10] bg-white/[0.03] p-4 backdrop-blur-md">
                    <p className="text-sm font-semibold">🔌 Intégrations</p>
                    <p className="mt-1 text-sm text-muted">
                      Paiement, CRM, outils métier, automatisations Python.
                    </p>
                  </div>
                </div>

                <div className="mt-6 flex flex-wrap gap-2">
                  <Badge>Vue.js</Badge>
                  <Badge>React</Badge>
                  <Badge>Next.js</Badge>
                  <Badge>Node.js</Badge>
                  <Badge>PHP</Badge>
                  <Badge>MySQL</Badge>
                  <Badge>Python</Badge>
                </div>

                <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                  <Button href="/contact">Discuter de votre MVP</Button>
                  <Button href="/services" variant="secondary">
                    Voir le détail des services
                  </Button>
                </div>
              </div>
            </Card>

            {/* 3 cards à droite */}
            <div className="grid gap-5">
              <Card className="p-6">
                <div className="flex items-center justify-between">
                  <Badge className="border-white/[0.14] bg-white/[0.04] text-text/90">
                    Site vitrine premium
                  </Badge>
                </div>

                <h3 className="mt-4 text-lg font-semibold">
                  Acquisition + image de marque
                </h3>
                <p className="mt-2 text-sm text-muted">
                  Un site rapide, clair, orienté conversion : SEO, performance, tracking,
                  et mise en prod.
                </p>

                <div className="mt-4 flex flex-wrap gap-2">
                  <Badge>Next.js</Badge>
                  <Badge>SEO</Badge>
                  <Badge>Analytics</Badge>
                </div>
              </Card>

              <Card className="p-6">
                <Badge className="border-white/[0.14] bg-white/[0.04] text-text/90">
                  E-commerce
                </Badge>

                <h3 className="mt-4 text-lg font-semibold">
                  Boutique + conversion
                </h3>
                <p className="mt-2 text-sm text-muted">
                  Catalogue, tunnel d'achat, optimisation UX, performance et SEO e-commerce.
                </p>

                <div className="mt-4 flex flex-wrap gap-2">
                  <Badge>Shopify</Badge>
                  <Badge>Woo</Badge>
                  <Badge>PrestaShop</Badge>
                </div>
              </Card>

              <Card className="p-6">
                <Badge className="border-white/[0.14] bg-white/[0.04] text-text/90">
                  Sur mesure
                </Badge>

                <h3 className="mt-4 text-lg font-semibold">
                  Intégrations & automatisations
                </h3>
                <p className="mt-2 text-sm text-muted">
                  APIs, outils métier, scripts Python, refacto, maintenance — pour gagner du temps
                  et fiabiliser.
                </p>

                <div className="mt-4 flex flex-wrap gap-2">
                  <Badge>APIs</Badge>
                  <Badge>Python</Badge>
                  <Badge>Node/PHP</Badge>
                </div>
              </Card>
            </div>
          </div>

          {/* CTA bas de section */}
          <div className="mt-10 text-center">
            <Button href="/contact" className="px-8">
              Réserver un appel (15 min)
            </Button>
            <p className="mt-3 text-xs text-muted">
              Objectifs • périmètre • recommandations • estimation
            </p>
          </div>
          </div>
        </Container>
      </section>

      {/* CASE STUDIES — MES RÉALISATIONS (premium) */}
      <section className="relative py-14 sm:py-20">
        {/* Fond complet sur toute la largeur */}
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-screen bg-[#0B1020]">
            <div className="absolute inset-0"
              style={{
                background: `
                  radial-gradient(1200px 700px at 18% 8%, rgba(91,140,255,0.12), transparent 55%),
                  radial-gradient(900px 650px at 82% 16%, rgba(34,211,238,0.08), transparent 55%),
                  radial-gradient(900px 650px at 40% 85%, rgba(91,140,255,0.06), transparent 60%),
                  linear-gradient(180deg, rgba(0,0,0,0.10), rgba(0,0,0,0.35))
                `
              }}
            />
          </div>
          {/* Fade top pour transition douce avec la section précédente */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-screen h-32 bg-gradient-to-b from-[#0B1020] to-transparent" />
          {/* Fade bottom pour transition douce */}
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-screen h-32 bg-gradient-to-b from-transparent to-[#0B1020]" />
          {/* Halos / gradients premium */}
          <div className="absolute left-1/2 top-10 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-accent/10 blur-3xl" />
          <div className="absolute right-0 top-28 h-[420px] w-[420px] rounded-full bg-accent2/10 blur-3xl" />
        </div>

        <div className="relative">
          <div className="text-center mb-10">
            <p className="text-xs font-semibold uppercase tracking-wider text-accent2/90">
              Case studies
            </p>
            <h2 className="mt-2 text-3xl font-semibold sm:text-4xl">
              Mes réalisations
            </h2>
            <p className="mt-3 text-muted max-w-3xl mx-auto text-sm sm:text-base">
              Projets e-commerce & SaaS : une approche orientée{" "}
              <span className="text-text">conversion</span>,{" "}
              <span className="text-text">performance</span> et{" "}
              <span className="text-text">scalabilité</span>.
            </p>

            {/* filtres visuels (UI premium, pas besoin de state pour l'instant) */}
            <div className="mt-6 flex justify-center">
              <div className="inline-flex rounded-xl border border-white/[0.10] bg-white/[0.03] p-1 backdrop-blur-md">
                {["Tous", "E-commerce", "SaaS", "Conversion"].map((f) => (
                  <button
                    key={f}
                    className={cn(
                      "px-3 py-2 text-xs sm:text-sm rounded-lg transition",
                      f === "Tous"
                        ? "bg-white/[0.06] text-text border border-white/[0.10]"
                        : "text-muted hover:text-text"
                    )}
                  >
                    {f}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Grid premium : Docksy en featured (2 colonnes) */}
          <div className="grid gap-6 lg:grid-cols-3">
            {/* FEATURED — DOCKSY */}
            <Card className="relative overflow-hidden p-7 lg:col-span-2">
              <div className="absolute -top-28 left-10 h-64 w-64 rounded-full bg-accent/18 blur-3xl" />
              <div className="absolute -bottom-28 right-10 h-64 w-64 rounded-full bg-accent2/12 blur-3xl" />

              <div className="relative">
                <div className="flex flex-wrap items-center gap-2">
                  <Badge className="border-white/[0.14] bg-white/[0.04] text-text/90">
                    SaaS logistique
                  </Badge>
                  <Badge className="border-white/[0.14] bg-white/[0.04] text-text/90">
                    Sur mesure
                  </Badge>
                  <span className="ml-auto text-xs text-muted hidden sm:inline">
                    Node.js • Express • Vue.js • MySQL
                  </span>
                </div>

                <h3 className="mt-4 text-2xl font-semibold">
                  Docksy · Application de gestion logistique & livraisons
                </h3>

                <p className="mt-2 text-sm text-muted max-w-2xl">
                  Un SaaS complet pour piloter les livraisons :{" "}
                  <span className="text-text">tournées</span>,{" "}
                  <span className="text-text">planning / calendrier</span> et{" "}
                  <span className="text-text">KPI</span> dans un dashboard clair.
                </p>

                <div className="mt-5 grid gap-3 sm:grid-cols-3">
                  <div className="rounded-xl border border-white/[0.10] bg-white/[0.03] p-4 backdrop-blur-md">
                    <p className="text-xs font-semibold text-text/90">PROBLÈME</p>
                    <p className="mt-1 text-sm text-muted">
                      Suivi des livraisons dispersé, peu de visibilité opérationnelle.
                    </p>
                  </div>
                  <div className="rounded-xl border border-white/[0.10] bg-white/[0.03] p-4 backdrop-blur-md">
                    <p className="text-xs font-semibold text-text/90">SOLUTION</p>
                    <p className="mt-1 text-sm text-muted">
                      Dashboard + planning, gestion des tournées, API & rôles.
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
                  <Badge>Dashboard KPI</Badge>
                  <Badge>Planning / Calendrier</Badge>
                  <Badge>Tournées</Badge>
                </div>

                <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                  <Button href="/work" className="sm:w-auto">
                    Voir le case study
                  </Button>
                  <Button href="/contact" variant="secondary" className="sm:w-auto">
                    Discuter d'un projet similaire
                  </Button>
                </div>
              </div>
            </Card>

            {/* ELANNA PARIS */}
            <Card className="p-6">
              <div className="flex flex-wrap items-center gap-2">
                <Badge className="border-white/[0.14] bg-white/[0.04] text-text/90">
                  E-commerce
                </Badge>
                <Badge className="border-white/[0.14] bg-white/[0.04] text-text/90">
                  Funnel / conversion
                </Badge>
              </div>

              <h3 className="mt-4 text-lg font-semibold">
                Elanna Paris · Landing premium + tunnel de conversion
              </h3>

              <p className="mt-2 text-sm text-muted">
                Achat direct avec un tunnel optimisé : landing, checkout et itérations conversion.
              </p>

              <div className="mt-4 space-y-2 text-sm text-muted">
                <p><span className="text-text/90 font-semibold">Problème :</span> améliorer le taux de conversion.</p>
                <p><span className="text-text/90 font-semibold">Solution :</span> WooCommerce + FunnelKit, parcours plus fluide.</p>
                <p><span className="text-text/90 font-semibold">Impact :</span> tunnel plus clair, expérience premium.</p>
              </div>

              <div className="mt-5 flex flex-wrap gap-2">
                <Badge>WooCommerce</Badge>
                <Badge>FunnelKit</Badge>
                <Badge>Landing</Badge>
                <Badge>Conversion</Badge>
              </div>

              <div className="mt-6 flex gap-3">
                <Button href="/work" variant="secondary" className="w-full">
                  → Voir
                </Button>
              </div>
            </Card>

            {/* ULUBEE */}
            <Card className="p-6">
              <div className="flex flex-wrap items-center gap-2">
                <Badge className="border-white/[0.14] bg-white/[0.04] text-text/90">
                  E-commerce
                </Badge>
                <Badge className="border-white/[0.14] bg-white/[0.04] text-text/90">
                  Performance & paiement
                </Badge>
              </div>

              <h3 className="mt-4 text-lg font-semibold">
                Ulubee · WooCommerce (Elementor) + paiements
              </h3>

              <p className="mt-2 text-sm text-muted">
                Boutique e-commerce sous WordPress : gestion, optimisation et intégration paiement.
              </p>

              <div className="mt-4 space-y-2 text-sm text-muted">
                <p><span className="text-text/90 font-semibold">Problème :</span> améliorer performance & fiabilité.</p>
                <p><span className="text-text/90 font-semibold">Solution :</span> WooCommerce + Elementor, config Stripe/PayPal.</p>
                <p><span className="text-text/90 font-semibold">Impact :</span> parcours d'achat plus stable.</p>
              </div>

              <div className="mt-5 flex flex-wrap gap-2">
                <Badge>WordPress</Badge>
                <Badge>WooCommerce</Badge>
                <Badge>Elementor</Badge>
                <Badge>Stripe</Badge>
                <Badge>PayPal</Badge>
              </div>

              <div className="mt-6 flex gap-3">
                <Button href="/work" variant="secondary" className="w-full">
                  → Voir
                </Button>
              </div>
            </Card>
          </div>

          <div className="mt-8 text-center">
            <Button href="/work" variant="secondary" className="px-8">
              Voir tous les projets
            </Button>
          </div>
        </div>
      </section>

      {/* PRICING TEASER — HOME */}
      <section className="relative py-14 sm:py-20">
        {/* Fond complet sur toute la largeur */}
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-screen bg-[#0B1020]">
            <div className="absolute inset-0"
              style={{
                background: `
                  radial-gradient(1200px 700px at 18% 8%, rgba(91,140,255,0.12), transparent 55%),
                  radial-gradient(900px 650px at 82% 16%, rgba(34,211,238,0.08), transparent 55%),
                  radial-gradient(900px 650px at 40% 85%, rgba(91,140,255,0.06), transparent 60%),
                  linear-gradient(180deg, rgba(0,0,0,0.10), rgba(0,0,0,0.35))
                `
              }}
            />
          </div>
          {/* Fade top pour transition douce avec la section précédente */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-screen h-32 bg-gradient-to-b from-[#0B1020] to-transparent" />
          {/* Fade bottom pour transition douce */}
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-screen h-32 bg-gradient-to-b from-transparent to-[#0B1020]" />
        </div>
        <div className="text-center mb-10">
          <p className="text-xs font-semibold uppercase tracking-wider text-accent2/90">
            Tarifs
          </p>

          <h2 className="mt-2 text-3xl font-semibold sm:text-4xl">
            Des repères clairs, sans surprise
          </h2>

          <p className="mt-3 text-muted max-w-2xl mx-auto text-sm sm:text-base">
            Chaque projet est différent. Voici quelques ordres de grandeur
            pour vous situer avant d'aller plus loin.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3 max-w-5xl mx-auto">
          <Card className="p-6 text-center">
            <Badge>Référence</Badge>
            <h3 className="mt-4 text-2xl font-semibold">450 € / jour</h3>
            <p className="mt-2 text-sm text-muted">
              Base de facturation pour les projets au temps passé ou au forfait.
            </p>
          </Card>

          <Card className="p-6 text-center">
            <Badge>Site vitrine</Badge>
            <h3 className="mt-4 text-2xl font-semibold">2 500 – 4 500 €</h3>
            <p className="mt-2 text-sm text-muted">
              Image pro, performance, SEO et mise en ligne.
            </p>
          </Card>

          <Card className="p-6 text-center">
            <Badge>App / MVP</Badge>
            <h3 className="mt-4 text-2xl font-semibold">8 000 € et +</h3>
            <p className="mt-2 text-sm text-muted">
              Application web ou SaaS sur mesure, scalable.
            </p>
          </Card>
        </div>

        <div className="mt-10 text-center">
          <Button href="/pricing" variant="secondary" className="px-8">
            Voir le détail des tarifs
          </Button>
        </div>
      </section>

      {/* CTA premium */}
      <section className="relative py-12 sm:py-16">
        {/* Fond complet sur toute la largeur */}
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-screen bg-[#0B1020]">
            <div className="absolute inset-0"
              style={{
                background: `
                  radial-gradient(1200px 700px at 18% 8%, rgba(91,140,255,0.12), transparent 55%),
                  radial-gradient(900px 650px at 82% 16%, rgba(34,211,238,0.08), transparent 55%),
                  radial-gradient(900px 650px at 40% 85%, rgba(91,140,255,0.06), transparent 60%),
                  linear-gradient(180deg, rgba(0,0,0,0.10), rgba(0,0,0,0.35))
                `
              }}
            />
          </div>
          {/* Fade top pour transition douce avec la section précédente */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-screen h-32 bg-gradient-to-b from-[#0B1020] to-transparent" />
        </div>
        <Card>
          <div className="p-8">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <h3 className="text-lg font-semibold text-[#f2f4ff]">
                  Vous avez un projet similaire en tête ?
                </h3>
                <p className="mt-1.5 text-sm leading-relaxed text-[rgba(242,244,255,0.65)]">
                  Premier échange rapide : objectifs, périmètre, recommandations et estimation.
                </p>
              </div>
              <div className="flex gap-3">
                <Button href="/contact">Discuter de votre projet</Button>
                <Button href="/services" variant="secondary">
                  Voir les offres
                </Button>
              </div>
            </div>
    </div>
        </Card>
      </section>
    </Container>
  );
}
