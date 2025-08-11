# Terminal Portfolio Website by Florian Jäger

![Terminal Portfolio Website by Florian Jäger]

![ts](https://badgen.net/badge/Built%20With/TypeScript/blue?style=flat-square)
![GitHub Workflow Status](https://img.shields.io/github/actions/workflow/status/flori950/terminalportfolio/ftp-deploy.yml?label=deployment&style=flat-square)
[![Renovate enabled](https://img.shields.io/badge/renovate-enabled-brightgreen.svg?style=flat-square)](https://renovatebot.com/)
![Gitmoji](https://img.shields.io/badge/gitmoji-%20😜%20😍-FFDD67.svg?style=flat-square)

My portfolio website in terminal version developed with React, TypeScript and Styled-Components. Multiple themes supported and keyboard shortcuts can be used for some functionalities.

A terminal-style portfolio website showcasing Florian Jäger's professional profile as a Cloud-Native Architect.




## Demo

## Features

- Responsive Design 📱💻
- Multiple themes 🎨
- Autocomplete feature ✨ (TAB | Ctrl + i)
- Go previous and next command ⬆️⬇️
- View command history 📖
- PWA and Offline Support 🔥
- Well-tested ✅
- **Automated dependency updates with Renovate Bot** 🤖
- **Automatic FTP Deployment** 🚀

## Tech Stack

**Frontend** - [React](https://reactjs.org/), [TypeScript](https://www.typescriptlang.org/)  
**Styling** - [Styled-Components](https://styled-components.com/)  
**UI/UX** - [Figma](https://figma.com/)  
**State Management** - [ContextAPI](https://reactjs.org/docs/context.html)  
**Testing** - [Vitest](https://vitest.dev/), [React Testing Library](https://testing-library.com/)  
**Deployment** - Automated FTP deployment via GitHub Actions
**Dependency Management** - [Renovate Bot](https://renovatebot.com/) for automated updates



## Automated Dependency Management

This project uses [Renovate Bot](https://renovatebot.com/) to automatically keep dependencies up to date. Renovate:

- 🔄 **Automatically creates pull requests** when new versions of dependencies are available
- 🏷️ **Organizes updates by type** (production deps, dev deps, testing, etc.)
- 🔒 **Handles security updates** with high priority
- ⚡ **Auto-merges safe updates** like dev dependencies and type definitions
- 📅 **Runs on schedule** (Mondays at 6 AM) to avoid disruption
- 🧪 **Groups related packages** (React, Vite, Testing tools) into single PRs

### Configuration Files:
- `renovate.json` - Main configuration with custom rules and grouping
- `.renovaterc` - Simple fallback configuration
- `.github/workflows/renovate.yml` - GitHub Actions workflow for dependency updates
- `.github/workflows/ftp-deploy.yml` - GitHub Actions workflow for automatic FTP deployment

## Deployment

This project uses GitHub Actions for automated FTP deployment. The deployment workflow:

1. Triggers automatically on pushes to the main branch
2. Sets up Node.js and pnpm
3. Installs dependencies
4. Builds the project
5. Deploys the built files to the FTP server

The deployment configuration is managed through GitHub Secrets for security:
- `FTP_SERVER` - The FTP server address
- `FTP_USERNAME` - FTP username
- `FTP_PASSWORD` - FTP password

### Setting up Renovate (for repository maintainers):
1. **For GitHub repositories**: Install the [Renovate GitHub App](https://github.com/apps/renovate)
2. **For self-hosted**: Set up the GitHub Actions workflow with a `RENOVATE_TOKEN` secret
3. **Manual trigger**: Use the "Renovate" workflow in GitHub Actions for immediate runs

## Lighthouse Score

<p align="center">
<img width="710" alt="Terminal Portfolio Lighthouse Score" src="public/lighthouse-result.svg">
</p>

## Running Locally

Clone the project

```bash
git clone https://github.com/flori950/terminalportfolio.git
```

Go to the project directory

```bash
cd terminalportfolio
```

Remove remote origin

```bash
git remote remove origin
```

Install dependencies

```bash
npm install
```

Start the server

```bash
npm run dev
```

## Inspiration and Credits

Here are some inspiration for this kind of terminal website. Only some features and functionalities are inspired by these following websites. All codes are written on my own.

- [term m4tt72](https://term.m4tt72.com/)
- [Forrest](https://fkcodes.com/)

## Author

- [@flori950](https://github.com/flori950)
