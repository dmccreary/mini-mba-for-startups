# Learning Graph Generator Session Log

- **Skill version:** 0.05
- **Date:** 2026-05-18
- **Textbook:** Ole Cup Entrepreneurship: A Liberal Arts Guide to the St. Olaf Pitch Competition
- **Repo:** mini-mba-for-startups

## Python Programs Used

| Program | Version note |
|---|---|
| `analyze-graph.py` | Copied from skill package v0.05 |
| `csv-to-json.py` | v0.04 (batched DataSet updates) |
| `taxonomy-distribution.py` | Copied from skill package v0.05 |

## Steps Completed

| Step | Result |
|---|---|
| Step 0: Setup | docs/learning-graph/ present; Python programs copied |
| Step 1: Course Description Quality | Score 96/100 found in frontmatter — skipped full reassessment |
| Step 2: Concept Labels | 200 concepts generated across 12 categories |
| Step 3: Dependency Graph | learning-graph.csv — 200 rows, 322 edges |
| Step 4: Quality Validation | Valid DAG, 0 cycles, 0 orphans, max chain 16 — score 86/100 |
| Step 5: Concept Taxonomy | 12 categories defined in concept-taxonomy.md |
| Step 5b: Taxonomy Names JSON | taxonomy-names.json created |
| Step 6: Add Taxonomy to CSV | TaxonomyID column added to all 200 rows |
| Step 7: Metadata JSON | metadata.json created |
| Step 8: Color Config | color-config.json created (12 distinct CSS named colors) |
| Step 9: Generate JSON | learning-graph.json: 200 nodes, 322 edges, 12 groups |
| Step 10: Taxonomy Distribution | taxonomy-distribution.md — all categories under 30% |
| Step 11: Update index.md | learning-graph/index.md updated with viewer embed |
| Step 12: mkdocs.yml nav | All 5 learning-graph files added to navigation |

## Graph Statistics

- Total concepts: 200
- Total edges: 322
- Foundational concepts (no deps): 7
- Taxonomy categories: 12
- Max dependency chain: 16
- Orphaned nodes: 0
- Connected components: 1

## Taxonomy Color Assignment

| TaxonomyID | Name | Color |
|---|---|---|
| FOUND | Foundation Concepts | SteelBlue |
| IKIH | Ikigai and Self-Discovery | DarkOrchid |
| IDEA | Ideation and Creativity | DarkGreen |
| OPP | Opportunity Recognition | Gold |
| VALC | Value and Customer Discovery | Teal |
| LEAN | Lean and MVP Thinking | DodgerBlue |
| SOC | Social Ventures and Impact | Crimson |
| TEAM | Team and Leadership | MediumPurple |
| BIZ | Business Model Canvas | DarkGoldenrod |
| FIN | Financial Fundamentals | OliveDrab |
| MRKT | Marketing and Storytelling | HotPink |
| PITCH | Pitching and Competition | Orange |
