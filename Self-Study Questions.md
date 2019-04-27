
## Self-Study Questions

Demonstrate your understanding of this week's concepts by answering the following free-form questions.

Edit this document to include your answers after each question. Make sure to leave a blank line above and below your answer so it is clear and easy to read by your project manager

1. Describe the biggest difference between `.forEach` & `.map`.
> The methods .forEach and .map are similar in that they are both powerful tool to go thru an array and return an action for each item. However, forEach has to be directed to return a result, whereas .map will return a result with little to no additional direction.

2. What is the difference between a function and a method?
> A function is code that is called and data can be explicitly passed into the function. Whereas, a method (although similar to a function in how it behaves) is called while attached to an object which will be implictily passed into the function. 

3. What is closure?
> Closures are, in part, referring to a function in relation to the environment within which it was declared. Another aspect of a closure is that it is a tool for passing data to the next interaction (or function) that is nested within the first function or outer scope. 

4. Describe the four rules of the 'this' keyword.
> This is a placeholder (pronoun) to use for an object. 
> 1. Principle 1: Window/Global Object Binding - This refers to the global or window object.
> 2. Principle 2: Implicit Binding - When using a function or method the object left of the dot is 'this'. Allowing you to pass objects.
> 3. Principle 3: New binding - This refers to the object that will be created.
> 4. Principle 4: Explicit binding - Using Javascripts .call or .apply will explicitly bind using this.

5. Why do we need super() in an extended class?
> The super() when used in an extended class is used like a function that will calls the parent class (that the new class is extended from) and uses the parameters and methods setup in the parent class. This is key to extended the new class so that it shares the same parameters and methods of the parent class. 


## Project Set up

Follow these steps to set up and work on your project:

- [x] Create a forked copy of this project.
- [x] Add PM as collaborator on Github.
- [x] Clone your OWN version of Repo (Not Lambda's by mistake!).
- [x] Create a new Branch on the clone: git checkout -b `<firstName-lastName>`.
- [x] Create a pull request before you start working on the project requirements.  You will continuously push your updates throughout the project.
- [x] You are now ready to build this project with your preferred IDE
- [x] Implement the project on your Branch, committing changes regularly.
- [x] Push commits: git push origin `<firstName-lastName>`.

Follow these steps for completing your project:

- [x] Submit a Pull-Request to merge <firstName-lastName> Branch into master (student's  Repo).
- [x] Add your Project Manager as a Reviewer on the Pull-request
- [ ] PM then will count the HW as done by  merging the branch back into master.


## Minimum Viable Product

Your finished project must include all of the following requirements:

**Pro tip for this challenge: If something seems like it isn't working locally, copy and paste your code up to codepen and take another look at the console.**

## Task 1: Objects and Arrays
Test your knowledge of objects and arrays. 
* [x] Use the [objects-arrays.js](challenges/objects-arrays.js) link to get started.  Read the instructions carefully!

## Task 2: Functions
This challenge takes a look at callbacks and closures as well as scope. 
* [x] Use the [functions.js](challenges/functions.js) link to get started. Read the instructions carefully!

## Task 3: Prototypes
Create constructors, bind methods, and create cuboids in this prototypes challenge.
* [x] Use the [prototypes.js](challenges/prototypes.js) link to get started. Read the instructions carefully!

## Task 4: Classes
Once you have completed the prototypes challenge, it's time to convert all your hard work into classes.
* [x] Use the [classes.js](challenges/classes.js) link to get started. Read the instructions carefully!

In your solutions, it is essential that you follow best practices and produce clean and professional results. Schedule time to review, refine, and assess your work and perform basic professional polishing including spell-checking and grammar-checking on your work. It is better to submit a challenge that meets MVP than one that attempts too much and does not.

## Stretch Problems

There are a few stretch problems found throughout the files, don't work on them until you are finished with MVP requirements!
