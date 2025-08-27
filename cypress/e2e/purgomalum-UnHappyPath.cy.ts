// cypress/e2e/purgomalum-UnHappyPath.cy.ts
describe('PurgoMalum – Unhappy paths (commands)', () => {
  it("JSON: missing 'text' yields error payload (status 200)", () => {
    cy.purgoJson({} as any).then((res) => {
      expect(res.status).to.eq(200);
      // Depending on implementation: { error: "..."} or XML string
      const bodyStr = typeof res.body === 'string' ? res.body : JSON.stringify(res.body);
      expect(bodyStr.toLowerCase()).to.include('error');
    });
  });

  it("JSON: empty 'text' accepted as empty result OR error", () => {
    cy.purgoJson({ text: '' }).then((res) => {
      if ((res.body as any)?.result !== undefined) {
        expect((res.body as any).result).to.eq('');
      } else {
        const msg = typeof res.body === 'string' ? res.body : JSON.stringify(res.body);
        expect(msg.toLowerCase()).to.include('error');
      }
    });
  });

  it("JSON: 'fill_text' beyond 20 chars returns JSON error", () => {
    cy.purgoJson({
      text: 'this is some test input',
      fill_text: 'this is curiously long replacement text', // > 20
    }).then((res) => {
      expect(res.status).to.eq(200);
      const asStr = typeof res.body === 'string' ? res.body : JSON.stringify(res.body);
      expect(asStr).to.match(/Replacement Text Exceeds Limit/i);
    });
  });

  it("containsprofanity: missing 'text' doesn't 4xx; expect false/empty", () => {
    cy.purgoContains('' as unknown as string).then((res) => {
      expect(res.status).to.eq(200);
      const body = String(res.body).trim().toLowerCase();
      expect(body === 'false' || body === '').to.eq(true);
    });
  });


  it('invalid endpoint returns 404', () => {
    // direct cy.request to show a true non-200 unhappy path
    cy.request({ url: '/service/does-not-exist', failOnStatusCode: false }).then((res) => {
      expect(res.status).to.eq(404);
    });
  });
});
