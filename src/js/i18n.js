/**
 * AniMeido 官网 — i18n 多语言支持
 * 支持: zh-CN (简体中文) / en (English)
 * 语言偏好自动持久化到 localStorage
 */

const LANG_STORAGE_KEY = 'animeido-lang';

const translations = {
  'zh-CN': {
    metaTitle: 'AniMeido - 追番补番记录本',
    metaDesc: 'AniMeido - 简洁的本地动漫追番管理应用',

    heroDesc: '专为动漫爱好者打造的本地桌面应用，<br />发现、追踪和管理你喜爱的番剧。',
    heroFeedback: '问题反馈：QQ 3223271148',
    heroNoteCF: '由于 CloudFlare 在国内服务不稳定，下载速度可能较慢。<br />推荐复制下载链接并使用 Motrix 等工具加速下载。',
    heroLangNote: '',
    downloadBtn: '下载 Windows 版',
    downloadFull: '包含运行环境（推荐）',
    downloadFullDesc: '.NET 8 + WindowAppRuntime 2.0.1+ 应用本身，约 200 MB',
    downloadLite: '不含运行环境',
    downloadLiteDesc: '仅应用，约 40 MB，需自行安装 .NET 8 + WindowsAppRuntime 2.0.1',
    githubBtn: 'GitHub 仓库',
    altScreenshot: 'AniMeido 应用截图',
    languageSwitcherLabel: '切换语言',
    pageNavigationLabel: '页面切换',
    pageHomeLabel: '首页',
    pageFeaturesLabel: '功能一览',
    pageChangelogLabel: '更新日志',

    featuresEyebrow: 'ANIMEIDO',
    featuresTitle: '功能一览',
    feature1Title: '番剧浏览',
    feature1Desc: '浏览当前季度新番，按星期分组查看放送计划；按年份与季度筛选往季番剧，快速定位想补的老番。',
    feature2Title: '关注管理',
    feature2Desc: '支持追番、补番、不感兴趣等多种状态，帮助你整理自己的番剧列表与观看计划。',    
    altMascot: '看板娘',
    altMascot2: '看板娘',

    logEyebrow: 'UPDATES',
    logTitle: '更新日志',
    v110: 'v1.1.0',
    v110Date: '2026-06-06',
    v110Item1: '新增关注管理页面，支持追番、补番、不感兴趣、关注、已看完、弃番、屏蔽等多种状态',
    v110Item2: '新增全局搜索、Tag 管理、浏览历史与数据管理相关功能',
    v110Item3: '优化浅色主题适配',
    v101: 'v1.0.1',
    v101Date: '2026-05-22',
    v101Desc: '加入自动更新检查功能',
    v100: 'v1.0.0',
    v100Date: '2026-05-20',
    v100Desc: '番剧浏览+详情+设置',

    langSwitch: 'EN',
  },

  'en': {
    metaTitle: 'AniMeido - Anime Tracking Notebook',
    metaDesc: 'AniMeido - A clean local desktop app for anime tracking and management',

    heroDesc: 'A local desktop app built for anime fans,<br />discover, track and manage your favorite series.',
    heroFeedback: 'Feedback: QQ 3223271148',
    heroNoteCF: 'CloudFlare may be unstable in your region.<br />Consider using a download manager like Motrix.',
    heroLangNote: 'If you are a non-Chinese user interested in my app and need multi-language support, please contact me via email (xan9xxx@gmail.com) / QQ (3223271148).',
    downloadBtn: 'Download for Windows',
    downloadFull: 'With Runtime (Recommended)',
    downloadFullDesc: '.NET 8 + WindowsAppRuntime 2.0.1+ app, ~200 MB',
    downloadLite: 'Standalone',
    downloadLiteDesc: 'App only, ~40 MB. Requires .NET 8 + WindowsAppRuntime 2.0.1',
    githubBtn: 'GitHub Repo',
    altScreenshot: 'AniMeido App Screenshot',
    languageSwitcherLabel: 'Switch language',
    pageNavigationLabel: 'Page navigation',
    pageHomeLabel: 'Home',
    pageFeaturesLabel: 'Features',
    pageChangelogLabel: 'Changelog',

    featuresEyebrow: 'ANIMEIDO',
    featuresTitle: 'Features',
    feature1Title: 'Anime Browsing',
    feature1Desc: 'Browse current-season anime grouped by weekday, or filter past seasons by year and quarter to quickly find older series you want to catch up on.',
    feature2Title: 'Tracking Management',
    feature2Desc: 'Organize anime with multiple states, including watching, plan-to-watch, not interested, following, completed, dropped, and blocked.',    
    altMascot: 'Mascot',
    altMascot2: 'Mascot',

    logEyebrow: 'UPDATES',
    logTitle: 'Changelog',
    v110: 'v1.1.0',
    v110Date: '2026-06-06',
    v110Item1: 'Add tracking system: mark anime as watching, plan-to-watch, or not interested',
    v110Item2: 'Add global search, tag management, browsing history, and data management features',
    v110Item3: 'Optimize light theme adaptation',
    v101: 'v1.0.1',
    v101Date: '2026-05-22',
    v101Desc: 'Add auto-update check feature',
    v100: 'v1.0.0',
    v100Date: '2026-05-20',
    v100Desc: 'Anime browsing + details + settings',

    langSwitch: '中文',
  },
};

