// fibonacci sequence
function fibonacci(n){
    const fib = [0,1]
    for(let i = 2; i < n; i++){
        fib[i] = fib[i - 1] + fib[i - 2]
    }
    return fib
}
// Big-O - O(n)
console.log(fibonacci(5))

// factorial of a number
function factorial(n){
    let res = 1

    if(n == 0 || n == 1) return res

    for(let i = 2; i <= n; i++){
        res *= i
    }
    return res
}
// Big-O - O(n)
console.log(factorial(0))
console.log(factorial(1))
console.log(factorial(5))

// Trailing zeroes in a factorial
function trailingZeroes(n) {
    let countZero = 0;
    for(let g = 5 ; g <= n ; g = g*5 ){
        countZero = countZero + Math.floor(n/g);
    }
    return countZero;
};

// Big-O - O(logn)
console.log(trailingZeroes(100))

// Prime number
function prime(n){
    if(n < 2){
        return false
    }
    for(let i = 2; i <= Math.sqrt(n); i++){
        if(n % i == 0){
            return false
        } else {
            return true
        }
    }
}
// Big-O - O(sqrt(n))

console.log(prime(1))
console.log(prime(5))
console.log(prime(4))

// Power of two
// n / 2 if remainder = 0 - a power of two  else not power of two
// function isPowerOfTwo(n){
//     if(n < 1) return false

//     while(n > 1){
//         if(n % 2 !== 0){
//             return false
//         }
//         n = n / 2
//     }
//     return true
// }
// // O(logn)
// console.log('Power of Two: ' + isPowerOfTwo(1))
// console.log('Power of Two: ' + isPowerOfTwo(2))
// console.log('Power of Two: ' + isPowerOfTwo(5))

function isPowerOfTwoBitWise(n){
    if(n < 1) {
        return false
    }
    return (n & (n-1)) === 0
}
// Big O - O(1)
console.log('Power of Two: ' + isPowerOfTwoBitWise(1))
console.log('Power of Two: ' + isPowerOfTwoBitWise(2))
console.log('Power of Two: ' + isPowerOfTwoBitWise(5))

// Recursion
