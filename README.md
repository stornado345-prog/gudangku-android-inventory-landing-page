# Gudangku — Android Inventory Management Landing Page

A modern, responsive landing page for **Gudangku**, an Android inventory management application. Built with React, TypeScript, Vite, and Tailwind CSS to showcase the application, its interface, and project information.

**Live Website:** [Gudangku Landing Page](https://stornado345-prog.github.io/gudangku-android-inventory-landing-page/)

**GitHub Repository:** [gudangku-android-inventory-landing-page](https://github.com/stornado345-prog/gudangku-android-inventory-landing-page)

> Note: The live website link is the intended deployment URL. Its availability depends on a successful GitHub Pages deployment.

## Overview

Gudangku is an Android inventory management project presented through a dedicated product landing page. The website introduces the application and provides visitors with a clear overview of its purpose, interface, and features.

This project demonstrates modern frontend development practices, including component-based architecture, responsive styling, animation, and static website deployment.

## Features

* **Responsive Layout** — Designed to adapt to desktop, tablet, and mobile screens.
* **Modern UI** — Clean presentation for showcasing the Gudangku application.
* **Application Showcase** — Displays project information and application screenshots when available.
* **Smooth Animations** — Uses Motion for animated interface elements.
* **Reusable Components** — Built with React and TypeScript.
* **Utility-First Styling** — Uses Tailwind CSS for layout and styling.
* **Optimized Production Build** — Uses Vite to bundle frontend assets.
* **Static Hosting** — Designed for deployment through GitHub Pages and GitHub Actions.

## Technology Stack

| Technology   | Purpose                                   |
| ------------ | ----------------------------------------- |
| TypeScript   | Typed application logic                   |
| React        | Component-based user interface            |
| TSX / JSX    | UI markup within React components         |
| Vite         | Development server and production bundler |
| Tailwind CSS | Styling and responsive design             |
| Motion       | UI animations                             |
| Lucide React | Interface icons                           |
| HTML5        | Main document structure                   |
| CSS          | Styling foundation                        |
| JSON         | Project and dependency configuration      |
| YAML         | GitHub Actions workflow configuration     |
| Git & GitHub | Version control and source hosting        |
| GitHub Pages | Static website hosting                    |

## Getting Started

### Prerequisites

Install the following tools:

* [Node.js](https://nodejs.org/)
* npm
* [Git](https://git-scm.com/)
* [Visual Studio Code](https://code.visualstudio.com/) (recommended)

### 1. Clone the Repository

```bash
git clone https://github.com/stornado345-prog/gudangku-android-inventory-landing-page.git
```

### 2. Navigate to the Project

```bash
cd gudangku-android-inventory-landing-page
```

### 3. Install Dependencies

```bash
npm install
```

On Windows PowerShell, you can use:

```powershell
npm.cmd install
```

### 4. Start the Development Server

```powershell
npm.cmd run dev
```

Open the local development URL displayed in the terminal. In this project, it is typically:

`http://localhost:3000`

### 5. Build for Production

```powershell
npm.cmd run build
```

Vite generates the production-ready website in the `dist/` directory.

### 6. Preview the Production Build

```powershell
npm.cmd run preview
```

Open the preview URL shown in the terminal to inspect the production build locally.

### 7. Run TypeScript Checks

If the project defines a `lint` script that runs TypeScript checks, execute:

```powershell
npm.cmd run lint
```

## Project Structure

The following is an example of a typical project structure. Actual filenames and directories may differ depending on the current implementation.

```text
gudangku-android-inventory-landing-page/
├── .github/
│   └── workflows/
│       └── deploy.yml
├── public/
├── src/
│   ├── assets/
│   ├── components/
│   ├── App.tsx
│   └── main.tsx
├── index.html
├── package.json
├── package-lock.json
├── vite.config.ts
├── tsconfig.json
└── README.md
```

## Deployment with GitHub Pages

This project is configured for static hosting through GitHub Pages.

### Deployment Configuration

1. Push the approved changes to the `main` branch.
2. Open the repository's **Settings → Pages**.
3. Select **GitHub Actions** as the deployment source.
4. Open the **Actions** tab.
5. Run or monitor the deployment workflow.
6. Confirm that the deployment job completes successfully.
7. Open the published website and verify that its assets load correctly.

### Vite Base Path

Because the website is hosted under a GitHub repository path, the production build must use the correct base path:

```text
/gudangku-android-inventory-landing-page/
```

This ensures that generated JavaScript, CSS, and other assets resolve correctly when hosted on GitHub Pages.

### Deployment URL

Expected website URL:

https://stornado345-prog.github.io/gudangku-android-inventory-landing-page/

The website should be considered live only after GitHub Pages deployment succeeds.

## Development Workflow

A typical development workflow:

1. Modify React components, styling, or assets.
2. Run the development server.
3. Review changes in the browser.
4. Run the production build.
5. Review Git changes before committing.
6. Push approved changes to GitHub.
7. Check the GitHub Actions deployment result.

## Project Goals

This project serves as a frontend showcase for the Gudangku Android application and demonstrates practical experience with:

* Modern React and TypeScript development.
* Responsive web design.
* Component-based UI development.
* Frontend animation.
* Production builds with Vite.
* Static website deployment and version control.

## Developer

**Satria Tornado**
Android & Web Developer

* **GitHub:** [stornado345-prog](https://github.com/stornado345-prog)

## License

No license has been specified for this repository. Unless a license is added, the source code remains subject to applicable copyright laws.

---

**Built with React, TypeScript, Vite, Tailwind CSS, and Motion.**
