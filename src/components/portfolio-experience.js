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
      font-size: clamp(1.8rem, 4vw, 2.5rem);
      margin-bottom: var(--space-6);
    }

    .heading-accent {
      color: var(--accent);
      font-family: var(--font-mono);
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
      box-shadow: 0 0 10px rgba(99, 102, 241, 0.5);
      z-index: 1;
      flex-shrink: 0;
    }

    .marker-line {
      width: 2px;
      flex: 1;
      background: var(--border);
      margin-top: 4px;
    }

    .timeline-content {
      padding-bottom: var(--space-2);
    }

    .timeline-header h3 {
      font-size: 1.2rem;
      margin-bottom: var(--space-1);
    }

    .timeline-company,
    .timeline-period {
      font-size: 0.9rem;
      color: var(--text-secondary);
      display: flex;
      align-items: center;
      gap: 4px;
      margin-bottom: 2px;
    }

    .timeline-company sl-icon,
    .timeline-period sl-icon {
      color: var(--accent);
      font-size: 0.85rem;
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
