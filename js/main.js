document.addEventListener('DOMContentLoaded', function() {
  // Theme toggle functionality
  const themeToggleCheckbox = document.getElementById('theme-toggle-checkbox');
  const mobileThemeToggle = document.getElementById('mobile-theme-toggle');
  
  // Check for saved theme preference or use system preference
  const savedTheme = localStorage.getItem('theme');
  
  if (savedTheme === 'dark') {
    document.body.classList.add('dark-mode');
    themeToggleCheckbox.checked = true;
  } else if (savedTheme === null && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    document.body.classList.add('dark-mode');
    themeToggleCheckbox.checked = true;
  }
  
  // Toggle theme with checkbox
  themeToggleCheckbox.addEventListener('change', function() {
    if (this.checked) {
      document.body.classList.add('dark-mode');
      localStorage.setItem('theme', 'dark');
    } else {
      document.body.classList.remove('dark-mode');
      localStorage.setItem('theme', 'light');
    }
  });
  
  // Toggle theme with mobile button
  mobileThemeToggle.addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
    const isDarkMode = document.body.classList.contains('dark-mode');
    themeToggleCheckbox.checked = isDarkMode;
    localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
  });
  
  // Mobile sidebar functionality
  const menuToggle = document.getElementById('menu-toggle');
  const closeMenu = document.getElementById('close-menu');
  const sidebar = document.getElementById('sidebar');
  
  menuToggle.addEventListener('click', function() {
    sidebar.classList.add('open');
  });
  
  closeMenu.addEventListener('click', function() {
    sidebar.classList.remove('open');
  });
  
  // Click outside to close sidebar on mobile
  document.addEventListener('click', function(event) {
    const isClickInsideSidebar = sidebar.contains(event.target);
    const isClickOnMenuToggle = menuToggle.contains(event.target);
    
    if (!isClickInsideSidebar && !isClickOnMenuToggle && window.innerWidth <= 1024) {
      sidebar.classList.remove('open');
    }
  });
  
  // Handle resize events
  window.addEventListener('resize', function() {
    if (window.innerWidth > 1024) {
      sidebar.classList.remove('open');
    }
  });
});

// Initialize any specific interactive components if they exist on the page
function initBranchingSimulator() {
  const simulatorContainer = document.querySelector('.branching-simulator');
  if (!simulatorContainer) return;
  
  // Simple simulation of branching with draggable elements
  // This is a simplified version of what would be in the React component
  
  const branches = [
    { id: 'main', name: 'main', x: 50, y: 50 },
    { id: 'feature', name: 'feature', x: 200, y: 150 },
    { id: 'bugfix', name: 'bugfix', x: 350, y: 50 }
  ];
  
  branches.forEach(branch => {
    const branchEl = document.createElement('div');
    branchEl.className = 'branch';
    branchEl.setAttribute('data-id', branch.id);
    branchEl.textContent = branch.name;
    branchEl.style.left = branch.x + 'px';
    branchEl.style.top = branch.y + 'px';
    
    // Make branch draggable
    branchEl.setAttribute('draggable', 'true');
    
    branchEl.addEventListener('dragstart', function(e) {
      e.dataTransfer.setData('text/plain', branch.id);
    });
    
    simulatorContainer.appendChild(branchEl);
  });
  
  // Add drop event to create merge effect
  simulatorContainer.addEventListener('dragover', function(e) {
    e.preventDefault();
  });
  
  simulatorContainer.addEventListener('drop', function(e) {
    e.preventDefault();
    const draggedId = e.dataTransfer.getData('text/plain');
    const targetEl = document.elementFromPoint(e.clientX, e.clientY);
    
    if (targetEl.classList.contains('branch') && targetEl.getAttribute('data-id') !== draggedId) {
      // Simulating merge
      alert('Merged branch "' + draggedId + '" into "' + targetEl.getAttribute('data-id') + '"');
    }
  });
}

