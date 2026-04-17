# Focus To-Do List

A productivity-focused React app built with Vite that helps users manage tasks and stay in the zone.

This project combines a clean to-do list with focus tools like a digital clock, motivational quotes, background music, dark mode, and a per-task stopwatch. It is designed to feel simple to use while still offering a more immersive productivity experience than a basic task app.

## Features

- Add and manage daily tasks
- Mark tasks as completed
- Delete completed tasks
- Save tasks in `localStorage` so they persist after refresh
- Toggle dark mode
- View a live digital clock and current date
- Fetch inspirational quotes
- Open focus mode for each task
- Play background music while focusing
- Track time for each task with a built-in stopwatch

## Tech Stack

- React
- JavaScript
- Vite
- CSS

## How It Works

- Tasks are stored in the browser using `localStorage`
- Each task has its own focus panel
- Focus mode includes music controls and a stopwatch
- Quote requests use a Vite development proxy to avoid CORS issues during local development

## Getting Started

### 1. Clone the repository

```bash
git clone <your-repository-url>
cd To-Do
```

### 2. Install dependencies

```bash
npm install
```

### 3. Start the development server

```bash
npm run dev
```

Then open:

```text
http://localhost:5173
```

## Build for Production

```bash
npm run build
```

To preview the production build locally:

```bash
npm run preview
```

## Project Structure

```text
src/
  App.jsx
  ToDo.jsx
  DigitalClock.jsx
  StopWatch.jsx
  index.css
```

## Notes

- The quote API is accessed through the Vite dev server proxy in `vite.config.js`
- Music files are stored in the `public/music` folder
- Task data is stored only in the browser and is not synced to a backend
