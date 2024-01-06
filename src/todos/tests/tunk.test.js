import { expect } from 'chai';
import sinon from 'sinon';
import 'node-fetch';
import fetchMock from 'fetch-mock';
import { loadTodos } from '../thunks.js';

describe('The loadTodos thunk', () => {
  it('Dispatches the correct action in the success scenario', async () => {
    const fakeDispatch = sinon.spy();

    const fakeTodos = [{ todo: '1', todo: '2' }];
    fetchMock.get('https://dummyjson.com/todos', fakeTodos);

    const expectedInFirstAction = { type: 'LOAD_TODOS_IN_PROGRESS' };
    const expectedSecondAction = {
      type: 'LOAD_TODOS_SUCCESS',
      payload: {
        todos: fakeTodos,
      },
    };

    await loadTodos()(fakeDispatch);

    expect(fakeDispatch.getCall(0).args[0]).to.deep.equal(
      expectedInFirstAction
    );
    expect(fakeDispatch.getCall(1).args[0]).to.deep.equal(expectedSecondAction);

    fetchMock.reset();
  });
});
