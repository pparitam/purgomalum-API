// cypress/support/commands.ts
import {svc, PurgoJson } from './purgo';

export interface RequestOptions {
  path: string;
  method?: 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE';
  query?: Record<string, string | number | boolean | undefined>;
  body?: Record<string, unknown> | string;
  headers?: Record<string, string>;
}

class ApiClient {
  private readonly baseUrl: string;
  constructor(baseUrl?: string) {
    this.baseUrl = baseUrl ?? (Cypress.config('baseUrl') as string) ?? '';
  }
  request<T = unknown>({ path, method = 'GET', query, body, headers }: RequestOptions) {
    const url = this.buildUrl(path, query);
    return cy.request<T>({ url, method, body, headers, failOnStatusCode: false });
  }
  private buildUrl(path: string, query?: RequestOptions['query']) {
    const url = new URL(path, this.baseUrl);
    if (query) {
      for (const [k, v] of Object.entries(query)) {
        if (v !== undefined) url.searchParams.set(k, String(v));
      }
    }
    return url.toString();
  }
}

export const apiClient = new ApiClient();

/** ---------- Custom Cypress Commands ---------- */

Cypress.Commands.add('purgoJson', (query: RequestOptions['query']) => {
  return apiClient.request<PurgoJson>({ path: svc.json, query });
});

Cypress.Commands.add('purgoContains', (text: string) => {
  return apiClient.request<string>({ path: svc.contains, query: { text } });
});

Cypress.Commands.add('purgoPlain', (text: string) => {
  return apiClient.request<string>({ path: svc.plain, query: { text } });
});
