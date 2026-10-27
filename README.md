# Portfolio — Jean Marc Mahonté

Site portfolio statique de **Jean Marc Mahonté**, graphiste senior et directeur créatif indépendant à Ouagadougou. Il présente quinze études de cas en édition institutionnelle, identité visuelle, campagnes, communication numérique et événementiel, à destination des ONG, institutions, agences des Nations unies et programmes financés par des bailleurs.

Le contenu est établi à partir des fichiers réels du dossier professionnel. Aucun client, résultat, témoignage ou chiffre d’impact n’a été inventé.

## Stack

- **Next.js 16.4.3** (App Router, export statique)
- **React 19.3.1**
- **TypeScript 5.9**
- **Tailwind CSS 3.4.19**
- Polices auto-hébergées : Archivo, Inter, IBM Plex Mono (`public/fonts`)
- Aucun backend, aucune base de données, aucun service payant

## Démarrage

Prérequis : Node.js 20 ou supérieur et npm.

```bash
npm install
npm run dev
```

Le site est disponible sur `http://localhost:3000`.

## Build et prévisualisation

```bash
npm run build
npm run preview
```

`npm run build` produit un site statique dans `out/`. `npm run preview` sert ce dossier avec Python (`python -m http.server 3000 --directory out`). Tout serveur statique convient.

Le build de production utilise par défaut `https://marcmahonte-art.github.io` pour les URL canonical, Open Graph, le sitemap et `robots.txt`. Pour un domaine personnalisé, définir l’URL **avant** le build :

```bash
NEXT_PUBLIC_SITE_URL="https://jeanmarcmahonte.com" npm run build
```

Ou créer un fichier `.env.local` à partir de `.env.example`. En développement, le site utilise `http://localhost:3000`.

En export statique, Next écrit les charges RSC dans des chemins imbriqués que le préchargement client ne retrouve pas toujours. Les liens passent donc par `components/AppLink.tsx`, qui désactive `prefetch` pour éviter des 404 de préchargement. La navigation reste client-side.

## Structure

```text
app/                       routes App Router
├── page.tsx               accueil
├── projets/               liste filtrable + fiches [slug]
├── a-propos/              parcours et CV
├── services/              7 savoir-faire
├── methodologie/          7 étapes
├── references/            organisations et agences
├── contact/               formulaire mailto
├── sitemap.ts, robots.ts
components/                navigation, cartes, galerie, formulaire, etc.
data/
├── projects.ts            source unique des 15 études de cas
├── site.ts                coordonnées, navigation, URL publique
└── media.ts               portrait
public/
├── images/                dérivés WebP par projet
├── cv/                    CV PDF publié
├── fonts/                 WOFF2
└── og/                    image Open Graph
scripts/                   optimisation des images et génération OG
.github/workflows/         déploiement GitHub Pages
```

L’audit des sources et l’inventaire des 137 fichiers ne sont pas publiés dans ce dépôt public.

## Modifier le contenu

Tout le contenu éditorial des projets est dans `data/projects.ts`. Chaque entrée contient le contexte, l’objectif, le rôle, les livrables, les contraintes, l’approche, les mentions de droits, un statut de vérification (`confirmé`, `documenté`), les images et l’ordre d’affichage.

Pour ajouter un projet :

1. Ajouter les dérivés WebP dans `public/images/<projet>/`.
2. Déclarer l’entrée dans `data/projects.ts` avec des largeurs correspondant aux fichiers réellement générés.
3. Ajuster `featured`, `order` et `verification`.
4. Relancer `npm run build`.

Les tableaux `services.related` de `app/services/page.tsx` et les références de `app/references/page.tsx` sont à mettre à jour manuellement si un projet est ajouté ou retiré.

## Images et droits

- Les fichiers sources originaux n’ont pas été modifiés. Les images du site sont des **dérivés WebP** générés pour le web.
- Les visuels de Coris et Canal+ ont été générés par `scripts/optimize-coris-canal.py` ; ceux de Youth Connekt, Laborex, GreenMax, Azalai et OEACP par `scripts/optimize-additional.py`, à partir des originaux, sans écrasement.
- Les visuels clients restent soumis aux droits des organisations et des personnes représentées. Aucun nom de bénéficiaire ou d’invité n’est publié. Le nom du signataire figure uniquement dans la carte officielle OEACP, sans être repris dans les textes de la fiche.
- Les visuels Canal+ sont des **simulations de présentation**, pas des photographies de l’événement.
- **GreenMax** est marqué confidentiel par le client : seule la couverture du profil institutionnel est publiée ; les pages internes et les données ne le sont pas.
- Les logos et marques cités ne valent pas approbation officielle du portfolio.

