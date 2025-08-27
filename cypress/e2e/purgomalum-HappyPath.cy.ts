describe('PurgoMalum – Happy paths (commands)', () => {
  it('echoes clean text as JSON', () => {
    cy.purgoJson({ text: 'Hello World' }).then((res) => {
      expect(res.status).to.eq(200);
      expect(String(res.headers['content-type']).toLowerCase()).to.include('application/json');
      expect(res.body).to.have.property('result', 'Hello World');
    });
  });

  it('masks built-in profanity with asterisks by default', () => {
    cy.purgoJson({ text: 'this is shit text' }).then((res) => {
      expect(res.status).to.eq(200);
      const out = res.body.result;
      expect(out).to.include('****');
      expect(out.toLowerCase()).to.not.include('shit');
    });
  });

  it('supports fill_text to replace profanity with custom string', () => {
    cy.purgoJson({ text: 'bad shit here', fill_text: 'REDACTED' }).then((res) => {
      expect(res.status).to.eq(200);
      expect(res.body.result).to.eq('bad REDACTED here');
    });
  });

  it('supports fill_char to mask profanity with a single character', () => {
    cy.purgoJson({ text: 'shit', fill_char: '_' }).then((res) => {
      expect(res.status).to.eq(200);
      expect(res.body.result).to.eq('____');
    });
  });

  it('supports add to treat custom words as profanity', () => {
    cy.purgoJson({ text: 'banana split', add: 'banana' }).then((res) => {
      expect(res.status).to.eq(200);
      expect(res.body.result).to.eq('****** split');
    });
  });

  it('containsprofanity: true/false', () => {
    cy.purgoContains('this is shit').then((res) => {
      expect(res.status).to.eq(200);
      expect(String(res.body).trim().toLowerCase()).to.eq('true');
    });
    cy.purgoContains('hello world').then((res) => {
      expect(res.status).to.eq(200);
      expect(String(res.body).trim().toLowerCase()).to.eq('false');
    });
  });
});
