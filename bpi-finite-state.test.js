const {
  s0,
  s1,
  s2,
  getFinalStateOutput,
  getStateFromTransitionTable,
  getFinalStateFromBinaryString
} = require('./bpi-finite-state')

test('Given s0, the final state output should be 0', () => {
  expect(getFinalStateOutput(s0)).toBe(0)
})

test('Given s1, the final state output should be 1', () => {
  expect(getFinalStateOutput(s1)).toBe(1)
})

test('Given s2, the final state output should be 2', () => {
  expect(getFinalStateOutput(s2)).toBe(2)
})

test('Given an undefined state, the final state output should be invalid input', () => {
  expect(getFinalStateOutput(undefined)).toBe('invalid input')
})

test('Given currentState s0 and input 0, the transition table should return s0', () => {
  expect(getStateFromTransitionTable(s0, '0')).toBe(s0)
})

test('Given currentState s0 and input 1, the transition table should return s1', () => {
  expect(getStateFromTransitionTable(s0, '1')).toBe(s1)
})

test('Given currentState s1 and input 0, the transition table should return s2', () => {
  expect(getStateFromTransitionTable(s1, '0')).toBe(s2)
})

test('Given currentState s1 and input 1, the transition table should return s0', () => {
  expect(getStateFromTransitionTable(s1, '1')).toBe(s0)
})

test('Given currentState s2 and input 0, the transition table should return s1', () => {
  expect(getStateFromTransitionTable(s2, '0')).toBe(s1)
})

test('Given currentState s2 and input 1, the transition table should return s2', () => {
  expect(getStateFromTransitionTable(s2, '1')).toBe(s2)
})

test('Given an invalid currentState, the transition table should return undefined', () => {
  expect(getStateFromTransitionTable(undefined, '0')).toBe(undefined)
})

test('Given an invalid input string, the transition table should return undefined', () => {
  expect(getStateFromTransitionTable(s0, '')).toBe(undefined)
})

test('Given an empty string the state machine should output s0', () => {
  expect(getFinalStateFromBinaryString('')).toBe(s0)
})

test('Given 110 the state machine should output s0', () => {
  expect(getFinalStateFromBinaryString('110')).toBe(s0)
})

test('Given 1010 the state machine should output s1', () => {
  expect(getFinalStateFromBinaryString('1010')).toBe(s1)
})

test('Given an invalid binary string the state machine should output undefined', () => {
  expect(getFinalStateFromBinaryString('1102')).toBe(undefined)
})

test('Given non-string input the state machine should output undefined', () => {
  expect(getFinalStateFromBinaryString(undefined)).toBe(undefined)
})