# GARÉo Photo — relevé photo de visite

Page web hors-ligne : journal horodaté de la visite (zones, équipements, aléas) + rangement automatique des photos au bureau.

## Mise en ligne (GitHub Pages)
1. github.com → New repository → `gareo-photo` (public) → Create.
2. « uploading an existing file » → glisser **tout le contenu** de ce dossier (index.html, sw.js, manifest.webmanifest, icônes, dossier `plans/`) → Commit.
3. Settings → Pages → Source : *Deploy from a branch*, branche `main`, dossier `/ (root)` → Save.
4. Après 1 à 2 min : `https://tonybego33.github.io/gareo-photo/`

## Sur le téléphone
- Ouvrir l'adresse dans Chrome, menu ⋮ → **Ajouter à l'écran d'accueil**.
- Vérifier le badge de version en bas à droite.
- Après une mise à jour : ouvrir avec `?v=2` (incrémenter) pour forcer la nouvelle version.

## Au bureau
Chrome ou Edge sur PC → onglet **Bureau** → charger le journal `.json` → choisir le dossier `DCIM/Camera` copié par câble USB → vérifier → **Exporter le dossier trié**.

Résultat : `PAZ_AAAA-MM-JJ_releve-photo/` avec des dossiers par zone (ordre du parcours) puis par équipement, `PAZ_inventaire_photos.csv` (Excel), `_planche/planche.html`, GeoJSON des points GPS, journal corrigé. Les originaux ne sont jamais modifiés.
