import { expect } from 'chai';
import { todos } from '../reducers.js';

describe('The todos reducer', () => {
  it('Adds a new todo when CREATE_TODO action is received', () => {
    const fakeTodo = { text: 'hello', completed: false };
    const fakeAction = {
      type: 'CREATE_TODO',
      payload: { todo: fakeTodo },
    };
    const originalState = { isLoading: false, data: [] };

    const expected = {
      isLoading: false,
      data: [fakeTodo],
    };

    // returned value
    const actualValue = todos(originalState, fakeAction);

    expect(actualValue).to.deep.equal(expected);
  });
});