/**
 * 获取当前语言
 */
function getLanguage() {
  return localStorage.getItem(LANG_STORAGE_KEY) || 'zh-CN';
}

/**
 * 切换并持久化语言
 */
function setLanguage(lang) {
  localStorage.setItem(LANG_STORAGE_KEY, lang);
  applyLanguage(lang);
}

/**
 * 切换中/英（循环切换）
 */
function toggleLanguage() {
  const next = getLanguage() === 'zh-CN' ? 'en' : 'zh-CN';
  setLanguage(next);
}

/**
 * 将翻译应用到页面
 */
function applyLanguage(lang) {
  const t = translations[lang];
  if (!t) return;

  // <html lang>
  document.documentElement.lang = lang === 'en' ? 'en' : 'zh-CN';

  // <title>
  document.title = t.metaTitle;

  // <meta name="description">
  const metaDesc = document.querySelector('meta[name="description"]');
  if (metaDesc) metaDesc.setAttribute('content', t.metaDesc);

  // [data-i18n] — textContent
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    if (t[key] !== undefined) el.textContent = t[key];
  });

  // [data-i18n-html] — innerHTML (支持 <br> 等)
  document.querySelectorAll('[data-i18n-html]').forEach(el => {
    const key = el.dataset.i18nHtml;
    if (t[key] !== undefined) el.innerHTML = t[key];
  });

  // [data-i18n-alt] — img.alt
  document.querySelectorAll('[data-i18n-alt]').forEach(el => {
    const key = el.dataset.i18nAlt;
    if (t[key] !== undefined) el.alt = t[key];
  });

  // [data-i18n-aria-label] / [data-i18n-title] — accessible labels
  document.querySelectorAll('[data-i18n-aria-label]').forEach(el => {
    const key = el.dataset.i18nAriaLabel;
    if (t[key] !== undefined) el.setAttribute('aria-label', t[key]);
  });
  document.querySelectorAll('[data-i18n-title]').forEach(el => {
    const key = el.dataset.i18nTitle;
    if (t[key] !== undefined) el.setAttribute('title', t[key]);
  });

  // 语言切换按钮本身
  const switcher = document.querySelector('.lang-switcher');
  if (switcher) switcher.textContent = t.langSwitch;

  document.dispatchEvent(new CustomEvent('animeido-languagechange', { detail: { lang } }));
}

// 初始化
document.addEventListener('DOMContentLoaded', () => {
  applyLanguage(getLanguage());
});
