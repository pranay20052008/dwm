# OSBoard — GitHub Project Manager Dashboard

A clean, dark-themed project management dashboard for open source projects.

## How to open in VS Code

1. Unzip the file and open the `osboard` folder in VS Code
2. Install the **Live Server** extension (by Ritwick Dey) if you haven't already
3. Right-click `index.html` → **Open with Live Server**
4. The dashboard will open at `http://127.0.0.1:5500`

Or simply open `index.html` directly in your browser — no server needed.

## Features

- **Kanban board** — drag cards between Backlog, In Progress, In Review, Done
- **Issues view** — table of all open/closed issues with labels and assignees
- **Pull requests view** — PR list with branch names and CI status
- **CI / Actions view** — workflow run status per branch
- **Branches view** — all branches with PR and CI status
- **Milestones view** — v3.0 and v2.4.1 progress tracking

## Structure

```
osboard/
├── index.html       # Main app
├── css/
│   └── style.css    # All styles (dark theme)
├── js/
│   └── app.js       # Navigation + drag & drop logic
└── README.md
```

## Next steps

To connect to a real GitHub repo, use the GitHub REST API:
- Base URL: `https://api.github.com/repos/{owner}/{repo}`
- Add a personal access token as a Bearer token in request headers
- Replace mock data in `app.js` with API responses
