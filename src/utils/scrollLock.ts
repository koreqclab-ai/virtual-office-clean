export function lockScroll() {
  const y = window.scrollY || window.pageYOffset || 0;
  document.documentElement.style.setProperty('--scroll-y', String(y));

  // Chrome iOS friendly scroll lock
  document.documentElement.style.overflow = 'hidden';
  document.body.style.overflow = 'hidden';
  document.body.style.position = 'fixed';
  document.body.style.top = `-${y}px`;
  document.body.style.left = '0';
  document.body.style.right = '0';
  document.body.style.width = '100%';
  document.body.style.touchAction = 'none';
}

export function unlockScroll() {
  const y = parseInt(document.documentElement.style.getPropertyValue('--scroll-y') || '0', 10);

  // Clean up all scroll lock styles
  document.documentElement.style.overflow = '';
  document.body.style.overflow = '';
  document.body.style.position = '';
  document.body.style.top = '';
  document.body.style.left = '';
  document.body.style.right = '';
  document.body.style.width = '';
  document.body.style.touchAction = '';

  // Restore scroll position
  window.scrollTo(0, y);
}