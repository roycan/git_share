### Common Git Problems & Step-by-Step Solutions

A guide for students to troubleshoot common Git issues, with clear steps and simple diagrams.

---

## 🔥 Problem 1: "Merge Conflict" Error

### Scenario:

When merging branches, Git shows a conflict.

### Step-by-Step Solution:

1. **Identify conflicts**

   ```bash
   git status
   ```
2. **Open conflicted files** – look for `<<<<<<`, `======`, `>>>>>>`.
3. **Edit manually** – choose which code to keep.
4. **Stage the resolved file**

   ```bash
   git add <file>
   ```
5. **Commit the resolution**

   ```bash
   git commit -m "Resolve merge conflict"
   ```

### Visual:

```
<<<<<<< HEAD
Your code
=======
Their code
>>>>>>> feature-branch
```

---

## 🔥 Problem 2: "Detached HEAD" State

### Scenario:

You checkout a commit instead of a branch and now can't make commits.

### Step-by-Step Solution:

1. **Create a new branch**

   ```bash
   git checkout -b new-branch
   ```
2. **Continue working normally on the new branch**.

### Visual:

```
[detached HEAD] -> commit 12345
    |
    v
[ new-branch ]
```

---

## 🔥 Problem 3: "Changes Not Staged for Commit"

### Scenario:

Git won't let you commit because changes are unstaged.

### Step-by-Step Solution:

1. **Stage the files**

   ```bash
   git add <file>
   ```
2. **Commit the changes**

   ```bash
   git commit -m "Your message"
   ```

### Visual:

```
Working Directory -> [ git add ] -> Staging Area -> [ git commit ] -> Repository
```

---

## 🔥 Problem 4: "Pull Conflicts" When Collaborating

### Scenario:

You pull changes but get conflicts because others changed the same file.

### Step-by-Step Solution:

1. **Fetch latest changes**

   ```bash
   git fetch
   ```
2. **Pull changes into your branch**

   ```bash
   git pull
   ```
3. **Resolve conflicts as in Problem 1**.

### Visual:

```
[Remote repo]
     |
     v
[Local repo: conflict] -> Resolve -> Commit
```

---

## 🔥 Problem 5: "Push Rejected" Due to Non-Fast-Forward

### Scenario:

You try to push changes, but Git rejects the push because it would overwrite changes on the remote.

### Step-by-Step Solution:

1. **Fetch the latest changes**

```bash
   git fetch
   ```
2. **Merge the changes into your branch**

```bash
   git merge origin/main
   ```
3. **Resolve any conflicts if they arise**
4. **Push your changes**

```bash
   git push
   
```
 





