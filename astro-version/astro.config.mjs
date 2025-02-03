// @ts-check
import { defineConfig } from 'astro/config';
import { defaultLayout } from 'astro-default-frontmatter';

import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
  integrations: [react()],
  markdown: {
    remarkPlugins: [
      // @ts-expect-error
      [defaultLayout, "@layouts/general-page.astro"]
    ]
  }
});