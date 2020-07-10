import kegListReducer from '../../reducers/keg-list-reducer';

describe('kegListReducer', () =>  {

  let action;
  const kegData = {
    name: 'Batsquatch',
    brand: 'Rogue',
    price: '6',
    abv: '8',
    quantity: '124',
    id: 1
  }

  test('Should return default state if there is no action type passed into reducer', () => {
    expect(kegListReducer({}, {type: null})).toEqual({});
  });
});