import { LitElement, html, css } from 'lit';
import '@shoelace-style/shoelace/dist/components/divider/divider.js';

export class PortfolioFooter extends LitElement {
  static styles = css`
    :host {
      display: block;
      padding: var(--space-4);
      position: relative;
    }

    /* Subtle scanline effect on footer */
    :host::before {
      content: '';
      position: absolute;
      inset: 0;
      background:
        repeating-linear-gradient(
          0deg,
          transparent,
          transparent 3px,
          rgba(15, 240, 252, 0.015) 3px,
          rgba(15, 240, 252, 0.015) 4px
        );
      pointer-events: none;
    }

    sl-divider {
      --color: var(--border);
      margin-bottom: var(--space-4);
    }

    .footer-content {
      max-width: 1200px;
      margin: 0 auto;
      display: flex;
      justify-content: space-between;
      align-items: center;
      flex-wrap: wrap;
      gap: var(--space-2);
      font-size: 0.8rem;
      color: var(--text-secondary);
      font-family: var(--font-mono);
    }

    .footer-tagline {
      font-family: var(--font-tech);
      font-size: 0.7rem;
      letter-spacing: 0.1em;
      text-transform: uppercase;
      color: rgba(15, 240, 252, 0.3);
    }

    .footer-right a {
      color: var(--accent);
      text-decoration: none;
      transition: text-shadow var(--transition-fast);
    }

    .footer-right a:hover {
      text-shadow: 0 0 8px rgba(15, 240, 252, 0.5);
      text-decoration: underline;
    }

    @media (max-width: 768px) {
      .footer-content {
        flex-direction: column;
        text-align: center;
      }
    }
  `;

  render() {
    const year = new Date().getFullYear();
    return html`
      <footer>
        <sl-divider></sl-divider>
        <div class="footer-content">
          <span>&copy; ${year} Holden Morris</span>
          <span class="footer-tagline">Coding since 1984 -- still shipping.</span>
          <span class="footer-right">
            Built with
            <a href="https://lit.dev" target="_blank" rel="noopener">Lit</a> +
            <a href="https://shoelace.style" target="_blank" rel="noopener">Shoelace</a>
          </span>
        </div>
      </footer>
    `;
  }
}

customElements.define('portfolio-footer', PortfolioFooter);
