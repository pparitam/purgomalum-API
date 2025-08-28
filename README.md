<h1> Purgomalum API Tests (Cypress + TypeScript)</h1>
<p>Automated API tests for the public <strong>Purgomalum(https://www.purgomalum.com)</strong> microservice using <strong>Cypress (TypeScript)</strong> with <strong>Mochawesome</strong> HTML/JSON reporting. The suite covers happy and unhappy paths and exposes reusable helpers via custom Cypress commands.</p>

<h3>It includes:</h3>
<ul>
<li>Functional tests (TypeScript + Cypress) covering happy and unhappy paths</li>
 <li>Common, reusable utilities via custom Cypress commands</li>
<li>HTML reporting via cypress-mochawesome-reporter</li>
<li>CI/CD (GitHub Actions) to run tests on every push/PR</li>
</ul>

<h3> Tech Stack </h3>
<ul>
  <li>Node <strong>20+</strong></li>
  <li><strong>TypeScript 5</strong></li>
  <li><strong>Cypress 15</strong></li>
  <li><strong>cypress-mochawesome-reporter</strong> (HTML/JSON reports)</li>
</ul>
<h3>Project structure (key files)</h3>
<pre><code>cypress/
  e2e/
    purgomalum-HappyPath.cy.ts
    purgomalum-UnHappyPath.cy.ts
  support/
    e2e.ts                   # reporter/register + commands loader
    commands.ts              # ApiClient + custom cy.* commands
    purgo.ts                 # endpoints + shared types
  reports/                   # HTML reports (CI artifacts)
.github/
  workflows/
    ci.yml              # run Cypress in CI
cypress.config.ts
tsconfig.json
package.json</code></pre>
<h3>Tests covered</h3>
<ul>
  <li>Happy paths</li>
  <li>Unhappy paths</li>
</ul>
<h3> Prerequisites </h3>
<ul>
  <li>Node.js <strong>v20 or newer</strong></li>
  <li>npm</li>
</ul>

<h3>Clone Repo</h3>
<pre><code> git clone https://github.com/pparitam/purgomalum-API.git
</code></pre>

<h3>Install dependency</h3>
<pre><code>npm i
</code></pre>


<h3>Commands</h3>
<ul>
  <li><strong>Run all tests (headless, CI-like)</strong>
    <pre><code>npm run test:ci
</code></pre>
  </li>
  <li><strong>Open Cypress runner (headed GUI)</strong>
    <pre><code>npm run cy:open
</code></pre>
  </li>
  <li><strong>Run a single spec</strong>
    <pre><code>npm run cy:run:happy
npm run cy:run:unhappy
</code></pre>
  </li>
  
<h2><strong>CI: GitHub Actions (auto on push + manual trigger)</strong></h2>  
<h3>How it’s triggered</h3>
<li>The workflow in `.github/workflows/ci.yml` runs on every push/PR and can also be started manually.</li>
<li>Manual run:</li>
<ul>1. Go to <strong>Actions</strong> → <strong>E2E (Cypress).</strong>E2E (Cypress).</ul>
<ul>2. Click <strong>Run workflow,</strong> choose a branch, then <strong>Run</strong>.</ul>

<h3> here to find the HTML report:</h3>

[![E2E (Cypress)](https://github.com/pparitam/purgomalum-API/actions/workflows/ci.yml/badge.svg)](https://github.com/pparitam/purgomalum-API/actions/workflows/ci.yml)
<ul>1. Open the run in <strong>Actions</strong>.</ul>
<ul>2. In the right sidebar under <strong>Artifacts</strong>, download <strong>cypress-artifacts</strong>.</ul>
<ul>3. Unzip and open:
   - `cypress/reports/index.html`.
   - Screenshots/videos (if any) are in `cypress/screenshots/` and `cypress/videos/`.


   -----
<h1>Part 2: Questions</h1>
  <h4>1.      How long did you spend on the technical test? What would you add to your solution if you had more time? If you didn't spend much time on the technical test then use this as an opportunity to explain what you would add?</h4>
    <dl><dt>Ans: Time spent: ~5-6 hours total (setup, happy/unhappy tests, custom Cypress commands, CI, reporting and README.md file).</dt>
    </dl>
    <dl><dt>If I had more time, I’d add:</dt></dl>
      <dl><dt> <dd> - Performance tests with k6: load/stress profiles, SLO thresholds (p95 latency)</dd></dt></dl>
      <dl><dt> <dd> - Broader functional coverage: more Happy/Unhappy scenarios and Schema validation</dd></dt></dl>
      <dl><dt> <dd> - Richer reporting dashboard)</dd></dt></dl>
<h4>2. Please describe yourself using JSON</h4>
<pre><code>
  {
  "name": "Parita Patel",
  "role": "QA Engineer",
  "location": "United Kingdom",
  "experienceYears": 10,
  "skills": [
    "API testing",
    "End-to-end testing",
    "Backend validation",
    "Test automation",
    "Page Object Model (POM)",
    "BDD",
    "Contract/schema validation",
    "Performance testing",
    "Accessibility testing (WCAG)",
    "Visual regression testing",
    "CI/CD pipelines",
    "Agile Scrum",
    "Test strategy & reporting",
    "Data validation",
    "Problem-solving",
    "Communication",
    "Time management",
    "Leadership & mentoring"
  ],
  "tools": [
    "Cypress",
    "Playwright",
    "Behat",
    "Cucumber",
    "Postman",
    "k6",
    "JMeter",
    "Applitools",
    "Percy",
    "Pa11y",
    "Sitemorse",
    "Jira",
    "Xray",
    "Jenkins",
    "TeamCity",
    "GitHub Actions",
    "Azure DevOps",
    "Datadog",
    "AWS",
    "Acquia Cloud",
    "Salesforce",
    "Sitecore",
    "Drupal",
    "Magento",
    "WordPress"
  ],
  "languages": [
    "TypeScript", 
    "JavaScript", 
    "PHP", 
    "SQL"
  ]
  "education": "MSc Project Management (Distinction), University of Northampton, UK.",
  "certifications": [
    "ISTQB Foundation", 
    "ISTQB Agile Foundation Extension"
  ],
}
</code></pre>
<h4>3. What’s your approach to performance tests for the service you automated?</h4>
<dl><dt>Objectives</dt></dl>
<dl><dt><dd>
- Guard basic SLOs (e.g., error rate < 1%, p95 latency < 600ms).</dd></dt></dl>
<dl><dt><dd>
- Detect regressions early, validate capacity regularly, and explore limits occasionally.
</dd></dt></dl>

<dl><dt>Workload model</dt></dl>
<dl><dt><dd>- Model real usage by mixing endpoints </dd></dt></dl>

<dl><dt><dd>- Use small, varied inputs (clean text, profane text, fill_text, fill_char), and a few edge cases.</dd></dt></dl>

<dl><dt>Test types</dt></dl>
<dl><dt><dd>- Smoke: 1 VU, short run to validate 200s + content checks.</dd></dt></dl>
<dl><dt><dd>- Load: ramp 1→10 VUs, steady 3–5 min; thresholds on p95 latency & error rate.</dd></dt></dl>
