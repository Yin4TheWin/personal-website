---
title: 'Leetcode Weekly Breakdown #432 - Knighthood!'
date: '2025-01-15'
desc: 'Intuition, code, and explanations for #1 Zigzag Grid Traversal with Skip and #2 Maximum Amount of Money Robot Can Earn'
tags: 'programming'
---

![](/images/011525/knight.png)
### #1 Zigzag Grid Traversal
![](/images/011525/1stmnt.png)
#### Solution
Here's a [link to my original submission](https://leetcode.com/contest/weekly-contest-432/submissions/detail/1505646755/).
```python
class Solution:
    def zigzagTraversal(self, grid: List[List[int]]) -> List[int]:
        # A
        dir = 1
        count = 0
        ans = []
        # B
        for r in range(len(grid)):
            # C
            iterd = range(len(grid[0])) if dir == 1 else reversed(range(len(grid[0])))
            for c in iterd:
                # D
                if count % 2 == 0:
                    ans.append(grid[r][c])
                # F
                count += 1
            dir *= -1
        return ans
```
### #2 Maximum Amount of Money Robot Can Earn
![](/images/011525/2stmnt.png)
```python
```