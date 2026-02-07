import { LitElement, html, css } from 'lit';

export class PortfolioApp extends LitElement {
  static styles = css`
    :host {
      display: block;
      min-height: 100vh;
      color: var(--text-primary);
      background: var(--bg-primary);
    }

    main {
      max-width: 1200px;
      margin: 0 auto;
      padding: 2rem;
    }

    .hero {
      min-height: 80vh;
      display: flex;
      flex-direction: column;
      justify-content: center;
    }

    .hero h1 {
      font-size: clamp(2.5rem, 6vw, 5rem);
      font-weight: 800;
      margin: 0;
      line-height: 1.1;
    }

    .hero .tagline {
      font-size: clamp(1rem, 2.5vw, 1.5rem);
      color: var(--text-secondary);
      margin-top: 1rem;
    }

    .hero .accent {
      color: var(--accent);
    }
  `;

  render() {
    return html`
      <main>
        <section class="hero">
          <h1>Holden <span class="accent">Morris</span></h1>
          <p class="tagline">Software Developer — coding since 1984</p>
        </section>
      </main>
    `;
  }
}

customElements.define('portfolio-app', PortfolioApp);
