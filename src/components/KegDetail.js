import React from 'react';
import PropTypes from 'prop-types';

function KegDetail(props) {
  const { keg, onClickingDelete, onClickingSell } = props;

  return (
    <React.Fragment>
      <h2>Keg Detail</h2>
      <h3>{keg.name}</h3> 
      <h3>Brewed by:{keg.brand}</h3>
      <h4>${keg.price} /pint</h4>
      <h4>{keg.abv}% ABV</h4>
      <h4>Quantity: {keg.quantity} pints</h4>
      <button onClick={ props.onClickingEdit }>Update Keg</button> 
      <button onClick={() => onClickingDelete(keg.id)}>Delete Keg</button>
      <button onClick={() => onClickingSell(keg.id)}>Sell a pint</button>
    </React.Fragment>
  );
}

KegDetail.propTypes = {
  keg: PropTypes.object,
  onClickingDelete: PropTypes.func,
  onClickingEdit: PropTypes.func,
  onClickingSell: PropTypes.func
};

export default KegDetail;