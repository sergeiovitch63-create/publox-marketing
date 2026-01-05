# ✅ Checklist de Déploiement - Publox Marketing

## 📝 Résumé Exécutif

**Projet:** Next.js 14 avec i18n (es/en/fr)  
**Domaine:** publox-marketing.com + www.publox-marketing.com  
**Plateforme:** Vercel  
**Repo GitHub:** sergeiovitch63-create/publox-marketing

---

## ✅ ÉTAPE 1: Vérification Structure Next.js

### Commandes à exécuter:

```powershell
# Test du build local
npm run build
```

**✅ Résultat:** Build réussi - 58 pages générées (3 locales × ~19 routes)

**Pages générées:**
- Home: `/es`, `/en`, `/fr`
- Marketing: `/es/marketing`, `/es/marketing/adquisicion`, etc.
- Sitio Web: `/es/sitio-web`, `/es/sitio-web/corporativo`, etc.
- Impresión: `/es/impresion`, `/es/impresion/tarjetas-visita`, etc.
- Autres: `/es/contacto`, `/es/reclutamiento`, `/es/privacy`, etc.

**⚠️ Note sur les vidéos:**
- Fichiers avec espaces/accents dans `/public/media/videos/`
- Généralement OK, mais surveiller en production

---

## ✅ ÉTAPE 2: Préparation Git

### Commandes à exécuter:

```powershell
# Initialiser Git (si pas déjà fait)
git init

# Configurer Git (remplacer avec vos infos)
git config user.name "sergeiovitch63-create"
git config user.email "votre-email@example.com"

# Ajouter tous les fichiers
git add .

# Commit initial
git commit -m "Initial commit: Next.js app with i18n (es/en/fr)"
```

**✅ .gitignore:** Mis à jour pour inclure tous les `.env*`

---

## ✅ ÉTAPE 3: Création Repo GitHub

### Actions UI GitHub:

1. Aller sur https://github.com/sergeiovitch63-create
2. **New repository**
3. **Repository name:** `publox-marketing`
4. **Visibility:** Private ou Public
5. **⚠️ NE PAS** cocher "Initialize with README"
6. **Create repository**

### Commandes à exécuter:

```powershell
# Ajouter remote
git remote add origin https://github.com/sergeiovitch63-create/publox-marketing.git

# Vérifier remote
git remote -v

# Renommer branche en main
git branch -M main

# Push vers GitHub
git push -u origin main
```

**⚠️ Authentification:**
- Utiliser Personal Access Token (PAT) si demandé
- Ou configurer SSH: `git remote set-url origin git@github.com:sergeiovitch63-create/publox-marketing.git`

---

## ✅ ÉTAPE 4: Déploiement Vercel

### Option A: Via UI Vercel (Recommandé)

**Étapes:**

1. Aller sur https://vercel.com
2. Se connecter avec GitHub
3. **Add New...** → **Project**
4. Importer `sergeiovitch63-create/publox-marketing`
5. Configuration:
   - **Framework Preset:** Next.js (auto-détecté)
   - **Root Directory:** `./`
   - **Build Command:** `npm run build`
   - **Output Directory:** `.next` (géré par Next.js)
6. **Environment Variables:**
   - Ajouter si nécessaire (voir ci-dessous)
7. **Deploy**

### Option B: Via Vercel CLI

```powershell
# Installer Vercel CLI
npm install -g vercel

# Se connecter
vercel login

# Déployer
vercel

# Déployer en production
vercel --prod
```

### Variables d'environnement (si nécessaire):

**À ajouter dans Vercel → Project Settings → Environment Variables:**

```
NEXT_PUBLIC_SITE_URL=https://publox-marketing.com
```

**Autres variables possibles (selon votre app):**
- `RESEND_API_KEY` (si emails)
- `DATABASE_URL` (si BDD)
- Autres `NEXT_PUBLIC_*` selon besoins

