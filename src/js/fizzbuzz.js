function FizzBuzz() {
    this.check = function (number) {
        return number
    }
};

if (typeof module !== 'undefined' && module.exports) {
    module.exports = FizzBuzz;
}