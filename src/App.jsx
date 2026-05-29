import React, { useState } from 'react';

// ─── INJECT STYLES ────────────────────────────────────────────────────────────
function injectStyles() {
  if (document.getElementById('cz-acquisition-styles')) return;
  const style = document.createElement('style');
  style.id = 'cz-acquisition-styles';
  style.textContent = `
    *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

    :root {
      --or: #F5A623;
      --lavande: #9B8ED4;
      --aubergine: #2D0A3E;
      --creme: #FFF8E8;
      --fond: #FAF8F5;
      --texte: #1A0A2E;
      --gris: #6B7280;
      --gris-clair: #E5E7EB;
      --vert: #10B981;
      --rouge: #EF4444;
    }

    body {
      font-family: 'Outfit', sans-serif;
      background: var(--fond);
      color: var(--texte);
      min-height: 100vh;
    }

    /* ── NAVBAR ── */
    .navbar {
      background: var(--creme);
      border-bottom: 2px solid var(--or);
      padding: 0 24px;
      height: 64px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      position: sticky;
      top: 0;
      z-index: 100;
    }
    .navbar-logo {
      display: flex;
      align-items: center;
      gap: 10px;
      text-decoration: none;
    }
    .navbar-title {
      font-family: 'DM Serif Display', serif;
      font-size: 1.1rem;
      color: var(--aubergine);
    }
    .navbar-subtitle {
      font-size: 0.7rem;
      font-weight: 500;
      color: var(--gris);
      letter-spacing: 0.05em;
      text-transform: uppercase;
    }
    .navbar-badge {
      background: var(--or);
      color: var(--aubergine);
      font-size: 0.65rem;
      font-weight: 700;
      padding: 3px 8px;
      border-radius: 20px;
      letter-spacing: 0.05em;
      text-transform: uppercase;
    }

    /* ── HERO ── */
    .hero {
      background: linear-gradient(135deg, var(--aubergine) 0%, #1A0652 100%);
      padding: 48px 24px 40px;
      text-align: center;
    }
    .hero-tag {
      display: inline-block;
      background: rgba(245,166,35,0.15);
      border: 1px solid rgba(245,166,35,0.4);
      color: var(--or);
      font-size: 0.7rem;
      font-weight: 600;
      letter-spacing: 0.1em;
      text-transform: uppercase;
      padding: 4px 14px;
      border-radius: 20px;
      margin-bottom: 16px;
    }
    .hero h1 {
      font-family: 'DM Serif Display', serif;
      font-size: clamp(1.6rem, 4vw, 2.4rem);
      color: #fff;
      line-height: 1.2;
      margin-bottom: 10px;
    }
    .hero h1 span {
      font-style: italic;
      color: var(--or);
    }
    .hero p {
      color: rgba(255,255,255,0.7);
      font-size: 0.9rem;
      max-width: 480px;
      margin: 0 auto;
      line-height: 1.6;
    }

    /* ── TABS ── */
    .tabs-wrapper {
      background: var(--creme);
      border-bottom: 1px solid var(--gris-clair);
      overflow-x: auto;
      -webkit-overflow-scrolling: touch;
      scrollbar-width: none;
    }
    .tabs-wrapper::-webkit-scrollbar { display: none; }
    .tabs {
      display: flex;
      min-width: max-content;
      padding: 0 16px;
    }
    .tab {
      display: flex;
      align-items: center;
      gap: 7px;
      padding: 14px 18px;
      font-size: 0.82rem;
      font-weight: 600;
      color: var(--gris);
      cursor: pointer;
      border-bottom: 3px solid transparent;
      white-space: nowrap;
      transition: all 0.2s;
      background: none;
      border-top: none;
      border-left: none;
      border-right: none;
      font-family: 'Outfit', sans-serif;
    }
    .tab:hover { color: var(--aubergine); }
    .tab.active {
      color: var(--aubergine);
      border-bottom-color: var(--or);
    }
    .tab-icon { font-size: 1rem; }
    .tab-num {
      background: var(--gris-clair);
      color: var(--gris);
      font-size: 0.6rem;
      font-weight: 700;
      padding: 1px 5px;
      border-radius: 8px;
    }
    .tab.active .tab-num {
      background: var(--or);
      color: var(--aubergine);
    }

    /* ── MAIN CONTENT ── */
    .main {
      max-width: 800px;
      margin: 0 auto;
      padding: 32px 16px 64px;
    }

    /* ── SECTION HEADER ── */
    .section-header {
      display: flex;
      align-items: flex-start;
      gap: 14px;
      margin-bottom: 28px;
    }
    .section-icon {
      width: 48px;
      height: 48px;
      background: linear-gradient(135deg, var(--aubergine), #4A1A6E);
      border-radius: 12px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 1.3rem;
      flex-shrink: 0;
    }
    .section-header h2 {
      font-family: 'DM Serif Display', serif;
      font-size: 1.4rem;
      color: var(--aubergine);
      margin-bottom: 4px;
    }
    .section-header p {
      font-size: 0.83rem;
      color: var(--gris);
      line-height: 1.5;
    }

    /* ── FORM ── */
    .form-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 14px;
      margin-bottom: 14px;
    }
    @media (max-width: 560px) {
      .form-grid { grid-template-columns: 1fr; }
    }
    .form-grid.full { grid-template-columns: 1fr; }
    .field {
      display: flex;
      flex-direction: column;
      gap: 6px;
    }
    .field label {
      font-size: 0.78rem;
      font-weight: 600;
      color: var(--aubergine);
      letter-spacing: 0.03em;
      text-transform: uppercase;
    }
    .field select,
    .field input,
    .field textarea {
      font-family: 'Outfit', sans-serif;
      font-size: 0.88rem;
      padding: 10px 12px;
      border: 1.5px solid var(--gris-clair);
      border-radius: 8px;
      background: #fff;
      color: var(--texte);
      transition: border-color 0.2s;
      outline: none;
      width: 100%;
    }
    .field select:focus,
    .field input:focus,
    .field textarea:focus {
      border-color: var(--or);
    }
    .field textarea {
      resize: vertical;
      min-height: 90px;
    }

    /* ── SEQUENCE STEPS ── */
    .steps-row {
      display: flex;
      gap: 10px;
      margin-bottom: 14px;
      flex-wrap: wrap;
    }
    .step-badge {
      background: var(--fond);
      border: 1.5px solid var(--gris-clair);
      border-radius: 8px;
      padding: 8px 14px;
      font-size: 0.8rem;
      font-weight: 600;
      color: var(--gris);
      cursor: pointer;
      transition: all 0.2s;
    }
    .step-badge.active {
      background: var(--aubergine);
      border-color: var(--aubergine);
      color: #fff;
    }
    .step-badge:hover:not(.active) {
      border-color: var(--or);
      color: var(--aubergine);
    }

    /* ── OBJECTIONS LIST ── */
    .objections-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
      gap: 8px;
      margin-bottom: 14px;
    }
    .objection-chip {
      background: #fff;
      border: 1.5px solid var(--gris-clair);
      border-radius: 8px;
      padding: 8px 12px;
      font-size: 0.8rem;
      color: var(--gris);
      cursor: pointer;
      transition: all 0.2s;
      text-align: center;
    }
    .objection-chip.selected {
      background: rgba(245,166,35,0.1);
      border-color: var(--or);
      color: var(--aubergine);
      font-weight: 600;
    }

    /* ── ACCROCHES TYPES ── */
    .accroche-types {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
      gap: 10px;
      margin-bottom: 14px;
    }
    .accroche-card {
      background: #fff;
      border: 1.5px solid var(--gris-clair);
      border-radius: 10px;
      padding: 14px 12px;
      cursor: pointer;
      transition: all 0.2s;
      text-align: center;
    }
    .accroche-card:hover { border-color: var(--lavande); }
    .accroche-card.selected {
      background: rgba(155,142,212,0.08);
      border-color: var(--lavande);
    }
    .accroche-card .accroche-icon { font-size: 1.5rem; margin-bottom: 6px; }
    .accroche-card .accroche-label { font-size: 0.78rem; font-weight: 600; color: var(--aubergine); }
    .accroche-card .accroche-desc { font-size: 0.7rem; color: var(--gris); margin-top: 3px; }

    /* ── CTA BUTTON ── */
    .btn-generate {
      width: 100%;
      background: linear-gradient(135deg, var(--or), #E8960A);
      color: var(--aubergine);
      font-family: 'Outfit', sans-serif;
      font-size: 0.9rem;
      font-weight: 700;
      padding: 14px 24px;
      border: none;
      border-radius: 10px;
      cursor: pointer;
      transition: all 0.2s;
      letter-spacing: 0.02em;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 8px;
      margin-top: 8px;
    }
    .btn-generate:hover:not(:disabled) {
      transform: translateY(-1px);
      box-shadow: 0 6px 20px rgba(245,166,35,0.35);
    }
    .btn-generate:disabled {
      opacity: 0.6;
      cursor: not-allowed;
    }

    /* ── LOADING ── */
    .loading-box {
      background: #fff;
      border: 1.5px solid var(--gris-clair);
      border-radius: 12px;
      padding: 40px;
      text-align: center;
      margin-top: 24px;
    }
    .spinner {
      width: 36px;
      height: 36px;
      border: 3px solid var(--gris-clair);
      border-top-color: var(--or);
      border-radius: 50%;
      animation: spin 0.8s linear infinite;
      margin: 0 auto 16px;
    }
    @keyframes spin { to { transform: rotate(360deg); } }
    .loading-box p {
      font-size: 0.85rem;
      color: var(--gris);
    }

    /* ── RESULT ── */
    .result-box {
      background: #fff;
      border: 1.5px solid var(--gris-clair);
      border-radius: 12px;
      margin-top: 24px;
      overflow: hidden;
    }
    .result-header {
      background: linear-gradient(135deg, var(--aubergine), #4A1A6E);
      padding: 16px 20px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      flex-wrap: wrap;
      gap: 10px;
    }
    .result-header h3 {
      font-family: 'DM Serif Display', serif;
      color: #fff;
      font-size: 1rem;
    }
    .result-actions {
      display: flex;
      gap: 8px;
    }
    .btn-copy, .btn-regen {
      font-family: 'Outfit', sans-serif;
      font-size: 0.75rem;
      font-weight: 600;
      padding: 6px 12px;
      border-radius: 6px;
      cursor: pointer;
      border: none;
      transition: all 0.15s;
    }
    .btn-copy {
      background: var(--or);
      color: var(--aubergine);
    }
    .btn-copy:hover { background: #e8960a; }
    .btn-regen {
      background: rgba(255,255,255,0.15);
      color: #fff;
      border: 1px solid rgba(255,255,255,0.3);
    }
    .btn-regen:hover { background: rgba(255,255,255,0.25); }

    .result-body {
      padding: 24px 20px;
    }

    /* ── RESULT BLOCKS ── */
    .result-block {
      margin-bottom: 24px;
    }
    .result-block:last-child { margin-bottom: 0; }
    .result-block-title {
      font-size: 0.72rem;
      font-weight: 700;
      color: var(--or);
      letter-spacing: 0.1em;
      text-transform: uppercase;
      margin-bottom: 10px;
      display: flex;
      align-items: center;
      gap: 6px;
    }
    .result-block-title::after {
      content: '';
      flex: 1;
      height: 1px;
      background: var(--gris-clair);
    }
    .message-bubble {
      background: var(--fond);
      border-left: 3px solid var(--or);
      border-radius: 0 8px 8px 0;
      padding: 14px 16px;
      font-size: 0.87rem;
      line-height: 1.7;
      color: var(--texte);
      white-space: pre-wrap;
      word-break: break-word;
    }
    .message-bubble.lavande {
      border-left-color: var(--lavande);
    }
    .message-meta {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-top: 8px;
      padding: 0 2px;
    }
    .message-meta span {
      font-size: 0.72rem;
      color: var(--gris);
    }
    .char-count {
      background: var(--fond);
      border: 1px solid var(--gris-clair);
      border-radius: 4px;
      padding: 2px 6px;
      font-size: 0.68rem;
      font-weight: 600;
      color: var(--gris);
    }
    .char-count.ok { color: var(--vert); border-color: var(--vert); background: rgba(16,185,129,0.08); }
    .char-count.warn { color: #F59E0B; border-color: #F59E0B; background: rgba(245,158,11,0.08); }

    /* ── SEQUENCE TIMELINE ── */
    .timeline {
      display: flex;
      flex-direction: column;
      gap: 0;
    }
    .timeline-item {
      display: flex;
      gap: 16px;
    }
    .timeline-left {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
    .timeline-dot {
      width: 32px;
      height: 32px;
      border-radius: 50%;
      background: var(--aubergine);
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 0.7rem;
      font-weight: 700;
      color: #fff;
      flex-shrink: 0;
    }
    .timeline-dot.or { background: var(--or); color: var(--aubergine); }
    .timeline-line {
      width: 2px;
      background: var(--gris-clair);
      flex: 1;
      min-height: 20px;
      margin: 4px 0;
    }
    .timeline-content {
      flex: 1;
      padding-bottom: 20px;
    }
    .timeline-label {
      font-size: 0.72rem;
      font-weight: 700;
      color: var(--lavande);
      letter-spacing: 0.08em;
      text-transform: uppercase;
      margin-bottom: 6px;
    }

    /* ── OBJECTIONS RESULT ── */
    .objection-result {
      background: var(--fond);
      border-radius: 10px;
      padding: 16px;
      margin-bottom: 12px;
    }
    .objection-result-q {
      font-size: 0.8rem;
      font-weight: 700;
      color: var(--rouge);
      margin-bottom: 8px;
      display: flex;
      align-items: flex-start;
      gap: 6px;
    }
    .objection-result-a {
      font-size: 0.87rem;
      line-height: 1.7;
      color: var(--texte);
    }

    /* ── ACCROCHE RESULT ── */
    .accroche-result {
      background: var(--fond);
      border-radius: 10px;
      padding: 16px;
      margin-bottom: 14px;
      border-left: 3px solid var(--lavande);
    }
    .accroche-result-type {
      font-size: 0.7rem;
      font-weight: 700;
      color: var(--lavande);
      text-transform: uppercase;
      letter-spacing: 0.08em;
      margin-bottom: 8px;
    }
    .accroche-result-text {
      font-size: 0.87rem;
      line-height: 1.7;
      color: var(--texte);
      white-space: pre-wrap;
    }

    /* ── TIPS ── */
    .tip-box {
      background: rgba(155,142,212,0.08);
      border: 1px solid rgba(155,142,212,0.3);
      border-radius: 10px;
      padding: 14px 16px;
      margin-top: 16px;
      font-size: 0.82rem;
      color: var(--aubergine);
      line-height: 1.6;
    }
    .tip-box strong { color: var(--lavande); }

    /* ── ERROR ── */
    .error-box {
      background: rgba(239,68,68,0.05);
      border: 1px solid rgba(239,68,68,0.2);
      border-radius: 10px;
      padding: 16px;
      margin-top: 20px;
      font-size: 0.85rem;
      color: var(--rouge);
    }

    /* ── FOOTER ── */
    .footer {
      text-align: center;
      padding: 20px;
      font-size: 0.72rem;
      color: var(--gris);
    }
    .footer span { color: var(--or); font-weight: 600; }

    /* ── COPY TOAST ── */
    .toast {
      position: fixed;
      bottom: 24px;
      right: 24px;
      background: var(--aubergine);
      color: #fff;
      padding: 10px 18px;
      border-radius: 8px;
      font-size: 0.82rem;
      font-weight: 600;
      z-index: 999;
      animation: slideUp 0.25s ease;
      box-shadow: 0 4px 16px rgba(45,10,62,0.3);
    }
    @keyframes slideUp {
      from { transform: translateY(16px); opacity: 0; }
      to { transform: translateY(0); opacity: 1; }
    }

    /* ── RESPONSIVE MOBILE ── */
    @media (max-width: 480px) {
      .navbar { padding: 0 14px; height: 56px; }
      .navbar-title { font-size: 0.95rem; }
      .navbar-subtitle { display: none; }
      .navbar-badge { font-size: 0.6rem; padding: 3px 7px; }

      .hero { padding: 32px 16px 28px; }
      .hero h1 { font-size: 1.5rem; }
      .hero p { font-size: 0.83rem; }

      .tab { padding: 12px 12px; font-size: 0.76rem; gap: 5px; }
      .tab-num { display: none; }

      .main { padding: 20px 12px 48px; }

      .section-icon { width: 40px; height: 40px; font-size: 1.1rem; }
      .section-header h2 { font-size: 1.15rem; }
      .section-header p { font-size: 0.78rem; }

      .result-header { padding: 12px 14px; flex-direction: column; align-items: flex-start; }
      .result-header h3 { font-size: 0.88rem; }
      .result-body { padding: 16px 14px; }

      .accroche-types { grid-template-columns: repeat(2, 1fr); }
      .objections-grid { grid-template-columns: 1fr 1fr; }

      .btn-generate { font-size: 0.83rem; padding: 12px 16px; }
      .steps-row { gap: 7px; }
      .step-badge { padding: 6px 10px; font-size: 0.75rem; }

      .message-bubble { font-size: 0.83rem; padding: 12px 13px; }
      .message-meta { flex-wrap: wrap; gap: 6px; }
      .objection-result { padding: 12px; }
      .accroche-result { padding: 12px; }

      .tip-box { font-size: 0.78rem; padding: 12px 13px; }
      .loading-box { padding: 28px 16px; }

      .toast { right: 12px; bottom: 16px; font-size: 0.78rem; padding: 8px 14px; }
    }
  `;
  document.head.appendChild(style);
}

