import { LitElement, html, css } from 'lit';
import { RevealMixin } from '../mixins/reveal-mixin.js';
import { personal } from '../data/personal.js';
import '@shoelace-style/shoelace/dist/components/icon/icon.js';

export class PortfolioAbout extends RevealMixin(LitElement) {
  static styles = css`
    :host {
      display: block;
      padding: var(--section-padding) var(--space-4);
      max-width: 1200px;
      margin: 0 auto;
      opacity: 0;
      transform: translateY(30px);
      transition: opacity var(--transition-slow), transform var(--transition-slow);
    }

    :host(.revealed) {
      opacity: 1;
      transform: translateY(0);
    }

    .section-heading {
      font-size: clamp(1.8rem, 4vw, 2.5rem);
      margin-bottom: var(--space-6);
    }

    .heading-accent {
      color: var(--accent);
      font-family: var(--font-mono);
    }

    .about-grid {
      display: grid;
      grid-template-columns: 1.5fr 1fr;
      gap: var(--space-8);
      align-items: start;
    }

    .about-text p {
      font-size: 1.1rem;
      line-height: 1.8;
      color: var(--text-secondary);
      margin-bottom: var(--space-3);
    }

    .location {
      display: flex;
      align-items: center;
      gap: var(--space-1);
      font-size: 0.95rem;
      color: var(--text-secondary);
    }

    .location sl-icon {
      color: var(--accent);
    }

    .about-stats {
      display: flex;
      flex-direction: column;
      gap: var(--space-3);
    }

    .stat-card {
      background: var(--bg-card);
      border: 1px solid var(--border);
      border-radius: var(--radius-md);
      padding: var(--space-3);
      text-align: center;
      opacity: 0;
      transform: translateY(20px);
      transition: opacity 0.5s ease, transform 0.5s ease;
    }

    :host(.revealed) .stat-card {
      opacity: 1;
      transform: translateY(0);
    }

    :host(.revealed) .stat-card:nth-child(1) { transition-delay: 0ms; }
    :host(.revealed) .stat-card:nth-child(2) { transition-delay: 150ms; }
    :host(.revealed) .stat-card:nth-child(3) { transition-delay: 300ms; }

    .stat-number {
      font-size: 3rem;
      font-weight: 800;
      color: var(--accent);
      font-family: var(--font-mono);
      line-height: 1;
    }

    .stat-suffix {
      font-size: 2rem;
      font-weight: 800;
      color: var(--accent);
      font-family: var(--font-mono);
    }

    .stat-label {
      display: block;
      color: var(--text-secondary);
      font-size: 0.85rem;
      margin-top: var(--space-1);
    }

    @media (max-width: 768px) {
      .about-grid {
        grid-template-columns: 1fr;
        gap: var(--space-4);
      }

      .about-stats {
        flex-direction: row;
        flex-wrap: wrap;
      }

      .stat-card {
        flex: 1;
        min-width: 120px;
      }
    }
  `;

  constructor() {
    super();
    this._yearsExp = new Date().getFullYear() - personal.startYear;
  }

  render() {
    return html`
      <section id="about">
        <h2 class="section-heading">
          <span class="heading-accent">//</span> About Me
        </h2>
        <div class="about-grid">
          <div class="about-text">
            <p>${personal.shortBio}</p>
            <p class="location">
              <sl-icon name="geo-alt"></sl-icon>
              ${personal.location}
            </p>
          </div>
          <div class="about-stats">
            <div class="stat-card">
              <span class="stat-number">${this._yearsExp}</span>
              <span class="stat-suffix">+</span>
              <span class="stat-label">years coding</span>
            </div>
            <div class="stat-card">
              <span class="stat-number">1984</span>
              <span class="stat-label">first line of code</span>
            </div>
            <div class="stat-card">
              <span class="stat-number">2</span>
              <span class="stat-label">companies built</span>
            </div>
          </div>
        </div>
      </section>
    `;
  }
}

customElements.define('portfolio-about', PortfolioAbout);
