export function scrollToId(id, offset = 72) {
  const el = document.getElementById(id);
  if (!el) return;

  const rect = el.getBoundingClientRect();
  const y = window.scrollY + rect.top - offset;

  window.scrollTo({
    top: Math.max(0, y),
    behavior: 'smooth'
  });
}

export function scrollToPricing() {
  scrollToId('pricing', 72);
}