---
title: 'On Infinity'
date: '2023-12-12'
rev: '2023-12-17'
desc: 'Or, why pi is unnamed in an alternate universe. An introduction to finiteness, infiniteness, and some silly consequences of these notions.'
tags: 'ramblings'
---

Let's play a game: I want you to assign every real number between 0 and 1 a unique name using the English alphabet. For example, 1 can be "one", maybe 0.12345 is called "I love gambling", and π/4 is called "super duper irrational". The only rule is the length of the string must be a number (it could be length 3, 5, or even a Googolplex). If you are successful, you win and I pay you $100. If you are not (i.e., you run out of possible names), you pay me $100. Are you in?

This article aims to help you make an educated answer to that question. We'll talk about finities, infinities, the universe, and demon pigeons. First, of course, some remarks and definitions:

We use the terms **finite** and **infinite** to describe the *quantity* of something. For example, I can say that the number of states in the United States is finite, or that the number of points on a line is infinite. A quantity is either finite or infinite, it cannot be both and it cannot be neither.

### "Finity"
A quantity is **finite** if I am able to count (starting from 1) up to that quantity and eventually finish. The number of states in the US is finite because I can count 1, 2, 3, ..., and eventually reach 50. The [number of molecules in the universe](https://www.popularmechanics.com/space/a27259/how-many-particles-are-in-the-entire-universe/), which is around 10^80, is also finite: I could, given enough time, count from 1 to 10^80! Another way to think about the finiteness of a quantity is to check if you can find a whole number greater than it (if yes, then it is finite). With the US States, we find 51 which is greater than 50. With the number of molecules in the universe, we can find 10^81, which is greater than 10^80.

### Infinity
A quantity is **infinite** if it is not finite. You may wonder, how is this possible? If I deem some quantity, let's call it N, to be infinite, isn't N+1 a bigger number (thus N is actually finite)? 

We run into this issue because we are still thinking of quantites in terms of whole numbers (1, 50, 10000, 10^1000). To reach the concept of infinity we need to push beyond just whole numbers: we need to think about the amount of all whole numbers in existence, or even the amount of real numbers!

### An Infinite Number of Demon Pigeons
There are many different notions of infinity, but we will focus on one: countable infinities. Before we do that, however, I need to take care of a small problem. A bunch of pigeons have landed in my backyard, and they need a place to stay for the winter. I don't want them in my house, so I'm going to build some pigeonholes. These are small shelters which the birds can stay in, and each pigeonhole can fit exactly one pigeon. So if there are N pigeons in my backyard, I will need to build N pigeonholes.

Somehow an eldritch abomination has released a **countably infinite** amount of pigeons upon my dwelling place: each one is labelled with a positive whole number (so there is a pigeon #1, a pigeon #2, ..., etc.), and every positive whole number (called a natural number) in existence is accounted for with these pigeons. If you can think of a natural number (i.e. 123456789012345), I can find you exactly one pigeon labelled with that number (pigeon #123456789012345). Now, how many pigeonholes do I need to build? 😱

Well, there's no number which can describe the quantity of pigeonholes I need. I will need to build a pigeonhole for every natural number in existence, and label them: pigeonhole #1 for pigeon #1, pigeonhole #2 for pigeon #2, ..., on and on, forever and ever; for if I believe I have finished at pigeonhole #N, pigeon #N+1 will be knocking at my door.

Now, back on topic: suppose I have exactly one pigeonhole for every natural number in existence. We say a quantity of items is **countably infinite** if we can fit each item into exactly one pigeonhole, and each pigeonhole has exactly one item. 

### A Second Wave of Demon Pigeons
Let's imagine a second scenario where a wave of pigeons flood my backyard, but this time each pigeon is labelled with an integer (so not only are there the same pigeons as before - pigeon #1, #2, #3, ... - we also now have pigeon #0, pigeon #-1, pigeon #-2, ...). Can I still fit each pigeon into one of my natural-number-pigeonholes? The answer is yes! Of course, I can not assign pigeons the same way as before: pigeon #N to hole #N, because then the pigeons with a number less than 1 will have no holes to live in. However, let's consider this new assignment algorithm:  

Given a pigeon which is labelled with the integer N,  
1. If N is positive, assign the pigeon to pigeonhole number 2N
2. If N is not positive, assign the pigeon to pigeonhole number -2N+1.

A few examples from plugging into this algorithm: pigeon #0 is assigned to pigeonhole #1, pigeon #1 is assigned to hole #2, pigeon #-1 is assigned to hole #3, pigeon #2 is assigned to hole #4. This algorithm, of course, will assign each pigeon to exactly one pigeonhole. Also, each pigeonhole will have exactly one pigeon living in it: given pigeonhole number M,  
1. If M is even, the pigeon that lives in it has number M/2.
2. If M is odd, the pigeon that lives in it has number -(M-1)/2.  

Using the same examples as before, and plugging into this new algorithm: hole #1 has pigeon #0 living in it, hole #2 has pigeon #1 living in it, etc. This new algorithm was obtained by simply reversing the algorithm we used to assign the pigeons in the first place (if you don't believe me, try the algebra yourself). Thus, amazingly, the integers are also **countably infinite**, and have the same "size" as only the postive integers!

### Even More Pigeons?!?
Somehow, there are quantities even "bigger" than countable infinities, and these are said to be **uncountable**. Although I will not cover them in this post, you can check out [Cantor's Diagonalization Argument](https://en.wikipedia.org/wiki/Cantor%27s_diagonal_argument) to see a proof of the existence of **uncountable** sets (for example, the real numbers).

### Silly Shower Thoughts
My sole purpose for giving a brief introduction to the wonderful world of set theory here is so I can finally share my stupid theorems with the world. Here's the main one for today:

**It is impossible to name all the real numbers with finite length strings.**  
NOTE: the inclusion of the finite length condition might seem strange, but it turns out this is actually possible with [strings of infinite length](https://cs.stackexchange.com/questions/119455/does-infinite-length-strings-lead-to-uncountable-languages). Special thanks to Vishal A. for pointing that out.
1. The collection of all possible strings in the English language with finite length (or any human language, for that matter) is countably infinite. A quick proof: given a random English string (say, "helloworld") we can convert it into a natural number using the [Hexavigesimal numeral system](https://gist.github.com/pinguet62/9817978), which is just base 26. In other words, every possible string can be converted into a unique number, so we simply assign each string to the pigeonhole matching that number.
2. The real numbers are uncountable (again, see [Cantor](https://en.wikipedia.org/wiki/Cantor%27s_diagonal_argument)), and uncountable collections are "bigger" than countable ones, so we will run out of "words" before we run out of numbers.

So, do you still want to play our little naming game? 
### Conclusion
If you actually read all the way to the end, thank you! I'm pleasantly surprised. Please send any thoughts, comments, suggestions, or corrections to franklinyin {dot} nj {at} gmail {dot} com. Also, if you would like to learn more about the concepts covered in this post, check out the following:
1. [Set](https://en.wikipedia.org/wiki/Set_(mathematics)) (I talked about quantities and collections in this article, but mathmeticians usually talk about sets)
2. [Cardinality](https://en.wikipedia.org/wiki/Cardinality) (The "size" of a set. Cardinality is also mentioned in the above article but this is a dedicated one)
3. [Bijection](https://en.wikipedia.org/wiki/Bijection) (The "behind the scenes" of proving something is countably infinite. By putting each pigeon into exactly one unique pigeonhole, we are technically establishing a **bijective map** between the pigeons and the natural numbers)
4. [Pigeonhole Principle](https://en.wikipedia.org/wiki/Pigeonhole_principle) (not exactly related but the inspiration for my pigeonhole example)
