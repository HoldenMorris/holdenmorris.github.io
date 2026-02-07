import { LitElement, html, css } from 'lit';

import './portfolio-nav.js';
import './portfolio-hero.js';
import './portfolio-about.js';
import './portfolio-skills.js';
import './portfolio-projects.js';
import './portfolio-experience.js';
import './portfolio-contact.js';
import './portfolio-footer.js';

export class PortfolioApp extends LitElement {
  static styles = css`
    :host {
      display: block;
      min-height: 100vh;
      color: var(--text-primary);
      background: var(--bg-primary);
    }
  `;

  render() {
    return html`
      <portfolio-nav></portfolio-nav>
      <main>
        <portfolio-hero></portfolio-hero>
        <portfolio-about></portfolio-about>
        <portfolio-skills></portfolio-skills>
        <portfolio-projects></portfolio-projects>
        <portfolio-experience></portfolio-experience>
        <portfolio-contact></portfolio-contact>
      </main>
      <portfolio-footer></portfolio-footer>
    `;
  }
}

customElements.define('portfolio-app', PortfolioApp);
