import { useEffect } from 'react';
import { gtag } from '../utils/gtag';

export default function AnalyticsBindings() {
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;
      const a = target.closest('a') as HTMLAnchorElement | null;
      if (!a) return;

      const href = a.getAttribute('href') || '';
      const source = a.getAttribute('data-source') || 'unknown';
      const path = typeof window !== 'undefined' ? window.location.pathname : '';

      // tel: tracking
      if (href.startsWith('tel:')) {
        const phone = href.replace('tel:', '');
        gtag('event', 'click_to_call', {
          phone,
          page_path: path,
          source,
          event_category: 'engagement',
          event_label: phone
        });
      }

      // mailto: tracking
      if (href.startsWith('mailto:')) {
        const email = href.replace('mailto:', '');
        gtag('event', 'click_to_email', {
          email,
          page_path: path,
          source,
          event_category: 'engagement',
          event_label: email
        });
      }
    };

    document.addEventListener('click', handler, true);
    return () => document.removeEventListener('click', handler, true);
  }, []);

  return null;
}