// ─── CONSTANTS ────────────────────────────────────────────────────────────────

const SECTEURS = [
  'BTP / Artisanat', 'Commerce de détail', 'Restauration / CHR',
  'Services aux entreprises', 'Santé / Bien-être', 'Transport / Logistique',
  'Industrie / Production', 'Immobilier', 'Auto-entrepreneur / Freelance'
];

const SITUATIONS = [
  'Création < 2 ans', 'Difficultés de trésorerie', 'Perte de clients clés',
  'Croissance mal maîtrisée', 'Problèmes d\'équipe', 'Dépôt de bilan imminent',
  'Restructuration en cours', 'Post-COVID / crise externe', 'Stabilité mais vulnérable'
];

const TONALITES = ['Empathique', 'Direct / Percutant', 'Informatif', 'Urgence douce'];

const OBJECTIONS = [
  'Je n\'ai pas le budget', 'On n\'a pas le temps maintenant',
  'On gère ça en interne', 'J\'ai déjà un expert-comptable',
  'C\'est quoi CapZéniths exactement ?', 'Je ne vois pas la valeur ajoutée',
  'Ce n\'est pas urgent', 'J\'ai déjà un coach / consultant'
];

const ACCROCHE_TYPES = [
  { id: 'stat', icon: '📊', label: 'Chiffre choc', desc: 'Statistique défaillance' },
  { id: 'erreur', icon: '⚠️', label: 'Erreur fatale', desc: 'Piège classique TPE' },
  { id: 'question', icon: '❓', label: 'Question directe', desc: 'Interpelle le dirigeant' },
  { id: 'histoire', icon: '📖', label: 'Mini-histoire', desc: 'Cas client anonymisé' },
  { id: 'contraire', icon: '🔄', label: 'Contre-intuition', desc: 'Idée reçue déconstruite' },
  { id: 'liste', icon: '📋', label: 'Liste actionnable', desc: 'Tips / signaux d\'alerte' },
];

