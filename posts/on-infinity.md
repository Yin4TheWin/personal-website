---
title: 'On Infinity'
date: '2023-12-12'
rev: '2024-05-31'
desc: 'Or, why pi is unnamed in an alternate universe. An introduction to finiteness, infiniteness, and some silly consequences of these notions.'
tags: 'math, ramblings'
---

Let's play a game: I want you to assign every real number between 0 and 1 a unique name using the English alphabet. For example, 1 can be "one", maybe 0.12345 is called "math is awesome", and π/4 is called "super duper irrational". The only rule is the length of the string must be a number (it could be length 3, 5, or even a Googolplex). If you are successful, you win and I pay you $100. If you are not (i.e., you run out of possible names), you pay me $100. Are you in?

This article aims to help you make an educated answer to that question. We'll talk about finities, infinities, the universe, and demon pigeons. First, of course, some remarks and definitions:

We use the terms **finite** and **infinite** to describe the *quantity* of something. For example, I can say that the number of states in the United States is finite, or that the number of points on a line is infinite. A quantity is either finite or infinite, it cannot be both and it cannot be neither.

### "Finity"
A quantity is **finite** if I am able to count (starting from 1) up to that quantity and eventually finish. The number of states in the US is finite because I can count 1, 2, 3, ..., and eventually reach 50. The [number of molecules in the universe](https://www.popularmechanics.com/space/a27259/how-many-particles-are-in-the-entire-universe/), which is around 10^80, is also finite: I could, given enough time, count from 1 to 10^80! Another way to think about the finiteness of a quantity is to check if you can find a whole number greater than it (if yes, then it is finite). With the US States, we find 51 which is greater than 50. With the number of molecules in the universe, we can find 10^81, which is greater than 10^80.

### Infinity
A quantity is **infinite** if it is not finite. You may wonder, how is this possible? If I deem some quantity, let's call it N, to be infinite, isn't N+1 a bigger number (thus N is actually finite)? 

We run into this issue because we are still thinking of quantites in terms of whole numbers (1, 50, 10000, 10^1000). To reach the concept of infinity we need to push beyond just whole numbers: we need to think about the amount of all whole numbers in existence, or even the amount of numbers on the real number line!

### An Infinite Number of Demon Pigeons
There are many different notions of infinity, but we first focus on one: countable infinities. We say a quantity of items in a collection is **countably infinite** if:
1. Each item in the collection can be labelled with a unique positive whole number (these are also called natural numbers).
2. For each natural number in existence, we can find exactly one item which is labelled with that number.

Let's illustrate this with an example. Suppose a flock of pigeons have landed in my backyard, and they need a place to stay for the winter. I don't want them in my house, so I'm going to build some pigeonholes, which are small shelters which the birds can stay in. Each pigeonhole can fit exactly one pigeon - meaning if there are N pigeons in my backyard, I will need to build N pigeonholes.

Somehow an eldritch abomination has released a **countably infinite** amount of pigeons upon my abode: each pigeon is labelled with a negative integer (so there is a pigeon #-1, a pigeon #-2, ..., etc.). Furthermore, each negative integer is assigned to a pigeon. If you can think of a negative integer (i.e. -123456789012345), I can find you exactly one pigeon labelled with that number (pigeon #-123456789012345). Now, how many pigeonholes do I need to build? 😱

Let's start building and see where life takes us. In order to keep track of which pigeons have already been assigned, I'll label the pigeonholes with natural numbers (1, 2, 3, ...). Then, I simply put each pigeon into the hole labelled with its positive counterpart (i.e., pigeon #-5 lives in pigeonhole #5). What happens when I follow this assignment?

Well, there's no number which can describe the quantity of pigeonholes I'll build. In order to satisfy every pigeon, I will need to build a pigeonhole for every natural number in existence: pigeonhole #1 for pigeon #-1, pigeonhole #2 for pigeon #-2, ..., on and on, forever and ever; for if I believe I have finished at pigeonhole #N, pigeon #-(N+1) will be knocking at my door.

We have just showed that the negative integers are **countably infinite** using pigeons. A pigeon represents a negative integer, and by assigning it to a pigeonhole we are equivalently "labelling" it with a unique natural number (this satisfies condition 1). Of course, each pigeonhole is also uniquely occupied by one pigeon (this satisfies condition 2).
### A Second Wave of Demon Pigeons
Infinities are quite strange: often we find that two quantities, one which seems intuitively "bigger" than the other, are actually the same size! Let's imagine a second scenario where a wave of pigeons flood my backyard, but this time each pigeon is labelled with an integer (so not only are there the same pigeons as before - pigeon #-1, #-2, #-3, ... - we also now have pigeon #0, pigeon #1, pigeon #2, ...). The first wave of pigeons only included negative integers! Surely this second wave is much bigger, right? Can I still house every pigeon using only my natural-number-pigeonholes? Surprisingly, the answer is yes! Of course, I can not assign pigeons the same way as before: pigeon #-N to hole #N, because then the pigeons with a number greater than -1 will have no holes to live in. However, let's consider this new assignment algorithm:  

Given a pigeon which is labelled with the integer N,  
1. If N is positive, assign the pigeon to pigeonhole number 2N
2. If N is not positive, assign the pigeon to pigeonhole number -2N+1.

A few examples from plugging into this algorithm: pigeon #0 is assigned to pigeonhole #1, pigeon #1 is assigned to hole #2, pigeon #-1 is assigned to hole #3, pigeon #2 is assigned to hole #4. This algorithm, of course, will assign each pigeon to exactly one pigeonhole. Also, each pigeonhole will have exactly one pigeon living in it: given pigeonhole number M,  
1. If M is even, the pigeon that lives in it has number M/2.
2. If M is odd, the pigeon that lives in it has number -(M-1)/2.  

Using the same examples as before, and plugging into this new algorithm: hole #1 has pigeon #0 living in it, hole #2 has pigeon #1 living in it, etc. This new algorithm was obtained by simply reversing the algorithm we used to assign the pigeons in the first place (if you don't believe me, try the algebra yourself). Thus, amazingly, the integers are also **countably infinite**, and have the same "size" as only the negative ones!

### Even More Pigeons?!?
Somehow, there are quantities even "bigger" than countable infinities, and these are said to be **uncountable**. One famous example: the amount of real numbers between 0 and 1 is uncountable. Yes, there are more numbers between 0 and 1 than there are integers! To see this, we will use a modified proof of [Cantor's Diagonalization Argument](https://en.wikipedia.org/wiki/Cantor%27s_diagonal_argument). Imagine Cthulu sends yet another wave of pigeons, this time representing all the real numbers between 0 and 1. Let's assume that I magically assign each pigeon to a unique pigeonhole, as before. The assignment itself does not actually matter. For illustration purposes let's say it looks like this (truncated of course, because it's infinite):

| Pigeonhole | Pigeon     |
|------------|------------|
| 1          | 0.12345... |
| 2          | 0.43523... |
| 3          | 0.31415... |
| 4          | 0.12345... |

So pigeonhole #1 has pigeon #0.12345... living in it. I claim that no matter the living arrangement, I can find you a pigeon which has no home! That pigeon has a number which is constructed as follows: take the first digit after the decimal point of the pigeon living in the first pigeonhole, and add 1 to it. This will be the first digit after the decimal point for my homeless pigeon (so in the above example, the first digit would be 1+1=2). Next, take the second digit after the decimal point of the pigeom living in the *second* pigeon hole, and add 1 to it. This will be the pigeon's *second* digit (3+1=4). Do the same for the third digit, (4+1=5) fourth digit (2+1=3. The number we are constructing is currently 0.2453...), and so on. In general, the Nth digit of this pigeon will be the Nth digit plus 1 of the pigeon living in the Nth pigeonhole.

Do you see why this pigeon has no home? Its number differs from the first pigeon by the tenths place, the second pigeon by the hundredths places, the third by the thousandths, .... That's right, its number differs from every pigeon living in a pigeonhole by at least one digit! Thus it must be homeless - we can not find a natural number for this pigeon to call home. If you recall, this violates our first condition for something to be countably infinite. However, this quantity of pigeons is certainly not finite, so we say they are **uncountably infinite**. This is the last definition we'll cover here - the size of every collection of objects can be said to be finite, countably infinite, or uncountable.
### Silly Shower Thoughts
My sole purpose for giving a brief introduction to the wonderful world of set theory here is so I can finally share my stupid theorems with the world. Here's the main one for today:

**It is impossible to name all the real numbers with finite length strings.**  
1. The collection of all possible strings in the English language with finite length (or any human language, for that matter) is countably infinite. A quick proof: given a random English string (say, "helloworld") we can convert it into a natural number using the [Hexavigesimal numeral system](https://gist.github.com/pinguet62/9817978), which is just base 26. In other words, every possible string can be converted into a unique number, so we simply assign each string to the pigeonhole matching that number.
2. The real numbers are uncountable (if just the real numbers between 0 and 1 are uncountable, surely all the real numbers are as well), and uncountable collections are "bigger" than countable ones, so we will run out of "words" before we run out of numbers.

NOTE: the inclusion of the finite length condition might seem strange, but it turns out this is actually possible with [strings of infinite length](https://cs.stackexchange.com/questions/119455/does-infinite-length-strings-lead-to-uncountable-languages). Special thanks to Vishal A. for pointing that out. (If you can find a way to construct an English name for every real number, email me with the contact below for a crisp high five)

So, do you still want to play our little naming game? 
### Conclusion
If you actually read all the way to the end, thank you! I'm pleasantly surprised. Please send any thoughts, comments, suggestions, or corrections to franklinyin {dot} nj {at} gmail {dot} com. Also, if you would like to learn more about the concepts covered in this post, check out the following:
1. [Set](https://en.wikipedia.org/wiki/Set_(mathematics)) (I talked about quantities and collections in this article, but mathmeticians usually talk about sets)
2. [Cardinality](https://en.wikipedia.org/wiki/Cardinality) (The "size" of a set. Cardinality is also mentioned in the above article but this is a dedicated one)
3. [Bijection](https://en.wikipedia.org/wiki/Bijection) (The "behind the scenes" of proving something is countably infinite. By putting each pigeon into exactly one unique pigeonhole, we are technically establishing a **bijective map** between the pigeons and the natural numbers)
4. [Pigeonhole Principle](https://en.wikipedia.org/wiki/Pigeonhole_principle) (not exactly related but the inspiration for my pigeonhole example)
