// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  // Set this to the final production domain once the .fr migration happens.
  site: 'https://www.higherground.fr',

  i18n: {
    // English is the default/source locale; French is the second.
    // Default locale is NOT prefixed (/about/), the other locale IS (/fr/about/).
    // This keeps existing English URLs stable during the .training -> .fr migration.
    defaultLocale: 'en',
    locales: ['en', 'fr'],
    routing: {
      prefixDefaultLocale: false,
    },
  },
});
