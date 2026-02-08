import { LitElement, html, css } from 'lit';
import { classMap } from 'lit/directives/class-map.js';
import '@shoelace-style/shoelace/dist/components/icon-button/icon-button.js';
import '@shoelace-style/shoelace/dist/components/drawer/drawer.js';

const sections = [
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'experience', label: 'Experience' },
  { id: 'contact', label: 'Contact' },
];

export class PortfolioNav extends LitElement {
  static properties = {
    _pastHero: { type: Boolean, state: true },
    _scrolled: { type: Boolean, state: true },
    _activeSection: { type: String, state: true },
    _drawerOpen: { type: Boolean, state: true },
  };

  static styles = css`
    :host {
      display: block;
    }

    nav {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      z-index: var(--z-nav, 100);
      transform: translateY(-100%);
      transition: transform var(--transition-normal), background var(--transition-normal);
      background: transparent;
    }

    nav.visible {
      transform: translateY(0);
    }

    nav.scrolled {
      background: rgba(7, 7, 14, 0.82);
      backdrop-filter: blur(16px) saturate(1.4);
      -webkit-backdrop-filter: blur(16px) saturate(1.4);
      border-bottom: 1px solid var(--border);
      box-shadow: 0 1px 20px rgba(15, 240, 252, 0.05);
    }

    .nav-inner {
      max-width: 1200px;
      margin: 0 auto;
      padding: var(--space-2) var(--space-4);
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .nav-logo {
      text-decoration: none;
      color: var(--text-primary);
    }

    .monogram {
      font-family: var(--font-tech);
      font-weight: 700;
      font-size: 1.2rem;
      color: var(--accent);
      text-shadow:
        0 0 6px rgba(15, 240, 252, 0.6),
        0 0 14px rgba(15, 240, 252, 0.3);
      letter-spacing: 0.15em;
      animation: neonFlicker 4s ease-in-out infinite;
    }

    @keyframes neonFlicker {
      0%   { opacity: 1; }
      4%   { opacity: 0.9; }
      6%   { opacity: 1; }
      7%   { opacity: 0.85; }
      8%   { opacity: 1; }
      48%  { opacity: 1; }
      50%  { opacity: 0.92; }
      52%  { opacity: 1; }
      97%  { opacity: 1; }
      98%  { opacity: 0.88; }
      100% { opacity: 1; }
    }

    .nav-links {
      display: flex;
      gap: var(--space-1);
    }

    .nav-links a {
      color: var(--text-secondary);
      text-decoration: none;
      font-family: var(--font-tech);
      font-size: 0.72rem;
      font-weight: 500;
      letter-spacing: 0.12em;
      text-transform: uppercase;
      padding: var(--space-1) var(--space-2);
      border-radius: var(--radius-sm);
      transition: color var(--transition-fast), text-shadow var(--transition-fast);
      position: relative;
    }

    .nav-links a::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 50%;
      width: 0;
      height: 2px;
      background: var(--accent);
      box-shadow: 0 0 6px rgba(15, 240, 252, 0.6);
      transition: width var(--transition-fast), left var(--transition-fast);
    }

    .nav-links a:hover,
    .nav-links a.active {
      color: var(--accent);
      text-shadow: 0 0 8px rgba(15, 240, 252, 0.4);
    }

    .nav-links a:hover::after,
    .nav-links a.active::after {
      width: 60%;
      left: 20%;
    }

    .mobile-menu {
      display: none;
      color: var(--accent);
      font-size: 1.6rem;
    }

    sl-drawer::part(body) {
      display: flex;
      flex-direction: column;
      gap: var(--space-2);
      padding: var(--space-4);
      background: var(--bg-secondary);
    }

    sl-drawer::part(panel) {
      background: var(--bg-secondary);
      border-left: 1px solid var(--border);
    }

    .drawer-link {
      color: var(--text-primary);
      text-decoration: none;
      font-family: var(--font-tech);
      font-size: 0.85rem;
      letter-spacing: 0.1em;
      text-transform: uppercase;
      padding: var(--space-2);
      border-radius: var(--radius-sm);
      transition: color var(--transition-fast), text-shadow var(--transition-fast);
      border-bottom: 1px solid var(--border);
    }

    .drawer-link:hover {
      color: var(--accent);
      text-shadow: 0 0 8px rgba(15, 240, 252, 0.4);
    }

    @media (max-width: 768px) {
      .nav-links {
        display: none;
      }
      .mobile-menu {
        display: block;
      }
    }
  `;

  constructor() {
    super();
    this._pastHero = false;
    this._scrolled = false;
    this._activeSection = '';
    this._drawerOpen = false;
    this._onScroll = this._onScroll.bind(this);
  }

  connectedCallback() {
    super.connectedCallback();
    window.addEventListener('scroll', this._onScroll, { passive: true });

    this._sectionObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            this._activeSection = entry.target.id;
          }
        });
      },
      { rootMargin: '-20% 0px -70% 0px' },
    );

    requestAnimationFrame(() => {
      const appEl = document.querySelector('portfolio-app');
      const root = appEl?.shadowRoot ?? document;
      ['hero', 'about', 'skills', 'projects', 'experience', 'contact'].forEach((id) => {
        const el = root.getElementById(id);
        if (el) this._sectionObserver.observe(el);
      });
    });
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    window.removeEventListener('scroll', this._onScroll);
    this._sectionObserver?.disconnect();
  }

  _onScroll() {
    requestAnimationFrame(() => {
      this._pastHero = window.scrollY > window.innerHeight * 0.8;
      this._scrolled = window.scrollY > 50;
    });
  }

  _findById(id) {
    const appEl = document.querySelector('portfolio-app');
    return appEl?.shadowRoot?.getElementById(id) ?? document.getElementById(id);
  }

  _handleNavClick(e) {
    e.preventDefault();
    const targetId = e.currentTarget.getAttribute('href').substring(1);
    const target = this._findById(targetId);
    if (target) {
      const navHeight = 64;
      const pos = target.getBoundingClientRect().top + window.scrollY - navHeight;
      window.scrollTo({ top: pos, behavior: 'smooth' });
    }
  }

  _handleMobileNavClick(e) {
    this._handleNavClick(e);
    this._drawerOpen = false;
  }

  render() {
    const navClasses = {
      visible: this._pastHero,
      scrolled: this._scrolled,
    };

    return html`
      <nav class=${classMap(navClasses)}>
        <div class="nav-inner">
          <a href="#hero" class="nav-logo" @click=${this._handleNavClick}>
            <span class="monogram">HM</span>
          </a>
          <div class="nav-links">
            ${sections.map(
              (s) => html`
                <a
                  href="#${s.id}"
                  class=${s.id === this._activeSection ? 'active' : ''}
                  @click=${this._handleNavClick}
                >${s.label}</a>
              `,
            )}
          </div>
          <sl-icon-button
            class="mobile-menu"
            name="list"
            label="Menu"
            @click=${() => (this._drawerOpen = true)}
          ></sl-icon-button>
        </div>
      </nav>

      <sl-drawer
        label="Navigation"
        placement="end"
        ?open=${this._drawerOpen}
        @sl-after-hide=${() => (this._drawerOpen = false)}
      >
        ${sections.map(
          (s) => html`
            <a href="#${s.id}" class="drawer-link" @click=${this._handleMobileNavClick}>
              ${s.label}
            </a>
          `,
        )}
      </sl-drawer>
    `;
  }
}

customElements.define('portfolio-nav', PortfolioNav);
