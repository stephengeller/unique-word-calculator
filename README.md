# Unique Word Calculator

A command-line app.

## How to install

Make sure you have [Node.js](https://nodejs.org/en/) installed! Once this file
is unzipped on your computer, navigate to it in your terminal and open it in
your favourite text editor.

Make sure you install the node packages by running `npm install` once in the
root directory of this project!

## How to use

To run the app, you will need to be in the repository directory in your
terminal.

You can choose between generating a table off a small sample of a book or the
full thing! Either type `node runFull.js` for the full book or `node
runSample.js` for the sample.

For example: In your terminal, within the repository directory:

```bash
$ node runSample.js
...  # (the table continues for longer in the actual app)
PETER | 100
MOTHER | 111
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
  TextLoader class, which I don't know how to test the different outcomes yet)

## My approach

After establishing a feature test that laid out how I wanted my app to work, my
approach to this was to first set up behaviours that would always stay the same.
This involved creating something that could detect if any number was prime,
something that could format text into an array of lowercase words, and something
that could actually get text from another file.

Once this was complete, I then built the more subjective operations for the app,
such as sorting the table by word frequency, rendering each array object as a
string and generally formatting the table into a nice display.

I wanted to have one class communicate between the user and the relevant classes
in order to produce the table. This became the UserInterface class, which has
many dependencies injected into it in order to format text and produce a table
of words from it. This approach helps when running feature tests, as you can
simply expect `userInterface.processText` to produce a specific table at the
start of development, and keep extracting responsibilities to different classes
and injecting them into the UserInterface class in order to finally pass it.

I completed this task following TDD and red-green-refactor principles. Each
failing test was followed by an implementation, which then resulted in
refactoring of functions either into other smaller functions or classes.

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

Late in the process, I added functions to detect the biggest word in the text,
determine its length and add extra whitespace to every word to line the table up
and have a better display.

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
* Test logging to the console! I only 50% achieved this through dependency
  injection, and would like to work on this further.
* Sort the table further, so that words with the same count are sorted
  alphabetically
* Refactor each word into an instance of a Word class, as they all have the same
  attributes. I decided not to do this as each word only housed a few key/value
  pairs, but it would make sense to create instances of a Word class if each
  object grew in what they stored (eg more than just its count and "primeness")

## Note on Git Commits

* I was unsure whether this project was going to make it onto GitHub, resulting
  in fewer regular commits than is typical in my projects.
