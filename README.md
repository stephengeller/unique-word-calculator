# Book Analyser

A command-line app.

![picture]()

## How to install

Make sure you have [Node.js](https://nodejs.org/en/) installed! Once this file
is unzipped on your computer, navigate to it in your terminal and open it in
your favourite text editor.

Make sure you install the node packages by running `npm install` once in the
root directory of this project!

## How to use

All you have to do is run the app with node in your terminal, and input the
numer of primes you want to multiply!

In your terminal, within the repository directory:

```
$ node App.js
```

## How to test

Once everything is installed, just run `npm test` or `jest` in your terminal to
see all of the beautiful (passing) tests.

## Technology

* Language: JavaScript (ES6 +)
* Package Manager: npm
* Testing: Jest, Pre-Commit (makes sure tests pass before committing to git)
* Linting: ESLint
* Coverage: Jest

## Testing

* All tests passing
* 100% test coverage

## Classes

##### `PrimeChecker`

This class is responsible for two things:

1. Checking if any number is prime
2. Getting a number of primes based on an argument

The latter of the two was refactored in order to improve efficiency, as the
original solution was unable to handle bigger numbers. It is currently tested to
find at least 20,000 prime numbers.

##### `RowGenerator`

## What I'm pleased with

* It works! Yay!
* Completed fully using TDD
* Lots of descriptive and clear tests
* Object-oriented approach using ES6 syntax

## What I'd do if I had more time

* Further refactor all classes:
* Turn it into a website!
* Give users the option to add mutations before rendering the table. This could
  be something like multiplying the x axis by 5, or multiplying all numbers by
  10 etc
