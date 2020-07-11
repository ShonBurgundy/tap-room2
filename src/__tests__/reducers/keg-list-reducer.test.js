import kegListReducer from '../../reducers/keg-list-reducer';
import * as c from './../../actions/ActionTypes';

describe('kegListReducer', () =>  {

  let action;

  // FOR DEFAULT STATE TEST
  const kegData = {
    name: 'Batsquatch',
    brand: 'Rogue',
    price: '6',
    abv: '8',
    id: 1
  }

  // FOR DELETE_KEG TEST
  const currentState = {
    1: {name: 'Batsquatch',
    brand: 'Rogue',
    price: '6',
    abv: '8',
    id: 1},
    2: {name: 'Sticky Hands',
    brand: 'Block 15',
    price: '7',
    abv: '9',
    id: 2}
  }

  // DEFAULT STATE TEST
  test('Should return default state if there is no action type passed into reducer', () => {
    expect(kegListReducer({}, {type: null})).toEqual({});
  });

  // ADD_KEG TEST
  test('Should successfully add new keg to masterKegList', () => {
    const {name, brand, price, abv, id} = kegData;
    action = {
      type: c.ADD_KEG,
      name: name,
      brand: brand,
      price: price,
      abv: abv,
      id: id
    };

    expect(kegListReducer({}, action)).toEqual({
      [id] : {
        name: name,
        brand: brand,
        price: price,
        abv: abv,
        id: id
      }
    });
  });

  // DELETE_KEG TEST
  test('Should successfully delete a keg', () => {
    action = {
      type: c.DELETE_KEG,
      id:1
    };

    expect(kegListReducer(currentState, action)).toEqual({
      2: {name: 'Sticky Hands',
      brand: 'Block 15',
      price: '7',
      abv: '9',
      id: 2}
    });
  });

});