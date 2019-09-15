# My answers for the FizzBuzz Weekend Challenge

## Question #1:  
__To the best of your knowledge please explain what the following lines of code do:__
```
global.browser = new BrowserHelpers()
global.expect = chai.expect;
```
To the best of my knowledge after completing the assignment, in this case we are assigning every new instance of our feature tests (e2e training wheels) to the host environment, where all of our tests are executed, which in this case would be our local browser. We are also using Chai to assist us in our BDD/TDD. It has differently styled tests, and in this case we are assigning its 'expect style tests' to the global scope in our root folder/path. 

## Question #2:  
__To the best of your knowledge please explain why we are placing the let fizzBuzz = new FizzBuzz outside the it block?__  

Because when we write the test, we want to specify what our new instance test object should look like from the start. If we wrote this line of code inside of our it-block, we would be testing if the instance object already exists.  

## Question #3:  
__To the best of your knowledge please explain the difference between using === and == in JS?__  

The equality operator (==) checks if the values of operands are equal or not, in addition to **converting** the operands to the same type before making a comparison.  
Meanwhile, the strict equality operator (===) checks if both the values **and** types of variables are equal between the operands (i.e. does not perform any type of conversion before making a comparison). I.e.:
2 == '2' (true)
2 === '2' (false)  

## Question #4:  
__To the best of your knowledge please explain why we are moving (number % 5 === 0) to the top?__  

In the FizzBuzz kata, numbers are divided by 15, 5 or 3. Since 15 must be at the top for all tests to pass (because it is divisable by both 5 and 3), perhaps it would be more logical to proceed with the next largest number? Regardless, the tests will go green no matter if 5 comes before 3 or not.  

## Question #5:  
__To the best of your knowledge please explain the difference between feature and unit tests?  

Unit tests are used to test the functionality of a single piece of code, like any of the FizzBuzz kata algoritms; i.e. does the number 3 equal to the response of 'Fizz'? Feature testing (acceptance testing) on the other hand is a test of functionality from the user perspective, i.e. if a user does input the number 3 in the input field of my website - will the user be able to see the word 'Fizz'? 

## Question #6: 
__To the best of your knowledge please explain what the following code does:__    
```js
describe('User can input a value and get FizzBuzz results', () => {
    before(async () => {
        await  browser.init()
        await  browser.visitPage('http://localhost:8080/')
    });
    beforeEach(async () => {
        await  browser.page.reload();
    })
    after(async ()=> {
        await  browser.close();
    })
})
```
The code belongs to our feature test, it tells it that checks if the browser initializes and loads our local computer adress (root path), waits for the browser to reload before each test and that it closes the browser window after all of our tests have run.  

## Question #7: 
__To the best of your knowledge please explain what expectations in the context of testing are?__  
```js
  it('clicking on the "Check" button', async () => {
      //Tells the test to wait for the user to input a value of 3
    await browser.fillIn("input[id='value']", { with: "3" })
    //Tells the test to wait for the user to click on the button to add the input value
    await browser.clickOnButton("input[value='Check']")
    //Tells the test to wait for the result of the test
    let content = await browser.getContent("[id='display_answer']")
    expect(content).to.eql('Fizz');
  })
```
## Question #8:
__To the best of your knowledge please write a line to line explanation of what is happening in this code?__  
```js
        document.addEventListener('DOMContentLoaded', () => {
            //It waits for the document to load before calling the function
            let button = document.getElementById('button')
            let displayDiv = document.getElementById('display_answer')
            //It assigns the HTML element of 'button' and 'display_answer' to variables
            button.addEventListener('click', () => {
            //It waits for a 'click' from the button
                let value = document.getElementById('value').value
            //It assigns the input value from the user to a variable
                let fizzBuzz = new FizzBuzz
            //It creates an instance of the FizzBuzz object
                let result = fizzBuzz.check(value)
            //It assigns the output value of the fizzBuzz check function to a variable
                displayDiv.innerHTML = result;
            //It displays the result inside of the assigned div element
            })
        })
```

## Question #9: 
__To the best of your knowledge please explain what a CDN (Content Delivery Network) is?__  