const CANAUX_EMAIL = ['Cold email', 'Email post-LinkedIn', 'Newsletter prospect', 'Relance après silence'];

const TABS = [
  { id: 'linkedin', icon: '💼', label: 'Messages LinkedIn', num: '01' },
  { id: 'sequence', icon: '🔄', label: 'Séquence de suivi', num: '02' },
  { id: 'objections', icon: '🛡️', label: 'Anti-objections', num: '03' },
  { id: 'accroches', icon: '✨', label: 'Accroches LinkedIn', num: '04' },
];

// ─── API CALL ─────────────────────────────────────────────────────────────────

async function callAPI(systemPrompt, userPrompt) {
  const res = await fetch('/api/analyze', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      model: 'claude-sonnet-4-20250514',
      max_tokens: 1000,
      system: systemPrompt,
      messages: [{ role: 'user', content: userPrompt }]
    })
  });
  if (!res.ok) throw new Error(`Erreur API: ${res.status}`);
  const data = await res.json();
  const text = data.content?.[0]?.text || data.content?.map?.(b => b.text || '').join('') || '';
  return JSON.parse(text.replace(/```json|```/g, '').trim());
}

// ─── UTILS ────────────────────────────────────────────────────────────────────

function countChars(str) {
  if (!str) return 0;
  return str.length;
}

