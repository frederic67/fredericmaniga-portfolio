import Container from "@/components/Container";
import Card from "@/components/Card";
import Button from "@/components/Button";
import Badge from "@/components/Badge";

export default function PricingPage() {
  return (
    <Container>
      {/* HERO PRICING */}
      <section className="py-14 sm:py-20">
        <div className="text-center max-w-3xl mx-auto">
          <p className="text-xs font-semibold uppercase tracking-wider text-accent2/90">
            Tarifs & approche
          </p>

          <h1 className="mt-3 text-4xl font-semibold sm:text-5xl">
            Une approche sur mesure, avec des repères clairs.
          </h1>

          <p className="mt-5 text-muted text-sm sm:text-base">
            Chaque projet est différent. Je propose une facturation adaptée
            au périmètre, à la complexité et aux objectifs, avec une logique
            simple : <span className="text-text">livrer de la valeur durable</span>.
          </p>
        </div>
      </section>

      {/* TJM */}
      <section className="pb-14 sm:pb-20">
        <Card className="p-8 max-w-3xl mx-auto text-center">
          <Badge className="mb-4">Référence tarifaire</Badge>

          <h2 className="text-3xl font-semibold">
            450 € / jour
          </h2>

          <p className="mt-3 text-sm text-muted max-w-xl mx-auto">
            Facturation au temps passé ou au forfait selon le projet.
            Le TJM sert de base transparente pour estimer les projets
            de manière cohérente et réaliste.
          </p>

          <div className="mt-6">
            <Button href="/contact">
              Discuter de votre projet
            </Button>
          </div>
        </Card>
      </section>

      {/* FOURCHETTES */}
      <section className="py-14 sm:py-20">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-semibold">
            Ordres de grandeur par type de projet
          </h2>
          <p className="mt-3 text-muted max-w-2xl mx-auto text-sm sm:text-base">
            Ces fourchettes sont indicatives et permettent de se situer.
            Un devis précis est établi après un échange.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {/* SITE VITRINE */}
          <Card className="p-6">
            <Badge>Site vitrine premium</Badge>

            <h3 className="mt-4 text-xl font-semibold">
              2 500 € – 4 500 €
            </h3>

            <p className="mt-3 text-sm text-muted">
              Image professionnelle, performance, SEO technique,
              responsive et tracking.
            </p>

            <ul className="mt-4 space-y-2 text-sm text-muted">
              <li>• Design moderne & responsive</li>
              <li>• SEO & performance</li>
              <li>• Mise en production</li>
            </ul>
          </Card>

          {/* E-COMMERCE */}
          <Card className="p-6">
            <Badge>E-commerce</Badge>

            <h3 className="mt-4 text-xl font-semibold">
              4 000 € – 9 000 €
            </h3>

            <p className="mt-3 text-sm text-muted">
              Boutique en ligne optimisée pour la conversion
              et la performance.
            </p>

            <ul className="mt-4 space-y-2 text-sm text-muted">
              <li>• WooCommerce / Shopify</li>
              <li>• Tunnel d’achat & paiements</li>
              <li>• SEO & optimisation UX</li>
            </ul>
          </Card>

          {/* MVP / APP */}
          <Card className="p-6">
            <Badge>Application web / MVP</Badge>

            <h3 className="mt-4 text-xl font-semibold">
              8 000 € et +
            </h3>

            <p className="mt-3 text-sm text-muted">
              Application sur mesure, SaaS ou outil métier,
              avec une base scalable.
            </p>

            <ul className="mt-4 space-y-2 text-sm text-muted">
              <li>• Front + back (Vue / React / Node)</li>
              <li>• API, auth, rôles</li>
              <li>• Dashboard & logique métier</li>
            </ul>
          </Card>
        </div>
      </section>

      {/* CE QUI FAIT VARIER */}
      <section className="py-14 sm:py-20">
        <div className="grid gap-8 md:grid-cols-2">
          <div>
            <h2 className="text-2xl font-semibold">
              Ce qui fait varier le prix
            </h2>

            <ul className="mt-4 space-y-3 text-sm text-muted">
              <li>• Complexité fonctionnelle</li>
              <li>• Nombre d’intégrations (API, paiement, outils)</li>
              <li>• Délais et urgence</li>
              <li>• Niveau d’accompagnement souhaité</li>
              <li>• Maintenance et évolutions</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold">
              Ce qui est toujours inclus
            </h2>

            <ul className="mt-4 space-y-3 text-sm text-muted">
              <li>• Cadrage et compréhension métier</li>
              <li>• Développement front & back</li>
              <li>• Tests et qualité</li>
              <li>• Mise en production</li>
              <li>• Conseils techniques & produit</li>
            </ul>
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="py-14 sm:py-20">
        <Card className="p-8 text-center">
          <h3 className="text-2xl font-semibold">
            Vous avez un projet en tête ?
          </h3>

          <p className="mt-3 text-sm text-muted max-w-xl mx-auto">
            Un premier échange de 15 minutes pour comprendre vos objectifs,
            vous conseiller et vous donner une estimation réaliste.
          </p>

          <div className="mt-6 flex justify-center">
            <Button href="/contact">
              Réserver un appel
            </Button>
          </div>
        </Card>
      </section>
    </Container>
  );
}
