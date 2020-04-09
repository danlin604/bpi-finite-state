// States
const s0 = `s0`;
const s1 = `s1`;
const s2 = `s2`;

/**
 * Parse a binary string from left to right
 * and return the state.
 * 
 * Edge cases to return undefined because
 * I am uncertain what value they should
 * output. Undefined binary string will
 * result in the getFinalStateOutput to
 * return 'invalid input'.
 * 
 * @param {string} binaryString
 * @returns {string | undefined} state
 */
const getFinalStateFromBinaryString = (binaryString) => {
  let state = s0;

  if (typeof binaryString !== 'string') {
    return undefined
  }

  [...binaryString]
    .forEach(character => {
      state = getStateFromTransitionTable(state, character)
    })

  return state
}

/**
 * Get state from transition table.
 *
 * @param {string} currentState
 * @param {bit} input
 * @returns {string | undefined} state
 */
const getStateFromTransitionTable = (currentState, input) => {
  let resultState;

  switch (currentState) {
    case s0:
      if (input === '0') resultState = s0
      if (input === '1') resultState = s1
      return resultState
    case s1:
      if (input === '0') resultState = s2
      if (input === '1') resultState = s0
      return resultState
    case s2:
      if (input === '0') resultState = s1
      if (input === '1') resultState = s2
      return resultState
    default: return resultState
  }
}

/**
 * Get final state output value.
 * 
 * @param {string} state
 * @returns {integer | string} final state output value
 */
const getFinalStateOutput = (state) => {
  switch (state) {
    case s0: return 0
    case s1: return 1
    case s2: return 2
    default: return 'invalid input'
  }
}

module.exports = {
  s0,
  s1,
  s2,
  getFinalStateOutput,
  getStateFromTransitionTable,
  getFinalStateFromBinaryString
}

// Example usage
// const finalState = getFinalStateFromBinaryString('110')
// const output = getFinalStateOutput(finalState)
// console.log(output)