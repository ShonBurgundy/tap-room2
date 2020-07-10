import kegListReducer from '../../reducers/keg-list-reducer';

describe('kegListReducer', () =>  {

  let action;
  const kegData = {
    name: 'Batsquatch',
    brand: 'Rogue',
    price: '6',
    abv: '8',
    // quantity: '124',
    id: 1
  }

  test('Should return default state if there is no action type passed into reducer', () => {
    expect(kegListReducer({}, {type: null})).toEqual({});
  });

  test('Should successfully add new keg to masterKegList', () => {
    const {name, brand, price, abv, quantity, id} = kegData;
    action = {
      type: 'ADD_KEG',
      name: name,
      brand: brand,
      price: price,
      abv: abv,
      // quantity: quantity,
      id: id
    };

    expect(kegListReducer({}, action)).toEqual({
      [id] : {
        name: name,
        brand: brand,
        price: price,
        abv: abv,
        // quantity: quantity,
        id: id
      }
    });
  });

});