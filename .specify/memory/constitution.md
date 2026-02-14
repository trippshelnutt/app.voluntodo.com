# VolunTodo Constitution

<!--
SYNC IMPACT REPORT
==================
Version: 1.0.0 -> 1.1.0 (MINOR)
Amended: 2026-02-14
Modified Principles:
  - I. "Code Quality & Standards" -> "Code Quality & Sustainability"
    (added modifiability, sustainability, code-as-documentation)
  - II. "Test-First Development" -> "Test-Driven Development"
    (reframed as enabler for safe modification and sustainability)
  - III. "User Experience Consistency" -> reordered to IV as
    "User Satisfaction & Experience" (reframed around satisfaction)
  - IV. "Performance & Scalability Requirements" -> reordered to V as
    "Performance & Scalability" (thresholds preserved)
Added Sections:
  - III. Security by Design (new principle)
  - VI. Observability & Debuggability (new principle, elevated from
    "Monitoring & Observability" subsection in Development Requirements)
  - Security Practices subsection in Development Requirements
  - Security scan gates added to Quality Gates
Removed Sections:
  - "Monitoring & Observability" subsection in Development Requirements
    (elevated to Principle VI)
Templates Requiring Updates:
  ✅ plan-template.md - no update needed (generic Constitution Check)
  ✅ spec-template.md - no update needed (generic requirements)
  ✅ tasks-template.md - no update needed (security hardening exists)
  ✅ No command files found
  ✅ No README/docs found to update
Follow-up TODOs: None
-->

## Core Principles

### I. Code Quality & Sustainability (MANDATORY)

Every line of code MUST uphold high standards of clarity,
maintainability, modifiability, and consistency. Code is a long-lived
asset; it MUST be written for the next person who reads it, not just
to satisfy the immediate requirement.

**Requirements:**
- All code MUST follow the project's style guide (linting via
  ESLint/Prettier for frontend; Black/isort for Python)
- Code reviews are MANDATORY before merge; minimum one approval
  required
- MUST enforce consistent naming conventions, module organization,
  and architectural patterns
- Documentation MUST be clear and co-located with code (JSDoc,
  docstrings, README sections)
- No code debt accumulation — refactoring tasks MUST be prioritized
  alongside features
- Code duplication MUST NOT exceed 5% in any module; shared logic
  MUST be extracted
- Function/method complexity MUST NOT exceed cyclomatic complexity
  of 10 (measured via tooling)
- Modules MUST maintain low coupling and high cohesion; every module
  MUST have a single clear responsibility
- Code MUST be self-documenting through meaningful names; comments
  MUST explain "why," not "what"
- Shortcuts that create future maintenance burden MUST be captured
  as tech-debt issues and scheduled for resolution within two sprints
- All changes MUST leave the codebase in a better or equal state
  (Boy Scout Rule); no PR may knowingly degrade maintainability

**Rationale**: Sustainable code reduces bugs, accelerates feature
delivery, and ensures all contributors can modify the system
confidently. Low coupling and clear responsibility boundaries make
code easy to change without cascading side effects.

---

### II. Test-Driven Development (NON-NEGOTIABLE)

Tests are the specification. Every feature begins with failing tests.
Tests are the primary enabler for safe modification — if code cannot
be tested, it cannot be safely changed.

**Requirements:**
- All new code MUST have test coverage >= 80% of modified lines
- TDD workflow is MANDATORY: Write failing tests -> Implement ->
  Refactor -> Tests pass
- Three levels of testing MUST be present: unit tests (fastest,
  isolated), integration tests (contract verification), system tests
  (end-to-end user workflows)
- Contract tests MUST verify API boundaries and schema contracts;
  breaking changes MUST fail contracts
- Every bug fix MUST include a regression test
- Test names MUST be descriptive:
  `should_return_error_when_email_is_invalid()` not `test_email()`
- Critical user journeys MUST have end-to-end tests
- Performance tests MUST validate latency and throughput goals
- Tests MUST be treated as first-class code: well-structured,
  readable, and maintained with the same rigor as production code
- Test suites MUST run deterministically; flaky tests MUST be fixed
  immediately and MUST NOT be disabled as a workaround
- Test data MUST be realistic and representative of production
  patterns

**Rationale**: Tests catch regressions early, document expected
behavior, and provide confidence for refactoring. Test-first design
produces better APIs, more modular code, and a codebase that is safe
to modify at any time.

---

### III. Security by Design (MANDATORY)

Security is a first-class requirement, not a polish task. Every
feature MUST be designed, implemented, and reviewed with security as
a primary concern from the outset.

**Requirements:**
- All user input MUST be validated and sanitized at the boundary
  where it enters the system; never trust external data
- Dependency vulnerability scanning MUST run in CI on every PR;
  known critical/high vulnerabilities MUST block merge
