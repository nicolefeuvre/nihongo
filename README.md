# 日本語 · Nihongo PWA

Application progressive d'apprentissage du japonais. Fonctionne hors-ligne après le premier chargement, sauvegarde la progression localement.

## Déployer sur GitHub Pages — pas à pas

### 1. Créer un nouveau dépôt GitHub

1. Va sur https://github.com/new
2. Nom du repo : `nihongo` (ou ce que tu veux)
3. Coche **Public** (obligatoire pour que GitHub Pages soit gratuit)
4. **Ne coche pas** "Add a README" (on en a déjà un)
5. Clique sur **Create repository**

### 2. Uploader les fichiers

Méthode la plus simple — par l'interface web :

1. Sur la page de ton nouveau repo (vide), clique sur **uploading an existing file**
2. Glisse-dépose **tous les fichiers** de ce dossier (index.html, app.js, course-data.js, styles.css, manifest.json, service-worker.js, icon-192.png, icon-512.png, icon-512-maskable.png, README.md)
3. En bas, clique sur **Commit changes**

Méthode en ligne de commande (si tu préfères) :

```bash
cd /chemin/vers/nihongo-pwa
git init
git add .
git commit -m "Nihongo PWA - version initiale"
git branch -M main
git remote add origin https://github.com/TON_USERNAME/nihongo.git
git push -u origin main
```

### 3. Activer GitHub Pages

1. Sur ton repo GitHub, clique sur l'onglet **Settings**
2. Dans le menu de gauche, clique sur **Pages**
3. Sous **Source**, sélectionne :
   - Branch : `main`
   - Folder : `/ (root)`
4. Clique sur **Save**
5. Attends 1-2 minutes. Une bannière verte va apparaître avec ton URL :  
   `https://TON_USERNAME.github.io/nihongo/`

### 4. Installer sur ton iPhone

1. Ouvre **Safari** (pas Chrome — important sur iOS)
2. Va sur l'URL de ta PWA : `https://TON_USERNAME.github.io/nihongo/`
3. Touche le bouton **Partager** en bas (le carré avec une flèche vers le haut)
4. Fais défiler et touche **Sur l'écran d'accueil**
5. Valide le nom (Nihongo)
6. C'est fini : l'icône apparaît à côté de tes autres apps

### 5. Profiter

À la première ouverture (avec internet), l'app se télécharge entièrement dans le cache de Safari. Ensuite :
- Marche **sans internet** (utile pour le train à Misasa, l'avion, etc.)
- Sauvegarde XP, streak, leçons réussies dans le navigateur
- S'ouvre en plein écran comme une vraie app

## Mettre à jour l'app

Si tu modifies le contenu du cours plus tard :

1. Édite les fichiers (le plus probable : `course-data.js`)
2. **Important** : change le numéro de version dans `service-worker.js` (ligne 2) :
   ```js
   const CACHE_VERSION = 'nihongo-v2';  // v2, puis v3, etc.
   ```
3. Re-upload sur GitHub
4. Sur l'iPhone, l'app récupère automatiquement la nouvelle version la prochaine fois qu'elle a internet

## Tester en local avant publication

Si tu veux voir le résultat sur ton ordinateur avant de pousser :

```bash
cd nihongo-pwa
python3 -m http.server 8000
```

Puis ouvre `http://localhost:8000` dans ton navigateur.

⚠️ Note : sur localhost, le service worker fonctionne en HTTP. En production il faut HTTPS — GitHub Pages le fournit automatiquement.

## Structure du projet

```
nihongo-pwa/
├── index.html          # Page principale
├── app.js              # Logique de l'app
├── course-data.js      # Contenu pédagogique (5 chapitres × 3 leçons)
├── styles.css          # Styles
├── manifest.json       # Métadonnées PWA pour iOS/Android
├── service-worker.js   # Cache pour mode hors-ligne
├── icon-192.png        # Icône 192x192
├── icon-512.png        # Icône 512x512
├── icon-512-maskable.png  # Icône avec marges sécurité Android
└── README.md           # Ce fichier
```

## Dépannage

**L'icône n'apparaît pas correctement sur l'iPhone**  
→ Vide le cache Safari (Réglages > Safari > Effacer historique et données) et réinstalle.

**L'app ne marche pas hors-ligne**  
→ Ouvre-la une fois avec internet pour que le service worker termine de mettre les fichiers en cache. Puis réessaie en mode avion.

**Les modifications ne s'affichent pas après un push**  
→ Tu as oublié de changer `CACHE_VERSION` dans `service-worker.js`. Le cache renvoie l'ancienne version.

**GitHub Pages affiche 404**  
→ Vérifie que tu as bien activé Pages dans Settings > Pages, et que la branche est `main` (pas `master`).
