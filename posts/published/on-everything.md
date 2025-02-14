---
title: 'On Everything'
date: '2024-05-31'
rev: '2025-02-13'
desc: 'An exploration of universes containing anything and everything, and a useful language to describe them.'
tags: 'all,math,select'
---
Imagine a universe that contains only apples, oranges, mangoes, and big blue bananas. For simplicity, we'll call this the **Fruit Universe**. Now, imagine another universe containing T-Rexes, Velociraptors, Stegosauruses, and big blue bananas. For simplicity, we'll call this the **Prehistoric Universe**. Suppose you, a young universologist, managed to capture these two universes in a bottle. What might you learn from studying them together? Which items can only exist in one universe? Which items may exist in both?

Your universologist self is actually playing with an analogy for one of the most powerful ideas in mathematics — sets! Sets are the building blocks of mathematical thought — abstract containers that hold objects, which we just call elements. Just as a universe contains all the stuff that exists within it, a set contains all its elements. In this article, we'll explore the basics of set theory, which is the study of these universes. By the end, you'll be a certified ~~mathematician~~ universologist. 

Ready? Let's go on a magical journey!

![](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhqEt3g3adafa8AGbQzG4fQUnyGA2MVOxFRBY0OHuoUdXB4SjJlgSwe2Oi773olJGDy9mrEK3p4G5m1eaPWhBNy9fB01Grl0BcBE_Wiy99fl4yDs_quXlFXEzt7Cynl0zfWZ01iZwxnSidO/s1600/bbaeratd.jpg)

## What's in a Universe?
Before diving in, let’s lay down some definitions. To keep the analogy simple, I'll be replacing the idea of **sets** with **universes**, but just remember that if we are talking about a **universe** containing *xyz*, mathematically we would say that it's a **set** containing *xyz*.

**Universe (set):** an *unordered* collection of *unique* elements. 
- *Unordered* means that universes with the same content are the same, regardless of which order the content is presented. For example, the universe containing only The Emoji Movie, Step Brothers, and Red One is the same as the universe containing only Red One, Step Brothers, and The Emoji Movie. They are both the Bad Movies universe. 
- *Unique* means we only count each item in the universe once. For example, rather than saying the Banana Universe contains bananas, bananas, and bananas, we can just say it contains bananas.

**Union (∪):** If we combine the contents of two universes, the result is their **union**. For example, the Fruit Universe (apples, oranges, mangoes, big blue bananas) ∪ the Prehistoric Universe (T-Rexes, Velociraptors, Stegosauruses, big blue bananas) forms a new universe with apples, oranges, mangoes, big blue bananas, T-Rexes, Velociraptors, and Stegosauruses.
- Do you understand why our new universe doesn't contain two instances of big blue bananas? (hint: look at our definition for universes)

**Intersection (∩):** The **intersection** of two universes is a universe containing only the elements they share. For example, the Fruit Universe ∩ Prehistoric Universe contains only big blue bananas (that is the only element they have in common). 

**Subset (⊆)**: Remember we said that we will be using "set" and "universe" interchangeably? You can think of a **sub-set** like a "sub-universe". A universe *A* is a **subset** of a universe *B* if everything in *A* is also in *B*. For instance, the universe of all squares is a subset of the universe of all rectangles (because every square is a rectangle).

**Equality (=)**: this is a tough one. We say two universes are equal if they contain precisely the same elements. However, mathematicians and universologists alike are tough to please - **the only way to prove that two universes A and B are equal is to prove that A is a subset of B (A⊆B) AND that B is a subset of A (B⊆A)**. 
- If this is your first time encountering this definition, I encourage you to think about it a little bit before continuing, but we will be going over an example towards the end of the article that should make this clearer.

That was a lot! Take a moment to convince yourself that you understand these terms. It's time to run some experiments on these universes!

## Proofs, Experiments, Same Difference

Mathematicians are like normal people - they love being right - except they'll prove they're right using the indivisible, unshakeable truths of the universe 😭. Let's learn how to do some of that here, using the terminology we just picked up. We'll go over two types of proofs: subset proofs and equality proofs.

### Subset Proofs - Ditto! ![Ditto Icon (Pokemon)](https://www.serebii.net/pokedex-dp/icon/132.gif)
How can we prove that a Universe *A* is a subset of Universe *B*? Sure, we can look at **every single element** in A and check if it exists in B, but what if A has 1 billion elements? We don't want to be stuck here for 32 years! Thankfully, our Pokémon friend Ditto can help us out. 

