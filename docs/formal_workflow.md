### GitHub Team Workflow Guide for Formal Projects

This guide helps student teams set up **collaborative workflows** using **Pull Requests (PRs)**, **Reviews**, and **Project Boards** in GitHub.

---

## 🌟 Step-by-Step Workflow Setup

### 1️⃣ **Create a Team Repository**

* One team member creates a **new repository** on GitHub.
* Add other teammates as **Collaborators** under **Settings > Collaborators & teams**.

### 2️⃣ **Clone the Repository**

* Each member clones the repo to their local machine:

```bash
git clone <repo-url>
```

### 3️⃣ **Branching Workflow**

* For each new feature or task, create a **new branch**:

```bash
git checkout -b feature/<your-feature-name>
```

* Work on the task, then **commit changes regularly**.

### 4️⃣ **Push Branch to GitHub**

```bash
git push -u origin feature/<your-feature-name>
```

### 5️⃣ **Create a Pull Request (PR)**

* Go to the GitHub repo page.
* Click **"Compare & Pull Request"**.
* Add a **meaningful title** and **description** of the changes.

### 6️⃣ **Request Review**

* In the PR page, **assign a reviewer** (teammate).
* The reviewer checks for code quality, logic, and consistency.

### 7️⃣ **Approve & Merge**

* Reviewer approves by clicking **"Approve"**.
* Once approved, **merge** the PR into the `main` branch.

### 8️⃣ **Pull Changes Locally**

* After PRs are merged, everyone **pulls latest changes**:

```bash
git pull origin main
```

### 9️⃣ **Use GitHub Project Boards**

* Go to the repo's **Projects** tab.
* Create a **Project Board** (Kanban style) with columns like:

  * **To Do**
  * **In Progress**
  * **Done**
* Add tasks as **issues** and assign them to teammates.
* Move issues across columns as tasks progress.

---

## 🛡️ Best Practices

✅ Use clear commit messages.
✅ Keep PRs small and focused.
✅ Communicate in the PR comments.
✅ Regularly pull and sync with the team.
✅ Celebrate successful merges! 🎉
