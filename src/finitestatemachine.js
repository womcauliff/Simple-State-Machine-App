const fsm = {
  zero: {
    '-1': 'exit',
    0: 'one',
    1: 'three',
    2: 'zero',
  },
  one: {
    '-1': 'exit',
    0: 'two',
    1: 'zero',
    2: 'zero',
  },
  two: {
    '-1': 'exit',
    0: 'three',
    1: 'one',
    2: 'zero',
  },
  three: {
    '-1': 'exit',
    0: 'zero',
    1: 'two',
    2: 'zero',
  },
  exit: {},
};

const fsmInputs = ['-1', '0', '1', '2'];

export { fsm, fsmInputs };
