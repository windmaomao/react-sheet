---
title: "Topological sorting"
date: "2019-12-22"
tags:  ["algorithm", "advent-of-code", "notes"]
excerpt: "In computer science, a topological sort or topological ordering of a directed graph is a linear ordering of its vertices such that for every directed edge uv from vertex u to vertex v, u comes before v in the ordering."
---

In computer science, a topological sort or topological ordering of a directed graph is a linear ordering of its vertices such that for every directed edge uv from vertex u to vertex v, u comes before v in the ordering. For instance, the vertices of the graph may represent tasks to be performed, and the edges may represent constraints that one task must be performed before another; in this application, a topological ordering is just a valid sequence for the tasks. A topological ordering is possible if and only if the graph has no directed cycles, that is, if it is a directed acyclic graph (DAG). Any DAG has at least one topological ordering, and algorithms are known for constructing a topological ordering of any DAG in linear time.

![](https://i1.wp.com/algorithms.tutorialhorizon.com/files/2018/03/Topological-Sort.png?w=750&ssl=1)

More reading: https://en.wikipedia.org/wiki/Topological_sorting
