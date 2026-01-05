# 🚀 Guide de Déploiement Vercel - publox-marketing.com

## 📋 Vue d'ensemble

Ce guide détaille chaque étape pour déployer le projet Next.js sur Vercel et connecter le domaine `publox-marketing.com` (et `www.publox-marketing.com`).

---

## ✅ ÉTAPE 1: Vérification de la structure Next.js

### 1.1 Vérification des fichiers de configuration

✅ **package.json** - Vérifié:
- Scripts: `dev`, `build`, `start` ✅
- Next.js 14.2.0 ✅
- next-intl 3.15.0 ✅
- TypeScript ✅

✅ **next.config.mjs** - Vérifié:
- Plugin next-intl configuré ✅
- Configuration minimale (OK pour Vercel) ✅

✅ **App Router** - Vérifié:
- Structure `app/[locale]/` ✅
- Middleware i18n configuré ✅
- Locales: `es`, `en`, `fr` ✅

### 1.2 Test du build local

**Commande à exécuter:**

```powershell
# Dans le répertoire du projet
npm run build
```

**Résultats attendus:**
- Build réussi sans erreurs
- Génération des pages statiques pour chaque locale
- Pas d'erreurs TypeScript

**Si erreurs:**
- Vérifier les imports manquants
- Vérifier les types TypeScript
- Vérifier que tous les fichiers de traduction existent (`messages/es.json`, `en.json`, `fr.json`)

### 1.3 Vérification des assets vidéo

⚠️ **Problème potentiel identifié:**
Les fichiers vidéo dans `/public/media/videos/` contiennent:
- Espaces dans les noms: `Pack Automatización-Adquisicion-Branding.mp4`
- Accents: `Automatización.mp4`, `Impresión-profesional.mp4`
- Parenthèses: `Caballete-(Doble Cara).mp4`

**Recommandation (optionnelle):**
Si des problèmes surviennent en production, renommer les fichiers:
- Remplacer les espaces par des tirets: `-`
- Supprimer les accents ou utiliser des équivalents ASCII
- Supprimer les parenthèses

**Exemple de renommage:**
```
Pack Automatización-Adquisicion-Branding.mp4 → Pack-Automatizacion-Adquisicion-Branding.mp4
Caballete-(Doble Cara).mp4 → Caballete-Doble-Cara.mp4
```

**Note:** Next.js/Vercel gère généralement bien ces caractères, mais c'est une bonne pratique pour éviter les problèmes.

---

## ✅ ÉTAPE 2: Préparation du repo Git

### 2.1 Vérification du .gitignore

