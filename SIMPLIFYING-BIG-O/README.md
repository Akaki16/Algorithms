# Simplifying Big O expressions

- When determining Big O, constants don't matter. For example: `O(2n) = O(n)`, `O(500) = O(1)`, `O(13n^2) = O(n^2)`.
- Smaller terms don't matter as well. For example: `O(n + 10) = O(n)`, `O(1000n + 50) = O(n)`, `O(n^2 + 5n + 8) = O(n^2)`.

## Big O Shorthands

- Arithmetic operations are constant. `O(1)`
- Variable assignment is constant. `O(1)`
- Accessing elements in an array (by index) or object (by key) is constant. `O(1)`
- In a loop, the time complexity is the length of the loop times the complexity of whatever happens inside of the loop.

![Big O time complexity chart](https://paper-attachments.dropbox.com/s_2D428973624E7FC84C7D69D11421DE762BEA6B6F3361231FCDCAE0425D14526F_1664885448372_Untitled.drawio+17.png)
