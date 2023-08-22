# Write a function in Node.js (version 10) that takes an array of integers as input and returns the sum of all even numbers in the array.
Thought Process:

    Understand the Problem: The first step is to fully understand the problem. In this case, we are asked to write a function that calculates the sum of even numbers from an array of integers.

    Plan the Solution: We need to iterate through the array and check if each number is even. If it is, we'll add it to the running sum. If not, we'll move to the next number.

    Code the Solution: We'll define a function called sumEvenNumbers that takes an array as input. We'll initialize a variable sum to keep track of the sum of even numbers. We'll then loop through the array using a for loop and check if each element is even using the modulo operator (%). If the remainder of the division by 2 is 0, it's an even number, and we'll add it to the sum.

    Test the Solution: After coding the solution, it's important to test it with various test cases to make sure it works correctly.
    Optimize and Refactor: Depending on the interviewer's requirements, you might be asked to optimize or refactor your solution. In this case, the solution is quite straightforward, but you could potentially use Array.prototype.reduce to achieve the same result more concisely:
    Remember, the interview process is not just about writing the correct code, but also about demonstrating your problem-solving skills, communication, and coding practices. Clearly explaining your thought process and considering edge cases are important aspects of this process.
