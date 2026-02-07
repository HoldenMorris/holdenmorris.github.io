/**
 * RevealMixin — adds scroll-triggered reveal animation to a Lit component.
 *
 * Usage:
 *   class MySection extends RevealMixin(LitElement) { ... }
 *
 * Provides:
 *   this._revealed (Boolean, reactive) — true once element enters viewport
 *
 * CSS: define the hidden/revealed states in the component:
 *   :host { opacity: 0; transform: translateY(30px); transition: opacity 0.6s, transform 0.6s; }
 *   :host(.revealed) { opacity: 1; transform: translateY(0); }
 */
export const RevealMixin = (superClass) =>
  class extends superClass {
    static properties = {
      ...superClass.properties,
      _revealed: { type: Boolean, state: true },
    };

    constructor() {
      super();
      this._revealed = false;
    }

    connectedCallback() {
      super.connectedCallback();
      this._observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            this._revealed = true;
            this._observer.disconnect();
          }
        },
        { threshold: 0.15 },
      );
      this._observer.observe(this);
    }

    disconnectedCallback() {
      super.disconnectedCallback();
      this._observer?.disconnect();
    }

    updated(changed) {
      super.updated(changed);
      if (changed.has('_revealed') && this._revealed) {
        this.classList.add('revealed');
      }
    }
  };
