# Ole Cup Entrepreneurship: A Liberal Arts Guide to the St. Olaf Pitch Competition

[![MkDocs](https://img.shields.io/badge/Made%20with-MkDocs-526CFE?logo=materialformkdocs)](https://www.mkdocs.org/)
[![Material for MkDocs](https://img.shields.io/badge/Material%20for%20MkDocs-526CFE?logo=materialformkdocs)](https://squidfunk.github.io/mkdocs-material/)
[![GitHub Pages](https://img.shields.io/badge/View%20on-GitHub%20Pages-blue?logo=github)](https://dmccreary.github.io/mini-mba-for-startups/)
[![Claude Code](https://img.shields.io/badge/Built%20with-Claude%20Code-DA7857?logo=anthropic)](https://claude.ai/code)
[![Claude Skills](https://img.shields.io/badge/Uses-Claude%20Skills-DA7857?logo=anthropic)](https://github.com/dmccreary/claude-skills)
[![License: CC BY-NC-SA 4.0](https://img.shields.io/badge/License-CC%20BY--NC--SA%204.0-lightgrey.svg)](https://creativecommons.org/licenses/by-nc-sa/4.0/)

## View the Live Site

Visit the interactive textbook at: [https://dmccreary.github.io/mini-mba-for-startups/](https://dmccreary.github.io/mini-mba-for-startups/)

## Overview

This is an interactive intelligent textbook designed to guide **all St. Olaf College students** — regardless of major — from a first spark of an idea all the way through pitching a venture at the **Ole Cup**, St. Olaf's annual Shark Tank-style entrepreneurship competition hosted by the Piper Center for Vocation and Career.

The book requires no prior business coursework. A music major, a biology major, a theater student, and a computer scientist can all walk in on equal footing. Chapters follow a natural journey: discovering your Ikigai, generating ideas from across the liberal arts, validating assumptions with minimum viable products, building diverse teams, mastering the Business Model Canvas, and ultimately delivering a compelling pitch under pressure.

The textbook is built on MkDocs Material with an embedded learning graph that maps all 200+ concepts and their dependencies, interactive MicroSims (browser-based simulations for key exercises), Bloom's Taxonomy–aligned learning objectives, and Rune the Raven — a mascot who guides students through difficult concepts with warmth and humor.

Past Ole Cup participants have founded ventures that reached Target and Costco shelves, aired on Shark Tank, and competed in the Hult Prize globally. The Ole Cup winner automatically qualifies for the **Minnesota Cup** student division — the largest statewide new venture competition in the country.

## Getting Started

### Prerequisites

- Python 3.8 or later
- `pip` package manager

### Clone the Repository

```bash
git clone https://github.com/dmccreary/mini-mba-for-startups.git
cd mini-mba-for-startups
```

### Install Dependencies

```bash
pip install mkdocs mkdocs-material
```

### Serve Locally

```bash
mkdocs serve
```

Open your browser to `http://localhost:8000/mini-mba-for-startups/`

### Build the Site

```bash
mkdocs build
```

### Deploy to GitHub Pages

```bash
mkdocs gh-deploy
```

This rebuilds the site and pushes it to the `gh-pages` branch.

## Repository Structure

```
mini-mba-for-startups/
├── docs/                           # MkDocs source content
│   ├── index.md                    # Home page
│   ├── course-description.md       # Full 15-topic course description
│   ├── about.md                    # Audience, prerequisites, how to read
│   ├── chapters/                   # Chapter content (15 planned chapters)
│   │   └── index.md
│   ├── learning-graph/             # Learning graph data and analysis
│   │   ├── learning-graph.csv      # Concept dependency table
│   │   ├── learning-graph.json     # vis-network format for the viewer
│   │   ├── concept-list.md         # Full enumerated concept list
│   │   ├── concept-taxonomy.md     # Bloom's Taxonomy categorization
│   │   └── quality-metrics.md      # Graph quality analysis report
│   ├── sims/                       # Interactive MicroSims
│   │   └── graph-viewer/           # Learning graph browser
│   ├── img/
│   │   └── mascot/                 # Rune the Raven pose images (7 poses)
│   ├── css/
│   │   ├── extra.css               # Theme customizations
│   │   └── mascot.css              # Mascot admonition styles
│   ├── glossary.md                 # Entrepreneurship term definitions
│   ├── license.md                  # CC BY-NC-SA 4.0 details
│   └── contact.md
├── plugins/
│   └── social_override.py          # MkDocs hook for og:image frontmatter
├── mkdocs.yml                      # Site configuration
└── README.md                       # This file
```

## Reporting Issues

Found a typo, broken link, or have a suggestion for improvement? Please open an issue:

[GitHub Issues](https://github.com/dmccreary/mini-mba-for-startups/issues)

When reporting issues, please include:

- Description of the problem or suggestion
- The page URL or chapter name where it occurs
- Steps to reproduce (for bugs or broken MicroSims)
- Screenshots if applicable

## License

This work is licensed under the [Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International License](https://creativecommons.org/licenses/by-nc-sa/4.0/).

**You are free to:**

- Share — copy and redistribute the material
- Adapt — remix, transform, and build upon the material

**Under the following terms:**

- **Attribution** — Give appropriate credit with a link to the original
- **NonCommercial** — No commercial use without permission
- **ShareAlike** — Distribute contributions under the same license

See [license.md](docs/license.md) for full details.

## Acknowledgements

This project builds on the work of remarkable open source communities:

- **[MkDocs](https://www.mkdocs.org/)** — Static site generator optimized for project documentation
- **[Material for MkDocs](https://squidfunk.github.io/mkdocs-material/)** — Beautiful, accessible documentation theme
- **[vis-network](https://visjs.org/)** — Network visualization library powering the learning graph viewer
- **[Claude AI](https://claude.ai)** by Anthropic — AI-assisted content generation and skill automation
- **[GitHub Pages](https://pages.github.com/)** — Free hosting for open source educational projects
- **The Piper Center for Vocation and Career at St. Olaf College** — Host of the Ole Cup competition and home of student entrepreneurship on campus
- **Ole Cup alumni founders** — JonnyPops, The Kombucha Shop, Netless Catch, Vasikana Vedu, Elimisha Kakuma, Foodle, and every team that ever took the stage

## Contact

**Dan McCreary**

- LinkedIn: [linkedin.com/in/danmccreary](https://www.linkedin.com/in/danmccreary/)
- GitHub: [@dmccreary](https://github.com/dmccreary)

Questions, collaboration proposals, or corrections? Open an issue on GitHub or connect on LinkedIn.
