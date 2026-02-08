import { LitElement, html, css } from 'lit';
import { RevealMixin } from '../mixins/reveal-mixin.js';
import { skills, skillCategories } from '../data/skills.js';
import '@shoelace-style/shoelace/dist/components/tag/tag.js';
import '@shoelace-style/shoelace/dist/components/icon/icon.js';
import '@shoelace-style/shoelace/dist/components/tooltip/tooltip.js';

export class PortfolioSkills extends RevealMixin(LitElement) {
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

    .skills-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
      gap: var(--space-4);
    }

    .skill-category {
      opacity: 0;
      transform: translateY(15px);
      transition: opacity 0.5s ease, transform 0.5s ease;
    }

    :host(.revealed) .skill-category { opacity: 1; transform: translateY(0); }
    :host(.revealed) .skill-category:nth-child(1) { transition-delay: 0ms; }
    :host(.revealed) .skill-category:nth-child(2) { transition-delay: 100ms; }
    :host(.revealed) .skill-category:nth-child(3) { transition-delay: 200ms; }
    :host(.revealed) .skill-category:nth-child(4) { transition-delay: 300ms; }
    :host(.revealed) .skill-category:nth-child(5) { transition-delay: 400ms; }
    :host(.revealed) .skill-category:nth-child(6) { transition-delay: 500ms; }

    .category-label {
      font-family: var(--font-tech);
      color: var(--text-secondary);
      font-size: 0.75rem;
      letter-spacing: 0.1em;
      text-transform: uppercase;
      margin-bottom: var(--space-2);
      display: flex;
      align-items: center;
      gap: var(--space-1);
    }

    .category-label sl-icon {
      color: var(--accent);
      text-shadow: 0 0 6px rgba(15, 240, 252, 0.4);
    }

    .skill-tags {
      display: flex;
      flex-wrap: wrap;
      gap: var(--space-1);
    }

    /* Neon-outlined pills instead of filled badges */
    sl-tag {
      cursor: default;
      transition: transform var(--transition-fast), box-shadow var(--transition-fast);
    }

    sl-tag::part(base) {
      background: transparent;
      border: 1px solid rgba(15, 240, 252, 0.3);
      color: var(--accent);
      font-family: var(--font-mono);
      font-size: 0.78rem;
    }

    sl-tag:hover {
      transform: scale(1.05);
    }

    sl-tag:hover::part(base) {
      border-color: var(--accent);
      box-shadow:
        0 0 6px rgba(15, 240, 252, 0.3),
        0 0 14px rgba(15, 240, 252, 0.1);
      background: rgba(15, 240, 252, 0.05);
    }

    .proficiency-dot {
      display: inline-block;
      width: 6px;
      height: 6px;
      border-radius: 50%;
      margin-left: 6px;
      background: var(--accent2);
      opacity: var(--prof);
    }
  `;

  render() {
    return html`
      <section id="skills">
        <h2 class="section-heading">
          <span class="heading-accent">//</span> Skills & Tech
        </h2>
        <div class="skills-grid">
          ${Object.entries(skillCategories).map(([key, cat]) => {
            const catSkills = skills.filter((s) => s.category === key);
            if (!catSkills.length) return '';
            return html`
              <div class="skill-category">
                <h3 class="category-label">
                  <sl-icon name=${cat.icon}></sl-icon>
                  ${cat.label}
                </h3>
                <div class="skill-tags">
                  ${catSkills.map(
                    (skill) => html`
                      <sl-tooltip content="${skill.proficiency}% proficiency">
                        <sl-tag size="medium" variant="neutral">
                          ${skill.name}
                          <span
                            class="proficiency-dot"
                            style="--prof: ${skill.proficiency / 100}"
                          ></span>
                        </sl-tag>
                      </sl-tooltip>
                    `,
                  )}
                </div>
              </div>
            `;
          })}
        </div>
      </section>
    `;
  }
}

customElements.define('portfolio-skills', PortfolioSkills);
