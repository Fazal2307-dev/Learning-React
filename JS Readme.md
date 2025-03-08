/*
# Parcel
- Dev Build
- Created a Server
- HMR = Hot Module Replacement
- File Watching Algorithm - written in C++
- Caching - Faster Builds
- Image Optimization
- Minification
- Bundling
- Compress
- Consistent Hashing
- Code Splitting
- Differential Bundling - support older browsers
- Diagnostic
- Error Handling
- HTTPs
- Tree Shaking - remove unused code
- Different dev and prod bundles
- Transitive Dependencies
*/

Core JavaScript Topics for React
ES6+ Features

Arrow Functions: Used extensively in functional components and event handlers.

Destructuring: Critical for props, state, and object/array manipulation (e.g., const { propName } = props).

Spread/Rest Operators: For immutable state updates (e.g., [...array], { ...obj }).

Template Literals: Dynamic strings (e.g., class names).

Modules (import/export): Organizing React components into files.

let/const vs. var: Block-scoped variables for state management.

Array Methods

map(): Rendering lists in JSX (e.g., {items.map(item => <Component />)}).

filter()/reduce(): Data transformations and state updates.

find()/some()/every(): Conditional logic in components.
Asynchronous JavaScript

Promises & async/await: Fetching data from APIs (e.g., useEffect with async operations).

Error handling with try/catch.

Functions and Scope

Closures: Understanding how state is preserved in hooks (e.g., useState, useEffect).

Higher-Order Functions (HOFs): Used in React patterns like Higher-Order Components (HOCs).

Callback Functions: Passing functions as props (e.g., event handlers).

Objects and Immutability

Immutable updates: Avoid direct mutation (critical for React state, Redux, etc.).

Reference vs. value: Avoid unintended side effects in state.

Event Handling

DOM events in vanilla JS (e.g., onClick, onChange) to understand React’s synthetic events.

Functional Programming Basics

Pure functions: Predictable UI components.

Side effects: Managed via useEffect in React.

Advanced Topics (Optional but Helpful)
Classes (Legacy React)

Class components (less common with hooks) and lifecycle methods (e.g., componentDidMount).

The this Keyword

Relevant for class components and older React codebases.

Prototypes/Inheritance

Less critical for React (composition > inheritance), but good for JS fundamentals.

JSON

Parsing API responses (e.g., fetch() + .json()).

Web APIs

fetch(), localStorage, and timers (setTimeout/setInterval).

Type Checking

typeof, instanceof, and optional tools like TypeScript for type safety.

Ecosystem Tools
Package Managers (npm/yarn)

Installing React and libraries (e.g., npm create vite@latest).

Bundlers (Webpack/Vite)

Understand how React apps are built and bundled.

Testing (Jest/React Testing Library)

Writing tests for React components.

React-Specific Patterns to Learn After JS Basics
JSX: HTML-like syntax in JavaScript.

Components (Functional vs. Class): Start with functional components + hooks.

State Management: useState, useReducer, Context API, or external libraries (Redux).

Hooks: useEffect, useContext, useMemo, useCallback, etc.

Component Lifecycle: Managed via hooks like useEffect.

// js usesage in development mode

JavaScript is an incredibly versatile language used across frontend, backend, game development, mobile apps, desktop apps, and more. Here’s a breakdown of what you can build with JavaScript and the tools/frameworks involved:

1. Frontend Development
JavaScript is the backbone of modern web interfaces. You can build:

Single-Page Applications (SPAs):

Tools: React, Vue.js, Angular, Svelte.

Examples: Social media apps (e.g., Facebook), dashboards, e-commerce sites.

Progressive Web Apps (PWAs):

Offline-first apps with service workers (e.g., Twitter Lite).

Dynamic UI Components:

Interactive forms, animations, carousels, and real-time updates.

Static Websites:

Use static site generators like Gatsby or Next.js.

Web Games:

Simple browser games (e.g., puzzles, quizzes).
2. Backend Development (Node.js)
JavaScript isn’t limited to the browser. With Node.js, you can build:

RESTful APIs:

Tools: Express.js, NestJS, Fastify.

Real-Time Apps:

Chat apps, live notifications (e.g., using Socket.io).

Serverless Functions:

AWS Lambda, Firebase Cloud Functions.

Microservices:

Scalable backend architectures.

Authentication Systems:

JWT, OAuth, Passport.js.

Database-Driven Apps:

MongoDB (NoSQL), PostgreSQL (SQL), or Firebase.
3. Game Development
JavaScript powers browser-based and mobile games:

2D Games:

Frameworks: Phaser.js, Pixi.js.

Examples: Platformers, puzzle games, retro-style games.

3D Games:

Libraries: Three.js, Babylon.js, A-Frame (for VR).

Examples: Simple 3D worlds, VR experiences.

Browser Games:

HTML5 Canvas or WebGL for rendering.

Mobile Games:

Wrap web games into mobile apps using React Native or Ionic.

4. Mobile Apps
Build cross-platform apps with JavaScript:

React Native:

iOS/Android apps (e.g., Instagram, Airbnb).

Ionic:

Hybrid apps using web tech (HTML/CSS/JS).

NativeScript:

Truly native apps with JavaScript.

5. Desktop Apps
Create cross-platform desktop applications:

Electron:

Apps like VS Code, Slack, Discord.

Tauri:

Lightweight alternative to Electron.

Proton Native:

React-like syntax for native desktop apps.
6. Machine Learning & AI
TensorFlow.js:

Train and deploy ML models in the browser (e.g., image recognition).

Brain.js:

Simple neural networks for predictions.
7. Automation & Scripting
Task Automation:

Use Node.js to automate file operations, web scraping (e.g., Puppeteer).

CLI Tools:

Build command-line utilities (e.g., npm packages).

8. IoT (Internet of Things)
Raspberry Pi/Arduino:

Control hardware using Node.js (e.g., sensors, robots).

9. Blockchain & Web3
Smart Contracts:

Use libraries like Web3.js or Ethers.js for Ethereum DApps.

NFT Marketplaces:

Build decentralized apps (DApps) with Solidity and React.

10. Tools & Utilities
Code Editors:

VS Code extensions (built with JS/TypeScript).

Dev Tools:

Linters (ESLint), bundlers (Webpack), and testing frameworks (Jest, Cypress).

Example Projects to Try
Category	Project Ideas
Frontend	Todo app, weather app, e-commerce store, portfolio site.
Backend	Blog API, real-time chat app, URL shortener.
Games	2D platformer, memory card game, 3D maze.
Mobile	Fitness tracker, note-taking app, recipe manager.
Desktop	Markdown editor, password manager, music player.