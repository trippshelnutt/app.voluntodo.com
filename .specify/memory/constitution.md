# VolunTodo Constitution

<!-- 
SYNC IMPACT REPORT
==================
Version: 1.0.0 (Initial Release)
Created: 2026-02-07
Principles: 4 core principles established
  - Code Quality & Standards
  - Test-First Development (Non-Negotiable)
  - User Experience Consistency
  - Performance & Scalability Requirements
Added Sections: Quality Gates, Performance Standards, Development Requirements
Templates Updated:
  ✅ plan-template.md - Constitution Check gates defined
  ✅ spec-template.md - Requirements aligned with principles
  ✅ tasks-template.md - Testing and code quality task types established
Deferred Items: None
-->

## Core Principles

### I. Code Quality & Standards (MANDATORY)

Every line of code must uphold high standards of clarity, maintainability, and consistency.

**Requirements:**
- All code must follow the project's style guide (linting via ESLint/Prettier for frontend; Black/isort for Python)
- Code reviews are MANDATORY before merge; minimum one approval required
- MUST enforce consistent naming conventions, module organization, and architectural patterns
- Documentation MUST be clear and co-located with code (JSDoc, docstrings, README sections)
- No code debt accumulation—refactoring tasks MUST be prioritized alongside features
- Code duplication MUST NOT exceed 5% in any module; shared logic MUST be extracted
- Function/method complexity MUST NOT exceed cyclomatic complexity of 10 (measured via tooling)

**Rationale**: High-quality code reduces bugs, accelerates feature delivery, and ensures all team members can contribute confidently. Consistent standards enable smooth collaboration and long-term maintainability.

---

### II. Test-First Development (NON-NEGOTIABLE)

Tests are not an afterthought—they are the specification. Every feature begins with failing tests.

**Requirements:**
- All new code MUST have test coverage ≥ 80% of modified lines
- TDD workflow is MANDATORY: Write failing tests → Implement → Refactor → Tests pass
- Three levels of testing MUST be present: unit tests (fastest, isolated), integration tests (contract verification), system tests (end-to-end user workflows)
- Contract tests MUST verify API boundaries and schema contracts—breaking changes MUST fail contracts
- Every bug fix MUST include a regression test
- Test names MUST be descriptive: `should_return_error_when_email_is_invalid()` not `test_email()`
- Critical user journeys MUST have end-to-end tests
- Performance tests MUST validate latency and throughput goals

**Rationale**: Tests catch regressions early, document expected behavior, and provide confidence for refactoring. Test-first design leads to better APIs and more modular code.

---

### III. User Experience Consistency (MANDATORY)

Every user-facing feature MUST deliver a predictable, polished, unified experience.

**Requirements:**
- UI components MUST use a centralized design system; no custom one-off styling
- Interactions MUST follow established patterns (e.g., loading states, error messages, confirmation dialogs)
- All user-visible copy MUST be curated for clarity, tone, and accessibility
- Accessibility (WCAG 2.1 AA) MUST be verified by automated tools and manual testing before release
- Cross-browser and cross-device testing MUST confirm responsive behavior
- Error messages MUST be actionable and human-readable; never expose raw backend errors
- Performance UX issues (slow pages, janky interactions) are regressions EQUAL to functional bugs
- Dark mode, font scaling, and high contrast support MUST be tested

**Rationale**: Consistent UX builds trust and reduces cognitive load for users. Poor UX, even with perfect code, drives away users. Accessibility is a quality requirement, not a nice-to-have.

---

### IV. Performance & Scalability Requirements (MANDATORY)

Performance is a feature requirement, not a polish task. Systems MUST meet explicitly defined latency and throughput targets.

**Requirements:**
- API endpoints MUST respond within 200ms p95 latency (excluding network); if not, MUST be justified
- Frontend pages MUST achieve Cumulative Layout Shift (CLS) < 0.1 and First Contentful Paint (FCP) < 1.5s
- Database queries MUST have execution plans reviewed; no N+1 queries permitted
- Memory usage MUST be profiled for every feature; MUST not increase baseline by > 10%
- Caching strategy (HTTP, browser, CDN) MUST be explicitly documented for static/dynamic assets
- Load testing MUST verify footprint under expected peak load (e.g., 1000 concurrent users)
- Bundle size MUST be tracked; JavaScript bundles > 300KB (gzipped) MUST be justified and itemized
- Monitoring/alerting MUST capture p50, p95, p99 latency; alerts triggered if > 50% above baseline

