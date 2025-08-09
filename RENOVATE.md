# Renovate Bot Configuration

This project uses Renovate Bot to automatically manage dependency updates. This document explains the setup and configuration.

## What is Renovate?

Renovate is an automated dependency update tool that:
- Scans your repository for dependencies
- Checks for newer versions
- Creates pull requests with updates
- Can automatically merge safe updates

## Files Overview

### `renovate.json` (Main Configuration)
The comprehensive configuration with custom rules:

- **Scheduling**: Runs before 6 AM on Mondays
- **Auto-merge**: Enabled for dev dependencies and type definitions
- **Grouping**: Related packages are grouped into single PRs
- **Labels**: Automatic labeling for easier PR management
- **Security**: Special handling for vulnerability alerts

### `.renovaterc` (Simple Configuration)
Minimal configuration that extends the base config. Use this if the main config is too complex.

### `.github/workflows/renovate.yml` (GitHub Actions)
Workflow that runs Renovate on GitHub Actions:
- Scheduled runs every Monday at 6 AM UTC
- Manual trigger available
- Requires `RENOVATE_TOKEN` secret

## Package Rules

### Dev Dependencies
- **Auto-merge**: ✅ Enabled
- **Labels**: `dev-dependencies`
- **Packages**: All devDependencies

### Type Definitions
- **Auto-merge**: ✅ Enabled  
- **Labels**: `type-definitions`
- **Packages**: `@types/*`

### Production Dependencies
- **Auto-merge**: ❌ Disabled (requires review)
- **Labels**: `production-dependencies`
- **Review**: Required

### Grouped Updates

#### React Group
- **Packages**: `react`, `react-dom`
- **Label**: `react-update`

#### Vite Group  
- **Packages**: `@vitejs/*`, `vite`
- **Label**: `vite-update`

#### Testing Group
- **Packages**: `@testing-library/*`, `vitest`, `jsdom`
- **Auto-merge**: ✅ Enabled
- **Label**: `testing-update`

#### Code Quality Group
- **Packages**: `eslint*`, `prettier`, `@typescript-eslint/*`
- **Auto-merge**: ✅ Enabled
- **Label**: `code-quality`

## Setup Instructions

### Option 1: GitHub App (Recommended)
1. Go to [Renovate GitHub App](https://github.com/apps/renovate)
2. Click "Install"
3. Select your repository
4. Renovate will automatically detect the configuration

### Option 2: Self-Hosted with GitHub Actions
1. Create a GitHub Personal Access Token with repo permissions
2. Add it as a repository secret named `RENOVATE_TOKEN`
3. The workflow will run automatically on schedule

### Option 3: Manual Testing
```bash
# Install Renovate CLI
npm install -g renovate

# Run locally (requires token)
export RENOVATE_TOKEN=your_github_token
renovate --dry-run your-username/your-repo
```

## Customization

### Changing Schedule
Edit the `schedule` field in `renovate.json`:
```json
"schedule": ["every weekend"]
```

### Disabling Auto-merge
Set `automerge: false` for specific package rules:
```json
{
  "matchDepTypes": ["devDependencies"],
  "automerge": false
}
```

### Adding New Groups
```json
{
  "matchPackagePatterns": ["^@mycompany/"],
  "groupName": "Company Packages",
  "labels": ["company-deps"]
}
```

## Monitoring

- **Dependency Dashboard**: Renovate creates an issue with all pending updates
- **PR Labels**: Each PR is automatically labeled by type
- **Branch Protection**: Configure branch protection rules to require status checks

## Troubleshooting

### Common Issues

1. **No PRs created**: Check if Renovate app is installed and has permissions
2. **Auto-merge not working**: Verify branch protection settings allow auto-merge
3. **Rate limiting**: Adjust `prHourlyLimit` and `prConcurrentLimit`

### Debug Mode
Enable debug logging in the GitHub Actions workflow:
```yaml
env:
  LOG_LEVEL: 'debug'
```

## Security

- **Vulnerability Alerts**: High priority, no auto-merge
- **Security Labels**: Automatic `security` label for CVE fixes
- **Review Required**: All security updates require manual review

## Benefits

- ✅ **Always up-to-date**: Never miss important updates
- ✅ **Reduced maintenance**: Automated routine updates  
- ✅ **Security focused**: Immediate notification of vulnerabilities
- ✅ **Organized updates**: Logical grouping and labeling
- ✅ **Safe automation**: Auto-merge only for low-risk updates
- ✅ **Customizable**: Extensive configuration options