- Secrets (API keys, credentials, tokens) MUST NOT be hardcoded;
  MUST use environment variables, secret managers, or vault services
- Authentication and authorization checks MUST be enforced at every
  layer (API gateway, service, database); never rely on a single
  layer
- OWASP Top 10 risks MUST be reviewed during design and code review
  for every user-facing feature
- Principle of least privilege MUST apply to all service accounts,
  API keys, database roles, and user permissions
- Security-sensitive code paths (auth, payments, data export) MUST
  have dedicated review by a security-aware reviewer
- Data at rest and in transit MUST be encrypted using
  industry-standard algorithms
- Session management MUST enforce timeouts, secure cookie flags,
  and token rotation
- Security incidents MUST be logged with sufficient context for
  forensic analysis without exposing sensitive user data in logs

**Rationale**: Security vulnerabilities erode user trust, incur legal
and financial liability, and are exponentially more expensive to fix
after deployment. Designing for security from the start prevents
entire categories of defects.

---

### IV. User Satisfaction & Experience (MANDATORY)

Every user-facing feature MUST deliver a predictable, polished,
unified experience. User satisfaction is the ultimate measure of
product success.

**Requirements:**
- UI components MUST use a centralized design system; no custom
  one-off styling
- Interactions MUST follow established patterns (loading states,
  error messages, confirmation dialogs)
- All user-visible copy MUST be curated for clarity, tone, and
  accessibility
- Accessibility (WCAG 2.1 AA) MUST be verified by automated tools
  and manual testing before release
- Cross-browser and cross-device testing MUST confirm responsive
  behavior
- Error messages MUST be actionable and human-readable; never expose
  raw backend errors
- Performance UX issues (slow pages, janky interactions) are
  regressions EQUAL to functional bugs
- Dark mode, font scaling, and high contrast support MUST be tested
- User feedback loops MUST be established; satisfaction metrics
  (task completion rate, error recovery rate) MUST be tracked
- Features MUST degrade gracefully under adverse conditions (slow
  network, partial service outage) rather than failing silently
  or catastrophically

**Rationale**: Consistent UX builds trust and reduces cognitive load.
Poor UX, even with correct code, drives users away. Accessibility is
a quality requirement, not a nice-to-have. Measuring satisfaction
ensures the team optimizes for real user outcomes.

---

### V. Performance & Scalability (MANDATORY)

Performance is a feature requirement, not a polish task. Systems MUST
meet explicitly defined latency and throughput targets.

**Requirements:**
- API endpoints MUST respond within 200ms p95 latency (excluding
  network); exceptions MUST be justified and documented
- Frontend pages MUST achieve Cumulative Layout Shift (CLS) < 0.1
  and First Contentful Paint (FCP) < 1.5s
- Database queries MUST have execution plans reviewed; no N+1
  queries permitted
- Memory usage MUST be profiled for every feature; MUST NOT increase
  baseline by > 10%
- Caching strategy (HTTP, browser, CDN) MUST be explicitly
  documented for static/dynamic assets
- Load testing MUST verify footprint under expected peak load
  (1000 concurrent users)
- Bundle size MUST be tracked; JavaScript bundles > 300KB (gzipped)
  MUST be justified and itemized
- Monitoring/alerting MUST capture p50, p95, p99 latency; alerts
  triggered if > 50% above baseline

**Rationale**: Slow systems frustrate users, increase operational
costs, and signal hidden bugs. Explicit targets enable data-driven
optimization and prevent performance regressions.

---

### VI. Observability & Debuggability (MANDATORY)

Systems MUST be observable in production and debuggable in
development. When something goes wrong, the time to understand and
resolve the issue MUST be minimized through intentional design.

**Requirements:**
- All errors MUST be logged with structured context: request ID,
  user ID, timestamp, operation name, and relevant input parameters
- Correlation IDs MUST propagate across service boundaries to enable
  distributed tracing of requests end-to-end
- Health check endpoints MUST exist for every deployable service;
  health checks MUST verify actual dependency connectivity
- Metrics MUST be exported to a monitoring dashboard: p50, p95, p99
  latency, error rates, throughput, and resource utilization
- Every error message MUST include enough context to reproduce the
  issue without requiring additional log spelunking
- Code MUST be written for debuggability: small focused functions,
  meaningful variable names, clear data flow, and minimal hidden
  state
- Alerting thresholds MUST be defined alongside performance targets;
  alerts MUST fire before users notice degradation
- Release deployments MUST include a rollback plan and monitoring
  dashboards pre-opened during the rollout window
- Log levels MUST be used consistently: ERROR for failures requiring
  action, WARN for degraded states, INFO for significant events,
  DEBUG for development diagnostics
- Production debugging aids (feature flags, verbose logging toggles,
  diagnostic endpoints) MUST be available without redeployment

