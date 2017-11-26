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

You can choose between generating a table off a small sample of a book or the
full thing! Either type `node runFull.js` for the full book or `node
runSample.js` for the sample.

For example: In your terminal, within the repository directory:

```bash
$ node runSample.js
...  # (the table continues upwards in the actual app)
HAD | 113 | Prime!
THAT | 114
HE | 120
I | 124
THEY | 126
YOU | 157 | Prime!
IN | 163 | Prime!
WAS | 205
IT | 208
OF | 216
SAID | 221
A | 286
TO | 346
AND | 471
THE | 707
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
* 95% test coverage (100% on all besides a callback function within the
  TextLoader class, which I don't know how to test the different outcomes yet.)

## Classes

#### `TextLoader`

This class uses inbuilt JavaScript functionality to retrieve text from a file,
then (if successful) executes a callback function to process it.

#### `ArraySorter`

This class simply sorts an array of objects by a key within each object.

#### `LineFormatter`

This class takes an array of objects and outputs strings that contain each
object's name, count and "primeness". It calls on the `.toUpperCase` function to
format each word, and uses a ternary function to determine whether to add
'Prime!' to each line.

#### `TextFormatter`

This class can take a block of text and remove all punctuation from it. Then, it
can split the text into an array of lowercase words ready to be processed by
the...

#### `WordFrequencyProcessor`

This class does the bulk of the work in the app. It takes in a block of text,
formats it into an array using the `TextFormatter` class, iterates over that
array to create objects of unique words and their frequency in the text, then
finally checks whether each frequency is prime or not.

#### `UserInterface`

This class is responsible for communicating commands between the user and the
relevant classes, in order to output the desired table. It is also quite bulky,
as it relies on using the LineFormatter, WordFrequencyProcessor and ArraySorter
classes to process the text and output the table.

#### `PrimeChecker`

This class is responsible for checking if any number is prime.

The latter of the two was refactored in order to improve efficiency, as the
original solution was unable to handle bigger numbers. It is currently tested to
find at least 20,000 prime numbers.

## What I'm pleased with

* It fully works
* It has responsibilities separated effectively into classes with appropriate
  functions
* Completed fully using TDD
* Successful mocking of dependencies in tests
* Lots of tests that test what they need to
* Object-oriented approach using ES6 syntax

## What I'd do if I had more time

* Further refactor classes:
  * For example, the UserInterface and WordFrequencyProcessor classes are quite
    dense and depend on stringing together functions from other classes.
    Ideally, I could clean this up so each function is 3-5 lines long, which is
    the case in many other classes.
* Turn it into a website that can render all results, rather than only the ones
  that render in the console.
* Test the behaviour of the callback function in TextLoader effectively. This is
  currently untested, meaning it is impossible to predict behaviours within the
  function itself.
* Sort the table further, so that words with the same count are sorted
  alphabetically
