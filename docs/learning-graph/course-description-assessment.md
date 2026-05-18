# Course Description Assessment

**Course Description Analyzer — Version 0.03**

## Overall Score: 89 / 100

**Quality Rating: Good — Minor improvements recommended (75–89)**

The course description for *Ole Cup Entrepreneurship: A Liberal Arts Guide to the St. Olaf Pitch Competition* is well-structured, rich in topic breadth, and contains strong Bloom's Taxonomy outcomes at the Understand, Apply, Evaluate, and Create levels. Two gaps hold it below 90: a missing "Topics Excluded" scope boundary and a thin Remember-level outcome section. Both are easy to address.

---

## Detailed Scoring Breakdown

| Element | Earned | Max | Assessment |
|---|---|---|---|
| **Title** | 5 | 5 | Descriptive and competition-specific |
| **Target Audience** | 5 | 5 | "All St. Olaf students regardless of major" with explicit examples |
| **Prerequisites** | 5 | 5 | Clearly listed; no business background required |
| **Main Topics Covered** | 10 | 10 | 15 topics, each with 4–5 sub-concepts — excellent breadth |
| **Topics Excluded** | **0** | 5 | **Missing** — no explicit scope boundary section |
| **Learning Outcomes Header** | 5 | 5 | "By the end of this book, the reader will be able to:" |
| **Remember Level** | **6** | 10 | One combined bullet covers 3 items; needs 3 separate outcomes |
| **Understand Level** | 10 | 10 | Three verbs: explain, describe, interpret — strong |
| **Apply Level** | 10 | 10 | Three concrete deliverables tied to specific tools |
| **Analyze Level** | **8** | 10 | Two outcomes; a third would complete the level |
| **Evaluate Level** | 10 | 10 | Three clear judgment outcomes referencing Ole Cup criteria |
| **Create Level** | 10 | 10 | Full capstone (Ole Cup pitch) + team-building outcome |
| **Descriptive Context** | 5 | 5 | Rich historical context on Ole Cup + Ikigai diagram |
| **TOTAL** | **89** | **100** | |

---

## Gap Analysis

### Gap 1 — Topics Excluded (0/5 points lost)

The course description has no section listing what is **not** covered. Without explicit scope boundaries, the learning graph generator may enumerate concepts from adjacent fields that are out of scope — for example, advanced corporate finance, MBA-level strategy frameworks, IP law, securities regulation, or general management theory.

**Impact on learning graph:** May generate 10–20 off-scope concepts that dilute the 200-concept target.

### Gap 2 — Remember Level (4 points lost)

The single Remember bullet packs three items into one sentence:
> "Recall the four circles of the Ikigai Venn diagram, the nine blocks of the Business Model Canvas, and the Ole Cup prize structure and timeline."

The scoring rubric requires **at least 3 separate, specific, actionable outcomes** at each Bloom's level to earn full marks. The current entry earns 6/10 — the content is appropriate but insufficiently granular.

**Impact on learning graph:** The generator uses Remember-level outcomes to identify foundational recall concepts (vocabulary, definitions, frameworks). A single combined entry underrepresents this layer.

### Gap 3 — Analyze Level (2 points lost)

Only two Analyze outcomes are present. A third outcome focusing on a distinct analytical skill — for example, competitive landscape analysis or market sizing — would complete this level.

---

## Improvement Suggestions

### Priority 1 (High): Add "Topics NOT Covered" section

Insert the following section into `docs/course-description.md` after the Topics list:

```markdown
## Topics NOT Covered

This course does NOT cover:

- Advanced corporate finance, valuation, or investment banking
- Intellectual property law, patent filing, or trademark registration
- Securities law, equity financing structures, or term sheets
- MBA-level operations management or supply chain optimization
- General management theory or organizational behavior at scale
- Coding, software engineering, or technical product development
- Macroeconomics or economic policy analysis
- Nonprofit administration or grant writing beyond an introductory level
```

### Priority 2 (Medium): Expand Remember outcomes to 3 separate bullets

Replace the single Remember bullet with three:

```markdown
- **Remember:** List the four overlapping circles of the Ikigai Venn diagram
  and name the four intersection zones (Passion, Mission, Vocation, Profession).
- **Remember:** Recall the nine building blocks of the Business Model Canvas
  and the order in which they are typically completed.
- **Remember:** State the Ole Cup prize amounts, application deadline, competition
  date, and eligibility requirements, including the Minnesota Cup qualification pathway.
```

### Priority 3 (Low): Add a third Analyze outcome

Append to the Analyze bullet:

```markdown
- **Analyze:** Conduct a basic competitive landscape analysis for a proposed venture
  by mapping existing competitors across two dimensions (price vs. quality, local vs.
  global) and identifying underserved white-space opportunities.
```

---

## Concept Generation Readiness

| Dimension | Assessment |
|---|---|
| Topic breadth | Excellent — 15 distinct topics across ideation, strategy, team, finance, pitch, ecosystem |
| Topic depth | Excellent — each topic lists 4–5 sub-concepts explicitly |
| Bloom's level diversity | Strong — all six levels present; minor gaps at Remember and Analyze |
| Estimated concept yield | **180–210 concepts** at current quality |
| Target (200 concepts) | Achievable without changes; improvements would push to 210–220 |

**Verdict:** The course description is ready to feed to the `learning-graph-generator` skill at its current score of 89. Applying the three improvements above would push the score to approximately **96/100** and would yield a richer, more precisely scoped concept graph.

---

## Next Steps

- **Recommended next action:** Apply the Priority 1 improvement (Topics NOT Covered) — 5 minutes of editing
- **Optional:** Apply Priority 2 and 3 improvements for a perfect score
- **When ready:** Run the `learning-graph-generator` skill against `docs/course-description.md`

The `learning-graph-generator` skill will:

1. Enumerate ~200 concepts drawn from the course description
2. Assign each concept a taxonomy category (e.g., Ikigai & Self-Discovery, Business Frameworks, Pitching & Communication)
3. Build a dependency graph (DAG) — each concept pointing to its prerequisites
4. Generate quality metrics and a taxonomy distribution report
5. Write `docs/learning-graph/learning-graph.json` for the interactive viewer

---

*Generated by course-description-analyzer v0.03 on 2026-05-18.*
