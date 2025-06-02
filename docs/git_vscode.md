### Using VS Code's Git Features: A Beginner's Guide

This guide shows how to manage Git in VS Code for easy version control and collaboration.

---

## 🖥️ VS Code Source Control Panel

### Opening the Source Control Panel

* Click the **Source Control** icon (three branches) in the sidebar.
* Or press `Ctrl+Shift+G` (Windows/Linux) or `Cmd+Shift+G` (Mac).

### Common Actions:

| **Action**     | **Where to Find It**                    | **Shortcut**             |
| -------------- | --------------------------------------- | ------------------------ |
| Stage changes  | Hover over file, click `+` icon         | Right-click → Stage      |
| Commit changes | Top message box in Source Control panel | `Ctrl+Enter` (Cmd+Enter) |
| Pull & Push    | ... menu in Source Control panel        | Right-click → Pull/Push  |
| View diff      | Click file name in Source Control panel |                          |

---

## 🔀 Using Git Commands in the Command Palette

* Open the palette: `Ctrl+Shift+P` (Cmd+Shift+P)
* Type commands like:

  * `Git: Clone`
  * `Git: Create Branch`
  * `Git: Merge Branch`
  * `Git: Fetch` / `Git: Pull` / `Git: Push`

---

## 🧩 Useful Git Extensions in VS Code

| **Extension**        | **Purpose**                                      |
| -------------------- | ------------------------------------------------ |
| GitLens              | Supercharge Git with history, blame, annotations |
| Git Graph            | Visualize commit history as a graph              |
| GitHub Pull Requests | Manage PRs and issues from inside VS Code        |

---

## 🌟 Best Practices

✅ Commit often with clear messages
✅ Pull latest changes before you push
✅ Use branches for new features
✅ Review changes in Source Control diff view
✅ Use extensions like GitLens for advanced workflows


---

## 📚 Additional Resources  
* [VS Code Git Documentation](https://code.visualstudio.com/docs/editor/versioncontrol)
* [GitHub Learning Lab](https://lab.github.com/)
* [Pro Git Book](https://git-scm.com/book/en/v2)

## 📝 Example Workflow

1. **Clone a Repository**
   * Use `Git: Clone` from the Command Palette.
   * Enter the repository URL.

2. **Create a Branch**
   * Use `Git: Create Branch` to start a new feature.
   * Name your branch descriptively.

3. **Make Changes**
   * Edit files in your branch.
   * Use the Source Control panel to stage and commit changes.

4. **Open a Pull Request**
   * Push your branch to GitHub.
   * Use the GitHub interface to create a PR.

5. **Review and Merge**
   * Collaborate with teammates on the PR.
   * Once approved, merge the changes into the main branch.








