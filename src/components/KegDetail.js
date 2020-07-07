import React from 'react';
import PropTypes from 'prop-types';

function KegDetail(props) {
  const { keg, onClickingSell } = props;

  return (
    <React.Fragment>
      <h2>Keg Detail</h2>
      <h3>{keg.name}</h3> 
      <h3>Brewed by:{keg.brand}</h3>
      <h4>${keg.price} /pint</h4>
      <h4>{keg.abv}% ABV</h4>
      <h4>Quantity: {keg.quantity} pints</h4>
      <button onClick={() => onClickingSell(keg.id)}>Sell a pint</button>
      <hr/>
    </React.Fragment>
    // ADD A BUTTON AND FUNCTION TO DECREMENT QUANTITY, GET QUANTITY TO DISPLAY ON PAGE!
  );
}

KegDetail.propTypes = {
  keg: PropTypes.object,
  onClickingSell: PropTypes.func
};

export default KegDetail;