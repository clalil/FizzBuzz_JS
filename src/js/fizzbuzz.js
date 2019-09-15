
function FizzBuzz() {
    this.check = (number) => {
        if (number == '') {
            return 'Error, no user input'
        }
        else if (isNaN(number)) {
            return 'You need to enter a number'
        }
        else if (hasZeroRemainder(number, 15)) {
            return 'FizzBuzz';
        } else if (hasZeroRemainder(number, 5)) {
            return 'Buzz';
        } else if (hasZeroRemainder(number, 3)) {
            return 'Fizz';
        } else {
            return number
        }
    }
};

let hasZeroRemainder = (number, divider) => {
    return number % divider == 0
}

if (typeof module !== 'undefined' && module.exports) {
    module.exports = FizzBuzz;
}