**⚠️ Important:**
- Sélectionner **Production**, **Preview**, **Development** selon besoins
- Les variables `NEXT_PUBLIC_*` sont exposées au client

---

## ✅ ÉTAPE 5: Configuration Domaine

### 5.1 Ajouter domaines dans Vercel

**UI Vercel:**
1. **Project Settings** → **Domains**
2. Ajouter:
   - `publox-marketing.com`
   - `www.publox-marketing.com`

### 5.2 Configuration DNS chez le registrar

**Enregistrements à ajouter:**

#### Pour `publox-marketing.com` (root):

```
Type: A
Name: @ (ou laisser vide)
Value: 76.76.21.21
TTL: 3600
```

#### Pour `www.publox-marketing.com`:

```
Type: CNAME
Name: www
Value: cname.vercel-dns.com
TTL: 3600
```

**⚠️ Si le registrar n'accepte pas CNAME sur root:**
- Utiliser A record vers `76.76.21.21` pour root
- Ou rediriger root vers www via le registrar

### 5.3 Vérification DNS

```powershell
# Vérifier root
nslookup publox-marketing.com

# Vérifier www
nslookup www.publox-marketing.com

# Alternative
Resolve-DnsName publox-marketing.com
Resolve-DnsName www.publox-marketing.com
```

**Temps de propagation:** 5-30 minutes (max 48h)

### 5.4 Vérification SSL

- Vercel configure SSL automatiquement (Let's Encrypt)
- Vérifier dans **Project Settings** → **Domains** que statut = "Valid"
- Tester: `https://publox-marketing.com` (cadenas vert)

---

## ✅ ÉTAPE 6: Vérification Routes i18n et Assets

### URLs à tester:

**Routes i18n:**
```
https://publox-marketing.com/es
https://publox-marketing.com/en
https://publox-marketing.com/fr
https://publox-marketing.com/es/marketing
https://publox-marketing.com/es/contacto
https://publox-marketing.com/es/impresion
```

**Assets vidéo:**
```
https://publox-marketing.com/media/videos/HERO.mp4
https://publox-marketing.com/media/videos/Automatización.mp4
```

**Vérifications:**
- ✅ Redirection `/` → `/es`
- ✅ Toutes les locales fonctionnent
- ✅ Vidéos retournent status 200
- ✅ LanguageSwitcher fonctionne

---

## ✅ CHECKLIST FINALE

### Infrastructure
- [ ] Site accessible en HTTPS
- [ ] Domaine root fonctionne
- [ ] Domaine www fonctionne
- [ ] SSL valide (cadenas vert)

### Routes i18n
- [ ] `/` → `/es` (redirection)
- [ ] `/es`, `/en`, `/fr` fonctionnent
- [ ] Toutes les pages traduites s'affichent
- [ ] LanguageSwitcher fonctionne

### Assets
- [ ] Images se chargent
- [ ] Vidéos se chargent (status 200)
- [ ] Pas d'erreurs 404

### Performance
- [ ] PageSpeed > 80 (mobile/desktop)
- [ ] Temps de chargement < 3s
- [ ] Pas d'erreurs console

### SEO
- [ ] Meta tags présents
- [ ] Open Graph configuré
- [ ] robots.txt accessible (si configuré)
- [ ] sitemap.xml accessible (si configuré)

### Mobile
- [ ] Responsive design OK
- [ ] Touch interactions OK

### Erreurs
- [ ] Page 404 fonctionne
- [ ] Pas d'erreurs 500
- [ ] Logs Vercel propres

---

## 🚀 Commandes Rapides

```powershell
# Build local
npm run build

# Git setup
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/sergeiovitch63-create/publox-marketing.git
git branch -M main
git push -u origin main

# Vercel CLI
vercel login
vercel --prod

# Vérifier DNS
nslookup publox-marketing.com
```

---

**📖 Guide détaillé:** Voir `DEPLOYMENT_GUIDE.md`

