const pages = document.querySelectorAll('.page');
const dots = document.querySelectorAll('.dot');
const scroller = document.querySelector('#pages');
const logScroll = document.querySelector('.log-scroll');

function setActivePage(id) {
  pages.forEach(p => p.classList.toggle('is-active', p.id === id));
  dots.forEach(d => d.classList.toggle('is-active', d.dataset.target === id));
}

const observer = new IntersectionObserver((entries) => {
  const visible = entries
    .filter(e => e.isIntersecting)
    .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
  if (visible) setActivePage(visible.target.id);
}, { root: scroller, threshold: [0.4, 0.6, 0.8] });

pages.forEach(p => observer.observe(p));
setActivePage('home');

const initialPage = document.getElementById(window.location.hash.slice(1));
if (initialPage?.classList.contains('page')) {
  requestAnimationFrame(() => {
    scroller.scrollTo({ top: initialPage.offsetTop, behavior: 'auto' });
    setActivePage(initialPage.id);
  });
}

dots.forEach(dot => {
  dot.addEventListener('click', () => {
    const target = document.getElementById(dot.dataset.target);
    target?.scrollIntoView({ behavior: 'smooth' });
    if (target) history.replaceState(null, '', `#${target.id}`);
  });
});

// 语言切换按钮
document.querySelector('.lang-switcher')?.addEventListener('click', toggleLanguage);

const dropdownTrigger = document.querySelector('.dropdown-trigger');
const dropdownMenu = document.querySelector('.dropdown-menu');

function setDownloadMenuOpen(open, returnFocus = false) {
  if (!dropdownTrigger || !dropdownMenu) return;
  dropdownMenu.classList.toggle('is-open', open);
  dropdownTrigger.setAttribute('aria-expanded', String(open));
  if (open) dropdownMenu.querySelector('[role="menuitem"]')?.focus();
  if (!open && returnFocus) dropdownTrigger.focus();
}

dropdownTrigger?.addEventListener('click', () => {
  setDownloadMenuOpen(dropdownTrigger.getAttribute('aria-expanded') !== 'true');
});

dropdownMenu?.querySelectorAll('[role="menuitem"]').forEach(item => {
  item.addEventListener('click', () => setDownloadMenuOpen(false));
});

if (logScroll) {
  logScroll.addEventListener('wheel', (event) => {
    const atTop = logScroll.scrollTop <= 0;
    const atBottom = Math.ceil(logScroll.scrollTop + logScroll.clientHeight) >= logScroll.scrollHeight;
    const up = event.deltaY < 0;
    const down = event.deltaY > 0;
    if ((up && !atTop) || (down && !atBottom)) event.stopPropagation();
  });
}

// 下载下拉菜单 — 点击外部关闭
document.addEventListener('click', (e) => {
  if (dropdownMenu?.classList.contains('is-open') && !dropdownMenu.parentElement.contains(e.target)) {
    setDownloadMenuOpen(false);
  }
});

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && dropdownMenu?.classList.contains('is-open')) {
    event.preventDefault();
    setDownloadMenuOpen(false, true);
  }
});
