import { LitElement, html, css } from 'lit';
import { RevealMixin } from '../mixins/reveal-mixin.js';
import { personal } from '../data/personal.js';
import '@shoelace-style/shoelace/dist/components/icon/icon.js';

export class PortfolioContact extends RevealMixin(LitElement) {
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
      margin-bottom: var(--space-3);
    }

    .heading-accent {
      color: var(--accent);
      font-family: var(--font-mono);
    }

    .contact-intro {
      color: var(--text-secondary);
      font-size: 1.1rem;
      margin-bottom: var(--space-6);
    }

    .contact-links {
      display: flex;
      gap: var(--space-4);
      justify-content: center;
      flex-wrap: wrap;
    }

    .contact-card {
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: var(--space-4) var(--space-6);
      background: var(--bg-card);
      border: 1px solid var(--border);
      border-radius: var(--radius-lg);
      text-decoration: none;
      color: var(--text-primary);
      transition: all var(--transition-normal);
      min-width: 180px;
      opacity: 0;
      transform: scale(0.9);
    }

    :host(.revealed) .contact-card {
      opacity: 1;
      transform: scale(1);
    }

    :host(.revealed) .contact-card:nth-child(1) { transition-delay: 0ms; }
    :host(.revealed) .contact-card:nth-child(2) { transition-delay: 100ms; }
    :host(.revealed) .contact-card:nth-child(3) { transition-delay: 200ms; }

    .contact-card:hover {
      border-color: var(--accent);
      transform: translateY(-4px);
      box-shadow: 0 8px 25px rgba(99, 102, 241, 0.2);
    }

    .contact-card:hover sl-icon {
      color: var(--accent);
    }

    .contact-card sl-icon {
      font-size: 2.5rem;
      transition: color var(--transition-fast);
    }

    .contact-label {
      font-weight: 600;
      margin-top: var(--space-2);
    }

    .contact-handle {
      font-size: 0.85rem;
      color: var(--text-secondary);
      font-family: var(--font-mono);
    }

    @media (max-width: 768px) {
      .contact-links {
        flex-direction: column;
        align-items: center;
      }

      .contact-card {
        width: 100%;
        max-width: 300px;
      }
    }
  `;

  render() {
    return html`
      <section id="contact">
        <h2 class="section-heading">
          <span class="heading-accent">//</span> Get in Touch
        </h2>
        <p class="contact-intro">Interested in working together? Let's connect.</p>
        <div class="contact-links">
          <a href=${personal.github} target="_blank" rel="noopener" class="contact-card">
            <sl-icon name="github"></sl-icon>
            <span class="contact-label">GitHub</span>
            <span class="contact-handle">@HoldenMorris</span>
          </a>
          <a href=${personal.linkedin} target="_blank" rel="noopener" class="contact-card">
            <sl-icon name="linkedin"></sl-icon>
            <span class="contact-label">LinkedIn</span>
            <span class="contact-handle">morrisholden</span>
          </a>
          ${personal.email
            ? html`
                <a href="mailto:${personal.email}" class="contact-card">
                  <sl-icon name="envelope"></sl-icon>
                  <span class="contact-label">Email</span>
                  <span class="contact-handle">${personal.email}</span>
                </a>
              `
            : ''}
        </div>
      </section>
    `;
  }
}

customElements.define('portfolio-contact', PortfolioContact);
