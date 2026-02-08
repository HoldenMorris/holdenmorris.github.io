import { LitElement, html, css } from 'lit';
import '@shoelace-style/shoelace/dist/components/button/button.js';
import '@shoelace-style/shoelace/dist/components/icon/icon.js';
import '@shoelace-style/shoelace/dist/components/icon-button/icon-button.js';

export class PortfolioHero extends LitElement {
  static properties = {
    _typedName: { type: String, state: true },
    _typedRole: { type: String, state: true },
    _showTagline: { type: Boolean, state: true },
    _showCta: { type: Boolean, state: true },
  };

  static styles = css`
    :host {
      display: block;
      min-height: 100vh;
      position: relative;
      overflow: hidden;
    }

    canvas {
      position: absolute;
      inset: 0;
      width: 100%;
      height: 100%;
      z-index: 0;
    }

    /* Dark wave ambient gradient behind content */
    .hero-content {
      position: relative;
      z-index: 1;
      display: flex;
      flex-direction: column;
      justify-content: center;
      min-height: 100vh;
      padding: var(--space-4);
      max-width: 900px;
      margin: 0 auto;
    }

    .hero-content::before {
      content: '';
      position: absolute;
      width: 700px;
      height: 700px;
      background: radial-gradient(
        circle,
        rgba(15, 240, 252, 0.06) 0%,
        rgba(70, 22, 89, 0.04) 40%,
        transparent 70%
      );
      top: 50%;
      left: 30%;
      transform: translate(-50%, -50%);
      pointer-events: none;
    }

    .terminal-prefix {
      font-family: var(--font-mono);
      color: var(--accent);
      font-size: 1.1rem;
      margin-bottom: var(--space-1);
      opacity: 0;
      animation: fadeSlideUp 0.5s 0.3s forwards;
      text-shadow: 0 0 8px rgba(15, 240, 252, 0.5);
    }

    @keyframes fadeSlideUp {
      from { opacity: 0; transform: translateY(20px); }
      to   { opacity: 1; transform: translateY(0); }
    }

    h1 {
      font-family: var(--font-display);
      font-size: clamp(3.2rem, 9vw, 6.5rem);
      font-weight: 700;
      line-height: 1.05;
      margin: 0;
      color: var(--text-bright, #eeeef6);
      text-shadow:
        0 0 5px #fff,
        0 0 12px rgba(15, 240, 252, 0.7),
        0 0 35px rgba(15, 240, 252, 0.35),
        0 0 70px rgba(15, 240, 252, 0.12);
      animation: neonFlicker 4s ease-in-out infinite;
    }

    @keyframes neonFlicker {
      0%   { opacity: 1; }
      4%   { opacity: 0.9; }
      6%   { opacity: 1; }
      7%   { opacity: 0.85; }
      8%   { opacity: 1; }
      48%  { opacity: 1; }
      50%  { opacity: 0.92; }
      52%  { opacity: 1; }
      97%  { opacity: 1; }
      98%  { opacity: 0.88; }
      100% { opacity: 1; }
    }

    .cursor {
      color: var(--accent);
      animation: blink 1s step-end infinite;
      text-shadow: 0 0 8px rgba(15, 240, 252, 0.6);
    }

    @keyframes blink {
      0%, 50%  { opacity: 1; }
      51%, 100% { opacity: 0; }
    }

    .role {
      font-family: var(--font-tech);
      font-size: clamp(0.9rem, 2.5vw, 1.4rem);
      color: var(--accent2, #ff1493);
      margin-top: var(--space-2);
      min-height: 1.5em;
      letter-spacing: 0.18em;
      text-transform: uppercase;
      text-shadow:
        0 0 6px rgba(255, 20, 147, 0.6),
        0 0 18px rgba(255, 20, 147, 0.25);
    }

    .tagline {
      font-size: clamp(1rem, 2vw, 1.2rem);
      color: var(--text-secondary);
      margin-top: var(--space-3);
      opacity: 0;
      transition: opacity 0.6s ease, transform 0.6s ease;
      transform: translateY(10px);
      max-width: 600px;
      line-height: 1.7;
    }

    .tagline.visible {
      opacity: 1;
      transform: translateY(0);
    }

    .hero-cta {
      margin-top: var(--space-4);
      display: flex;
      gap: var(--space-2);
      align-items: center;
      opacity: 0;
      transition: opacity 0.6s ease, transform 0.6s ease;
      transform: translateY(10px);
    }

    .hero-cta.visible {
      opacity: 1;
      transform: translateY(0);
    }

    .scroll-indicator {
      position: absolute;
      bottom: var(--space-4);
      left: 50%;
      animation: bounce 2s infinite;
      color: var(--accent);
      font-size: 1.5rem;
      text-shadow: 0 0 8px rgba(15, 240, 252, 0.4);
    }

    @keyframes bounce {
      0%, 20%, 50%, 80%, 100% { transform: translateX(-50%) translateY(0); }
      40%  { transform: translateX(-50%) translateY(-10px); }
      60%  { transform: translateX(-50%) translateY(-5px); }
    }
  `;

