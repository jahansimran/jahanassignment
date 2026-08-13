# TaskFlow Dashboard

TaskFlow Dashboard is a responsive task management application built with React. It allows users to view, add, update, delete, and inspect individual tasks through a simple and responsive interface.

The project uses JSONPlaceholder as a mock REST API. Since JSONPlaceholder does not permanently persist POST, PATCH, and DELETE operations, the application updates the local React state after successful API requests so that changes are immediately reflected in the UI.

---

## Features

- Responsive TaskFlow dashboard
- Display up to 10 tasks from the API
- Add new tasks
- Mark tasks as completed or incomplete
- Delete tasks
- View individual task details
- Task details routing using React Router DOM
- Completed task counter
- Loading states
- API error handling
- Retry functionality
- Empty state
- Add/Delete loading states
- Mutation error feedback
- Responsive design for desktop, tablet, and mobile
- Shared task state using React Context
- Local state handling for JSONPlaceholder CRUD operations

---

## Tech Stack

- React
- JavaScript (ES6+)
- React Router DOM
- Plain CSS
- Fetch API
- Vite
- JSONPlaceholder

---

## API

The application uses JSONPlaceholder as the mock backend.

Base URL:
https://jsonplaceholder.typicode.com

## PROJECT STRUCTURE

taskflow-dashboard/
│
├── public/
│
├── src/
│   │
│   ├── components/
│   │   ├── Header.jsx
│   │   ├── TaskForm.jsx
│   │   ├── TaskItem.jsx
│   │   └── TaskList.jsx
│   │
│   ├── context/
│   │   └── TaskContext.jsx
│   │
│   ├── pages/
│   │   ├── Dashboard.jsx
│   │   └── TaskDetails.jsx
│   │
│   ├── services/
│   │   └── taskService.js
│   │
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   └── main.jsx
│
├── .gitignore
├── index.html
├── package.json
├── package-lock.json
├── vite.config.js
└── README.md

### Installation and Setup
## Prerequisites
## Before running the project, make sure the following are installed:

Node.js
npm
Git
Recommended Node.js Version

This project is developed and tested with a modern Node.js version.

## Recommended:
Node.js 20 LTS or later
Node.js 24 is also supported for this project.

### Clone the Repository
Open a terminal or command prompt and navigate to the directory where you want to keep the project.

##For example, on Windows:
cd Desktop

### Clone the repository:
git clone <YOUR_GITHUB_REPOSITORY_URL>
Replace <YOUR_GITHUB_REPOSITORY_URL> with the actual GitHub repository URL.

### Example:
git clone https://github.com/username/taskflow-dashboard.git

### Install Dependencies
npm install

### Start the Development Server
npm run dev