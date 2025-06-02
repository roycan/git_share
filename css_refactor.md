# Simple CSS Refactoring Plan: Page-by-Page Extraction

## Goal
Make each HTML file shorter and easier to read by moving its `<style>` blocks into external CSS files. This approach is:
- **Student-friendly:** Each page has its own CSS file, making it easy to find and edit styles.
- **AI-friendly:** Styles are close to where they are used, and duplication is allowed for clarity.
- **Safe:** No risky global refactors; global styles remain in `styles.css`.

## Step-by-Step Process

### 1. For Each HTML File
- Move the contents of every `<style>...</style>` block into a new CSS file in `css/pages/` (e.g., `css/pages/templates.css` for `templates.html`).
- In the HTML `<head>`, add:
  ```html
  <link rel="stylesheet" href="css/pages/yourfile.css">
  ```
  (Place this after the main `styles.css` link.)
- Remove the original `<style>` block from the HTML file.
- Test the page to ensure it looks the same.

### 2. Allow Some Duplication
- If two pages need the same style, it's okay to have it in both page CSS files for now.
- You can refactor and share styles later if needed, but clarity and safety come first.

### 3. Keep Global Styles Intact
- Do not remove or change anything in `styles.css` or the modular CSS files unless you want to share a style across many pages.
- This ensures no global breakage.

### 4. Test As You Go
- After moving CSS for each page, check that the page still looks correct.
- If something breaks, you can easily move the style back or adjust the external CSS file.

## Checklist: Extraction Progress
- [x] branching-exercise.html
- [x] branching.html
- [x] collaboration.html
- [x] feedback.html
- [x] git-basics.html
- [-] full-glossary.html
- [-] index.html
- [x] intro-to-git.html
- [x] merge-conflicts.html
- [x] quizzes.html
- [x] templates.html
- [x] vscode.html

## Example
For `templates.html`:
1. Move the `<style>...</style>` content to `css/pages/templates.css`.
2. In `templates.html`, add:
   ```html
   <link rel="stylesheet" href="css/pages/templates.css">
   ```
3. Remove the `<style>` block from the HTML.
4. Test the page.

---

This plan is simple, safe, and easy for both students and AI to follow. You can always refactor further in the future if you want to share more styles across pages.
