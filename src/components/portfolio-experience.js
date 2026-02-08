import { LitElement, html, css } from 'lit';
import { RevealMixin } from '../mixins/reveal-mixin.js';
import { experience } from '../data/experience.js';
import '@shoelace-style/shoelace/dist/components/icon/icon.js';

export class PortfolioExperience extends RevealMixin(LitElement) {
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

    .timeline {
      position: relative;
      padding-left: var(--space-6);
    }

    .timeline-entry {
      display: flex;
      gap: var(--space-3);
      margin-bottom: var(--space-6);
      opacity: 0;
      transform: translateX(-20px);
      transition: opacity 0.5s ease, transform 0.5s ease;
    }

    :host(.revealed) .timeline-entry {
      opacity: 1;
      transform: translateX(0);
    }

    :host(.revealed) .timeline-entry:nth-child(1) { transition-delay: 0ms; }
    :host(.revealed) .timeline-entry:nth-child(2) { transition-delay: 200ms; }
    :host(.revealed) .timeline-entry:nth-child(3) { transition-delay: 400ms; }

    .timeline-marker {
      display: flex;
      flex-direction: column;
      align-items: center;
      flex-shrink: 0;
    }

    .marker-dot {
      width: 14px;
      height: 14px;
      border-radius: 50%;
      background: var(--accent);
      box-shadow:
        0 0 6px rgba(15, 240, 252, 0.6),
        0 0 16px rgba(15, 240, 252, 0.3),
        0 0 30px rgba(15, 240, 252, 0.1);
      z-index: 1;
      flex-shrink: 0;
      animation: neonPulse 3s ease-in-out infinite;
    }

    @keyframes neonPulse {
      0%, 100% {
        box-shadow:
          0 0 6px rgba(15, 240, 252, 0.5),
          0 0 14px rgba(15, 240, 252, 0.2);
      }
      50% {
        box-shadow:
          0 0 10px rgba(15, 240, 252, 0.8),
          0 0 28px rgba(15, 240, 252, 0.35);
      }
    }

    .marker-line {
      width: 2px;
      flex: 1;
      background: linear-gradient(
        to bottom,
        rgba(15, 240, 252, 0.4),
        rgba(15, 240, 252, 0.05)
      );
      margin-top: 4px;
    }

    .timeline-content {
      padding-bottom: var(--space-2);
    }

    .timeline-header h3 {
      font-size: 1.2rem;
      margin-bottom: var(--space-1);
      color: var(--text-bright, #eeeef6);
    }

    .timeline-company,
    .timeline-period {
      font-size: 0.9rem;
      color: var(--text-secondary);
      display: flex;
      align-items: center;
      gap: 4px;
      margin-bottom: 2px;
      font-family: var(--font-mono);
    }

    .timeline-company sl-icon,
    .timeline-period sl-icon {
      color: var(--accent);
      font-size: 0.85rem;
      filter: drop-shadow(0 0 4px rgba(15, 240, 252, 0.4));
    }

    .timeline-desc {
      font-size: 0.95rem;
      color: var(--text-secondary);
      margin-top: var(--space-2);
      line-height: 1.6;
    }

    .timeline-highlights {
      list-style: none;
      margin-top: var(--space-2);
      padding: 0;
    }

    .timeline-highlights li {
      position: relative;
      padding-left: var(--space-3);
      color: var(--text-secondary);
      margin-bottom: var(--space-1);
      font-size: 0.9rem;
    }

    .timeline-highlights li::before {
      content: '>';
      position: absolute;
      left: 0;
      color: var(--accent);
      font-family: var(--font-mono);
      font-weight: 700;
      text-shadow: 0 0 6px rgba(15, 240, 252, 0.4);
    }

    @media (max-width: 768px) {
      .timeline {
        padding-left: var(--space-4);
      }
    }
  `;

  render() {
    return html`
      <section id="experience">
        <h2 class="section-heading">
          <span class="heading-accent">//</span> Experience
        </h2>
        <div class="timeline">
          ${experience.map(
            (exp, i) => html`
              <div class="timeline-entry">
                <div class="timeline-marker">
                  <div class="marker-dot"></div>
                  ${i < experience.length - 1
                    ? html`<div class="marker-line"></div>`
                    : ''}
                </div>
                <div class="timeline-content">
                  <div class="timeline-header">
                    <h3>${exp.role}</h3>
                    <span class="timeline-company">
                      <sl-icon name="building"></sl-icon>
                      ${exp.company}
                    </span>
                    <span class="timeline-period">
                      <sl-icon name="calendar3"></sl-icon>
                      ${exp.period}
                    </span>
                  </div>
                  <p class="timeline-desc">${exp.description}</p>
                  <ul class="timeline-highlights">
                    ${exp.highlights.map((h) => html`<li>${h}</li>`)}
                  </ul>
                </div>
              </div>
            `,
          )}
        </div>
      </section>
    `;
  }
}

customElements.define('portfolio-experience', PortfolioExperience);
