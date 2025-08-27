import { defineConfig } from 'cypress';
import mochawesome from 'cypress-mochawesome-reporter/plugin';

export default defineConfig({
  video: false,
  retries: { runMode: 2, openMode: 0 },

  reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
    reportDir: 'cypress/reports',
    overwrite: true,
    html: true,
    json: true,
    charts: true,
    reportPageTitle: 'API Test Report',
    embeddedScreenshots: true,
  },

  e2e: {
    baseUrl: 'https://www.purgomalum.com',
    specPattern: 'cypress/e2e/**/*.cy.ts',
    supportFile: 'cypress/support/e2e.ts',
    experimentalRunAllSpecs: true,
    setupNodeEvents(on, config) {
      mochawesome(on, config);
      return config;
    },
  },
});
