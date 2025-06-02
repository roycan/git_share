### Pre-Configured Repository for Merge Conflict Practice

This repository is designed to simulate real-world merge conflicts. It includes two branches (`main` and `feature`) with intentionally conflicting changes in a shared file. Students can clone this repo, follow the steps, and practice resolving conflicts.

---

#### Repository Structure

```
merge-conflict-practice/
├── README.md
└── greeting.txt
```

#### File: `greeting.txt` in `main`

```
Hello from the main branch!
This is a shared greeting file.
Let's make it awesome!
```

#### File: `greeting.txt` in `feature`

```
Hello from the feature branch!
This is a shared greeting file.
Let's make it amazing!
```

---

### Student Instructions (Markdown Format)

#### 📝 Steps to Practice Merge Conflict Resolution

1️⃣ **Clone the Repository**

```bash
git clone <repo-url>
```

2️⃣ **Switch to the `feature` branch**

```bash
git checkout feature
```

3️⃣ **Make an Additional Change** (Optional)

* Edit `greeting.txt` or add a new file.

4️⃣ **Switch Back to `main` and Pull Latest Changes**

```bash
git checkout main
git pull
```

5️⃣ **Merge the `feature` branch into `main`**

```bash
git merge feature
```

6️⃣ **Resolve the Merge Conflict**

* Open `greeting.txt` in VSCode.
* Look for `<<<<<<<`, `=======`, and `>>>>>>>` markers.
* Decide which lines to keep and edit the file accordingly.
* Remove the conflict markers.

7️⃣ **Stage and Commit the Merge Resolution**

```bash
git add greeting.txt
git commit
```

8️⃣ **Push the Changes**

```bash
git push
```

9️⃣ **Verify the Merge**      

* Check the contents of `greeting.txt` to ensure it reflects the resolved changes.
1️⃣0️⃣ **Clean Up** (Optional)
* Delete the `feature` branch if no longer needed:

```bash
git branch -d feature
```
---
### Additional Resources        
- [Pro Git Book](https://git-scm.com/book/en/v2) - Comprehensive guide to Git.
- [GitHub Learning Lab](https://lab.github.com/) - Hands-on courses for Git and GitHub.
- [Visual Studio Code Documentation](https://code.visualstudio.com/docs) - Official docs for VS Code.
- [Markdown Guide](https://www.markdownguide.org/) - Learn how to use Markdown effectively.
---
