/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'JWA Platform',
  tagline: 'Enable your video games with advanced gaming concepts',
  url: 'https://jwa-lab.github.io',
  baseUrl: '/platform-docs/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'jwa-lab',
  projectName: 'platform-docs',
  themeConfig: {
    navbar: {
      title: 'JWA_Lab | Platform',
      logo: {
        alt: 'PlayTIX Logo',
        src: 'img/pt-logo-black-s.png',
      },
      items: [
        {
          type: 'doc',
          docId: 'intro',
          position: 'left',
          label: 'Tutorial',
        },
        {to: '/blog', label: 'Blog', position: 'left'},
        {
          href: 'https://github.com/jwa-lab/community-platform',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Tutorial',
              to: '/docs/intro',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              to: '/blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/jwa-lab/community-platform',
            },
            {
              label: 'Help',
              to: '/docs/help'
            }
          ],
        },
        {
          title: 'PlayTIX',
          items: [
            {
              label: 'Home',
              to: 'https://playtix.io/',
            }
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} JWA Lab.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl:
            'https://github.com/jwa-lab/platform-docs/docs',
        },
        blog: {
          showReadingTime: true,
          editUrl:
            'https://github.com/jwa-lab/platform-docs/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
