// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
    title: 'Subsquid',
    tagline: 'Dinosaurs are cool',
    url: 'https://your-docusaurus-test-site.com',
    baseUrl: '/',
    onBrokenLinks: 'throw',
    onBrokenMarkdownLinks: 'warn',
    favicon: 'img/favicon.ico',
    staticDirectories: ['static'],

    // GitHub pages deployment config.
    // If you aren't using GitHub pages, you don't need these.
    organizationName: 'subsquid', // Usually your GitHub org/user name.
    projectName: 'squid', // Usually your repo name.

    // Even if you don't use internalization, you can use this field to set useful
    // metadata like html lang. For example, if your site is Chinese, you may want
    // to replace "en" with "zh-Hans".
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
                    sidebarPath: require.resolve('./sidebars.js'),
                    // Please change this to your repo.
                    // Remove this to remove the "edit this page" links.
                    editUrl:
                        'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
                },
                blog: {
                    showReadingTime: true,
                    // Please change this to your repo.
                    // Remove this to remove the "edit this page" links.
                    editUrl:
                        'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
                },
                theme: {
                    customCss: require.resolve('./src/css/custom.css'),
                },
            }),
        ],
    ],

    themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
        ({
            navbar: {
                logo: {
                    alt: 'My Site Logo',
                    src: 'img/logo.svg',
                },
                items: [],
            },
            footer: {
                style: 'dark',
                links: [
                    {
                        title: 'Docs',
                        items: [
                            {
                                label: 'Tutorial',
                                to: '/docs/overview',
                            },
                        ],
                    },
                    {
                        title: 'Community',
                        items: [
                            {
                                label: 'Stack Overflow',
                                href: 'https://stackoverflow.com/questions/tagged/docusaurus',
                            },
                            {
                                label: 'Discord',
                                href: 'https://discordapp.com/invite/docusaurus',
                            },
                            {
                                label: 'Twitter',
                                href: 'https://twitter.com/docusaurus',
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
                                href: 'https://github.com/facebook/docusaurus',
                            },
                        ],
                    },
                ],
                copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
            },
            prism: {
                theme: lightCodeTheme,
                darkTheme: {
                    ...darkCodeTheme,
                    plain: {
                        color: "var(--fg-base--default)",
                        backgroundColor: "var(--bg-base--indistinguishable)"
                    }
                },
            },
        }),

    plugins: [
        async function myPlugin(context, options) {
            return {
                name: "docusaurus-tailwindcss",
                configurePostCss(postcssOptions) {
                    // Appends TailwindCSS and AutoPrefixer.
                    postcssOptions.plugins.push(require("tailwindcss"));
                    postcssOptions.plugins.push(require("autoprefixer"));
                    return postcssOptions;
                },
            };
        },

        // function loaders(context, options) {
        //   /** @type {import('@docusaurus/types').Plugin} */
        //   return {
        //     name: 'loaders',
        //     configureWebpack: (config, isServer) => {
        //       console.log(JSON.stringify(config.resolve.fallback))
        //       return {
        //         ...config,
        //         resolve: {
        //           ...config.resolve,
        //           fallback: { "path": false, "buffer": false, "assert": false, "fs": false, ...config.resolve.fallback }
        //         }
        //       };
        //     },
        //   };
        // },

        // function customPlugin(context, options) {
        //     return {
        //         name: 'custom-docusaurus-plugin',
        //         // eslint-disable-next-line
        //         configureWebpack(config, isServer, utils) {
        //             console.log('isServer: ', isServer);
        //             console.log('process.env: ', process.env);
        //             return {
        //                 resolve: {
        //                     alias: {
        //                         path: require.resolve('path-browserify'),
        //                     },
        //                     fallback: {
        //                         fs: false,
        //                         assert: false,
        //                         buffer: false
        //                     },
        //                 },
        //             };
        //         },
        //     };
        // }
    ]
};

module.exports = config;
