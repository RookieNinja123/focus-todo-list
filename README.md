# Focus To-Do List

A calming productivity app built with React and Vite. This project combines a simple to-do list with a focus workflow: pick a task, open its focus panel, play background music, and track your work session with a stopwatch.

## Overview

The app is designed for single-task focus instead of a crowded task manager. It includes a clean dashboard, a live digital clock, a motivational quote area, theme switching, and per-task focus tools.

## Features

- Add tasks quickly using the input field or the `Enter` key
- Mark tasks as completed with a checkbox
- Remove all completed tasks with one button
- Open a focus mode for any task
- Track time for each task with its own stopwatch
- Play background music while working
- View live time and date from the digital clock
- Switch between light mode and dark mode
- Keep tasks saved in `localStorage` so they persist after refresh
- Show a fallback quote if the quote API request fails

## How It Works

Each task stores:

- `text`: the task title
- `completed`: whether the task is finished
- `focus`: whether its focus panel is open
- `time`: saved stopwatch time for that task

When the app loads, it reads saved tasks from the browser's `localStorage`. Whenever tasks change, the latest state is saved automatically.

## Tech Stack

- React 19
- Vite 7
- Plain CSS
- ESLint

## Project Structure

```text
src/
  App.jsx            App shell and theme state
  ToDo.jsx           Main task list and focus workflow
  DigitalClock.jsx   Live clock and daily quote
  StopWatch.jsx      Per-task stopwatch
  main.jsx           React entry point
  index.css          Full app styling

public/
  music/             Background audio files used in focus mode
```

## Getting Started

### 1. Install dependencies

```bash
npm install
```

### 2. Start the development server

```bash
npm run dev
```

### 3. Build for production

```bash
npm run build
```

### 4. Preview the production build

```bash
npm run preview
```

## Available Scripts

- `npm run dev` starts the Vite development server
- `npm run build` creates the production build in `dist/`
- `npm run preview` previews the built app locally
- `npm run lint` checks the codebase with ESLint

## Quote API Note

The app requests a quote through the Vite dev server proxy:

- Local request path: `/api/api/random`
- Target service: `https://zenquotes.io`

If the quote request fails, the app shows a fallback message instead of breaking the UI.

## Music Assets

Focus mode includes music files stored in `public/music/`. These are loaded directly by the browser when a user selects a track from the dropdown.

## Current Behavior Notes

- Theme mode is stored only in React state, so it resets on page reload
- Task data persists in the browser, but only on the same device and browser
- Stopwatch progress is saved when stopped or reset

## Future Improvements

- Persist dark mode in `localStorage`
- Add task editing
- Add filters for active and completed tasks
- Allow multiple focus sound categories
- Add keyboard shortcuts for faster task management