**Rationale**: Slow systems frustrate users, increase operational costs, and signal hidden bugs. Explicit targets enable data-driven optimization and prevent performance regressions.

---

## Quality Gates

### Pre-Commit Gates (Automated)
- Linting passes locally (ESLint, Prettier, Black)
- TypeScript/language compilation succeeds with zero errors

### Pre-PR Gates (Automated)
- Unit test suite passes with ≥ 80% coverage
- Contract tests pass (API schema validation)
- Build succeeds on CI

### Pre-Merge Gates (Automated + Manual)
- All PR checks (lint, tests, build) pass
- Code review approved by at least one maintainer
- No critical accessibility violations flagged
- Performance regression check passes (bundle size, API latency)
- Integration tests pass

### Pre-Release Gates (Manual)
- End-to-end tests pass on staging environment
- Performance load test completes within target thresholds
- Accessibility audit passes (WCAG 2.1 AA)
- Release notes prepared and approved

---

## Performance Standards

| Metric | Target | Measurement | Review Frequency |
|--------|--------|-------------|------------------|
| API Endpoint Latency (p95) | ≤ 200ms | Synthetic monitoring (CI perf tests) | Per release |
| Frontend FCP | ≤ 1.5s | Lighthouse, WebVitals | Per release |
| Frontend CLS | < 0.1 | Lighthouse, real user metrics | Per release |
| Test Coverage | ≥ 80% | Coverage report (Jest, pytest) | Per PR |
| Bundle Size (gzipped JS) | ≤ 300KB | Build artifact analysis | Per PR |
| Database Query p95 | ≤ 50ms | Slow query logs | Weekly review |
| Memory Footprint Increase | ≤ 10% per feature | Profiling tools | Per feature merge |
| Concurrent User Load | ≥ 1000 | Load testing before release | Pre-release |

---

## Development Requirements

### Code Review Process
- Every PR MUST have at least one review from a project maintainer
- Reviews MUST address: architecture, testing coverage, performance impact, accessibility, documentation quality
- Merging requires explicit approval; do not auto-merge
- Comments on code style or test coverage are NOT optional feedback—they MUST be resolved

### Testing Discipline
- Failing tests are a blocker, not a "known issue"
- Flaky tests MUST be fixed immediately; temporary test disables are forbidden
- Test data MUST be realistic and representative of production patterns
- Mock external services in unit tests; use contract tests to verify real integration

### Documentation Standards
- Public APIs MUST have inline documentation (comments explaining "why," not "what")
- Feature PRs MUST include updated README or docs links
- Architecture decisions MUST be recorded in decision logs (ADR format recommended)
- Troubleshooting guides MUST be maintained for known issues

### Monitoring & Observability
- All errors MUST be logged with context (user ID, request ID, timestamp)
- Performance metrics MUST be exported to monitoring dashboard
- Release deployments MUST include rollback plan and monitoring dashboards pre-opened

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
- **MAJOR**: Principle removal or fundamental redefinition (backward incompatible governance change)
- **MINOR**: New principle or section added; significant expansion of requirements; new quality gates
- **PATCH**: Clarifications, wording refinement, metric adjustment, non-semantic guidance updates

### Compliance Review
- Constitution adherence MUST be verified in every pre-merge code review
- Monthly review of metrics against standards; flag baseline drift
- Quarterly review of principle effectiveness and adjustment needs
- Release retrospectives MUST identify constitution violations and correction actions

### Authority & Enforcement
- Constitution supersedes all informal practices and verbal agreements
- PRs violating core principles MUST NOT be merged, even if time-pressured
- Exceptions MUST be rare and explicitly approved by project lead; documented in commit message
- Use `.specify/` artifacts (plans, specs, tasks) as runtime guidance for translating principles into work

**Version**: 1.0.0 | **Ratified**: 2026-02-07 | **Last Amended**: 2026-02-07
