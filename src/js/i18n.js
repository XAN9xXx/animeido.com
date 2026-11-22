/**
 * AniMeido 官网 — i18n 多语言支持
 * 支持: zh-CN (简体中文) / en (English)
 * 语言偏好自动持久化到 localStorage
 */

const LANG_STORAGE_KEY = 'animeido-lang';

const translations = {
  'zh-CN': {
    metaTitle: 'AniMeido - 个人动画行动中心',
    metaDesc: 'AniMeido - 集放送日历、补番计划、个人档案与本地推荐于一体的 Windows 动画管理应用',

    heroDesc: '从放送日历到个人档案，<br />在本地规划、记录并回顾你的动画生活。',
    heroFeedback: '问题反馈：QQ 3223271148',
    heroNoteCF: '由于 CloudFlare 在国内服务不稳定，下载速度可能较慢。<br />推荐复制下载链接并使用 Motrix 等工具加速下载。',
    heroLangNote: '',
    downloadBtn: '下载 Windows x64 版 · 3.0.0',
    githubBtn: 'GitHub 仓库',
    altScreenshot: 'AniMeido 应用截图',
    languageSwitcherLabel: '切换语言',
    pageNavigationLabel: '页面切换',
    pageHomeLabel: '首页',
    pageFeaturesLabel: '功能一览',
    pagePluginsLabel: '可选插件',
    pageChangelogLabel: '更新日志',

    featuresEyebrow: 'ANIMEIDO',
    featuresTitle: '功能一览',
    feature1Title: '放送日历与番剧库',
    feature1Desc: '按星期浏览当前季放送，按年份和季度探索往季作品，并通过搜索、Tag 与人物快速定位番剧。',
    feature2Title: '今天与补番计划',
    feature2Desc: '集中查看今日放送、观看进度和待办计划，并使用 Windows 原生通知安排多个补番提醒。',
    feature3Title: '个人动画档案馆',
    feature3Desc: '保存评分、笔记、标签、观看感想与截图，查看统计并生成属于自己的年度回顾。',
    feature4Title: '本地可解释推荐',
    feature4Desc: '根据本地追番、评分和收藏 Tag 生成推荐，展示具体依据，并允许随时纠正偏好。',
    altMascot: '看板娘',
    altMascot2: '看板娘',

    pluginsEyebrow: 'EXTENSIONS',
    pluginsTitle: '可选插件',
    pluginsIntro: '在「设置 → 插件管理」中可以安装本地插件包。追番、档案和截图无需安装插件。',
    playerPluginTitle: '在线播放器',
    playerPluginStatus: '3.0.0 暂停提供',
    playerPluginDesc: '当前没有可用播放源。升级后旧播放器插件会停用，已有观看记录和播放器设置保留。',

    logEyebrow: 'UPDATES',
    logTitle: '更新日志',
    v300Item1: 'Windows x64 改用一个安装包，不再区分 Full 和 Lite。装好后可在应用内更新。',
    v300Item2: '从 2.x 升级：完全退出旧版，安装并打开新版，再按提示卸载旧版。追番状态、评分、笔记和截图会保留。',
    v300Item3: '首次迁移旧记录时请联网，以便匹配作品。若连接中断，恢复网络后在原窗口点「重试」即可。',
    v300Item5: '暂停在线播放，保留观看记录；2.x 从此停止支持。',
    v211: 'v2.1.1',
    v211Date: '2026-08-27',
    v211Item1: '修复使用自建 Bangumi Archive 时部分封面因图片端口丢失而无法加载的问题',
    v211Item2: '更新图片相关缓存版本，自动避开已缓存的错误封面地址',
    v210: 'v2.1.0',
    v210Date: '2026-08-12',
    v210Item1: '自建部署 Bangumi Archive，改善浏览体验',
    v210Item2: '改进封面加载、缓存与失败重试，减少空白封面',
    v210Item3: '修复页面切换时的重复加载和迟到数据更新',
    v200: 'v2.0.0',
    v200Date: '2026-08-07',
    v200Item1: '新增今天页、观看进度、补番计划与 Windows 原生提醒',
    v200Item2: '新增个人动画档案馆、感想、统计、年度回顾与全局截图管理',
    v200Item3: '新增本地可解释动画推荐',
    v200Item4: '完善可安装插件系统，可选插件在独立 PluginHost 进程运行',
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
    metaTitle: 'AniMeido - Personal Anime Action Center',
    metaDesc: 'AniMeido - A Windows anime manager for broadcast schedules, watch plans, personal archives, and local recommendations',

    heroDesc: 'From broadcast schedules to your personal archive,<br />plan, record, and revisit your anime life locally.',
    heroFeedback: 'Feedback: QQ 3223271148',
    heroNoteCF: 'CloudFlare may be unstable in your region.<br />Consider using a download manager like Motrix.',
    heroLangNote: 'If you are a non-Chinese user interested in my app and need multi-language support, please contact me via email (xan9xxx@gmail.com) / QQ (3223271148).',
    downloadBtn: 'Download for Windows x64 · 3.0.0',
    githubBtn: 'GitHub Repo',
    altScreenshot: 'AniMeido App Screenshot',
    languageSwitcherLabel: 'Switch language',
    pageNavigationLabel: 'Page navigation',
    pageHomeLabel: 'Home',
    pageFeaturesLabel: 'Features',
    pagePluginsLabel: 'Optional Plugins',
    pageChangelogLabel: 'Changelog',

    featuresEyebrow: 'ANIMEIDO',
    featuresTitle: 'Features',
    feature1Title: 'Schedule and Anime Library',
    feature1Desc: 'Browse current broadcasts by weekday, explore past seasons, and find titles through search, tags, and people.',
    feature2Title: 'Today and Watch Plans',
    feature2Desc: 'See today\'s broadcasts, progress, and plans together, with multiple reminders delivered through Windows notifications.',
    feature3Title: 'Personal Anime Archive',
    feature3Desc: 'Keep ratings, notes, tags, impressions, and screenshots, then review statistics and annual summaries.',
    feature4Title: 'Explainable Local Recommendations',
    feature4Desc: 'Generate recommendations from local tracking, ratings, and saved tags, with visible reasons and adjustable preferences.',
    altMascot: 'Mascot',
    altMascot2: 'Mascot',

    pluginsEyebrow: 'EXTENSIONS',
    pluginsTitle: 'Optional Plugins',
    pluginsIntro: 'Install local plugin packages in Settings → Plugin Management. Tracking, archives and screenshots work without plugins.',
    playerPluginTitle: 'Online Player',
    playerPluginStatus: 'Unavailable in 3.0.0',
    playerPluginDesc: 'There are no working playback sources. Upgrading disables the old player plugin and keeps your watch history and player settings.',

    logEyebrow: 'UPDATES',
    logTitle: 'Changelog',
    v300Item1: 'One Windows x64 installer replaces Full and Lite. Future updates are available in the app.',
    v300Item2: 'Upgrading from 2.x? Quit the old app, install and open the new version, then follow the prompt to uninstall the old one. Your tracking status, ratings, notes and screenshots are kept.',
    v300Item3: 'The first time you migrate old records, connect to the internet so AniMeido can match them to the right titles. If the connection drops, reconnect and select Retry in the same window.',
    v300Item5: 'Online playback is paused. Your watch history is kept. Support for 2.x has ended.',
    v211: 'v2.1.1',
    v211Date: '2026-08-27',
    v211Item1: 'Fix missing covers caused by dropping the custom image port when using the self-hosted Bangumi Archive',
    v211Item2: 'Refresh image-related cache versions to bypass previously cached incorrect cover URLs',
    v210: 'v2.1.0',
    v210Date: '2026-08-12',
    v210Item1: 'Prefer the self-hosted Bangumi Archive and fall back to the online API on failure',
    v210Item2: 'Improve cover loading, caching, and retry behavior to reduce blank covers',
    v210Item3: 'Fix duplicate loading and stale updates during page navigation',
    v200: 'v2.0.0',
    v200Date: '2026-08-07',
    v200Item1: 'Add the Today page, watch progress, watch plans, and native Windows reminders',
    v200Item2: 'Add personal archives, impressions, statistics, annual reviews, and global screenshot management',
    v200Item3: 'Add local, explainable anime recommendations',
    v200Item4: 'Complete the installable plugin system with optional plugins running in separate PluginHost processes',
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
