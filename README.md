# Agent Acquisition — CapZéniths

Application React d'aide à la prospection commerciale pour CapZéniths.

## Modules

| # | Module | Description |
|---|--------|-------------|
| 01 | Messages LinkedIn | 4 messages personnalisés par secteur/situation |
| 02 | Séquence de suivi | J0 → J7 → J14 → J30 multi-canal |
| 03 | Anti-objections | Réponses courtes + développées + pivot diagnostic |
| 04 | Accroches LinkedIn | 6 formats d'accroches organiques |

## Stack

- React 18 + Vite
- Vercel serverless (`api/analyze.js`)
- Anthropic API (`claude-sonnet-4-20250514`)

## Structure

```
agent-acquisition-capzeniths/
├── api/
│   └── analyze.js        ← Proxy Anthropic API
├── src/
│   ├── main.jsx
│   └── App.jsx           ← Application complète (4 modules)
├── public/
├── index.html
├── vite.config.js
├── vercel.json
└── package.json
```

## Déploiement

1. Push sur GitHub (`CoachMahoutin/agent-acquisition-capzeniths`)
2. Import sur Vercel → projet "Ogan's projects"
3. Variable d'env : `ANTHROPIC_API_KEY` (déjà configurée)
4. CNAME O2switch : `agent-acquisition.capzeniths.com` → domaine Vercel

## Design System

```
Or        #F5A623  — boutons, accents
Lavande   #9B8ED4  — secondaire
Aubergine #2D0A3E  — headers, dark
Crème     #FFF8E8  — navbar
Fond      #FAF8F5  — background
```
