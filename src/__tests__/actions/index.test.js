import * as actions from './../../actions';

describe('tap room actions', () => {
  it('deleteKeg should create DELETE_KEG action', () => {
    expect(actions.deleteTicket(1)).toEqual({
      type: 'DELETE_KEG',
      id: 1
    });
  });
});