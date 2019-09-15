require('../spec.helper')

describe('FizzBuzz', () => {
    let fizzBuzz = new FizzBuzz({
    })

    it('returns a number if no game rules are met', () => {
        expect(fizzBuzz.check(1)).to.eql(1)
    })

    it('returns Fizz if the number is divisible by 3', () => {
        expect(fizzBuzz.check(3)).to.eql('Fizz')
    })

    it('returns Buzz if the number is divisible by 5', () => {
        expect(fizzBuzz.check(5)).to.eql('Buzz')
    })

    it('returns FizzBuzz if number is divisible by 15', () => {
        expect(fizzBuzz.check(15)).to.eql('FizzBuzz')
    })

    it('returns an error if you enter a non numeric value', () => {
        expect(fizzBuzz.check('Hello')).to.eq('You need to enter a number')
    })

    it('returns an error if you enter nothing', () => {
        expect(fizzBuzz.check('')).to.eq('Error, no user input')
    })

})