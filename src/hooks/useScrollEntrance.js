import { useEffect, useRef } from 'react';

/** Animate visible content once, including sections loaded after mount. */
export function useScrollEntrance() {
  const root = useRef(null);

  useEffect(() => {
    const container = root.current;
    const motionPreference = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (!container || !('IntersectionObserver' in window)) return;

    const seen = new WeakSet();
    const animations = new Set();
    const observer = new IntersectionObserver((entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        observer.unobserve(entry.target);
        if (motionPreference.matches || !entry.target.animate) continue;

        const direction = entry.target.dataset.entranceDirection === 'right' ? 22 : -22;
        const animation = entry.target.animate(
          [
            { opacity: 0.45, translate: direction + 'px 12px' },
            { opacity: 1, translate: '0px 0px' },
          ],
          { duration: 560, easing: 'cubic-bezier(.16,1,.3,1)' },
        );
        animations.add(animation);
        animation.onfinish = () => animations.delete(animation);
      }
    }, { threshold: 0.12 });

    function observeContent() {
      const elements = container.querySelectorAll(
        '.service-card, .process-step, .stack-card, .origin-card, .sec-title',
      );
      elements.forEach((element, index) => {
        if (seen.has(element)) return;
        seen.add(element);
        element.dataset.entranceDirection = index % 2 ? 'right' : 'left';
        observer.observe(element);
      });
    }

    function cancelMotion() {
      if (motionPreference.matches) {
        animations.forEach((animation) => animation.cancel());
        animations.clear();
      }
    }

    observeContent();
    const mutations = new MutationObserver(observeContent);
    mutations.observe(container, { childList: true, subtree: true });
    motionPreference.addEventListener('change', cancelMotion);
    return () => {
      observer.disconnect();
      mutations.disconnect();
      motionPreference.removeEventListener('change', cancelMotion);
      animations.forEach((animation) => animation.cancel());
    };
  }, []);

  return root;
}