L’audit et l’inventaire des sources sont conservés hors du dépôt public ; ils documentent les droits, la confidentialité et les crédits.

## Formulaire de contact

Le site n’a **pas de serveur d’envoi**. Le formulaire valide les champs puis prépare un e-mail dans le logiciel de messagerie du visiteur (`mailto:`). Aucune donnée n’est stockée ni transmise à un tiers par le site. Si la messagerie ne s’ouvre pas, un lien de repli vers `marcmahonte@gmail.com` est affiché. Ce fonctionnement est annoncé explicitement dans l’interface.

## Accessibilité et qualité

- Lien d’évitement, landmarks, hiérarchie de titres, focus visible.
- Menu mobile et galerie avec piège de focus, fermeture par `Échap`, navigation par flèches.
- Filtres avec `aria-pressed` et compteur `aria-live`.
- Formulaire avec `aria-invalid`, messages d’erreur associés et focus sur le premier champ invalide.
- Respect de `prefers-reduced-motion`.
- Feuille de style d’impression pour les fiches projet.
- Images avec alternatives textuelles, dimensions intrinsèques et variantes responsives.
- Build TypeScript validé ; audit Playwright sur 36 pages/vues (desktop, tablette, mobile) : aucune image cassée, aucun débordement horizontal, aucune erreur console hors 404 attendue.
- 29 tests fonctionnels validés : menu mobile, filtres, galerie, formulaire, liens internes, sitemap, avertissement de confidentialité et dossiers sources vides.

## Limites connues

- **Pas de backend** : le formulaire ne peut pas envoyer lui-même un message ; il prépare un e-mail.
- **Rôles** : la direction créative et la conception graphique senior sont déclarées par Jean Marc Mahonté sur les quinze études de cas (octobre 2026). I.D.E.A. : consultant en design graphique, Côte d’Ivoire, 2026. Warassa : directeur créatif, Tchad, 2025.
- **Youth Connekt** : année 2025, pays (Madagascar) et rôle communiqués par Jean Marc Mahonté ; les supports documentent la campagne.
- **Plan International Tchad** : année 2025–2026 communiquée par Jean Marc Mahonté (octobre 2026) ; les supports documentent la campagne.
- **GreenMax** : dossier marqué confidentiel ; seule la couverture est publiée.
- **OEACP** : le dossier ne contient qu’une carte de vœux ; les visuels du 11e Sommet cités au CV ne sont pas disponibles.
- **Canal+** : année et commanditaire direct restent à préciser ; l’autorisation d’affichage est déclarée détenue, vérifier le périmètre d’usage de la marque.
- **Laborex, Azalai, GreenMax, OEACP** : brief, année ou périmètre non précisés dans les sources ; ces limites figurent sur chaque fiche.
- **Droits à l’image** : Jean Marc Mahonté déclare détenir les autorisations de diffusion pour chaque projet (octobre 2026). Conserver les justificatifs écrits et vérifier que leur périmètre couvre le portfolio en ligne, les réseaux sociaux et les recadrages.
- **CILSS** : exports de 540 px seulement ; les fichiers d’impression ne sont pas disponibles.
- **Quatre dossiers sources vides** : BDT Tchad, Cour des Comptes, Ecobank et Telecel. Ils sont listés dans les références ; aucun ne fait l’objet d’une étude de cas.
- **URL publique** : `https://marcmahonte-art.github.io`, définie dans le workflow. Pour un domaine personnalisé, définir `NEXT_PUBLIC_SITE_URL` avant le build.
- **Hébergement sur sous-chemin** : le site est publié à la racine d’un domaine. Un déploiement sous `/portfolio-jean-marc-mahonte/` nécessiterait d’adapter les chemins absolus des images, polices, CV et images Open Graph.
- **Pas d’analytics ni de réseaux sociaux** : aucune mesure d’audience ni compte social n’est intégré.

## Dépôt public et déploiement

Le dépôt public contient uniquement le site : code, données, visuels optimisés, CV, polices, scripts d’optimisation et workflow de déploiement. L’audit des sources et l’inventaire des 137 fichiers restent hors du dépôt.

- **URL** : https://marcmahonte-art.github.io
- **Déploiement** : `.github/workflows/deploy.yml` construit `out/` et publie l’artefact sur GitHub Pages à chaque push sur `main`.
- **Build local** : `npm run build`, puis `npm run preview`.
- **Propriété** : © Jean Marc Mahonté. Tous droits réservés. Les visuels restent la propriété de leurs commanditaires respectifs.
