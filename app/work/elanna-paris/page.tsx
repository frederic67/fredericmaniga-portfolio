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
            <Badge>Landing premium</Badge>
            <Badge>Tunnel de conversion</Badge>
          </div>

          <h1 className="mt-5 text-4xl font-semibold sm:text-5xl">
            Elanna Paris — Landing premium + tunnel de conversion
          </h1>

          <p className="mt-5 text-muted text-sm sm:text-base max-w-3xl">
            Elanna Paris est un <span className="text-text">site e-commerce complet</span>{" "}
            basé sur <span className="text-text">WordPress + WooCommerce</span>, avec une{" "}
            <span className="text-text">landing dédiée à un produit spécifique</span>{" "}
            et un <span className="text-text">tunnel de conversion optimisé</span>{" "}
            (achat direct) via FunnelKit. Objectif : réduire la friction et maximiser la conversion,
            surtout sur mobile.
          </p>

          <div className="mt-7 flex flex-wrap gap-3">
            <Button href="/contact">Discuter d’un projet similaire</Button>
            <Button href="/pricing" variant="secondary">
              Voir les tarifs
            </Button>
          </div>
        </div>
      </section>

      {/* IMAGE — ELANNA PARIS */}
      <section className="py-12 sm:py-16">
        <div className="relative max-w-5xl mx-auto">
          {/* glow */}
          <div className="pointer-events-none absolute -inset-6 rounded-3xl bg-accent/10 blur-2xl" />

          <div className="relative overflow-hidden rounded-3xl border border-white/[0.10] bg-white/[0.03] backdrop-blur-md">
            <img
              src="/images/work/elanna-paris.png"
              alt="Elanna Paris — site e-commerce avec landing premium et tunnel de conversion"
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
            L'objectif était de créer un{" "}
            <span className="text-text">parcours d'achat simple et premium</span>{" "}
            pour maximiser la conversion sur mobile et desktop.
          </p>

          <p className="mt-3 text-sm sm:text-base text-muted">
            Le projet comprend un <span className="text-text">site e-commerce complet</span> et
            une <span className="text-text">landing produit dédiée</span> pour maximiser les ventes.
          </p>

          <div className="mt-6 grid gap-4 sm:grid-cols-3">
            <div className="rounded-xl border border-white/[0.10] bg-white/[0.03] p-4 backdrop-blur-md">
              <p className="text-xs font-semibold text-text/90">PROBLÈME</p>
              <p className="mt-1 text-sm text-muted">
                Conversion à optimiser sur un parcours trop “e-commerce standard”.
              </p>
            </div>
            <div className="rounded-xl border border-white/[0.10] bg-white/[0.03] p-4 backdrop-blur-md">
              <p className="text-xs font-semibold text-text/90">OBJECTIF</p>
              <p className="mt-1 text-sm text-muted">
                Un tunnel clair, rapide, mobile-first, orienté achat direct.
              </p>
            </div>
            <div className="rounded-xl border border-white/[0.10] bg-white/[0.03] p-4 backdrop-blur-md">
              <p className="text-xs font-semibold text-text/90">APPROCHE</p>
              <p className="mt-1 text-sm text-muted">
                Landing → checkout optimisé → mesure & itérations.
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
              <h3 className="text-lg font-semibold">E-commerce WooCommerce</h3>
              <ul className="mt-4 space-y-2 text-sm text-muted">
                <li>• Base e-commerce (produits, pages, contenus)</li>
                <li>• Structure claire et cohérente pour la marque</li>
                <li>• Optimisation performance & SEO</li>
              </ul>
            </Card>

            <Card className="p-6">
              <h3 className="text-lg font-semibold">Landing produit (conversion)</h3>
              <ul className="mt-4 space-y-2 text-sm text-muted">
                <li>• Bénéfices → preuves → CTA</li>
                <li>• Mise en confiance (preuves, rassurance)</li>
                <li>• Mobile-first, lecture fluide</li>
              </ul>
            </Card>

            <Card className="p-6">
              <h3 className="text-lg font-semibold">Tunnel optimisé (FunnelKit)</h3>
              <ul className="mt-4 space-y-2 text-sm text-muted">
                <li>• Checkout simplifié via FunnelKit</li>
                <li>• Paiement : Stripe & PayPal</li>
                <li>• Réduction des frictions & étapes</li>
              </ul>
            </Card>
          </div>
        </div>
      </section>

      {/* STACK */}
      <section className="py-12 sm:py-16">
        <Card className="p-8 max-w-5xl mx-auto">
          <h2 className="text-2xl font-semibold">Stack & outils</h2>

          <div className="mt-5 flex flex-wrap gap-2">
            <Badge>WordPress</Badge>
            <Badge>WooCommerce</Badge>
            <Badge>FunnelKit</Badge>
            <Badge>Stripe</Badge>
            <Badge>PayPal</Badge>
            <Badge>Landing produit</Badge>
            <Badge>Conversion</Badge>
            <Badge>SEO</Badge>
          </div>

          <p className="mt-4 text-sm sm:text-base text-muted">
            Un socle e-commerce fiable (WooCommerce) enrichi avec FunnelKit pour
            un checkout plus performant, et une approche orientée conversion.
          </p>
        </Card>
      </section>

      {/* RÔLE */}
      <section className="py-12 sm:py-16">
        <Card className="p-8 max-w-5xl mx-auto">
          <h2 className="text-2xl font-semibold">Mon rôle</h2>

          <ul className="mt-4 space-y-2 text-sm sm:text-base text-muted">
            <li>• Conception du parcours (landing + tunnel)</li>
            <li>• Implémentation WooCommerce + FunnelKit</li>
            <li>• Optimisation performance / UX mobile</li>
            <li>• Recommandations SEO & conversion</li>
          </ul>
        </Card>
      </section>

      {/* IMPACT */}
      <section className="py-12 sm:py-16">
        <Card className="p-8 max-w-5xl mx-auto">
          <h2 className="text-2xl font-semibold">Résultats & bénéfices</h2>

          <ul className="mt-4 space-y-2 text-sm sm:text-base text-muted">
            <li>• Tunnel plus fluide et lisible</li>
            <li>• Expérience premium alignée avec la marque</li>
            <li>• Base prête pour itérations et optimisations continues</li>
          </ul>

          <p className="mt-4 text-sm text-muted">
            (Si tu veux, on pourra ajouter des métriques plus tard : taux de conversion,
            temps de chargement, abandon panier…)
          </p>
        </Card>
      </section>

      {/* CTA */}
      <section className="py-14 sm:py-20">
        <Card className="p-8 text-center max-w-4xl mx-auto">
          <h3 className="text-2xl font-semibold">
            Vous voulez un tunnel qui convertit ?
          </h3>

          <p className="mt-3 text-sm sm:text-base text-muted">
            Landing + checkout optimisé : une approche premium orientée résultats.
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
