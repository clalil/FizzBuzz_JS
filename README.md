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
