import { LitElement, html, css } from 'lit';
import { RevealMixin } from '../mixins/reveal-mixin.js';
import { projects } from '../data/projects.js';
import '@shoelace-style/shoelace/dist/components/tag/tag.js';
import '@shoelace-style/shoelace/dist/components/button/button.js';
import '@shoelace-style/shoelace/dist/components/icon/icon.js';

export class PortfolioProjects extends RevealMixin(LitElement) {
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

    .projects-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
      gap: var(--space-4);
    }

    .project-card {
      background: var(--bg-card);
      border: 1px solid var(--border);
      border-radius: var(--radius-lg);
      overflow: hidden;
      transition: transform var(--transition-normal), box-shadow var(--transition-normal), border-color var(--transition-normal);
      opacity: 0;
      transform: translateY(20px);
    }

    :host(.revealed) .project-card {
      opacity: 1;
      transform: translateY(0);
    }

    :host(.revealed) .project-card:nth-child(1) { transition-delay: 0ms; }
    :host(.revealed) .project-card:nth-child(2) { transition-delay: 100ms; }
    :host(.revealed) .project-card:nth-child(3) { transition-delay: 200ms; }

    .project-card:hover {
      transform: translateY(-4px);
      border-color: var(--accent);
      box-shadow: 0 8px 30px rgba(99, 102, 241, 0.15);
    }

    .card-titlebar {
      display: flex;
      align-items: center;
      gap: var(--space-2);
      padding: var(--space-1) var(--space-2);
      background: var(--bg-secondary);
      border-bottom: 1px solid var(--border);
    }

    .window-dots {
      display: flex;
      gap: 6px;
    }

    .dot {
      width: 10px;
      height: 10px;
      border-radius: 50%;
    }

    .dot.red { background: #ff5f57; }
    .dot.yellow { background: #febc2e; }
    .dot.green { background: #28c840; }

    .card-filename {
      font-family: var(--font-mono);
      font-size: 0.8rem;
      color: var(--text-secondary);
    }

    .card-media img,
    .card-media video {
      width: 100%;
      height: 200px;
      object-fit: cover;
      display: block;
      background: var(--bg-secondary);
    }

    .card-body {
      padding: var(--space-3);
    }

    .project-title {
      font-size: 1.2rem;
      font-weight: 700;
      margin-bottom: var(--space-1);
    }

    .project-desc {
      font-size: 0.9rem;
      color: var(--text-secondary);
      line-height: 1.6;
    }

    .project-tags {
      display: flex;
      flex-wrap: wrap;
      gap: var(--space-1);
      margin: var(--space-2) 0;
    }

    .project-links {
      display: flex;
      gap: var(--space-2);
      margin-top: var(--space-2);
    }

    @media (max-width: 768px) {
      .projects-grid {
        grid-template-columns: 1fr;
      }
    }
  `;

  render() {
    const featured = projects.filter((p) => p.featured);
    return html`
      <section id="projects">
        <h2 class="section-heading">
          <span class="heading-accent">//</span> Projects
        </h2>
        <div class="projects-grid">
          ${featured.map(
            (project) => html`
              <article class="project-card">
                <div class="card-titlebar">
                  <div class="window-dots">
                    <span class="dot red"></span>
                    <span class="dot yellow"></span>
                    <span class="dot green"></span>
                  </div>
                  <span class="card-filename"
                    >${project.title.toLowerCase().replace(/\s+/g, '-')}.js</span
                  >
                </div>
                <div class="card-media">
                  ${project.videoUrl
                    ? html`<video
                        src=${project.videoUrl}
                        controls
                        playsinline
                        preload="metadata"
                      ></video>`
                    : html`<img
                        src=${project.screenshots[0]}
                        alt="${project.title} screenshot"
                        loading="lazy"
                      />`}
                </div>
                <div class="card-body">
                  <h3 class="project-title">${project.title}</h3>
                  <p class="project-desc">${project.description}</p>
                  <div class="project-tags">
                    ${project.tags.map(
                      (tag) => html`<sl-tag size="small" variant="neutral">${tag}</sl-tag>`,
                    )}
                  </div>
                  <div class="project-links">
                    ${project.repoUrl
                      ? html`
                          <sl-button
                            variant="default"
                            size="small"
                            href=${project.repoUrl}
                            target="_blank"
                          >
                            <sl-icon slot="prefix" name="github"></sl-icon>
                            Source
                          </sl-button>
                        `
                      : ''}
                    ${project.liveUrl
                      ? html`
                          <sl-button
                            variant="primary"
                            size="small"
                            href=${project.liveUrl}
                            target="_blank"
                          >
                            <sl-icon slot="prefix" name="box-arrow-up-right"></sl-icon>
                            Live Demo
                          </sl-button>
                        `
                      : ''}
                  </div>
                </div>
              </article>
            `,
          )}
        </div>
      </section>
    `;
  }
}

customElements.define('portfolio-projects', PortfolioProjects);
