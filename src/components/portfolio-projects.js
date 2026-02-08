import { LitElement, html, css } from 'lit';
import { RevealMixin } from '../mixins/reveal-mixin.js';
import { projects } from '../data/projects.js';
import '@shoelace-style/shoelace/dist/components/tag/tag.js';
import '@shoelace-style/shoelace/dist/components/button/button.js';
import '@shoelace-style/shoelace/dist/components/icon/icon.js';

export class PortfolioProjects extends RevealMixin(LitElement) {
  static properties = {
    _filter: { state: true },
    _carouselIndices: { state: true },
  };

  constructor() {
    super();
    this._filter = 'all';
    this._carouselIndices = {};
    this._carouselTimers = {};
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    Object.values(this._carouselTimers).forEach(clearInterval);
  }

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

    /* -- Section Header ------------------------------------ */
    .section-header {
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      justify-content: space-between;
      gap: var(--space-3);
      margin-bottom: var(--space-6);
    }

    .section-heading {
      font-family: var(--font-display);
      font-size: clamp(2rem, 5vw, 3rem);
      margin: 0;
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

    /* -- Filter Pills -------------------------------------- */
    .filter-pills {
      display: flex;
      gap: var(--space-1);
      padding: 4px;
      background: var(--bg-secondary);
      border: 1px solid var(--border);
      border-radius: 100px;
    }

    .filter-pill {
      padding: 0.4rem 1.1rem;
      border: none;
      border-radius: 100px;
      background: transparent;
      color: var(--text-secondary);
      font-family: var(--font-tech);
      font-size: 0.72rem;
      font-weight: 500;
      letter-spacing: 0.08em;
      text-transform: uppercase;
      cursor: pointer;
      transition: all var(--transition-fast);
      white-space: nowrap;
    }

    .filter-pill:hover {
      color: var(--accent);
    }

    .filter-pill.active {
      background: rgba(15, 240, 252, 0.12);
      color: var(--accent);
      border: 1px solid rgba(15, 240, 252, 0.4);
      box-shadow:
        0 0 8px rgba(15, 240, 252, 0.2),
        0 0 18px rgba(15, 240, 252, 0.08);
    }

    /* -- Featured Hero Card -------------------------------- */
    .featured-card {
      display: grid;
      grid-template-columns: 1.1fr 1fr;
      background: var(--bg-card);
      border-radius: var(--radius-lg);
      overflow: hidden;
      margin-bottom: var(--space-4);
      position: relative;
      opacity: 0;
      transform: translateY(20px);
      transition:
        transform var(--transition-normal),
        box-shadow var(--transition-normal),
        border-color var(--transition-normal),
        opacity var(--transition-slow);
      border: 1px solid transparent;
    }

    :host(.revealed) .featured-card {
      opacity: 1;
      transform: translateY(0);
    }

    .featured-card::before {
      content: '';
      position: absolute;
      inset: -1px;
      border-radius: var(--radius-lg);
      padding: 1.5px;
      background: linear-gradient(
        135deg,
        var(--accent) 0%,
        rgba(15, 240, 252, 0.3) 30%,
        rgba(255, 20, 147, 0.2) 60%,
        var(--accent2) 100%
      );
      background-size: 200% 200%;
      animation: borderGradientShift 8s ease infinite;
      -webkit-mask:
        linear-gradient(#fff 0 0) content-box,
        linear-gradient(#fff 0 0);
      mask:
        linear-gradient(#fff 0 0) content-box,
        linear-gradient(#fff 0 0);
      -webkit-mask-composite: xor;
      mask-composite: exclude;
      pointer-events: none;
      z-index: 1;
      transition: opacity var(--transition-normal);
      opacity: 0.5;
    }

    .featured-card:hover::before {
      opacity: 1;
    }

    @keyframes borderGradientShift {
      0%   { background-position: 0% 50%; }
      50%  { background-position: 100% 50%; }
      100% { background-position: 0% 50%; }
    }

    .featured-card:hover {
      transform: translateY(-4px);
      box-shadow:
        0 16px 48px rgba(0, 0, 0, 0.5),
        0 0 30px rgba(15, 240, 252, 0.08);
    }

    .featured-media {
      position: relative;
      overflow: hidden;
      min-height: 340px;
      background: var(--bg-secondary);
    }

    .featured-media .carousel-container {
      height: 100%;
    }

    .featured-media img,
    .featured-media video {
      width: 100%;
      height: 100%;
      object-fit: cover;
      display: block;
    }

    .featured-body {
      padding: var(--space-4);
      display: flex;
      flex-direction: column;
      justify-content: center;
    }

    .featured-badge {
      display: inline-flex;
      align-items: center;
      gap: 6px;
      font-family: var(--font-tech);
      font-size: 0.65rem;
      font-weight: 600;
      text-transform: uppercase;
      letter-spacing: 0.12em;
      color: var(--accent2);
      margin-bottom: var(--space-2);
    }

    .featured-badge .badge-dot {
      width: 6px;
      height: 6px;
      border-radius: 50%;
      background: var(--accent2);
      animation: pulseDot 2s ease infinite;
      box-shadow: 0 0 6px rgba(255, 20, 147, 0.5);
    }

    @keyframes pulseDot {
      0%, 100% { opacity: 1; }
      50%      { opacity: 0.4; }
    }

    .featured-title {
      font-family: var(--font-display);
      font-size: clamp(1.4rem, 2.5vw, 1.75rem);
      font-weight: 700;
      margin-bottom: var(--space-2);
      line-height: 1.25;
      color: var(--text-bright, #eeeef6);
    }

    .featured-desc {
      font-size: 0.92rem;
      color: var(--text-secondary);
      line-height: 1.7;
      margin-bottom: var(--space-3);
    }

    /* -- Projects Grid ------------------------------------- */
    .projects-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
      gap: var(--space-4);
    }

    /* -- Standard Card ------------------------------------- */
    .project-card {
      background: var(--bg-card);
      border: 1px solid var(--border);
      border-radius: var(--radius-lg);
      overflow: hidden;
      transition:
        transform var(--transition-normal),
        box-shadow var(--transition-normal),
        border-color var(--transition-normal);
      opacity: 0;
      transform: translateY(20px);
      position: relative;
    }

    :host(.revealed) .project-card {
      opacity: 1;
      transform: translateY(0);
    }

    :host(.revealed) .project-card:nth-child(1) { transition-delay: 0ms; }
    :host(.revealed) .project-card:nth-child(2) { transition-delay: 80ms; }
    :host(.revealed) .project-card:nth-child(3) { transition-delay: 160ms; }
    :host(.revealed) .project-card:nth-child(4) { transition-delay: 240ms; }
    :host(.revealed) .project-card:nth-child(5) { transition-delay: 320ms; }
    :host(.revealed) .project-card:nth-child(6) { transition-delay: 400ms; }

    .project-card:hover {
      transform: translateY(-8px);
      border-color: rgba(15, 240, 252, 0.4);
      box-shadow:
        0 16px 48px rgba(0, 0, 0, 0.4),
        0 0 20px rgba(15, 240, 252, 0.08),
        0 0 0 1px rgba(15, 240, 252, 0.1);
    }

    /* -- Card Titlebar ------------------------------------- */
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

    .dot.red    { background: #ff5f57; box-shadow: 0 0 4px rgba(255, 95, 87, 0.3); }
    .dot.yellow { background: #febc2e; box-shadow: 0 0 4px rgba(254, 188, 46, 0.3); }
    .dot.green  { background: #28c840; box-shadow: 0 0 4px rgba(40, 200, 64, 0.3); }

    .card-filename {
      font-family: var(--font-mono);
      font-size: 0.78rem;
      color: var(--text-secondary);
      flex: 1;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }

    /* -- Category Badge ------------------------------------ */
    .category-badge {
      font-family: var(--font-tech);
      font-size: 0.58rem;
      font-weight: 600;
      text-transform: uppercase;
      letter-spacing: 0.08em;
      padding: 2px 8px;
      border-radius: 100px;
      line-height: 1.6;
      flex-shrink: 0;
    }

    .category-badge.professional {
      background: rgba(255, 20, 147, 0.1);
      color: var(--accent2);
      border: 1px solid rgba(255, 20, 147, 0.3);
    }

    .category-badge.opensource {
      background: rgba(15, 240, 252, 0.08);
      color: var(--accent);
      border: 1px solid rgba(15, 240, 252, 0.3);
    }

    /* -- Card Media / Carousel ----------------------------- */
    .card-media {
      position: relative;
      overflow: hidden;
      background: var(--bg-secondary);
      height: 200px;
    }

    .carousel-container {
      position: relative;
      width: 100%;
      height: 100%;
    }

    .carousel-slide {
      position: absolute;
      inset: 0;
      opacity: 0;
      transition: opacity 0.6s ease;
    }

    .carousel-slide.active {
      opacity: 1;
    }

    .carousel-slide img,
    .carousel-slide video {
      width: 100%;
      height: 100%;
      object-fit: cover;
      display: block;
      transition: transform 0.4s ease;
    }

    .project-card:hover .carousel-slide.active img,
    .project-card:hover .carousel-slide.active video {
      transform: scale(1.04);
    }

    .carousel-dots {
      position: absolute;
      bottom: 10px;
      left: 50%;
      transform: translateX(-50%);
      display: flex;
      gap: 6px;
      z-index: 3;
    }

    .carousel-dot {
      width: 6px;
      height: 6px;
      border-radius: 50%;
      background: rgba(255, 255, 255, 0.35);
      border: none;
      padding: 0;
      cursor: pointer;
      transition: all var(--transition-fast);
    }

    .carousel-dot:hover {
      background: rgba(255, 255, 255, 0.65);
    }

    .carousel-dot.active {
      background: var(--accent);
      transform: scale(1.4);
      box-shadow: 0 0 6px rgba(15, 240, 252, 0.5);
    }

    /* -- Video Play Overlay -------------------------------- */
    .video-overlay {
      position: absolute;
      inset: 0;
      display: flex;
      align-items: center;
      justify-content: center;
      background: rgba(0, 0, 0, 0.3);
      z-index: 2;
      transition: opacity var(--transition-normal);
      cursor: pointer;
    }

    .video-overlay.hidden {
      opacity: 0;
      pointer-events: none;
    }

    .play-icon {
      width: 50px;
      height: 50px;
      background: rgba(15, 240, 252, 0.25);
      border: 1px solid rgba(15, 240, 252, 0.5);
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      backdrop-filter: blur(4px);
      box-shadow:
        0 0 12px rgba(15, 240, 252, 0.3),
        0 0 30px rgba(15, 240, 252, 0.1);
      transition:
        transform var(--transition-fast),
        background var(--transition-fast),
        box-shadow var(--transition-fast);
    }

    .video-overlay:hover .play-icon {
      transform: scale(1.12);
      background: rgba(15, 240, 252, 0.4);
      box-shadow:
        0 0 16px rgba(15, 240, 252, 0.5),
        0 0 40px rgba(15, 240, 252, 0.2);
    }

    .play-icon::after {
      content: '';
      display: block;
      width: 0;
      height: 0;
      border-style: solid;
      border-width: 8px 0 8px 14px;
      border-color: transparent transparent transparent var(--accent);
      margin-left: 3px;
    }

    .project-card:hover .video-overlay:not(.hidden) {
      opacity: 0.4;
    }

    /* -- Card Body ----------------------------------------- */
    .card-body {
      padding: var(--space-3);
    }

    .project-title {
      font-size: 1.15rem;
      font-weight: 700;
      margin-bottom: 6px;
      line-height: 1.3;
      color: var(--text-bright, #eeeef6);
    }

    .project-desc {
      font-size: 0.85rem;
      color: var(--text-secondary);
      line-height: 1.65;
      display: -webkit-box;
      -webkit-line-clamp: 3;
      -webkit-box-orient: vertical;
      overflow: hidden;
    }

    .project-tags {
      display: flex;
      flex-wrap: wrap;
      gap: 6px;
      margin: var(--space-2) 0;
    }

    .project-tags sl-tag::part(base) {
      background: transparent;
      border: 1px solid rgba(15, 240, 252, 0.2);
      color: rgba(15, 240, 252, 0.7);
      font-family: var(--font-mono);
      font-size: 0.72rem;
    }

    .project-links {
      display: flex;
      gap: var(--space-2);
      margin-top: var(--space-2);
    }

    /* -- Responsive ---------------------------------------- */
    @media (max-width: 768px) {
      .featured-card {
        grid-template-columns: 1fr;
      }

      .featured-media {
        min-height: 220px;
      }

      .projects-grid {
        grid-template-columns: 1fr;
      }

      .section-header {
        flex-direction: column;
        align-items: flex-start;
      }
    }

    @media (max-width: 480px) {
      .filter-pills {
        gap: 2px;
        padding: 3px;
      }

      .filter-pill {
        padding: 0.35rem 0.8rem;
        font-size: 0.68rem;
      }

      .featured-body {
        padding: var(--space-3);
      }
    }
  `;

  /* -- Filter logic ---------------------------------------- */

  _setFilter(filter) {
    this._filter = filter;
  }

  _getFilteredProjects() {
    const displayable = projects.filter((p) => p.featured || p.videoUrl);
    if (this._filter === 'all') return displayable;
    return displayable.filter((p) => p.category === this._filter);
  }

  _getFeaturedProject() {
    const filtered = this._getFilteredProjects();
    return filtered.find((p) => p.id === 'securemail') || null;
  }

  _getGridProjects() {
    const featured = this._getFeaturedProject();
    return this._getFilteredProjects().filter((p) => p !== featured);
  }

  /* -- Carousel logic -------------------------------------- */

  _getCarouselIndex(projectId) {
    return this._carouselIndices[projectId] || 0;
  }

  _setCarouselIndex(projectId, index) {
    this._carouselIndices = { ...this._carouselIndices, [projectId]: index };
  }

  _startCarousel(projectId, totalSlides) {
    if (this._carouselTimers[projectId] || totalSlides <= 1) return;
    this._carouselTimers[projectId] = setInterval(() => {
      const current = this._getCarouselIndex(projectId);
      this._setCarouselIndex(projectId, (current + 1) % totalSlides);
    }, 3500);
  }

  _stopCarousel(projectId) {
    if (this._carouselTimers[projectId]) {
      clearInterval(this._carouselTimers[projectId]);
      delete this._carouselTimers[projectId];
    }
  }

  /* -- Video interaction ----------------------------------- */

  _handleVideoPlay(e) {
    const overlay = e.currentTarget;
    const container = overlay.parentElement;
    const video = container.querySelector('video');
    if (video) {
      overlay.classList.add('hidden');
      video.play();
    }
  }

  _handleVideoEnded(e) {
    const video = e.currentTarget;
    const overlay = video.parentElement?.querySelector('.video-overlay');
    if (overlay) overlay.classList.remove('hidden');
  }

  _handleCardHover(e) {
    const card = e.currentTarget;
    const video = card.querySelector('video');
    if (video && video.paused) {
      const overlay = card.querySelector('.video-overlay');
      if (overlay) overlay.classList.add('hidden');
      video.play().catch(() => {});
    }
  }

  _handleCardLeave(e) {
    const card = e.currentTarget;
    const video = card.querySelector('video');
    if (video && !video.paused) {
      video.pause();
      const overlay = card.querySelector('.video-overlay');
      if (overlay) overlay.classList.remove('hidden');
    }
  }

  /* -- Render helpers -------------------------------------- */

  _renderCarousel(project) {
    const slides = [];
    if (project.videoUrl) {
      slides.push({ type: 'video', src: project.videoUrl });
    }
    project.screenshots.forEach((src) => {
      slides.push({ type: 'image', src });
    });

    if (slides.length === 0) return html``;

    const currentIndex = this._getCarouselIndex(project.id);

    if (slides.length > 1) {
      this._startCarousel(project.id, slides.length);
    }

    return html`
      <div class="carousel-container">
        ${slides.map(
          (slide, i) => html`
            <div class="carousel-slide ${i === currentIndex ? 'active' : ''}">
              ${slide.type === 'video'
                ? html`
                    <video
                      src=${slide.src}
                      muted
                      playsinline
                      preload="metadata"
                      @ended=${this._handleVideoEnded}
                    ></video>
                    <div class="video-overlay" @click=${this._handleVideoPlay}>
                      <div class="play-icon"></div>
                    </div>
                  `
                : html`<img src=${slide.src} alt="${project.title}" loading="lazy" />`}
            </div>
          `,
        )}
        ${slides.length > 1
          ? html`
              <div class="carousel-dots">
                ${slides.map(
                  (_, i) => html`
                    <button
                      class="carousel-dot ${i === currentIndex ? 'active' : ''}"
                      @click=${() => {
                        this._stopCarousel(project.id);
                        this._setCarouselIndex(project.id, i);
                        this._startCarousel(project.id, slides.length);
                      }}
                      aria-label="Slide ${i + 1}"
                    ></button>
                  `,
                )}
              </div>
            `
          : ''}
      </div>
    `;
  }

  _renderFeatured(project) {
    if (!project) return '';
    return html`
      <article
        class="featured-card"
        @mouseenter=${this._handleCardHover}
        @mouseleave=${this._handleCardLeave}
      >
        <div class="featured-media"> ${this._renderCarousel(project)} </div>
        <div class="featured-body">
          <span class="featured-badge">
            <span class="badge-dot"></span>
            ${project.company || 'Featured'}
          </span>
          <h3 class="featured-title">${project.title}</h3>
          <p class="featured-desc">${project.description}</p>
          <div class="project-tags">
            ${project.tags.map(
              (tag) => html`<sl-tag size="small" variant="neutral">${tag}</sl-tag>`,
            )}
          </div>
          <div class="project-links">
            ${project.repoUrl
              ? html`
                  <sl-button variant="default" size="small" href=${project.repoUrl} target="_blank">
                    <sl-icon slot="prefix" name="github"></sl-icon>
                    Source
                  </sl-button>
                `
              : ''}
            ${project.liveUrl
              ? html`
                  <sl-button variant="primary" size="small" href=${project.liveUrl} target="_blank">
                    <sl-icon slot="prefix" name="box-arrow-up-right"></sl-icon>
                    View Product
                  </sl-button>
                `
              : ''}
          </div>
        </div>
      </article>
    `;
  }

  _renderCard(project) {
    return html`
      <article
        class="project-card"
        @mouseenter=${this._handleCardHover}
        @mouseleave=${this._handleCardLeave}
      >
        <div class="card-titlebar">
          <div class="window-dots">
            <span class="dot red"></span>
            <span class="dot yellow"></span>
            <span class="dot green"></span>
          </div>
          <span class="card-filename"
            >${project.title.toLowerCase().replace(/\s+/g, '-')}.${project.category === 'professional' ? 'ts' : 'js'}</span
          >
          <span class="category-badge ${project.category}">
            ${project.category === 'professional' ? project.company || 'Pro' : 'OSS'}
          </span>
        </div>
        <div class="card-media"> ${this._renderCarousel(project)} </div>
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
                  <sl-button variant="default" size="small" href=${project.repoUrl} target="_blank">
                    <sl-icon slot="prefix" name="github"></sl-icon>
                    Source
                  </sl-button>
                `
              : ''}
            ${project.liveUrl
              ? html`
                  <sl-button variant="primary" size="small" href=${project.liveUrl} target="_blank">
                    <sl-icon slot="prefix" name="box-arrow-up-right"></sl-icon>
                    Live
                  </sl-button>
                `
              : ''}
          </div>
        </div>
      </article>
    `;
  }

  /* -- Main render ----------------------------------------- */

  render() {
    const featured = this._getFeaturedProject();
    const gridProjects = this._getGridProjects();

    return html`
      <section id="projects">
        <div class="section-header">
          <h2 class="section-heading">
            <span class="heading-accent">//</span> Projects
          </h2>
          <div class="filter-pills" role="toolbar" aria-label="Filter projects by category">
            <button
              class="filter-pill ${this._filter === 'all' ? 'active' : ''}"
              @click=${() => this._setFilter('all')}
              aria-pressed=${this._filter === 'all'}
            >
              All
            </button>
            <button
              class="filter-pill ${this._filter === 'professional' ? 'active' : ''}"
              @click=${() => this._setFilter('professional')}
              aria-pressed=${this._filter === 'professional'}
            >
              Professional
            </button>
            <button
              class="filter-pill ${this._filter === 'opensource' ? 'active' : ''}"
              @click=${() => this._setFilter('opensource')}
              aria-pressed=${this._filter === 'opensource'}
            >
              Open Source
            </button>
          </div>
        </div>

        ${this._renderFeatured(featured)}

        <div class="projects-grid">
          ${gridProjects.map((project) => this._renderCard(project))}
        </div>
      </section>
    `;
  }
}

customElements.define('portfolio-projects', PortfolioProjects);
