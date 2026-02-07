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
      background: rgba(10, 10, 15, 0.85);
      backdrop-filter: blur(12px);
      -webkit-backdrop-filter: blur(12px);
      border-bottom: 1px solid var(--border);
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
      font-family: var(--font-mono);
      font-weight: 700;
      font-size: 1.2rem;
      color: var(--accent);
    }

    .nav-links {
      display: flex;
      gap: var(--space-1);
    }

    .nav-links a {
      color: var(--text-secondary);
      text-decoration: none;
      font-size: 0.9rem;
      padding: var(--space-1) var(--space-2);
      border-radius: var(--radius-sm);
      transition: color var(--transition-fast), background var(--transition-fast);
    }

    .nav-links a:hover,
    .nav-links a.active {
      color: var(--accent);
    }

    .mobile-menu {
      display: none;
    }

    sl-drawer::part(body) {
      display: flex;
      flex-direction: column;
      gap: var(--space-2);
      padding: var(--space-4);
    }

    .drawer-link {
      color: var(--text-primary);
      text-decoration: none;
      font-size: 1.1rem;
      padding: var(--space-2);
      border-radius: var(--radius-sm);
      transition: color var(--transition-fast);
    }

    .drawer-link:hover {
      color: var(--accent);
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
