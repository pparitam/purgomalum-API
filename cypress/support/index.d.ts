/// <reference types="cypress" />

import type { PurgoJson } from './purgo';

declare global {
  namespace Cypress {
    interface Chainable {
      /**
       * Call /service/json with given query params.
       */
      purgoJson(
        query: Record<string, string | number | boolean | undefined>
      ): Chainable<Cypress.Response<PurgoJson>>;

      /**
       * Call /service/containsprofanity?text=...
       * Returns plain text "true" | "false".
       */
      purgoContains(
        text: string
      ): Chainable<Cypress.Response<string>>;

      /**
       * Call /service/plain?text=...
       * Returns the processed text as plain text.
       */
      purgoPlain(
        text: string
      ): Chainable<Cypress.Response<string>>;
    }
  }
}
export {};
