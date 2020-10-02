/* Collatz conjecture */

function collatz(n) {
    var numbers = []

    while (n > 1) {
        numbers.push(n)
        if (n % 2 === 0) {
            n = n / 2;
        } else {
            n = (3 * n) + 1;
        }
    }
    numbers.push(n)
    return numbers
}

console.log(
    'Collatz conjecture for n = 11',
    collatz(11)
)

console.log(
    'Collatz conjecture for n = 27',
    collatz(27)
)

console.log(
    'Collatz conjecture for n = 51',
    collatz(51)
)
