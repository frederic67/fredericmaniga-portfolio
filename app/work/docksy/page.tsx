import React from "react";
import Container from "@/components/Container";
import Card from "@/components/Card";
import Badge from "@/components/Badge";
import Button from "@/components/Button";

export default function DocksyCaseStudy() {
  return (
    <Container>
      {/* HERO */}
      <section className="py-14 sm:py-20">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-wrap items-center gap-2">
            <Badge>SaaS logistique</Badge>
            <Badge>Application métier</Badge>
            <Badge>Projet en production</Badge>
          </div>

          <h1 className="mt-5 text-4xl font-semibold sm:text-5xl">
            Docksy — Application de gestion logistique & livraisons
          </h1>

          <p className="mt-5 text-muted text-sm sm:text-base max-w-3xl">
            Docksy est une application web conçue pour résoudre un problème
            critique dans les sites logistiques :{" "}
            <span className="text-text">
              l’absence de visibilité et d’organisation des flux de livraison
            </span>.
            Le projet est actuellement utilisé par un client confidentiel
            et sera lancé en SaaS pour les PME logistiques.
          </p>

          <div className="mt-7 flex flex-wrap gap-3">
            <Button href="/contact">Discuter d’un projet similaire</Button>
            <Button href="/pricing" variant="secondary">
              Estimer un budget
            </Button>
          </div>
        </div>
      </section>

      {/* CONTEXTE */}
      <section className="py-12 sm:py-16">
        <Card className="p-8 max-w-5xl mx-auto">
          <h2 className="text-2xl font-semibold">Contexte & problématique</h2>

          <p className="mt-4 text-sm sm:text-base text-muted">
            Les sites logistiques accueillent quotidiennement{" "}
            <span className="text-text">plusieurs transporteurs</span>, souvent
            sans créneaux définis. Résultat :
          </p>

          <ul className="mt-4 space-y-2 text-sm sm:text-base text-muted">
            <li>• Arrivées simultanées et imprévisibles</li>
            <li>• Ressources mal allouées (réceptionnaires, logisticiens)</li>
            <li>• Manque de visibilité en temps réel</li>
            <li>• Gestion manuelle via Excel ou échanges informels</li>
          </ul>

          <p className="mt-4 text-sm sm:text-base text-muted">
            L’objectif était de créer une{" "}
            <span className="text-text">application métier centralisée</span>,
            capable d’organiser les flux, de réserver des créneaux et de piloter
            l’activité en temps réel.
          </p>
        </Card>
      </section>

      {/* SOLUTION */}
      <section className="py-12 sm:py-16">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-semibold mb-6">
            Solution mise en place
          </h2>

          <div className="grid gap-6 md:grid-cols-2">
            <Card className="p-6">
              <h3 className="text-lg font-semibold">Fonctionnalités clés</h3>
              <ul className="mt-4 space-y-2 text-sm text-muted">
                <li>• Gestion des livraisons & tournées</li>
                <li>• Planning interactif avec réservation de créneaux</li>
                <li>• Validation en temps réel des livraisons attendues</li>
                <li>• Dashboard KPI (activité, flux, performance)</li>
                <li>• Gestion clients & fournisseurs</li>
                <li>• Gestion des utilisateurs (admin, user, réception)</li>
                <li>• Statuts de livraison & suivi</li>
                <li>• Messagerie interne</li>
                <li>• Gestion des références</li>
              </ul>
            </Card>

            <Card className="p-6">
              <h3 className="text-lg font-semibold">
                Architecture & expérience
              </h3>
              <ul className="mt-4 space-y-2 text-sm text-muted">
                <li>• Application web full-stack sur mesure</li>
                <li>• Interface claire orientée métier</li>
                <li>• Données centralisées et sécurisées</li>
                <li>• Utilisation en production chez un client</li>
                <li>• Base scalable pour un lancement SaaS (V2)</li>
              </ul>
            </Card>
          </div>
        </div>
      </section>

      {/* STACK */}
      <section className="py-12 sm:py-16">
        <Card className="p-8 max-w-5xl mx-auto">
          <h2 className="text-2xl font-semibold">Stack technique</h2>

          <div className="mt-5 flex flex-wrap gap-2">
            <Badge>Vue.js</Badge>
            <Badge>Node.js</Badge>
            <Badge>Express</Badge>
            <Badge>MySQL</Badge>
            <Badge>JWT Auth</Badge>
            <Badge>API REST</Badge>
            <Badge>Cloud</Badge>
          </div>

          <p className="mt-4 text-sm sm:text-base text-muted">
            Architecture orientée API, authentification JWT, base de données
            relationnelle et hébergement cloud pour garantir performance,
            sécurité et évolutivité.
          </p>
        </Card>
      </section>

      {/* RÔLE */}
      <section className="py-12 sm:py-16">
        <Card className="p-8 max-w-5xl mx-auto">
          <h2 className="text-2xl font-semibold">Mon rôle</h2>

          <p className="mt-4 text-sm sm:text-base text-muted">
            J’ai conçu et développé Docksy{" "}
            <span className="text-text">de bout en bout</span> :
          </p>

          <ul className="mt-4 space-y-2 text-sm sm:text-base text-muted">
            <li>• Architecture technique</li>
            <li>• Développement front (Vue.js)</li>
            <li>• Développement back (Node.js / Express)</li>
            <li>• Modélisation de la base de données</li>
            <li>• Logique métier & UX</li>
            <li>• Authentification & sécurité</li>
            <li>• Déploiement cloud</li>
          </ul>
        </Card>
      </section>

      {/* IMPACT */}
      <section className="py-12 sm:py-16">
        <Card className="p-8 max-w-5xl mx-auto">
          <h2 className="text-2xl font-semibold">Résultats & bénéfices</h2>

          <ul className="mt-4 space-y-2 text-sm sm:text-base text-muted">
            <li>• Pilotage de l’activité plus précis</li>
            <li>• Meilleure visibilité en temps réel</li>
            <li>• Réduction des frictions opérationnelles</li>
            <li>• Gain de temps pour les équipes logistiques</li>
            <li>• Base solide pour un déploiement SaaS à plus grande échelle</li>
          </ul>
        </Card>
      </section>

      {/* CTA */}
      <section className="py-14 sm:py-20">
        <Card className="p-8 text-center max-w-4xl mx-auto">
          <h3 className="text-2xl font-semibold">
            Vous avez un projet métier complexe ?
          </h3>

          <p className="mt-3 text-sm sm:text-base text-muted">
            Je vous accompagne de la conception à la mise en production
            d’applications web robustes et évolutives.
          </p>

          <div className="mt-6 flex justify-center gap-3 flex-wrap">
            <Button href="/contact">Réserver un appel</Button>
            <Button href="/pricing" variant="secondary">
              Voir les tarifs
            </Button>
          </div>
        </Card>
      </section>
    </Container>
  );
}
