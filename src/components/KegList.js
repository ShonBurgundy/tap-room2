import React from 'react';
import Keg from './Keg';
// import PropTypes from 'prop-types';


function KegList() {
  return (
    <Keg 
      name = "BatSquatch"
      brand = "Rogue" 
      price = "$6.00/pint"
      abv = "8.0% ABV"
      fullKeg = {124} />
  );
}

// KegList.propTypes = {
//   kegList: PropTypes.array
// };

export default KegList;