  constructor() {
    super();
    this._typedName = '';
    this._typedRole = '';
    this._showTagline = false;
    this._showCta = false;
    this._fullName = 'Holden Morris';
    this._fullRole = 'Software Developer';
  }

  firstUpdated() {
    this._startMatrixRain();
    this._startTyping();
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    if (this._animFrameId) cancelAnimationFrame(this._animFrameId);
  }

  _startMatrixRain() {
    const canvas = this.renderRoot.querySelector('canvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    const chars = '{}[]<>()=>/;:.0123456789abcdef';
    const fontSize = 14;
    const columns = Math.floor(canvas.width / 20);
    const drops = new Array(columns).fill(1);

    const draw = () => {
      ctx.fillStyle = 'rgba(7, 7, 14, 0.05)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.font = `${fontSize}px JetBrains Mono, monospace`;

      for (let i = 0; i < drops.length; i++) {
        const char = chars[Math.floor(Math.random() * chars.length)];

        /* Alternate between cyan and pink rain columns */
        if (i % 7 === 0) {
          ctx.fillStyle = 'rgba(255, 20, 147, 0.07)';
        } else {
          ctx.fillStyle = 'rgba(15, 240, 252, 0.08)';
        }

        ctx.fillText(char, i * 20, drops[i] * fontSize);

        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i]++;
      }

      this._animFrameId = requestAnimationFrame(draw);
    };

    draw();
  }

  _startTyping() {
    let nameIndex = 0;
    const nameInterval = setInterval(() => {
      nameIndex++;
      this._typedName = this._fullName.substring(0, nameIndex);
      if (nameIndex >= this._fullName.length) {
        clearInterval(nameInterval);
        setTimeout(() => this._typeRole(), 200);
      }
    }, 60);
  }

  _typeRole() {
    let roleIndex = 0;
    const roleInterval = setInterval(() => {
      roleIndex++;
      this._typedRole = this._fullRole.substring(0, roleIndex);
      if (roleIndex >= this._fullRole.length) {
        clearInterval(roleInterval);
        setTimeout(() => { this._showTagline = true; }, 400);
        setTimeout(() => { this._showCta = true; }, 800);
      }
    }, 50);
  }

  _scrollToProjects() {
    const appEl = document.querySelector('portfolio-app');
    const target = appEl?.shadowRoot?.getElementById('projects') ?? document.getElementById('projects');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  render() {
    return html`
      <section id="hero">
        <canvas aria-hidden="true"></canvas>
        <div class="hero-content">
          <p class="terminal-prefix">$ whoami</p>
          <h1>${this._typedName}<span class="cursor">_</span></h1>
          <p class="role">${this._typedRole}</p>
          <p class="tagline ${this._showTagline ? 'visible' : ''}">
            Building software since 1984 -- forty-two years of turning ideas into running code.
          </p>
          <div class="hero-cta ${this._showCta ? 'visible' : ''}">
            <sl-button variant="primary" size="large" @click=${this._scrollToProjects}>
              View my work
              <sl-icon slot="suffix" name="arrow-down"></sl-icon>
            </sl-button>
            <sl-icon-button
              name="github"
              label="GitHub"
              style="font-size: 1.8rem;"
              href="https://github.com/HoldenMorris"
              target="_blank"
            ></sl-icon-button>
          </div>
        </div>
        <div class="scroll-indicator" aria-hidden="true">
          <sl-icon name="chevron-down"></sl-icon>
        </div>
      </section>
    `;
  }
}

customElements.define('portfolio-hero', PortfolioHero);
