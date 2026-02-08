// Project screenshots — Vite will resolve these imports at build time
import secureMail1 from '../assets/images/projects/Secure-Mail-1.png';
import secureMail2 from '../assets/images/projects/Secure-Mail-2.png';
import secureMail3 from '../assets/images/projects/Secure-Mail-3.png';
import gatekeeper1 from '../assets/images/projects/Gatekeeper-1.png';
import branding1 from '../assets/images/projects/Branding-1.png';
import branding2 from '../assets/images/projects/Branding-2.png';
import branding3 from '../assets/images/projects/Branding-3.png';
import webBeacon from '../assets/images/projects/Web-Beacon.png';
import nodeRestAuth from '../assets/images/projects/Node-Rest-Auth_lib.png';
import hydra1 from '../assets/images/projects/Hydra1.png';
import hydra2 from '../assets/images/projects/Hydra2.png';

// Project videos
import gatekeeperVideo from '../assets/videos/Gatekeeper-v2-6-0281521.mp4';
import linkShieldVideo from '../assets/videos/LinkShield-Protection.mp4';
import brandFuVideo from '../assets/videos/BrandFu.mp4';

export const projects = [
  // ── Professional (Synaq) ───────────────────────────────────
  {
    id: 'securemail',
    title: 'SecureMail',
    description:
      'Enterprise email security platform delivering 100% virus protection, Identity Threat Protection (ITP), LinkShield URL scanning, and Data Leak Prevention. Features a full admin console with security posture dashboards, scheduled reporting, and domain-level analytics.',
    tags: ['Email Security', 'SaaS', 'Dashboards', 'Node.js', 'REST API'],
    screenshots: [secureMail3, secureMail2, secureMail1],
    videoUrl: null,
    liveUrl: 'https://www.synaq.com/products/securemail/',
    repoUrl: null,
    featured: true,
    category: 'professional',
    company: 'Synaq',
  },
  {
    id: 'gatekeeper',
    title: 'GateKeeper',
    description:
      'AI-driven Zimbra email security that detects and blocks suspicious logins, brute-force attacks, and credential stuffing in real-time. Cloud-deployed with intuitive dashboards, adaptive threat response, and enterprise API integrations.',
    tags: ['AI Security', 'Zimbra', 'Real-time', 'Node.js', 'Cloud'],
    screenshots: [gatekeeper1],
    videoUrl: gatekeeperVideo,
    liveUrl: 'https://gatekeeper.synaq.com/',
    repoUrl: null,
    featured: true,
    category: 'professional',
    company: 'Synaq',
  },
  {
    id: 'linkshield',
    title: 'LinkShield',
    description:
      'URL protection service that scans every link in inbound emails for phishing, malware, and dangerous content — rewriting URLs to route through a secure proxy before the user ever clicks.',
    tags: ['Phishing Protection', 'URL Scanning', 'Email Security', 'SaaS'],
    screenshots: [],
    videoUrl: linkShieldVideo,
    liveUrl: null,
    repoUrl: null,
    featured: false,
    category: 'professional',
    company: 'Synaq',
  },
  {
    id: 'brandfu',
    title: 'BrandFu',
    description:
      'Email signature branding platform that transforms every outbound email into a marketing channel. Manage corporate identity, run signature campaigns with click-through analytics, and enforce brand consistency across the organisation.',
    tags: ['Branding', 'Email Marketing', 'Campaigns', 'Analytics', 'SaaS'],
    screenshots: [branding1, branding2, branding3],
    videoUrl: brandFuVideo,
    liveUrl: null,
    repoUrl: null,
    featured: true,
    category: 'professional',
    company: 'Synaq',
  },

  // ── Open Source / Personal ─────────────────────────────────
  {
    id: 'webbeacon',
    title: 'WebBeacon',
    description:
      'Lightweight Node.js web beacon for tracking real-time user interactions and performance metrics with minimal overhead.',
    tags: ['Node.js', 'JavaScript', 'Analytics', 'Real-time'],
    screenshots: [webBeacon],
    videoUrl: null,
    liveUrl: null,
    repoUrl: 'https://github.com/HoldenMorris/WebBeacon',
    featured: true,
    category: 'opensource',
  },
  {
    id: 'node-rest-auth',
    title: 'Node-Rest-Auth',
    description:
      'Authentication library for securing REST API endpoints with token-based auth, role management, and middleware hooks.',
    tags: ['Node.js', 'REST API', 'Authentication', 'Security'],
    screenshots: [nodeRestAuth],
    videoUrl: null,
    liveUrl: null,
    repoUrl: 'https://github.com/HoldenMorris/Node-Rest-Auth',
    featured: true,
    category: 'opensource',
  },
  {
    id: 'hydra',
    title: 'Hydra',
    description:
      'Mobile terminal webapp for managing and monitoring distributed services from any device, with a dark immersive interface.',
    tags: ['Node.js', 'Mobile', 'Terminal', 'WebApp'],
    screenshots: [hydra1, hydra2],
    videoUrl: null,
    liveUrl: null,
    repoUrl: 'https://github.com/HoldenMorris/hydra',
    featured: true,
    category: 'opensource',
  },
];