If you're unfamiliar, Ditto is a Pokémon that can transform into any other Pokémon. Imagine we have a special Ditto that can transform into any element in the universe. Here's the trick: if we tell the Ditto to transform into a random object in Universe A, and we can prove that this transformed Ditto also belongs in Universe B (without knowing what it transformed into), then we've simultaneously proven that A is a subset of B. Why? Well, if the Ditto could feasibly be *any* element in Universe A, then it could be *every* element in Universe A. That is, if *anything* it transformed into could be proven to be in universe B, then we could theoretically keep telling it to transform until it became every element in universe A, thus thoroughly proving that A is a subset of B.

Let's catch a special Ditto and use it to prove that the Even Number Universe (the universe containing 0,2,4,6,...) is a **subset** of the Integer Universe (the universe containing 0,1,2,3,...). The proof goes something like this:
1. After telling Ditto to transform, we can be confident it's an even integer. Although we don't know the exact value, we know Ditto is of the form **2\*n**, where **n** is another integer. This is because every even number is divisble by 2, by definition (eg. 2 = 2\*1, 4 = 2\*2, 6 = 2\*3, ...).
2. So no matter what, Ditto = **2\*n**. Is our Ditto even? Yes!✅  Is it an integer? Also yes!!✅  **2** is an integer and **n** is an integer, so **2\*n** is an integer.
3. We're done! Just like that, we've proven that even numbers are a **subset** of all numbers.

### Equality Proofs - ¡Double Ditto!
Remember when I said that in order to prove A = B, we need to prove both A ⊆ B and B ⊆ A? Hopefully that feels a little less daunting after the previous example. We just need to do what we did previously, but twice! Let's grab two Dittos and approach our final challenge:

![New Simulation Sheds Light on Spiraling Supermassive Black Holes](https://live.staticflickr.com/3402/3598601013_c0f30cf63b_b.jpg)

The last obstacle in our way is the **Empty Universe (∅)**. It's a universe containing absolutely no elements. If it were ever to collide with our universe, terrible things would happen. Let's prove it: I claim that **any** universe A, when intersected with ∅ becomes equal to ∅. In other words, we need to prove that (A ∩ ∅) = ∅. Two Dittos, go!

1. **Ditto #1: A ∩ ∅ ⊆ ∅** These symbols look scary, but let's decode them one at a time. ∅ represents the Empty Universe, ∩ represents Universe intersection, and ⊆ represents subset. We need to use our first Ditto to prove that any element in the universe of "A intersected with ∅" belongs in ∅.
    - Remember the process, Ditto needs to transform into something random in the universe "A intersected with ∅". 
    - Ditto attempts its transformation and...vanishes?
    - Ditto has turned into nothing, literally nothing 💀. This is because the only thing a universe A and "nothing" can have in common is, well, nothing.
    - Does nothing belong to the universe of nothing? ...yes.✅ The first subset proof is complete.
2. **Ditto #2: ∅ ⊆ A ∩ ∅** Almost done! We just need to prove the reverse now - that the Empty Universe is a subset of "A intersected with ∅". 
    - Ditto #2 attempts its transformation and, uh...also ceases to exist. Nothing exists in the nothing universe. Poor guys :(
    - Is "nothing" part of "A intersected with ∅"? ...also yes.✅ In fact, we say that the Empty Universe is **trivially contained** in every universe, because every element in "nothing" (which is nothing) exists in them. 🤯
3. Thanks to the noble sacrifice of our Dittos, we have proven that A ∩ ∅ ⊆ ∅ and ∅ ⊆ A ∩ ∅. Therefore, we can definitively conclude that A ∩ ∅ = ∅.

Congratulations, you did it!

## Summing Up

Sets (or universes, as we’ve called them) are one of the most elegant and versatile tools in mathematics. By understanding how they work, we gain a language that lets us describe anything—from fruit to numbers to abstract concepts. Whether you’re organizing your pantry or exploring the infinite, sets will always have your back.

If you've read all the way to the end, thank you! Please [feel free to reach out](mailto:chat@franklinyin.com) if you have any thoughts, questions, or comments. And if you’d like to dive deeper into these topics, check out:

1. [Set Theory](https://en.wikipedia.org/wiki/Set_theory): The foundation of this article and much of modern mathematics.
2. [Cardinality](https://en.wikipedia.org/wiki/Cardinality): How mathematicians measure the “size” of a set.
3. [Boolean Algebra](https://en.wikipedia.org/wiki/Boolean_algebra): A fascinating way to apply set operations to logic.

Until next time! May your universes be ever in harmony. 😊