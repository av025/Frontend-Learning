// playwright-ct.config.js
import { defineConfig } from '@playwright/experimental-ct-react';

export default defineConfig({
  testDir: './tests',
  use: {
    ctPort: 3000, // jo port chaahe use kar
    ctTemplateDir: 'playwright', // yeh important hai for CRA
  },
});

