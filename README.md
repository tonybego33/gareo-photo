# GARÉo Photo — relevé photo de visite

Appli photo hors-ligne : on prend la photo, on la pointe sur le plan (position + direction), on la range (zone libre, un ou plusieurs équipements, aléas, note). Chaque photo est gardée dans l'appli et copiée, déjà nommée, dans Téléchargements.

## Mise en ligne (GitHub Pages)
1. github.com → New repository → `gareo-photo` (public) → Create.
2. « uploading an existing file » →  glisser **tout le contenu** de ce dossier (index.html, sw.js, manifest.webmanifest, icônes, dossier `plans/`) → Commit.
3. Settings → Pages → Source : *Deploy from a branch*, branche `main`, dossier `/ (root)` → Save.
4. Après 1 à 2 min : `https://tonybego33.github.io/gareo-photo/`

## Sur le téléphone
- Ouvrir l'adresse dans Chrome, menu ⋮ → **Ajouter à l'écran d'accueil**.
- Vérifier le badge de version en bas à droite.
- Après une mise à jour : ouvrir avec `?v=2` (incrémenter) pour forcer la nouvelle version.

## Synthèse
Onglet **Export** → **✨ Générer la synthèse** : un fichier HTML autonome (couverture, aléas surlignés, tableau zones × aléas, points d'attention, plans avec photos numérotées et flèches de direction, une fiche par zone). Imprimer en PDF depuis le navigateur.

## Au bureau
Chrome ou Edge sur PC → onglet **Bureau** → charger le relevé `PAZ_releve_….json` → choisir les fichiers `PAZ_0001_…` du dossier `Download` du téléphone (copié par câble USB) → **Exporter le dossier trié**.

Résultat : `PAZ_AAAA-MM-JJ_releve-photo/` avec des dossiers par zone (ordre de prise) puis par équipement, `PAZ_inventaire_photos.csv` (Excel), `_planche/planche.html` (photos numérotées sur le plan), GeoJSON. Les originaux ne sont jamais modifiés.