// Initialize VSCode simulator if it exists
function initVSCodeSimulator() {
  const simulator = document.querySelector('.vscode-simulator');
  if (!simulator) return;
  
  const fileList = simulator.querySelector('.file-list');
  const fileContent = simulator.querySelector('.file-content');
  const commitBtn = simulator.querySelector('.commit-btn');
  const stageBtn = simulator.querySelector('.stage-btn');
  
  // Sample files for demonstration
  const files = [
    { name: 'index.html', content: '<!DOCTYPE html>\n<html>\n<head>\n  <title>My Project</title>\n</head>\n<body>\n  <h1>Hello World</h1>\n</body>\n</html>', isModified: false, isStaged: false },
    { name: 'styles.css', content: 'body {\n  font-family: Arial, sans-serif;\n  background-color: #f5f5f5;\n}\n\nh1 {\n  color: blue;\n}', isModified: true, isStaged: false },
    { name: 'script.js', content: 'function greet() {\n  console.log("Hello World");\n}\n\ngreet();', isModified: false, isStaged: false }
  ];
  
  // Create file list
  if (fileList) {
    files.forEach(file => {
      const fileItem = document.createElement('div');
      fileItem.className = 'file-item' + (file.isModified ? ' modified' : '');
      fileItem.textContent = file.name;
      
      fileItem.addEventListener('click', () => {
        // Show file content when clicked
        if (fileContent) {
          fileContent.innerHTML = '<pre>' + file.content + '</pre>';
          
          // Update active file
          document.querySelectorAll('.file-item').forEach(item => {
            item.classList.remove('active');
          });
          fileItem.classList.add('active');
        }
      });
      
      fileList.appendChild(fileItem);
    });
  }
  
  // Stage button functionality
  if (stageBtn) {
    stageBtn.addEventListener('click', () => {
      const activeFile = document.querySelector('.file-item.active');
      if (activeFile) {
        activeFile.classList.add('staged');
        alert('File staged for commit');
      } else {
        alert('Please select a file to stage');
      }
    });
  }
  
  // Commit button functionality
  if (commitBtn) {
    commitBtn.addEventListener('click', () => {
      const stagedFiles = document.querySelectorAll('.file-item.staged');
      if (stagedFiles.length > 0) {
        const message = prompt('Enter commit message:');
        if (message) {
          alert('Changes committed: ' + message);
          stagedFiles.forEach(file => {
            file.classList.remove('modified', 'staged');
          });
        }
      } else {
        alert('No files staged for commit');
      }
    });
  }
}

