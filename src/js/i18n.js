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
    downloadBtn: '下载 Windows 版',
    downloadFull: '包含运行环境（推荐）',
    downloadFullDesc: '包含 .NET 8 与 Windows App Runtime，适合直接安装',
    downloadLite: '不含运行环境',
    downloadLiteDesc: '仅包含应用，需自行准备 .NET 8 与 Windows App Runtime',
    githubBtn: 'GitHub 仓库',
    altScreenshot: 'AniMeido 应用截图',
    languageSwitcherLabel: '切换语言',
    pageNavigationLabel: '页面切换',
    pageHomeLabel: '首页',
    pageFeaturesLabel: '功能一览',
    pagePluginsLabel: '插件下载',
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
    pluginsIntro: '基础安装包不包含以下插件。下载后可在 AniMeido 设置中的插件管理区域安装。',
    playerPluginTitle: '在线播放器',
    playerPluginDesc: '提供在线剧集播放、libmpv 播放体验和用户导入的播放源管理。',
    playerPluginRequirement: '需要 AniMeido 1.6.0+',
    playerPluginSize: '约 46 MB',
    aiPluginTitle: 'AI 工作台',
    aiPluginDesc: '提供会话式动画助手、发送前数据授权预览和需确认的结构化变更提案。',
    aiPluginRequirement: '需要 AniMeido 1.7.0+',
    aiPluginSize: '约 1.2 MB',
    aiPluginCaution: '需要用户自行配置受支持的 AI Provider 与 API Key。',
    pluginDownload: '下载插件包',

    logEyebrow: 'UPDATES',
    logTitle: '更新日志',
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
    downloadBtn: 'Download for Windows',
    downloadFull: 'With Runtime (Recommended)',
    downloadFullDesc: 'Includes .NET 8 and Windows App Runtime for direct installation',
    downloadLite: 'Standalone',
    downloadLiteDesc: 'App only. Requires .NET 8 and Windows App Runtime',
    githubBtn: 'GitHub Repo',
    altScreenshot: 'AniMeido App Screenshot',
    languageSwitcherLabel: 'Switch language',
    pageNavigationLabel: 'Page navigation',
    pageHomeLabel: 'Home',
    pageFeaturesLabel: 'Features',
    pagePluginsLabel: 'Plugin downloads',
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
    pluginsIntro: 'These plugins are not included in the base installer. Download them and install them from plugin management in AniMeido settings.',
    playerPluginTitle: 'Online Player',
    playerPluginDesc: 'Adds online episode playback, a libmpv playback experience, and management for user-imported playback sources.',
    playerPluginRequirement: 'Requires AniMeido 1.6.0+',
    playerPluginSize: 'About 46 MB',
    aiPluginTitle: 'AI Workbench',
    aiPluginDesc: 'Adds a conversational anime assistant, pre-send data authorization previews, and structured changes that require confirmation.',
    aiPluginRequirement: 'Requires AniMeido 1.7.0+',
    aiPluginSize: 'About 1.2 MB',
    aiPluginCaution: 'You must configure a supported AI provider and API key.',
    pluginDownload: 'Download plugin',

    logEyebrow: 'UPDATES',
    logTitle: 'Changelog',
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
