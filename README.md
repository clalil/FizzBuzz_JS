# [WIP]README

Question #1: To the best of your knowledge please explain what the following lines of code do:
```
global.browser = new BrowserHelpers()
```
Answer: To the best of my knowledge, the 'new' keyword is used when creating a new instance object from a class object. The BrowserHelpers class is, according to [Microsoft](https://docs.microsoft.com/en-us/dotnet/api/system.web.webpages.browserhelpers?view=aspnet-webpages-3.2), used to specify the custom browser information. Which would in this case be to tell the browser to identify our browser as the global.browser.
```
global.expect = chai.expect;
```
This is telling chai (our expect statements) to add expect to the global object, which is an object that always exists in the [global]((https://developer.mozilla.org/en-US/docs/Glossary/Global_object)) scope.

Question #2:  
To the best of your knowledge please explain why we are placing the let fizzBuzz = new FizzBuzz outside the it block?
Answer: Because whenn we write the test, we want to specify what attributes our new instance test object should have. If we wrote these attributes inside of our it-block, we would be testing if the object has them - not applying them to it.  

Question #3:  
To the best of your knowledge please explain the difference between using === and == in JS?
Answer: The equality operator (==) checks if the values of operands are equal or not, in addition to **converting** the operands to the same type before making a comparison.  
Meanwhile, the strict equality operator (===) checks if both the values **and** types of variables are equal between the operands (i.e. does not perform any type of conversion before making a comparison). I.e.:
2 == '2' (true)
2 === '2' (false)  

Question #4:  
To the best of your knowledge please explain why we are moving (number % 5 === 0) to the top?  
Answer: In the FizzBuzz kata, numbers are divided by 15, 5 or 3. Since 15 must be at the top for all tests to pass (because it is divisable by both 5 and 3), perhaps it would be most logical to proceed with 5 and finally 3 since 15 is divisible by 5 and === 0 using modulus, however, 5 is not divisible by 3 when the remainder has to be === 0? 

Question #5:  
To the best of your knowledge please explain the difference between feature and unit test and add a proper description of what we want to test for to the application.feature.js file.?

Answer: Unit tests are used to test the functionality of a single piece of code, like any of the FizzBuzz kata algoritms; i.e. does the number 3 equal to the response of 'Fizz'?

Feature testing (acceptance testing) is a test of functionality from the user perspective, i.e. if a user does input the number 3 in the input field of my website - will the user be able to see the word 'Fizz'?  

Question #6: 
To the best of your knowledge please explain what the following code does:  
```js
describe('User can input a value and get FizzBuzz results', () => {
    //The code snippet below tells the browser to initialize and load our local computer adress (root path)
    before(async () => {
        await  browser.init()
        await  browser.visitPage('http://localhost:8080/')
    });
    //The code snippet below tells the browser to reload the page before each test
    beforeEach(async () => {
        await  browser.page.reload();
    })
    //The code snippet below tells the browser to close again after the test has finished
    after(async ()=> {
        await  browser.close();
    })
})
```
Question #7: 
To the best of your knowledge please explain what expectations in the context of testing are?
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
Question #8:
To the best of your knowledge please write a line to line explanation of what is happening in this code?
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

Question #9: 
To the best of your knowledge please explain what a CDN (Content Delivery Network) is?  