✅ **.gitignore** - Mis à jour:
- `/node_modules` ✅
- `/.next/` ✅
- `.env*` ✅ (tous les fichiers d'environnement)
- `.vercel` ✅

### 2.2 Initialisation Git (si pas déjà fait)

**Commandes à exécuter:**

```powershell
# Vérifier si Git est initialisé
git status

# Si erreur "not a git repository", initialiser:
git init

# Configurer Git (si pas déjà fait)
git config user.name "sergeiovitch63-create"
git config user.email "votre-email@example.com"
```

### 2.3 Commit initial

**Commandes à exécuter:**

```powershell
# Ajouter tous les fichiers
git add .

# Vérifier ce qui sera commité
git status

# Créer le commit initial
git commit -m "Initial commit: Next.js app with i18n (es/en/fr)"
```

---

## ✅ ÉTAPE 3: Création du repo GitHub et push

### 3.1 Créer le repo sur GitHub (via UI)

**Étapes UI GitHub:**

1. Aller sur https://github.com/sergeiovitch63-create
2. Cliquer sur **"New repository"** (ou **"+"** → **"New repository"**)
3. Remplir:
   - **Repository name:** `publox-marketing`
   - **Description:** (optionnel) "Site marketing Publox Tenerife - Next.js"
   - **Visibility:** Private ou Public (selon préférence)
   - **⚠️ NE PAS** cocher "Initialize with README", "Add .gitignore", ou "Choose a license"
4. Cliquer sur **"Create repository"**

### 3.2 Push du code vers GitHub

**Commandes à exécuter:**

```powershell
# Ajouter le remote GitHub
git remote add origin https://github.com/sergeiovitch63-create/publox-marketing.git

# Vérifier le remote
git remote -v

# Renommer la branche en main (si nécessaire)
git branch -M main

# Push vers GitHub
git push -u origin main
```

**Si erreur d'authentification:**
- Utiliser un Personal Access Token (PAT) au lieu du mot de passe
- Ou configurer SSH: `git remote set-url origin git@github.com:sergeiovitch63-create/publox-marketing.git`

---

## ✅ ÉTAPE 4: Déploiement Vercel

### 4.1 Méthode 1: Via l'interface Vercel (recommandé)

**Étapes UI Vercel:**

1. Aller sur https://vercel.com
2. Se connecter avec GitHub (ou créer un compte)
3. Cliquer sur **"Add New..."** → **"Project"**
4. Importer le repo `publox-marketing`:
   - Sélectionner `sergeiovitch63-create/publox-marketing`
   - Cliquer sur **"Import"**
5. Configuration du projet:
   - **Framework Preset:** Next.js (détecté automatiquement)
   - **Root Directory:** `./` (par défaut)
   - **Build Command:** `npm run build` (par défaut)
   - **Output Directory:** `.next` (par défaut, géré par Next.js)
   - **Install Command:** `npm install` (par défaut)
6. **Variables d'environnement:**
   - Cliquer sur **"Environment Variables"**
   - Ajouter les variables nécessaires (voir section 4.2)
7. Cliquer sur **"Deploy"**

### 4.2 Méthode 2: Via Vercel CLI

**Commandes à exécuter:**

```powershell
# Installer Vercel CLI globalement
npm install -g vercel

# Se connecter à Vercel
vercel login

# Dans le répertoire du projet, lancer le déploiement
vercel

# Suivre les prompts:
# - Set up and deploy? Y
# - Which scope? (sélectionner votre compte)
# - Link to existing project? N
# - Project name? publox-marketing
# - Directory? ./
# - Override settings? N

# Pour déployer en production
vercel --prod
```

### 4.3 Variables d'environnement

**Variables à vérifier/ajouter dans Vercel:**

1. Aller dans **Project Settings** → **Environment Variables**
2. Ajouter les variables nécessaires:

**Variables possibles (selon votre app):**
- `NEXT_PUBLIC_*` - Variables publiques (exposées au client)
- `RESEND_API_KEY` - Si vous utilisez Resend pour les emails
- `DATABASE_URL` - Si vous utilisez une base de données
- `NEXT_PUBLIC_SITE_URL` - URL du site (ex: `https://publox-marketing.com`)

**⚠️ Important:**
- Les variables `NEXT_PUBLIC_*` sont exposées au client
- Ne jamais commiter les secrets dans le code
- Ajouter les variables pour **Production**, **Preview**, et **Development** selon les besoins

**Exemple d'ajout dans Vercel UI:**
```
Name: NEXT_PUBLIC_SITE_URL
Value: https://publox-marketing.com
Environment: Production, Preview, Development
```

### 4.4 Vérification du build Vercel

Après le déploiement:
1. Vérifier les logs de build dans Vercel Dashboard
2. S'assurer que le build réussit
3. Tester l'URL de déploiement (ex: `publox-marketing.vercel.app`)

---

## ✅ ÉTAPE 5: Connexion du domaine

### 5.1 Ajouter les domaines dans Vercel

**Étapes UI Vercel:**

1. Aller dans **Project Settings** → **Domains**
2. Ajouter les domaines:
   - `publox-marketing.com`
   - `www.publox-marketing.com`
3. Vercel affichera les instructions DNS

### 5.2 Configuration DNS chez le registrar

**Enregistrements DNS à ajouter:**

#### Pour le domaine root (`publox-marketing.com`):

**Option A: A Record (recommandé pour root)**
```
Type: A
Name: @ (ou laisser vide, selon le registrar)
Value: 76.76.21.21
TTL: 3600 (ou Auto)
```

**Option B: Si le registrar n'accepte pas A record sur root:**
- Utiliser un CNAME vers `cname.vercel-dns.com` (si supporté)
- Ou utiliser un redirect du registrar vers `www.publox-marketing.com`

#### Pour le sous-domaine `www`:

**CNAME Record:**
```
Type: CNAME
Name: www
Value: cname.vercel-dns.com
TTL: 3600 (ou Auto)
```

### 5.3 Instructions par registrar

**Si votre registrar est:**
- **Namecheap:** Domains → Manage → Advanced DNS → Add New Record
- **GoDaddy:** DNS → Records → Add
- **Cloudflare:** DNS → Records → Add record
- **Google Domains:** DNS → Custom records → Add

**⚠️ Note importante:**
- Certains registrars ne permettent pas CNAME sur root (@)
- Dans ce cas, utiliser A record vers `76.76.21.21` pour root
- Vercel détectera automatiquement les deux domaines

### 5.4 Vérification de la propagation DNS

**Commandes à exécuter (Windows PowerShell):**

```powershell
# Vérifier le domaine root
nslookup publox-marketing.com

# Vérifier www
nslookup www.publox-marketing.com

# Alternative avec Resolve-DnsName
Resolve-DnsName publox-marketing.com
Resolve-DnsName www.publox-marketing.com
```

**Résultats attendus:**
- `publox-marketing.com` → `76.76.21.21` (ou IP Vercel)
- `www.publox-marketing.com` → `cname.vercel-dns.com` (ou IP résolue)

**Temps de propagation:**
- Généralement: 5-30 minutes
- Maximum: jusqu'à 48 heures (rare)

### 5.5 Vérification SSL/HTTPS

**Vercel configure automatiquement SSL via Let's Encrypt:**
1. Une fois les DNS propagés, Vercel détecte les domaines
2. SSL est configuré automatiquement (gratuit)
3. Vérifier dans **Project Settings** → **Domains** que le statut est "Valid"

**Vérification manuelle:**
```powershell
# Tester HTTPS
curl -I https://publox-marketing.com
curl -I https://www.publox-marketing.com
```

**Ou dans le navigateur:**
- Ouvrir `https://publox-marketing.com`
- Vérifier le cadenas vert dans la barre d'adresse

---

## ✅ ÉTAPE 6: Vérification des routes i18n et assets

### 6.1 Test des routes i18n en production

**URLs à tester:**

```
https://publox-marketing.com/es
https://publox-marketing.com/en
https://publox-marketing.com/fr
https://publox-marketing.com/es/marketing
https://publox-marketing.com/en/marketing
https://publox-marketing.com/fr/marketing
https://publox-marketing.com/es/contacto
https://publox-marketing.com/es/impresion
```

**Vérifications:**
- ✅ Redirection de `/` vers `/es` (via middleware)
- ✅ Toutes les locales fonctionnent
- ✅ Les traductions s'affichent correctement
- ✅ Le LanguageSwitcher fonctionne

### 6.2 Test des assets vidéo

**URLs à tester:**

```
https://publox-marketing.com/media/videos/HERO.mp4
https://publox-marketing.com/media/videos/Automatización.mp4
https://publox-marketing.com/media/videos/Pack Automatización-Adquisicion-Branding.mp4
```

**Vérifications:**
- ✅ Status 200 (OK)
- ✅ Les vidéos se chargent et se lisent
- ✅ Pas d'erreurs 404

**Si problème avec les noms de fichiers:**
- Vérifier les logs Vercel
- Renommer les fichiers problématiques (voir section 1.3)
- Mettre à jour les références dans le code
- Redéployer

### 6.3 Vérification des chemins Windows/Git

**Problèmes potentiels:**
- Accents dans les noms de fichiers
- Espaces dans les chemins
- Casse de fichiers (Windows insensible à la casse, Linux non)

**Solution si problème:**
1. Renommer les fichiers problématiques
2. Mettre à jour les références dans le code
3. Commit et push
4. Redéployer

---

## ✅ CHECKLIST FINALE DE VALIDATION

### Fonctionnalités de base
- [ ] Site accessible en HTTPS
- [ ] Redirection HTTP → HTTPS fonctionne
- [ ] Domaine root (`publox-marketing.com`) fonctionne
- [ ] Domaine www (`www.publox-marketing.com`) fonctionne
- [ ] Redirection www → root (ou inversement) configurée si souhaitée

### Routes i18n
- [ ] `/` redirige vers `/es`
- [ ] `/es` fonctionne
- [ ] `/en` fonctionne
- [ ] `/fr` fonctionne
- [ ] Toutes les pages traduites s'affichent correctement
- [ ] LanguageSwitcher fonctionne sur toutes les pages

### Assets et médias
- [ ] Images se chargent correctement
- [ ] Vidéos se chargent et se lisent (status 200)
- [ ] Pas d'erreurs 404 pour les assets
- [ ] Chemins avec accents/espaces fonctionnent

### Performance
- [ ] PageSpeed Insights: Score > 80 (mobile et desktop)
- [ ] Temps de chargement < 3s
- [ ] Images optimisées (Next.js Image component)
- [ ] Pas d'erreurs console

### SEO
- [ ] Meta tags présents (title, description)
- [ ] Open Graph tags configurés
- [ ] `robots.txt` accessible (si configuré)
- [ ] `sitemap.xml` accessible (si configuré)
- [ ] URLs canoniques configurées

### Mobile
- [ ] Responsive design fonctionne
- [ ] Test sur différents appareils (iPhone, Android)
- [ ] Touch interactions fonctionnent
- [ ] Pas de scroll horizontal indésirable

### Erreurs
- [ ] Page 404 personnalisée fonctionne (`/[locale]/404`)
- [ ] Page not-found fonctionne (`/[locale]/not-found`)
- [ ] Pas d'erreurs 500
- [ ] Logs Vercel sans erreurs critiques

### Sécurité
- [ ] HTTPS forcé
- [ ] Headers de sécurité configurés (si nécessaire)
- [ ] Pas de secrets exposés dans le code client
- [ ] Variables d'environnement correctement configurées

---

## 🔧 Commandes de dépannage

### Vérifier les logs Vercel
```powershell
# Via CLI
vercel logs

# Ou dans Vercel Dashboard: Project → Deployments → [Deployment] → Logs
```

### Redéployer
```powershell
# Via CLI
vercel --prod

# Ou dans Vercel Dashboard: Deployments → [Deployment] → Redeploy
```

### Vérifier la configuration
```powershell
# Voir la config Vercel
vercel inspect

# Voir les domaines
vercel domains ls
```

---

## 📞 Support

- **Vercel Docs:** https://vercel.com/docs
- **Next.js Docs:** https://nextjs.org/docs
- **next-intl Docs:** https://next-intl-docs.vercel.app

---

## ✅ Résumé des commandes essentielles

```powershell
# 1. Build local
npm run build

# 2. Initialiser Git
git init
git add .
git commit -m "Initial commit"

# 3. Push vers GitHub
git remote add origin https://github.com/sergeiovitch63-create/publox-marketing.git
git branch -M main
git push -u origin main

# 4. Déployer sur Vercel (CLI)
vercel login
vercel --prod

# 5. Vérifier DNS
nslookup publox-marketing.com
nslookup www.publox-marketing.com
```

---

**🎉 Une fois toutes les étapes complétées, votre site sera en ligne sur https://publox-marketing.com !**

