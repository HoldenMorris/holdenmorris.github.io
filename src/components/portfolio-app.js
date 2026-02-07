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
        <portfolio-hero id="hero"></portfolio-hero>
        <portfolio-about id="about"></portfolio-about>
        <portfolio-skills id="skills"></portfolio-skills>
        <portfolio-projects id="projects"></portfolio-projects>
        <portfolio-experience id="experience"></portfolio-experience>
        <portfolio-contact id="contact"></portfolio-contact>
      </main>
      <portfolio-footer></portfolio-footer>
    `;
  }
}

customElements.define('portfolio-app', PortfolioApp);
