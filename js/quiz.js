// quiz.js - Interactive Quiz Logic for quizzes.html

// Example questions for Git Basics Quiz
const gitBasicsQuestions = [
  {
    question: "What does the git add command do?",
    options: [
      "Commits changes to the repository",
      "Stages changes for commit",
      "Creates a new branch",
      "Merges branches together"
    ],
    answer: 1
  },
  {
    question: "Which command initializes a new Git repository?",
    options: [
      "git start",
      "git init",
      "git new",
      "git create"
    ],
    answer: 1
  },
  {
    question: "What does git commit do?",
    options: [
      "Saves staged changes to the repository",
      "Deletes files from the repository",
      "Uploads files to GitHub",
      "Creates a new branch"
    ],
    answer: 0
  },
  {
    question: "How do you check the status of your working directory?",
    options: [
      "git check",
      "git status",
      "git log",
      "git diff"
    ],
    answer: 1
  },
  {
    question: "Which command shows the commit history?",
    options: [
      "git history",
      "git commits",
      "git log",
      "git show"
    ],
    answer: 2
  },
  {
    question: "How do you clone a remote repository?",
    options: [
      "git copy <url>",
      "git clone <url>",
      "git pull <url>",
      "git fetch <url>"
    ],
    answer: 1
  },
  {
    question: "What does git push do?",
    options: [
      "Downloads changes from remote",
      "Uploads local commits to remote",
      "Deletes remote branches",
      "Creates a new repository"
    ],
    answer: 1
  },
  {
    question: "How do you create a new branch?",
    options: [
      "git branch <name>",
      "git new <name>",
      "git checkout <name>",
      "git create <name>"
    ],
    answer: 0
  },
  {
    question: "Which command switches to another branch?",
    options: [
      "git switch <name>",
      "git move <name>",
      "git change <name>",
      "git go <name>"
    ],
    answer: 0
  },
  {
    question: "What does git pull do?",
    options: [
      "Uploads local changes to remote",
      "Downloads and merges changes from remote",
      "Deletes files from remote",
      "Creates a pull request"
    ],
    answer: 1
  }
];

// Example questions for Branching & Merging Quiz
const branchingQuestions = [
  {
    question: "What is a branch in Git?",
    options: [
      "A copy of the repository on another computer",
      "A separate line of development",
      "A backup of your files",
      "A GitHub feature only"
    ],
    answer: 1
  },
  {
    question: "Which command creates a new branch called 'feature'?",
    options: [
      "git branch feature",
      "git new feature",
      "git create feature",
      "git checkout feature"
    ],
    answer: 0
  },
  {
    question: "How do you switch to an existing branch named 'dev'?",
    options: [
      "git change dev",
      "git switch dev",
      "git go dev",
      "git move dev"
    ],
    answer: 1
  },
  {
    question: "What does 'git merge' do?",
    options: [
      "Deletes a branch",
      "Combines changes from one branch into another",
      "Creates a new branch",
      "Shows branch history"
    ],
    answer: 1
  },
  {
    question: "What is a fast-forward merge?",
    options: [
      "A merge with no conflicts",
      "A merge that replays all commits",
      "A merge where the branch pointer moves forward",
      "A merge that deletes the source branch"
    ],
    answer: 2
  },
  {
    question: "Which command lists all branches?",
    options: [
      "git list",
      "git show branches",
      "git branch",
      "git branches"
    ],
    answer: 2
  },
  {
    question: "How do you delete a branch named 'old-feature'?",
    options: [
      "git branch -d old-feature",
      "git delete old-feature",
      "git remove old-feature",
      "git branch --remove old-feature"
    ],
    answer: 0
  },
  {
    question: "What happens if there are conflicts during a merge?",
    options: [
      "Git aborts the merge automatically",
      "You must resolve conflicts manually",
      "Git deletes the conflicting files",
      "The merge is skipped"
    ],
    answer: 1
  }
];

// Example questions for Merge Conflicts Quiz
const conflictsQuestions = [
  {
    question: "What is a merge conflict in Git?",
    options: [
      "A type of Git branch",
      "A situation where changes in two branches overlap",
      "A GitHub error message",
      "A failed commit"
    ],
    answer: 1
  },
  {
    question: "When do merge conflicts typically occur?",
    options: [
      "When two branches have changes to the same line",
      "When pushing to remote",
      "When cloning a repository",
      "When deleting a branch"
    ],
    answer: 0
  },
  {
    question: "How does Git mark a conflict in a file?",
    options: [
      "With special conflict markers (<<<<<<<, =======, >>>>>>>)",
      "By deleting the file",
      "By renaming the file",
      "By creating a backup file"
    ],
    answer: 0
  },
  {
    question: "What should you do after resolving a merge conflict?",
    options: [
      "Run git add and git commit",
      "Delete the branch",
      "Run git clone",
      "Push without committing"
    ],
    answer: 0
  },
  {
    question: "Which command aborts a merge in progress?",
    options: [
      "git abort merge",
      "git merge --abort",
      "git stop merge",
      "git cancel"
    ],
    answer: 1
  },
  {
    question: "What is the best way to avoid merge conflicts?",
    options: [
      "Never use branches",
      "Commit frequently and pull often",
      "Only work on main branch",
      "Ignore other people's changes"
    ],
    answer: 1
  }
];