**Rationale**: Systems fail. The difference between a minor incident
and a major outage is how quickly the team can understand what went
wrong. Observable, debuggable systems reduce mean time to resolution
and prevent repeat incidents.

---

## Quality Gates

### Pre-Commit Gates (Automated)
- Linting passes locally (ESLint, Prettier, Black)
- TypeScript/language compilation succeeds with zero errors
- No secrets detected in staged files (secret scanning)

### Pre-PR Gates (Automated)
- Unit test suite passes with >= 80% coverage
- Contract tests pass (API schema validation)
- Build succeeds on CI
- Dependency vulnerability scan passes (no critical/high findings)

### Pre-Merge Gates (Automated + Manual)
- All PR checks (lint, tests, build, security scan) pass
- Code review approved by at least one maintainer
- No critical accessibility violations flagged
- Performance regression check passes (bundle size, API latency)
- Integration tests pass
- Security review completed for security-sensitive changes

### Pre-Release Gates (Manual)
- End-to-end tests pass on staging environment
- Performance load test completes within target thresholds
- Accessibility audit passes (WCAG 2.1 AA)
- Security penetration testing completed (for major releases)
- Release notes prepared and approved

---

## Performance Standards

| Metric | Target | Measurement | Review Frequency |
|--------|--------|-------------|------------------|
| API Endpoint Latency (p95) | <= 200ms | Synthetic monitoring (CI perf tests) | Per release |
| Frontend FCP | <= 1.5s | Lighthouse, WebVitals | Per release |
| Frontend CLS | < 0.1 | Lighthouse, real user metrics | Per release |
| Test Coverage | >= 80% | Coverage report (Jest, pytest) | Per PR |
| Bundle Size (gzipped JS) | <= 300KB | Build artifact analysis | Per PR |
| Database Query p95 | <= 50ms | Slow query logs | Weekly review |
| Memory Footprint Increase | <= 10% per feature | Profiling tools | Per feature merge |
| Concurrent User Load | >= 1000 | Load testing before release | Pre-release |

---

## Development Requirements

### Code Review Process
- Every PR MUST have at least one review from a project maintainer
- Reviews MUST address: architecture, testing coverage, performance
  impact, security implications, accessibility, documentation quality
- Merging requires explicit approval; do not auto-merge
- Comments on code style, test coverage, or security concerns are
  NOT optional feedback — they MUST be resolved

### Testing Discipline
- Failing tests are a blocker, not a "known issue"
- Flaky tests MUST be fixed immediately; temporary test disables
  are forbidden
- Test data MUST be realistic and representative of production
  patterns
- Mock external services in unit tests; use contract tests to verify
  real integration

### Security Practices
- Dependency updates MUST be reviewed weekly; critical patches MUST
  be applied within 48 hours
- Access control changes MUST be reviewed by two maintainers
- Security-related bug fixes MUST include regression tests that
  verify the vulnerability is closed
- Third-party libraries MUST be evaluated for maintenance status
  and known vulnerabilities before adoption
- Incident response procedures MUST be documented and rehearsed
  quarterly

### Documentation Standards
- Public APIs MUST have inline documentation (comments explaining
  "why," not "what")
- Feature PRs MUST include updated README or docs links
- Architecture decisions MUST be recorded in decision logs
  (ADR format recommended)
- Troubleshooting guides MUST be maintained for known issues
- Runbooks MUST exist for every operational procedure (deployment,
  rollback, incident response)

---

## Governance

### Amendment Process
1. Issue raised with specific principle concern
2. Proposal drafted with rationale and impact analysis
3. Review by project maintainers (minimum two approvals)
4. Version bumped according to semantic versioning rules
5. All dependent templates updated and validated
6. Change documented in CHANGELOG

### Versioning Policy
- **MAJOR**: Principle removal or fundamental redefinition
  (backward incompatible governance change)
- **MINOR**: New principle or section added; significant expansion
  of requirements; new quality gates
- **PATCH**: Clarifications, wording refinement, metric adjustment,
  non-semantic guidance updates

### Compliance Review
- Constitution adherence MUST be verified in every pre-merge code
  review
- Monthly review of metrics against standards; flag baseline drift
- Quarterly review of principle effectiveness and adjustment needs
- Release retrospectives MUST identify constitution violations and
  correction actions

### Authority & Enforcement
- Constitution supersedes all informal practices and verbal
  agreements
- PRs violating core principles MUST NOT be merged, even if
  time-pressured
- Exceptions MUST be rare and explicitly approved by project lead;
  documented in commit message
- Use `.specify/` artifacts (plans, specs, tasks) as runtime
  guidance for translating principles into work

**Version**: 1.1.0 | **Ratified**: 2026-02-07 | **Last Amended**: 2026-02-14
