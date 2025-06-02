# CSS Styles Migration Plan

This document outlines a safe, step-by-step approach to migrate from a monolithic `styles.css` to a modular CSS architecture, minimizing risk of breaking the site during the transition.

## 1. Preparation
- **Backup**: Commit or copy your current `styles.css` and HTML files.
- **Directory Structure**: Ensure all modular CSS files and folders exist as per the refactor plan.

## 2. Gradual Migration Steps

### Step 1: Import Modular Files Without Removing Old Styles
- At the top of `styles.css`, add all the new `@import` statements for modular CSS files (base, components, pages, utils).
- **Do not** remove any of the original CSS rules yet.
- This allows you to start using new modular styles while keeping legacy styles as a fallback.

### Step 2: Migrate Styles in Batches
- Move related CSS rules from `styles.css` into the appropriate modular file (e.g., sidebar rules to `components/sidebar.css`).
- After each batch, test the site to ensure nothing breaks.
- Remove the migrated rules from `styles.css` only after confirming they exist in the new file and the UI looks correct.

### Step 3: Update HTML
- As you migrate, update HTML files to remove inline styles and use the new class names defined in modular CSS files.
- Add page-specific stylesheet links if needed (for styles in `pages/`).

### Step 4: Clean Up
- Once all styles are migrated and the site looks correct, remove any remaining unused or duplicate rules from `styles.css`.
- Eventually, `styles.css` should only contain the `@import` statements for modular CSS files.

## 3. Testing After Each Step
- **Visual Comparison**: Compare before/after screenshots.
- **Cross-Page Testing**: Check all pages for layout and style issues.
- **Responsive Testing**: Test on different screen sizes.
- **Theme Testing**: Ensure light/dark mode still works.

## 4. Rollback Plan
- If a migration step breaks the site, revert to the last working commit or backup.

## 5. Tips
- Migrate and test in small, logical batches (e.g., sidebar, then buttons, then cards).
- Use browser dev tools to identify which rules are missing or being overridden.
- Keep the migration document updated with notes on what has been moved and tested.

---

By following this plan, you can safely modularize your CSS without breaking your site during the transition.
