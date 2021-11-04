let findPrime = function (...numbers) {
    let counter = 0
    let primeNumbers = []
    for (let i = 0; i < numbers.length; i++) {
        for (let j = 2; j < numbers[i]; j++) {
            if (numbers[i] % j == 0) {
                counter++
            }
            else
                break
        }
        if (counter == 0 && numbers[i] != 1) {
            primeNumbers.push(numbers[i])
        }
        else {
            counter = 0
        }
    }
    console.log(...primeNumbers)
}
findPrime(3,5,6,9,25)