// Initialize quiz functionality if on quiz page
function initQuizzes() {
  const quizContainer = document.querySelector('.quiz-container');
  if (!quizContainer) return;
  
  // Sample quiz data
  const quizzes = [
    {
      id: 'git-basics',
      title: 'Git Basics Quiz',
      questions: [
        {
          id: 'q1',
          text: 'What does the git add command do?',
          options: [
            { id: 'a', text: 'Commits changes to the repository' },
            { id: 'b', text: 'Stages changes for commit' },
            { id: 'c', text: 'Creates a new branch' },
            { id: 'd', text: 'Merges branches together' }
          ],
          correctAnswer: 'b',
          explanation: 'The git add command adds changes to the staging area, preparing them to be committed.'
        },
        {
          id: 'q2',
          text: 'What is a commit in Git?',
          options: [
            { id: 'a', text: 'A temporary save point' },
            { id: 'b', text: 'A permanent snapshot of your staged changes' },
            { id: 'c', text: 'A branch in the repository' },
            { id: 'd', text: 'A connection to GitHub' }
          ],
          correctAnswer: 'b',
          explanation: 'A commit is a snapshot of your repository at a specific point in time, creating a save point that you can revert back to if needed.'
        }
      ]
    }
  ];
  
  const quizList = quizContainer.querySelector('.quiz-list');
  const quizContent = quizContainer.querySelector('.quiz-content');
  
  // Populate quiz list
  if (quizList) {
    quizzes.forEach(quiz => {
      const quizItem = document.createElement('div');
      quizItem.className = 'quiz-item';
      quizItem.innerHTML = `
        <h4>${quiz.title}</h4>
        <p>${quiz.questions.length} questions</p>
      `;
      
      quizItem.addEventListener('click', () => {
        startQuiz(quiz);
      });
      
      quizList.appendChild(quizItem);
    });
  }
  
  function startQuiz(quiz) {
    let currentQuestionIndex = 0;
    const selectedAnswers = {};
    
    function renderQuestion() {
      const question = quiz.questions[currentQuestionIndex];
      
      quizContent.innerHTML = `
        <div class="question-container">
          <div class="question-header">
            <h3>${quiz.title}</h3>
            <span>Question ${currentQuestionIndex + 1} of ${quiz.questions.length}</span>
          </div>
          
          <div class="progress-bar">
            <div class="progress-fill" style="width: ${((currentQuestionIndex + 1) / quiz.questions.length) * 100}%"></div>
          </div>
          
          <div class="question">
            <h4>${question.text}</h4>
            <div class="options">
              ${question.options.map(option => `
                <div class="option ${selectedAnswers[question.id] === option.id ? 'selected' : ''}" data-id="${option.id}">
                  <div class="option-marker"></div>
                  <span>${option.text}</span>
                </div>
              `).join('')}
            </div>
          </div>
          
          <div class="question-actions">
            ${currentQuestionIndex > 0 ? 
              '<button class="prev-btn">Previous</button>' : 
              '<button class="prev-btn" disabled>Previous</button>'}
            
            <button class="next-btn" ${selectedAnswers[question.id] ? '' : 'disabled'}>
              ${currentQuestionIndex === quiz.questions.length - 1 ? 'Submit' : 'Next'}
            </button>
          </div>
        </div>
      `;
      
      // Add event listeners
      quizContent.querySelectorAll('.option').forEach(option => {
        option.addEventListener('click', () => {
          selectedAnswers[question.id] = option.dataset.id;
          renderQuestion(); // Re-render to update selection
        });
      });
      
      quizContent.querySelector('.prev-btn').addEventListener('click', () => {
        if (currentQuestionIndex > 0) {
          currentQuestionIndex--;
          renderQuestion();
        }
      });
      
      quizContent.querySelector('.next-btn').addEventListener('click', () => {
        if (currentQuestionIndex < quiz.questions.length - 1) {
          currentQuestionIndex++;
          renderQuestion();
        } else {
          showResults();
        }
      });
    }
    
    function showResults() {
      let score = 0;
      
      quiz.questions.forEach(question => {
        if (selectedAnswers[question.id] === question.correctAnswer) {
          score++;
        }
      });
      
      const percentage = Math.round((score / quiz.questions.length) * 100);
      
      quizContent.innerHTML = `
        <div class="results-container">
          <h3>Quiz Results</h3>
          
          <div class="score-display">
            <div class="score-circle">
              <svg viewBox="0 0 36 36">
                <path
                  d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                  fill="none"
                  stroke="#E2E8F0"
                  stroke-width="3"
                />
                <path
                  d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                  fill="none"
                  stroke="${percentage >= 70 ? '#2EA44F' : '#E3A008'}"
                  stroke-width="3"
                  stroke-dasharray="${percentage}, 100"
                />
              </svg>
              <div class="score-value">${percentage}%</div>
            </div>
            
            <p class="score-message">
              ${percentage >= 80 
                ? "Excellent work! You've mastered these concepts." 
                : percentage >= 60 
                  ? "Good job! You're on the right track." 
                  : "Keep learning! Review the material and try again."}
            </p>
          </div>
          
          <div class="review-container">
            <h4>Question Review</h4>
            ${quiz.questions.map((question, index) => {
              const isCorrect = selectedAnswers[question.id] === question.correctAnswer;
              
              return `
                <div class="review-item ${isCorrect ? 'correct' : 'incorrect'}">
                  <div class="review-header">
                    <span class="review-indicator">${isCorrect ? '✓' : '✗'}</span>
                    <span>Question ${index + 1}</span>
                  </div>
                  
                  <div class="review-content">
                    <p class="review-question">${question.text}</p>
                    
                    <div class="review-options">
                      ${question.options.map(option => {
                        let optionClass = '';
                        
                        if (option.id === question.correctAnswer) {
                          optionClass = 'correct';
                        } else if (option.id === selectedAnswers[question.id] && option.id !== question.correctAnswer) {
                          optionClass = 'incorrect';
                        }
                        
                        return `
                          <div class="review-option ${optionClass}">
                            ${option.id === question.correctAnswer ? '✓ ' : ''}
                            ${option.id === selectedAnswers[question.id] && option.id !== question.correctAnswer ? '✗ ' : ''}
                            ${option.text}
                          </div>
                        `;
                      }).join('')}
                    </div>
                    
                    <div class="explanation">
                      <strong>Explanation:</strong> ${question.explanation}
                    </div>
                  </div>
                </div>
              `;
            }).join('')}
          </div>
          
          <button class="restart-btn">Start New Quiz</button>
        </div>
      `;
      
      quizContent.querySelector('.restart-btn').addEventListener('click', () => {
        // Reset the quiz or go back to quiz list
        currentQuestionIndex = 0;
        Object.keys(selectedAnswers).forEach(key => delete selectedAnswers[key]);
        renderQuestion();
      });
    }
    
    // Start the quiz
    renderQuestion();
  }
}

// Check if we need to initialize any component based on the current page
document.addEventListener('DOMContentLoaded', function() {
  // Initialize simulators and interactive components if they exist on the page
  initBranchingSimulator();
  initVSCodeSimulator();
  initQuizzes();
});