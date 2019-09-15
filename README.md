# FizzBuzz Javascript style  
## Built with  
**Front end:** Vanilla JS, HTML and CSS.  
**Back end:** Ruby   
**Testing:** E2E Training Wheels  

## About this repository  
This repository contains a simple FizzBuzz kata calculator. The rules of FizzBuzz is that if the number is divisible by three, you say “Fizz” and if it is divisible by five you say “Buzz”. For numbers which are multiples of both three and five you say “FizzBuzz".  

## Deployment  
This FizzBuzz JS calculator is currently deployed online from a GitHub page in this repository. You may view the application [here](https://clalil.github.io/Fizzbuzz_JS/). 

## Getting started  
To test this application you need to fork it to your own GitHub account and clone it to your local workspace.  

### Dependencies
To test the methods and features of this calculator you need to have the JS testing framework E2E Training Wheels installed and configured on your local computer. Step by step instructions in both text and video format can be found at this [Training Wheels repository](https://www.npmjs.com/package/e2e_training_wheels).

Please note that your current Node version should be version 10.2.0 or higher.

### Running the tests  
The acceptance tests for this application can be found inside of the features folder. Enter the following command into your terminal to run the tests:
```
$ npm run features
```
The above command will launch Chrome and run the acceptance tests on a local webserver.

To execute the unit tests that are found inside of the spec folder, execute the following command.
```
$ npm run specs
```
Finally, to execute both the acceptance tests and unit tests enter the following command.
```
$ npm test
``` 
## Acknowledgements  
This challenge was given to me by the team at [CraftAcademy](https://www.craftacademy.se/).

------------------------------------------------------

## Question #1:  
__To the best of your knowledge please explain what the following lines of code do:__
```
global.browser = new BrowserHelpers()
global.expect = chai.expect;
```
To the best of my knowledge, the short answer would be that we are enabling our testing framework (e2e) and assertion library (chai) to access our local browser object and it's implementation code.

## Question #2:  
__To the best of your knowledge please explain why we are placing the let fizzBuzz = new FizzBuzz outside the it block?__  
If we, in the very beginning of the describe block, specify that we want to create an instance object (fizzBuzz) to be used for all of our tests, we omit the step where we have to manually apply this to each and every expectation.   

## Question #3:  
__To the best of your knowledge please explain the difference between using === and == in JS?__  

The equality operator (==) checks if the values of operands are equal or not, in addition to **converting** the operands to the same type before making a comparison.  
Meanwhile, the strict equality operator (===) checks if both the values **and** types of variables are equal between the operands (i.e. does not perform any type of conversion before making a comparison):  
2 == '2' (true)  
2 === '2' (false)  

## Question #4:  
__To the best of your knowledge please explain why we are moving (number % 5 === 0) to the top?__  

In the FizzBuzz kata, numbers are divided by 15, 5 and 3. Since 15 must be at the top for all tests to pass (because it is divisable by both 5 and 3), perhaps it would be more logical to proceed with the next largest number? Regardless, the tests will go green no matter if 5 comes before 3 or not.  

## Question #5:  
__To the best of your knowledge please explain the difference between feature and unit tests?__  

Unit tests are used to test the functionality of a single piece of code, like any of the FizzBuzz kata algoritms; i.e. does the number 3 equal to the response of 'Fizz'? Feature testing (acceptance testing) on the other hand is a test of functionality from the user perspective, i.e. if a user does input the number 3 in the input field of my website - will the user be able to see the word 'Fizz'? 

## Question #6: 
__To the best of your knowledge please explain what the following code does:__    

The code belongs to our feature test, it tells it to initialize the browser before the tests are run, loading the current url for our app, reload the browser before each test and to close the browser window after all of our tests have been executed.  

## Question #7: 
__To the best of your knowledge please explain what expectations in the context of testing are?__  

The expectations are an asynchronous function where the test waits for the user to input the value of '3', click on the 'check' button and finally waits for the result to be rendered from #display_answer before it makes a comparison of it (the expected content) and the pre-defined expected output ('Fizz').  

## Question #8:
__To the best of your knowledge please write a line to line explanation of what is happening in this code?__  

1. The addEventListener method waits for the HTML document to be fully loaded and parsed (excluding stylesheets etc).  
2. It assigns the node element 'button' to the variable 'button'.  
3. It assigns the node element 'display_answer' to the variable 'displayDiv'.  
4. It listens for a 'click' from the button, before executing the arrow function.  
5. It assigns the node element 'value', which in this case is the user input value, to the 'value' variable.  
6. It creates a new instance object from the FizzBuzz constructor object and assigns it to a variable called 'fizzBuzz'.  
7. The instance object takes the user's input value and runs it through the .check function and assigns the result to the 'result' variable.  
8. It assigns the 'result' to the displayDiv variable, which in turn uses the .innerHTML property to be able to set the contents of 'result' and display that inside of itself.  

## Question #9: 
__To the best of your knowledge please explain what a CDN (Content Delivery Network) is?__   
A CDN is a geographically distributed group of servers used to reduce the distance between the user and the website content. The benefits of a CDN are faster loading time, reduced bandwidth costs, improved security and increased content availability.  