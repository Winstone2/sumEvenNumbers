function sumEvenNumbers(arr) {
    let sum = 0;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            sum += arr[i];
        }
    }

    return sum;
}
const numbers = [1, 2, 3, 4, 5, 6, 7, 8];
console.log(sumEvenNumbers(numbers)); // Output: 20 (2 + 4 + 6 + 8)
function sumEvenNumbers(arr) {
    return arr.reduce((sum, num) => num % 2 === 0 ? sum + num : sum, 0);
}
