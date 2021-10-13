# shortExercises
Skip to content
Search or jump to…
Pull requests
Issues
Marketplace
Explore
 
@michael-lugashi 
suvelocity
/
f4s-3-course
Private
2
0
0
Code
Issues
Pull requests
Actions
Projects
Security
Insights
f4s-3-course/03-asynchronous part 1/ README.md 
Newer           Older
 100644  48 lines (43 sloc)  2.74 KB
# asynchronous js
  intro, callbacks, promise

## Scope

* JavaScript is a synchronous language
* Call Stack   
* JS is a single threaded language
* setTimeout() , why does it work in a JavaScript environment?
* Passing arguments
* Browser WebAPIs
## Nested callbacks
* Nested setTimeout()
* Callbacks – need of “success” and need for “failure”
* callback Hell


## Resources

https://developer.mozilla.org/en-US/docs/Glossary/Call_stack
https://www.youtube.com/watch?v=8aGhZQkoFbQ&t=96s
https://www.freecodecamp.org/news/javascript-callback-functions-what-are-callbacks-in-js-and-how-to-use-them/
https://medium.com/globant/the-js-bifrost-callback-hell-4c699e1954b8
https://javascript.info/xmlhttprequest - read at least to the section titled "HTTP-headers"  
https://www.freecodecamp.org/news/javascript-async-await-tutorial-learn-callbacks-promises-async-await-by-making-icecream/ - Read at least to the section titled "Promises format"
## Tasks
* 1) Create three functions that evaluate if a triangle is a right-angle triangle or not.
	*First function receives 3 parameters and checks if the square of the first two parameters is equal to the square of the third.  First function calls the second function to receive the square value for each parameter.
	*Second function receives 1 parameter and calls a third function with the parameter received. 
	*Third function receives two parameters and returns the value of the multiplication of the two parameters. 
* 2) Look at loup (http://latentflip.com/loupe/)to see how the Call Stack works (loup does not except arrow functions)
* 3) Open the debugger. Place a break point prior to calling the main function and see how the Call Stack flows. 
* 4) Create a script with three console.log commands
		* Consol.log(“first call”)
		* Place a console.log(“second call”) inside a setTimeout() function to be called after 2 sec  
		* Consol.log(“ third call”`)
		* What will your console output be?
* 5) Create a function that receives four parameters (time, color, callback, reject);
		*Create a random number between 1-10
		*By using setTimeOut and callbacks, the function will change the backgroundColor of the body (max of three times)
		*If the random number is bigger than 5:
		*Change backgroundColor for at least 1 sec
		*Use callback to call the function again for three times.
		*If the number is smaller than 5:
		*console.log(“your request was rejected ☹”)
		*Hint: to check if all three callbacks work, then set the if(  >0) (
* 6) Based on question 5, change the message in the console for the first and last callback to indicate what callback was rejected.
* 7) Keep on task 5 and change the color 7 times. Make sure that every error will point out what callback failed
© 2021 GitHub, Inc.
Terms
Privacy
Security
Status
Docs
Contact GitHub
Pricing
API
Training
Blog
About
