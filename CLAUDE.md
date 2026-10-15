@AGENTS.md

# Tailwind v4 rules

- Never put a negative bottom margin (`-mb-*`, `-my-*`) on an item inside a `space-y-*` parent. In v4, `space-y-*` puts its gap as margin-bottom on each item, so `-mb-8` replaces the gap and the next block slides under it. To make a gap smaller, use a smaller positive margin (`mb-6`). `npm run build` and `npm run typecheck` fail on this (scripts/check-classes.mjs).
- Before you say a layout change is done, check it in the browser in the state where the element shows (for example, with a study profile set for "Your courses").
