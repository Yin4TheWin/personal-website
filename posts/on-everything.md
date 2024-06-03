---
title: 'On Everything - Draft'
date: '2024-05-31'
desc: '(UNFINISHED) An exploration of universes containing anything and everything, and a useful langauge to describe them.'
tags: 'math, ramblings'
---
⚠️ **Note**: Below is a rough outline/some notes on a topic I've wanted to cover for a while now, and I'm in the process of converting it into something readable and beginner-friendly. The full version will be released all at once and soon-ish; I'm posting the notes now to hold myself accountable. Thanks!

-----

First, some definitions:

Set: an unordered collection of unique elements. Ex: {2,3,4} is a set containing the elements 2, 3, and 4. Since sets are unordered, {4, 3, 2} is the same set (more on that later).

Union: denoted by ∪, the ∪ of a collection of sets is the set of all elements in that collection. Ex: {2,3,4} ∪ {4,5} = {2,3,4,5}. Remember that elements in a set are unique!

Intersection: denoted by ∩, the ∩ of two sets is the set of all elements common to both sets. Ex: {2,3,4} ∩ {4,5} = {4}.

Subset (⊆): A set, let's call it A, is a ⊆ of another set B if all elements in A are also in B. Ex: {2,3} ⊆ {2,3,4}. Also, {2,3} ⊆ {2,3}.

Equal (=): two sets A and B are equal if they contain precisely the same elements; that is, A⊆B and B⊆A. Ex: {2,3,4} = {4,3,2}.

Now we will go over how to prove some mathematical statements. To prove A⊆B, we take an arbitrary element in A and show it is also in B (If any element in A can be shown to be in B, then every element of A can be shown to be in B).

For example, let's prove the set of all even integers is a subset of the set of all integers. Remember the method: pick an arbitrary even integer and prove it is an integer. All even integers are of the form 2n, where n is an integer, so let's pick 2n. Since 2 is an integer and n is an integer, 2n is also an integer (this may seem obvious but if we are being rigorous we should prove this too. Maybe I'll do it in a future post). Anyway, now we are done! Let's do one more proof to close it out.

Let's look at one involving set equality. Recall its definition: two sets are equal if they contain precisely the same elements. To prove equality we ALWAYS need to prove two containments: A⊆B and B⊆A. Before we look at the example I want to define the empty set (∅): it is simply a set which contains no elements.

Suppose you are given an arbitrary set A. Let's prove that A ∩ ∅ = ∅. 