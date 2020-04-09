# BPI - Finite State Automata

## Using Yarn

Install the packages.

> yarn

Start the application.

> yarn start

Run the unit tests.

> yarn test

Run the unit tests with coverage.

> yarn test:coverage

---

## Using NPM

Install the packages.

> npm install

Start the application.

> npm start

Run the unit tests.

> npm run test

Run the unit tests with coverage.

> npm run test:coverage

---

## To see outputs on console

Please open `bpi-finite-state.js` and uncomment or modify the lines from 86 onward to play around with the application.

---

## Does it work

The program works for test inputs and the example inputs.

## Have test cases been written

Test cases are written Jest under `bpi-finite-state.test.js`.

## How is the code organized

The code is organized naively in a single file, and are split into the following functions:

- getFinalStateOutput
- getStateFromTransitionTable
- getFinalStateFromBinaryString

A reason for splitting code into multiple functions here is to help mean understand basic steps required to reach the example outputs. An additional benefit is that we can now pipe and test each function separately except `getStateFromTransitionTable`.

A possible improvement for `getStateFromTransitionTable` is to make it more generic and accept different *transition tables* functions, and *state enums*.

We can try validating inputs via `decorators` such as `@checkIfStateValid` in order to clean up and output handle input errors in a composable manner.

The states can be cleaned up further by converting it to a enum-like object (perhaps using Object.freeze or TypeScript).

## Is the code extensible

The code is somewhat extensible. You might add additional functions to mutate the output like so:

```
const finalState = getFinalStateFromBinaryString('110')
const out1 = newFn1(finalState)
const out2 = newFn2(out1)
const output = getFinalStateOutput(out2)
```

With additional modification the code might also be piped:

```
pipe(
  getFinalStateFromBinaryString,
  newFn1,
  newFn2,
  getFinalStateOutput
)('110')
```

`getFinalStateFromBinaryString` can be made more extendible and generic by accepting states and transition table functions:

```
getFinalStateFromBinaryString(binaryString, states, () => {}) { ... }
```

## Are edge cases covered

The following edge cases are covered:

- Non-binary strings
- Empty strings
- Undefined input values
- Undefined states

## How are errors handled

Errors result in "invalid input" since errors are related to inputs right now.
