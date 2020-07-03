import React from 'react';
import PropTypes from 'prop-types';

function KegDetail(props) {
  const { keg } = props;

  return (
    <React.Fragment>
      <h2>Keg Detail</h2>
      <h3>{keg.name} - {keg.brand}</h3>
      <h4>${keg.price} /pint</h4>
      <h4>{keg.abv}% ABV</h4>
      <h4>Quantity: {keg.fullKeg} pints</h4>
      <hr/>
    </React.Fragment>
  );
}

KegDetail.propTypes = {
  keg: PropTypes.object
};

export default KegDetail;