function CharBadge({ text, limit = 300 }) {
  const n = countChars(text);
  const cls = n <= limit ? 'ok' : n <= limit * 1.2 ? 'warn' : '';
  return <span className={`char-count ${cls}`}>{n} car.</span>;
}

// ─── MODULE 1 : MESSAGES LINKEDIN ─────────────────────────────────────────────

function ModuleLinkedIn({ onToast }) {
  const [secteur, setSecteur] = useState('');
  const [situation, setSituation] = useState('');
  const [tonalite, setTonalite] = useState('Empathique');
  const [poste, setPoste] = useState('');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);
  const [error, setError] = useState('');

  async function generate() {
    if (!secteur || !situation) return;
    setLoading(true);
    setError('');
    setResult(null);
    try {
      const sys = `Tu es un expert en prospection LinkedIn pour CapZéniths, cabinet de prévention défaillance business (7 piliers: Cash, Stratégie, Clients, Équipe, Risques, Croissance, Résilience). Réponds UNIQUEMENT en JSON valide sans backticks. Format: {"message_connexion": "...", "message_premier_contact": "...", "message_valeur": "...", "note_personnalisee": "...", "conseils": ["...", "...", "..."]}. Règles: tutoiement, style direct anti-bullshit, max 300 caractères pour message_connexion, max 600 pour les autres, aucun jargon creux, ancrage dans la réalité du secteur.`;
      const prompt = `Secteur: ${secteur} | Situation: ${situation} | Tonalité: ${tonalite}${poste ? ` | Poste cible: ${poste}` : ''}. Génère 4 messages LinkedIn progressifs pour prospecter ce profil vers un diagnostic CapZéniths gratuit.`;
      const data = await callAPI(sys, prompt);
      setResult(data);
    } catch (e) {
      setError(e.message);
    } finally {
      setLoading(false);
    }
  }

  function copyAll() {
    if (!result) return;
    const txt = [
      `🔗 MESSAGE CONNEXION:\n${result.message_connexion}`,
      `👋 PREMIER CONTACT:\n${result.message_premier_contact}`,
      `💡 MESSAGE VALEUR:\n${result.message_valeur}`,
      `✍️ NOTE PERSONNALISÉE:\n${result.note_personnalisee}`,
    ].join('\n\n---\n\n');
    navigator.clipboard.writeText(txt).then(() => onToast('Messages copiés ✓'));
  }

  return (
    <div>
      <div className="section-header">
        <div className="section-icon">💼</div>
        <div>
          <h2>Messages LinkedIn personnalisés</h2>
          <p>4 messages adaptés au secteur et à la situation du prospect — connexion, premier contact, valeur, note personnalisée.</p>
        </div>
      </div>

      <div className="form-grid">
        <div className="field">
          <label>Secteur d'activité *</label>
          <select value={secteur} onChange={e => setSecteur(e.target.value)}>
            <option value="">Choisir...</option>
            {SECTEURS.map(s => <option key={s}>{s}</option>)}
          </select>
        </div>
        <div className="field">
          <label>Situation du prospect *</label>
          <select value={situation} onChange={e => setSituation(e.target.value)}>
            <option value="">Choisir...</option>
            {SITUATIONS.map(s => <option key={s}>{s}</option>)}
          </select>
        </div>
        <div className="field">
          <label>Tonalité</label>
          <select value={tonalite} onChange={e => setTonalite(e.target.value)}>
            {TONALITES.map(t => <option key={t}>{t}</option>)}
          </select>
        </div>
        <div className="field">
          <label>Poste cible (optionnel)</label>
          <input
            placeholder="ex: Gérant, PDG, Directeur..."
            value={poste}
            onChange={e => setPoste(e.target.value)}
          />
        </div>
      </div>

      <button
        className="btn-generate"
        onClick={generate}
        disabled={loading || !secteur || !situation}
      >
        {loading ? '⏳ Génération...' : '✨ Générer les messages LinkedIn'}
      </button>

      {loading && (
        <div className="loading-box">
          <div className="spinner"></div>
          <p>Rédaction des messages en cours...</p>
        </div>
      )}

      {error && <div className="error-box">❌ {error}</div>}

      {result && (
        <div className="result-box">
          <div className="result-header">
            <h3>Messages pour {secteur} — {situation}</h3>
            <div className="result-actions">
              <button className="btn-regen" onClick={generate}>↺ Regénérer</button>
              <button className="btn-copy" onClick={copyAll}>Copier tout</button>
            </div>
          </div>
          <div className="result-body">
            {[
              { key: 'message_connexion', label: '🔗 Demande de connexion', limit: 300 },
              { key: 'message_premier_contact', label: '👋 Premier message post-connexion', limit: 600 },
              { key: 'message_valeur', label: '💡 Message de valeur', limit: 600 },
              { key: 'note_personnalisee', label: '✍️ Note personnalisée (InMail)', limit: 600 },
            ].map(({ key, label, limit }) => (
              <div className="result-block" key={key}>
                <div className="result-block-title">{label}</div>
                <div className="message-bubble">{result[key]}</div>
                <div className="message-meta">
                  <button
                    className="btn-copy"
                    style={{ padding: '4px 10px', fontSize: '0.7rem' }}
                    onClick={() => navigator.clipboard.writeText(result[key]).then(() => onToast('Copié ✓'))}
                  >Copier</button>
                  <CharBadge text={result[key]} limit={limit} />
                </div>
              </div>
            ))}

            {result.conseils && (
              <div className="tip-box">
                <strong>💡 Conseils d'envoi :</strong><br />
                {result.conseils.map((c, i) => <div key={i}>• {c}</div>)}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

// ─── MODULE 2 : SÉQUENCE DE SUIVI ─────────────────────────────────────────────

function ModuleSequence({ onToast }) {
  const [secteur, setSecteur] = useState('');
  const [canal, setCanal] = useState('Cold email');
  const [situation, setSituation] = useState('');
  const [prenom, setPrenom] = useState('');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);
  const [error, setError] = useState('');
  const [activeStep, setActiveStep] = useState(0);

  async function generate() {
    if (!secteur || !situation) return;
    setLoading(true);
    setError('');
    setResult(null);
    try {
      const sys = `Tu es un expert en acquisition pour CapZéniths. Réponds UNIQUEMENT en JSON valide sans backticks. Format: {"sequence": [{"jour": "J0", "objet": "...", "message": "...", "objectif": "...", "timing": "..."}, {"jour": "J+7", ...}, {"jour": "J+14", ...}, {"jour": "J+30", ...}], "strategie": "...", "taux_reponse_attendu": "..."}. Règles: tutoiement, style CapZéniths direct, chaque message différent en approche, escalade progressive, CTA clair vers diagnostic gratuit.`;
      const prompt = `Canal: ${canal} | Secteur: ${secteur} | Situation: ${situation}${prenom ? ` | Prénom prospect: ${prenom}` : ''}. Génère une séquence de suivi J0 → J7 → J14 → J30.`;
      const data = await callAPI(sys, prompt);
      setResult(data);
      setActiveStep(0);
    } catch (e) {
      setError(e.message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div>
      <div className="section-header">
        <div className="section-icon">🔄</div>
        <div>
          <h2>Séquence de suivi multi-étapes</h2>
          <p>4 touchpoints espacés (J0 → J7 → J14 → J30) pour convertir un prospect silencieux sans être lourd.</p>
        </div>
      </div>

      <div className="form-grid">
        <div className="field">
          <label>Secteur d'activité *</label>
          <select value={secteur} onChange={e => setSecteur(e.target.value)}>
            <option value="">Choisir...</option>
            {SECTEURS.map(s => <option key={s}>{s}</option>)}
          </select>
        </div>
        <div className="field">
          <label>Canal de contact</label>
          <select value={canal} onChange={e => setCanal(e.target.value)}>
            {CANAUX_EMAIL.map(c => <option key={c}>{c}</option>)}
          </select>
        </div>
        <div className="field">
          <label>Situation du prospect *</label>
          <select value={situation} onChange={e => setSituation(e.target.value)}>
            <option value="">Choisir...</option>
            {SITUATIONS.map(s => <option key={s}>{s}</option>)}
          </select>
        </div>
        <div className="field">
          <label>Prénom prospect (optionnel)</label>
          <input
            placeholder="ex: Thomas, Karim..."
            value={prenom}
            onChange={e => setPrenom(e.target.value)}
          />
        </div>
      </div>

      <button
        className="btn-generate"
        onClick={generate}
        disabled={loading || !secteur || !situation}
      >
        {loading ? '⏳ Génération...' : '🔄 Générer la séquence de suivi'}
      </button>

      {loading && (
        <div className="loading-box">
          <div className="spinner"></div>
          <p>Construction de la séquence en cours...</p>
        </div>
      )}

      {error && <div className="error-box">❌ {error}</div>}

      {result && result.sequence && (
        <div className="result-box">
          <div className="result-header">
            <h3>Séquence {canal} — {secteur}</h3>
            <div className="result-actions">
              <button className="btn-regen" onClick={generate}>↺ Regénérer</button>
            </div>
          </div>
          <div className="result-body">
            {result.strategie && (
              <div className="tip-box" style={{ marginTop: 0, marginBottom: 20 }}>
                <strong>🎯 Stratégie :</strong> {result.strategie}
                {result.taux_reponse_attendu && <span style={{ display: 'block', marginTop: 4, color: 'var(--gris)' }}>Taux de réponse attendu : <strong>{result.taux_reponse_attendu}</strong></span>}
              </div>
            )}

            <div className="steps-row">
              {result.sequence.map((s, i) => (
                <button
                  key={i}
                  className={`step-badge ${activeStep === i ? 'active' : ''}`}
                  onClick={() => setActiveStep(i)}
                >
                  {s.jour}
                </button>
              ))}
            </div>

            {result.sequence[activeStep] && (() => {
              const s = result.sequence[activeStep];
              return (
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 10 }}>
                    <div style={{ fontSize: '0.78rem', color: 'var(--lavande)', fontWeight: 700 }}>
                      🎯 Objectif : {s.objectif}
                    </div>
                    <div style={{ fontSize: '0.72rem', color: 'var(--gris)' }}>⏰ {s.timing}</div>
                  </div>
                  {s.objet && (
                    <div style={{ marginBottom: 10 }}>
                      <div className="result-block-title">Objet de l'email</div>
                      <div style={{ background: 'var(--fond)', padding: '8px 12px', borderRadius: 6, fontSize: '0.87rem', fontWeight: 600 }}>{s.objet}</div>
                    </div>
                  )}
                  <div className="result-block-title">Message</div>
                  <div className="message-bubble lavande">{s.message}</div>
                  <div className="message-meta">
                    <button
                      className="btn-copy"
                      style={{ padding: '4px 10px', fontSize: '0.7rem' }}
                      onClick={() => navigator.clipboard.writeText(s.message).then(() => onToast('Copié ✓'))}
                    >Copier</button>
                    <CharBadge text={s.message} limit={500} />
                  </div>
                </div>
              );
            })()}
          </div>
        </div>
      )}
    </div>
  );
}

// ─── MODULE 3 : ANTI-OBJECTIONS ───────────────────────────────────────────────

function ModuleObjections({ onToast }) {
  const [selected, setSelected] = useState([]);
  const [secteur, setSecteur] = useState('');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);
  const [error, setError] = useState('');

  function toggleObj(obj) {
    setSelected(prev =>
      prev.includes(obj) ? prev.filter(o => o !== obj) : [...prev, obj]
    );
  }

  async function generate() {
    if (selected.length === 0) return;
    setLoading(true);
    setError('');
    setResult(null);
    try {
      const sys = `Tu es un expert commercial CapZéniths. Réponds UNIQUEMENT en JSON valide sans backticks. Format: {"reponses": [{"objection": "...", "reponse_courte": "...", "reponse_developpee": "...", "pivot": "..."}]}. Règles: tutoiement, direct, empathique sans être mou, reponse_courte max 2 phrases, pivot = comment transformer l'objection en opportunité de diagnostic.`;
      const prompt = `Secteur: ${secteur || 'TPE/PME générales'} | Objections à traiter: ${selected.join(' | ')}. Génère des réponses percutantes style CapZéniths.`;
      const data = await callAPI(sys, prompt);
      setResult(data);
    } catch (e) {
      setError(e.message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div>
      <div className="section-header">
        <div className="section-icon">🛡️</div>
        <div>
          <h2>Scripts anti-objections</h2>
          <p>Réponses percutantes aux freins les plus courants — version courte et développée + pivot vers le diagnostic.</p>
        </div>
      </div>

      <div className="form-grid">
        <div className="field">
          <label>Secteur (optionnel)</label>
          <select value={secteur} onChange={e => setSecteur(e.target.value)}>
            <option value="">Tous secteurs</option>
            {SECTEURS.map(s => <option key={s}>{s}</option>)}
          </select>
        </div>
      </div>

      <div style={{ marginBottom: 14 }}>
        <label style={{ display: 'block', fontSize: '0.78rem', fontWeight: 700, color: 'var(--aubergine)', textTransform: 'uppercase', letterSpacing: '0.03em', marginBottom: 10 }}>
          Sélectionne les objections à traiter *
        </label>
        <div className="objections-grid">
          {OBJECTIONS.map(obj => (
            <div
              key={obj}
              className={`objection-chip ${selected.includes(obj) ? 'selected' : ''}`}
              onClick={() => toggleObj(obj)}
            >
              {obj}
            </div>
          ))}
        </div>
        {selected.length > 0 && (
          <div style={{ fontSize: '0.75rem', color: 'var(--lavande)', fontWeight: 600 }}>
            {selected.length} objection{selected.length > 1 ? 's' : ''} sélectionnée{selected.length > 1 ? 's' : ''}
          </div>
        )}
      </div>

      <button
        className="btn-generate"
        onClick={generate}
        disabled={loading || selected.length === 0}
      >
        {loading ? '⏳ Génération...' : '🛡️ Générer les réponses anti-objections'}
      </button>

      {loading && (
        <div className="loading-box">
          <div className="spinner"></div>
          <p>Construction des arguments en cours...</p>
        </div>
      )}

      {error && <div className="error-box">❌ {error}</div>}

      {result && result.reponses && (
        <div className="result-box">
          <div className="result-header">
            <h3>{result.reponses.length} objection{result.reponses.length > 1 ? 's' : ''} traitée{result.reponses.length > 1 ? 's' : ''}</h3>
            <div className="result-actions">
              <button className="btn-regen" onClick={generate}>↺ Regénérer</button>
              <button
                className="btn-copy"
                onClick={() => {
                  const txt = result.reponses.map(r =>
                    `❌ "${r.objection}"\n✅ ${r.reponse_courte}\n\n${r.reponse_developpee}\n\n🎯 Pivot: ${r.pivot}`
                  ).join('\n\n---\n\n');
                  navigator.clipboard.writeText(txt).then(() => onToast('Copié ✓'));
                }}
              >Copier tout</button>
            </div>
          </div>
          <div className="result-body">
            {result.reponses.map((r, i) => (
              <div key={i} className="objection-result">
                <div className="objection-result-q">
                  <span>❌</span> « {r.objection} »
                </div>
                <div style={{ marginBottom: 10 }}>
                  <div style={{ fontSize: '0.7rem', fontWeight: 700, color: 'var(--vert)', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: 6 }}>Réponse courte</div>
                  <div className="objection-result-a" style={{ fontWeight: 600 }}>{r.reponse_courte}</div>
                </div>
                <div style={{ marginBottom: 10 }}>
                  <div style={{ fontSize: '0.7rem', fontWeight: 700, color: 'var(--lavande)', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: 6 }}>Développé</div>
                  <div className="objection-result-a">{r.reponse_developpee}</div>
                </div>
                <div style={{ background: 'rgba(245,166,35,0.08)', border: '1px solid rgba(245,166,35,0.3)', borderRadius: 6, padding: '8px 12px' }}>
                  <span style={{ fontSize: '0.7rem', fontWeight: 700, color: 'var(--or)' }}>🎯 PIVOT → </span>
                  <span style={{ fontSize: '0.83rem', color: 'var(--texte)' }}>{r.pivot}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

// ─── MODULE 4 : ACCROCHES LINKEDIN ────────────────────────────────────────────

function ModuleAccroches({ onToast }) {
  const [secteur, setSecteur] = useState('');
  const [selectedTypes, setSelectedTypes] = useState([]);
  const [pilier, setPilier] = useState('');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);
  const [error, setError] = useState('');

  const PILIERS = ['Cash', 'Stratégie', 'Clients', 'Équipe', 'Risques', 'Croissance', 'Résilience'];

  function toggleType(id) {
    setSelectedTypes(prev =>
      prev.includes(id) ? prev.filter(t => t !== id) : [...prev, id]
    );
  }

  async function generate() {
    if (selectedTypes.length === 0) return;
    setLoading(true);
    setError('');
    setResult(null);
    try {
      const sys = `Tu es l'expert contenu LinkedIn de CapZéniths. Réponds UNIQUEMENT en JSON valide sans backticks. Format: {"accroches": [{"type": "...", "texte": "...", "hook": "...", "pourquoi_ca_marche": "..."}]}. Règles: tutoiement dans le contenu, accroche = les 2-3 premières lignes visibles avant "voir plus", hook percutant, données chiffrées quand possible, style direct.`;
      const types = selectedTypes.map(t => ACCROCHE_TYPES.find(a => a.id === t)?.label).join(', ');
      const prompt = `Types d'accroches: ${types}${secteur ? ` | Secteur cible: ${secteur}` : ''}${pilier ? ` | Pilier CapZéniths: ${pilier}` : ''}. Génère ${selectedTypes.length} accroche${selectedTypes.length > 1 ? 's' : ''} LinkedIn pour attirer des dirigeants TPE/PME.`;
      const data = await callAPI(sys, prompt);
      setResult(data);
    } catch (e) {
      setError(e.message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div>
      <div className="section-header">
        <div className="section-icon">✨</div>
        <div>
          <h2>Accroches LinkedIn organiques</h2>
          <p>Les 2-3 premières lignes qui font cliquer "voir plus" — le nerf de la guerre pour l'acquisition organique.</p>
        </div>
      </div>

      <div className="form-grid">
        <div className="field">
          <label>Secteur cible (optionnel)</label>
          <select value={secteur} onChange={e => setSecteur(e.target.value)}>
            <option value="">Tous secteurs</option>
            {SECTEURS.map(s => <option key={s}>{s}</option>)}
          </select>
        </div>
        <div className="field">
          <label>Pilier CapZéniths (optionnel)</label>
          <select value={pilier} onChange={e => setPilier(e.target.value)}>
            <option value="">Choisir un pilier...</option>
            {PILIERS.map(p => <option key={p}>{p}</option>)}
          </select>
        </div>
      </div>

      <div style={{ marginBottom: 14 }}>
        <label style={{ display: 'block', fontSize: '0.78rem', fontWeight: 700, color: 'var(--aubergine)', textTransform: 'uppercase', letterSpacing: '0.03em', marginBottom: 10 }}>
          Types d'accroches à générer *
        </label>
        <div className="accroche-types">
          {ACCROCHE_TYPES.map(type => (
            <div
              key={type.id}
              className={`accroche-card ${selectedTypes.includes(type.id) ? 'selected' : ''}`}
              onClick={() => toggleType(type.id)}
            >
              <div className="accroche-icon">{type.icon}</div>
              <div className="accroche-label">{type.label}</div>
              <div className="accroche-desc">{type.desc}</div>
            </div>
          ))}
        </div>
        {selectedTypes.length > 0 && (
          <div style={{ fontSize: '0.75rem', color: 'var(--lavande)', fontWeight: 600 }}>
            {selectedTypes.length} type{selectedTypes.length > 1 ? 's' : ''} sélectionné{selectedTypes.length > 1 ? 's' : ''}
          </div>
        )}
      </div>

      <button
        className="btn-generate"
        onClick={generate}
        disabled={loading || selectedTypes.length === 0}
      >
        {loading ? '⏳ Génération...' : '✨ Générer les accroches LinkedIn'}
      </button>

      {loading && (
        <div className="loading-box">
          <div className="spinner"></div>
          <p>Rédaction des accroches en cours...</p>
        </div>
      )}

      {error && <div className="error-box">❌ {error}</div>}

      {result && result.accroches && (
        <div className="result-box">
          <div className="result-header">
            <h3>{result.accroches.length} accroche{result.accroches.length > 1 ? 's' : ''} générée{result.accroches.length > 1 ? 's' : ''}</h3>
            <div className="result-actions">
              <button className="btn-regen" onClick={generate}>↺ Regénérer</button>
              <button
                className="btn-copy"
                onClick={() => {
                  const txt = result.accroches.map(a =>
                    `[${a.type}]\n${a.texte}\n\n💡 ${a.pourquoi_ca_marche}`
                  ).join('\n\n---\n\n');
                  navigator.clipboard.writeText(txt).then(() => onToast('Copié ✓'));
                }}
              >Copier tout</button>
            </div>
          </div>
          <div className="result-body">
            {result.accroches.map((a, i) => (
              <div key={i} className="accroche-result">
                <div className="accroche-result-type">
                  {ACCROCHE_TYPES.find(t => t.label === a.type)?.icon || '✨'} {a.type}
                </div>
                <div className="accroche-result-text">{a.texte}</div>
                {a.hook && (
                  <div style={{ marginTop: 10, padding: '8px 12px', background: 'rgba(155,142,212,0.1)', borderRadius: 6, fontSize: '0.78rem' }}>
                    <span style={{ color: 'var(--lavande)', fontWeight: 700 }}>Hook : </span>{a.hook}
                  </div>
                )}
                <div style={{ marginTop: 8, display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 8, flexWrap: 'wrap' }}>
                  <div style={{ fontSize: '0.75rem', color: 'var(--gris)', fontStyle: 'italic' }}>
                    💡 {a.pourquoi_ca_marche}
                  </div>
                  <button
                    className="btn-copy"
                    style={{ padding: '4px 10px', fontSize: '0.7rem', flexShrink: 0 }}
                    onClick={() => navigator.clipboard.writeText(a.texte).then(() => onToast('Copié ✓'))}
                  >Copier</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

// ─── APP ROOT ─────────────────────────────────────────────────────────────────

export default function App() {
  injectStyles();
  const [activeTab, setActiveTab] = useState('linkedin');
  const [toast, setToast] = useState('');

  function showToast(msg) {
    setToast(msg);
    setTimeout(() => setToast(''), 2500);
  }

  const modules = {
    linkedin: <ModuleLinkedIn onToast={showToast} />,
    sequence: <ModuleSequence onToast={showToast} />,
    objections: <ModuleObjections onToast={showToast} />,
    accroches: <ModuleAccroches onToast={showToast} />,
  };

  return (
    <>
      {/* NAVBAR */}
      <nav className="navbar">
        <div className="navbar-logo">
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
            <circle cx="16" cy="16" r="16" fill="#2D0A3E"/>
            <rect x="7" y="19" width="4" height="6" rx="0.8" fill="#F5A623"/>
            <rect x="13" y="15" width="4" height="10" rx="0.8" fill="#F5A623"/>
            <rect x="19" y="11" width="4.5" height="14" rx="0.8" fill="#F5A623"/>
            <polygon points="21.25,4 22.2,7 25.3,7 22.8,8.8 23.7,11.8 21.25,10 18.8,11.8 19.7,8.8 17.2,7 20.3,7" fill="#F5A623"/>
          </svg>
          <div>
            <div className="navbar-title">
              <span style={{ color: '#F5A623' }}>Cap</span>
              <span style={{ color: '#9B8ED4' }}>Zéniths</span>
            </div>
            <div className="navbar-subtitle">Agent Acquisition</div>
          </div>
        </div>
        <div className="navbar-badge">IA Prospection</div>
      </nav>

      {/* HERO */}
      <div className="hero">
        <div className="hero-tag">🎯 Acquisition B2B</div>
        <h1>Prospecte <span>sans bullshit</span>,<br/>convertis avec méthode</h1>
        <p>Messages LinkedIn, séquences de suivi, réponses aux objections et accroches organiques — générés par IA, adaptés à ton secteur.</p>
      </div>

      {/* TABS */}
      <div className="tabs-wrapper">
        <div className="tabs">
          {TABS.map(tab => (
            <button
              key={tab.id}
              className={`tab ${activeTab === tab.id ? 'active' : ''}`}
              onClick={() => setActiveTab(tab.id)}
            >
              <span className="tab-icon">{tab.icon}</span>
              {tab.label}
              <span className="tab-num">{tab.num}</span>
            </button>
          ))}
        </div>
      </div>

      {/* CONTENT */}
      <main className="main">
        {modules[activeTab]}
      </main>

      {/* FOOTER */}
      <div className="footer">
        <span>CapZéniths</span> · Agent Acquisition · Méthode 7 Piliers · Tous droits réservés
      </div>

      {/* TOAST */}
      {toast && <div className="toast">{toast}</div>}
    </>
  );
}
