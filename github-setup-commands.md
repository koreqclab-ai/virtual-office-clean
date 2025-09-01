# GitHub CLI Setup Commands

After installing GitHub CLI (`gh`), run these commands:

## 1. Authenticate with GitHub
```bash
gh auth login
```
Choose:
- GitHub.com
- HTTPS
- Login via web browser

## 2. Create Repository and Push
```bash
cd "/Users/chinkeongphua/Desktop/claude-project/Virtual Office Subscription"

# Create GitHub repository
gh repo create virtual-office-subscription --public --description "Virtual Office Subscription website for Singapore CBD business addresses at International Plaza. Built with React, Vite, and Tailwind CSS." --source=.

# Push to GitHub
git push -u origin main
```

## 3. Verify Repository
```bash
gh repo view --web
```

This will open your repository in the browser to confirm everything is uploaded correctly.

## Benefits of GitHub CLI for Production:
- ✅ Seamless repository creation
- ✅ Easy deployment workflows
- ✅ Automated PR creation
- ✅ Issue management
- ✅ GitHub Actions integration
- ✅ Quick cloning and forking