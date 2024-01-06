import { expect } from 'chai';
import { getCompletedTodos, getIncompleteTodos } from '../selectors';

describe('The getCompleteTodos selector', () => {
  it('Returns only completed todos', () => {
    const fakeTodos = [
      {
        todo: '1',
        completed: true,
      },
      {
        todo: '2',
        completed: false,
      },
      {
        todo: '3',
        completed: false,
      },
    ];

    const expected = [
      {
        todo: '1',
        completed: true,
      },
    ];

    const actual = getIncompleteTodos.resultFunc(fakeTodos);

    expect(actual).to.deep.equal(expected);
  });
});
