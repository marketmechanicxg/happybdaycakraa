/**
 * Happy Birthday, Cakra! 🎂
 * Core Configuration System
 */

const CONFIG = {
  version: '2.0.0',
  debug: false,

  // ─── TIMING ───────────────────────────────────────────────────────
  timing: {
    preloaderMin: 2800,
    fadeIn: 1200,
    sectionTransition: 800,
    hoverDelay: 60,
    scrollThrottle: 16,
  },

  // ─── EASING ───────────────────────────────────────────────────────
  easing: {
    cinematic:   'power4.inOut',
    soft:        'power2.out',
    elastic:     'elastic.out(1, 0.4)',
    bounce:      'back.out(1.7)',
    silk:        'expo.out',
    brutal:      'power4.out',
    romantic:    'sine.inOut',
  },

  // ─── PARTICLES ────────────────────────────────────────────────────
  particles: {
    desktop: { count: 180, speed: 0.28, size: [0.8, 2.4] },
    tablet:  { count: 90,  speed: 0.22, size: [0.6, 1.8] },
    mobile:  { count: 45,  speed: 0.16, size: [0.5, 1.4] },
  },

  // ─── THREE.JS ─────────────────────────────────────────────────────
  three: {
    fov: 75,
    near: 0.1,
    far: 1000,
    cameraZ: 5,
    orbs: {
      desktop: 12,
      mobile: 6,
    },
    mouseInfluence: 0.035,
    scrollInfluence: 0.001,
  },

  // ─── BREAKPOINTS ──────────────────────────────────────────────────
  breakpoints: {
    mobile: 640,
    tablet: 1024,
    desktop: 1440,
  },

  // ─── PERFORMANCE ──────────────────────────────────────────────────
  performance: {
    fpsTarget: 60,
    fpsLow: 30,
    adaptiveQuality: true,
    maxDegradationLevel: 3,
  },

  // ─── QUOTES ───────────────────────────────────────────────────────
  loadingQuotes: [
    "Every birthday is a new chapter waiting to be written...",
    "Some people make the world brighter just by being in it.",
    "Today the universe celebrates the day you arrived.",
    "You are one of those rare people who makes life more beautiful.",
    "Another year, another reason to celebrate everything that is you.",
    "In every universe, today is a day worth celebrating — Cakra's birthday.",
  ],

  // ─── BIRTHDAY JOURNEY DATA ────────────────────────────────────────
  timeline: [
    {
      date: "The Beginning",
      title: "The Day You Arrived",
      quote: "The world didn't know it yet, but something wonderful had just begun. You were born, and everything quietly became a little more bright.",
      icon: "✦",
    },
    {
      date: "Growing Up",
      title: "Finding Your Light",
      quote: "With every year you grew, so did your warmth. The kind of person you became — thoughtful, kind, radiant — was never an accident.",
      icon: "◈",
    },
    {
      date: "The Person You Are",
      title: "Everything You've Become",
      quote: "You carry yourself with a grace that is entirely your own. The world is genuinely better for having someone like you in it.",
      icon: "◉",
    },
    {
      date: "Moments Together",
      title: "Memories Worth Keeping",
      quote: "There are moments that stay with you — the laughter, the small things, the ordinary days that somehow felt extraordinary because you were there.",
      icon: "✧",
    },
    {
      date: "Today",
      title: "Happy Birthday, Cakra 🎂",
      quote: "Here you are — another year wiser, more wonderful than ever. Today belongs to you. Celebrate every bit of who you are.",
      icon: "♡",
    },
  ],

  // ─── GALLERY CAPTIONS ─────────────────────────────────────────────
  //
  // CARA TAMBAH FOTO:
  //   1. Taruh file foto di folder:  assets/images/
  //   2. Isi field "img" dengan path-nya, contoh:
  //        img: 'assets/images/foto1.jpg'
  //   3. Kalau "img" dikosongkan (''), kartu tampil sebagai gradient placeholder
  //
  // Rasio foto ideal: 3:4 (portrait) — misal 600x800px atau 900x1200px
  //
  gallery: [
    { img: '', caption: "Cakra, you light up every room without even trying.",     tag: "effortless"  },
    { img: '', caption: "The smile that makes every moment feel like a gift.",   tag: "radiant"     },
    { img: '', caption: "Your laughter — the best sound in any room.",           tag: "joy"         },
    { img: '', caption: "Every version of you is worth celebrating.",            tag: "favorite"    },
    { img: '', caption: "Golden light, warm heart — always you.",                tag: "luminous"    },
    { img: '', caption: "The world is lucky to have you in it, Cakra.",            tag: "celebrated"  },
  ],
};

// Freeze to prevent accidental mutations
Object.freeze(CONFIG);
Object.freeze(CONFIG.timing);
Object.freeze(CONFIG.easing);
Object.freeze(CONFIG.particles);
Object.freeze(CONFIG.three);
Object.freeze(CONFIG.breakpoints);
Object.freeze(CONFIG.performance);

window.CONFIG = CONFIG;
