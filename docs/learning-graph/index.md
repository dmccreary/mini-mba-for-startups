# Learning Graph for Ole Cup Entrepreneurship

[Open Learning Graph Viewer Fullscreen](../sims/graph-viewer/main.html){ .md-button .md-button--primary }

<iframe src="../sims/graph-viewer/main.html" width="100%" height="600px" frameborder="0" scrolling="no"></iframe>

This section contains the learning graph for *Ole Cup Entrepreneurship: A Liberal Arts Guide to the St. Olaf Pitch Competition*.

A learning graph is a graph of concepts used in this textbook. Each concept is represented by a node in a network graph. Concepts are connected by directed edges that indicate what concepts each node depends on before that concept can be understood by the student.

A learning graph is the foundational data structure for intelligent textbooks that can recommend learning paths. It is like a roadmap of concepts to help students arrive at their learning goals.

At the **left** of the learning graph are prerequisite or foundational concepts (no outbound edges). At the **far right** are the most advanced concepts. To master these concepts you must understand all the concepts that they point to.

This graph contains **200 concepts**, **322 edges**, and **12 taxonomy categories** — from foundational mindsets like Creativity and Growth Mindset all the way to Live Pitch and Post-Competition Launch.

## Course Description

We use the [Course Description](../course-description.md) as the source document for the concepts included in this course. The course description uses the 2001 Bloom Taxonomy to order learning objectives.

## List of Concepts

Generative AI converted the course description into a [Concept List](./concept-list.md). Each concept is in Title Case with labels under 32 characters.

## Concept Dependency List

The dependency graph is provided as a [CSV file](learning-graph.csv) and a [JSON file](learning-graph.json) in vis-network JavaScript library format. The JSON format uses `nodes`, `edges`, and `metadata` elements with edges containing `from` and `to` properties.

## Analysis and Documentation

### Course Description Quality Assessment

Rates the overall quality of the course description for generating a learning graph.

[View the Course Description Quality Assessment](course-description-assessment.md) — **Score: 96/100 (Excellent)**

### Learning Graph Quality Validation

Overall assessment of the learning graph using graph algorithms.

- Valid DAG structure (no cycles)
- 0 orphaned nodes — all 200 concepts connected
- 7 foundational concepts (entry points)
- Maximum dependency chain: 16 steps
- Top hub: Pitch Deck (10 inbound dependencies)

[View the Learning Graph Quality Validation](quality-metrics.md)

### Concept Taxonomy

12 color-coded taxonomy categories assigned to each concept for pattern recognition in the viewer.

[View the Concept Taxonomy](concept-taxonomy.md)

### Taxonomy Distribution

Statistical breakdown of concepts per category — all categories under 30%.

[View the Taxonomy Distribution Report](taxonomy-distribution.md)