// Example questions for GitHub Collaboration Quiz
const collaborationQuestions = [
  {
    question: "What is a pull request on GitHub?",
    options: [
      "A request to delete a repository",
      "A way to propose changes and request review",
      "A command to pull code from GitHub",
      "A GitHub notification"
    ],
    answer: 1
  },
  {
    question: "Which feature allows you to track bugs and tasks on GitHub?",
    options: [
      "Branches",
      "Issues",
      "Commits",
      "Forks"
    ],
    answer: 1
  },
  {
    question: "How do you suggest changes to someone else's repository?",
    options: [
      "Open a pull request",
      "Send an email",
      "Delete their branch",
      "Edit their repository directly"
    ],
    answer: 0
  },
  {
    question: "What is a GitHub fork?",
    options: [
      "A backup of a repository",
      "A copy of a repository under your account",
      "A merge conflict",
      "A GitHub error"
    ],
    answer: 1
  },
  {
    question: "Who can review a pull request?",
    options: [
      "Only the repository owner",
      "Anyone with access to the repository",
      "Only GitHub staff",
      "No one"
    ],
    answer: 1
  },
  {
    question: "What happens when a pull request is merged?",
    options: [
      "The changes are added to the base branch",
      "The repository is deleted",
      "A new branch is created",
      "Nothing happens"
    ],
    answer: 0
  },
  {
    question: "How can you keep your fork up to date with the original repository?",
    options: [
      "By creating a new fork",
      "By merging the original repository's changes into your fork",
      "By deleting your fork",
      "By opening an issue"
    ],
    answer: 1
  },
  {
    question: "What is the purpose of a GitHub repository's README file?",
    options: [
      "To store code only",
      "To provide information and instructions about the project",
      "To list all contributors",
      "To track issues"
    ],
    answer: 1
  },
  {
    question: "Which GitHub feature allows for code review comments on specific lines?",
    options: [
      "Issues",
      "Pull requests",
      "Wiki",
      "Releases"
    ],
    answer: 1
  },
  {
    question: "How do you assign someone to review your pull request?",
    options: [
      "By mentioning them in a comment",
      "By adding them as a reviewer in the pull request interface",
      "By sending them an email",
      "By forking the repository"
    ],
    answer: 1
  },
  {
    question: "What is a GitHub Action?",
    options: [
      "A way to automate workflows like testing and deployment",
      "A type of pull request",
      "A branch protection rule",
      "A GitHub notification"
    ],
    answer: 0
  },
  {
    question: "How can you collaborate on a private repository?",
    options: [
      "By inviting collaborators with the right permissions",
      "By making the repository public",
      "By cloning without permission",
      "By opening an issue"
    ],
    answer: 0
  }
];

// Example questions for GitHub Classroom Quiz
const classroomQuestions = [
  {
    question: "What is GitHub Classroom?",
    options: [
      "A tool for creating and managing programming assignments",
      "A chat app for teachers",
      "A GitHub repository template",
      "A video conferencing tool"
    ],
    answer: 0
  },
  {
    question: "How do students join a GitHub Classroom assignment?",
    options: [
      "By cloning the teacher's repository",
      "By accepting an assignment invitation link",
      "By sending a pull request",
      "By emailing the teacher"
    ],
    answer: 1
  },
  {
    question: "What does each student receive when they accept an assignment?",
    options: [
      "A shared repository with all students",
      "A private repository for their work",
      "A public repository",
      "A fork of the teacher's repository"
    ],
    answer: 1
  },
  {
    question: "Which feature allows automatic feedback on student code?",
    options: [
      "GitHub Actions",
      "GitHub Pages",
      "GitHub Wiki",
      "GitHub Sponsors"
    ],
    answer: 0
  },
  {
    question: "How can teachers track student progress in GitHub Classroom?",
    options: [
      "By reviewing pull requests and commits",
      "By using the Classroom dashboard",
      "By checking repository activity",
      "All of the above"
    ],
    answer: 3
  },
  {
    question: "What is an organization in GitHub Classroom?",
    options: [
      "A group of repositories and users for a class",
      "A single repository",
      "A GitHub Action",
      "A classroom badge"
    ],
    answer: 0
  },
  {
    question: "Can you reuse assignments in GitHub Classroom?",
    options: [
      "No, each assignment must be new",
      "Yes, by duplicating or importing previous assignments",
      "Only if you export them",
      "Only for public classes"
    ],
    answer: 1
  },
  {
    question: "What is the benefit of starter code in assignments?",
    options: [
      "It provides a template for students to begin their work",
      "It prevents plagiarism",
      "It makes assignments public",
      "It disables GitHub Actions"
    ],
    answer: 0
  },
  {
    question: "How can teachers provide feedback on student submissions?",
    options: [
      "By opening issues or pull requests",
      "By sending emails",
      "By deleting repositories",
      "By making the repository public"
    ],
    answer: 0
  },
  {
    question: "What is a common use of teams in GitHub Classroom?",
    options: [
      "To assign group projects",
      "To grade assignments",
      "To create badges",
      "To manage billing"
    ],
    answer: 0
  }
];

