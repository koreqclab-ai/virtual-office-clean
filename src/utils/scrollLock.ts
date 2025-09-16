export const lockScroll = () => {
  const el = document.documentElement;
  const scrollY = window.scrollY || window.pageYOffset;
  el.style.setProperty('--scroll-y', String(scrollY));
  document.body.style.position = 'fixed';
  document.body.style.top = `-${scrollY}px`;
  document.body.style.width = '100%';
};

export const unlockScroll = () => {
  const el = document.documentElement;
  const scrollY = parseInt(el.style.getPropertyValue('--scroll-y') || '0', 10);
  document.body.style.position = '';
  document.body.style.top = '';
  document.body.style.width = '';
  window.scrollTo(0, scrollY);
};