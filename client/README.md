# Task Management Application

A beginner-friendly full-stack Task Management Application developed using **React.js** for the frontend and **Express.js** for the backend.

This project was developed as part of **CS3301 – Full Stack Development CIE-2** to demonstrate important concepts of React.js, React Router, component-based development, state management, form handling, REST APIs, and responsive web design.

## Project Overview

The Task Management Application allows users to:

* Create new tasks
* View all tasks
* Mark tasks as completed
* Undo completed tasks
* Delete tasks
* Set task priority
* View task statistics on the dashboard
* Navigate between different pages using React Router

The application uses a React frontend that communicates with an Express.js backend through REST API endpoints.

## Technologies Used

### Frontend

* React.js
* JavaScript
* React Router DOM
* HTML
* CSS
* Vite

### Backend

* Node.js
* Express.js
* CORS
* JSON file for data storage

## Main React Concepts Demonstrated

This project demonstrates the following React concepts required for the CIE-2 assignment:

### 1. Functional Components

Examples:

* `Dashboard.jsx`
* `Tasks.jsx`
* `AddTask.jsx`
* `TaskForm.jsx`
* `TaskList.jsx`
* `TaskCard.jsx`
* `Navbar.jsx`

### 2. Class Component

The `About.jsx` page is implemented using a React Class Component.

### 3. Parent-Child Components

Example:

```text
TaskList
   ↓
TaskCard
```

`TaskList` passes task information and event functions to `TaskCard` using props.

Another example:

```text
AddTask
   ↓
TaskForm
```

### 4. Props

Props are used to pass data and functions between components.

Examples:

* `task`
* `onDelete`
* `onComplete`
* `onAddTask`

### 5. useState

`useState` is used for managing application data and form values.

Examples:

* Task list
* Loading state
* Error state
* Task title
* Task description
* Task priority

### 6. useEffect

`useEffect` is used in `TaskContext.jsx` to fetch tasks from the Express backend when the application loads.

### 7. Event Handling

The application handles events such as:

* Button clicks
* Form submission
* Input changes
* Task completion
* Task deletion

### 8. Form Handling

`TaskForm.jsx` provides a form for creating new tasks.

The form collects:

* Task title
* Description
* Priority

### 9. React Router

React Router is used for navigation between pages.

Available routes:

```text
/             → Dashboard
/tasks        → Tasks
/add-task     → Add Task
/about        → About
```

### 10. Responsive UI

CSS media queries are used to make the application responsive on:

* Desktop
* Tablet
* Mobile devices

## Backend API

The backend is built using Express.js and runs on:

```text
http://localhost:5000
```

### API Endpoints

| Method | Endpoint         | Description             |
| ------ | ---------------- | ----------------------- |
| GET    | `/api/tasks`     | Get all tasks           |
| POST   | `/api/tasks`     | Add a new task          |
| DELETE | `/api/tasks/:id` | Delete a task           |
| PUT    | `/api/tasks/:id` | Complete or undo a task |

## Project Structure

```text
task-management-app/
│
├── client/
│   ├── src/
│   │   ├── components/
│   │   │   ├── Navbar.jsx
│   │   │   ├── TaskCard.jsx
│   │   │   ├── TaskForm.jsx
│   │   │   └── TaskList.jsx
│   │   │
│   │   ├── context/
│   │   │   └── TaskContext.jsx
│   │   │
│   │   ├── pages/
│   │   │   ├── About.jsx
│   │   │   ├── AddTask.jsx
│   │   │   ├── Dashboard.jsx
│   │   │   └── Tasks.jsx
│   │   │
│   │   ├── App.jsx
│   │   ├── index.css
│   │   └── main.jsx
│   │
│   └── package.json
│
├── server/
│   ├── controllers/
│   │   └── taskController.js
│   │
│   ├── routes/
│   │   └── taskRoutes.js
│   │
│   ├── tasks.json
│   ├── server.js
│   └── package.json
│
└── README.md
```

## How to Run the Project

### Step 1: Start the Backend

Open a terminal and navigate to the server folder:

```bash
cd server
```

Install dependencies:

```bash
npm install
```

Start the server:

```bash
npm run dev
```

The backend will run at:

```text
http://localhost:5000
```

You
