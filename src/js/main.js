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

dots.forEach(dot => {
  dot.addEventListener('click', () => {
    document.getElementById(dot.dataset.target)?.scrollIntoView({ behavior: 'smooth' });
  });
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
  document.querySelectorAll('.dropdown-menu.is-open').forEach(menu => {
    if (!menu.parentElement.contains(e.target)) {
      menu.classList.remove('is-open');
    }
  });
});
