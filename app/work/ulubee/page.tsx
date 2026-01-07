import Container from "@/components/Container";
import Card from "@/components/Card";
import Badge from "@/components/Badge";
import Button from "@/components/Button";

export default function Page() {
  return (
    <Container>
      {/* HERO */}
      <section className="py-14 sm:py-20">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-wrap items-center gap-2">
            <Badge>E-commerce</Badge>
            <Badge>Migration</Badge>
            <Badge>PrestaShop → WooCommerce</Badge>
          </div>

          <h1 className="mt-5 text-4xl font-semibold sm:text-5xl">
            Ulubee — Marque de vêtements sport (fitness / musculation)
          </h1>

          <p className="mt-5 text-muted text-sm sm:text-base max-w-3xl">
            Ulubee est une marque orientée fitness & musculation. Le projet a consisté à{" "}
            <span className="text-text">migrer la boutique PrestaShop vers WordPress + WooCommerce</span>{" "}
            afin d'améliorer la gestion, la stabilité et la capacité d'évolution.
            Mise en place sur le thème <span className="text-text">Flatsome</span> avec{" "}
            <span className="text-text">développements custom</span> pour répondre aux besoins spécifiques.
          </p>

          <div className="mt-7 flex flex-wrap gap-3">
            <Button href="/contact">Discuter d’un projet similaire</Button>
            <Button href="/pricing" variant="secondary">
              Voir les tarifs
            </Button>
          </div>
        </div>
      </section>

      {/* IMAGE — ULUBEE */}
      <section className="py-12 sm:py-16">
        <div className="relative max-w-5xl mx-auto">
          {/* glow */}
          <div className="pointer-events-none absolute -inset-6 rounded-3xl bg-accent/10 blur-2xl" />

          <div className="relative overflow-hidden rounded-3xl border border-white/[0.10] bg-white/[0.03] backdrop-blur-md">
            <img
              src="/images/work/ulubee.png"
              alt="Ulubee — site e-commerce fitness et musculation"
              className="w-full h-auto max-h-[600px] object-cover object-top"
            />
          </div>
        </div>
      </section>

      {/* CONTEXTE */}
      <section className="py-12 sm:py-16">
        <Card className="p-8 max-w-5xl mx-auto">
          <h2 className="text-2xl font-semibold">Contexte & objectif</h2>

          <p className="mt-4 text-sm sm:text-base text-muted">
            Le point de départ : une boutique existante sous PrestaShop,
            avec un besoin d’évolution et de meilleure maîtrise côté administration.
          </p>

          <div className="mt-6 grid gap-4 sm:grid-cols-3">
            <div className="rounded-xl border border-white/[0.10] bg-white/[0.03] p-4 backdrop-blur-md">
              <p className="text-xs font-semibold text-text/90">PROBLÈME</p>
              <p className="mt-1 text-sm text-muted">
                Plateforme à faire évoluer + besoin de simplifier la gestion.
              </p>
            </div>
            <div className="rounded-xl border border-white/[0.10] bg-white/[0.03] p-4 backdrop-blur-md">
              <p className="text-xs font-semibold text-text/90">OBJECTIF</p>
              <p className="mt-1 text-sm text-muted">
                Une boutique plus flexible, fiable et simple à administrer.
              </p>
            </div>
            <div className="rounded-xl border border-white/[0.10] bg-white/[0.03] p-4 backdrop-blur-md">
              <p className="text-xs font-semibold text-text/90">APPROCHE</p>
              <p className="mt-1 text-sm text-muted">
                Migration + configuration e-commerce + optimisation performance.
              </p>
            </div>
          </div>
        </Card>
      </section>

      {/* SOLUTION */}
      <section className="py-12 sm:py-16">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-semibold mb-6">
            Solution mise en place
          </h2>

          <div className="grid gap-6 md:grid-cols-3">
            <Card className="p-6">
              <h3 className="text-lg font-semibold">Migration PrestaShop → Woo</h3>
              <ul className="mt-4 space-y-2 text-sm text-muted">
                <li>• Migration du catalogue (produits, catégories, contenus)</li>
                <li>• Reprise structure & URLs (selon besoin)</li>
                <li>• Commandes/clients : non migrés (changement de socle)</li>
                <li>• Vérification cohérence données</li>
              </ul>
            </Card>

            <Card className="p-6">
              <h3 className="text-lg font-semibold">Paiement & tunnel d’achat</h3>
              <ul className="mt-4 space-y-2 text-sm text-muted">
                <li>• WooCommerce configuré</li>
                <li>• Paiement : Stripe & PayPal</li>
                <li>• Expérience d’achat fluide (mobile-first)</li>
              </ul>
            </Card>

            <Card className="p-6">
              <h3 className="text-lg font-semibold">Performance & SEO</h3>
              <ul className="mt-4 space-y-2 text-sm text-muted">
                <li>• Optimisations de base (vitesse)</li>
                <li>• Structure SEO propre</li>
                <li>• Bonnes pratiques contenu</li>
              </ul>
            </Card>
          </div>
        </div>
      </section>

      {/* DÉVELOPPEMENTS SUR MESURE */}
      <section className="py-12 sm:py-16">
        <Card className="p-8 max-w-5xl mx-auto">
          <h2 className="text-2xl font-semibold">Développements sur mesure</h2>
          <p className="mt-4 text-sm sm:text-base text-muted">
            Personnalisation du thème Flatsome et ajustements spécifiques pour améliorer
            l'expérience d'achat et la gestion au quotidien.
          </p>

          <div className="mt-6 grid gap-4 sm:grid-cols-3">
            <div className="rounded-xl border border-white/[0.10] bg-white/[0.03] p-4 backdrop-blur-md">
              <p className="text-xs font-semibold text-text/90">UX / UI</p>
              <p className="mt-1 text-sm text-muted">Ajustements front pour une navigation plus fluide.</p>
            </div>
            <div className="rounded-xl border border-white/[0.10] bg-white/[0.03] p-4 backdrop-blur-md">
              <p className="text-xs font-semibold text-text/90">WooCommerce</p>
              <p className="mt-1 text-sm text-muted">Configuration et adaptations du tunnel d'achat.</p>
            </div>
            <div className="rounded-xl border border-white/[0.10] bg-white/[0.03] p-4 backdrop-blur-md">
              <p className="text-xs font-semibold text-text/90">Fiabilité</p>
              <p className="mt-1 text-sm text-muted">Stabilité, paiements, et base prête à évoluer.</p>
            </div>
          </div>
        </Card>
      </section>

      {/* STACK */}
      <section className="py-12 sm:py-16">
        <Card className="p-8 max-w-5xl mx-auto">
          <h2 className="text-2xl font-semibold">Stack & outils</h2>

          <div className="mt-5 flex flex-wrap gap-2">
            <Badge>PrestaShop (origine)</Badge>
            <Badge>WordPress</Badge>
            <Badge>WooCommerce</Badge>
            <Badge>Flatsome</Badge>
            <Badge>Custom code</Badge>
            <Badge>Stripe</Badge>
            <Badge>PayPal</Badge>
            <Badge>SEO</Badge>
            <Badge>Performance</Badge>
          </div>

          <p className="mt-4 text-sm sm:text-base text-muted">
            Migration vers un socle WooCommerce pour gagner en flexibilité,
            simplifier la gestion et permettre des évolutions rapides.
          </p>
        </Card>
      </section>

      {/* RÔLE */}
      <section className="py-12 sm:py-16">
        <Card className="p-8 max-w-5xl mx-auto">
          <h2 className="text-2xl font-semibold">Mon rôle</h2>

          <ul className="mt-4 space-y-2 text-sm sm:text-base text-muted">
            <li>• Cadrage de la migration et choix de la cible WooCommerce</li>
            <li>• Mise en place de la boutique WordPress + WooCommerce</li>
            <li>• Configuration paiement Stripe & PayPal</li>
            <li>• Optimisations performance et recommandations SEO</li>
          </ul>
        </Card>
      </section>

      {/* IMPACT */}
      <section className="py-12 sm:py-16">
        <Card className="p-8 max-w-5xl mx-auto">
          <h2 className="text-2xl font-semibold">Résultats & bénéfices</h2>

          <ul className="mt-4 space-y-2 text-sm sm:text-base text-muted">
            <li>• Boutique plus simple à administrer</li>
            <li>• Parcours d’achat fiable avec paiements configurés</li>
            <li>• Base flexible pour ajouter des fonctionnalités</li>
            <li>• Fondations SEO & performance plus propres</li>
          </ul>
        </Card>
      </section>

      {/* CTA */}
      <section className="py-14 sm:py-20">
        <Card className="p-8 text-center max-w-4xl mx-auto">
          <h3 className="text-2xl font-semibold">
            Vous avez une migration e-commerce à réaliser ?
          </h3>

          <p className="mt-3 text-sm sm:text-base text-muted">
            Je vous accompagne pour migrer proprement, sécuriser le tunnel d’achat
            et livrer une boutique prête à évoluer.
          </p>

          <div className="mt-6 flex justify-center gap-3 flex-wrap">
            <Button href="/contact">Réserver un appel</Button>
            <Button href="/work" variant="secondary">
              Retour aux projets
            </Button>
          </div>
        </Card>
      </section>
    </Container>
  );
}
