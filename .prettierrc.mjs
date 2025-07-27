/** @type {import("prettier").Config} */
export default {
  semi: true,
  singleQuote: true,
  tabWidth: 2,
  useTabs: false,
  plugins: ['prettier-plugin-astro'],
  overrides: [
    {
      files: ['**/*.astro'],
      options: {
        parser: 'astro',
      },
    },
  ],
};
