// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Xanthic',
  tagline: '',
  url: 'https://xanthic.github.io/',
  baseUrl: '/',
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',

  // languages
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },
  
  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: '/',
          includeCurrentVersion: false,
          lastVersion: '1.x',
          showLastUpdateAuthor: true,
          showLastUpdateTime: true,
          versions: {
            '1.x': {
              banner: 'none',
              badge: false,
            }
          },
          editUrl: 'https://github.com/Xanthic/Xanthic.github.io/tree/master/docs/',
        },
        theme: {
          customCss: require.resolve('./static/css/theme.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      debug: true,
      // color
      colorMode: {
        defaultMode: 'dark',
      },
      // sidebar
      sidebar: {
        hideable: false,
        autoCollapseCategories: false,
      },
      // navbar
      navbar: {
        title: 'Xanthic',
        logo: {
          alt: 'Xanthic Logo',
          src: 'img/logo.png',
        },
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'Documentation',
          },
          {
            type: 'docsVersionDropdown',
            position: 'right',
            dropdownActiveClassDisabled: true,
          },
          {
            href: 'https://github.com/Xanthic/cache-api',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [],
        copyright: `Copyright © ${new Date().getFullYear()} Xanthic.`,
      },
      prism: {
        additionalLanguages: ['java', 'kotlin', 'groovy'],
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