// Quiz data map
const quizzes = {
  'git-basics': {
    title: 'Git Basics Quiz',
    questions: gitBasicsQuestions
  },
  'branching': {
    title: 'Branching & Merging Quiz',
    questions: branchingQuestions
  },
  'conflicts': {
    title: 'Merge Conflicts Quiz',
    questions: conflictsQuestions
  },
  'collaboration': {
    title: 'GitHub Collaboration Quiz',
    questions: collaborationQuestions
  },
  'classroom': {
    title: 'GitHub Classroom Quiz',
    questions: classroomQuestions
  }
  // Add more quizzes here as needed
};

let currentQuizId = 'git-basics';
let currentQuestion = 0;
let selectedAnswers = Array(quizzes[currentQuizId].questions.length).fill(null);

function switchQuiz(quizId) {
  if (!quizzes[quizId]) return;
  currentQuizId = quizId;
  currentQuestion = 0;
  selectedAnswers = Array(quizzes[currentQuizId].questions.length).fill(null);
  // Update active class in sidebar
  document.querySelectorAll('.quiz-item').forEach(item => {
    if (item.getAttribute('data-id') === quizId) {
      item.classList.add('active');
    } else {
      item.classList.remove('active');
    }
  });
  renderQuestion();
}

function renderQuestion() {
  const quiz = quizzes[currentQuizId];
  const q = quiz.questions[currentQuestion];
  const container = document.querySelector('.question-container');
  if (!container) return;

  let optionsHtml = q.options.map((opt, idx) => `
    <div class="option${selectedAnswers[currentQuestion] === idx ? ' selected' : ''}" data-idx="${idx}">
      <div class="option-marker"></div>
      <span>${opt}</span>
    </div>
  `).join('');

  container.innerHTML = `
    <div class="question-header">
      <h3>${quiz.title}</h3>
      <span>Question ${currentQuestion + 1} of ${quiz.questions.length}</span>
    </div>
    <div class="progress-bar">
      <div class="progress-fill" style="width: ${(100 * (currentQuestion + 1) / quiz.questions.length)}%"></div>
    </div>
    <div class="question">
      <h4>${q.question}</h4>
      <div class="options">${optionsHtml}</div>
      <div class="question-actions">
        <button class="prev-btn" ${currentQuestion === 0 ? 'disabled' : ''}>Previous</button>
        <button class="next-btn" ${selectedAnswers[currentQuestion] === null ? 'disabled' : ''}>${currentQuestion === quiz.questions.length - 1 ? 'Finish' : 'Next'}</button>
      </div>
    </div>
  `;

  // Add event listeners
  container.querySelectorAll('.option').forEach(opt => {
    opt.addEventListener('click', function() {
      const idx = parseInt(this.getAttribute('data-idx'));
      selectedAnswers[currentQuestion] = idx;
      renderQuestion();
    });
  });

  container.querySelector('.prev-btn').addEventListener('click', function() {
    if (currentQuestion > 0) {
      currentQuestion--;
      renderQuestion();
    }
  });

  container.querySelector('.next-btn').addEventListener('click', function() {
    if (selectedAnswers[currentQuestion] !== null) {
      if (currentQuestion < quizzes[currentQuizId].questions.length - 1) {
        currentQuestion++;
        renderQuestion();
      } else {
        renderResults();
      }
    }
  });
}

function renderResults() {
  const quiz = quizzes[currentQuizId];
  const container = document.querySelector('.question-container');
  if (!container) return;
  let correct = 0;
  quiz.questions.forEach((q, i) => {
    if (selectedAnswers[i] === q.answer) correct++;
  });
  container.innerHTML = `
    <div class="results-container">
      <h3>Quiz Complete!</h3>
      <div class="score-display">
        <div class="score-circle">
          <div class="score-value">${correct} / ${quiz.questions.length}</div>
        </div>
        <div class="score-message">Your Score: ${Math.round(100 * correct / quiz.questions.length)}%</div>
      </div>
      <button class="restart-btn">Restart Quiz</button>
    </div>
  `;
  container.querySelector('.restart-btn').addEventListener('click', function() {
    currentQuestion = 0;
    selectedAnswers = Array(quiz.questions.length).fill(null);
    renderQuestion();
  });
}

document.addEventListener('DOMContentLoaded', function() {
  // Only run on quizzes.html
  if (document.querySelector('.quiz-content .question-container')) {
    // Add event listeners for quiz switching
    document.querySelectorAll('.quiz-item').forEach(item => {
      item.addEventListener('click', function() {
        const quizId = this.getAttribute('data-id');
        switchQuiz(quizId);
      });
    });
    renderQuestion();
  }
});