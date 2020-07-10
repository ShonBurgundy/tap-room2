import * as actions from './../../actions';

describe('tap room actions', () => {
  it('deleteKeg should create DELETE_KEG action', () => {
    expect(actions.deleteKeg(1)).toEqual({
      type: 'DELETE_KEG',
      id: 1
    });
  });

  it('toggleFrom should create TOGGLE_FORM action', () => {
    expect(actions.toggleForm()).toEqual({
      type: 'TOGGLE_FORM'
    });
  });

  it('addKeg should create ADD_KEG action', () => {
    expect(actions.addKeg({name: 'Batsquatch', brand: 'Rogue', price: '6', abv: '8', id: 1})).toEqual({
      type: 'ADD_KEG',
      name: 'Batsquatch',
      brand: 'Rogue',
      price: '6',
      abv: '8',
      id: 1
    });
  });

});