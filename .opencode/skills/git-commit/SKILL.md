---
name: git-commit
description: Create well-structured git commits using Conventional Commits with safety checks
license: MIT
compatibility: opencode
metadata:
  audience: developers
  workflow: git
---

## What I do

- Create git commits following the Conventional Commits specification
- Stage changes, review diffs, and craft meaningful commit messages
- Warn about sensitive files before they get committed
- Run pre-commit checks to catch issues early

## When to use me

Use this skill when the user asks you to:
- Make a git commit
- Commit changes
- Save progress to git
- Stage and commit work

## Workflow

Follow these steps in order when creating a commit:

### 1. Check repository status

Run `git status` to see all modified, staged, and untracked files.

### 2. Warn about sensitive files

Before staging anything, scan the file list for potentially sensitive files. **Refuse to stage or commit** these unless the user explicitly confirms:

- `.env`, `.env.*` files
- Files containing `secret`, `credential`, `password`, `token`, or `key` in the name
- `*.pem`, `*.p12`, `*.pfx`, `*.key` files
- `credentials.json`, `service-account.json`, or similar

If any are detected, list them and ask the user to confirm before proceeding.

### 3. Run pre-commit checks

Before committing, check if any of the following are available and run them:

1. If a `lint` script exists in `package.json`, run `npm run lint` (or the project's package manager equivalent)
2. If a `test` script exists in `package.json`, run `npm run test`
3. If a `.husky/pre-commit` or `.git/hooks/pre-commit` hook exists, note that git will run it automatically

If checks fail, report the failures and ask the user how to proceed (fix issues, skip checks, or abort).

### 4. Stage changes

Run `git add` to stage the appropriate files. By default, stage all modified and untracked files (`git add .`), excluding any sensitive files that were not approved. If the user specifies particular files, only stage those.

### 5. Review the diff

Run `git diff --cached` to show exactly what will be committed. Present a summary of the staged changes to the user including:

- Files added, modified, or deleted
- A brief description of what changed in each file

Ask the user to confirm the changes look correct before proceeding.

### 6. Craft the commit message

Use the **Conventional Commits** format:

```
<type>[optional scope]: <description>

[optional body]

[optional footer(s)]
```

**Types:**
- `feat` - A new feature
- `fix` - A bug fix
- `docs` - Documentation only changes
- `style` - Formatting, missing semi-colons, etc. (no code change)
- `refactor` - Code change that neither fixes a bug nor adds a feature
- `perf` - Performance improvement
- `test` - Adding or updating tests
- `build` - Changes to build system or dependencies
- `ci` - Changes to CI configuration
- `chore` - Other changes that don't modify src or test files
- `revert` - Reverts a previous commit

**Rules:**
- The description should be imperative mood ("add feature" not "added feature")
- Keep the first line under 72 characters
- Focus on the **why**, not the **what**
- Add a body for non-trivial changes explaining motivation and context
- Check `git log --oneline -10` first to match the repository's existing style and conventions
- If the commit introduces a breaking change, add `!` after the type/scope and include a `BREAKING CHANGE:` footer

### 7. Create the commit

Run `git commit -m "<message>"` with the crafted message.

Run `git status` afterward to verify the commit succeeded.

Do **not** push to the remote unless the user explicitly asks.

## Important reminders

- Never use `--no-verify` or skip git hooks unless the user explicitly requests it
- Never use `--force` or destructive git commands
- Never amend a commit that has been pushed to a remote
- Never update the git config
- If a commit fails due to a pre-commit hook, fix the issue and create a **new** commit (do not amend)
