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
      font-family: var(--font-display);
      font-size: clamp(2rem, 5vw, 3rem);
      margin-bottom: var(--space-6);
      color: var(--text-bright, #eeeef6);
      text-shadow:
        0 0 4px #fff,
        0 0 10px rgba(15, 240, 252, 0.6),
        0 0 25px rgba(15, 240, 252, 0.25);
    }

    .heading-accent {
      color: var(--accent2);
      font-family: var(--font-tech);
      font-size: 0.6em;
      vertical-align: middle;
      text-shadow:
        0 0 6px rgba(255, 20, 147, 0.6),
        0 0 14px rgba(255, 20, 147, 0.2);
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
      font-family: var(--font-mono);
    }

    .location sl-icon {
      color: var(--accent);
      text-shadow: 0 0 6px rgba(15, 240, 252, 0.4);
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
      transition: opacity 0.5s ease, transform 0.5s ease, border-color var(--transition-normal), box-shadow var(--transition-normal);
      position: relative;
    }

    .stat-card:hover {
      border-color: rgba(15, 240, 252, 0.3);
      box-shadow:
        0 0 12px rgba(15, 240, 252, 0.1),
        0 0 30px rgba(15, 240, 252, 0.05);
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
      font-family: var(--font-tech);
      line-height: 1;
      text-shadow:
        0 0 6px rgba(15, 240, 252, 0.5),
        0 0 18px rgba(15, 240, 252, 0.2);
    }

    .stat-suffix {
      font-size: 2rem;
      font-weight: 800;
      color: var(--accent);
      font-family: var(--font-tech);
    }

    .stat-label {
      display: block;
      color: var(--text-secondary);
      font-size: 0.8rem;
      margin-top: var(--space-1);
      font-family: var(--font-tech);
      text-transform: uppercase;
      letter-spacing: 0.1em;
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
