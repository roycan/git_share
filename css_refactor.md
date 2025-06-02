# CSS Refactoring Plan for Git & GitHub Classroom Companion Website

## 1. Current Structure Analysis

Based on analysis of the website, here's the current CSS structure:

- **Main CSS file**: `css/styles.css` - Contains global styles
- **Inline CSS**: Each HTML page has its own page-specific styles in `<style>` tags
- **CSS Variables**: Using CSS variables (e.g., `--background`, `--primary`) for theming
- **External Libraries**: `remixicon` for icons

### Pages with Significant Inline CSS:
- `templates.html` - Resource cards, tabs, grid layout
- `intro-to-git.html` - Assignment display formatting
- `branching-exercise.html` - Similar to intro-to-git.html

## 2. Proposed New Structure

```
css/
├── styles.css                  # Main entry point, imports other files
├── base/
│   ├── variables.css           # CSS variables for colors, spacing, etc.
│   ├── typography.css          # Text styles, headers, paragraphs
│   ├── reset.css               # CSS reset/normalization
│   └── layout.css              # Basic layout structure
├── components/
│   ├── buttons.css             # Button styles including download-btn
│   ├── cards.css               # Resource cards
│   ├── sidebar.css             # Sidebar navigation
│   ├── tabs.css                # Tab navigation system
│   └── user-profile.css        # User profile components
├── pages/
│   ├── templates.css           # Page-specific styles for templates
│   ├── assignment.css          # Shared styles for assignment pages
│   └── guides.css              # Styles for guide pages
└── utils/
    ├── themes.css              # Light/dark mode
    └── animations.css          # Any animations used
```

## 3. Component Extraction Strategy

Extract components in this order (prioritizing reused components):

1. **Base Elements** (variables, typography, layout)
2. **Navigation Components** (sidebar, top-nav)
3. **Card Components** (resource-item)
4. **Interactive Elements** (buttons, tabs)
5. **Page-Specific Styles** (templates, assignments)

## 4. File Dependencies & Imports

```css
/* styles.css - Main entry point */
@import 'base/variables.css';
@import 'base/reset.css';
@import 'base/typography.css';
@import 'base/layout.css';

@import 'utils/themes.css';
@import 'utils/animations.css';

@import 'components/sidebar.css';
@import 'components/buttons.css';
@import 'components/cards.css';
@import 'components/tabs.css';
@import 'components/user-profile.css';

@import 'pages/templates.css';
@import 'pages/assignment.css';
@import 'pages/guides.css';
```

## 5. Implementation Steps

### Phase 1: Setup & Base Elements

1. Create the directory structure described above
2. Create `base/variables.css` with all CSS variables
3. Create `base/reset.css` for normalization
4. Create `base/typography.css` for text styles
5. Create `base/layout.css` for layout containers

### Phase 2: Component Extraction

6. Extract `components/sidebar.css` from all pages
7. Extract `components/buttons.css` (download-btn, action-button, etc.)
8. Extract `components/cards.css` (resource-item and related classes)
9. Extract `components/tabs.css` (filter-tabs and tab-content)
10. Extract `components/user-profile.css` (user profile, avatar, etc.)

### Phase 3: Page-Specific Styles

11. Create `pages/templates.css` with remaining templates.html styles
12. Create `pages/assignment.css` for shared intro-to-git.html and branching-exercise.html styles
13. Create `pages/guides.css` for student guides pages

### Phase 4: HTML Cleanup & Integration

14. Update `styles.css` to import all the new CSS files
15. Remove inline CSS from HTML files and add page-specific stylesheet links where needed
16. Test each page thoroughly after changes

### Phase 5: Optimization & Cleanup

17. Remove any duplicate styles
18. Ensure consistency across all components
19. Add comments for maintainability

## 6. Testing Strategy

1. **Visual Comparison**: Take screenshots before and after for comparison
2. **Cross-Page Testing**: Test all pages to ensure styles are applied correctly
3. **Responsive Testing**: Check all screen sizes to ensure responsive behavior is maintained
4. **Theme Testing**: Ensure light/dark mode switching still works

## 7. Rollback Plan

1. Keep a backup of all original HTML files with inline CSS
2. Commit before starting the refactoring
3. If issues arise, roll back to the previous commit

## 8. Example Implementation

Here's an example of how `cards.css` might look after extraction:

```css
/* components/cards.css */

/* Resource Cards */
.resources-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 1.5rem;
  margin-bottom: 2rem;
}

.resource-item {
  background-color: var(--background);
  border: 1px solid var(--border);
  border-radius: 0.5rem;
  overflow: hidden;
  transition: transform 0.2s, box-shadow 0.2s;
}

.resource-item:hover {
  transform: translateY(-4px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

/* Card Header */
.resource-header {
  padding: 1.25rem;
  display: flex;
  align-items: center;
  border-bottom: 1px solid var(--border);
}

.resource-icon {
  width: 3rem;
  height: 3rem;
  border-radius: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 1rem;
  font-size: 1.5rem;
}

.resource-title {
  flex: 1;
}

.resource-title h3 {
  font-size: 1rem;
  font-weight: 600;
  color: var(--foreground);
  margin-bottom: 0.25rem;
}

.resource-title span {
  font-size: 0.75rem;
  padding: 0.125rem 0.5rem;
  border-radius: 1rem;
  background-color: rgba(3, 102, 214, 0.1);
  color: var(--primary);
}

/* Card Body */
.resource-body {
  padding: 1.25rem;
}

.resource-description {
  font-size: 0.875rem;
  color: var(--muted);
  margin-bottom: 1rem;
}

.resource-actions {
  display: flex;
  justify-content: flex-end;
}
```

## 9. Special Considerations

### Inline Styles
Some pages have inline styles directly on HTML elements (e.g., `style="color: var(--muted); margin-bottom: 1.5rem;"`). These should be converted to CSS classes.

### Icon Colors
Resource icons use inline background colors and text colors. Consider creating CSS classes for different icon types/categories.

### Browser Compatibility
Ensure CSS imports are supported by all target browsers. Consider using a build tool like PostCSS if broader compatibility is needed.

## 10. Conclusion

This refactoring will significantly improve code maintainability, reduce duplication, and make future changes easier. The modular approach ensures that components can be reused across pages while keeping related styles together.

By following this plan systematically, the refactoring can be completed with minimal risk while substantially improving the codebase structure.
