import React from 'react';
import Keg from './Keg';
// import PropTypes from 'prop-types';

const masterKegList = [
  {
    name: 'Thato and Haley',
    brand: '3A',
    price: 'Firebase won\'t save record. Halp.',
    abv: '8',
    fullKeg: 124
  },
  {
    name: 'Sleater and Kinney',
    brand: '4B',
    price: 'Prop types are throwing an error.',
    abv: '8',
    fullKeg: 124
  },
  {
    name: 'Imani & Jacob',
    brand: '9F',
    price: 'Child component isn\'t rendering.',
    abv: '8',
    fullKeg: 124
  }
];

function KegList() {
  return (
    <React.Fragment>
      <hr/>
      {masterKegList.map((keg, index) =>
        <Keg 
          name = {keg.name}
          brand = {keg.brand} 
          price = {keg.price}
          abv = {keg.abv}
          fullKeg = {124}
          key = {index} />
        )}
    </React.Fragment>
  );
}

// KegList.propTypes = {
//   kegList: PropTypes.array
// };

export default KegList;