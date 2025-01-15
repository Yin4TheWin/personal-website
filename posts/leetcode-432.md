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
#### Solution
Here's a [link to my original submission](https://leetcode.com/contest/weekly-contest-432/submissions/detail/1505684466/).
```python
class Solution:
    def maximumAmount(self, coins: List[List[int]]) -> int:
        # A
        self.m = len(coins)
        self.n = len(coins[0])

        # B
        @lru_cache(maxsize=None)
        def dp(i, j, neut):
            # C
            if i >= self.m or j >= self.n:
                return float('-inf')
            if i == self.m - 1 and j == self.n - 1:
                if coins[i][j] < 0 and neut > 0:
                    return 0
                return coins[i][j]

            # D
            modifier = coins[i][j]
            ans = []
            # E
            if modifier < 0 and neut > 0:
                ans.append(dp(i+1, j, neut - 1))
                ans.append(dp(i, j+1, neut - 1))
            # F
            ans.append(dp(i+1, j, neut) + modifier)
            ans.append(dp(i, j+1, neut) + modifier)
            # G
            return max(ans)

        # H    
        return dp(0, 0, 2)
```