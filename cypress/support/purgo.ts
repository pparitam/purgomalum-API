// cypress/support/purgo.ts
export const svc = {
    json: '/service/json',
    plain: '/service/plain',
    contains: '/service/containsprofanity',
  } as const;
  
  export type PurgoJson = { result: string };
  